---
title: "[Personalize] - Delete a Custom Attribute"
description: Delete non-referenced and referenced custom attributes in Contentstack Personalize.
url: https://www.contentstack.com/docs/personalize/delete-custom-attribute
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Personalize] - Delete a Custom Attribute

This page explains how to delete custom attributes in a Contentstack Personalize project, including both non-referenced and referenced attributes. It is intended for users with access to a Personalize project who need to clean up unused or redundant attributes without disrupting existing audiences and rules.

## Delete a Custom Attribute

Deleting a custom attribute from your Personalize project helps maintain an organized set of attributes and ensures that only relevant data is tracked.

This guide walks you through the steps required to delete non-referenced and referenced custom attributes from your project, allowing you to clean up unused or redundant attributes.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize

**Note:** Users with Owner and Member access to a Personalize project can delete existing custom attributes.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

### Delete a Non-referenced Custom Attribute
A non-referenced attribute in Contentstack Personalize is a custom attribute that is not currently being used in any audience rules or segmentations within your project.

To delete an existing non-referenced custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click** Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete a custom attribute.
- Click the **Attributes** tab.
- You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
- In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.

You will get a success message after the custom attribute is deleted from Personalize.

### Delete a Referenced Custom Attribute
A referenced attribute in Contentstack Personalize is a custom attribute that is currently being used in audience rules or segmentations within your project.

This means that the attribute is actively involved in defining the conditions or criteria for targeting specific audiences with personalized experiences.

As a result, deleting a referenced attribute requires additional steps to ensure that existing audience definitions and personalization strategies are not disrupted. This involves first removing the attribute from any audience rules where it is used, and then proceeding with its deletion.

To delete an existing referenced custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete a custom attribute.
- Click the **Audiences** tab.
- To remove a referenced custom attribute from the Audience, open the audience in one of the following ways:Click the audience name, or
- Click the vertical ellipses under **Actions** and select **Edit**.
- **Note:** To delete custom attributes from a referenced audience, ensure that the experience associated with that audience is in ‘Draft’ status.
- In the **Audience** page, scroll to the **Rules** section and then click the **Delete** icon next to the preferred custom attribute from the list.
- Once you have done that, click the **Save** button.
- Now that we have removed the custom attribute from the Audience’s Rules, click the **Attributes** tab in the left navigation panel.
- You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.
- In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.**Warning:** Deleting a custom attribute might affect the Audience segmentation, experience performance, and the data for that attribute will no longer be collected from that point onward.

You will get a success message after the custom attribute is deleted from Personalize.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#attributes) to create, edit, delete, and retrieve all existing attributes.

## Common questions

### Who can delete custom attributes in Personalize?
Users with Owner and Member access to a Personalize project can delete existing custom attributes.

### What is the difference between non-referenced and referenced custom attributes?
A non-referenced attribute is not currently being used in any audience rules or segmentations, while a referenced attribute is currently being used in audience rules or segmentations within your project.

### Why do referenced custom attributes require additional steps to delete?
Deleting a referenced attribute requires first removing the attribute from any audience rules where it is used to ensure that existing audience definitions and personalization strategies are not disrupted.

### Can I manage attributes via an API instead of the UI?
Yes. You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#attributes) to create, edit, delete, and retrieve all existing attributes.