var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css')

//var exec = require('child_process').exec;
//var sys = require('sys');

// Where do you store your Sass files?
var lessDir = 'public/less';

// Which directory should LESS compile to?
var targetCSSDir = 'public/css';


// Which directory should CoffeeScript compile to?
var targetJSDir = 'public/js';


// Compile Sass, autoprefix CSS3,
// and save to target CSS directory
gulp.task('css', function () {
    return gulp.src(lessDir + '/*.less')
        .pipe(less({ style: 'compressed' }).on('error', gutil.log))
        //.pipe(autoprefix('last 10 version'))
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify('CSS minified'))
});


// Run all PHPUnit tests
//gulp.task('phpunit', function() {
//    exec('phpunit', function(error, stdout) {
//        sys.puts(stdout);
//    });
//});

// Keep an eye on Sass, Coffee, and PHP files for changes...
gulp.task('watch', function () {
    gulp.watch(lessDir + '/*.less', ['css']);
    //gulp.watch('app/**/*.php', ['phpunit']);
});

// What tasks does running gulp trigger?
gulp.task('default', ['css', 'watch']);