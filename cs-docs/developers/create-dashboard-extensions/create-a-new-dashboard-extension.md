---
title: "[Extensions] - Create a New Dashboard Extension"
description: Steps to create and test a new dashboard extension in Contentstack, including hosting options and related API references.
url: https://www.contentstack.com/docs/developers/create-dashboard-extensions/create-a-new-dashboard-extension
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - Create a New Dashboard Extension

This page explains how to create a new dashboard extension in Contentstack (including configuration fields and hosting methods), how to test it locally before release, and where to find related API requests. It is intended for developers who need to extend a stack’s dashboard using dashboard extensions, especially when working with legacy extensions and branch-specific behavior.

## Create a New Dashboard Extension

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [Dashboard UI Location](../developer-hub/dashboard-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack allows you to create [dashboard extensions](./about-dashboard-extensions.md) for your stack’s dashboard.

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new Dashboard Extensions to this branch. These dashboard extension will be available only within the development branch. Refer to our [Branch-specific Modules](../branches/branch-specific-modules.md) document for more information.

To create a dashboard extension, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new.**![Create_a_Custom_Dashboard_Widget_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8c364f3822dd0189/60b911decda43e2520908353/Create_a_Custom_Dashboard_Widget_1_highlighted.png)
- In the **Select Extension Type** window, select **Dashboard Extension**.![Dashboard_Extension_Card.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltec26f9dd8e043377/61d88c37ec98266420c58555/Dashboard_Extension_Card.png)
- In the **Create New Extension** page, enter values in the fields as given below:
      **Title**: Provide a suitable title for your dashboard extension. This title will be visible as the extension name on the main dashboard page.
- **Default width**: Choose the width of the custom dashboard extension. Select either **Half Width** or **Full Width** as per your requirement.

  **Tip**: The height is configurable through the Extensions SDK. You can also define if the user can toggle between **Half Width** and **Full Width** in the SDK.
- **Hosting method**: Select how you want to host the extension:
          **External Hosting**: Select this option for externally hosted extensions. You need to provide the URL in the **External hosting URL** field that appears below.
- **Hosted on Contentstack**: Select this option if you can write the code in the **Extension source code** field that appears below.
- **Config Parameter**: If you have used any config parameters (such as [access token](../create-tokens/types-of-tokens.md#access-tokens)) in the source code, specify the value of the parameters in this field.
- **Enable dashboard extension**: Check this option to make the Dashboard Extension enabled for all users of the stack on the main **Dashboard **page.

  **Tip**: Using the “Settings” gear icon on the **Dashboard **page, the users can show or hide the extension on their Dashboard.
- Finally, click on **Save**.

## Testing Dashboard Extension

When you create your dashboard extension to integrate with Contentstack, you can follow the steps given below to test the extension and verify if the extension is working fine before releasing it.

To test the extension, first, clone the extension repo that you have built and install the dependencies. Then, edit the HTML, CSS, and JS files from the source folder.

To install the required dependencies, run the following command in the root folder.

```
npm install gulp-cli -g
npm install
```

To create a new build for the extension, run the following command (index.html):

```
gulp build
```

To update/test the extension while developing, run the following command:

```
gulp watch
```

Now, create a server using the **Lite Server** npm module. Before that, install the Lite Server module by using the following command:

```
npm install -g lite-server
```

Then, run the lite-server — in the root folder — by using the following command:

```
lite-server
```

After running the above command, you will get the following screen:

Make note of the port no in Access URLs (the localhost URL).

Next, we need to install ngrok to build secure tunnels from a public endpoint (that is the internet) to a locally running server. Issue the following command to install ngrok:

```
npm install ngrok -g
ngrok http <>
```

Once you run the above command, you will get a URL. Now create an extension by navigating to your stack and selecting **Settings** > **+ Add Extension** > **Create new**.

On the **Select Extensions Type** screen, select **Dashboard Extension** and then add the required details on the **Create New Dashboard** screen.

In the **Hosting method** field, select **External hosting** and paste the above URL in this field. Now save your extension and check the dashboard where you have added your extension.

You should see your updated changes.

## API Reference

Here are the links to the API requests related to this action:
- [Upload dashboard extension ](../../../api-docs/api-detail/content-management-api.md#upload-dashboard-widget)
- [Create a dashboard extension with source URL](../../../api-docs/api-detail/content-management-api.md#create-a-dashboard-widget-with-source-url)
- [Create a dashboard extension with source code](../../../api-docs/api-detail/content-management-api.md#create-a-dashboard-widget-with-source-code)

## Common questions

### Should I use dashboard extensions or the Contentstack App Framework?
Experience Extensions use the legacy approach with extensions. We recommend using the [Dashboard UI Location](../developer-hub/dashboard-location.md) for the Contentstack App Framework to extend the functionality of your apps.

### Why can’t I see my dashboard extension in another branch?
When working within specific branches, extensions added or created will be available only within that particular branch.

### How do I test an externally hosted dashboard extension locally?
You can run a local server (for example, using **Lite Server**) and then use ngrok to expose it via a public URL, which you paste into the **External hosting URL** field when creating the extension.

### Where can I find the API endpoints for creating or uploading dashboard extensions?
See the **API Reference** section for links to upload a dashboard extension and create a dashboard extension with a source URL or source code.