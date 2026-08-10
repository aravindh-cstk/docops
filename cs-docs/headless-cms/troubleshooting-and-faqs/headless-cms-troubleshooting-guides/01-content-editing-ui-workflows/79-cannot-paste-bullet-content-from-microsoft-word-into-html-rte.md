---
title: "Cannot Paste Bullet Content from Microsoft Word into HTML RTE"
description: "Cannot Paste Bullet Content from Microsoft Word into HTML RTE"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/79-cannot-paste-bullet-content-from-microsoft-word-into-html-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cse9466539b4903b24
---

# Cannot Paste Bullet Content from Microsoft Word into HTML RTE

Editorial users cannot copy and paste bullet lists from a Microsoft Word document into the HTML Rich Text Editor. The paste operation does not preserve the list structure.

**Root Cause**

Microsoft Word uses a proprietary clipboard format. The HTML RTE does not fully parse Word’s clipboard format and drops bullet/list structure during paste. This is a known limitation of browser-based RTEs.

**Resolution**

1.  Paste into a plain text editor (Notepad or TextEdit in plain text mode) first to strip all Word formatting, then paste from there into the RTE.
2.  Alternatively, use the RTE’s own list formatting tools to recreate the bullet structure after pasting the plain text.
3.  For teams frequently copying from Word, consider using the JSON RTE which has better handling for structured content imports.

After stripping Word formatting before pasting, confirm the text pastes correctly into the HTML RTE without losing content.
