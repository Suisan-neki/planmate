# Figma MCP + Cursor 運用メモ

## 前提
- `.cursor/mcp.json` に FIGMA_API_KEY を設定（リポには `mcp.sample.json` のみコミット）
- VS Code/Cursor 拡張「Figma for VS Code」をインストールしてサインイン
- Dev Modeは「CSS + px」で利用

必要なAPIスコープ（Personal Access Token 作成時）
- Files: Read（files:read）
- File variables: Read（file_variables:read）
  - 変数がない場合でも付けておくと安心
  - 403 Forbidden が出る場合は、トークンのスコープ不足か、トークンのアカウントに該当ファイルの閲覧権限がない可能性が高いです（ファイルの共有設定で該当アカウントを閲覧者として追加）

## 使い方（2通り）

- インスペクタで値をそのまま反映（推奨）
  - サイズ/余白/タイポ/色/角丸/影を確認 → Tailwind任意値で転記（例 `text-[26px] leading-[39px]`）
  - letter-spacing(%) は `tracking-p-[x]`（0.2% → `tracking-p-[0.2]`）

- APIで文言抽出（任意、自動化）
  - `FIGMA_API_KEY=xxx tsx scripts/figma/extract-text.ts <fileKey> --page "Splash" --out src/i18n.auto.json`
  - 出力されたjsonをi18n辞書にマージ

エラー時の確認
- トークン生存確認: `curl -H "X-Figma-Token: <TOKEN>" https://api.figma.com/v1/me`
- ファイル閲覧権限確認: `curl -I -H "X-Figma-Token: <TOKEN>" https://api.figma.com/v1/files/<fileKey>`

## Tips（ピクセル合わせ）
- フォントはWOFF2同梱して@font-faceを推奨（日本語はNoto Sans JP等）
- line-heightは必ずpx指定、letter-spacingは%→em（プラグインで対応）
- 背景の透明度・重ね順はFigmaと同順序で記述
- 画面は 375 x 812 基準で `.frame-mobile` / `DeviceFrame` を利用

## よくある詰まり
- 文字の巻き返し：フォント未同梱が原因 → webfont化
- spacingが合わない：Tailwindの既定スケールではなく任意pxを使う
- MCPでコード自動生成：そのままでは巨大なコンポーネント化 → atoms/moleculesに分割
