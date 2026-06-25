---
title: "[Author Content] - Publish an Asset"
description: "How to publish an asset to environments and locales in Contentstack, including scheduling and API reference."
url: https://www.contentstack.com/docs/headless-cms/publish-an-asset
product: "Contentstack"
doc_type: "how-to"
audience:
  - content-managers
  - developers
version: "current"
last_updated: "2026-03-25"
---

# [Author Content] - Publish an Asset

This page explains how to publish an uploaded asset in Contentstack to selected environments and locales (immediately or on a schedule). It is intended for content managers and developers who manage assets and need them to be accessible in specific environments and languages.

## Publish an Asset

After uploading an [asset](/docs/content-managers/working-with-assets/about-assets), you can publish it to any of the [environments](../../developers/set-up-environments/about-environments.md) and locales configured in your stack. Publishing ensures the asset is accessible in the selected environments and locales.

To publish an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Assets” icon in the left navigation panel. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access assets.
- Select the asset you want to publish and click **Publish**.
- Under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) for publishing.**Note:** You can select up to **10 environments** and **10 locales** for a single publishing action.
- Under **Publish**, select one of the two available options:**Now**: Publish the asset immediately.
- **Later**: Schedule the asset to be published at a specific date and time. If you select this option, additional fields appear where you can specify the date, time, and time zone.**Note:** Scheduled publishing dates cannot exceed **12 months** from the current date.

If you select a time zone that follows [daylight saving time (DST)](../publish-content/daylight-saving-time-in-contentstack.md), you will see a help text at the bottom of the dialog that highlights the effective publishing date, time, and timezone.

**Note:** The DST time difference is **one hour**.

- Click **Publish** to confirm your action.

**Note:** Assets published to a production environment become publicly accessible, even if they are not referenced in an entry. Avoid publishing sensitive assets to production environments unless they are ready for use.

Alternatively, you can also publish an asset from the assets list page. To do so, perform the following steps:

- On the assets list page, locate the asset you want to publish and click the **vertical ellipsis** in the **Actions** column.
- From the dropdown menu, select **Publish**.
- Select the environment(s) and locale(s) under **Select Environment(s)** and **Select Language(s)**.
- Under **Publish**, select either **Now** (publish immediately) or **Later** (at a later date/time that you provide).
- Click **Publish** to confirm your action.

**Additional Resource:**

- [Publish multiple assets in bulk](./bulk-publish-assets.md) across various languages and environments.
- Refer to our documentation for detailed steps on [unpublishing assets](./unpublish-an-asset.md).

## API Reference

To publish an asset via API, refer to the [Publish an asset](../../../api-docs/api-detail/content-management-api.md#publish-an-asset) API request.

## Common questions

### Can I publish an asset to multiple environments and locales at once?
Yes. You can select up to **10 environments** and **10 locales** for a single publishing action.

### Can I schedule asset publishing?
Yes. Under **Publish**, select **Later** to schedule the asset to be published at a specific date and time.

### What happens if I publish an asset to a production environment?
Assets published to a production environment become publicly accessible, even if they are not referenced in an entry.

### Is there an API to publish assets?
Yes. Use the [Publish an asset](../../../api-docs/api-detail/content-management-api.md#publish-an-asset) API request.