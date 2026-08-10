---
title: "Schedule Publish/Unpublish Entries"
description: "Learn how to schedule, reschedule, and manage entry publishing or unpublishing in Contentstack, including version control rules."
url: /headless-cms/schedule-publish-unpublish-entries
---

# Schedule Publish/Unpublish Entries

## Schedule Publish/Unpublish Entries

Contentstack lets you **publish** or **unpublish** entries instantly or schedule them for a specific date and time. This feature helps teams coordinate content releases.

## Schedule an Entry Publish/Unpublish

To schedule an entry publish, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Open the entry and click **Publish/Unpublish**.
2.  Choose one of the following options:
    1.  **Now**: Publishes/unpublishes the entry immediately.
    2.  **Later**: Schedules the action for a specific date and time.
3.  If you choose **Later**:
    
    1.  Select the date from the calendar.
    2.  Enter the time (hh:mm:ss) and select the time zone.
    
    ![Schedule_an_Entry_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte260318f6b6162c2/68c93a908850a01b8636ead8/Schedule_an_Entry_Publish.png)

**Note:** The scheduled date cannot exceed **12 months** from the current date.

If the selected time zone follows daylight saving time (DST), Contentstack displays a help text showing the adjusted publishing date, time, and time zone.

**Note:** During DST, the time differs by one hour from Standard Time. The effective publishing date reflects the local date and time of the user scheduling the entry.

Scheduled publishing and unpublishing are also available in [Releases](/docs/headless-cms/about-releases). This allows content managers to add multiple entries to a Release and schedule them for future deployment.

## Reschedule a Scheduled Publish/Unpublish

If you have already scheduled an entry to be published or unpublished, you can change the date and time without cancelling the schedule.

1.  In the **Entry Status** panel, locate the scheduled publish/unpublish pill.
2.  Click the “Reschedule” icon.![Reschedule_a_Scheduled_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd5d807315b85d84/68c93acdcd88140e03f23ba2/Reschedule_a_Scheduled_Publish.png)
3.  In the **Reschedule Publish/Unpublish** modal, select whether you want to:
    1.  Publish/Unpublish **Now** (the action will execute immediately), or
    2.  Publish/Unpublish **Later** (choose a new date, time, and time zone).
4.  Click **Reschedule** (for Later) or **Reschedule and Send** (for Now).![Reschedule_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9bbba684f8ffaa46/68c93ae672b4ed89470592ed/Reschedule_Modal.png)

Your entry’s schedule gets updated.

## Version Control in Scheduled Unpublishing

Contentstack always unpublishes the **latest published version** in the selected environment, even if you scheduled an earlier version.

For example:

1.  You schedule **version 3** of an entry to unpublish in two days.
2.  Before that date, you create and publish newer versions, ending with **version 6**.
3.  You also schedule **version 6** to unpublish in five days.
4.  When the unpublish action for **version 3** occurs, Contentstack unpublishes **version 6** instead of **version 3**.

This happens because the CDN stores only the latest published version of an entry.

**Note:** When scheduling unpublishing, Contentstack removes the latest published version, not the specific version you selected.

Scheduling publish and unpublish actions helps you manage content timelines with precision and flexibility. Use this feature to align releases with business goals, maintain control over versioning, and streamline workflows with Releases.
