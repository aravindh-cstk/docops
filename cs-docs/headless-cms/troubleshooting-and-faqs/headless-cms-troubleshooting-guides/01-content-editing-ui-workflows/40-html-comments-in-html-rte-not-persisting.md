---
title: "HTML Comments in HTML RTE Not Persisting"
description: "HTML Comments in HTML RTE Not Persisting"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/40-html-comments-in-html-rte-not-persisting
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs9ba171fb20eacc23
---

# HTML Comments in HTML RTE Not Persisting

HTML comments added in the HTML RTE mode disappear when the entry is saved. The expected behavior of commenting out code using <!– --> syntax does not work.

**Root Cause**

HTML commenting within the RTE has never been an officially supported feature. The RTE processes and sanitizes HTML on save, removing markup that does not conform to its supported element set. HTML comment syntax (<!– -->) falls outside the supported markup and is stripped.

**Resolution**

This is expected platform behavior. To store developer notes or conditionally toggle content:

1.  Use a separate text field in the content type specifically for internal notes.
2.  For conditional content toggling, use field visibility rules or separate fields rather than HTML comments.

HTML comments cannot be reliably stored in the RTE. Use alternate content type fields for notes or metadata.
