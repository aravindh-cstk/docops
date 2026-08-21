---
title: "Add Entry/Asset to a Release"
description: "Add entries and assets to a release in Contentstack to group content and deploy it together across your environments in one coordinated action."
url: /headless-cms/add-entry-asset-to-a-release
---

# Add Entry/Asset to a Release

## Add Entry/Asset to a Release

After creating a release, you can add entries or assets to prepare them for deployment across environments.

**Additional Resource:** To add multiple entries at once, refer to the [bulk add to release](/docs/headless-cms/bulk-add-to-release) documentation.

## Add an Entry to a Release

To add an entry to a release, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. Go to your stack.
2. Click the **Entries** icon and select the entry you want to add.
3. Click the horizontal ellipsis at the bottom of the entry editor and select **Add to Release**.
4. In the **Add to Release** modal, choose one of the following options.
 - Select an existing release.
 - Click the plus icon to create a new release.

 **Note:** For older releases, you may receive a warning message indicating references may not be included, or only one level of nesting may be processed. To include all references, [create a new release](/docs/headless-cms/create-a-new-release) or [clone an existing one](/docs/headless-cms/clone-a-release).

5. Select the language(s) for deployment.

 **Note:** If **Disable fallback publishing** is enabled for your stack, you can select only the locales in which the entry is localized. Locales where the entry is not localized are disabled in the modal, and adding a non-localized item through the API returns an error.

6. Choose the required action (Publish or Unpublish).
7. Click **Add**.
8. If the entry contains references, review the **Add Reference(s) to Release** modal, which lists linked entries and assets up to the configured nested reference publishing depth.

 **Note:**

 - If the selected entry contains taxonomy terms, associated taxonomies and localized taxonomy terms are automatically added to the release when references are included.
 - Nested references are included up to a default depth of 5 levels.
 - This limit may vary based on your organization’s plan.
 - This modal appears only when adding a single entry with references.

9. Choose one of the following:
 1. **Add With References** to include all linked items
 2. **Add Without References** to add only the selected entry

**Note:** You can view release action logs in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue).

![Add_an_Entry_to_a_Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0367175161cdecbc/69fc47b840c30e93386cf354/Add_an_Entry_to_a_Release.gif)

## Add an Asset to a Release

To add an asset to a release, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. Go to your stack.
2. Click the **Assets** icon and select the asset you want to add.
3. Click the horizontal ellipsis and select **Add to Release**.
4. In the **Add to Release** modal, choose one of the following options.
 - Select an existing release.
 - Click **Create New Release**.
5. Select the languages for deployment.

 **Note:** Assets do not support localization. Selecting languages determines the locales in which the asset is available.

6. Choose one of the following:
 - **Add for Publishing** to publish the asset, or
 - **Add for Unpublishing** to unpublish the asset

**Note:** You can view release action logs in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue).

![Add an Asset to a Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ef07396af782a2b/69fc48618a644d45d4a6f7a8/Add_an_Asset_to_a_Release.gif)

After adding items, deploy the release to an environment.

**Note:** Before deployment, update release items to their latest versions to ensure the most current content is included.

## API Reference

To add entries or assets to a release via API, refer to the [Add a single item to a Release](/docs/developers/apis/content-management-api/releases#add-a-single-item-to-a-release) and [Bulk Add to Release](/docs/developers/apis/content-management-api/bulk-operations#bulk-add-to-release) API requests.
