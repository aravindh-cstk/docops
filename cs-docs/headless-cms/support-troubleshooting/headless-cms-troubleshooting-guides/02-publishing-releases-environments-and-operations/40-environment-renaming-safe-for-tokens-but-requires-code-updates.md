---
title: "Environment Renaming - Safe for Tokens but Requires Code Updates"
description: "Environment Renaming - Safe for Tokens but Requires Code Updates"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/40-environment-renaming-safe-for-tokens-but-requires-code-updates
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs5438129ce2d9eb3b
---

# Environment Renaming - Safe for Tokens but Requires Code Updates

A team wants to rename the ‘dev’ environment to ‘preview’. They are concerned this will invalidate API tokens or break existing configurations.

**Root Cause**

Renaming an environment in the UI does not affect delivery tokens, management tokens, or API keys - these reference the environment by its internal identifier, not its display name. However, anywhere the environment name is referenced as a string in application code, SDK configurations, or tooling (such as deploy scripts, environment variables, or content queries), those references must be updated manually.

**Resolution**

1.  Rename the environment in Settings > Environments - this will not break existing tokens.
2.  Update any hardcoded environment name references in application code, SDK initialization, and CI/CD pipelines from ‘dev’ to ‘preview’.
3.  Update environment variables on all hosting platforms (for example, Vercel, Netlify) that reference the environment name.
4.  Test API calls after renaming to confirm content delivery is working with the updated environment name.

After renaming and updating all code references, confirm that the application fetches and publishes content correctly using the renamed environment.
