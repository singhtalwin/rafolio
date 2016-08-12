var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

var isProd = argv.env === 'prod';
var config = {
	images: ['assets/images/**/*'],
	scripts: ['src/scripts/**/*.js'],
	styles: [
		'bower_components/normalize-css/normalize.css',
		'src/styles/**/*.css'
	]
};

gulp.task('clean-scripts', function() {
	return del(['build/build.js']);
});

gulp.task('clean-styles', function() {
	return del(['build/build.css']);
});

gulp.task('scripts', ['clean-scripts'], function(){
	return gulp.src(config.scripts)
		.pipe(babel())
		.pipe(gulpif(isProd, uglify()))
		.pipe(concat('build.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('styles', ['clean-styles'], function(){
	return gulp.src(config.styles)
		.pipe(concat('build.css'))
		.pipe(gulpif(isProd, cleanCss()))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch(config.scripts, ['scripts']);
	gulp.watch(config.styles, ['styles']);
});

gulp.task('dev', ['scripts', 'styles', 'watch']);
gulp.task('prod', ['scripts', 'styles']);
gulp.task('default', ['dev']);