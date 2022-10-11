/**
 * Entry point file of gulp
 */
 const gulp = require('gulp');
 const postcss = require('gulp-postcss');
 const autoprefixer = require('autoprefixer');
 const pxtorem = require('postcss-pxtorem');
 
 gulp.task('css', () => {
     const processors = [
         autoprefixer({
             browsers: 'last 1 version'
         }),
         pxtorem({
             replace: false
         })
     ];
 
     return gulp.src(['build/static/css/**/*.css'])
         .pipe(postcss(processors))
         .pipe(gulp.dest('build/static/css'));
 });
 
 gulp.task('default', gulp.series('css'));