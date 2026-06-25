---
title: "[Marketplace guides and apps] - Word Count App Installation Guide"
description: Word Count App Installation Guide
url: https://www.contentstack.com/docs/marketplace/word-count
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Word Count App Installation Guide

This page explains how to install and configure the Word Count app from the Contentstack Marketplace and how to use it inside a JSON Rich Text Editor field within entries. It is intended for developers or stack administrators setting up Marketplace apps in a Contentstack stack, and should be used when enabling word counting in the JSON RTE via a plugin.

## Word Count App Installation Guide

To enhance the user experience, Contentstack offers JSON RTE Plugins that allow you to extend the functionality of the JSON Rich Text Editor, ensuring it meets your unique business needs while maintaining a native Contentstack appearance.

With the Word Count app, you can easily track the number of words added to your JSON Rich Text Editor. This feature aids in improving SEO, user engagement, and content readability.

Integrating the Word Count app into your JSON Rich Text Editor is straightforward and significantly enhances the editor's capabilities.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner)/[Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)

Let's follow this step-by-step guide to install and configure the Word Count app within your stack.

## Steps for Execution

- [Install and Configure the Word Count app in Marketplace](#install-and-configure-the-word-count-app-in-marketplace)
- [Use the Word Count app within your Entry](#use-the-word-count-app-within-your-entry)

## Install and Configure the Word Count App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Word Count** app and click **Install**.
- In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.
- On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Word Count application.

## Use the Word Count App within your Entry

To use the Word Count app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- On the **JSON Rich Text Editor Properties** modal, enter the following:Enter a **Display Name** for the field, for example, Word Count.
- (Optional) Enter an **Instruction Value** and **Help Text** for the field.
- Click inside the** Select JSON RTE Plugin(s)** field, select **Word Count** from the list of plugins, and then click **Add Plugin(s)**.This adds Word Count in the JSON Rich Text Editor.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Word Count app, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry**.
- Add the content in the JSON RTE field. You can see the Word Count in the JSON Rich Text Editor field on your entry page, as shown below:
- After adding your content, **Save** and **Publish** your entry.

## Common questions

**How do I find the Word Count app in Contentstack?**  
From the left-hand side primary navigation, click the **Marketplace** icon, then click **Apps** from the left panel, and locate **Word Count**.

**Why can’t I save the app configuration after disabling a UI location?**  
If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.

**Where do I enable Word Count inside a content type?**  
In the **JSON Rich Text Editor Properties** modal, use the **Select JSON RTE Plugin(s)** field to select **Word Count** and then click **Add Plugin(s)**.

**Who needs access to install and configure the app?**  
Access to the Contentstack Organization/Stack as the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner)/[Admin](../invite-users-and-assign-roles/types-of-roles.md#admin).