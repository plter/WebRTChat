const gulp = require("gulp");

module.exports.default = gulp.series(require("./SubProjects/FrontEnd/RTChat/gulpfile").default);