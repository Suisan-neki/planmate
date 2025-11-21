# planmate

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスするとアプリが表示されます。

## UI実装方法

### 1. 新しいページの作成

新しいページコンポーネントは `src/pages/` ディレクトリに作成します。

```tsx
import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'

export default function YourPage(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy">
        {/* コンテンツ */}
      </div>
    </DeviceFrame>
  )
}
```

作成後、`src/App.tsx` にページを追加してルーティングに登録します。

### 2. Figmaからデザイン情報を取得

Figmaのデザインから情報を取得するためのスクリプトが用意されています：

```bash
# Figmaファイルからフレーム一覧を取得してスキャフォールド
npm run screens:scaffold:page -- --key <Figmaファイルキー> [--page "ページ名"]

# デザイントークン（色、変数など）を取得
npm run figma:variables:plugin

# テキストを抽出
npm run figma:text:env
```

### 3. スタイリング

- **Tailwind CSS**: ユーティリティクラスを使用してスタイリングします
- **デザイントークン**: `src/styles/tokens.css` と `tailwind.config.ts` で定義されたカラーやスペーシングを使用
- **カスタム値**: Tailwindの任意値記法（例：`w-[327px]`、`mb-[75px]`）でFigmaの値に合わせて実装

```tsx
// 例：Figmaのデザインに合わせた実装
<div className="w-[327px] h-[249px] rounded-[30px] bg-white px-6 pt-8">
  <h2 className="text-[18px] leading-[26px] font-semibold">タイトル</h2>
</div>
```

### 4. コンポーネント構造

- **Atoms** (`src/components/atoms/`): 最小単位のコンポーネント（Button、Iconなど）
- **Molecules** (`src/components/molecules/`): Atomsを組み合わせたコンポーネント（FormFieldなど）
- **Layout** (`src/components/layout/`): レイアウト用コンポーネント（DeviceFrame、ModalBaseなど）
- **Pages** (`src/pages/`): 画面全体を構成するコンポーネント

### 5. 多言語対応

`react-i18next` を使用して多言語対応を実装します：

```tsx
import { useTranslation } from 'react-i18next'

export default function YourPage(){
  const { t } = useTranslation()
  return <h1>{t('yourPage.title')}</h1>
}
```

翻訳キーは `src/i18n/dictionaries.ts` に定義します。

```text
planmate/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ .vscode/
│  └─ settings.json
├─ public/
│  ├─ icons/
│  └─ fonts/
├─ src/
│  ├─ app/
│  │  ├─ AppShell.tsx
│  │  ├─ routes.tsx
│  │  └─ providers/
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
│  ├─ components/
│  │  ├─ atoms/
│  │  ├─ molecules/
│  │  ├─ organisms/
│  │  └─ templates/
│  ├─ pages/
│  │  ├─ dashboard/
│  │  │  └─ index.tsx
│  │  ├─ tasks/
│  │  │  ├─ index.tsx
│  │  │  ├─ detail.tsx
│  │  │  └─ form.tsx
│  │  ├─ calendar/
│  │  │  └─ index.tsx
│  │  └─ settings/
│  │     └─ index.tsx
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ common.css
│  │  └─ tailwind.css
│  ├─ fixtures/
│  │  ├─ tasks.json
│  │  └─ user.json
│  ├─ lib/
│  ├─ hooks/
│  ├─ main.tsx
│  └─ App.tsx
├─ .editorconfig
├─ .gitignore
├─ eslint.config.cjs
├─ prettier.config.cjs
├─ stylelint.config.cjs
├─ index.html
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## 補足

* `src/styles/tokens.css` : 色・余白・角丸などのデザイントークン
* `src/components/` : Atoms→Molecules→Organisms→Templates の順で再利用部品
* `src/pages/` : 画面ごと（テンプレ＋Organismsを並べるだけ）
* `src/app/` : ルーティングや共通レイアウト（AppShell / Providers）
* `src/fixtures/` : ダミーデータ（MVPのUI確認用）
