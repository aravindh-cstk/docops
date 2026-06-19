---
title: "[Marketplace guides and apps] - Fonts App Installation Guide"
description: Fonts App Installation Guide
url: https://www.contentstack.com/docs/marketplace/fonts
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Fonts App Installation Guide

This page explains how to install and configure the Fonts app from the Contentstack Marketplace and how to use it within a JSON Rich Text Editor field in your stack. It is intended for Contentstack Owners/Admins who manage Marketplace apps and configure content types, and should be used when you want to enable font family, size, and color controls in JSON RTE.

## Fonts App Installation Guide

To enhance the user experience, Contentstack offers JSON RTE Plugins to extend the functionality of the JSON Rich Text Editor, catering to unique business needs while maintaining a native Contentstack look and feel.

With the Fonts app, you can easily modify the font style, size, and color in your JSON Rich Text Editor. These enhancements make your content more visually appealing and improve readability and presentation.

By installing the Fonts app from the Contentstack Marketplace, you can enhance the content manager's experience.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Fonts app within your stack.

## Steps for Execution

- [Install and Configure the Fonts app in Marketplace](#install-and-configure-the-fonts-app-in-marketplace)
- [Use the Fonts app within your Entry](#use-the-fonts-app-within-your-entry)

## Install and Configure the Fonts App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

- From the left-hand side primary navigation, click the **Marketplace** icon.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Fonts** app and click **Install**.
- In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.
- On the **Configuration** tab, enter a **Name** and **URL** to install the Fonts app. Click the **+ Add** button.  
  **Note**: **Name** denotes the name of the **Font Family** and **URL** denotes the source URL from where you want to fetch the fonts. You can search the public URLs available and use them in your JSON RTE content.

  For example, you can check the [Browse Fonts - Google Fonts](https://fonts.google.com/) documentation.
- On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.  
  **Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Fonts application.

## Use the Fonts App within your Entry

To use the Fonts app within an entry of your stack, follow the steps given below:

- Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **+ New Content Type** button.
- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- On the **JSON Rich Text Editor Properties** modal, enter the following:
  - Enter a **Display Name** for the field, for example, Fonts.
- (Optional) Enter an **Instruction Value** and **Help Text** for the field.
- Click inside the** Select JSON RTE Plugin(s)** field, select **Fonts** from the list of plugins, and then click **Add Plugin(s)**.  
  This adds Fonts in the JSON Rich Text Editor.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Fonts app, [create an entry](/docs/content-managers/author-content/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry**.
- You can see new icons added in the JSON RTE editor as shown below:
- Add the content in the JSON RTE field. Select the word or the content where you want to apply any specific Font Family, Color, or Size.You can see the Fonts in the JSON Rich Text Editor field on your entry page, as shown below:
- You can then proceed to **Save** and **Publish** your entry.

## Common questions

### Who can install the Fonts app?
You need access to the Contentstack Organization/Stack as the Owner/Admin.

### Where do I configure the font sources used by the Fonts app?
On the **Configuration** tab, enter a **Name** and **URL** and click the **+ Add** button.

### Why can’t I save the app configuration after disabling UI Locations?
If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.

### How do I enable the Fonts app in a JSON Rich Text Editor field?
In the **JSON Rich Text Editor Properties** modal, select **Fonts** in the **Select JSON RTE Plugin(s)** field and click **Add Plugin(s)**.