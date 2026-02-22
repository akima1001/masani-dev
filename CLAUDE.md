# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

ポートフォリオ兼ブログサイト（日本語）。Astro（静的出力）+ AstroPaper テンプレート。Cloudflare Workers Static Assets にホスティング。

## 技術スタック

- **フレームワーク:** Astro（static output）+ AstroPaper
- **コンテンツ:** MDX on Git
- **スタイル:** Tailwind CSS v4+
- **ホスティング:** Cloudflare Workers Static Assets
- **コメント:** Giscus（GitHub Discussions）
- **アナリティクス:** Cloudflare Web Analytics
- **パッケージマネージャ:** pnpm
- **Linter/Formatter:** ESLint + Prettier（eslint-plugin-astro, prettier-plugin-astro）

## 開発コマンド

```bash
pnpm dev           # ローカル開発サーバー
pnpm build         # 本番ビルド（出力: dist/）
wrangler dev       # Cloudflare Workers ローカル確認
pnpm lint          # ESLint
pnpm format        # Prettier
```

## 主要設定ファイル

- `astro.config.mjs` — Astro 設定
- `src/config.ts` — ブログメタデータ（著者名、SNS リンク等）
- `wrangler.toml` — Cloudflare Workers デプロイ設定
