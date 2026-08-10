---
title: "Entry Version Warning Showing Older Version"
description: "Entry Version Warning Showing Older Version"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/02-entry-version-warning-showing-older-version
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csf145002050c9a510
---

# Entry Version Warning Showing Older Version

Warnings such as “Published before localization” or indicators of older versions appear even after publishing.

**Root Cause**

A Release stores a snapshot of specific entry versions. Publishing a newer version outside the Release does not automatically update the Release reference.

**Resolution**

1.  Open the affected Release.
2.  Update the entries to their latest versions.
3.  Deploy.

Open the Release and confirm that all referenced entries use the latest version and that the warning is no longer displayed.
