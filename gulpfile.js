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
        cleanCSS    = require('gulp-clean-css'),
        debowerify  = require('debowerify'),
        exec        = require('child_process').exec,
        flatten     = require('gulp-flatten'),
        filter      = require('gulp-filter'),
        gulp        = require('gulp'),
        imagemin    = require('gulp-imagemin'),
        rename      = require('gulp-rename'),
        sass        = require('gulp-sass'),
        source      = require('vinyl-source-stream'),
        sourceMaps  = require('gulp-sourcemaps'),
        s3          = require('gulp-s3-upload')(s3config),
        uglify      = require('gulp-uglify');

const imgFilter   = filter('**/*.{png,jpg,gif,jpeg}'),
      fontFilter  = filter('**/*.{eot,svg,ttf,woff,woff2}'),
      dataFilter  = filter('**/*.{json,yml,yaml,csv,toml}'),
      cssFilter   = filter('**/*.min.css'),
      styleFilter = filter('**/*.{css,scss}');

var config = {
    js: {
        src:        './eris.js',
        srcDir:     './source/js/',
        watchDir:   './source/js/**/*',
        mapDir:     './maps/',
        outputDir:  './static/js',
        outputFile: './eris.js'
    },
    css: {
        srcs:       './source/css/**/*',
        watchDir:   './source/css/**/*',
        vendorDirs: [
                      './source/assets/css/*',
                      './source/assets/**/css/*',
                      './source/assets/**/build/*',
                      './node_modules/bootstrap/dist/css/*',
                    ],
        mapDir:     './maps/',
        outputDir:  './static/css/',
        outputFile: './eris.css'
    },
    img: {
        srcs:      [
                      './source/images/**/*',
                      './content/blog/images/**/*'
                   ],
        watchDir:  './source/images/**/*',
        outputDir: './static/images/'
    },
    data: {
        srcs:      [
                      './data/'
                   ],
        outputDir: './static/'
    },
    fonts: {
        srcs:      [
                      './source/fonts/*',
                      './source/assets/**/fonts/*',
                      './source/assets/**/font/*'
                   ],
        outputDir: './static/fonts'
    },
    site: {
        cleanDirs: [
                      './public/home_overview',
                      './public/home_uses'
                   ],
        outputDir: './public/**/*',
        outputDirRaw: './public',
        devURL:   'localhost',
        stagURL:  'staging.monax.io',
        prodURL:  'monax.io'
    }
};

function buildHTML() {
  return gulp.src(config.site.cleanDirs, {read: false})
    .pipe(clean());
}

function buildJS() {
  return browserify({
      entries: [config.js.src],
      basedir: config.js.srcDir,
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

function prepSyntax() {
  return gulp.src('./node_modules/prismjs/themes/prism-okaidia.css')
    .pipe(styleFilter)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(flatten())
    .pipe(gulp.dest(config.css.outputDir))
}

function prepCSS() {
  return gulp.src(config.css.vendorDirs)
    .pipe(cssFilter)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(flatten())
    .pipe(gulp.dest(config.css.outputDir))
}

function buildCSS() {
  return gulp.src(config.css.srcs)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(config.css.outputDir))
}

function buildImgs(){
  return gulp.src(config.img.srcs)
    .pipe(imgFilter)
    // .pipe(imagemin({
    //   optimizationLevel: 5,
    //   progressive: true,
    //   interlaced: true
    // }))
    .pipe(gulp.dest(config.img.outputDir));
}

function buildData() {
  return gulp.src(config.data.srcs)
    .pipe(dataFilter)
    .pipe(gulp.dest(config.data.outputDir))
}

function buildFonts() {
  return gulp.src(config.fonts.srcs)
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(config.fonts.outputDir))
};

function buildSite() {
  var cmd = "hugo --destination " + config.site.outputDirRaw
  if (argv.production) {
    cmd = cmd + " --baseURL " + config.site.prodURL
  } else if (argv.staging) {
    cmd = cmd + " --baseURL " + config.site.stagURL
  } else {
    cmd = cmd + " --buildDrafts --buildFuture --baseURL " + config.site.devURL
  }
  console.log("Calling command: " + cmd)
  exec(cmd, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  })
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

gulp.task('prep-syn', prepSyntax)
gulp.task('prep-css', prepCSS)
gulp.task('build-css', ['prep-syn', 'prep-css'], buildCSS)
gulp.task('build-js', buildJS)
gulp.task('build-imgs', buildImgs)
gulp.task('build-data', buildData)
gulp.task('build-fonts', buildFonts)
gulp.task('build-html', buildHTML)
gulp.task('build-site', ['build-css', 'build-js', 'build-imgs', 'build-data', 'build-fonts', 'build-html'], buildSite())

gulp.task('watch', ['build-css', 'build-js'], function() {
  gulp.watch(config.js.watchDir, delayed(buildJS));
  gulp.watch(config.css.watchDir, delayed(buildCSS));
})

// build for production
gulp.task('build', ['build-site'])
gulp.task('test', testSite)
gulp.task('deploy', deploySite)

// default task is build
gulp.task('default', ['build'])

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

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}