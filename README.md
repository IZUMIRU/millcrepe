## emole_developer_lp 環境構築について(2019/02/05現在)
### 開発言語
今回はLPではあるが、通常のHTML/CSSではなく、React(JavaScript)で開発していく。
単純にコンポーネント単位で修正がしやすいからである。
あと、共通部分を管理しやすいためでもある。

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

### styleについて
ここでは、`CSS in JS(styled-components)`を用いる。<br />
詳しくは、[こちら](https://www.styled-components.com/docs/basics)から。<br />
