---
title: "Live Preview Not Initialized on All Pages - Only Works on Homepage"
description: "Live Preview Not Initialized on All Pages - Only Works on Homepage"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/17-live-preview-not-initialized-on-all-pages-only-works-on-homepage
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csbfa6481867c501d0
---

# Live Preview Not Initialized on All Pages - Only Works on Homepage

Live Preview functions correctly on the homepage but does not work on other pages of the application. Editing content for non-homepage entries has no effect on the preview.

**Root Cause**

ContentstackLivePreview.init() is only called in the homepage component or layout, not globally. For Live Preview to work on all pages - including error pages and 404 pages - the SDK must be initialized on every page of the application.

**Resolution**

1.  Move ContentstackLivePreview.init() to the global layout file (for example, \_app.tsx in Pages Router or app/layout.tsx in App Router) so it executes on every page load.
2.  For App Router, ensure it is inside a Client Component as described above.
3.  Include initialization even on error pages and 404 pages to prevent tracker errors on those routes.

After moving initialization to the global layout, navigate to a non-homepage entry in the editor and confirm the preview updates correctly.
