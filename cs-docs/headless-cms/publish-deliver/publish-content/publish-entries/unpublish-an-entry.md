---
title: "Unpublish an Entry"
description: "Learn how to unpublish entries in Contentstack to remove content from your web or mobile properties. Follow step-by-step instructions to unpublish entries effectively."
url: /headless-cms/unpublish-an-entry
---

# Unpublish an Entry

## Unpublish an Entry

Unpublishing an [entry](/docs/headless-cms/about-entries/) in Contentstack allows you to remove it from your web or mobile property while retaining the entry in your stack. This ensures flexibility in content management without permanent deletion.

**Additional Resource:** For information on how to publish entries, refer to our guide on [Publishing Entries](/docs/headless-cms/publish-an-entry).

To unpublish an entry, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon. You can also use the shortcut key E (for both Windows and Mac users) to access the entries.
2.  Locate the entry you want to unpublish.
3.  Open the entry to be unpublished and click the **Unpublish** icon at the bottom-right corner.
4.  In the **Unpublish Entry** modal, select the desired environments under **Select Environment(s)** and the appropriate locales under **Select Language(s)** from which the entry will be unpublished.
5.  Under **Unpublish**, select one of the two available options:
    
    1.  **Now**: Unpublish the asset immediately.
    2.  **Later**: Schedule the asset to be unpublished at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.
    
    **Note:** The unpublishing date cannot extend beyond 12 months.
    
    If you select a time zone that follows [daylight saving time (DST)](https://www.contentstack.com/docs/headless-cms/daylight-saving-time-in-contentstack), a help text will indicate the adjusted unpublishing time considering DST changes (with a one-hour adjustment).
    
6.  Confirm your settings by clicking **Send.**

Alternatively, you can also unpublish an entry from the entries list page. To do so, perform the following steps:

1.  On the entries list page, locate the entry you want to unpublish and click the **vertical ellipsis** in the **Actions** column.
2.  From the dropdown menu, select **Unpublish**.
3.  Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
4.  Under **Unpublish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
5.  Click **Unpublish** to confirm your action.

You can also unpublish an entry by selecting the **checkbox** next to it on the **Entries** list page. A floating widget will appear—click the **horizontal ellipsis** on the right side of the widget and click **Unpublish**.

**Note**:

-   You can select a maximum of **50** environments and **50** locales for unpublishing a single entry at one time.
-   Unpublishing an entry removes it from the specified environments and locales but does not delete it from your Contentstack repository.

## Unpublish Referred Entries

If the entry you are unpublishing is referenced in other entries, an alert displays a list of all dependent entries. You can review this information and proceed with unpublishing as required.

![Unpublish_References.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e5b2c49dcdb4d05/655db6ecac4c4199df94b165/Unpublish_References.png)

## API References

You can also use the [Unpublish an Entry](/docs/developers/apis/content-management-api/entries#unpublish-an-entry) API Request to perform the task.
