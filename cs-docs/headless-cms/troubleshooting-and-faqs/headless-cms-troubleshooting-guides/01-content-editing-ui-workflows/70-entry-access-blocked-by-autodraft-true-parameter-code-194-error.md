---
title: "Entry Access Blocked by autodraft=true Parameter - Code 194 Error"
description: "Entry Access Blocked by autodraft=true Parameter - Code 194 Error"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/70-entry-access-blocked-by-autodraft-true-parameter-code-194-error
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs834a9cae9fdbd22d
---

# Entry Access Blocked by autodraft=true Parameter - Code 194 Error

Users are unable to access entries in the Contentstack CMS. The error returned is code 194: ‘not allowed to access draft feature’. The issue affects all users on the stack.

**Root Cause**

The autodraft=true query parameter is being included in API requests for entry access. This parameter is part of the Auto Draft Early Access feature. When included, it triggers a code 194 error because the stack’s organization does not have the Early Access feature enabled, or it was enabled and then caused unexpected behavior in the production environment.

**Resolution**

1.  Navigate to Settings > Early Access Features and disable the Auto Draft (Auto-Save) feature if it is enabled.
2.  Clear browser cache and hard refresh the page (Ctrl+Shift+R / Cmd+Shift+R).
3.  If the issue persists after disabling the feature, contact Contentstack Support with the stack API key and the code 194 error details.

After disabling Auto Draft and clearing cache, attempt to access entries and confirm code 194 no longer appears and entries load correctly.
