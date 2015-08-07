// ============================================================================
// Copyright: 2015, Tim Joosten.
//
// Library: Sass compiler
// Platform: Scoutnet Wordpress theme.
// License: MIT
// ============================================================================

// GULP DEPENDENCIES
// =====================================================================================
var gulp        = require('gulp-help')(require('gulp'));
var sass        = require('gulp-ruby-sass');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require('gulp-minify-css');
var scsslint    = require('gulp-scss-lint');
var ftp         = require( 'vinyl-ftp' );
var gutil       = require( 'gulp-util' );


// FTP Credentials
// =====================================================================================
var conn = ftp.create( {
    host:     'ftp.scoutnet.be',
    user:     'sn1145_root',
    password: '0474834880',
    parallel: 10,
    log:      gutil.log
} );

// GULP TASKS
// =====================================================================================

// Gulp defailt task.
// We have no default task.
// So call the help function where every command is documented.
gulp.task('default', 'The compiler his default task', function() {
    gulp.start('help');
});

// Gulp task for compiling all the scss files into css.
gulp.task('compile', 'Compile the the SCSS resources.', function() {
    return sass('./scss/style.scss', { style: 'expanded' })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })

        .pipe(gulp.dest('./compiled-stylesheet'));
});

// Gulp task to set sourcemaps on the css files.
gulp.task('sourcemaps', 'Add a sourcemap to the css file.', function() {
    return gulp.src('./compiled-stylesheet/style.css')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('sourcemap'))
        .pipe(gulp.dest('./compiled-stylesheet'));
});

// Minify your css
gulp.task('minify', 'Minify your css code.', function() {
    return gulp.src('./compiled-stylesheet/style.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./compiled-stylesheet'));
});

// lint the scss code.
// The following gems are required for this function.
//
// gem install scss-lint
// gem install scss_lint_reporter_checkstyle
gulp.task('lint', 'Lint your SCSS code.', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(scsslint({
            'reporterOutputFormat': 'Checkstyle',
            'filePipeOutput': 'lint-report.xml'
        }))
        .pipe(gulp.dest('./lint-reports'))
});

// This function will not accept any flags.
// So good luck and compile will happen in dev mode.
// So use it only when you are developing this scss files.
gulp.task('watch', 'Watch for changes', function() {
    gulp.watch('scss/style.scss', ['compile']);
});

// Add a new a stylesheet.

var stylesheet = 'compiled-stylesheet/style.css';
var sourcemap  = 'compiled-stylesheet/sourcemap/style.css.map';

gulp.task('deploy', 'Upload new stylesheet to server (FTP)', function() {
    return gulp.src([stylesheet, sourcemap], { buffer: false })
        .pipe(conn.newer('/public_html/wordpress/wp-content/themes/scoutnet')) // only upload newer files
        .pipe(conn.dest('/public_html/wordpress/wp-content/themes/scoutnet'));
});