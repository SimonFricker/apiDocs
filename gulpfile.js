var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var notify = require("gulp-notify");
var gutil = require('gulp-util');
var argv = require('minimist');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');


gulp.task('watch', ['sass', 'concat-min-js',  'nodemon', 'browserSync'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['concat-min-js']);
  gulp.watch('src/js/working/**/*.js',['concat-min-js']);
  gulp.watch('docs/assets/js/*.js', browserSync.reload);

  gulp.watch('docs/index.html', browserSync.reload);
})

gulp.task('browserSync', function(){
  browserSync.init(null, {




      proxy: "http://localhost:8080",
          files: ["docs/*.*"],
          browser: "google chrome",
          port: 7000,

    });

});

gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('sass', function(){
  return gulp.src('./src/scss/apiDocs.scss')
    .pipe(plumber())
        .pipe(sass({includePaths: ['./src/scss/*']}, {errLogToConsole: true}))
        .on('error', reportError)
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./docs/assets/css/'))
        .pipe(concat('apiDocs.css'))
        .pipe(browserSync.reload({stream: true}));


});


gulp.task('concat-min-js', function(){
  return gulp.src([
    'src/js/libs/*.js',
    'src/js/apiDocs.js',
  ])
  .pipe(plumber())
    .pipe(concat('apiDocs.min.js'))
    .pipe(uglify({errLogToConsole: true}))
    .on('error', reportError)
    .pipe(gulp.dest('docs/assets/js/'))
    .pipe(browserSync.reload({stream: true}));
});




/// error handeling
var reportError = function (error) {
    // [log]
    //console.log(error);

    // Format and ouput the whole error object
    //console.log(error.toString());


    // ----------------------------------------------
    // Pretty error reporting

    var report = '\n';
    var chalk = gutil.colors.white.bgRed;

    if (error.plugin) {
        report += chalk('PLUGIN:') + ' [' + error.plugin + ']\n';
    }

    if (error.message) {
        report += chalk('ERROR:\040') + ' ' + error.message + '\n';
    }

    console.error(report);


    // ----------------------------------------------
    // Notification

    if (error.line && error.column) {
        var notifyMessage = 'LINE ' + error.line + ':' + error.column + ' -- ';
    } else {
        var notifyMessage = '';
    }

    notify({
        title: 'FAIL: ' + error.plugin,
        message: notifyMessage + 'See console.',
        sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
    }).write(error);

    gutil.beep(); // System beep (backup)


    // ----------------------------------------------
    // Prevent the 'watch' task from stopping

    this.emit('end');
}
