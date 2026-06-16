---
title: [Set Up Your Project] - Add Entry/Asset to a Release
description: Add entries and assets to a release in Contentstack, streamlining your content release workflow.
url: https://www.contentstack.com/docs/developers/create-releases/add-entry-asset-to-a-release
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-19
filename: add-entryasset-to-a-release.md
---

# [Set Up Your Project] - Add Entry/Asset to a Release

This page explains [Set Up Your Project] - Add Entry/Asset to a Release for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Add Entry/Asset to a Release

After creating a [release](/docs/content-managers/create-and-manage-releases/about-releases/), you can start adding entries or assets to it.

**Additional Resource**: You can now [bulk add multiple entries](/docs/content-managers/author-content/bulk-add-to-release) to a release.

To add entries or added to a release, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:

1. Navigate to the desired [stack](/docs/developers/set-up-stack/about-stack), then click the “Entries” or “Assets” icon on the left navigation panel and select an existing entry or asset.
2. Click the horizontal ellipsis at the bottom of the entry editor and click **Add to Release**.![Add Entry_Asset to a Release_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt139c827c2b657ee5/66f25b1705ba5b091320dff5/Add_Entry_Asset_to_a_Release_1.png)
3. In the **Add to Release** modal, either select an existing release or create a new one.![Add Entry_Asset to a Release_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b46a06295fb0ff0/66f25b1705ba5bd98720dff9/Add_Entry_Asset_to_a_Release_2.png)

   **Note**: For older releases, you may receive a warning message indicating that references will not be included, or that only one level of nesting is published/unpublished for single items. To avoid this, [create](/docs/content-managers/create-and-manage-releases/create-a-new-release) a new release or [clone](/docs/content-managers/create-and-manage-releases/clone-a-release) the older release.

   1. Select the languages in which you want to deploy the entries. Specify the **Publish** or **Unpublish** action you want to perform.![Add Entry_Asset to a Release_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd62f12be00d8f558/66f25b17f9cb2650de43caf2/Add_Entry_Asset_to_a_Release_3.png)

      **Note**: The option to select multiple locales is only available when using the latest release. Get in touch with our [support](mailto:support@contentstack.com) team for more information.
   2. Select **Add with References** to include all referenced entries or **Add without References** to add only the selected entry.

      **Note**: You can view the release action logs in the [Stack Bulk Task Queue](/docs/content-managers/author-content/stack-bulk-task-queue).

After successfully adding items to a release, you can [deploy](/docs/content-managers/create-and-manage-releases/deploy-a-release) the release to an environment.

**Note**: You can update the release items to their latest versions before you deploy the release. Refer to our [Update Release items to their Latest Versions](/docs/content-managers/create-and-manage-releases/update-release-items-to-their-latest-versions) documentation for more information.

### API Reference

To add entries or assets to a release via API, refer to the [Add a single item to a Release](/docs/developers/apis/content-management-api#add-a-single-item-to-a-release) and [Add multiple items to a Release](/docs/developers/apis/content-management-api#add-multiple-items-to-a-release) API requests.

## Common questions
### What is covered in [Set Up Your Project] - Add Entry/Asset to a Release?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Set Up Your Project] - Add Entry/Asset to a Release?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
