const { src, dest } = require("gulp");

// Конфигурация
const app = require("../config/app.js");
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

// Обработка картинок
const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Image",
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.build))
    .pipe(webp())
    .pipe(dest(path.img.build))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.build))
    // .pipe(imagemin({
    //   verbose: true
    // }))
    .pipe(dest(path.img.build))
};

module.exports = img;
