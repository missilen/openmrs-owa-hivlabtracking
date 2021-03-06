'use strict';
var gulp = require('gulp');
var zip = require('gulp-zip');

var LOCAL_OWA_FOLDER = '/Users/trungnguyen/Downloads/openmrs-standalone-2.5_2/appdata/owa/'; // REPLACE THIS

var THIS_APP_NAME = 'hivviralapp'; // REPLACE THIS

var sources = ['manifest.webapp', '**/*.html', '**/*.js', '**/*.css', '**/*.png',
    '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2',
    '!node_modules', '!node_modules/**','!bower_components/**', '!gulpfile.js'];

gulp.task('default', function () {
    return gulp.src(sources)
        .pipe(zip(THIS_APP_NAME + '.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy-local', function () {
    return gulp.src(sources)
        .pipe(gulp.dest(LOCAL_OWA_FOLDER + THIS_APP_NAME));
});