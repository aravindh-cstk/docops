---
title: "Cloudinary Trigger"
description: "Learn how to use the Cloudinary trigger to streamline asset workflows, from uploads to metadata updates, within your Contentstack environment."
url: /agent-os/cloudinary-trigger
---

# Cloudinary Trigger

## Cloudinary Trigger

Cloudinary is a robust image and video management tool that covers uploading, storage, optimization, and delivery.

Using the Cloudinary trigger, you can effortlessly automate workflows and streamline asset management by automatically responding to file changes within your Contentstack environment.

## Prerequisites

Start with adding your Cloudinary account by following the steps given below:

### Connect your Cloudinary Account

1.  Navigate to your project and click **Automations** in the top navigation panel.
2.  Click **\+ New Automation** and from the dropdown options, click **Create New**. Enter a **Name** and an optional **Description**. Click **Create**.
3.  Click **Configure Trigger** from the left navigation panel.
4.  Within the **Configure Trigger**, click the **Cloudinary** connector.![Select_Cloudinary_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78b25b3f1ac151a8/6a02d6257897e625cdf4b574/Select_Cloudinary_Trigger.png)
5.  Under **Choose Trigger** tab, select the **Asset** **Trigger**.![Select_action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0c48ba4c3125496/6a02d6257897e67b7df4b570/Select_action.png)
6.  On the **Configure Trigger** page, click the **\+ Add New Account** to add your Cloudinary account.![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79007da3f930a286/6a02d6258f39f48d4fc4e34e/Add_New_Account.png)
7.  In the **Authorize** pop-up window, provide details such as **Cloud Name**, **API Key**, and **API Secret**.
    
    To generate **Cloud Name**, **API Key**, and **API Secret**, log in to the [Cloudinary dashboard](https://cloudinary.com/) and perform the following steps:
    
    1.  Click the **Dashboard** tab in the left navigation.![Cloudinary_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf204207c3e61bd12/668bf5fac984887f245e4a75/Cloudinary_Dashboard.png)
    2.  Under the “Product Environment” section, you will see the **Cloud Name**. Click **Go to API Keys**, and click the **\+ Generate New API Key** button to create a new API key.
        
        You will see the **API Secret**. Click the **Eye** icon and provide the login password. Click **Approve** to view the API Secret.
        
        For more information, refer to the [Admin API reference](https://cloudinary.com/documentation/admin_api) document.
        
        ![Cloudinary_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf204207c3e61bd12/668bf5fac984887f245e4a75/Cloudinary_Dashboard.png)
8.  Once done, click **Authorize**.![Authoriz_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5903f104a3030a3b/6a02d625a6e89d8f13b396e7/Authoriz_button.png)

## Set up the Cloudinary Trigger

Perform the following steps to set up the Cloudinary Trigger:

1.  From the left navigation panel, click **Configure** **Trigger**.
2.  Within the **Configure Trigger**, click the **Cloudinary** connector.![Select_Cloudinary_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78b25b3f1ac151a8/6a02d6257897e625cdf4b574/Select_Cloudinary_Trigger.png)
3.  Under the **Choose Trigger** section, select **Asset** **Trigger**.
    
    **Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.
    
4.  Let’s look at it in detail.
    

### Asset Trigger

The Asset Trigger event lets you trigger an automation when you perform asset related activities in your Cloudinary account.

Let’s look at the steps to set up the trigger event.

1.  Under the **Choose Trigger** tab, select **Asset Trigger**.
2.  On the **Asset Trigger Configure Trigger** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Cloudinary Account](#connect-your-cloudinary-account) step.
    2.  Select the trigger event from the drop-down, i.e., **Asset Uploaded**.
        
        For **Asset Trigger**, you will find the following events:
        
        -   **Asset uploaded:** Triggered when a new asset is added.
        -   **Asset renamed (public ID changed)**: Triggered when an existing file’s identifier is changed.
        -   **Asset deleted:** Triggered when an asset is removed.
        -   **Tags modified:** Triggered when the labels/tags of an asset are updated.
        -   **Context modified:** Triggered when the contextual information of an asset is changed.
        -   **Metadata modified:** Triggered when the descriptive metadata of an asset is edited.
        -   **Display name changed:** Triggered when the visible name of an asset is updated without altering the actual file.
        -   **Folder created:** Triggered when a new folder is created.
        -   **Asset moved between folders:** Triggered when an asset is transferred from one folder to another.
        -   **Asset folder moved/renamed:** Triggered when a folder’s path changes due to renaming or relocation, affecting all included files.
        -   **Folder deleted:** Triggered when a folder is removed.
        -   **Access control changed:** Triggered when the permissions or access settings of an asset are updated.
        -   **All:** Triggered when any of the above actions occur. ![Select_an_Event.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06f3b997b707c3e6/6a02d62526f60c0e7551e6be/Select_an_Event.png)
3.  Click **Proceed**.
4.  Click **Test Trigger** to execute and test the trigger that you configured.
5.  If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83d069d8b0aedb24/6a02d625c887b71d101d3ba3/Save_Exit_Button.png)

This sets the **Cloudinary** trigger.
