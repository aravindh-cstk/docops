---
title: "Onclick and JavaScript Attributes Stripped from Anchor Tags in RTE"
description: "Onclick and JavaScript Attributes Stripped from Anchor Tags in RTE"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/82-onclick-and-javascript-attributes-stripped-from-anchor-tags-in-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs3747fbdd99eebea2
---

# Onclick and JavaScript Attributes Stripped from Anchor Tags in RTE

nchor tags with onclick attributes entered in the HTML RTE are stripped when switching between HTML and Design views.

**Root Cause**

This is expected behavior. The RTE applies HTML sanitization that removes inline JavaScript event handlers including onclick for XSS security reasons. This cannot be disabled.

**Resolution**

1.  Use CSS classes or data attributes instead of inline onclick: add class=“trigger-modal” or data-action=“open-modal” to the anchor tag and attach the JavaScript handler via external scripts that query these selectors.
2.  Use the JSON RTE’s custom block capability to create structured components that the frontend renders with the required JavaScript behavior.

After moving event handling to external CSS selectors or data attributes, verify the behavior triggers correctly on the frontend without requiring inline JavaScript in RTE content.
