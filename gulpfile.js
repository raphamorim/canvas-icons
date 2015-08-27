var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');
 
gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('./canvasIcons.js'))
        .pipe(babel())
        .pipe(gulp.dest('./'))
        .pipe(rename('canvasIcons.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build'], function(){
    console.log('default task done!')
});