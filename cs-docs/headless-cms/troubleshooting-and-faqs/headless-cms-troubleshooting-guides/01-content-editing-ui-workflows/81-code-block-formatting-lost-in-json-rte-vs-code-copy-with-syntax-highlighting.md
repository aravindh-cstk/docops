---
title: "Code Block Formatting Lost in JSON RTE - VS Code ‘Copy with Syntax Highlighting’"
description: "Code Block Formatting Lost in JSON RTE - VS Code ‘Copy with Syntax Highlighting’"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/81-code-block-formatting-lost-in-json-rte-vs-code-copy-with-syntax-highlighting
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs7751cd44ad19865d
---

# Code Block Formatting Lost in JSON RTE - VS Code ‘Copy with Syntax Highlighting’

When pasting code copied from VS Code or Cursor into a JSON RTE Code Snippet block, the formatted code appears as a continuous paragraph without syntax structure.

**Root Cause**

VS Code includes hidden formatting metadata when ‘Copy with Syntax Highlighting’ is enabled. This clipboard metadata interferes with the JSON RTE’s parsing of pasted code.

**Resolution**

1.  In VS Code, disable ‘Copy with Syntax Highlighting’: Settings > search for ‘editor.copyWithSyntaxHighlighting’ and set it to false.
2.  After disabling the setting, copy and paste the code again into the JSON RTE Code Snippet block.
3.  Alternatively, paste into a plain text editor first to strip all formatting metadata, then copy from there into the RTE.

After disabling ‘Copy with Syntax Highlighting’, paste code into the Code Snippet block and confirm it renders as structured code without collapsing into a paragraph.
