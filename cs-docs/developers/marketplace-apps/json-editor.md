---
title: "[Marketplace guides and apps] - JSON Editor App Installation Guide"
description: JSON Editor App Installation Guide
url: https://www.contentstack.com/docs/marketplace/json-editor
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - JSON Editor App Installation Guide

This page explains how to install and configure the JSON Editor app from the Contentstack Marketplace and how to use it within a stack. It is intended for Contentstack Owners/Admins who manage stacks and want to add a JSON editing custom field experience to entries.

## JSON Editor App Installation Guide

To further enhance the business user experience, Contentstack provides prebuilt custom field applications that let you extend the functionality of your custom fields to serve your unique business needs while providing a native Contentstack look and feel.

Using Contentstack [Custom Field](../create-custom-fields/about-custom-fields.md), you can now input a JSON text into an entry field. With the JSON Editor custom field, you can edit and format JSON text, and view it in modes like code, trees, etc. within your Contentstack entry.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/Admin

This step-by-step guide explains how to install and configure JSON Editor within your stack.

## Steps for Execution

- [Install and Configure JSON Editor in Contentstack Marketplace](#install-and-configure-json-editor-in-contentstack-marketplace)
- [Use JSON Editor within your Stack](#use-json-editor-within-your-stack)

## Install and Configure JSON Editor in Contentstack Marketplace

Follow the steps below to install the JSON Editor app in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **JSON Editor **app and click **Install App**.
- In the popup window, select the stack where you want the JSON Editor app to be installed and click the **Install** button.![JSON-Editor-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt891e4d58d13fa76d/64b917c70c8ace3f5402ebec/JSON-Editor-Install-App.png)
- Now on the **Configuration** screen, choose the global format in which you want to store the JSON. Select **JSON Object **to store the JSON in JSON format or select **JSON Stringified **to store the JSON as a String.![JSON-Editor-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd56c81dabf7a2f24/65b81df80b2014fe69411663/JSON-Editor-Configuration.png)
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![JSON-Editor-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c680d251ad433f4/65b81e015f12edfa6de21eb9/JSON-Editor-UI-Locations.png)

**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.

- After selecting the configuration details, click the **Save** button.
- Click **Open Stack** to start using the JSON Editor application.

## Use JSON Editor within your Stack

To use the JSON Editor application within an entry of your stack, follow the steps given below:

Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:![JSON-Editor-ContentType](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f498e5e468bbae5/64061056ce1f78108607fa4a/JSON-Editor-ContentType.png)
- In the Content Type Builder page, add a [Custom field](../create-custom-fields/about-custom-fields.md) in your content type by clicking the **Insert a field **link represented by a **+** sign.
- Under **Select Extension/App**, select **JSON Editor **and then click **Proceed**.

This adds JSON Editor in the custom field.

- Under **Advanced Properties**, you also have an option to set the **Config Parameter** for all the entries of a particular content type. This will override the global format which was configured at the time of installation in the Configuration page.

Add a key as `stringify` and its value as `true` (or `false`) in the following format:

```
{
"stringify": true
}
```

After adding this config parameter "stringify" and setting it to true, the JSON data will be stored as a string for all the entries of this content type even if the global configuration is set to JSON Object, and vice-versa.

- After adding the app in a custom field, click either **Save** or **Save and Close** to save your changes.
- To use the JSON Editor app, create an entry for this content type, and you will see this JSON Editor custom field on your entry page as shown below:![JSON-Editor-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt321d34a0e36e6a85/6406107e952945362ea1aeba/JSON-Editor-Sample-Entry.png)
- You can input, edit, format, compact, and repair the JSON data, and perform undo and redo operations in the JSON editor. The content can be filtered, sorted, or transformed by JMESPath query language and can be viewed in different visual representations. There are five editor modes for writing:

Code Editor mode:![JSON-Editor-Type-Code](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte677076dd43f6f7d/63bf9dc3788423108f1fa869/JSON-Editor-Type-Code.png)

- Form Editor mode:![JSON-Editor-Type-Form](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf25cf1e7fecc42d6/63bf9dc399e03c1edceda402/JSON-Editor-Type-Form.png)
- Text Editor mode:![JSON-Editor-Type-Text](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt352e3f2c3b60ca55/63bf9dc38ac6c810b28360b1/JSON-Editor-Type-Text.png)
- Tree Editor mode:![JSON-Editor-Type-Tree](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt05fed97f23217d79/63bf9dc30dc3963ccff8ad74/JSON-Editor-Type-Tree.png)
- View Editor mode:![JSON-Editor-Type-View](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6e677c7d09b36f6f/63bf9dc3efe19d10ac157cc2/JSON-Editor-Type-View.png)
- After adding your JSON content, **Save** and **Publish **your entry.

## Common questions

**Q: Who can install the JSON Editor app in a stack?**  
A: Users with access to the Contentstack Organization/ Stack as the Owner/Admin.

**Q: What does the global format setting control during installation?**  
A: It lets you choose the global format in which you want to store the JSON: **JSON Object **or **JSON Stringified **.

**Q: How do I override the global JSON storage format for a specific content type?**  
A: Use **Advanced Properties** and set the **Config Parameter** with a `stringify` key and a `true` (or `false`) value.

**Q: Where can I learn more about UI locations for installed apps?**  
A: Refer to the **Additional Resource** link to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.