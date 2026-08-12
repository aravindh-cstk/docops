---
title: "Live Preview Mode Must Be Set to ‘builder’ for Preview Share Link Comments"
description: "Live Preview Mode Must Be Set to ‘builder’ for Preview Share Link Comments"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/31-live-preview-mode-must-be-set-to-builder-for-preview-share-link-comments
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs911b415994cefe9a
---

# Live Preview Mode Must Be Set to ‘builder’ for Preview Share Link Comments

When using the Preview Share Link feature, users cannot add comments on the shared preview. The comment functionality does not appear or is non-functional.

**Root Cause**

Preview Share requires the Live Preview SDK to be initialized in builder mode. If the mode is set conditionally based on query parameters rather than always set to builder, the Preview Share Link feature will not receive the correct mode and comment functionality will fail.

**Resolution**

1.  Update the Live Preview SDK initialization to always set mode to ‘builder’ - do not make this conditional on query parameters.
2.  Ensure the SDK is initialized with the correct Preview API configuration alongside the builder mode setting.

After setting mode: ‘builder’ unconditionally in the SDK initialization, reload the Preview Share Link and confirm that comment functionality is available and operational.
