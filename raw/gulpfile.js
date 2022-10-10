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
            replace: true
        })
    ];

    return gulp.src(['src/**/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('css'));