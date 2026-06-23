---
title: "[Marketplace guides and apps] - Ace Editor App Installation Guide"
description: Ace Editor App Installation Guide
url: https://www.contentstack.com/docs/marketplace/ace-editor
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Ace Editor App Installation Guide

This page explains how to install and configure the Ace Editor app from the Contentstack Marketplace and how to use it inside a stack entry. It is intended for Contentstack Owners/Admins and developers who want to write and manage code (HTML, CSS, JavaScript, SQL, and more) directly within the Contentstack environment.

Ace Editor App Installation Guide

Ace Editor is a powerful code editor available in Contentstack that lets you write HTML, CSS, JavaScript, SQL, and other types of code. It provides an intuitive interface with syntax highlighting, auto-completion, and code folding features to make coding easier. It also supports multiple programming languages such as Java, .Net, PHP, Python, and more, making it a great choice for developers.

Contentstack Marketplace lets you integrate the Ace Editor app directly into your headless CMS. You can easily use this app to write, edit, and view code within the Contentstack environment.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Ace Editor app within your stack.

## Steps for Execution

- [Install and Configure the Ace Editor app in Contentstack Marketplace](#install-and-configure-the-ace-editor-app-in-contentstack-marketplace)
- [Use Ace Editor within your Stack Entry](#use-ace-editor-within-your-stack-entry)

## Install and Configure the Ace Editor app in Contentstack Marketplace

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Ace Editor** app and click **Install App**.
- In the popup window, select the stack where you want to install the Ace Editor app and click the **Install** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

**Note**: No additional configuration is required to use the Ace Editor app.

## Use Ace Editor within your Stack Entry

To use the Ace Editor application within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:
- In the Content Type Builder page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Ace Editor**, and click the **Proceed** button.

Ace Editor is added in the custom field.

- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Ace Editor app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

You will see the Ace Editor custom field on your entry page as shown below:

Write, edit, and view code in the Ace Editor custom field. Let’s create a contact form using HTML:

```

  Send Message

```

- After adding the code snippets, **Save** and **Publish** your entry.

You can view the contact form on the web page.

## Common questions

### Do I need to configure anything after installing the Ace Editor app?
**Note**: No additional configuration is required to use the Ace Editor app.

### Where can I add the Ace Editor app in my content type?
In the Content Type Builder page, add a [Custom](../create-content-types/custom.md) field in your content type and under **Select Extension/App**, select **Ace Editor**.

### Who can install the Ace Editor app in Contentstack?
Access to the Contentstack Organization/Stack as the Owner/Admin is required.

### What kinds of code can I write in Ace Editor?
Ace Editor lets you write HTML, CSS, JavaScript, SQL, and other types of code, and supports multiple programming languages such as Java, .Net, PHP, Python, and more.