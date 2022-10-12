/**
 * Entry point file for gulp demo
 */
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

gulp.task('styles', () => {
  const plugins = [
    cssnano()
  ];

  return gulp
    .src('styles.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', () => {
  gulp.watch('**/*.css', gulp.series('styles'));
});