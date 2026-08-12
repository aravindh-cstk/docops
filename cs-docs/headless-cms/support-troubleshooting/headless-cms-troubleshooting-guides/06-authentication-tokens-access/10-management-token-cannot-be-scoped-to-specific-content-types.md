---
title: "Management Token Cannot Be Scoped to Specific Content Types"
description: "Management Token Cannot Be Scoped to Specific Content Types"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/10-management-token-cannot-be-scoped-to-specific-content-types
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csd8bf1f501c6c002c
---

# Management Token Cannot Be Scoped to Specific Content Types

A customer wants to restrict a management token to a specific content type or subset of resources to reduce the risk if the token is exposed. They want to limit what the token can do within an automation.

**Root Cause**

Management tokens in Contentstack are stack-level credentials. They can be scoped to branches and environment aliases, but cannot be restricted to specific content types, entries, or fields. Any management token with access to a branch has read and write access to all content types and entries on that branch.

**Resolution**

There is no native way to scope management tokens to specific content types. Available risk reduction strategies:

1.  Create dedicated branches for high-privilege automations and issue management tokens scoped to those branches only. This isolates automation access to a specific branch rather than the full stack.
2.  Rotate management tokens frequently and use short-lived tokens where the automation framework supports it.
3.  Audit management token usage via the Audit Log to detect unexpected operations.
4.  For UI-extension-based operations, use App SDK proxied requests (see Issue 7) which run under the logged-in user’s permissions rather than a standalone management token.

After implementing branch-scoped tokens and token rotation practices, review the Audit Log to confirm automated operations are correctly attributed to the expected tokens.
