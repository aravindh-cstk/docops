---
title: "Visual Builder Requires Live Preview Implementation First"
description: "Visual Builder Requires Live Preview Implementation First"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/34-visual-builder-requires-live-preview-implementation-first
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs9091d8682d3edb80
---

# Visual Builder Requires Live Preview Implementation First

A customer attempts to use Visual Builder but cannot access it, or sees errors when navigating to the Visual Editor. They believe it is a platform bug.

**Root Cause**

Visual Builder requires Live Preview to be configured and implemented in the front-end application. Visual Builder communicates with the front-end through the Live Preview connection. Without Live Preview, Visual Builder has no channel to render or edit content.

**Resolution**

1.  Implement Live Preview first: install the @contentstack/live-preview-utils SDK, configure ContentstackLivePreview.init() with the correct stack credentials, and deploy the application with the preview endpoint accessible.
2.  Configure the Live Preview URL in Settings > Live Preview to point to the preview deployment.
3.  Once Live Preview works and entries load in the preview pane, Visual Builder becomes accessible from the entry editor.

After Live Preview is fully implemented, navigate to an entry and click Open Visual Builder to confirm the builder loads and fields are editable inline.
