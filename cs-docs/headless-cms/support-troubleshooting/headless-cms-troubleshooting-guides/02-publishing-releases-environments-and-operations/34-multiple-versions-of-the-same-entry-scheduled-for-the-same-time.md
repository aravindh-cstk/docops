---
title: "Multiple Versions of the Same Entry Scheduled for the Same Time"
description: "Multiple Versions of the Same Entry Scheduled for the Same Time"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/34-multiple-versions-of-the-same-entry-scheduled-for-the-same-time
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs59bc112f1c70afda
---

# Multiple Versions of the Same Entry Scheduled for the Same Time

Versions 10, 11, and 12 of the same entry are all scheduled to publish at the same time. Inconsistent ordering is observed during testing and it is unclear which version will be live.

**Root Cause**

When multiple versions of the same entry are scheduled for an identical timestamp, the publish jobs execute in parallel. Parallel execution is non-deterministic - there is no guaranteed ordering. Whichever job completes last will be the version that appears live.

**Resolution**

1.  Before scheduling a new version, cancel all previously scheduled publishes for the same entry.
2.  Schedule only the intended latest version for the target time.
3.  To cancel existing scheduled publishes, navigate to the entry and remove any pending schedule from the scheduled publish panel.

After canceling previous schedules and scheduling only the intended version, verify that the correct version goes live at the scheduled time.
