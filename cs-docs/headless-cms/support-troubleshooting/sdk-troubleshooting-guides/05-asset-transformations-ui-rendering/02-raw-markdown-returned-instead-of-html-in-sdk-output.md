---
title: "Raw Markdown Returned Instead of HTML in SDK Output"
description: "Raw Markdown Returned Instead of HTML in SDK Output"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/05-asset-transformations-ui-rendering/02-raw-markdown-returned-instead-of-html-in-sdk-output
doc_type: faq
_cms_section_uid: cs541cf84fe03e20d3
_cms_faq_uid: cs4676289211108daf
---

# Raw Markdown Returned Instead of HTML in SDK Output

Content from Markdown fields is returned as raw Markdown syntax in the SDK response, leading to formatting issues on the live site.

**Root Cause**

Contentstack APIs return raw data (Markdown or JSON RTE) to maintain a headless architecture; the responsibility of parsing and rendering this data lies with the frontend application.

**Resolution**

SDK responses intentionally return raw markdown content; HTML rendering is application responsibility.

1.  Classify the field first:
    -   **Markdown field** -> expect raw markdown string from SDK.
    -   **JSON RTE field** -> expect structured JSON, not pre-rendered HTML.
2.  For JSON RTE content that includes embedded entries/assets, fetch with SDK query helpers such as .includeEmbeddedItems().
3.  For reference fields used in render paths, include linked content using .includeReference(...) where needed.
4.  Render in the application layer:
    -   Markdown -> parse with your app’s markdown renderer.
    -   JSON RTE -> render through your rich-text renderer/component pipeline.
5.  Sanitize final HTML output according to frontend security policy before DOM injection.
6.  If output is still raw, verify the UI render path is not escaping HTML as plain text.

API response returns raw markdown/JSON RTE as expected, and frontend render output shows formatted HTML with embedded items resolved where configured. Escalate with field type (Markdown vs JSON RTE), sample payload, query helper usage (includeEmbeddedItems/includeReference), and renderer configuration.
