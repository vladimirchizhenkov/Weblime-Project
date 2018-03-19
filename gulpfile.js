var gulp        = require ('gulp'),
	sass        = require ('gulp-sass'),
	browserSync = require ('browser-sync'),
	concat      = require ('gulp-concat'),
	uglify      = require ('gulp-uglifyjs'),
	cssnano     = require ('gulp-cssnano'),
	rename      = require ('gulp-rename'),
	del         = require ('del');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss') //*.+(scss|sass)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src(['app/libs/jquery.min.js', 'app/libs/...min.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {
	var buildCss   = gulp.src(['app/css/main.css', 'app/css/libs.min.css'])
				   .pipe(gulp.dest('app/dist'));
	var buildFonts = gulp.src('app/fonts/**/*')
				   .pipe(gulp.dest('dist/fonts'));
	var buildJs    = gulp.src('app/js/**/*')
				   .pipe(gulp.dest('dist/js'));
	var buildHtml  = gulp.src('app/*.html')
				   .pipe(gulp.dest('dist/'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		browser: 'chrome',
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function (){ //bs и sass выполняются до watch
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});



//установить bower -g; создать файл в корне проекта .bowerrc и в нем прописать { "directory" : "app/libs/"}
//bower i jquery <+другие библиотки>
//npm i gulp-concat gulp-uglifyjs --save-dev
//для css-библиотек: создать в sass libs.sass, туда импортировать библиотеки
//nanocss и rename для сжатия и переименования
//del для чистки проекта