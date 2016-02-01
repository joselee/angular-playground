var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var less = require("gulp-less");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var mainBowerFiles = require("main-bower-files");
var filter = require("gulp-filter");
var listFiles = require("gulp-filesize"); /* .pipe(listFiles()) to see files in stream*/

gulp.task("default", ["styles", "scripts"], function(){
	gulp.watch(["public/styles/**/*.less"], ["styles"]);
	gulp.watch(["public/scripts/**/*.ts"], ["scripts"]);
});

gulp.task("build", ["styles", "scripts"]);

gulp.task("styles", function(){
	del.sync("public/build/*.css");

	var styles = gulp.src(["public/styles/**/*.less"])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat("styles.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/build"));
});

gulp.task("scripts", function(){
	del.sync(["public/build/*.js"]);

	var app = gulp.src(["public/scripts/**/*module.ts", "public/scripts/**/*.ts", "typings/*.d.ts"])
		.pipe(sourcemaps.init())
		.pipe(ts({sortOutput: true, target: "es5"}))
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/build"));
});

gulp.task("vendor", function(){
	del.sync(["public/build/vendor/*.*"]);
	var lib = gulp.src(mainBowerFiles())
		.pipe(filter(["**/*.js", "!bootstrap.js"]))
		.pipe(concat("libs.js"))
		.pipe(gulp.dest("public/build/vendor"));

	var vendorStyles = gulp.src(mainBowerFiles())
		.pipe(filter(["**/*.less", "**/*.css"]))
		.pipe(less())
		.pipe(concat("vendorStyles.css"))
		.pipe(gulp.dest("public/build/vendor"));
});