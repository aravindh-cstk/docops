---
title: "Router"
description: "Learn how the Contentstack Agent Skills router matches your request to the right skill across CMS, Delivery SDK, Launch, and Brand Kit automatically."
url: /developers/skills-router
uid: bltf34d920453b5a788
---

# Router

## Router

Use this guide when a skill isn't being selected the way you expect, or when you want to understand how the router matches a request to a skill. It covers where the routing table lives for each tool, the match and load sequence, and how to disambiguate or name a skill directly when more than one could fit.

## Where it lives

| Format | Router file |
| --- | --- |
| Source of truth | [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md) |
| Cursor | cursor/rules/00-router.mdc (alwaysApply: true) |
| Codex | codex/AGENTS.md |
| Claude Code / Gemini | loaded from the source via the plugin/extension |

The system generates all forms from [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md).

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for details.

## How routing works

1.  You make a request in natural language.
2.  The agent reads the routing table (always loaded for full-bundle installs).
3.  It matches your intent to the best-fitting row.
4.  It loads that skill's SKILL.md and follows it, including reading any references/ the task needs.

You don't have to name a skill. You can specify one directly (for example, "use the Data Modeling skill…").

## The routing table

Each row maps the user's intent to a specific skill. Abbreviated:

| When the user asks about�� | Skill |
| --- | --- |
| Brand Kit, Voice Profiles, Knowledge Vault, on-brand AI generation | [Brand Kit Assistant](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/brand-kit-assistant) |
| Migrating/porting from Contentful to Contentstack | [Migration Companion](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/migration-companion) |
| Migrating Delivery SDK code from JavaScript to TypeScript | [Migrate JS to TS SDK](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/dx-migrate-js-to-ts-sdk) |
| Delivery SDK code, queries, Live Preview setup, SSR preview | [Delivery SDK](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/dx-delivery-sdk) |
| Designing or refactoring content models | [Data Modeling Best Practices](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-data-modeling-best-practices) |
| Debugging Live Preview or Visual Builder | [Live Preview & Visual Builder Support](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-live-preview-visual-builder-support-assistant) |
| Fetching entries, CDA queries, pagination, bulk ops | [Entries](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-entries) |
| Uploading, transforming, delivering assets | [Assets](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-assets) |
| Classifying content, category hierarchies | [Taxonomy](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-taxonomy) |
| Workflow stages, approvals, publish rules | [Workflows & Publish Rules](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-workflows) |
| Environments, publishing, delivery/preview tokens, Sync API | [Environments & Publishing](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-environments-publishing) |
| Languages, fallback chains, localization | [Localization](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-localization) |
| Branches, aliases, CI/CD, deployment strategy | [Branches & Aliases](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-branches-aliases) |
| Roles, permissions, teams, token capabilities | [Roles & Permissions](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-roles-permissions) |
| Deploying multiple content changes together, campaigns | [Releases](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-releases) |
| Authentication, token types, API keys, rate limits, SSO | [Tokens & Authentication](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-tokens-authentication) |
| Webhooks, event channels, payloads, signatures | [Webhooks](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-webhooks) |
| Matching a Launch env to .env.example | [Sync Launch env vars](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/launch-sync-environment-variables-from-env-example) |
| Triggering and monitoring Launch deployments | [Trigger and Monitor Deployments](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/launch-trigger-and-monitor-launch-deployments) |
| Personalization, A/B testing, audience segmentation, variants | [Variants & Personalization](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-variants-personalization) |
| Building a Developer Hub or Marketplace app | [Developer Hub App Architect](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/developer-hub-app-architect) |

The full, authoritative table is in [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md) and the [skills reference](https://www.contentstack.com/docs/developers/skills-reference).

## When multiple skills fit

Many real tasks span skills.

For example, "deploy a campaign of 50 entries without my site rebuilding hundreds of times" touches the following skills:

-   **Releases**: Deploys all changes as a single atomic operation
-   **Webhooks**: Prevents the flood of rebuilds those webhook events trigger.

The agent routes to the primary skill and reads cross-referenced skills as needed. Skills include explicit cross-references for this purpose.

## Disambiguating

Some routes prompt for clarification first. **Localization**, for instance, behaves differently for the editorial UI versus CDA delivery, so the skill clarifies which you mean before answering. This is by design.

**Additional Resource:** Refer to the [Skill Anatomy](/docs/developers/skills-skill-anatomy) documentation for details.
