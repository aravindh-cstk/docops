---
title: "[Author Content] - Bulk Add to Release"
description: Bulk Add to Release feature for selecting multiple entries and adding them to a release simultaneously.
url: https://www.contentstack.com/docs/headless-cms/bulk-add-to-release
product: Contentstack
doc_type: feature-guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - Bulk Add to Release

This page explains how to use the Bulk Add to Release feature in Contentstack to add multiple entries to a release at once, including options for languages, publish/unpublish actions, and references. It is intended for content managers (and developers using the related API) who need to prepare multiple entries for deployment efficiently.

## Bulk Add to Release

The bulk **Add to Release** feature allows you to select multiple entries and add them to a release simultaneously. This functionality streamlines the release management process by reducing the steps required to prepare multiple entries for deployment.

To bulk add entries to a release, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon on the left navigation panel. You can also use the shortcut key “E” (for both Windows OS and Mac OS users) to access Entries.
- Use the checkboxes to select the entries you want to add to a release.![Bulk Add to Release_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23683ab4b39537b9/66cf1b1d0607452d8537cb4c/Bulk_Add_to_Release_1.png)

  **Note:** You can select a maximum of **100 entries** at once.
- Once you have selected the entries, a floating panel will appear on the page. Click the **Add to Release** option in this panel.![Bulk Add to Release_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb12f981d7df3d9c6/66cf1b1d25bfec24995813a9/Bulk_Add_to_Release_2.png)
- In the **Add to Release** modal, either select an existing release or create a new one.![Bulk Add to Release_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73ef0048515a1cd1/66cf1adda4dc33803dd7ce20/Bulk_Add_to_Release_3.png)

  **Note:** For older releases, you may receive a warning message indicating that references will not be included, or that only one level of nesting is allowed for single items. To avoid this, [create](../create-and-manage-releases/create-a-new-release.md) a new release or [clone](../create-and-manage-releases/clone-a-release.md) the older release.
- Select the languages in which you want to deploy the entries. Specify the action you want to perform—either **Publish** or **Unpublish**.![Bulk Add to Release_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta59ebbcb24f23201/66cf1b1d62373b199f72430d/Bulk_Add_to_Release_4.png)
- Select **Add with References** to include all referenced entries or **Add without References** to add only the selected entries.**Note**Nested references up to a default depth of **5 levels** will be included, for both single and bulk add to release actions, and can vary as per your organization’s plan.
- View the bulk add to release action logs in the [Stack Bulk Task Queue](./stack-bulk-task-queue.md).

This streamlined process ensures that you can efficiently manage and add multiple entries to a release.

## API Reference

To add multiple entries to a release via API, refer to the [Bulk Add to Release](../../../api-docs/api-detail/content-management-api.md#bulk-add-to-release) API request.

## Common questions

### How many entries can I select when using bulk Add to Release?
You can select a maximum of **100 entries** at once.

### What is the difference between “Add with References” and “Add without References”?
**Add with References** includes all referenced entries, while **Add without References** adds only the selected entries.

### Why do I see a warning when adding entries to an older release?
For older releases, you may receive a warning message indicating that references will not be included, or that only one level of nesting is allowed for single items; creating a new release or cloning the older release can help avoid this.

### Where can I view logs for the bulk add to release action?
You can view the logs in the [Stack Bulk Task Queue](./stack-bulk-task-queue.md).

<!-- filename: author-content-bulk-add-to-release.md -->