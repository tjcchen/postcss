/**
 * Entry point file for gulp demo
 */
const gulp = require('gulp');

gulp.task('styles', () => {
  return gulp
    .src('styles.css')
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', () => {
  gulp.watch('**/*.css', ['styles']);
});