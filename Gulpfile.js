/**
 * Created by admin on 2015/1/20.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

    gulp.task("default", function () {
        gulp.src('css/*.less')
            .pipe(watch('css/*.less'))
            .pipe(less())
            .pipe(gulp.dest('css'));
    });