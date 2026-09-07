---
title: "Contentstack Management - Assets Actions"
description: "Use the Contentstack Management Assets actions to automate asset based operations."
url: /agent-os/contentstack-management-assets-actions
uid: bltbe758b84a9a8b304
---

# Contentstack Management - Assets Actions

## Contentstack Management - Assets Actions

Within Contentstack, all uploaded files such as images, videos, PDFs, audio files, and more are stored in your repository for later access. This repository, where uploaded files reside, is referred to as [Assets](/docs/headless-cms/about-assets/). You can perform asset based operations using the following Contentstack Management Assets actions. ![All_Assets.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93274a9342d93f7b/66f287383666b0303abacf4e/All_Assets.png)

Let’s look at each of them in detail.

## Create an Asset

This action lets you create a new asset in Contentstack.

1.  Under **Choose an Action** tab, select the **Create an Asset** action.
2.  On the **Create an Asset** Configure Action page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions)step.
    2.  Select a **Stack** from the **Lookup** list and enter a **Title** for the asset.
    3.  Specify a **File Name** for the asset, such as ‘NewAsset.png’ or ‘NewAsset.jpeg.’  
        ![Select_Fields_Create_Asset.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9faeedf8be64ea05/682b0e400cda2652c0fc2a93/Select_Fields_Create_Asset.png)
    4.  Enter the **Input URL** of the image you want to create and specify a suitable **Description** for the asset.  
        ![Select_Field2_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6356760ed385e683/682b0e404d67fa72d0589152/Select_Field2_Create.png)
    5.  Optionally, enable the **Show Optional Fields** toggle button to display the **Select Folder** field.
    6.  In the **Select Folder** drop-down, choose a destination folder to store your asset.  
        ![Select_Folder_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcc4354399fd5714/682b0e402b2719150e5e6041/Select_Folder_Create.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  On successful configuration, you can see the below output. Click **Save and Exit**.  
    ![Contentstack_Action_Create_an_asset_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3a3069dc871a82b/65e06fcceb51e3f0fd11623b/Contentstack_Action_Create_an_asset_Save_Exit.png)

## Delete an Asset

This action lets you delete an asset in Contentstack.

1.  Under **Choose an Action** tab, select the **Delete an Asset** action.
2.  On the **Delete an Asset Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** from the **Lookup** list.
    3.  In the **Select Asset** drop-down, select the asset you want to delete.

        If you have assets stored in nested folders within your Contentstack CMS, you can select such assets as well for deletion.

        ![Select_Fields_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16b2346144afbbd9/682b0fd6ef59b1550f6b52e4/Select_Fields_Delete.png)
    4.  Optionally, enable the **Show Optional Fields** toggle button to view the **Branch** field.
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10ed86e48fc19e30/6627bcd8b8b5ce9bd3dc153d/Save_Exit.png)

## Get All Assets

This action lets you fetch details of all the assets in your stack.

1.  Under **Choose an Action** tab, select the **Get All Assets** action.
2.  On the **Get All Assets** Configure Action page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and **Environment** from the **Lookup** list.  
        ![Select_Fields_Get_All_Assets.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe343d6a4d75aa7b/682b1104a14cef5ce6798010/Select_Fields_Get_All_Assets.png)

        **Note:** By default, the main branch is selected (even if the Branch field is empty).

    3.  Optionally, enable the **Show Optional Fields** toggle button to display the **Branch**, **Asset Limit**, **Skip Asset (Pagination)** fields.
    4.  In the **Select Folder** drop-down, select a folder to fetch the details of all the assets present in the folder.

        Additionally, you can mark the **Include count**, **Include publish details** and **Include metadata** checkboxes to display the count of the total number of assets, publish and metadata details in the output.

        ![Select_Field2_Get_all_Assets.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt468d7eddd5d06772/682b1197676bf73580e48714/Select_Field2_Get_all_Assets.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_And_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt791a064ab2ad6d94/656dae8cc8f24823d03b76c1/Save_And_Exit.png)

## Get Asset Reference

This action lets you fetch details of all entries in which the selected asset is referenced.

