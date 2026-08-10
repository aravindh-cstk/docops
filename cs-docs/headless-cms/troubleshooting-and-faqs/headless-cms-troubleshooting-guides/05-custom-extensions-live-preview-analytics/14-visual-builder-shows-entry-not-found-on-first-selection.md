---
title: "Visual Builder Shows ‘Entry Not Found’ on First Selection"
description: "Visual Builder Shows ‘Entry Not Found’ on First Selection"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/14-visual-builder-shows-entry-not-found-on-first-selection
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csac718d13c87b3c1a
---

# Visual Builder Shows ‘Entry Not Found’ on First Selection

In Visual Builder, clicking an entry for the first time shows an ‘Entry not found’ error. The entry only loads correctly after selecting it a second time.

**Root Cause**

A trailing forward slash in the environment URL configuration causes Visual Builder to fail to resolve the entry on the first attempt. Removing the trailing slash allows the entry to load correctly on the first selection.

**Resolution**

1.  Navigate to stack Settings > Environments and select the affected environment.
2.  Remove any trailing slash from the base URL for that environment.
3.  Save the environment configuration.
4.  Reload Visual Builder and confirm entries load correctly on the first selection.

After removing the trailing slash, select an entry in Visual Builder and confirm it loads without an ‘Entry not found’ error.
