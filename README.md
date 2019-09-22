## emole_developer_lp 環境構築について(2019/02/05現在)
### 概要
フリーランスチームギルド"millcrepe"のcorporate website。
開発言語は
- HTML5
- CSS3
- Sass
- JS
- jQuery
の5つを使用。

### ファイル構造
.
|--- README.md
|--- index.html // メイン
|--- css
|    |--- normalize.css // CSSの初期化
|    |--- styles.css // webサイトのスタイルを設定
|--- js
|    |--- index.js // 動的部分を操作
|--- img // 画像を保存する
|--- favicon

### 初期セットアップ
基本的にはプルリクエストにて共同開発・管理を行う。
ブランチをmasterから切り離して行う。
```
1. git checkout master
2. git pull origin master
3. git checkout -b hoge/hoge
4. git commit --allow-empty -m "[WIP] 実装名"
5. git push origin hoge/hoge
```
これでプルリクエストは完成、そのまま開発を行う。
必要であればレビューやコメントを残しておくと良い。
reviewerが大丈夫と判断すれば、masterにmergeをする。

### ブランチ名の命名規則
`feature`: 機能開発や改善など<br />
`emergency`: 緊急の修正<br />
例）feature/hoge001

### Sassについて
CSSに関しては、[Sass](https://sass-lang.com/)を使用している。
sassフォルダ配下にカスタマイズしていき、これをcssにcompileする。

```
# SASSファイルをCSSにコンパイル
# 常に監視してくれるので、コマンド打ったら放置。
$ gulp
```
