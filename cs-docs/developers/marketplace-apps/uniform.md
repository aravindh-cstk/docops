---
title: "[Marketplace guides and apps] - Uniform App Installation Guide"
description: Uniform App Installation Guide
url: https://www.contentstack.com/docs/marketplace/uniform
product: Contentstack Marketplace
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Uniform App Installation Guide

This page explains how to install and configure the Uniform app from the Contentstack Marketplace and how to use it inside a stack entry. It is intended for Contentstack admins/owners and developers who need to connect Uniform personalization events to Contentstack content.

## Uniform App Installation Guide

Uniform is an optimization platform that helps businesses tailor personalized experiences for their users. By using signals, it enhances personalized content based on the intent of the user.

Market allows you to easily install and use the Uniform application that allows you to personalize events from Uniform within your entries.

## Prerequisites
- [Uniform account](https://login.uniform.app/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/ Admin

This step-by-step guide explains how to install and configure Uniform within your stack.

## Steps for Execution
- [Get your Credentials from Uniform](#get-your-credentials-from-uniform)
- [Install and Configure Uniform in Contentstack Marketplace](#install-and-configure-uniform-in-contentstack-marketplace)
- [Use Uniform within your Stack](#use-uniform-within-your-stack)

## Get your Credentials from Uniform

To get your Uniform API Key, follow the steps given below:
- Click on the **Create a delivery API key** at the top right corner as shown below:
- You'll be directed to the **API Keys** section under the **Settings** tab, as shown below. Provide a name for your API Key and select the permissions as desired.
- Click on the **Add** button. The API key will be generated with the name you entered along with the permissions applicable for it. Please make a note of it. We will add it to our code later in the guide.
- You will also see a **Publish** button at the top right corner, click on it.

To get your Project ID, follow the steps given below:
- Select **Project** from the projects section.
- Go to the **Settings** section and you will see **Project ID** as shown below.

## Install and Configure Uniform in Contentstack Marketplace

To install the application in Contentstack, follow the steps below:
- Login to your Contentstack account.
- On the left-hand-side primary navigation, you will find a new icon for Marketplace (as shown below). Click on the icon to go to the Marketplace.
- Within the Marketplace, you will be able to see all the apps available, hover over the **Uniform** app and click on **Install App**.
- In the popup window, select the stack for which you want to install the Uniform app and click on **Install**.
- On the **Configuration** screen, enter the Uniform API Key and Project ID that you got in step 1. Click on **Save**.
- Click on **Open Stack** to start using the Uniform application.

## Use Uniform within your Stack

To use the Uniform application within an entry of your stack, follow the steps given below:
- Go to your stack and click the “Content Models” icon on the left navigation panel, and click on the **+ New Content Type** button.
- Create a content type by adding relevant details as displayed below:
- In the Content Type Builder page, add a Custom field in your content type by clicking on the “Insert a field” link represented by a + sign.
- Under Select **Extension/App**, select **Uniform** and click on **Proceed**.
- After adding the app, click on either **Save** or **Save and Close** to save your changes.
- To use the Uniform app, create an entry for this content type, and you will see this Uniform custom field on your entry page.
- Click on **Select Intent Tags**, to select events from your Uniform  account and personalize them within your entry.
- The events you select are added within your entry. You can add and personalize more events or simply save and publish your entry as it is.

## Common questions

### Do I need to be an Owner/Admin to install the Uniform app?
Yes, you need Access to the Contentstack Organization/ Stack as the Owner/ Admin.

### What Uniform details are required during configuration in Contentstack Marketplace?
On the **Configuration** screen, enter the Uniform API Key and Project ID that you got in step 1.

### Where do I use the Uniform app after installation?
To use the Uniform application within an entry of your stack, add it as a Custom field in a content type and then use it in an entry.

### What can I do with “Select Intent Tags”?
Click on **Select Intent Tags**, to select events from your Uniform  account and personalize them within your entry.