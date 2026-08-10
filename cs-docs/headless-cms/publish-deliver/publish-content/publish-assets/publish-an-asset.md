---
title: "Publish an Asset"
description: "Learn how to publish assets in Contentstack across multiple environments and locales, schedule publishing, and manage assets effectively."
url: /headless-cms/publish-an-asset
---

# Publish an Asset

## Publish an Asset

After uploading an [asset](/docs/headless-cms/about-assets), you can publish it to any of the [environments](/docs/headless-cms/about-environments) and locales configured in your stack. Publishing ensures the asset is accessible in the selected environments and locales.

To publish an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Assets” icon. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access assets.
2.  Select the asset you want to publish and click **Publish**.
3.  Under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) for publishing.
    
    **Note:** You can select up to **10 environments** and **10 locales** for a single publishing action.
    
4.  Under **Publish**, select one of the two available options:
    -   **Now**: Publish the asset immediately.
    -   **Later**: Schedule the asset to be published at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.
        
        **Note:** Scheduled publishing dates cannot exceed **12 months** from the current date.
        
        If you select a time zone that follows [daylight saving time (DST)](/docs/headless-cms/daylight-saving-time-in-contentstack), you will see a help text at the bottom of the dialog that highlights the effective publishing date, time, and timezone.
        
        **Note:** The DST time difference is **one hour**.
        
5.  Click **Publish** to confirm your action.

**Note:** Assets published to a production environment become publicly accessible, even if they are not referenced in an entry. Avoid publishing sensitive assets to production environments unless they are ready for use.

Alternatively, you can also publish an asset from the assets list page. To do so, perform the following steps:

1.  On the assets list page, locate the asset you want to publish and click the **vertical ellipsis** in the **Actions** column.
2.  From the dropdown menu, select **Publish**.
3.  Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
4.  Under **Publish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
5.  Click **Publish** to confirm your action.

**Additional Resource:**

-   [Publish multiple assets in bulk](/docs/headless-cms/bulk-publish-assets) across various languages and environments.
-   Refer to our documentation for detailed steps on [unpublishing assets](/docs/headless-cms/unpublish-an-asset).

## API Reference

To publish an asset via API, refer to the [Publish an asset](/docs/developers/apis/content-management-api/assets#publish-an-asset) API request.
