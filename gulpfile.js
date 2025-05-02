const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
    scss: './src/styles/*.scss',
    css: './dist/css/'
}

function styles() {
    return gulp.src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) 
    .pipe(cleanCss()) 
    .pipe(rename({ suffix: '.min' })) 
    .pipe(gulp.dest(paths.css));
}

function watchFiles() {
    gulp.watch(paths.scss, gulp.series(styles)); 
}

exports.default = styles;
exports.watch = watchFiles;