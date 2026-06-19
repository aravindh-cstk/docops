---
title: "[Marketplace guides and apps] - Variables Plugin Usage Guide"
description: Variables Plugin Usage Guide for inserting and configuring varying values in the JSON Rich Text Editor using referred content types.
url: https://www.contentstack.com/docs/marketplace/variables-plugin-usage-guide
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Variables Plugin Usage Guide

This page explains how to set up and use the Variables plugin in Contentstack to insert and configure varying values in the JSON Rich Text Editor by referencing data from a dedicated content type. It is intended for Contentstack stack owners/admins and developers who need centralized management of reusable variable content across multiple entries.

## Variables Plugin Usage Guide

Variables plugin allows you to insert and configure varying values fetched from the referred content types within your [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor).

Consider a scenario where you have varying information on your ecommerce website. Changing every entry containing this varying content can be time-consuming. In this case, the Variable plugin can be helpful. Add the data for different variables to a content type, and refer these varying values within the JSON Rich Text Editor in multiple content types. This helps change the variable data in a centralized location instead of editing the content for various entries.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to set up and use the Variables plugin within your JSON Rich Text Editor in Contentstack.

## Setting Up and Using the Variables Plugin

The steps to set up and use the Variables plugin are as follows:

- [Create a Content Type to Render Variable Data](#create-a-content-type-to-render-variable-data)
- [Install and Configure the Variables Plugin](#install-and-configure-the-variables-plugin)
- [Add the Variables Plugin within your JSON Rich Text Editor](#add-the-variables-plugin-within-your-json-rich-text-editor)

## Create a Content Type to Render Variable Data

Let's create two content types called **Discount Codes** and **Product** for this use case. The **Discount Codes** content type will contain the varying information you can use within different JSON RTEs. The content type from which you render your variable content must match the following structure:

**Note**: Your variable data content type must have a Group field set to type Multiple containing a Title field with the UID as `title`.

Create an entry for this content type as given below:

After you have created the content type with an entry from which you are rendering variable content, let's configure the Variables plugin.

## Install and Configure the Variables Plugin

Follow the steps below to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Variables** app and click the **Install App** button.
- In the popup window, select the stack where you want to install the Variables app and click the **Install** button.
- To configure your plugin, enter the **Content Type UID** from which data for the variable will be rendered, and the **Field** name.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

**Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

- Click the **Save** button.
- Click **Open Stack** to start using the plugin within your stack.

## Add the Variables Plugin within your JSON Rich Text Editor

Go to your stack and click the **Content Models** icon on the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details and click the **Save and proceed** button.
- In the Content Type Builder page, add a JSON Rich Text Editor field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Plugin**, select the **Variables **plugin, and click the **Add Plugin(s)** button.
- After adding the plugin, click **Save** or **Save and Close** to save your changes.
- Now, create an entry for the **Product **content type.
- Within your JSON Rich Text Editor, add your content and click the **Insert Variable** icon to add variable data from the **Discount Codes** content type:
- From the options, select the discount codes you want to add within your content and click the **Add **button.

Your content with the variable Discount Codes data looks as follows:

Whenever you want to change or update a discount code, you must update the Discount Codes content type, and the change automatically reflects in all the JSON RTEs where the discount code was referred.

## Common questions

### What content type structure is required for variable data?
Your variable data content type must have a Group field set to type Multiple containing a Title field with the UID as `title`.

### Where do I configure which content type the Variables plugin reads from?
During app configuration, enter the **Content Type UID** from which data for the variable will be rendered, and the **Field** name.

### How do I insert a variable into the JSON Rich Text Editor?
Within your JSON Rich Text Editor, click the **Insert Variable** icon, select the discount codes you want to add, and click the **Add **button.

### How do updates to variable data propagate?
Update the Discount Codes content type, and the change automatically reflects in all the JSON RTEs where the discount code was referred.