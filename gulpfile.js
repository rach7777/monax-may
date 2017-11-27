"use strict";

var     babelify    = require('babelify'),
        buffer      = require('vinyl-buffer'),
        browserify  = require('browserify'),
        clean       = require('gulp-clean'),
        config      = require('./source/data/site_builder.json'),
        debowerify  = require('debowerify'),
        exec        = require('child_process').exec,
        flatten     = require('gulp-flatten'),
        filter      = require('gulp-filter'),
        fs          = require('fs'),
        gulp        = require('gulp'),
        imagemin    = require('gulp-imagemin'),
        lunr        = require('./source/js/lunr-maker.js'),
        path        = require('path'),
        sass        = require('gulp-sass'),
        source      = require('vinyl-source-stream'),
        sourceMaps  = require('gulp-sourcemaps'),
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

/*
  ------------------------------------------------------------------------------

  Test Jobs & Helpers

  ------------------------------------------------------------------------------
*/
function cleanSite() {
  return gulp.src(config.site.cleanDirs, {read: false})
    .pipe(clean())
}

// helper tasks
gulp.task('build-js', buildJS)
gulp.task('build-css', buildCSS)
gulp.task('build-imgs', buildImgs)
gulp.task('build-data', buildData)
gulp.task('build-fonts', buildFonts)
gulp.task('build-index', ['build-data'], buildIndex)
gulp.task('build-arts', ['build-css', 'build-js', 'build-imgs', 'build-fonts', 'build-index'])

// build for production
gulp.task('build', ['build-arts'])

// cleanup
gulp.task('clean', cleanSite)
