---
title: "[Set Up Your Project] - Create a New Release"
description: Create a new Release to deploy (publish/unpublish) a set of entries and assets to an environment.
url: https://www.contentstack.com/docs/headless-cms/create-a-new-release
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Create a New Release

This page explains what a Release is in Contentstack and how to create a new Release in the UI (and where to find the API reference). Read this if you need to deploy (publish/unpublish) a set of entries and assets to a specific environment, including when working with branch-specific releases.

## Create a New Release

A Release contains a set of [entries](../../content-managers/author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets) that you want to deploy (publish/unpublish) to a particular [environment](../set-up-environments/about-environments.md) at once.

**Note:  **When working within specific branches, releases created will be specific to that particular branch. For example, if you create a release within the development branch, you will be able to add items to this release that are only within the development branch. Refer to our [Branch-specific Modules](../branches/branch-specific-modules.md) document for more information.

To create a release, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

- Go to your [stack](../set-up-stack/about-stack.md), and click on the “Releases” icon located on the left navigation panel. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
- You can either click on the **+ New Release **button located at the top-left side of the page.
- In the **Create a New Release** box, provide a suitable **Name** and **Description** for the release.![create_a_new_release_1_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdb3e62b78c8d6b4b/60b3c668e5c1e71981817dde/create_a_new_release_1_no_highlight.png)
- After entering the details, click on **Save**.

Now, you can [add item(s) to the release](./add-entry-asset-to-a-release.md) and deploy it to an environment.

## API Reference

To perform this create action via API, refer to the [Create a release](../../../api-docs/api-detail/content-management-api.md#create-a-release) API request.

## Common questions

### Can I create releases that are specific to a branch?
Yes. **Note:  **When working within specific branches, releases created will be specific to that particular branch.

### What can a Release contain?
A Release contains a set of [entries](../../content-managers/author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets).

### Where do I create a new Release in the UI?
Go to your [stack](../set-up-stack/about-stack.md), click the “Releases” icon on the left navigation panel, and then click the **+ New Release **button.

### Is there an API to create a release?
Yes. Refer to the [Create a release](../../../api-docs/api-detail/content-management-api.md#create-a-release) API request.