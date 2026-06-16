---
title: "[Personalize] - Create a Custom Attribute"
description: Create a custom attribute in Contentstack Personalize to fine-tune audience targeting and deliver personalized content experiences.
url: https://www.contentstack.com/docs/personalize/create-custom-attribute
product: Contentstack Personalize
doc_type: how-to-guide
audience:
  - developers
  - marketers
  - admins
version: current
last_updated: 2026-03-25
---

# [Personalize] - Create a Custom Attribute

This page explains how to create a custom attribute in Contentstack Personalize for audience targeting. It is intended for users who have access to a Personalize-enabled organization and an existing Personalize project, and should be used when you need to define new audience attributes for personalization.

## Create a Custom Attribute

Custom attributes in Contentstack Personalize empower you to fine-tune your audience targeting. This guide provides a clear, step-by-step walkthrough for creating these attributes, enhancing your ability to deliver personalized content experiences.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

Let’s suppose you want to create a custom attribute for users who are a member of a Loyalty Program on your website. To create the custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a custom attribute.
- Click the **Attributes** tab and then click the **+ New Attribute** button.
- In the **New Attribute** modal, provide a suitable **Name** and **Key** for the attribute along with an optional **Description**.
- Once you have done that, click the **Create** button.

This creates a new custom attribute in your Personalize project. You can now [add the custom attribute to an audience](/docs/personalize/add-custom-attribute-to-audience).

**Note:**
- Users with Owner and Member access to a Personalize project can create new custom attributes, and edit/delete existing custom attributes.
- The default number of Custom Attributes allowed per project is **100**.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#attributes) to create, edit, delete, and retrieve all existing attributes.

## Next Steps
After creating a custom attribute in your project, the data needs to be collected for the attribute. This can be done using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript) or the [Personalize Edge API](/docs/developers/apis/personalize-edge-api). You can also use tools like [Google Tag Manager](/docs/personalize/about-gtm-integration/) and [Customer Data Platform](/docs/personalize/about-cdp-integration/) integrations for collecting the data.

## Common questions

### Who can create or manage custom attributes in a Personalize project?
Users with Owner and Member access to a Personalize project can create new custom attributes, and edit/delete existing custom attributes.

### How many custom attributes can I create per project?
The default number of Custom Attributes allowed per project is **100**.

### What should I do after creating a custom attribute?
After creating a custom attribute in your project, the data needs to be collected for the attribute using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript) or the [Personalize Edge API](/docs/developers/apis/personalize-edge-api), or via integrations such as [Google Tag Manager](/docs/personalize/about-gtm-integration/) and [Customer Data Platform](/docs/personalize/about-cdp-integration/).

### Can I manage attributes via an API?
You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api#attributes) to create, edit, delete, and retrieve all existing attributes.