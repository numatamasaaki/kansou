//plug-in
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');

//CSS圧縮
gulp.task('clean-css', function() {
  return gulp.src("./css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
//デフォルト
gulp.task('default', ['clean-css']);

//画像圧縮
var paths = {
  srcDir : 'images',
  dstDir : 'dist'
};

// jpg,png,gif画像の圧縮タスク
gulp.task('imagemin', function(){
  var srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif)';
  var dstGlob = paths.dstDir;
  gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
      ]
    ))
    .pipe(gulp.dest( dstGlob ));
});


//ファイル監視
gulp.task('watch', function(){
  gulp.watch(paths.srcDir + '/**/*', ['imagemin']);
});
