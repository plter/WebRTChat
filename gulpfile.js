const gulp = require("gulp");

global.BUILD_MODE = "development";

function setBuildModeToProduction(cb) {
    global.BUILD_MODE = "production";
    cb();
}

function setBuildModeToDevelopment(cb) {
    global.BUILD_MODE = "development";
    cb();
}

const BuildRTChat = require("./SubProjects/FrontEnd/RTChat/gulpfile").default;

module.exports = {
    default: gulp.series(BuildRTChat),
    BuildDebug: gulp.series(setBuildModeToDevelopment, BuildRTChat),
    BuildRelease: gulp.series(setBuildModeToProduction, BuildRTChat)
};