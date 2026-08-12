---
title: "App UI Not Reflecting Localized Field Changes"
description: "App UI Not Reflecting Localized Field Changes"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/02-app-permissions-ui-visibility/04-app-ui-not-reflecting-localized-field-changes
doc_type: faq
_cms_section_uid: csfbea7c22c80651b0
_cms_faq_uid: csf117b91dba90b504
---

# App UI Not Reflecting Localized Field Changes

A Marketplace app shows the same content across all locales, failing to reflect changes made in non-master languages.

**Resolution**

1.  Ensure the app's API queries include the locale parameter.
2.  The app must be configured to handle the specific locale code (e.g., ja-jp).
3.  Verify that the content has been published in the target locale.

Switching locales in the entry editor causes the app to display the corresponding localized data.
