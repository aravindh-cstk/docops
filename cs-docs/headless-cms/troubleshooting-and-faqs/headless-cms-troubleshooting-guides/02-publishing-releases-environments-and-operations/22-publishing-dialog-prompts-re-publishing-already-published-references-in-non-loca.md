---
title: "Publishing Dialog Prompts Re-Publishing Already-Published References in Non-Localized Locales"
description: "Publishing Dialog Prompts Re-Publishing Already-Published References in Non-Localized Locales"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/22-publishing-dialog-prompts-re-publishing-already-published-references-in-non-loca
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs7d5d50f0e09c02a0
---

# Publishing Dialog Prompts Re-Publishing Already-Published References in Non-Localized Locales

The publish dialog incorrectly shows already-published reference entries as needing republishing when publishing a specific entry in non-localized locales. This creates unnecessary re-publish operations and editorial confusion.

**Root Cause**

This is a platform-level bug specific to certain entries where the publishing dialog’s reference resolution logic for non-localized locales incorrectly flags already-published references as pending. The behavior was identified as data-specific - other entries using the same references do not exhibit the issue.

**Resolution**

1.  Contact Contentstack Support with the affected entry UID and content type. Engineering will investigate whether data corruption or a stale reference state is causing the incorrect flag.
2.  As a workaround, proceed with the publish - republishing already-published references does not cause data loss and is safe. The entries simply receive a new publish timestamp.
3.  After the platform fix is applied, confirm the publish dialog no longer prompts unnecessary re-publishing of already-published references.

After the fix, attempt a publish of the affected entry and confirm the dialog shows only genuinely unpublished references as pending.
