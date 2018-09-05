var gulp=require('gulp');
var sass=require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jsFiles = 'scripts/**/*.js',
    jsDest = 'dist/scripts';

gulp.task('sass',function() {
return gulp.src('./sass/*.scss')
.pipe(sass())
.pipe(gulp.dest('./css'));
});
gulp.task('watch',function() {
gulp.watch('./sass/*.scss',['sass']);
});

gulp.task('default',['sass','watch','scripts']);
gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
		.pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
}); 

 
