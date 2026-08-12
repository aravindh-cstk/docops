---
title: "[Marketplace guides and apps] - Developer Tools App Installation Guide"
description: Developer Tools App Installation Guide
url: https://www.contentstack.com/docs/marketplace/developer-tools
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Developer Tools App Installation Guide

This page explains how to install and use the Contentstack Developer Tools app from the Contentstack Marketplace. It is intended for developers (and stack admins/owners) who want to generate code snippets and type definitions directly inside the CMS while working with content types and entries.

## Developer Tools App Installation Guide

The **Contentstack Developer Tools** app enhances your development workflow by providing code snippets for content types and entries directly within the CMS.

This app supports two UI locations; the Entry Sidebar and the Content Type Sidebar. With the **Content Type Sidebar**, you can generate TypeScript code for content types and receive type definitions for API responses.

In the **Entry Sidebar**, you can select your preferred programming language to generate SDK code snippets for individual entries or retrieve snippets for all entries within a content type. Additionally, the app provides a JSON View, offering a clear and structured visualization of the API response, making it easier to analyze and work with the data.

The Contentstack Marketplace lets you install the Developer Tools app and use it in the content type and entries of a content type within the stack.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](../organization/organization-roles.md#organization-owner)/[Admin](../organization/organization-roles.md#organization-admin)

This is a step-by-step guide to install and configure Developer Tools within your stack.

## Steps for Execution

- [Install and Configure Developer Tools in Marketplace](#install-and-configure-developer-tools-in-marketplace)
- [Use Developer Tools within your Stack](#use-developer-tools-within-your-stack)

## Install and Configure Developer Tools in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:

In the left navigation panel, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Developer Tools** app and click **Install**.![Developer_tools_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am168222a2ed8fb5c9/85160f233cf8b9b27be3fde6/Developer_tools_app_Install.png?locale=en-us)
- In the popup window, select the stack where you want to install the Developer Tools app, accept the **Terms of Service**, and click the **Install** button.![Developer-Tools-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bb0590dd33142b5/67a39f7f1a0e571c77dc1f8f/Developer-Tools-App-Install.png)
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.  
  **Additional Resource**: For more information, refer to the [Entry Sidebar](../developer-hub/sidebar-location.md) and [Content Type Sidebar](../developer-hub/content-type-sidebar-location.md) UI Locations documentation.
- Click **Open Stack** to start using the Developer Tools app.

  **Note**: No additional configuration is required.

## Use Developer Tools within your Stack

To use the Developer Tools app within your stack, follow the steps given below:

### Content Type Sidebar

To use the Developer Tools app in the Content Type Sidebar, open your existing content type or [create a new one](../create-content-types/create-a-content-type.md).

**Note**: If you add or remove fields in the content type, then save the content type before generating the code.

In the right navigation panel, click **Apps**, and then select the **Developer Tools** app.![Developer-Tools-Content-Type-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3590f132da8e8088/67a39f7f9dbc8d914dba5c58/Developer-Tools-Content-Type-Apps.png)

- In the Content Type Sidebar, you can generate the code by clicking the **Generate code** button. The code format is set as **Typescript**.![Developer-Tools-Content-Type-Generate-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50bde6f203a25ca6/67a39f7ff6f9a661280d1c5d/Developer-Tools-Content-Type-Generate-Code.png)
- The code gets generated. You can also view the time when the code was generated.![Developer-Tools-Content-Type-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfbdc24f349601938/67a39f7f9dbc8dd196ba5c5e/Developer-Tools-Content-Type-Code.png)
- If you want to regenerate the code, click the **Regenerate Code** button.  
  You can scroll and view the code by clicking the **Scroll to Top** and **Scroll to Bottom** icons, and click the **Copy** icon to copy the code.

  You can also view the code block by clicking the **Expand view** icon.

### Entry Sidebar

To use the Developer Tools app in the Entry Sidebar, open your existing entry or [create a new one](../../content-managers/author-content/create-an-entry.md).

**Note**: If you add, edit, or remove any data in the entry, make sure to save it before copying the code.

In the right navigation panel, select **Apps** and then select **Developer Tools**.![Developer-Tools-Entry-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad980d340970a701/67a39f8ae72922824153a2ab/Developer-Tools-Entry-Apps.png)

- In the Entry Sidebar, you can view the code for the current entry and all entries of the content type, by default, in the **API Details** mode.![Developer-Tools-Entry-API-Details-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltffb4f23cef27040d/67a39f9bf6f9a637a40d1c61/Developer-Tools-Entry-API-Details-Code.png)
- Click the **Select Platform** drop-down to select a programming language of your choice.![Developer-Tools-Entry-API-Details-Select-Platform](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf72d4875610dc9e/67a39f8a56b3534a2f00bcaa/Developer-Tools-Entry-API-Details-Select-Platform.png)
- To copy the code of the current entry, click the **Copy** icon in the **Get this Entry** section.![Developer-Tools-Entry-API-Details-Get-This-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba3511eca3632b31/67a39f9b956a0260edba6018/Developer-Tools-Entry-API-Details-Get-This-Entry.png)
- To copy the code for all entries of the content type, click the **Copy** icon in the **Get all Entries** section.![Developer-Tools-Entry-API-Details-Get-All-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f78f37347c90756/67a39f9ba9ee4472bb01a13a/Developer-Tools-Entry-API-Details-Get-All-Entry.png)
- Click the **JSON View** tab to view the current entry code in the JSON format. To copy the JSON code, click the **Copy** icon.![Developer-Tools-Entry-JSON-View-And-Copy-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa69f23efa9082b7/67a39f8a1fd61a4a09b5abdb/Developer-Tools-Entry-JSON-View-And-Copy-Code.png)
- The code samples are updated based on the [environments](../set-up-environments/about-environments.md). Click the **App Settings** icon to modify the environments for the code snippets.  
  You can also expand the code view by clicking the **Expand View** icon.

## Common questions

### Do I need additional configuration after installing the Developer Tools app?
No. “Click **Open Stack** to start using the Developer Tools app.**Note**: No additional configuration is required.”

### Where can I use the Developer Tools app in the Contentstack UI?
This app supports two UI locations; the Entry Sidebar and the Content Type Sidebar.

### Why don’t my generated snippets reflect recent changes?
If you add or remove fields in the content type, then save the content type before generating the code. If you add, edit, or remove any data in the entry, make sure to save it before copying the code.

### What affects the code samples shown in the Entry Sidebar?
The code samples are updated based on the [environments](../set-up-environments/about-environments.md). Click the **App Settings** icon to modify the environments for the code snippets.