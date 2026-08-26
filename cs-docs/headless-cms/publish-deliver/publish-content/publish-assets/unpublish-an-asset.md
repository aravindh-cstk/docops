---
title: "Unpublish an Asset"
description: "Learn how to unpublish assets in Contentstack across environments and locales, schedule unpublishing, and manage assets effectively."
url: /headless-cms/unpublish-an-asset
uid: blt05de7813e73cfced
---

# Unpublish an Asset

## Unpublish an Asset

Unpublishing an [asset](/docs/headless-cms/about-assets) removes it from the selected [environments](/docs/headless-cms/about-environments) and locales, making it inaccessible in the applications or platforms where it was published. However, this action does not delete the asset from your Contentstack repository.

To unpublish an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), and click the **“Assets”** icon. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
2.  Select the asset you want to unpublish and click **Unpublish**.
3.  Under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) from which you want to unpublish the asset.

    **Note:** You can select up to **10 environments** and **10 locales** for a single unpublishing action.

4.  Under **Unpublish**, select one of the two available options:
    -   **Now**: Unpublish the asset immediately.
    -   **Later**: Schedule the asset to be unpublished at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.

        **Note:** Scheduled unpublishing dates cannot exceed **12 months** from the current date.

        If the selected time zone follows [daylight saving time (DST)](/docs/headless-cms/daylight-saving-time-in-contentstack), a help text will appear at the bottom of the dialog, indicating the effective unpublishing date, time, and time zone with DST adjustments.

        **Note:** The DST time difference is **one hour**.

5.  Click **Unpublish** to confirm your action.

**Note:** After unpublishing, the asset will no longer be accessible in the selected environments or locales but will remain stored in your Contentstack repository.

Alternatively, you can also unpublish an asset from the assets list page. To do so, perform the following steps:

1.  On the assets list page, locate the asset you want to unpublish and click the **vertical ellipsis** in the **Actions** column.
2.  From the dropdown menu, select **Unpublish**.
3.  Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
4.  Under **Unpublish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
5.  Click **Unpublish** to confirm your action.

**Additional Resources:**

-   [Unpublish multiple assets in bulk](/docs/headless-cms/bulk-unpublish-entries) across various languages and environments.
-   Refer to our documentation for detailed steps on [publishing assets](/docs/headless-cms/publish-an-asset).

## API Reference

To unpublish an asset via API, refer to the [Unpublish an asset](/docs/developers/apis/content-management-api/assets#unpublish-an-asset) API request.