1.  Under **Choose an Action** tab, select the **Get Asset Reference** action.
2.  On the **Get Asset Reference** **Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Asset**, and **Branch** from the **Lookup** list.  
        ![Select_Get_Asset_Reference_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84685a05486cdf9e/682b132c1d36a1c922b22542/Select_Get_Asset_Reference_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc15d574f0defd121/66f28026aa28a8a2cfd2b6c1/Save_Exit.png)

## Get a Single Asset

1.  Under **Choose an Action** tab, select the **Get a Single Asset** action.
2.  On the **Get a Single Asset** Configure Action page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Branch**, **Asset**, and **Environment** from the **Lookup** list.  
        ![Select_Fields_Single_Asset.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7042ed50080975d/682b148824eaf7bc97818227/Select_Fields_Single_Asset.png)

        If you have assets stored in nested folders within your Contentstack CMS, you can also select those assets.

        **Note:** By default, the main branch is selected (even if the Branch field is empty).

        ![Select_Folders_Single_Asset.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91679052074be52c/682b1487655521ba75315b83/Select_Folders_Single_Asset.png)
    3.  Optionally, enable the **Show Optional Fields** toggle button to display the **Version** field. Here, you can enter the asset [Version](/docs/headless-cms/about-asset-versioning) to fetch the details of the asset.  
        ![Select_Show_Optional_Field_Single_Asset.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb8d1edfe1a54789/682b1487676bf7a53de48738/Select_Show_Optional_Field_Single_Asset.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd993bad6a2a1a7d/656daf7de3d07fa065793f2b/Save_Exit.png)

## Publish an Asset

This action lets you publish an asset automatically in your stack. To know more, visit [publish assets](/docs/headless-cms/publish-an-asset).

1.  Under **Choose an Action** tab, select the **Publish an Asset** action.
2.  On the **Publish an Asset Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Branch**, and an **Asset** from the **Lookup** list.

        If you have assets stored in nested folders within your Contentstack CMS, you can select such assets as well for publishing.  

        ![Select_Fields_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21fd8066797fd90a/682b16a06a59be59e1dd4963/Select_Fields_Publish.png)You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list.

        **Note:** To dynamically fetch assets, configure the Asset Trigger and fetch the asset UID.

    3.  Select the **Environment(s)** from the **Lookup** list where you want to publish the asset.  
        ![Select_Environment_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte37763782afdcf66/682b169f9883b80a68d8dea1/Select_Environment_Publish.png)

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

    4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Select Locale(s)** and **Publish Schedule** fields.  
        ![Select_Show_Optional_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt026920bcd6296658/682b169f24eaf7e86881823a/Select_Show_Optional_Publish.png)

        **Note:** You can select multiple **Environment(s)** and **Locale(s)** to publish the asset.

3.  Once done, click **Proceed**. 
4.  Click **Test Action** to test the configured action.
5.  On successful configuration, you can see the below output. Click **Save and Exit**. A publish and unpublish icon will appear for the asset on the entry page.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b8b3e6cd9843b10/6601a8e8d057556b8a000912/Save_Exit.png)

## Update an Asset

This action lets you update an existing asset in Contentstack.

1.  Under **Choose an Action** tab, select the **Update an Asset** action.
2.  On the **Update an Asset** Configure Action page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and an **Asset** from the **Lookup** list.

        If you have assets stored in nested folders within your Contentstack CMS, you can select such assets as well for updating their details.

        ![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae33d804096508d6/66bee6e277be396079ea71e6/Select_Field.png)
    3.  Enter a **Title** and a suitable **Description** for the asset to update.
    4.  Specify a **File Name** for the asset, such as ‘Travel\_Friendly.png’ or ‘Travel\_Friendly.jpeg.’ Enter the **Input URL** of the image you want to update.  
        ![Select_Field2_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt347dce3466975e40/682b188872524195d88cee8d/Select_Field2_Update.png)
    5.  Optionally, enable the **Show Optional Fields** toggle button to display the **Select Folder** field.
    6.  In the **Select Folder** drop-down, choose a destination folder to update an asset in it.  
        ![Show_Optional_Field_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ca38784b1320bd2/682b1888a211e76bbbc7ac01/Show_Optional_Field_Update.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  On successful configuration, you can see the below output. Click **Save and Exit**.  
    ![Contentstack_Action_Update_an_asset_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab8a162d5bcf773f/65e07293d781fe2777e744df/Contentstack_Action_Update_an_asset_Save_Exit.png)
