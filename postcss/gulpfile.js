/**
 * Entry point file for gulp demo
 */
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
// const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', () => {
  const processors = [
    autoprefixer({
      browsers: 'last 2 version'
    }),
    cssnano
  ];

  return gulp
    .src('styles.scss')
    .pipe(sourcemaps.init())
    // .pipe(stylus())         // CSS preprocessor, file extension as .styl
    .pipe(sass())              // CSS preprocessor
    .pipe(postcss(processors)) // postcss
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', () => {
  gulp.watch('**/*.scss', gulp.series('styles'));
});