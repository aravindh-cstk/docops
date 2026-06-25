---
title: "[Author Content] - Unpublish an Asset"
description: "Steps to unpublish an asset from selected environments and locales in Contentstack, including scheduling and API reference."
url: https://www.contentstack.com/docs/headless-cms/unpublish-an-asset
product: "Contentstack"
doc_type: "how-to"
audience:
  - content-managers
  - developers
version: "current"
last_updated: 2026-03-25
---

# [Author Content] - Unpublish an Asset

This page explains how to unpublish an asset in Contentstack so it is removed from selected environments and locales (immediately or on a schedule) without deleting it from the repository. It is intended for content managers and developers who manage asset availability across environments and languages.

## Unpublish an Asset

Unpublishing an [asset](/docs/content-managers/working-with-assets/about-assets) removes it from the selected [environments](../../developers/set-up-environments/about-environments.md) and locales, making it inaccessible in the applications or platforms where it was published. However, this action does not delete the asset from your Contentstack repository.

To unpublish an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md), and click the **“Assets”** icon in the left navigation panel. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
- Select the asset you want to unpublish and click **Unpublish**.
- Under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) from which you want to unpublish the asset.**Note:** You can select up to **10 environments** and **10 locales** for a single unpublishing action.
- Under **Unpublish**, select one of the two available options:**Now**: Unpublish the asset immediately.
- **Later**: Schedule the asset to be unpublished at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.**Note:** Scheduled unpublishing dates cannot exceed **12 months** from the current date.

If the selected time zone follows [daylight saving time (DST)](../publish-content/daylight-saving-time-in-contentstack.md), a help text will appear at the bottom of the dialog, indicating the effective unpublishing date, time, and time zone with DST adjustments.

**Note:** The DST time difference is **one hour**.
- Click **Unpublish** to confirm your action.

**Note:** After unpublishing, the asset will no longer be accessible in the selected environments or locales but will remain stored in your Contentstack repository.

Alternatively, you can also unpublish an asset from the assets list page. To do so, perform the following steps:
- On the assets list page, locate the asset you want to unpublish and click the **vertical ellipsis** in the **Actions** column.
- From the dropdown menu, select **Unpublish**.
- Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
- Under **Unpublish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
- Click **Unpublish** to confirm your action.

**Additional Resources:**
- [Unpublish multiple assets in bulk](./bulk-unpublish-entries.md) across various languages and environments.
- Refer to our documentation for detailed steps on [publishing assets](./publish-an-asset.md).

## API Reference

To unpublish an asset via API, refer to the [Unpublish an asset](../../../api-docs/api-detail/content-management-api.md#unpublish-asset) API request.

## Common questions

**Q: Does unpublishing an asset delete it from Contentstack?**  
A: No. Unpublishing removes it from the selected environments and locales, but it does not delete the asset from your Contentstack repository.

**Q: How many environments and locales can I select when unpublishing an asset?**  
A: You can select up to **10 environments** and **10 locales** for a single unpublishing action.

**Q: How far in advance can I schedule an asset to be unpublished?**  
A: Scheduled unpublishing dates cannot exceed **12 months** from the current date.

**Q: Where else can I unpublish an asset besides opening the asset?**  
A: You can unpublish from the assets list page using the **vertical ellipsis** in the **Actions** column and selecting **Unpublish**.