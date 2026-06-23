---
title: "[Extensions] - Developer Tools"
description: Documentation for the legacy Developer Tools Sidebar Extension, including creation and usage steps.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/developer-tools
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Developer Tools

This page explains the legacy “Developer Tools” Sidebar Extension for Contentstack, including what it does and how to create and use it. It is intended for developers working with entries and content types who need quick access to API endpoints/queries and entry JSON while editing content.

## Developer Tools

**Note: **This documentation uses the legacy approach with extensions. We have launched Developer Tools as a Marketplace App. For more information on Developer Tools, please refer to the [Developer Tools App Installation Guide](../marketplace-apps/developer-tools.md).

The “Developer Tools” Sidebar Extension provides developers with quick tools (API endpoint, JSON, etc.) to work with an [entry](../../content-managers/author-content/about-entries.md) or all entries of a [content type](../create-content-types/about-content-types.md) and do a lot more. Let’s explore more about this extension.

The Developer Tools Sidebar Extension, which can be accessed on the right-hand side of the entry page, primarily has two tabs: **API Details** and **JSON View**.
- **API Details**: This tab provides the [REST API](../single-sign-on/rest-api-usage.md) endpoints or queries (in any language of your choice) that you can readily use to access/fetch the current entry or all entries of the content type. You need to select the Platform, copy the endpoint/query, add the environment name, and use it as required to fetch the entry.
- **JSON View**: The JSON view tab displays the JSON data of your entry. You can then copy this JSON and use it as per requirement or import it to other content types.

This step-by-step guide explains how to create **Developer Tools** Sidebar Extension for your content types.

## Steps for Execution

- [Create Developer Tools Sidebar Extension](#create-developer-tools-sidebar-extension)
- [Use the Extension](#use-the-extension)

## Create Developer Tools Sidebar Extension

To create a Developer Tools Sidebar Extension, log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Select **Extensions.** You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Click on **+ New Extension** and select **Create new. ******
- On the **Select Extension Type** screen, select **Sidebar Extension.**********
- On the **Create New Extension** page, enter the following details:

  **Title**: Enter a name for your extension, for example, Developer Tools.
- **Hosting method**: Select Hosted by Contentstack. When you select Hosted by Contentstack, the Extension source code field appears below.
- **External source code**: In this field, you need to enter the code for the extension. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension. Our support team will provide you the code.
- Paste this code in the **Extension source code** field.
- **Config Parameter**: Provide values for the default environment and host inside this field as shown below:
```
{
    "environment": "development",
    "host": "cdn.contentstack.io"
}
```
- **Scope**: Select the content type for which you want to use this extension. The default value is All Content Types. You can select multiple content types.
- Click on **Save **to save your settings.

Now that you have added the extension to your content type, let's use it in our entry and see how it works.

## Use the Extension

Click on the content type for which you have enabled this Sidebar Extension.
- Click on an entry. You will see the **Sidebar Extensions **dropdown at the top. Click on it and select Developer Tools**.**
- The selected Sidebar Extension expands on the sidebar.
- You can then select either of the following options:

  **API Details**: This tab provides the **REST API endpoints **or **queries** (in any language of your choice) that you can readily use to access/fetch the current entry or all entries of the content type.  
  Under **Platform**, either select REST API or the platform (iOS, Android, Javascript, etc.) to view the REST API endpoint for fetching the entry. You can copy this endpoint/query (and enter the environment name) and use it as required.  
  The Sidebar Extension provides endpoints/queries for both **Get this entry** and **Get all entries**.
- **JSON view**: The **JSON view** tab lets you to see the JSON format of the entry you're working on, which can then be copied and exported to other content types.

## Common questions

### Is this page for the Marketplace App or the legacy extension?
This documentation uses the legacy approach with extensions, and it also links to the Marketplace App installation guide for Developer Tools.

### Where do I get the extension source code?
If Extensions are part of your plan, contact the [Support](mailto:support@contentstack.com) team to get the code for the extension.

### What does the Config Parameter do?
It provides values for the default environment and host inside the field (for example, `"environment": "development"` and `"host": "cdn.contentstack.io"`).

### Where do I access the Developer Tools Sidebar Extension in the UI?
Open an entry for a content type where the extension is enabled, then use the **Sidebar Extensions** dropdown at the top and select Developer Tools.