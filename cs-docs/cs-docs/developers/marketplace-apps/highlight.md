---
title: "[Marketplace guides and apps] - Highlight App Installation Guide"
description: Highlight App Installation Guide
url: https://www.contentstack.com/docs/developers/marketplace-apps/highlight
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Highlight App Installation Guide

This page explains how to install and configure the Highlight app from the Contentstack Marketplace and how to use it inside a JSON Rich Text Editor field within entries. It is intended for Contentstack users with Owner/Admin access who want to enable highlighting capabilities in their stack.

## Highlight App Installation Guide

Highlight is a tool within Contentstack that allows users to select and mark specific text or sections of content. This can be used for various purposes such as drawing attention to important information, suggesting edits, or facilitating collaborative reviews and feedback.

This streamlines the content creation and review process, improving efficiency and communication for a more seamless publishing experience.

Contentstack Marketplace allows you to install the Highlight app which adds a highlight feature in your JSON Rich Text Editor as a plugin.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Highlight app within your stack.

## Steps for Execution

- [Install and Configure the Highlight app in Marketplace](#install-and-configure-the-highlight-app-in-marketplace)
- [Use the Highlight app within your Entry](#use-the-highlight-app-within-your-entry)

## Install and Configure the Highlight App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Highlight** app and click **Install**.
- In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.
- On the **UI Locations** tab, you can see the predefined app location. The Highlight app has only one UI location (JSON RTE) and if you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Highlight application.

## Use the Highlight App within your Entry

To use the Highlight app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- On the **JSON Rich Text Editor Properties** modal, enter the following:Enter a **Display Name** for the field, for example, Highlight.
- (Optional) Enter an **Instruction Value** and **Help Text** for the field.
- Click inside the** Select JSON RTE Plugin(s)** field, select **Highlight** from the list of plugins, and then click **Add Plugin(s)**.This adds Highlight in the JSON Rich Text Editor.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Highlight app, [create an entry](/docs/content-managers/author-content/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.Click the **Highlight** icon from the panel and write the important information. You can also select the text and click the **Highlight** icon from the toolbar.
- You can then proceed to **Save** and **Publish** your entry.

## Common questions

### Do I need a specific role to install the Highlight app?
Yes. You need access to the Contentstack Organization/Stack as the Owner/Admin.

### Where does the Highlight app appear after installation?
The Highlight app adds a highlight feature in your JSON Rich Text Editor as a plugin.

### Can I disable the Highlight app UI location?
The Highlight app has only one UI location (JSON RTE) and if you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.

### How do I enable Highlight in a content type field?
In the JSON Rich Text Editor Properties modal, select **Highlight** from the **Select JSON RTE Plugin(s)** list and click **Add Plugin(s)**.