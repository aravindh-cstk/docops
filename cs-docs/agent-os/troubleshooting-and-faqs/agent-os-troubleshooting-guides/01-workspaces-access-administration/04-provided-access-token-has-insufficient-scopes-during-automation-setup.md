---
title: "“Provided Access Token Has Insufficient Scopes” During Automation Setup"
description: "“Provided Access Token Has Insufficient Scopes” During Automation Setup"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/04-provided-access-token-has-insufficient-scopes-during-automation-setup
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: cs7abb9c7b1b69ce8f
---

# “Provided Access Token Has Insufficient Scopes” During Automation Setup

During automation setup (especially stack selection), UI may display a token scope error preventing configuration.

**Root Cause** Session/cache behavior leading to stale authorization context.

**Resolution**

1.  Clear browser cache and cookies for the domain.
2.  Log out and log back in.
3.  Retry the stack selection step.
4.  If it persists, test in incognito or alternate browser.

Stack selection succeeds and the automation can be saved and executed.
