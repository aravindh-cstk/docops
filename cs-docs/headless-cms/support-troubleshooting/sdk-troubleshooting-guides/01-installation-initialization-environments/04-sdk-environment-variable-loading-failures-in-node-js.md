---
title: "SDK Environment Variable Loading Failures in Node.js"
description: "SDK Environment Variable Loading Failures in Node.js"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/01-installation-initialization-environments/04-sdk-environment-variable-loading-failures-in-node-js
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: csf49765688080d75c
---

# SDK Environment Variable Loading Failures in Node.js

The SDK fails to initialize or connect with "Undefined" values because it cannot successfully read the API Key or Token from local .env files.

**Root Cause** The SDK is imported or initialized before the application has finished loading .env files, or there is a naming mismatch between the system environment keys and the code.

**Resolution**

1.  Load env variables before any SDK initialization/import side effects.
2.  Match env key names exactly between .env and code.
3.  Restart runtime after changing .env.

Startup shows non-empty required env vars (redacted), and the first SDK call returns 2xx. Escalate with startup order snippet and SDK version if envs are present but init still fails.
