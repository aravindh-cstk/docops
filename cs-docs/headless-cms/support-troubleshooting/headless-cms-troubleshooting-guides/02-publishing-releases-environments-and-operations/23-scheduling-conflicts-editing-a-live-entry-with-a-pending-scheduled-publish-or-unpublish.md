---
title: "Scheduling Conflicts - Editing a Live Entry With a Pending Scheduled Publish or Unpublish"
description: "Scheduling Conflicts - Editing a Live Entry With a Pending Scheduled Publish or Unpublish"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/23-scheduling-conflicts-editing-a-live-entry-with-a-pending-scheduled-publish-or-unpublish
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs158653597e55c06b
---

# Scheduling Conflicts - Editing a Live Entry With a Pending Scheduled Publish or Unpublish

An editor needs to make emergency changes to a live entry that already has a pending scheduled publish or unpublish action. They are unsure how editing the live entry will interact with the pending schedule.

**Root Cause**

Contentstack handles scheduled actions and live edits as separate version-based operations. Understanding the interaction requires knowing which version each action targets.

**Resolution**

**Scenario: Entry is live (published). A scheduled publish exists for a future version.**

Editing and publishing the live entry immediately creates a new version and publishes it. The scheduled action will publish the version it was set against - if that version is now older than the current live version, the scheduled publish may overwrite the current live content when it fires. Cancel the scheduled action before making immediate changes if this is a concern.

**Scenario: Entry is live. A scheduled unpublish exists.**

Editing and saving the entry does not cancel the scheduled unpublish. When the scheduled time arrives, the entry will be unpublished regardless of any edits made. If the entry should remain live after the scheduled time, cancel the scheduled unpublish before making edits.

**Scenario: Entry is not yet published. A scheduled publish exists.**

Edits made before the scheduled publish time will be part of the version that publishes at the scheduled time, provided the entry is saved before the schedule fires. Saving after the schedule fires will create a new version that is not scheduled.

1.  Always review the scheduled actions on an entry (visible in the entry’s schedule panel) before making emergency edits.
2.  If the emergency change should override a pending schedule, cancel the schedule first, make the change, and re-schedule if needed.

Confirm the desired content is live after the emergency edit by checking the entry’s publish status and verifying the correct version is shown in the published environment.
