# Pixel-Perfect ベース（Figma整合）

このプロジェクトは、FigmaのDev Mode値をそのまま落とし込む前提で構成しています。

## ルール
- 単位は px 固定（Tailwindの任意値 `[]` を多用）
- タイポは必ず size / line-height / letter-spacing を明示
  - 例: `text-[26px] leading-[39px] tracking-p-[0.2]`
- フォントは後でWOFF2同梱を推奨（Noto Sans JP など）

## Tailwind 拡張
- `tracking-p-[x]` … Figmaの letter-spacing(%) を em に自動変換
  - 例: 0.2% -> `tracking-p-[0.2]` => `letter-spacing: 0.002em;`
- `text-shadow-{sm,md,lg}` … Figmaのテキストエフェクト簡易再現

## コンポーネント指針
- まず UI のみ。状態/遷移ロジックは入れない
- 375x812 のモバイルフレーム `.frame-mobile` を基準に作図

## よくあるズレの原因と対策
- フォント未同梱 → フォールバックでメトリクス誤差。WOFF2同梱を推奨
- line-height を `normal` のまま → 必ず px 指定
- letter-spacing(%) を px で指定 → `tracking-p-[x]` を使う
- グラデ/半透明の重ね順 → CSSの順序をFigmaに合わせる

