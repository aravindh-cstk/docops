---
title: "Architecture"
description: "See how Contentstack Agent Skills are authored once in SKILL.md and built into Cursor, Codex, and Gemini formats with CI-enforced consistency."
url: /developers/skills-architecture
uid: blt8d5e99dc0900fa83
---

# Architecture

## Architecture

Use this guide to understand the single source build architecture behind Agent Skills and why you should never hand-edit cursor/rules/ or codex/. It explains how one canonical file per skill in skills/ compiles into tool-specific formats for Cursor and Codex, and how CI catches drift if the generated output falls out of sync.

## Source of truth

Everything starts in skills/:

```
skills/
  CLAUDE.md                  # the router (intent → skill table)
  <slug>/
    SKILL.md                 # the canonical skill definition
    references/              # optional, read-on-demand docs
    scripts/                # optional, executable helpers
```

You can only edit files in skills/.

## Generated trees

Build scripts transform the source into each tool's format:

```
skills/<slug>/SKILL.md     ──►  cursor/rules/NN-<slug>.mdc
                           ──►  codex/<slug>/SKILL.md
skills/CLAUDE.md (router)  ──►  cursor/rules/00-router.mdc
                           ──►  codex/AGENTS.md
```

-   **Cursor**: scripts/build-cursor-rules.sh writes cursor/rules/. The router becomes 00-router.mdc with alwaysApply: true. Each skill becomes NN-<slug>.mdc.
-   **Codex**: scripts/build-codex-skills.sh writes codex/. The router becomes AGENTS.md. Each skill becomes <slug>/SKILL.md with YAML frontmatter stripped and its references/ and scripts/ copied alongside.
-   **Claude Code**: consumes skills/ directly via the plugin manifests in .claude-plugin/.
-   **Gemini CLI**: consumes the bundle via gemini-extension.json.
-   **skills CLI**: pulls individual skills/<slug>/ directories on demand.

## Why generated, not hand-maintained

Maintaining five copies of 21 skills would cause drift. Instead:

1.  Authors edit only skills/.
2.  Build scripts regenerate cursor/rules/ and codex/.
3.  CI enforces that the generated trees match the source.

This keeps every tool's behavior identical and every update consistent.

## Drift protection (CI)

The GitHub Action in .github/workflows/build.yml:

-   **On pull requests**: regenerates the trees and **fails the build** if anything differs from what's committed. This forces contributors to run the build scripts and commit the result.
-   **On push to main**: regenerates the trees and commits any drift automatically (as github-actions\[bot\]).

**Warning:** Never edit cursor/rules/ or codex/ directly. The next regeneration reverts your changes.

## Repository layout

```
.claude-plugin/        Claude Code plugin + marketplace manifests
.cursor-plugin/        Cursor plugin manifest
.github/workflows/     CI that regenerates cursor/rules and codex
codex/                 Generated Codex tree: do not edit
cursor/rules/          Generated Cursor rules: do not edit
scripts/               Build scripts
skills/                Source of truth: edit here
docs/                  This documentation
manifest.json          Machine-readable index of all skills
gemini-extension.json  Gemini CLI extension manifest
```
