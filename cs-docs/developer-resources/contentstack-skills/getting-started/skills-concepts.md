---
title: "Concepts"
description: "Understand the core concepts behind Contentstack Agent Skills, skills, slugs, the router, and manifests, to customize and extend your AI coding assistant."
url: /developers/skills-concepts
uid: blt447eb38daeb0ca4e
---

# Concepts

## Concepts

Use this guide to learn the terms used across the Agent Skills documentation, including skill, slug, router, manifest, and the split between canonical source and generated files. Read it before the other guides if these terms are unfamiliar, or return to it whenever a term elsewhere needs clarifying.

## Skill

A **skill** is a Markdown instruction file scoped to one Contentstack product area. It defines

-   conditions under which it activates
-   code and guidance it produces
-   patterns it enforces or rejects.

Each skill lives at skills/<slug>/SKILL.md.

**Additional Resource:** Refer to the [Skill Anatomy](/docs/developers/skills-skill-anatomy) documentation for the complete file structure.

## Slug

The **slug** is a skill's directory name and stable identifier, for example cms-entries or dx-delivery-sdk. Slugs are used in the skills CLI, in the manifest, and as the URL path for each skill's page in the skills reference.

**Additional Resource:** Refer to the [skills reference](https://www.contentstack.com/docs/developers/skills-reference) documentation for a complete list of available skills and their slugs.

## Router

The **router** is a rules file that maps a request to the correct skill. The AI coding tool reads the router at the start of each session and uses it to match each request to a skill.

-   Canonical source: [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md)
-   Cursor form: cursor/rules/00-router.mdc (marked alwaysApply: true)
-   Codex form: codex/AGENTS.md

**Additional Resource:** Refer to the [The router](/docs/developers/skills-router) documentation to find how the matching rules are structured and ways to extend them.

## Reference material

**Reference material** consists of additional files placed in a references/ folder alongside a skill. The AI coding tool reads these files only when the active task requires them, not on every session start.

Skills that include reference material: dx-delivery-sdk, brand-kit-assistant, developer-hub-app-architect, and migration-companion.

## Scripts

**Scripts** are executable files placed in a scripts/ folder alongside a skill. For example, the Migration Companion skill in the scripts/ folder includes prerequisite checkers and post-migration evaluation scripts. The AI coding tool invokes these by absolute path when running a task.

## Canonical source and generated files

skills/ is the canonical source location. All other tool-specific files are generated from it:

```
skills/<slug>/SKILL.md     ──►  cursor/rules/NN-<slug>.mdc
                           ──►  codex/<slug>/SKILL.md
skills/CLAUDE.md (router)  ──►  cursor/rules/00-router.mdc
                           ──►  codex/AGENTS.md
```

**Warning:** Do not edit cursor/rules/ or codex/ directly. These directories are regenerated from skills/ by build scripts. Pull requests with out-of-sync generated files fail the CI (continuous integration) check.

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for the build process.

## Manifest

manifest.json lists every skill with its slug, title, and product. It is a machine-readable index used when generating documentation or tooling integrations.

## Product

Each skill belongs to one **product** area: CMS, Developer Experience, Launch, Brand Kit, or Developer Hub. Skills in the same product area share safety defaults. For example, every CMS skill enforces two rules: never expose management tokens in client-side code, and route Content Management API (CMA) calls through a server-side proxy.

## Advisory skills and action skills

-   **Advisory skills** are read-only. They produce code and guidance but do not create, update, or delete Contentstack resources. Examples: Entries, Data Modeling, Webhooks.
-   **Action skills** perform external operations and require explicit user confirmation before proceeding. Examples: the Launch deployment skills (trigger a deploy, patch environment variables) and the Migration Companion (creates a stack, modifies your repository).

This distinction determines the confirmation requirements before a skill performs an operation.

**Additional Resource:** Refer to the [Security and safety model](/docs/developers/skills-security-model) documentation for the full trust and confirmation rules.
