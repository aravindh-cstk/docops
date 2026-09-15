---
title: "Create a New Release"
description: "A \"Release\" is a set of entries and assets that needs to be deployed all at once to a particular environment. Learn how to create a new release on Contentstack."
url: /headless-cms/create-a-new-release
uid: bltb09cbe441cb0ce20
---

# Create a New Release

## Create a New Release

A Release contains a set of [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets) that you want to deploy (publish/unpublish) to a particular [environment](/docs/headless-cms/about-environments) at once.

**Note:** When working within specific branches, releases created will be specific to that particular branch. For example, if you create a release within the development branch, you will be able to add items to this release that are only within the development branch. Refer to our [Branch-specific Modules](/docs/headless-cms/branch-specific-modules) document for more information.

To create a release, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), and click on the “Releases” icon. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
2.  You can either click on the **\+ New Release** button located at the top-left side of the page.
3.  In the **Create a New Release** box, provide a suitable **Name** and **Description** for the release.![create_a_new_release_1_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdb3e62b78c8d6b4b/60b3c668e5c1e71981817dde/create_a_new_release_1_no_highlight.png)
4.  After entering the details, click on **Save**.

Now, you can [add item(s) to the release](/docs/headless-cms/add-entry-asset-to-a-release) and deploy it to an environment.

## API Reference

To perform this create action via API, refer to the [Create a release](/docs/developers/apis/content-management-api/releases#create-a-release) API request.
