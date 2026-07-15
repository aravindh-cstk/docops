---
title: "[Automations guides and connectors] - Contentstack Management - Releases Actions"
description: Contentstack Management - Releases Actions
url: https://www.contentstack.com/docs/agent-os/contentstack-management-releases-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Contentstack Management - Releases Actions

This page explains how to use Contentstack Management Releases actions in Automation Hub to perform release-based operations (such as creating, cloning, deploying, and managing items in releases). It is intended for developers configuring automation workflows that interact with releases, and should be used when setting up or testing these specific connector actions.

## Contentstack Management - Releases Actions

A [Release](../content-managers/create-and-manage-releases/about-releases.md) comprises entries and assets that need to be deployed at the same time, either in a published or unpublished state, to a designated environment. You can perform release based operations using the Contentstack Management Releases actions.

Let’s look at each of these in detail.

## Add Items to a Release

This action lets you add multiple items to a release.

- Under** Choose an Action** tab, select the **Add Items to a Release** action.
- Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup** list. Provide your item data in the **Release Item Data** field.**Note: **Provide your entry data as per the schema in JSON format only. Both entries and assets can be added to the release. In case of assets, the value for the `content_type_uid` key should be `built_io_upload.`
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the branch details by clicking the** Include branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb2b67f6ee7bb7b4/647050ddaeb2dbc55c117be3/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Clcik_the_Save_And_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf665b043b810f79f/647050ddce9cf9c09a3765d3/Clcik_the_Save_And_Exit_Button.png)

## Clone a Release

This action lets you create a copy of a release.

- Under **Choose an Action **tab, select the **Clone a Release** action.
- Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate)step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup **list.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- Provide a **Release** **Name **and a **Release Description **for the release to be created.![Select_Release_Name_And_Description](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c667b4775afa2b6/647056fd14eef6139e882e1e/Select_Release_Name_And_Description.png)
- **[Optional]** Enable the** Show optional fields** toggle button to display the branch details by clicking the** Include branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf48d645def024498/6470570a00c0b38678e70166/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Cliik_the_Save_And_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5129a6f201cd77a0/647056fd3f34da82227b51c9/Clcik_the_Save_And_Exit_Button.png)

## Create a Release

This action lets you create a release.

- Under **Choose an Action** tab, select the **Create a Release** action.
- Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Release** **Name**, **Release** **Description**, and **Branch** from the **Lookup** list.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the branch details by clicking the** Include branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c9a4b486d3c3a55/64705b13fa576bbe7bedfffc/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_And_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3355fcd3bbf9139b/64705b13ae5aa213b74ca996/Save_And_Exit.png)

## Delete Items from a Release

This action lets you delete multiple items from a release.

- Under **Choose an Action** tab, select the** Delete Items from a Release **action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup** list. Provide your item data in the **Release Item Data** field.**Note:** Provide your entry data as per the schema in JSON format only.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the branch details by clicking the** Include branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdee7cb16387296b4/64705e98ce9cf95081376605/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_And_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltebda7a0fea8cd6d3/64705e98f6df4f1cccb4fc3e/Save_And_exit.png)

## Deploy a Release

This action lets you deploy a release to an environment.

- Under **Choose an Action** tab, select the **Deploy a Release** action.
- On the **Deploy a Release Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- Select the **Environment(s) **to deploy the release from the **Lookup **list.![Select_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc121a71a4a5a292/6601a8846f7fa70686ead1b0/Select_Environment.png)
- **[Optional]** Enable the **Show Optional fields** toggle button to display the **Publish Schedule** field to schedule the deployment of the release.
- **Note:** The release will be published immediately if the Publish Schedule field is empty.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20934ae3909b8b48/6601a8846f7fa75ea5ead1ac/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb55a5d4bc8b075b/6601a8840061c731271030d1/Save_Exit.png)

## Get All Items in a Release

This action fetches all the items present in a release.

- Under **Choose an Action** tab, select the **Get All Items in a Release **action.
- Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the **Locale**. You can also include the branch details by clicking the **Include** **branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba7bb0c72c0f037d/64707dfd08523cebef2e5bef/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2bb16e18066f88c/64707dfd86bda528d852fce8/Save_Exit.png)

## Get All Releases

This action fetches all the releases present in a stack.

- Under **Choose an Action** tab, select the **Get All Releases** action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, and **Branch** from the **Lookup** list. Click the checkboxes for** Include Count** and **Include count of release items** to fetch the release details.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the **Limit Release**, and **Skip Release** fields. You can also include the branch details by clicking the **Include** **branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta230189f9fedc736/649964d4fcb6fd0e8e5aba7b/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fec92285215f3c3/64707ffadfafe5a4f304991a/Save_Exit.png)

## Get a Single Release

This action fetches the details of a single release.

- Under **Choose an Action** tab, select the **Get a Single Release **action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.
- **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields** toggle button to display the branch details by clicking the **Include** **branch **checkbox.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e0ac5804f526e98/647081d0ff56077fa1dbd936/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt830eb57d6dbebdd2/647081d0f6df4fc1dcb4fd95/Save_Exit.png)

## Common questions

### What is a Release in Contentstack?
A [Release](../content-managers/create-and-manage-releases/about-releases.md) comprises entries and assets that need to be deployed at the same time, either in a published or unpublished state, to a designated environment.

### What happens if I leave the Branch field empty?
**Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

### Can I add both entries and assets to a release using “Add Items to a Release”?
Both entries and assets can be added to the release. In case of assets, the value for the `content_type_uid` key should be `built_io_upload.`

### When is a release published if I don’t set a Publish Schedule?
**Note:** The release will be published immediately if the Publish Schedule field is empty.