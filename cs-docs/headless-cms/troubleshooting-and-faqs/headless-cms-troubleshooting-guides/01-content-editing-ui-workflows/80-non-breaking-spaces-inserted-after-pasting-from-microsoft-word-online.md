---
title: "Non-Breaking Spaces Inserted After Pasting from Microsoft Word Online"
description: "Non-Breaking Spaces Inserted After Pasting from Microsoft Word Online"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/80-non-breaking-spaces-inserted-after-pasting-from-microsoft-word-online
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs5e6bc6ca36d33f9d
---

# Non-Breaking Spaces Inserted After Pasting from Microsoft Word Online

Content pasted from Microsoft Word Online into the RTE causes unexpected line breaks on the published website. Inspection shows &nbsp; characters between words.

**Root Cause**

Microsoft Word Online inserts &nbsp; characters at copy time to preserve word spacing. When pasted into the RTE, these are preserved and can cause line-break issues in narrow containers.

**Resolution**

1.  Strip &nbsp; characters from RTE content on the frontend before rendering - replace with regular spaces.
2.  Alternatively, paste via an intermediate plain text editor to strip the non-breaking spaces before reaching the RTE.
3.  For bulk cleanup, use the CMA to fetch entries, apply regex replacement (&nbsp; to space), and update entries programmatically.

After implementing frontend stripping or the plain text paste workflow, verify that published content no longer shows unexpected line breaks from &nbsp; characters.
