"use strict";

var babelify      = require('babelify'),
      BatchStream = require('batch-stream2'),
      browserify  = require('browserify'),
      buffer      = require('vinyl-buffer'),
      gulp        = require('gulp'),
      gutil       = require('gulp-util'),
      livereload  = require('gulp-livereload'),
      merge       = require('merge'),
      plugins     = require('gulp-load-plugins')(),
      rename      = require('gulp-rename'),
      source      = require('vinyl-source-stream'),
      sourceMaps  = require('gulp-sourcemaps'),
      imagemin    = require('gulp-imagemin'),
      flatten     = require('gulp-flatten'),
      uglify      = require('gulp-uglify'),
      filter      = require('gulp-filter'),
      cleanCSS    = require('gulp-clean-css'),
      s3          = require("gulp-s3"),
      debowerify  = require('debowerify');

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
                      './node_modules/owl.carousel/dist/assets/owl.carousel*',
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
        outputDir: './public/**'
    }
};

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
    .pipe(rename(config.js.outputFile))              // Rename output
    .pipe(sourceMaps.init())                         // Strip inline source maps
    .pipe(uglify())                                  // apply uglifier
    .pipe(sourceMaps.write(config.js.mapDir))        // Save source maps to their own dir
    .pipe(gulp.dest(config.js.outputDir))            // Save 'bundle' to build/
    .pipe(livereload());                             // Reload browser if relevant
}

function prepSyntax() {
  return gulp.src('./node_modules/prismjs/themes/prism-okaidia.css')
    .pipe(styleFilter)
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'compressed',
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(flatten())
    .pipe(gulp.dest(config.css.outputDir))
}

function prepCSS() {
  return gulp.src(config.css.vendorDirs)
    .pipe(cssFilter)
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'compressed',
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(flatten())
    .pipe(gulp.dest(config.css.outputDir))
}

function buildCSS() {
  return gulp.src(config.css.srcs)
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'compressed',
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(config.css.outputDir))
    .pipe(livereload());
}

function buildImgs(){
  return gulp.src(config.img.srcs)
    .pipe(imgFilter)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
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

function deploySite() {
  var aws = {
    "key":    process.env.AWS_ACCESS_KEY_ID,
    "secret": process.env.AWS_SECRET_ACCESS_KEY,
    "bucket": process.env.AWS_DEFAULT_REGION,
    "region": process.env.AWS_BUCKET_NAME
  }
  console.log(aws)
  // return gulp.src(config.site.outputDir, {read: false})
  //   .pipe(s3(aws, {
  //       headers: {'Cache-Control': 'max-age=315360000, no-transform, public'}
  //   }));
  return
}

//
// live reload can emit changes only when at least one build is done
//
gulp.task('live', ['watch'], function() {
  var server = plugins.livereload()
  // in case a lot of files changed during a short time
  var batch = new BatchStream({ timeout: 50 })
  gulp.watch(dist.all).on('change', function change(file) {
    // clear directories
    var urlpath = file.path.replace(__dirname + '/static', '')
    // also clear the tailing index.html
    // so we can notify livereload.js the right path of files changed
    urlpath = urlpath.replace('/index.html', '/')
    batch.write(urlpath)
  })
  batch.on('data', function(files) {
    server.changed(files.join(','))
  })
})

gulp.task('deploy', deploySite)

gulp.task('watch', ['build-css', 'build-js', 'build-imgs', 'build-data', 'build-fonts'], function() {
  gulp.watch(config.js.watchDir, delayed(buildJS));
  gulp.watch(config.css.watchDir, delayed(buildCSS));
  gulp.watch(config.img.watchDir, delayed(buildImgs));
})

gulp.task('prep-syn', prepSyntax)
gulp.task('prep-css', prepCSS)
gulp.task('build-css', ['prep-syn', 'prep-css'], buildCSS)
gulp.task('build-js', buildJS)
gulp.task('build-imgs', buildImgs)
gulp.task('build-data', buildData)
gulp.task('build-fonts', buildFonts)

// build for production
gulp.task('build', ['build-css', 'build-js', 'build-imgs', 'build-data', 'build-fonts'])

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