const { src, dest } = require("gulp");

// Конфигурация
const app = require("../config/app.js");
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Обработка шрифтов
const fonts = () => {
  return (
    src(path.fonts.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "Fonts",
            message: error.message,
          })),
        })
      )
      .pipe(newer(path.fonts.build))
      .pipe(fonter({
        formats: ["ttf", "woff", "eot", "svg"]
      }))
      .pipe(dest(path.fonts.build))
      .pipe(ttf2woff2())
      .pipe(dest(path.fonts.build))
  );
};

module.exports = fonts;
