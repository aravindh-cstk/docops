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

Using Contentstack [Custom Field](/docs/developers/create-custom-fields/about-custom-fields), you can now input a JSON text into an entry field. With the JSON Editor custom field, you can edit and format JSON text, and view it in modes like code, trees, etc. within your Contentstack entry.

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
- In the popup window, select the stack where you want the JSON Editor app to be installed and click the **Install** button.
- Now on the **Configuration** screen, choose the global format in which you want to store the JSON. Select **JSON Object **to store the JSON in JSON format or select **JSON Stringified **to store the JSON as a String.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

- After selecting the configuration details, click the **Save** button.
- Click **Open Stack** to start using the JSON Editor application.

## Use JSON Editor within your Stack

To use the JSON Editor application within an entry of your stack, follow the steps given below:

Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:
- In the Content Type Builder page, add a [Custom field](/docs/developers/create-custom-fields/about-custom-fields) in your content type by clicking the **Insert a field **link represented by a **+** sign.
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
- To use the JSON Editor app, create an entry for this content type, and you will see this JSON Editor custom field on your entry page as shown below:
- You can input, edit, format, compact, and repair the JSON data, and perform undo and redo operations in the JSON editor. The content can be filtered, sorted, or transformed by JMESPath query language and can be viewed in different visual representations. There are five editor modes for writing:

Code Editor mode:

- Form Editor mode:
- Text Editor mode:
- Tree Editor mode:
- View Editor mode:
- After adding your JSON content, **Save** and **Publish **your entry.

## Common questions

**Q: Who can install the JSON Editor app in a stack?**  
A: Users with access to the Contentstack Organization/ Stack as the Owner/Admin.

**Q: What does the global format setting control during installation?**  
A: It lets you choose the global format in which you want to store the JSON: **JSON Object **or **JSON Stringified **.

**Q: How do I override the global JSON storage format for a specific content type?**  
A: Use **Advanced Properties** and set the **Config Parameter** with a `stringify` key and a `true` (or `false`) value.

**Q: Where can I learn more about UI locations for installed apps?**  
A: Refer to the **Additional Resource** link to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.