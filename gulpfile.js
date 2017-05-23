var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

/**
 * Js
 */
gulp.task('js', function () {
    gulp.src(
        [
            '!assets/js/scripts.js',
            'assets/js/jquery.js',
            'assets/js/script_1.js',
            'assets/js/script_2.js'
            // Add more
        ]
    )
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

/**
 * CSS
 */
gulp.task('css', function () {
    gulp.src([
        '!assets/css/styles.css',
        'assets/css/style_1.css',
        'assets/css/style_2.css'
        // Add more
    ])
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest('assets/css/'));
});

/**
 * Run: gulp watch
 */
gulp.task('watch', function () {
    gulp.watch('./assets/css/*.css', ['css']);
    gulp.watch('./assets/js/*.js', ['js']);
});

