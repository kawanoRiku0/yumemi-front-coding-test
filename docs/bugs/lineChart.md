## データセットを変更してもグラフが更新されないバグについて

### 調査

1, chart.js の LineChart コンポーネントの`onChartUpdate`プロパティで lineData の中身を確認した。

2, コンポーネントに渡されている lineData の中身は確実に最新のものに更新されており、一見問題がなかった。

3, 原因の特定が困難だと推察。（ライブラリ内部のバグを踏んだ可能性がある）

### 対策

コンポーネントに渡す key を動的に変化させることで強制的に再レンダリングさせることで、正しいグラフを描画させる。

強制的にレンダリングさせていることで、必要のないロジックが含まれてしまっている。特に複雑な処理が内包されていないため、この暫定的な対処法によってパフォーマンスが大きく下がることは予想されない。
