---
title: "Japanese and Chinese Text Causes Line Breaks and Cursor Jumps in Visual Builder"
description: "Japanese and Chinese Text Causes Line Breaks and Cursor Jumps in Visual Builder"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/37-japanese-and-chinese-text-causes-line-breaks-and-cursor-jumps-in-visual-builder
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs8ecb778cc82d669d
---

# Japanese and Chinese Text Causes Line Breaks and Cursor Jumps in Visual Builder

Typing Japanese or Chinese characters in Visual Builder snippet fields causes text to break onto a new line, cursor jumps, or character duplication.

**Root Cause**

This is a known IME (Input Method Editor) input composition issue. During the composition phase, Visual Builder’s field event handling incorrectly processes composition events as final input, causing premature line breaks and cursor jumps.

**Resolution**

1.  As a workaround: compose Japanese or Chinese text in a separate text editor first, then copy and paste the completed text into the Visual Builder field.
2.  Alternatively, use the standard entry editor (not Visual Builder) for content in Japanese or Chinese locales.
3.  Contact Contentstack Support to check the current fix status for IME composition in Visual Builder.

After applying the copy-paste workaround, confirm content in Japanese or Chinese is entered correctly without duplication or cursor issues.
