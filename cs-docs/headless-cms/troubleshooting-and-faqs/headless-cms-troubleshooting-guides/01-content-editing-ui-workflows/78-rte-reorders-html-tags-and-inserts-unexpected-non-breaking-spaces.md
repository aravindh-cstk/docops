---
title: "RTE Reorders HTML Tags and Inserts Unexpected Non-Breaking Spaces"
description: "RTE Reorders HTML Tags and Inserts Unexpected Non-Breaking Spaces"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/78-rte-reorders-html-tags-and-inserts-unexpected-non-breaking-spaces
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4c171ac44083ff99
---

# RTE Reorders HTML Tags and Inserts Unexpected Non-Breaking Spaces

The Rich Text Editor reorders nested HTML tags (swapping <strong> and <sup> positions) and automatically inserts non-breaking spaces (&nbsp;). The output HTML differs from what was entered.

**Root Cause**

Two separate issues: (1) a confirmed platform bug where <strong> and <sup> tags were reordered during edits - an engineering fix has been deployed; (2) &nbsp; insertion is expected RTE behavior for block structure and cursor stability.

**Resolution**

1.  For tag reordering: the fix has been deployed. If reordering still occurs, contact Contentstack Support with the specific tag combination and reproduction steps.
2.  For &nbsp; insertion: strip these characters on the frontend before rendering if they cause visual issues.
3.  For the extra <p>&nbsp;</p> appearing above images: remove via the HTML view in the editor, or apply p:empty { display: none } CSS on the frontend.

After the fix deployment, verify that <strong>/<sup> tag ordering is preserved when editing entries containing both tags.
