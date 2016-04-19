var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var tsLint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var listFiles = require('gulp-filesize'); /* .pipe(listFiles()) to see files in stream*/
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['build', 'webserver'], function(){
	gulp.watch(['public/styles/**/*.less'], ['styles']);
	gulp.watch(['public/scripts/**/*.ts'], ['scripts']);
});

gulp.task('build', ['libs', 'styles', 'scripts']);

gulp.task('styles', function(){
	del.sync('public/build/*.css');
	gulp.src(['public/styles/**/*.less'])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write())
		.on('error', gutil.log)
		.pipe(gulp.dest('public/build'));
});

gulp.task('scripts', function(){
	del.sync(['public/build/*.js', 'public/build/*.map']);
	tsProject.src()
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject)).js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/build'));
		
		// .pipe(concat('app.js'))
		// .pipe(gulp.dest('public/build'));
		
	// gulp.src(['public/scripts/**/*module.ts', 'public/scripts/**/*.ts', 'typings/browser.d.ts'])
	// 	.pipe(sourcemaps.init())
	// 	.pipe(ts({sortOutput: true, target: 'es5'}))
	// 	.pipe(concat('app.js'))
	// 	.pipe(sourcemaps.write())
	// 	.pipe(gulp.dest('public/build'));
});

gulp.task('libs', function(){
	del.sync(['public/build/libs/*.*']);
	gulp.src(mainBowerFiles())
		.pipe(filter(['**/*.js', '!bootstrap.js']))
		.pipe(concat('libs.js'))
		.pipe(gulp.dest('public/build/libs'));

	gulp.src(mainBowerFiles())
		.pipe(filter(['**/*.less', '**/*.css']))
		.pipe(less())
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('public/build/libs'));
});

gulp.task('webserver', function() {
	gulp.src('public').pipe(webserver({
		port: 8080,
		livereload: false,
		directoryListing: false,
		open: false
	}));
});