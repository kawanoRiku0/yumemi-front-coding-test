# コミットメッセージ

## prefix

コミットメッセージには必ず以下のうちひとつの prefix をつける

- feat: 機能追加/コンポーネント作成
- fix: バグ修正
- refactor: 仕様変更に無関係なリファクタリング
- setting: 設定ファイルの変更/フォルダ構成変更
- styles: style やレイアウトのみの変更
- library: ライブラリのインストール
- docs: ドキュメンテーション
- chore: 分類が難しい簡単な変更（chore を選択する場合はメッセージに細かく記載をする）

# 自然言語

コミットメッセージ、コミット、ドキュメントなどは基本的に日本語を使用。

- 日本人のみの開発チームであえて英語で記述するメリットは薄く、解釈が分かれてしまう可能性があるため。

- 英語を使用することを規制するわけではない。

# ディレクトリ構成

- /src/pages

1 ファイル 1 パスに対応したページコンポーネントを置く

ex) "/" → IndexPage.vue

- /src/hooks

カスタムフックスの定義ファイル群を置く

ex) user.ts

- /src/api

API 通信ロジックを記述したファイル群を置く

1 ファイル 1API ホストに対応させる

このフォルダ配下以外で直接 API 通信は行わない

ex) jsonPlaceHolder.ts

- /src/types

型の定義ファイル群を置く

1 ファイルを一つの関心ごとに対応させる

ex) user.ts
