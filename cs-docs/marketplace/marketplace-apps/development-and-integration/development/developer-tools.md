---
title: "Developer Tools App Installation Guide"
description: "Boost productivity with Contentstack's Developer Tools. Generate code snippets and simplify content management."
url: /marketplace/developer-tools
---

# Developer Tools App Installation Guide

## Developer Tools App Installation Guide

The **Contentstack Developer Tools** app enhances your development workflow by providing code snippets for content types and entries directly within the CMS.

This app supports two UI locations; the Entry Sidebar and the Content Type Sidebar. With the **Content Type Sidebar**, you can generate TypeScript code for content types and receive type definitions for API responses.

In the **Entry Sidebar**, you can select your preferred programming language to generate SDK code snippets for individual entries or retrieve snippets for all entries within a content type. Additionally, the app provides a JSON View, offering a clear and structured visualization of the API response, making it easier to analyze and work with the data.

The Contentstack Marketplace lets you install the Developer Tools app and use it in the content type and entries of a content type within the stack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin)

This is a step-by-step guide to install and configure Developer Tools within your stack.

## Steps for Execution

1.  [Install and Configure Developer Tools in Marketplace](#install-and-configure-developer-tools-in-marketplace)
2.  [Use Developer Tools within your Stack](#use-developer-tools-within-your-stack)

1.  ## Install and Configure Developer Tools in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Developer Tools** app and click **Install**.  
        ![Developer_tools_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am168222a2ed8fb5c9/85160f233cf8b9b27be3fde6/Developer_tools_app_Install.png?locale=en-us)
    4.  In the popup window, select the stack where you want to install the Developer Tools app, accept the **Terms of Service**, and click the **Install** button.![Developer-Tools-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bb0590dd33142b5/67a39f7f1a0e571c77dc1f8f/Developer-Tools-App-Install.png)
    5.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Developer-Tools-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt861d300afcafcaee/67a39f8ac0a373950640a80b/Developer-Tools-UI-Locations.png)
        
        **Additional Resource:** For more information, refer to the [Entry Sidebar](/docs/developer-hub/sidebar-location) and [Content Type Sidebar](/docs/developer-hub/content-type-sidebar-location) UI Locations documentation.
        
    6.  Click **Open Stack** to start using the Developer Tools app.
        
        **Note:** No additional configuration is required.
        
2.  ## Use Developer Tools within your Stack
    
    To use the Developer Tools app within your stack, follow the steps given below:
    
    1.  ### Content Type Sidebar
        
        To use the Developer Tools app in the Content Type Sidebar, open your existing content type or [create a new one](/docs/headless-cms/create-a-content-type).
        
        **Note:** If you add or remove fields in the content type, then save the content type before generating the code.
        
        1.  In the right navigation panel, click **Apps**, and then select the **Developer Tools** app.![Developer-Tools-Content-Type-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3590f132da8e8088/67a39f7f9dbc8d914dba5c58/Developer-Tools-Content-Type-Apps.png)
        2.  In the Content Type Sidebar, you can generate the code by clicking the **Generate code** button. The code format is set as **Typescript**.![Developer-Tools-Content-Type-Generate-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50bde6f203a25ca6/67a39f7ff6f9a661280d1c5d/Developer-Tools-Content-Type-Generate-Code.png)
        3.  The code gets generated. You can also view the time when the code was generated.![Developer-Tools-Content-Type-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfbdc24f349601938/67a39f7f9dbc8dd196ba5c5e/Developer-Tools-Content-Type-Code.png)
        4.  If you want to regenerate the code, click the **Regenerate Code** button.![Developer-Tools-Content-Type-Regenerate-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f4653dffd5bd900/67a39f809607169e04994ce5/Developer-Tools-Content-Type-Regenerate-Code.png)
            
            You can scroll and view the code by clicking the **Scroll to Top** and **Scroll to Bottom** icons, and click the **Copy** icon to copy the code.
            
            ![Developer-Tools-Content-Type-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt510e1ceb157388f9/67a39f7faccdc932a0d6d988/Developer-Tools-Content-Type-Options.png)
            
            You can also view the code block by clicking the **Expand view** icon.
            
            ![Developer-Tools-Content-Type-Code-Block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46b16c21d72cd424/67a39f7f93b882379765d172/Developer-Tools-Content-Type-Code-Block.png)
    2.  ### Entry Sidebar
        
        To use the Developer Tools app in the Entry Sidebar, open your existing entry or [create a new one](/docs/headless-cms/create-an-entry).
        
        **Note:** If you add, edit, or remove any data in the entry, make sure to save it before copying the code.
        
        1.  In the right navigation panel, select **Apps** and then select **Developer Tools**.![Developer-Tools-Entry-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad980d340970a701/67a39f8ae72922824153a2ab/Developer-Tools-Entry-Apps.png)
        2.  In the Entry Sidebar, you can view the code for the current entry and all entries of the content type, by default, in the **API Details** mode.![Developer-Tools-Entry-API-Details-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltffb4f23cef27040d/67a39f9bf6f9a637a40d1c61/Developer-Tools-Entry-API-Details-Code.png)
        3.  Click the **Select Platform** drop-down to select a programming language of your choice.![Developer-Tools-Entry-API-Details-Select-Platform](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf72d4875610dc9e/67a39f8a56b3534a2f00bcaa/Developer-Tools-Entry-API-Details-Select-Platform.png)
        4.  To copy the code of the current entry, click the **Copy** icon in the **Get this Entry** section.![Developer-Tools-Entry-API-Details-Get-This-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba3511eca3632b31/67a39f9b956a0260edba6018/Developer-Tools-Entry-API-Details-Get-This-Entry.png)
        5.  To copy the code for all entries of the content type, click the **Copy** icon in the **Get all Entries** section.![Developer-Tools-Entry-API-Details-Get-All-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f78f37347c90756/67a39f9ba9ee4472bb01a13a/Developer-Tools-Entry-API-Details-Get-All-Entry.png)
        6.  Click the **JSON View** tab to view the current entry code in the JSON format. To copy the JSON code, click the **Copy** icon.![Developer-Tools-Entry-JSON-View-And-Copy-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa69f23efa9082b7/67a39f8a1fd61a4a09b5abdb/Developer-Tools-Entry-JSON-View-And-Copy-Code.png)
        7.  The code samples are updated based on the [environments](/docs/headless-cms/about-environments). Click the **App Settings** icon to modify the environments for the code snippets.![Developer-Tools-Entry-Apps-Settings-And-Expand-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f81a83c765f13f9/67a39f8a99192d7f9391d571/Developer-Tools-Entry-Apps-Settings-And-Expand-View.png)
            
            You can also expand the code view by clicking the **Expand View** icon.![Developer-Tools-Entry-Code-Block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57beb741741464de/67a39f8a598976cb9afe617a/Developer-Tools-Entry-Code-Block.png)
