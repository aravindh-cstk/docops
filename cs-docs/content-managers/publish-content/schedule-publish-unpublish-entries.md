---
title: "[Publish Content] - Schedule Publish/Unpublish Entries"
description: Schedule publishing or unpublishing entries for a specific date and time, including rescheduling and version control behavior.
url: https://www.contentstack.com/docs/headless-cms/schedule-publish-unpublish-entries
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Publish Content] - Schedule Publish/Unpublish Entries

This page explains how to publish or unpublish entries immediately or schedule these actions for a specific date and time in Contentstack. It is intended for content managers coordinating timed releases and anyone who needs to understand rescheduling behavior and version control implications when scheduling unpublishing.

### Item 1

#### Article section

##### Heading

Schedule Publish/Unpublish Entries

##### Content

Contentstack lets you **publish** or **unpublish** entries instantly or schedule them for a specific date and time. This feature helps teams coordinate content releases.

## Schedule an Entry Publish/Unpublish
To schedule an entry publish, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Open the entry and click **Publish/Unpublish**.
- Choose one of the following options:**Now**: Publishes/unpublishes the entry immediately.
- **Later**: Schedules the action for a specific date and time.
- If you choose **Later**:Select the date from the calendar.
- Enter the time (hh:mm:ss) and select the time zone.

**Note:** The scheduled date cannot exceed **12 months** from the current date.

If the selected time zone follows daylight saving time (DST), Contentstack displays a help text showing the adjusted publishing date, time, and time zone.

**Note:** During DST, the time differs by one hour from Standard Time. The effective publishing date reflects the local date and time of the user scheduling the entry.

Scheduled publishing and unpublishing are also available in [Releases](../create-and-manage-releases/about-releases.md). This allows content managers to add multiple entries to a Release and schedule them for future deployment.

## Reschedule a Scheduled Publish/Unpublish
If you have already scheduled an entry to be published or unpublished, you can change the date and time without cancelling the schedule.
- In the **Entry Status** panel, locate the scheduled publish/unpublish pill.
- Click the “Reschedule” icon.
- In the **Reschedule Publish/Unpublish** modal, select whether you want to:Publish/Unpublish **Now** (the action will execute immediately), or
- Publish/Unpublish **Later** (choose a new date, time, and time zone).
- Click **Reschedule** (for Later) or **Reschedule and Send** (for Now).

Your entry’s schedule gets updated.

## Version Control in Scheduled Unpublishing
Contentstack always unpublishes the **latest published version** in the selected environment, even if you scheduled an earlier version.

For example:
- You schedule **version 3** of an entry to unpublish in two days.
- Before that date, you create and publish newer versions, ending with **version 6**.
- You also schedule **version 6** to unpublish in five days.
- When the unpublish action for **version 3** occurs, Contentstack unpublishes **version 6** instead of **version 3**.

This happens because the CDN stores only the latest published version of an entry.

**Note:** When scheduling unpublishing, Contentstack removes the latest published version, not the specific version you selected.

Scheduling publish and unpublish actions helps you manage content timelines with precision and flexibility. Use this feature to align releases with business goals, maintain control over versioning, and streamline workflows with Releases.

## Common questions

### Can I schedule publishing or unpublishing more than 12 months in advance?
No. **Note:** The scheduled date cannot exceed **12 months** from the current date.

### What happens if daylight saving time (DST) changes after I schedule an action?
If the selected time zone follows DST, Contentstack displays a help text showing the adjusted publishing date, time, and time zone, and the effective publishing date reflects the local date and time of the user scheduling the entry.

### Can I change a scheduled publish/unpublish without cancelling it?
Yes. You can reschedule from the **Entry Status** panel using the “Reschedule” icon and then choose **Now** or **Later** in the **Reschedule Publish/Unpublish** modal.

### Which entry version gets unpublished when I schedule an unpublish?
Contentstack unpublishes the **latest published version** in the selected environment, even if you scheduled an earlier version.