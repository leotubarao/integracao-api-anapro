const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const uglify = require( 'gulp-uglify-es' ).default;
const concat = require( 'gulp-concat' );
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const browserSync = require( 'browser-sync' ).create();

const isProductionEnviroment = gutil.env.env === 'prod';

function compilaSass() {
    return gulp
    .src( 'dist/sass/**/*.scss' )
    .pipe( sass( {
        outputStyle: isProductionEnviroment ? 'compressed' : 'expanded' // expanded / nested / compact / compressed
    } ) )
    .pipe( autoprefixer( {
        browsers:['last 2 versions'],
        cascade: false
    } ) )
	.pipe( gulp.dest( 'assets/styles/' ) )
	.pipe( browserSync.stream() )
}

gulp.task( 'sass', compilaSass );

function gulpJSModules() {
    return gulp
    .src( [
        'dist/scripts/**/*.js'
    ] )
    .pipe( concat( 'main.min.js' ) )
    .pipe( babel( {
        presets: ['env']
    } ) )
    .pipe( uglify() )
    .pipe( gulp.dest( 'assets/scripts/' ) )
    .pipe( browserSync.stream() )
}

gulp.task( 'uglifyJSModules', gulpJSModules );

function browser() {
    browserSync.init( {
        server: {
            baseDir: "./"
        }
    } )
}

gulp.task( 'browser-sync', browser );

function watch() {
    gulp.watch( 'dist/sass/**', compilaSass );
    gulp.watch( 'dist/scripts/**', gulpJSModules );
    gulp.watch( 'index.html' ).on( 'change', browserSync.reload );
}

gulp.task( 'watch', watch );

gulp.task( 'dev', gulp.series( gulp.parallel( 'sass', 'uglifyJSModules' ), gulp.parallel( 'watch', 'browser-sync' ) ) );

gulp.task( 'default', gulp.parallel( 'sass', 'uglifyJSModules' ) );
