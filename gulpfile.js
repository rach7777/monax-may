"use strict";

var s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'demand-deploy-oursitestating'
}

var argv            = require('yargs').argv,
        babelify    = require('babelify'),
        buffer      = require('vinyl-buffer'),
        browserify  = require('browserify'),
        clean       = require('gulp-clean'),
        config      = require('./source/data/site_builder.json'),
        debowerify  = require('debowerify'),
        exec        = require('child_process').exec,
        flatten     = require('gulp-flatten'),
        filter      = require('gulp-filter'),
        gulp        = require('gulp'),
        imagemin    = require('gulp-imagemin'),
        lunr        = require('./source/js/lunr-maker.js'),
        rename      = require('gulp-rename'),
        sass        = require('gulp-sass'),
        source      = require('vinyl-source-stream'),
        sourceMaps  = require('gulp-sourcemaps'),
        s3          = require('gulp-s3-upload')(s3config),
        uglify      = require('gulp-uglify');

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
  var cmd = "hugo --destination " + config.site.outputDirRaw
  if (argv.production) {
    cmd = cmd + " --baseURL " + config.site.prodURL
  } else if (argv.staging) {
    cmd = cmd + " --baseURL " + config.site.stagURL
  } else {
    cmd = cmd + " --buildDrafts --buildFuture --baseURL " + config.site.devURL
  };
  exec(cmd, function (err, stdout, stderr) {
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

function testSite() {
  console.log('tested')
  return
}

function deploySite() {
  return gulp.src(config.site.outputDir, {buffer:false})
    .pipe(s3({
      Bucket: s3config.bucket,
    }))
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
