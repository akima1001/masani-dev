---
name: commit
description: コミット作成。Conventional Commits（日本語）でステージング→コミットを実行する。
disable-model-invocation: true
---

# コミット

`/commit` で起動。変更を確認し、Conventional Commits 形式でコミットを作成する。

## 手順

1. **状態確認**（並列実行）
   - `git status --short`
   - `git diff` + `git diff --cached`（staged / unstaged 両方）
   - `git log --oneline -5`（直近のメッセージスタイルを参照）
2. **安全チェック（public リポジトリ — コミット前に必ず実行）**
   - 以下のファイルが含まれていたら**警告してステージングから除外**:
     - `.env*`（`.env.example` は可）
     - `credentials*`, `*secret*`, `*.pem`, `*.key`
     - `settings.local.json`
     - `wrangler.toml` 内の `account_id` 等の個人情報
   - 意図しない大量ファイル（node_modules, dist, .wrangler）が混入していないか確認
   - diff 内にハードコードされた API キー・トークン・パスワードがないか目視確認
3. **スコープ判定**（変更ファイルのパスから推定）
   - `src/` 配下 → ディレクトリ名をスコープにする（例: `src/content/` → `content`）
   - `public/` → `assets`
   - `.claude/`, `.vscode/`, `.editorconfig` 等 → `dev`
   - `CLAUDE.md`, `README.md` → `docs`
   - `astro.config.*`, `wrangler.toml`, `tailwind.*`, `package.json` → `config`
   - 複数スコープにまたがる場合はもっとも支配的なものを選ぶか、カンマ区切り
4. **コミットメッセージ作成**
   - 形式: `type(scope): 日本語で要約`
   - type: `feat` / `fix` / `refactor` / `chore` / `test` / `docs` / `ci`
   - 1行目: 50文字以内を目安。「何を」ではなく「なぜ」を意識
   - 本文（任意）: 変更の背景や判断理由を簡潔に
   - フッター: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
5. **ステージング & コミット**
   - `git add` は個別ファイル指定（`-A` 禁止）
   - HEREDOC でメッセージを渡す
6. **事後確認**
   - `git status` でクリーンであることを確認
   - 残りの未追跡ファイルがあればユーザーに報告

## メッセージ例

```
feat(config): AstroPaper テンプレートを初期化

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

## やらないこと

- `--amend` はユーザーが明示的に指示した場合のみ
- `git push` はコミットに含めない（別途ユーザーが判断）
- pre-commit hook 失敗時に `--no-verify` で回避しない
