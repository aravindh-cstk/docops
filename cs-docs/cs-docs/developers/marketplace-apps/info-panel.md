---
title: "[Marketplace guides and apps] - Info Panel App Installation Guide"
description: Info Panel App Installation Guide
url: https://www.contentstack.com/docs/developers/marketplace-apps/info-panel
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Info Panel App Installation Guide

This page explains how to install and configure the Info Panel app from the Contentstack Marketplace and how to use it within a JSON Rich Text Editor field in your stack. It is intended for Contentstack stack administrators/owners who want to enable the Info Panel plugin for authors while creating and editing entries.

## Info Panel App Installation Guide

Info Panel is a user interface component that displays additional context, details, and insights related to the content or data being viewed or edited.

It typically displays metadata, version history, user activity, and other relevant information to help users understand and manage the content more effectively. The Info Panel enhances usability by offering quick access to critical information without navigating away from the main content interface.

By installing the Info Panel app from the Contentstack Marketplace you can add a Info Panel feature within your JSON Rich Text Editor as a plugin.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Info Panel app within your stack.

## Steps for Execution

- [Install and Configure the Info Panel app in Marketplace](#install-and-configure-the-info-panel-app-in-marketplace)
- [Use the Info Panel app within your Entry](#use-the-info-panel-app-within-your-entry)

## Install and Configure the Info Panel App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Info Panel** app and click **Install**.
- In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.
- On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Info Panel application.

## Use the Info Panel App within your Entry

To use the Info Panel app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- On the **JSON Rich Text Editor Properties** modal, enter the following:Enter a **Display Name** for the field, for example, Info Panel.
- (Optional) Enter an **Instruction Value** and **Help Text** for the field.
- Click inside the** Select JSON RTE Plugin(s)** field, select **Info Panel** from the list of plugins, and then click **Add Plugin(s)**.This adds Info Panel in the JSON Rich Text Editor.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Info Panel app, [create an entry](/docs/content-managers/author-content/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.Click the **Info Panel** icon from the panel and write the important information. You can also select the text and click the **Info Panel** icon from the toolbar.
- You can then proceed to **Save** and **Publish** your entry.

## Common questions

### Who can install the Info Panel app in a stack?
You need access to the Contentstack Organization/Stack as the Owner or Admin.

### Where does the Info Panel app appear after installation?
It can be added as a plugin within your JSON Rich Text Editor field and used from the panel or toolbar in an entry.

### What happens if I disable the predefined UI location during configuration?
You will not be able to save the configuration as it requires at least one UI location.

### Do I need to create a new content type to use the Info Panel app?
You can use it by adding it as a plugin to a JSON Rich Text Editor field in a content type, and then creating an entry for that content type.

<!-- filename: marketplace-guides-and-apps-info-panel-app-installation-guide.md -->