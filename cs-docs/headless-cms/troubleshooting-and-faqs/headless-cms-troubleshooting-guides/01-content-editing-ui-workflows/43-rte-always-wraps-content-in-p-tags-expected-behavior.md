---
title: "RTE Always Wraps Content in <p> Tags - Expected Behavior"
description: "RTE Always Wraps Content in <p> Tags - Expected Behavior"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/43-rte-always-wraps-content-in-p-tags-expected-behavior
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csda979b03de276ece
---

# RTE Always Wraps Content in <p> Tags - Expected Behavior

All content entered in the RTE is wrapped in <p> tags in the API response, even for single-line text. This causes issues with frontend rendering code that does not expect paragraph wrappers.

**Root Cause**

The RTE enforces <p> tag wrapping to ensure HTML standards compliance. Block-level elements must be wrapped in appropriate container tags for valid HTML structure. This is intentional behavior.

**Resolution**

Two approaches are available:

1.  Strip <p> tags programmatically on the frontend before rendering, using a utility function that removes the wrapping tags.
2.  Switch to the JSON RTE for the affected field, which provides a structured JSON output that gives the frontend full control over rendering, including the ability to render content without enforced paragraph wrappers.

Choose based on whether the use case benefits from structured JSON (use JSON RTE) or needs the simplest possible fix (strip tags on frontend).
