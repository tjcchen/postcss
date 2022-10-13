/**
 * Entry point file for gulp demo
 */
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
// const stylus = require('gulp-stylus');

gulp.task('styles', () => {
  const processors = [
    autoprefixer({
      browsers: 'last 1 version'
    }),
    // cssnano
  ];

  return gulp
    .src('styles.styl')
    // .pipe(stylus())         // CSS preprocessor
    .pipe(sass())              // CSS preprocessor
    .pipe(postcss(processors)) // postcss
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', () => {
  gulp.watch('**/*.styl', gulp.series('styles'));
});