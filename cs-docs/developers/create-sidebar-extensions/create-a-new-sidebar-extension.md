---
title: "[Extensions] - Create a New Sidebar Extension"
description: Steps to create and test a custom Sidebar Extension in Contentstack, with related API references.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/create-a-new-sidebar-extension
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Create a New Sidebar Extension

This page explains how to create a custom Sidebar Extension in Contentstack, how to test it locally before release, and where to find related API requests. It is intended for developers extending Contentstack entry experiences, especially when working with extensions in stacks and branches.

## Create a New Sidebar Extension

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the  [Sidebar UI Location](../developer-hub/sidebar-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack allows you to create a [custom Sidebar Extension](/docs/developers/create-custom-widgets/about-custom-widgets) in your [stack](../set-up-stack/about-stack.md) to analyze your entry content and recommend ideas.

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new Custom Sidebar Extensions to this branch. These custom sidebar extensions will be available only within the development branch. Refer to our [Branch-specific Modules](../branches/branch-specific-modules.md) document for more information.

To create a custom Sidebar Extension, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

- Navigate to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.![Create_New_Custom_Widget_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1095031e5e899675/60b53e859919771ac50cde6b/Create_New_Custom_Widget_1_highlighted.png)
- In the **Select Extension Type** window, select **Sidebar Extension**.![Click_Sidebar_Extension.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb68f58ffe11c67ad/62b08ece36119858583d103a/Click_Sidebar_Extension.png)
- In the **Create New Extension** page, enter values in the fields as given below:
  - **Title**: Provide a suitable title for your custom Sidebar Extension
    . This title will be visible as a sidebar extension name in the entry page.
  - **Hosting method**: Select how you want to host the Sidebar Extension:
    - **External Hosting**: Select this option for externally hosted Sidebar Extensions. You need to provide the URL in the **External hosting URL** field that appears below.
    - **Hosted on Contentstack**: Select this option if you can write the code in the **Extension source code** field that appears below.

    **Additional Resource**: If you want to try out sample code for Sidebar Extension in the **Extension source code** field, browse through the [Text Intelligence repository](https://github.com/contentstack/extensions/tree/master/text-intelligence) available on GitHub.
  - **Config Paramete**r: If you have used any config parameters (such as [access token](../create-tokens/types-of-tokens.md#access-tokens)) in the source code, specify the value of the parameters in this field.
  - **Scope**: Select for which [content types](../create-content-types/about-content-types.md) this Sidebar Extension will be available. You can choose either **All Content Types** or **Specific Content Types**.
- Finally, click on **Save**.

## Test Custom Sidebar Extension

When you create your custom extension to integrate with Contentstack, you can follow the steps given below to test the extension and verify if the extension is working fine before releasing it.

- To test the extension, first, clone the extension repo that you have built and install the dependencies. Then, edit the HTML, CSS, and JS files from the source folder.
- To install the required dependencies, run the following commands in the root folder:

```
npm install gulp-cli -g
npm install
```

- To create a new build for the extension, run the following command (index.html):

```
gulp build
```

- Update/test the extension while developing:

```
gulp watch
```

- Now, create a server using the **Lite Server** npm module. Before that, install the Lite Server module by using the following command:

```
npm install -g lite-server
```

- Then, run the lite-server — in the root folder as follows:

```
lite-server
```

After running the above command, you should see the following:

    Make a note of the port no in Access URLs (the localhost URL):

- Next, we need to install `ngrok` to build secure tunnels from a public endpoint (that is the internet) to a locally running server. Issue the following command:

```
npm install ngrok -g
ngrok http <>
```

You should see the following:

Once you run the above command, you will get a URL.

- Navigate to the extension page that you created above, and in the **Hosting method** field, select **External hosting** and paste the above URL in it.
- Save your extension and check the entry where you have added your extension.

You should see your updated changes.

## API Reference

Here are the links to the API requests related to this action:

- [Upload a Sidebar Extension](../../../api-docs/api-detail/content-management-api.md#upload-a-widget)
- [Create Sidebar Extension with source URL](../../../api-docs/api-detail/content-management-api.md#create-widget-with-source-url)
- [Create Sidebar Extension with source code](../../../api-docs/api-detail/content-management-api.md#create-widget-with-source-code)

## Common questions

### Is this the recommended approach for extending the sidebar?

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the  [Sidebar UI Location](../developer-hub/sidebar-location.md) for the Contentstack App Framework to extend the functionality of your apps.

### Will my Sidebar Extension be available across all branches?

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch.

### How do I test an externally hosted Sidebar Extension locally?

Use the steps under **Test Custom Sidebar Extension**, including running `lite-server` and using `ngrok` to generate a public URL, then paste the URL into the **External hosting URL** field.

### Where can I find API requests for creating or uploading Sidebar Extensions?

See **API Reference** for links to: **Upload a Sidebar Extension**, **Create Sidebar Extension with source URL**, and **Create Sidebar Extension with source code**.