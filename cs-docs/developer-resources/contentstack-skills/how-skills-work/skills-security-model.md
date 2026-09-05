---
title: "Security Model"
description: "See how Contentstack Agent Skills protect management tokens and secrets, gating destructive actions behind confirmation for safe AI-assisted development."
url: /developers/skills-security-model
uid: blte3ed709b375d4b6a
---

# Security Model

## Security Model

Use this guide to understand the safety contract every skill follows, so you know what a skill does and does not do without your explicit confirmation, especially around tokens and destructive operations. It covers the default rules shared across CMS, Developer Experience, Launch, Developer Hub, and Brand Kit skills, plus four safety pillars: defaults, destructive actions, secrets, and environment variables.

## Product-level defaults

A product tags each skill, and each product defines baseline safety rules.

### CMS

-   Never expose management tokens or API keys.
-   Always use environment variables for credentials.
-   Route all CMA calls through server-side proxies in browser apps.
-   Never hardcode stack API keys in client-side code.

### Developer Experience

-   Never expose deployment tokens or environment secrets.
-   Validate deployment targets before triggering.
-   Require confirmation for production deployments.
-   Never auto-deploy to production without review.

### Launch

-   Never expose deployment tokens or environment secrets.
-   Validate deployment targets before triggering.
-   Require confirmation for production deployments.
-   Never auto-deploy to production without review.

### Developer Hub

-   Never expose OAuth client secrets or app signing keys.
-   Validate all app installation scopes.
-   Never grant broader permissions than required.
-   Keep app credentials server-side only.

### Brand Kit

-   Never expose Brand Kit API tokens.
-   Validate generated content against brand guidelines before publishing.
-   Treat Knowledge Vault content as brand-governed source material.
-   Confirm resource UIDs before any destructive operation.

## The four safety pillars

Every skill's Security section addresses four areas.

### Defaults

The standing rules the skill always applies. For example, that delivery tokens are safe to include in client-side code while management tokens are not, or that Live Preview should never be enabled in production builds.

### Destructive actions

Most skills are **advisory and read-only**: they explain and generate code but never mutate your stack. They explicitly refuse to delete, publish, unpublish, or overwrite, and explain the impact instead.

**Action skills** can cause external side effects and gate them behind explicit confirmation:

-   **Trigger and Monitor Launch Deployments**. Requires explicit confirmation for production deployments. Never auto-deploys. Exits non-zero on failure.
-   **Sync Launch env vars**. Treats any PATCH as a destructive external action. Confirms the target project and environment. Prefers dry-run.
-   **Migration Companion**. Gates login, stack creation, and code edits behind confirmation.

### Secrets

-   No skill ever prints, echoes, infers, or stores secrets.
-   If you paste a token, the skill acknowledges it at a high level and does not repeat it.
-   Examples always use placeholders and environment variables.
-   The Launch skills log only key names and counts, never values.

### Environment variables

Credentials belong in environment variables, never in source or client-visible config. Skills follow these conventions:

-   Use descriptive placeholders: CONTENTSTACK\_API\_KEY, CONTENTSTACK\_DELIVERY\_TOKEN, CONTENTSTACK\_MANAGEMENT\_TOKEN
-   Recommend server-side injection for privileged credentials

## Token safety reference

A common pattern across CMS skills:

| Token | Client-safe? | Use |
| --- | --- | --- |
| **Delivery token** | Yes | Read published content via the CDA |
| **Preview token** | Treat as sensitive | Read unpublished draft content for Live Preview |
| **Management token** | No, server-side only | Stack-level read/write (CMA) |
| **Authtoken / OAuth** | No, server-side only | User sessions and automation (OAuth preferred in SSO orgs) |

**Additional Resource:** Refer to the [Tokens & Authentication](https://github.com/contentstack/contentstack-agent-skills/tree/main/skills/cms-tokens-authentication) documentation for full guidance.

## What this means for you

-   **Advisory skills** are read-only and won't change your stack.
-   **Action skills** pause and ask before doing anything irreversible or production-facing.
-   The agent does not hardcode credentials. It uses environment variables regardless of how the request is phrased.

**Additional Resource:** Refer to the [Verify your setup](https://www.contentstack.com/docs/developers/skills-get-started#verify-your-setup) documentation for a validation test.
