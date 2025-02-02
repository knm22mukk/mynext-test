## 導入手順

## create-next-app

- bunx create-next-app@latest

```
bunx create-next-app@latest {プロジェクト名}
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … No
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*
```

## biomeの導入

- bun add --dev --exact @biomejs/biome

- bunx @biomejs/biome init

- biome.jsonの書き換え。

- .vscodeファイルとセッティングの追加

- 一度vscodeを先起動して動作確認

- package.jsonにscriptを追加

## 記述の整理

- 不要なファイルと記述を削除して一度フォーマットの実行

- page.tsx, layout.tsx, globals.css, アイコンなどの削除

- 一度、consoleからフォーマットを実行

- bunx biome lint . 

- bunx biome format --write . 

## lefthookの導入

- bun install lefthook --save-dev

- bunx npx lefthook install

- lefthook.ymlファイルの書き換え

- package.jsonのコマンド追加の確認

- 一度vscodeを再起動する

- errorの記述がある状態でコミットができないことを確認。

- フォーマットエラーの状態のコミットができないことを確認

- 正しい記述に修正してコミットができることを確認。
