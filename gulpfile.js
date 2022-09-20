// gulpfile.js
const { src, dest } = require("gulp");
var postcss = require("gulp-postcss");
var cssnano = require("gulp-cssnano");
// const imagemin = require("gulp-imagemin");

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
    return src("./src/*.css") // read .css files from ./src/ folder
        .pipe(postcss()) // compile using postcss
		.pipe(cssnano())
        .pipe(dest("./src/assets/css")) // paste them in ./assets/css folder
    cb();
}
// Task for minifying images
// function imageminTask(cb) {
//     return src("./src/templates/cycleBuy/images*")
//         .pipe(imagemin())
//         .pipe(dest("./src/templates/cycleBuy/images"));
//     cb();
// }
exports.default = cssTask;
exports.css = cssTask;
// exports.images = imageminTask;