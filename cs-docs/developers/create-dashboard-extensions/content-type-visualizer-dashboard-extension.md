---
title: "[Extensions] - Content Type Visualizer Dashboard Extension"
description: Documentation for adding and using the Content Type Visualizer Dashboard Extension in a Contentstack stack dashboard.
url: https://www.contentstack.com/docs/developers/create-dashboard-extensions/content-type-visualizer-dashboard-extension
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - administrators
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Content Type Visualizer Dashboard Extension

This page explains how to add and use the Content Type Visualizer Dashboard Extension in a Contentstack stack dashboard. It is intended for developers or stack administrators who manage dashboard extensions and want a diagrammatic view of content types and their relationships.

## Content Type Visualizer Dashboard Extension

**Note**: This documentation uses the legacy approach with extensions. We have launched Content Type Visualizer as a Marketplace App. For more information on Content Type Visualizer, please refer to the [Content Type Visualizer App Installation Guide](../marketplace-apps/content-type-visualizer.md).

Content Type Visualizer Dashboard Extension offers a graphical representation of all content types, along with their fields, in a particular stack. This is similar to an ER diagram which is most commonly used in database management.

When you add the Content Type Visualizer extension to your dashboard, Contentstack users can easily get a diagrammatic view of all content types in a particular stack along with relationships between the content types, for example, one to one or one to many, and so on.

This step-by-step guide explains how to add the Content Type Visualizer Dashboard Extension for your Stack Dashboard.

## Steps for Execution

Using this extension is a two-step process:
- [Add Content Type Visualizer extension to your Stack Dashboard](#add-content-type-visualizer-extension-to-your-stack-dashboard)
- [Use the extension](#use-the-extension)

Let's discuss these steps in detail.

## Add Content Type Visualizer Extension to Your Stack Dashboard

To add the Content Type Visualizer Dashboard Extension, log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:

Go to your stack and click the “Settings**”** icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Click on the **+ New Extension** button on the top and select **Create new**.
- On the **Select Extension Type** page, select **Dashboard Extension**. You will be directed to the **Create New Dashboard** page, where you need to enter details in the fields as given below:

  **Title**: Provide a suitable title, for example, Content Type Visualization.
- **Default width**: Select **Full Width**.
- **Hosting method**: Select **Hosted by Contentstack**. As soon as you do this, you will see the **Extension source code** field below.
- Copy and paste the code from **index.html**, which is inside the root directory, in the extension.
- **External source code**: In this field, you need to enter the extension code. If extensions are part of your plan, get the source code from our [Dashboard Widgets GitHub](https://github.com/contentstack/extensions/tree/master/content-type-visualizer) page.
- **Config parameters**: Enter the configuration details for the extension.
  You need to provide the app host (region where your app is hosted, that is North America or European region, for example, app.contentstack.com)

```json
{
    "appHost": "app.contentstack.com"
}
```

For the Europe region, please use "eu-app.contentstack.com". Similarly, for Azure North America, use "azure-na-app.contentstack.com", and for Azure Europe, use “azure-eu-app.contentstack.com”.
- **Enable dashboard extension**: Select this option to ensure all stack users are able to view the Content Type Visualizer extension on their respective screens.
- Click on **Save** to create your custom dashboard extension.

## Use the Extension

Once you have added your Dashboard Extension, navigate to the Dashboard by clicking on the **Dashboard** button at the top of the left navigation panel.

You should be able to see the Content Type Visualizer Dashboard Extension added to your Dashboard as shown below:

You can click on the **refresh** button to refresh the Dashboard Extension if new content types have been added and you want to reflect them in the extension. Moreover, you can zoom in or zoom out by clicking on the **+** and **-** icons respectively.

You can see the name of the content type, and clicking on a small icon to the right of the content type name helps you get the JSON preview as shown below:

You can simply copy the JSON and use it as required. **Field count: 5** in the following screenshot represents the number of fields in the selected content type. Also, below it, there is an entry count that represents the total number of published entries in that content type:

The **Select Environment** dropdown lists all the environments in your stack. Through this dropdown, you can select the environment, and it gives you the published entry count for that particular environment.

If you click on the pencil icon (as shown in the screenshot below) next to the content type name, you'll be directed to the **Content Type Builder** page, where you can edit the content type as required.

## Common questions

### Is this documentation for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched Content Type Visualizer as a Marketplace App. For more information on Content Type Visualizer, please refer to the [Content Type Visualizer App Installation Guide](../marketplace-apps/content-type-visualizer.md).

### What value should I use for `appHost` in the config parameters?
You need to provide the app host (region where your app is hosted, that is North America or European region, for example, app.contentstack.com). For the Europe region, please use "eu-app.contentstack.com". Similarly, for Azure North America, use "azure-na-app.contentstack.com", and for Azure Europe, use “azure-eu-app.contentstack.com”.

### How do I refresh the diagram after adding new content types?
You can click on the **refresh** button to refresh the Dashboard Extension if new content types have been added and you want to reflect them in the extension.

### How do I edit a content type from the visualizer?
If you click on the pencil icon (as shown in the screenshot below) next to the content type name, you'll be directed to the **Content Type Builder** page, where you can edit the content type as required.