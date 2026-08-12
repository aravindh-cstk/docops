---
title: "Scheduling Publish for a Parent Entry That Has Referenced Entries"
description: "Scheduling Publish for a Parent Entry That Has Referenced Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/12-scheduling-publish-for-a-parent-entry-that-has-referenced-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csb76efe3a13448717
---

# Scheduling Publish for a Parent Entry That Has Referenced Entries

A parent entry is scheduled for future publish, but referenced child entries are not included in the scheduled publish. When the scheduled publish fires, the parent is published but the referenced entries remain at their previous state, causing content inconsistencies.

**Root Cause**

When scheduling a publish for a parent entry, referenced entries are not automatically included in the schedule unless they are explicitly added. Scheduling only the parent publishes the parent entry at the set time, but referenced entries retain their current published version. If referenced entries have unpublished changes, those changes will not go live with the scheduled parent publish.

**Resolution**

1.  When scheduling a publish for a parent entry that references other entries, include all referenced entries in the scheduled publish.
2.  In the CMS UI, use the Publish with References option when scheduling to automatically include referenced entries in the publish action.
3.  Via the CMA, include all referenced entry UIDs explicitly in the publish request payload alongside the parent entry.
4.  Alternatively, use Releases to group the parent and all referenced entries together and schedule the release deployment, which ensures all entries are published atomically at the scheduled time

After including referenced entries in the scheduled publish or Release, verify at the scheduled time that both the parent and all referenced entries reflect the latest published version.
