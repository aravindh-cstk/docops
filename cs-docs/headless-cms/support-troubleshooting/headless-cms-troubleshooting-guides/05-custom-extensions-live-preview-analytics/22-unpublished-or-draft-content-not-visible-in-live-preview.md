---
title: "Unpublished or Draft Content Not Visible in Live Preview"
description: "Unpublished or Draft Content Not Visible in Live Preview"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/22-unpublished-or-draft-content-not-visible-in-live-preview
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cse2482dc41c04beab
---

# Unpublished or Draft Content Not Visible in Live Preview

Live Preview does not show unpublished or draft content. When editors make changes and try to preview them, the preview renders the last published version rather than the draft state.

**Root Cause**

ContentstackLivePreview.init() must be called on every page - including error pages and 404 pages - for the Live Preview session to be active and capable of returning draft content. If the init() call is missing on a page, the SDK falls back to the standard CDA, which returns only published content.

**Resolution**

1.  Ensure ContentstackLivePreview.init() is called in the global layout or on every page of the application, not just the homepage or specific routes.
2.  Verify the enable: true flag is set in the initialization and the correct preview\_token and environment are provided.
3.  When the Live Preview session is active, the SDK automatically fetches draft content. When accessed normally outside a preview session, the SDK returns only published content - this is the expected dual behavior.

After adding the init() call to all pages, navigate to an unpublished entry in the editor and open Live Preview. If draft content is visible in the preview pane, the initialization is correctly applied globally.
