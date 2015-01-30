var gulp = require('gulp');
var process = require('process');
var exec = require('child_process').exec;

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    rewriteCSS = require('gulp-rewrite-css'),
    livereload = require('gulp-livereload');

var version = '1.0.0';

var minifyOpts = {};

var imagesOpts = {
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
};

var sassOpts = {
    errLogToConsole: true,
    includePaths: [
        '/Library/Ruby/Gems/2.0.0/gems/compass-0.12.6/frameworks/compass/stylesheets',
        'vendor/foundation/scss'
    ]
};

var dst = {
    js: 'dist',
    css: 'dist',
    images: 'dist/images',
    sass: './css'
};

var paths = {
    js: [
        'js/skin.js'
    ],
    images: [
        'images/**/*'
    ],
    sass: 'scss/*',
    css: [
        'css/**/*.css'
    ]
};

gulp.task('js', function () {
    return gulp.src(paths.js)
        // .pipe(uglify())
        .pipe(gulp.dest(dst.js))
        .pipe(livereload());
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(changed(dst.images))
        .pipe(imagemin(imagesOpts))
        .pipe(gulp.dest(dst.images));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass(sassOpts))
        .pipe(gulp.dest(dst.sass));
});

gulp.task('css', ['sass'], function () {
    return gulp.src(paths.css)
        .pipe(rewriteCSS({
            destination: dst.css
        }))
        .pipe(gulp.dest(dst.sass))
        .pipe(minifyCSS(minifyOpts))
        .pipe(gulp.dest(dst.css))
        .pipe(livereload());
});

gulp.task('watch', ['default'], function () {
    livereload.listen();

    gulp.watch(paths.js, ['js']);
    // gulp.watch(paths.images, ['images']);
    gulp.watch(paths.sass, ['css']);
});

gulp.task('clean', function () {
    exec('rm -rf dist/*; rm -rf css/*', function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

    /*
    gulp.src(['dist/*'], {
        read: false
    }).pipe(clean({
        force: true
    }));
    */
});

gulp.task('default', ['clean'], function () {
    return gulp.start('js', 'css', 'images');
});
