---
title: "[Author Content] - Unpublish an Entry"
description: Unpublishing an entry in Contentstack to remove it from environments/locales without deleting it.
url: https://www.contentstack.com/docs/content-managers/author-content/unpublish-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Author Content] - Unpublish an Entry

This page explains how to unpublish an entry in Contentstack so it is removed from selected environments and locales without being deleted from your stack. It is intended for content managers and authors who need to take content offline immediately or schedule it for later.

## Unpublish an Entry

Unpublishing an [entry](/docs/content-managers/author-content/about-entries/) in Contentstack allows you to remove it from your web or mobile property while retaining the entry in your stack. This ensures flexibility in content management without permanent deletion.

**Additional Resources: **For information on how to publish entries, refer to our guide on [Publishing Entries](/docs/content-managers/working-with-entries/publish-an-entry).

To unpublish an entry, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key E (for both Windows and Mac users) to access the entries.
- Locate the entry you want to unpublish.
- Open the entry to be unpublished and click the **Unpublish** icon at the bottom-right corner.
- In the **Unpublish Entry** modal, select the desired environments under **Select Environment(s)** and the appropriate locales under **Select Language(s)** from which the entry will be unpublished.
- Under **Unpublish**, select one of the two available options:**Now**: Unpublish the asset immediately.
- **Later**: Schedule the asset to be unpublished at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.

**Note: **The unpublishing date cannot extend beyond 12 months.

If you select a time zone that follows [daylight saving time (DST)](https://www.contentstack.com/docs/content-managers/publish-content/daylight-saving-time-in-contentstack), a help text will indicate the adjusted unpublishing time considering DST changes (with a one-hour adjustment).
- Confirm your settings by clicking **Send.**

Alternatively, you can also unpublish an entry from the entries list page. To do so, perform the following steps:
- On the entries list page, locate the entry you want to unpublish and click the **vertical ellipsis** in the **Actions** column.
- From the dropdown menu, select **Unpublish**.
- Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
- Under **Unpublish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
- Click **Unpublish** to confirm your action.

You can also unpublish an entry by selecting the **checkbox** next to it on the **Entries** list page. A floating widget will appear—click the **horizontal ellipsis** on the right side of the widget and click **Unpublish**.

**Note**:
- You can select a maximum of **50** environments and **50** locales for unpublishing a single entry at one time.
- Unpublishing an entry removes it from the specified environments and locales but does not delete it from your Contentstack repository.

## Unpublish Referred Entries

If the entry you are unpublishing is referenced in other entries, an alert displays a list of all dependent entries. You can review this information and proceed with unpublishing as required.

## API References

You can also use the [Unpublish an Entry](/docs/developers/apis/content-management-api#unpublish-an-entry) API Request to perform the task.

## Common questions

**Q: Does unpublishing an entry delete it from my stack?**  
A: No. Unpublishing an entry removes it from the specified environments and locales but does not delete it from your Contentstack repository.

**Q: Can I schedule an entry to be unpublished later?**  
A: Yes. Under **Unpublish**, select **Later** to schedule the asset to be unpublished at a specific date and time.

**Q: Are there limits on how many environments/locales I can select when unpublishing?**  
A: Yes. You can select a maximum of **50** environments and **50** locales for unpublishing a single entry at one time.

**Q: What happens if the entry is referenced by other entries?**  
A: An alert displays a list of all dependent entries so you can review the information and proceed with unpublishing as required.