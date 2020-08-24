const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp
    .watch("./sass/**/*.scss", function() {
    // style.scssファイルを取得
    return (
      gulp
        .src("./sass/app.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        .pipe(autoprefixer({
          cascade: false
        }))
        // cssフォルダー以下に保存
        .pipe(gulp.dest("./css"))
    );
  });
});