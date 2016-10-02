"use strict";

var s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'demand-deploy-oursitestating'
}

var argv            = require('yargs').argv,
        async       = require('async'),
        babelify    = require('babelify'),
        buffer      = require('vinyl-buffer'),
        browserify  = require('browserify'),
        clean       = require('gulp-clean'),
        config      = require('./source/data/site_builder.json'),
        debowerify  = require('debowerify'),
        exec        = require('child_process').exec,
        flatten     = require('gulp-flatten'),
        filter      = require('gulp-filter'),
        fs          = require('fs'),
        git         = require('gulp-git'),
        gulp        = require('gulp'),
        gutil       = require('gulp-util'),
        imagemin    = require('gulp-imagemin'),
        lunr        = require('./source/js/lunr-maker.js'),
        path        = require('path'),
        rename      = require('gulp-rename'),
        sass        = require('gulp-sass'),
        source      = require('vinyl-source-stream'),
        sourceMaps  = require('gulp-sourcemaps'),
        s3          = require('gulp-s3-upload')(s3config),
        uglify      = require('gulp-uglify');

/*
  ------------------------------------------------------------------------------

  Build Jobs & Helpers

  ------------------------------------------------------------------------------
*/
function buildJS() {
  return browserify({
      basedir: config.js.srcDir,
      entries: [config.js.src],
      debug: true,
    })
    .transform(babelify, { presets: [ 'es2015' ] })  // use bable to properly compile
    .transform(debowerify, { preferNPM: true })      // find bower installed files
    .bundle()                                        // Start bundle
    .pipe(source(config.js.src))                     // Entry point
    .pipe(buffer())                                  // Convert to gulp pipeline
    .pipe(sourceMaps.init())                         // Strip inline source maps
    .pipe(uglify())                                  // apply uglifier
    .pipe(sourceMaps.write(config.js.mapDir))        // Save source maps to their own dir
    .pipe(gulp.dest(config.js.outputDir))            // Save 'bundle' to build/
}

function buildCSS() {
  return gulp.src(config.css.srcs)
    .pipe(sourceMaps.init())
    .pipe(sass({
      includePaths: config.css.includePaths,
      outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(sourceMaps.write(config.css.mapDir))
    .pipe(gulp.dest(config.css.outputDir))
}

function buildImgs(){
  return gulp.src(config.img.srcs)
    .pipe(filter(config.imgFilter))
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true,
    }))
    .pipe(gulp.dest(config.img.outputDir));
}

function buildIcons() {
  return gulp.src(config.icons.srcs)
    .pipe(flatten())
    .pipe(gulp.dest(config.icons.outputDir))
}

function buildData() {
  return gulp.src(config.data.srcs)
    .pipe(filter(config.dataFilter))
    .pipe(flatten())
    .pipe(gulp.dest(config.data.outputDir))
}

function buildFonts() {
  return gulp.src(config.fonts.srcs)
    .pipe(filter(config.fontFilter))
    .pipe(flatten())
    .pipe(gulp.dest(config.fonts.outputDir))
};

function buildIndex() {
  return gulp.src(config.site.indexDirs)
    .pipe(filter(config.contentFilter))
    .pipe(lunr({
      baseDir: config.site.contentDir,
      output: config.site.indexDir,
      team: config.site.teamFile,
    }))
}

function buildSite() {
  var cmd = "hugo --destination " + config.site.buildDirRaw
  if (argv.production) {
    cmd = cmd + " --baseURL " + config.site.prodURL
  } else if (argv.staging) {
    cmd = cmd + " --baseURL " + config.site.stagURL
  } else {
    cmd = cmd + " --buildDrafts --buildFuture --baseURL " + config.site.devURL
  };
  exec(cmd, function (err, stdout, stderr) {
    if (err) throw err;
    console.log("Called command: " + cmd)
    if (stderr != "") {
      console.log(stderr.trim());
    } else {
      console.log(stdout.trim());
    }
  });
  return gulp.src(config.site.slightCleanDirs, {read: false})
    .pipe(clean())
}

/*
  ------------------------------------------------------------------------------

  Test Jobs & Helpers

  ------------------------------------------------------------------------------
*/
function testSite() {
  console.log('tested')
  return
}

/*
  ------------------------------------------------------------------------------

  Deploy Jobs & Helpers

  ------------------------------------------------------------------------------
*/
function initLocalRepository(next) {
  gutil.log("Initializing local repository.")
  git.init(function (err) {
    if (err) throw err;
    next();
  })
}

function setupProductionRemote(next) {
  var vhost=config.site.stagURLRaw;
  if (argv.production) {
    vhost=config.site.prodURLRaw;
  }
  gutil.log("Adding production remote for site: " + vhost)
  git.addRemote('origin', 'git+ssh://' + config.site.prodMachUser + '@' + config.site.prodMachHost + '/' + vhost + '.git', function (err) {
    // if (err) throw err; // no reason to reap this error
    next();
  })
}

