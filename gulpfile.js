var gulp        = require ('gulp'),
	sass        = require ('gulp-sass');
	// browserSync = require ('browser-sync');

gulp.task('sass', function() {
	gulp.src('app/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});
