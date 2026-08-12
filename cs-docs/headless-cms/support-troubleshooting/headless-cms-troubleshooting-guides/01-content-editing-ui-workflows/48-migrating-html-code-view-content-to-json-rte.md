---
title: "Migrating HTML Code View Content to JSON RTE"
description: "Migrating HTML Code View Content to JSON RTE"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/48-migrating-html-code-view-content-to-json-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs80030a872779c9bd
---

# Migrating HTML Code View Content to JSON RTE

A customer uses raw HTML in the HTML RTE’s Code View mode and needs to migrate this content to the JSON RTE. The JSON RTE does not have a Code View equivalent.

**Root Cause**

The JSON RTE is built on a structured JSON architecture and cannot support raw HTML editing. Code View in the HTML RTE allows arbitrary HTML that does not map directly to the JSON RTE’s node-based structure.

**Resolution**

1.  For storing HTML code snippets or widgets, use a Custom Block in the JSON RTE, which allows embedding structured custom elements.
2.  For small inline HTML fragments, use Inline Custom Elements within the JSON RTE.
3.  For bulk migration of HTML RTE content to JSON RTE, use a programmatic approach: fetch entries via the CMA, convert HTML to JSON RTE structure using the @contentstack/json-rte-serializer library, and update entries via the CMA.
4.  For complex HTML that cannot be converted, consider keeping the HTML RTE for that content type rather than forcing migration to JSON RTE.

After selecting the appropriate migration approach, verify that the migrated content renders correctly in the frontend using the JSON RTE output.
