---
title: "WYSIWYG HTML Mismatch Between CMS UI and Delivery API Response"
description: "WYSIWYG HTML Mismatch Between CMS UI and Delivery API Response"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/34-wysiwyg-html-mismatch-between-cms-ui-and-delivery-api-response
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4078731674fa4e94
---

# WYSIWYG HTML Mismatch Between CMS UI and Delivery API Response

The HTML content in a WYSIWYG field displayed in the Contentstack UI does not match the HTML returned by the Delivery API, even though the entry is at the same version. The mismatch occurs consistently on a specific entry and environment.

**Root Cause**

This is a data desync issue at the platform level where the HTML content stored for delivery is out of sync with the content stored for the CMS UI rendering layer. This can occur due to a data processing anomaly during a save or publish operation. The fix requires a platform-level data repair.

**Resolution**

1.  Re-save the affected entry (without content changes) to trigger a re-write of the delivery data.
2.  Re-publish the entry to propagate the corrected content to the delivery layer.
3.  Fetch the entry via the CDA and confirm the HTML now matches the CMS UI representation.
4.  If the mismatch persists after re-saving and re-publishing, contact Contentstack Support with the entry UID, environment, and stack details for a platform-level data repair.

After re-saving and re-publishing the entry, verify the WYSIWYG HTML in the CDA response matches the content visible in the CMS UI.
