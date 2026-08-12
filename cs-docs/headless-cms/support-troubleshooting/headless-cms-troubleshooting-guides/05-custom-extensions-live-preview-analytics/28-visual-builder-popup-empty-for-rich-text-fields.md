---
title: "Visual Builder Popup Empty for Rich Text Fields"
description: "Visual Builder Popup Empty for Rich Text Fields"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/28-visual-builder-popup-empty-for-rich-text-fields
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs082c046f162cd3a6
---

# Visual Builder Popup Empty for Rich Text Fields

In Visual Builder, clicking the Edit button on a rich text field opens a popup that is completely empty. The rich text content is visible and correct in the right-hand editor panel, but the inline edit popup shows nothing.

**Root Cause**

The data-csl-value attribute for the rich text field contains escaped HTML rather than raw HTML. Visual Builder requires the data-csl-value to contain unescaped, raw HTML. If the front-end framework escapes the HTML before rendering the attribute, the popup cannot parse the content.

**Resolution**

1.  Ensure the data-csl-value attribute contains raw, unescaped HTML.
2.  Confirm that the Live Preview SDK is initialized in builder mode for Visual Builder sessions.
3.  Verify the front-end framework is not escaping the HTML value when spreading tag attributes (for example, in React: <div {…entry.$?.body ?? {}} dangerouslySetInnerHTML={{…}} />).
4.  Use the correct tag spreading syntax to ensure data-cslp and data-csl-value are set without HTML escaping.

After correcting the data-csl-value to contain raw HTML, click the Edit button on the rich text field in Visual Builder. If the popup displays the content correctly, the attribute value is now unescaped.
