---
title: "Variables Plugin Usage Guide"
description: "Variables Plugin Usage Guide"
url: /marketplace/variables-plugin-usage-guide
---

# Variables Plugin Usage Guide

## Variables Plugin Usage Guide

Variables plugin allows you to insert and configure varying values fetched from the referred content types within your [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor).

Consider a scenario where you have varying information on your ecommerce website. Changing every entry containing this varying content can be time-consuming. In this case, the Variable plugin can be helpful. Add the data for different variables to a content type, and refer these varying values within the JSON Rich Text Editor in multiple content types. This helps change the variable data in a centralized location instead of editing the content for various entries.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to set up and use the Variables plugin within your JSON Rich Text Editor in Contentstack.

## Setting Up and Using the Variables Plugin

The steps to set up and use the Variables plugin are as follows:

1.  [Create a Content Type to Render Variable Data](#create-a-content-type-to-render-variable-data)
2.  [Install and Configure the Variables Plugin](#install-and-configure-the-variables-plugin)
3.  [Add the Variables Plugin within your JSON Rich Text Editor](#add-the-variables-plugin-within-your-json-rich-text-editor)

1.  ## Create a Content Type to Render Variable Data
    
    Let's create two content types called **Discount Codes** and **Product** for this use case. The **Discount Codes** content type will contain the varying information you can use within different JSON RTEs. The content type from which you render your variable content must match the following structure:
    
    ![image6.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29053709ab3dfe65/62cfe68ae1e8cc357ddc2ce2/image6.png)
    
    **Note:** Your variable data content type must have a Group field set to type Multiple containing a Title field with the UID as title.
    
    Create an entry for this content type as given below:
    
    ![Marketplace_Variables_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt256d6e79384806c1/65674c3c7e63e35bed110250/Marketplace_Variables_Entry.png)
    
    After you have created the content type with an entry from which you are rendering variable content, let's configure the Variables plugin.
    
2.  ## Install and Configure the Variables Plugin
    
    Follow the steps below to install the application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Variables** app and click the **Install** button.  
        ![Marketpldace-Variables.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57422f45a53dd705/69eea95e7e2ca11743f7a715/Marketpldace-Variables.png)
    5.  In the popup window, select the stack where you want to install the Variables app and click the **Install** button.  
        ![Variables-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8909bbe0a9bd51b/64b90244ff3e9bb5f84d76f7/Variables-Install-App.png)
    6.  To configure your plugin, enter the **Content Type UID** from which data for the variable will be rendered, and the **Field** name.  
        ![Variables-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7079d8072f27256/65b7f3b508561660f15e0d6f/Variables-Configuration.png)
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Variables-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69f426db16056038/65b7f3b5d2067b3d8a8c5ad2/Variables-UI-Locations.png)
    8.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click the **Save** button.
    10.  Click **Open Stack** to start using the plugin within your stack.
3.  ## Add the Variables Plugin within your JSON Rich Text Editor
    
    1.  Go to your stack and click the **Content Models** icon on the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details and click the **Save and proceed** button.
    3.  ![image12.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1306a85bf1bb1181/62cfe69c24c5e237d46f6976/image12.jpg)
    4.  In the Content Type Builder page, add a JSON Rich Text Editor field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    5.  Under **Select Plugin**, select the **Variables** plugin, and click the **Add Plugin(s)** button.
    6.  ![Marketplace_Variables_Extension.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a31b44ef7c8ef2d/65698ae0867c0be57738b413/Marketplace_Variables_Extension.png)
    7.  After adding the plugin, click **Save** or **Save and Close** to save your changes.
    8.  ![image11.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2090054c76a25be3/62cfe69ca60bcb3773fc333c/image11.jpg)
    9.  Now, create an entry for the **Product** content type.
    10.  Within your JSON Rich Text Editor, add your content and click the **Insert Variable** icon to add variable data from the **Discount Codes** content type:  
         ![image2.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4c5b053259fc996d/6386e2c11695dc10ab9252ae/image2.jpg)
    11.  From the options, select the discount codes you want to add within your content and click the **Add** button.
    12.  ![image1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt523d5e51c42b1d40/62cfe68a30ed0e3641c6328d/image1.png)
    13.  Your content with the variable Discount Codes data looks as follows:  
         
    14.  ![image10.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc14c37b09e3bd42f/6386e2d3a32209106e8b7921/image10.jpg)
    
    Whenever you want to change or update a discount code, you must update the Discount Codes content type, and the change automatically reflects in all the JSON RTEs where the discount code was referred.
