---
title: "[Create and Manage Releases NEW] - Create a New Release"
description: Create a new release containing entries and assets to deploy to an environment.
url: https://www.contentstack.com/docs/content-managers/create-and-manage-releases/create-a-new-release
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: NEW
last_updated: 2026-03-26
---

# [Create and Manage Releases NEW] - Create a New Release

This page explains what a Release is in Contentstack and how content managers can create a new release in the UI (and where developers can find the API reference for creating releases). Use this when you need to group entries/assets and deploy (publish/unpublish) them to a specific environment together.

## Create a New Release

A Release contains a set of [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets) that you want to deploy (publish/unpublish) to a particular [environment](/docs/developers/set-up-environments/about-environments) at once.

**Note:  **When working within specific branches, releases created will be specific to that particular branch. For example, if you create a release within the development branch, you will be able to add items to this release that are only within the development branch. Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document for more information.

To create a release, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), and click on the “Releases” icon located on the left navigation panel. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
- You can either click on the **+ New Release **button located at the top-left side of the page.
- In the **Create a New Release** box, provide a suitable **Name** and **Description** for the release.
- After entering the details, click on **Save**.

Now, you can [add item(s) to the release](/docs/developers/create-releases/add-entry-asset-to-a-release) and deploy it to an environment.

## API Reference

To perform this create action via API, refer to the [Create a release](/docs/developers/apis/content-management-api#create-a-release) API request.

## Common questions

### Can I create a release for a specific environment?
A Release contains items that you want to deploy (publish/unpublish) to a particular [environment](/docs/developers/set-up-environments/about-environments) at once.

### Are releases branch-specific?
**Note:  **When working within specific branches, releases created will be specific to that particular branch.

### What can I include in a release?
A Release contains a set of [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets).

### Is there an API to create a release?
To perform this create action via API, refer to the [Create a release](/docs/developers/apis/content-management-api#create-a-release) API request.