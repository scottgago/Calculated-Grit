var   gulp = require('gulp'),
		uglify = require('gulp-uglify')
		  sass = require('gulp-sass')
  imagemin = require('gulp-imagemin')
browserify = require('browserify')
    source = require('vinyl-source-stream')
    buffer = require('vinyl-buffer')
browserSync = require('browser-sync').create()
reload = browserSync.reload;


gulp.task('build', function(){
	browserify('dev/app.module.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify({mangle:false}))
		.pipe(gulp.dest('build/js/'))
	reload()
})

gulp.task('compress', function(){
	gulp.src('dev/assets/imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/assets/imgs'))
	reload()
})

gulp.task('sass', function () {
  gulp.src('dev/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/assets/css'))
  reload()
});

gulp.task('html', function(){
	gulp.src('dev/*.html')
		.pipe(gulp.dest('build'))

	reload()
})

gulp.task('watch build', function(){
	browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
	
	gulp.watch('dev/*.html', ['html'])
	gulp.watch('dev/assets/sass/*', ['sass'])
	gulp.watch('dev/assets/img/*', ['compress'])
	gulp.watch('dev/*.js', ['build'])
})

gulp.task('default', ['build', 'sass', 'html', 'compress', 'watch build'])