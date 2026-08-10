---
title: "Embedding Objects and Assets in HTML RTE"
description: "Embedding Objects and Assets in HTML RTE"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/41-embedding-objects-and-assets-in-html-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csf56db0db49b94bc9
---

# Embedding Objects and Assets in HTML RTE

The HTML RTE does not appear to support embedding entries or assets directly from the editor, while the JSON RTE supports this functionality. Customers assume the HTML RTE cannot embed objects.

**Root Cause**

The HTML RTE does support embedding objects, but the feature must be explicitly enabled. It is disabled by default and requires activation through the RTE’s Advanced Settings.

**Resolution**

1.  Open the content type in the Content Type Builder.
2.  Click on the HTML RTE field to open its properties.
3.  Navigate to Advanced Settings > Custom and enable the Embed toggle.
4.  Save the content type. Editors can now embed entries and assets directly within the HTML RTE.

After enabling the Embed toggle, open an entry and confirm the embed option is available in the HTML RTE toolbar.
