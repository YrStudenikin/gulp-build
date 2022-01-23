const { src, dest } = require("gulp");

// Конфигурация
const app = require("../config/app.js");
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");

// Обработка js
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.build, { sourcemaps: app.isDev }))
};

module.exports = js;
