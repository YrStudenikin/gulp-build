const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const webpHtml = require("gulp-webp-html");

const html = () => {
    return src(path.html.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "HTML",
            message: error.message,
          })),
        })
      )
      .pipe(
        fileInclude({
          prefix: "@",
        })
      )
      .pipe(webpHtml())
      .pipe(dest(path.html.build));
  };

  module.exports = html;