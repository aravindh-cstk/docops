---
title: "Scheduled Publish Not Consistently Including Referenced Entries"
description: "Scheduled Publish Not Consistently Including Referenced Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/33-scheduled-publish-not-consistently-including-referenced-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs0a3ea008381f3df3
---

# Scheduled Publish Not Consistently Including Referenced Entries

When a parent entry is scheduled for future publication, the referenced child entries do not consistently publish at the scheduled time. The parent publishes but referenced entries may remain at their previous state.

**Root Cause**

Scheduling a parent entry does not automatically include referenced entries in the same scheduled publish job unless they are explicitly added. When referenced entries are not included, they remain at their current published version when the parent publishes.

**Resolution**

1.  When scheduling the parent entry, include all referenced entries in the same scheduled publish job.
2.  In the CMS UI, use the Publish with References option during scheduling to automatically include referenced entries.
3.  For the most reliable approach, schedule the referenced entries first (a few minutes earlier), then schedule the parent entry. This guarantees referenced entries are live before the parent publishes.
4.  Use Releases to group parent and referenced entries together and schedule the release deployment as an atomic operation.

After scheduling both the referenced entries and parent entry (referenced first), verify at the scheduled time that all entries are published with the correct versions.
