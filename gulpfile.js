const gulp = require('gulp');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const purgecssWordpress = require('purgecss-with-wordpress');

gulp.task('css', function() {
    return gulp.src('assets/css/style.css')
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer')
        ]))
        .pipe(purgecss({
            content: ['**/*.php'],
            whitelist: [
                ...purgecssWordpress.whitelist,
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'hr',
                'ol',
                'ol li',
                'ul',
                'ul li',
                'em',
                'b',
                'strong',
                'blockquote',
            ],
            whitelistPatterns: purgecssWordpress.whitelistPatterns,
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }))
        .pipe(minify())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('assets/build'))
});

gulp.task('watch', function() {
    gulp.watch(['assets/css/style.css', '**/*.php', 'tailwind.config.js'], gulp.series('css'));
});
