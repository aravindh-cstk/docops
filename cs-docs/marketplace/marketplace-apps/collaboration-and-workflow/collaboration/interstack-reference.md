---
title: "Interstack Reference App Installation Guide"
description: "Refer and use custom content type fields to reference entries from multiple stacks within your Contentstack stacks."
url: /marketplace/interstack-reference
---

# Interstack Reference App Installation Guide

## Interstack Reference App Installation Guide

Interstack Reference Marketplace app allows you to easily use referenced entries within your content type across your Contentstack stacks. Using the Interstack Reference app, you can fetch the referenced entry in the custom field of your content type and use the entries’ data among multiple stacks without leaving your current stack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure the Interstack Reference app within your stack.

## Steps for Execution

1.  [Install and Configure the Interstack Reference app in Contentstack Marketplace](#install-and-configure-the-interstack-reference-app-in-contentstack-marketplace)
2.  [Use the Interstack Reference app within your Stack](#use-the-interstack-reference-app-within-your-stack)

1.  ## Install and Configure the Interstack Reference app in Contentstack Marketplace
    
    Follow the steps to install the application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Interstack Reference** app and click **Install App**.![Marketplace_Interstack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c7c58862863d1de/69eea816daf45c020f4b17e2/Marketplace_Interstack.png)
    5.  In the popup window, select the stack where you want to install the Interstack Reference app and click the **Install** button.  
        ![Interstack-Reference-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3959c19f0b9224e7/64b8ff217b7f98b32c9fddfd/Interstack-Reference-Install-App.png)
    6.  A **Configuration** page appears with the configured settings.  
        ![Interstack-Reference-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt376508ff3f0a0886/65b7eb27292a0e0c7687d2d2/Interstack-Reference-Configuration.png)
    7.  **Note:** The settings are configured automatically after installing the app. No additional settings are required to use the Interstack Reference app. If the app is not configured properly, you will get an error message.
        
    8.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![Interstack-Reference-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48631d27a78e4a4d/65b7eb32fd23e537be7d9bd0/Interstack-Reference-UI-Locations.png)
    9.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    10.  Click the **Save** button.
    11.  Click **Open Stack** to start using the Interstack Reference application.
2.  ## Use the Interstack Reference app within your Stack
    
    To use the Interstack Reference application in an entry of your stack, you can use a Custom field.
    
    Follow the steps given below to use the Interstack Reference application using a Custom field:
    
    1.  Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details and click **Save and proceed**.  
        ![Create-Content-Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5721f31477b567f2/63e256810b15864e35bdfac7/Create-Content-Type.png)
    3.  In the Content Type Builder page, add a [Custom field](/docs/developers/create-custom-fields/use-custom-field-in-content-types/) in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension/App**, select **Interstack Reference** and then click **Proceed**.  
        ![Interstack-Reference-Select-App-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d3fa593a21478fd/64a3d6dfcef8c562f5703a35/Interstack-Reference-Select-App-In-Custom-Field.png)  
        This adds Interstack Reference in the custom field.  
        ![Interstack-Reference-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3d386d0f81743e4/64a3d7731f8d5a727d586978/Interstack-Reference-Added-In-Custom-Field.png)
        
        **Add Configuration to Interstack Reference’s Custom Field (optional)**
        
        You can customize the configuration to select a particular stack and content type that you want to select through the custom field. Follow the steps given below to add configuration to the custom field:
        
        1.  Click the **Properties** icon of the Custom field in your content type.
        2.  Go to **Advanced**.
        3.  Under **Config Parameter**, add the configuration to specify a stack and content type (in object format).
            
            For example:
            
            ```
            {
              "allowed": {
                "stack": {
                  "bltbdb397c7cc18a214": {
                    "content_type": [
                      "$all"
                    ]
                  },
                  "bltef3a570a470fd28c": {
                    "content_type": [
                      "ct_for_reference"
                    ]
                  }
                }
              }
            }
            ```
            
            **Note:** You will be able to fetch the entries only from the stacks and the content types mentioned in the configuration settings. You must mention the stack API key.
            
    5.  After adding the app, click **Save** or **Save and Close** to save your changes.
    6.  To use the **Interstack Reference** app, create an entry for the above content type, and you will see the Interstack Reference custom field in your entry page as shown below:  
        ![Choose_Existing_Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc740e7110173b7c4/63e25682c9b732110121b95d/Choose-Existing-Entry.png)
    7.  Click the **Choose existing Entry** button. A modal box appears.
    8.  In the **Select Stack** dropdown, select the stack from where you want to use the referenced entry.  
        ![Select_Stack_Dropdown](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8bba5bfbfe1307d/63e2568e83cdf64d44f75a0a/Select-Stack-Dropdown.png)  
          
        
        **Note:** You need at least read access for the stack that you want to select. Users with no access to a particular entry or stack will not be able to select the entries.
        
    9.  In the **Select Content Type** dropdown, a list of all the content types appear present in the selected stack. Select the content type from where you want to fetch the entry.  
        ![Select_Content_Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b201cfee7305a01/63e2568ec338484e3b1959be/Select-Content-Type.png)
    10.  Once you select the content type, a list of all the entries present in the content type appears. Select your preferred entry and then click the **Add Selected Entry** button to add the entry.  
         ![Add_Selected_Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt107b99bbb6035403/63e256814af9a97be711d8af/Add-Selected-Entry.png)
    11.  Click **Save**.
         
         **Tip:** The advantage of using the Interstack Reference app over the traditional referencing method is that you can select entries from **different stacks** in the Contentstack environment.
         
         **Note:** Contentstack has its own [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/) that supports this plugin which can be used to fetch the content for your page from Contentstack for Interstack Reference app.
         
    
    Follow the steps below to view the details of all the Referenced and Referencing entries.
    
    1.  Go to the **Entries** page, navigate to the Interstack Reference entry. Click the **Widgets** icon.  
        ![Click_Widgets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc03a74f23a2f0837/63eb82926a8e871a43ff1c00/Click-Widgets.png)
    2.  In the **Apps** dropdown, select the **Interstack Reference** app.  
        ![Interstack_Drop](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc00877376ed53bb/63e25681f4b2e369e5c73ac7/Interstack-Dropdown.png)
    3.  You will be able to see the details of all the **Referencing** entries and the entries to which the interstack entry is referenced to.  
        ![Referenced_Referencing_Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8087b2ccfd70c3e2/63eb82981c753975e344b9e9/Referenced-Referencing-Entries.png)  
          
        
        **Note:** You will see a refresh icon besides **Referenced in** and **Referencing** text fields. Click the refresh icon to check the latest updates.
        
    4.  You can view the status of the published entries by clicking on the publish status icon.  
        ![Publish_Details_Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ca321f798f54073/63eb82926c193c10cbb1d61f/Publish-Details-Entry.png)
    5.  A pop-up appears where you can see the publish status of all the entries referenced or referred to within the custom field entry.  
        ![Popup_Publish_Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte25ac2fb8f7de103/63e25681c9b732110121b959/POPUP-PUblish-Status.png)
    6.  The dashboard widget lists down the entries from the current stack that are being referred to in other stacks. ![Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43543fb5094bcb71/63eb8394068e8578073c5f30/Dashboard.png)

**Note:** On the initial save, Modular Blocks are collapsed and the entry UID has not been generated yet. Since the metadata API depends on this UID, metadata creation might fail, and referencing entries may not appear in the sidebar. After saving, expand the Interstack Reference app within the Modular Block and refresh, the referencing entries should then become visible.
