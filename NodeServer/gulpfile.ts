"use strict";
const gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    del = require("del"),
    runSequence = require('run-sequence');

gulp.task('clean', (cb) => {
    return del(['dist/*'], cb);
});

gulp.task('build', function () {
    var tsProject = tsc.createProject('tsconfig.json');
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function (callback) {
    runSequence('clean', 'build', callback);
});