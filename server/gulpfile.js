var gulp   = require('gulp');
var jshint = require('gulp-jshint');
 
gulp.task( 'default', ['syntaxCheck'] );

gulp.task('syntaxCheck', function() {
  gulp.src( './*.js' )
    .pipe( jshint())
    .pipe( jshint.reporter( 'jshint-stylish' ));
});