function pullPrevVersionFromProduction(next) {
  gutil.log("Pulling from production.")
  git.pull('origin', 'master', function (err) {
    if (err) throw err;
    next();
  })
}

function moveBuildToDeply(next) {
  gutil.log("Moving in the built site.")
  var stream = gulp.src(path.join('..', config.site.buildDir))
    .pipe(gulp.dest('htdocs/'));
  stream.on('end', function() {
    next();
  });
  stream.on('error', function(err) {
    throw err;
  });
}

function moveHtAccess(next) {
  gutil.log("Moving in .htaccess file.")
  var stream = gulp.src('../.htaccess')
    .pipe(gulp.dest('htdocs/'));
  stream.on('end', function() {
    next();
  });
  stream.on('error', function(err) {
    throw err;
  });
}

function addChanges(next) {
  gutil.log("Adding all files to git.")
  var stream = gulp.src('./*')
    .pipe(git.add({args: '-A'}));
  stream.on('end', function() {
    next();
  });
  stream.on('error', function(err) {
    throw err;
  });
}

function commitChanges(next) {
  gutil.log("Committing changes.")
  var cmd="git status --porcelain"
  exec(cmd, function (err, stdout, stderr) {
    if (err) throw err;
    gutil.log("Called command: " + cmd)
    if (stdout == "") {
      next();
    } else {
      var message='Site updated at ' + Date.now()
      var stream = gulp.src('./*')
        .pipe(git.commit(message));
      stream.on('end', function() {
        next();
      });
      stream.on('error', function(err) {
        throw err;
      });
    }
  })
}

function pushToProduction(next) {
  gutil.log("Pushing to production.")
  git.push('origin', 'master', function (err) {
    if (err) throw err;
    next();
  })
}

function deployProduction(next) {
  var vhost=config.site.stagURLRaw;
  if (argv.production) {
    gutil.log("Deploying on production server.")
    vhost=config.site.prodURLRaw;
  } else {
    gutil.log("Deploying on staging server.")
  }
  var cmd="ssh " + config.site.prodMachUser + "@" + config.site.prodMachHost + " 'deploy " + vhost + ".git master'"
  exec(cmd, function (err, stdout, stderr) {
    if (err) throw err;
    gutil.log("Called command: " + cmd)
    if (stderr != "") {
      gutil.log(stderr.trim());
    } else {
      gutil.log(stdout.trim());
    }
  })
}

function deploySite() {
  try {
    process.chdir(config.site.deployDir);
  }
  catch (err) {
    fs.mkdir(config.site.deployDir, function (err) {
      if (err) throw err;
      process.chdir(config.site.deployDir);
    });
  }
  return async.waterfall([
      initLocalRepository,
      setupProductionRemote,
      pullPrevVersionFromProduction,
      moveBuildToDeply,
      moveHtAccess,
      addChanges,
      commitChanges,
      pushToProduction,
      deployProduction
  ], function (err) {
      if (err) throw err;
  })
}

function cleanSite() {
  return gulp.src(config.site.cleanDirs, {read: false})
    .pipe(clean())
}

// helper tasks
gulp.task('build-css', buildCSS)
gulp.task('build-js', buildJS)
gulp.task('build-imgs', buildImgs)
gulp.task('build-icons', buildIcons)
gulp.task('build-fonts', buildFonts)
gulp.task('build-data', buildData)
gulp.task('build-index', ['build-data'], buildIndex)
gulp.task('build-arts', ['build-css', 'build-js', 'build-imgs', 'build-icons', 'build-fonts', 'build-index'])
gulp.task('build-site', ['build-arts'], buildSite)

// watchers -- for deving
gulp.task('watch', ['build-arts'], function() {
  gulp.watch(config.js.watchDir, delayed(buildJS));
  gulp.watch(config.css.watchDir, delayed(buildCSS));
  gulp.watch(config.img.watchDir, delayed(buildImgs));
  gulp.watch(config.data.watchDir, delayed(buildData));
})

gulp.task('watch-no-build', function() {
  gulp.watch(config.js.watchDir, delayed(buildJS));
  gulp.watch(config.css.watchDir, delayed(buildCSS));
  gulp.watch(config.img.watchDir, delayed(buildImgs));
  gulp.watch(config.data.watchDir, delayed(buildData));
})

// build for production
gulp.task('build', ['build-site'])
gulp.task('test', testSite)
gulp.task('deploy', deploySite)

// cleanup
gulp.task('clean', cleanSite)

function delayed(fn, time) {
  var t
  return function() {
    var _this = this
    var args = arguments
    try {
      clearTimeout(t)
    } catch (e) {}
    t = setTimeout(function() {
      fn.apply(_this, args)
    }, time || 50)
  }
}
