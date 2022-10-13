/**
 * Entry point file for gulp demo
 */
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'))

gulp.task('styles', () => {
  const processors = [
    autoprefixer({
      browsers: 'last 1 version'
    }),
    // cssnano
  ];

  return gulp
    .src('styles.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', () => {
  gulp.watch('**/*.scss', gulp.series('styles'));
});