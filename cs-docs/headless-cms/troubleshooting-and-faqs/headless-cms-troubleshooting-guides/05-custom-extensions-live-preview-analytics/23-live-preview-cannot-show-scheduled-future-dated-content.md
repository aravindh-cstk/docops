---
title: "Live Preview Cannot Show Scheduled (Future-Dated) Content"
description: "Live Preview Cannot Show Scheduled (Future-Dated) Content"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/23-live-preview-cannot-show-scheduled-future-dated-content
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs5d7d19970e327219
---

# Live Preview Cannot Show Scheduled (Future-Dated) Content

Editors want to use Live Preview to see how content scheduled for a future publish date will appear on the site before it goes live. Live Preview does not appear to support previewing scheduled content.

**Root Cause**

Live Preview is designed to preview the current draft and unpublished state of entries. It does not support previewing content at a future scheduled publish date. The feature renders what the entry looks like now, not how it will look after a future publish action completes.

**Resolution**

Scheduled content preview is not supported in Live Preview. Available alternatives:

1.  Use Releases to group future-dated content and review it as a set before scheduling the release deployment.
2.  Create a dedicated staging environment and manually publish the scheduled content there to preview the future state.
3.  Use the Timeline feature (available with the new Preview service) to step through published versions of content over time.

Document this limitation for editorial teams so they understand that Live Preview reflects current draft state, not future scheduled state.
