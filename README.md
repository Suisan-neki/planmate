# planmate

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
