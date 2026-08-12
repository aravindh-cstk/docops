---
title: "Scheduled Publish Overridden by a Manual Publish on the Same Entry"
description: "Scheduled Publish Overridden by a Manual Publish on the Same Entry"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/08-scheduled-publish-overridden-by-a-manual-publish-on-the-same-entry
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csbe3356fea8225c2a
---

# Scheduled Publish Overridden by a Manual Publish on the Same Entry

An editor schedules a future publish for one field of an entry. Another editor manually publishes the same entry before the scheduled time. The scheduled publish still fires at the set time, but now publishes an outdated or unexpected version.

**Root Cause**

This is expected behavior. Each publish action, whether manual or scheduled publishes the full current state of the entry at the time of execution. A manual publish does not cancel a scheduled publish. When the scheduled publish fires, it publishes whatever version of the entry is current at that time, which may include or overwrite the manually published changes depending on the sequence of edits.

**Resolution**

There is no configuration or permission setting to prevent a manual publish from affecting a scheduled publish on the same entry. Recommended workflow practices:

1.  Coordinate publish activities between editors working on the same entry to prevent conflicts.
2.  Cancel the scheduled publish explicitly if a manual publish has made it redundant — navigate to the scheduled publish in the CMS and delete the schedule.
3.  Use Releases for controlled publishing workflows where multiple entries are coordinated and published together at a specific time.

Teams working on the same entry should communicate before publishing to avoid unintended overrides of scheduled content.
