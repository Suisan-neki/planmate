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

## 補足（READMEにそのまま残してOK）

* `src/styles/tokens.css` : 色・余白・角丸などのデザイントークン
* `src/components/` : Atoms→Molecules→Organisms→Templates の順で再利用部品
* `src/pages/` : 画面ごと（テンプレ＋Organismsを並べるだけ）
* `src/app/` : ルーティングや共通レイアウト（AppShell / Providers）
* `src/fixtures/` : ダミーデータ（MVPのUI確認用）

### 便利：ツリー自動生成の一例

ローカルで構成が大きくなったら、以下のいずれかでREADME用ツリーを再生成できます。

```bash
# macOS/Linux
brew install tree            # 未インストールなら

# ルートで
tree -I 'node_modules|dist|.git' -L 3 > tree.txt
```

```bash
# cross-platform: npx 版
npx --yes tree-cli -l 3 -i 'node_modules,.git,dist' > tree.txt
```

> `tree.txt` の中身をREADMEに貼り替えれば更新完了です。
