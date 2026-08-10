---
title: "JSON RTE Embed Entries Not Appearing - Content Type Requires URL Field"
description: "JSON RTE Embed Entries Not Appearing - Content Type Requires URL Field"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/42-json-rte-embed-entries-not-appearing-content-type-requires-url-field
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs2640f1951d19b050
---

# JSON RTE Embed Entries Not Appearing - Content Type Requires URL Field

When attempting to embed an entry link in the JSON RTE, no entries appear in the selection dialog. The content types exist but their entries cannot be selected for embedding.

**Root Cause**

For a content type’s entries to be selectable for embedding as links in the JSON RTE, the content type must include a URL field. Without a URL field, the JSON RTE cannot determine where the embedded entry links to and excludes those entries from the embed selection.

**Resolution**

1.  Open the content type whose entries should be embeddable in the Content Type Builder.
2.  Add a URL field to the content type.
3.  Save the content type.
4.  Reload the JSON RTE entry and attempt to embed a link again - entries from the updated content type should now appear.

After adding the URL field to the content type, confirm the entries appear as selectable options in the JSON RTE embed link dialog.
