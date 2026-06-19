---
title: "[Marketplace guides and apps] - Shopify App Installation Guide | Old Version"
description: Install and configure the Contentstack Marketplace Shopify app and use it within your stack entries.
url: https://www.contentstack.com/docs/marketplace/shopify/old-version
product: Contentstack Marketplace
doc_type: guide
audience:
  - developers
  - admins
version: old-version
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Shopify App Installation Guide | Old Version

This page explains how to install and configure the Contentstack Marketplace Shopify app and then use it inside your Contentstack stack entries. It is intended for Contentstack stack owners/admins and developers who need to connect a Shopify store to Contentstack using a Storefront API access token.

## Shopify App Installation Guide | Old Version

Shopify is a leading commerce platform for businesses of all sizes. It allows you to set up an online store to sell your products.

With the Contentstack Marketplace Shopify app, you can use and refer to the products from your Shopify account within your Contentstack entries.

## Prerequisites
- [Shopify account](https://accounts.shopify.com/)
- [Shopify store](https://accounts.shopify.com/store-login)
- [Contentstack account](https://app.contentstack.com/#!/login)
- Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure Shopify within your stack.

The steps to be performed are as follows:
- [Get your Storefront API access token from Shopify](#get-your-storefront-api-access-token-from-shopify)
- [Install and Configure Shopify in Contentstack Marketplace](#install-and-configure-shopify-in-contentstack-marketplace)
- [Use Shopify within your Stack](#use-shopify-within-your-stack)

## Get your Storefront API access token from Shopify

To get your credentials from Shopify, follow the steps given below:

Log in to your Shopify account.
- On the Admin** **portal page, click **Apps** from the left navigation menu.
- Navigate to the bottom of the Apps page and click the **Develop apps for your store** link.
- On the App** **Development** **page, click **Create an app**. Mention your **App name** and select the **App developer** of your app, then click the **Create app** button.
- On the next screen, navigate to the **Configuration** section and configure the **Storefront API integration** for your app.
- Select the access scopes for your Storefront API and **Save** your configuration.
- Finally, click the **Install app **button, confirm your installation, and proceed to get the **Storefront API access token**.

**Note:** The Storefront API access token is required to connect your store with Contentstack. Make a note of this access token to be used in the next step.

## Install and Configure Shopify in Contentstack Marketplace

To install the application in Contentstack, follow the steps below:

Log in to your Contentstack account.
- In the left-hand side primary navigation, click the Marketplace icon to go to the Marketplace.
- Within the Marketplace, you can see all the apps available; hover over the **Shopify** app and click the **Install App** button.
- Select the stack for which you want to install the Shopify app and click the **Install** button.
- Enter the **Domain **and **Storefront API access token** on the resulting Configuration page and click the **Save **button.
- Click the **Open Stack **button to start using the Shopify application.

## Use Shopify within your Stack

To use the Shopify application within an entry of your stack, follow the steps given below:

Go to your stack and click the **Content Models** icon on the left navigation panel, and click the **+ New Content Type** button.
- Create a content type by adding relevant details as displayed below:
- In the Content Type Builder page, add a Custom field in your content type by clicking the **Insert a field** link represented by a + sign.
- Under **Select Extension/App**, select **Shopify **and click the **Proceed **button.
- After adding the app, click **Save** or **Save and Close** to save your changes.
- To use the Shopify app, create an entry for this content type, and you will see the Shopify custom field on your entry page as shown below:
- Click the **Add Collection **button, to select collections from your Shopify account and add them to your entry.
- The collections you select are referenced within your entry. You can add more collections by clicking the **Add Collection **button. Finally, **Save** your entry.

## Common questions

### Do I need to be a Stack Owner/Admin to install the Shopify app?
Yes, you need access to the Contentstack Organization/Stack as the Owner/Admin.

### What Shopify credential is required to connect Shopify with Contentstack?
The **Storefront API access token** is required to connect your store with Contentstack.

### Where do I install the Shopify app in Contentstack?
In Contentstack, click the Marketplace icon to go to the Marketplace, then hover over the **Shopify** app and click **Install App**.

### How do I use Shopify inside an entry?
Add a Custom field in a content type, select **Shopify** under **Select Extension/App**, then create an entry and use **Add Collection ** to reference collections.