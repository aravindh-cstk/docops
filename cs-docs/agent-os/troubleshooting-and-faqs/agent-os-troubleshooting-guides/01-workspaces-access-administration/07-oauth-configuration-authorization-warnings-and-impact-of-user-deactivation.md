---
title: "OAuth Configuration, Authorization Warnings, and Impact of User Deactivation"
description: "OAuth Configuration, Authorization Warnings, and Impact of User Deactivation"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/07-oauth-configuration-authorization-warnings-and-impact-of-user-deactivation
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: cs74fb1bccf7255921
---

# OAuth Configuration, Authorization Warnings, and Impact of User Deactivation

Customers may see OAuth authorization warnings, have uncertainty about org selection during OAuth, or observe automation failures when the creating user is deactivated.

**Root Cause**

-   OAuth authorization is org-specific and depends on selection during consent.
-   Revoking an authorization invalidates tokens used by dependent automations.
-   Automations can fail if created under a user who is later deactivated (token/user-context dependency).

**Resolution**

1.  Re-authorize OAuth ensuring the correct org is selected.
2.  Avoid revoking active OAuth authorizations used by production automations.
3.  Migrate critical automations to approved service accounts before deactivating users.

Automations continue running successfully after OAuth validation and user lifecycle changes.
