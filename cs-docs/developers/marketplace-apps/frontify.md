---
title: "[Marketplace guides and apps] - Frontify App Installation Guide"
description: Install and configure the Frontify app from Contentstack Marketplace, fetch Frontify credentials, and use Frontify assets in Contentstack entries.
url: https://www.contentstack.com/docs/marketplace/frontify
product: Contentstack Marketplace
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Frontify App Installation Guide

This page explains how to install and configure the Frontify app from the Contentstack Marketplace, including how to fetch required credentials from Frontify and how to use the app inside your stack. It is intended for Contentstack Organization/Stack Owners/Admins and developers who need to connect Frontify asset management to Contentstack entries.

## Frontify App Installation Guide

Frontify is an asset management platform many brands use to organize all digital assets in one place. You can upload, store, and manage images, videos, icons, logos, and documents for a collaborative workflow. With asset personalization, you can  govern and set the accessibility of certain assets within your team.

Contentstack Marketplace lets you install the Frontify application and use it within your stack to fetch and display assets from Frontify within your entries.

## Prerequisites

- [Frontify account](https://app.frontify.com/auth/?referer=%2F)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Frontify within your stack.

## Steps for Execution

- [Fetch Credentials from Frontify](#fetch-credentials-from-frontify)
- [Install and Configure Frontify in Contentstack Marketplace](#install-and-configure-frontify-in-contentstack-marketplace)
- [Use Frontify within your Stack](#use-frontify-within-your-stack)

## Fetch Credentials from Frontify

You must fetch the credentials from the Frontify dashboard to configure the app. Follow the steps to do so:

Go to [Frontify](https://app.frontify.com/auth/?referer=%2F) and create a new account.

- To fetch the Domain URL, click the **profile** icon on the bottom left corner, then click **Domain Management**. You will find the list of domain URLs under Domain. Use the accessible domain.

**Note:** While using the Domain URL, precede it with `https://`. For example, `https://frontify.example.com`

**Additional Resource:** Refer to the [Domain Path](https://help.frontify.com/en/articles/6294953-domain-path) documentation to know more about domain management for Frontify.

- To get the Client ID, you need to create an application. To do so, click the **profile** icon at the bottom left corner.
- Under user profile, click **Applications**.![Applications](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc3fba50a7e6aa165/6311c2dae3d6117d48a754db/Applications.png)
- Click **Add Application**.![Add-Application](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt789e2850d98ae33c/6311c2dac350df140f26ae95/Add-Application.png)
- Enter details such as Name, Description, enable Support Authenticator, disable Confidential Option, and add the scopes as `basic:read `and `finder:read`.![Define-Scope](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt563c62aa6b446a73/6311c2db57bb880636506847/Define-Scope.png)
- After filling up the details, click the **Create App** button to create the app.![Define-Scope-And-Create-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf978d13034f5412c/6473c43714eef67ea1883416/Define-Scope-And-Create-App.png)
- Once done, click the app to view the **Client ID**.![Client-ID](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt933e42965e422a2f/6311c2dbd6f96e04e700fb50/Client-ID.png)

**Additional Resource:** For more information, refer to[Learn how to generate your own OAuth 2 Client to use the Finder](https://developer.frontify.com/d/XFPCrGNrXQQM/finder#/details-and-concepts/oauth2-client).

## Install and Configure Frontify in Contentstack Marketplace

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you will be able to see all the available apps. Hover over the **Frontify** app and click **Install App.**
- In the popup window, select the stack where you want to install the Frontify app and click the **Install** button.![Frontify-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6bd57bab9a6b57c/64b92905b0191622e1b17d8b/Frontify-Install-App.png)
- On the **Configuration** page, enter the following details:  
  Enter the **Frontify Domain URL** and **Frontify Client ID** retrieved from Frontify in [step 1](#fetch-credentials-from-frontify).
- Select a **Mode**.

  With **Multi Select**, you can select multiple assets at a time from your media gallery.
- With **Single Select**, you can select a single asset at a time from your media gallery.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Frontify-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta047dd9a3900bfc8/65ba7fe1a0c878de22592f1a/Frontify-UI-Locations.png)

**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.

- Click the **Save** button.
- Click **Open Stack** to start using the Frontify application.

## Use Frontify within your Stack

Go to your stack, and click the **Content Models** icon in the left navigation panel.

- Click the **+ New Content Type** button to create a new content type.
- Add relevant details and click the** Save and proceed **button.![Add-Content-Type](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt781f96c7fabee430/6311c2db7066f57e88f6cd18/Add-Content-Type.png)

There are two ways to use the Frontify application in your entry.

- [Custom Field](#steps-to-use-the-frontify-application-using-a-custom-field)
- [JSON Rich Text Editor field](#steps-to-use-the-frontify-application-using-a-json-rich-text-editor-field)

### Steps to use the Frontify application using a Custom field:

- Click the **Insert a field** link represented by a **+** sign to add a custom field.
- Under **Select Extension/App**, select** Frontify**, and then click **Proceed**.

**Add Configuration to Frontify’s Custom Field **

To customize the configuration for a specific custom field added in a content type,  
follow the steps given below:

Click the **Properties** icon of the Custom field.

- Go to **Advanced**.
- Under **Config Parameter**, add the configuration for that custom field (in object format).  
  For example:

```
{
"mode": "MultiSelect",
"clientId": "",
"domain_url": ""
}
```

Config parameters for Frontify Marketplace App are `mode`, `clientId`, and `domain_url.`

Here are the possible values you can use for **mode** in the configuration:

`MultiSelect`
- `SingleSelect`

**Note:** You can override the default app configuration for a particular custom field of content type by adding the required configuration in the Config Parameter under Properties of custom field. The `key:value` passed in the configuration object overrides the default app configuration.

If any configuration value is not added or the value is empty in the configuration object entered in the custom field of the content type, then the Contentstack Frontify app will use the default app configuration from the app’s configuration specified during [step 2](#install-and-configure-frontify-in-contentstack-marketplace).

- To use the Frontify app, create an entry for the above content type, and you will see the Frontify custom field on your entry page as shown below:![Choose-Assets-Custom](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a5b460af0f3bcc8/6473c32eae5aa2ad924caf9f/Choose-Assets-Custom.png)
- Click **+ Choose Asset(s) **to select assets or files from your Frontify account and add them to your entry.

  For **Single Select **mode, you can select one asset and click **Choose **to add to your entry.![Single-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd547b7cc7f219a82/6473c4263f34da08987b5816/Single-Select-Assets.png)
- For **Multi Select **mode, you can select multiple assets and click **Choose** to add to your entry.![Multi-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa7b5263af9434ca/6473c4181c27dd46153a679f/Multi-Select-Assets.png)

**Note:** While selecting the images from the media gallery, an authentication screen will appear for the first-time, asking the user to authenticate the application by entering the username and password. After authentication, the user needs to authorize the application in order to fetch the assets from their Frontify account.

- The assets you select are added within your entry.![Assets-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt742de033ef6756d2/6473c3201c27dd05813a679d/Assets-Added-In-Custom-Field.png)
- Hover over the image to view the options to remove or preview the image.![Edit-The-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5a89cea8be84695/6473c3d9c1800102fd432efe/Edit-The-Custom-Field.png)

  Click the **Preview** icon to view the image.
- Click the **Remove** icon to delete the selected image.
- For documents or files, hover over the document to view the remove option.

Click the **Remove** icon to delete the document/media asset.![JSON-Asset-Doc-File-Type-Remove](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38028f1b3b0831a9/6474092f3f34dafff87b5841/JSON-Asset-Doc-File-Type-Remove.png)

- After adding the asset(s), **Save** and **Publish** your entry.

### Steps to use the Frontify application using a JSON Rich Text Editor field:

- In the Content Type Builder page, add JSON Rich Text Editor in your content type by clicking on the **Insert a field** link represented by a **+** sign.
- To add the Frontify plugin in JSON RTE, click the **Properties** icon of JSON RTE, and under **Select JSON RTE Plugin(s)**, choose the Frontify app, and then click the **Add Plugin(s)** button.![Select-App-From-Json](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c934b7ec55e1a72/6482e1de9625e1733cb35d31/Select-App-From-Json.png)
- After adding the plugin, click **Save** or **Save and Close** to save your changes.![Save-Close-JSON-Plugin](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf314d8bebaccecda/6311c2e97cb46356cd3a9565/Save-Close-JSON-Plugin.png)
- To use the Frontify app as a JSON RTE plugin, create an entry for this content type, and you will see the Frontify app icon in the JSON RTE field on your entry page, as shown below:![JSON-Frontify-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf96047b9356458d1/6473c40aaeb2db22a11181b4/JSON-Frontify-Icon.png)
- Click the Frontify app icon to open the **Media Library**.
- Choose one or more products from the **Media Library** and add them to your entry.
  For **Single Select** mode, you can select one asset and click **Choose** to add to your entry.
- For **Multi Select** mode, you can select multiple assets and click **Choose** to add to your entry.
- The selected asset(s) is displayed in the JSON RTE editor:![JSON-Asset-Selected](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt908888ba48d71730/6473c3f986bda5811153016d/JSON-Asset-Selected.png)
- To resize the image, drag the corner of the image and adjust the size as per your need.
- Hover over the image to perform the view, edit and delete operations.![JSON-Asset-Edit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7977e0bfeda45bd0/6473c3ea04cf0c23d0c4893f/JSON-Asset-Edit.png)

Click the **View** icon to view the image(s).
- Click the **Edit** icon to edit the asset in the Frontify app.
- Click the **Delete** icon to delete the selected image.
- To edit the image, click the Edit icon, make the necessary changes and click **Save**.
- After adding the asset(s), **Save** and **Publish** your entry.

**Note:** In order to use the Frontify application, you need to have the below browser settings:

- Pop-ups should be enabled.
- Third-party cookies should be enabled.

## Common questions

### What credentials do I need from Frontify to configure the app?
You need the **Frontify Domain URL** and the **Frontify Client ID**.

### Where do I configure the Frontify app in Contentstack?
You configure it during installation in the Contentstack **Marketplace** on the app’s **Configuration** page.

### Can I override the default app configuration for a specific field?
Yes, you can add configuration in the **Config Parameter** under **Properties** of the custom field, and the `key:value` passed in the configuration object overrides the default app configuration.

### What browser settings are required to use the Frontify application?
Pop-ups should be enabled and third-party cookies should be enabled.