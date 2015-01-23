var bowerFiles, coffee, concat, gulp, html2js, ngmin, paths, sourcemaps, uglify, webserver;

gulp = require('gulp');
coffee = require('gulp-coffee');
concat = require('gulp-concat');
html2js = require('gulp-ng-html2js');
sourcemaps = require('gulp-sourcemaps');
bowerFiles = require('main-bower-files');
uglify = require('gulp-uglify');
ngmin = require('gulp-ngmin');
webserver = require('gulp-webserver');

paths = {
  templatesSrc: 'source/javascripts/**/*.html',
  appSrc: ['source/javascripts/modules.js', 'source/javascripts/**/*.js'],
  libSrc: 'bower_components',
  dist: 'dist'
};

gulp.task('compile-templates', function() {
  return gulp.src(paths.templatesSrc)
      .pipe(html2js({
        moduleName: 'templates',
        declareModule: false
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('build-libs', function() {
  return gulp.src(bowerFiles())
      .pipe(concat('libs.js'))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('build-src', function() {
  return gulp.src(paths.appSrc)
      .pipe(concat('app.js'))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
  gulp.watch(paths.templatesSrc, ['compile-templates']);
  gulp.watch(paths.libSrc, ['build-libs']);
  return gulp.watch(paths.appSrc, ['build-src']);
});

gulp.task('build', ['build-libs', 'compile-templates', 'build-src']);

gulp.task('server', function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true,
            directoryListing: true
        }))
});
