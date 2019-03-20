
 var gulp = require('gulp');
var sass = require('gulp-sass');


//html
gulp.task("copy-html",function () {
    gulp.src('*.html')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\tenxun'));
});


//img
gulp.task('copy-images',function(){
    gulp.src('img/*.{jpg,png,tmp,gif}')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\tenxun\\img'));
});


//scss
gulp.task('copy-scss', function(){
   return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\tenxun\\css'));
});


//js
gulp.task('copy-js',function(){
    gulp.src('js/*.js')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\tenxun\\js'));
});



//php
gulp.task('copy-php',function(){
    gulp.src('php/*.php')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\tenxun\\php'));
});

gulp.task('default',gulp.parallel('copy-html','copy-img','copy-js','copy-scss','copy-php'));//并行执行
gulp.task("watchall",function(){
    //监视所有文件是否有变化，如果有变化，就执行任务：copy
    gulp.watch("*.html",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-images"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    gulp.watch('scss/*.scss',gulp.series("copy-scss"));
    gulp.watch('php/*.php',gulp.series("copy-php"));

});




 
 