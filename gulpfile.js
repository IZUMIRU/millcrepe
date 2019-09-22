var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

//sassコンパイル
gulp.task("sass",function(done){
    gulp.src("sass/style.scss")
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
    done();
});

//動作設定
gulp.task("default", gulp.series('sass', function(done){
    gulp.watch("sass/*.scss", gulp.series('sass'));
    done();
}));