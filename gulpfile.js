const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const templateCache = require('gulp-angular-templatecache');
const autoprefixer = require('gulp-autoprefixer');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const connect = require('gulp-connect');
const insert = require('gulp-insert');
const config = {
    dist: 'dist',
    src: {
        ts: ['src/**/*.ts'],
        less: ['src/**/*.less'],
        templates: ['src/**/*.html']
    },
    libs: {
        js: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/lodash/lodash.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/almond/almond.js'
        ],
        styles: [
            'node_modules/bootstrap/less/bootstrap.less'
        ]
    },
    autoprefixerOptions: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera >= 12.1', 'ie >= 9'],
        cascade: false,
        remove: false
    }
};

gulp.task('default', ['build'], function () {
    gulp.watch(config.src.ts, ['ts']);
    gulp.watch(config.src.less, ['less']);
    gulp.watch(config.src.templates, ['templates']);
    connect.server({ debug: true });
});

gulp.task('build', ['ts', 'less', 'templates', 'libs']);

gulp.task('ts', (done) => {
    let tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(insert.append(`require('main');`)).pipe(gulp.dest(config.dist));
});

gulp.task('less', () => {
    return gulp.src('src/styles.less')
        .pipe(less())
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('templates', (done) => {
    return gulp.src(config.src.templates)
        .pipe(templateCache({root: 'src/', standalone: true}))
        .pipe(gulp.dest(config.dist));
});

gulp.task('libs', function () {
    gulp.src(config.libs.js).pipe(concat('libs.js')).pipe(gulp.dest(config.dist));
    gulp.src(config.libs.styles).pipe(less()).pipe(concat('libs.css')).pipe(gulp.dest(config.dist));
});