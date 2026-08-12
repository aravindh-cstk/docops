---
title: "Stack API Key Security - Cannot Be Rotated or Changed"
description: "Stack API Key Security - Cannot Be Rotated or Changed"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/25-stack-api-key-security-cannot-be-rotated-or-changed
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs7da0700f7908b1f5
---

# Stack API Key Security - Cannot Be Rotated or Changed

A customer wants to rotate or change the Stack API key following a security concern. They cannot find a rotation option.

**Root Cause**

The Stack API key is a public identifier for the stack. Unlike tokens, it is not a sensitive credential on its own - it identifies the stack but does not authorize write access without an accompanying token. The API key cannot be rotated via the UI or internally.

**Resolution**

-   The Stack API key is commonly included in public-facing code and is not a secret.
-   Delivery tokens and management tokens provide actual authorization - rotate these immediately if exposed.

1.  If a management token or delivery token was exposed (not just the API key), rotate those immediately via Settings > Tokens.
2.  If the API key must change for compliance reasons, clone the stack (which creates a new stack with a new API key) and migrate traffic to the new stack.

After rotating any exposed tokens, confirm the old tokens return authentication errors and the application functions correctly with new tokens.
