---
title: "Bulk “Add to Release” Operations Stuck or Failing"
description: "Bulk “Add to Release” Operations Stuck or Failing"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/02-bulk-add-to-release-operations-stuck-or-failing
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csecd2b607c02cec31
---

# Bulk “Add to Release” Operations Stuck or Failing

Bulk “Add to Release” operations may remain in a queued status for an extended period or fail to complete. This behavior is identified as a platform limitation when the system experiences high concurrent load on bulk processing services.

**Root Cause**

High demand on background processing services can delay or block task execution.

-   **Symptoms**: Operations may show a "queued" status for an extended time without progressing.
-   **Partial Success**: Partial success can occur where only a subset of the selected entries are successfully added before the process stalls, if one or more selected entries do not meet the publishing requirements.
-   **Retry Safety**: It is generally safe to retry the operation if it remains stuck, as the system will identify existing Release members and avoid duplicates.

**Resolution**

-   **Stagger Operations**: Avoid triggering excessive concurrent bulk actions across the same stack to reduce service contention.
-   **Retry Strategy**: Monitor the task status; if the operation remains queued significantly past expected limits, retry the action after platform load has stabilized.
-   **Batch Sizing**: Reduce the number of entries per individual "Add to Release" action to ensure faster completion times.

The operation is confirmed successful once all selected entries appear within the target Release and the task status in the background activity log marks as "Completed".
