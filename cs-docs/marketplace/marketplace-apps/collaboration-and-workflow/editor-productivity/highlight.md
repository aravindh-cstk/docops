---
title: "Highlight App Installation Guide"
description: "The Marketplace Highlight app lets you highlight the important content within the JSON Rich Text Editor field."
url: /marketplace/highlight
---

# Highlight App Installation Guide

## Highlight App Installation Guide

Highlight is a tool within Contentstack that allows users to select and mark specific text or sections of content. This can be used for various purposes such as drawing attention to important information, suggesting edits, or facilitating collaborative reviews and feedback.

This streamlines the content creation and review process, improving efficiency and communication for a more seamless publishing experience.

Contentstack Marketplace allows you to install the Highlight app which adds a highlight feature in your JSON Rich Text Editor as a plugin.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Highlight app within your stack.

## Steps for Execution

1.  [Install and Configure the Highlight app in Marketplace](#install-and-configure-the-highlight-app-in-marketplace)
2.  [Use the Highlight app within your Entry](#use-the-highlight-app-within-your-entry)

1.  ## Install and Configure the Highlight App in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Highlight** app and click **Install**.  
        ![Marketplace_Highlight.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0eed9a8f04b32b13/69fd72609e9bbb1780836d07/Marketplace_Highlight.png)
    4.  In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.![3-Highlight-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt837e128cfbff172c/667dbe5db6a6c804218f986c/3-Highlight-App-Install.png)
    5.  On the **UI Locations** tab, you can see the predefined app location. The Highlight app has only one UI location (JSON RTE) and if you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.![4-Highlight-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd88384aab687f883/667dbe5dbbfa8525a6f84b34/4-Highlight-UI-Locations.png)
        
        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    6.  Click **Open Stack** to start using the Highlight application.
2.  ## Use the Highlight App within your Entry
    
    To use the Highlight app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![5-Highlight-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19e941a6a3417f37/667dbe5dabc5136b725d09ed/5-Highlight-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  On the **JSON Rich Text Editor Properties** modal, enter the following:
        1.  Enter a **Display Name** for the field, for example, Highlight.
        2.  (Optional) Enter an **Instruction Value** and **Help Text** for the field.
        3.  Click inside the **Select JSON RTE Plugin(s)** field, select **Highlight** from the list of plugins, and then click **Add Plugin(s)**.![6-Highlight-JSONRTE-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cd22e2247f11224/667dbe5d45c6f7abf535d961/6-Highlight-JSONRTE-Add-Plugin.png)
            
            This adds Highlight in the JSON Rich Text Editor.
            
            ![7-Highlight-JSONRTE-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a10b4a1021971bc/667dbe5d8a80d15588adda75/7-Highlight-JSONRTE-Added-Plugin.png)
    5.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    6.  To use the Highlight app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        Click the **Highlight** icon from the panel and write the important information. You can also select the text and click the **Highlight** icon from the toolbar.
        
        ![8-Highlight-JSONRTE-Text-Highlighted](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt464ac3c2743687bd/667dbe5d9b2b7a196bd968d6/8-Highlight-JSONRTE-Text-Highlighted.png)
    7.  You can then proceed to **Save** and **Publish** your entry.
