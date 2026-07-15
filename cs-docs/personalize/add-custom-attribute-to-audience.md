---
title: "[Personalize] - Add a Custom Attribute to an Audience"
description: Add a custom attribute to an Audience in Contentstack Personalize for better content targeting.
url: https://www.contentstack.com/docs/personalize/add-custom-attribute-to-audience
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [Personalize] - Add a Custom Attribute to an Audience

This page explains how to add an existing custom attribute to an Audience in Contentstack Personalize. It is intended for users who have access to a Personalize-enabled organization and project, and should be used after you have already created a custom attribute and want to use it for audience targeting.

## Add a Custom Attribute to an Audience

After successfully creating the custom attribute in Personalize, you can add it to an Audience for better content targeting.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- A custom attribute already created in Personalize

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

After [creating a custom attribute](./create-custom-attribute.md), you can add it to an Audience. Log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to add the custom attribute.
- Click the **Audiences** tab, and then click the **+ New Audience** button to create a new audience if you have not created one already.

  **Note:** If you have an existing Audience in your Personalize project, open it or click the corresponding vertical ellipses under the **Actions** section, select **Edit**, and jump directly to step 5.
- On the **Audience** page, provide a suitable **Name** and an optional **Description** for the audience.
- In the **Rules** section, click the **+ Add Rule** button. To add the custom attribute:

Click the **Select attribute** dropdown.
- Scroll through the dropdown and select the custom attribute you want to add.
- Click **Select Operator** to select an attribute-specific operator.
- Enter a matching criterion for the condition in the **Select Value** field.![Select Value screenshot](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdBS9JhGBRXPGsbg18Er3T6aexmtDPN88qZrBUGpSqp-mTYZLV_YsHjAmOLliDh61W2zcGvOMH-jv_zZEOqCILwfn3BjETgCdhiA-rZi9XUfGDsrFvgOKWCHm4xa-0sOmqQowXc5TIOv18wCMu6dh1eNFRo?key=xdiy-Lh4PD3Y48RoXD83ZA)

Similarly, you can add multiple attributes (preset and custom) to an Audience.

**Additional Resource:** You can use the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md#user-attributes) to set and update user attributes.
- Click **Save** to complete the setup.

This adds the new custom attribute to your audience.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#attributes) to create or update audiences with a custom attribute, delete, and retrieve all existing attributes.

## Common questions

### Do I need to create the custom attribute before adding it to an Audience?
Yes. A custom attribute already created in Personalize is listed as a prerequisite, and the steps begin after creating a custom attribute.

### Can I add more than one attribute to an Audience?
Yes. The page states: “Similarly, you can add multiple attributes (preset and custom) to an Audience.”

### Can I set or update user attributes via an API?
Yes. The page references the Personalize Edge API to “set and update user attributes.”

### Can I manage audiences and attributes programmatically?
Yes. The page references the Personalize Management API to “create or update audiences with a custom attribute, delete, and retrieve all existing attributes.”