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
- You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Delete-custom-attribute.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c13122bbab7558b/68c10c117823e25de537d10f/Delete-custom-attribute.png)
- In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.![AD_4nXdRR_NBA0Wq8C8julQ33cYBCwQTI4fmGZLtfBj40Xlk_yuJc5anKppUPr1JEonsBroUCTordjwAKfMQmGB6py2X4XTtdcy37AV2ah1NhW3HHJ3QjMuEz2AVptmga8g1lIiNXqEzL_YnzzHrAGe2eR1tgOI](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdRR_NBA0Wq8C8julQ33cYBCwQTI4fmGZLtfBj40Xlk_yuJc5anKppUPr1JEonsBroUCTordjwAKfMQmGB6py2X4XTtdcy37AV2ah1NhW3HHJ3QjMuEz2AVptmga8g1lIiNXqEzL_YnzzHrAGe2eR1tgOI?key=hKIHfQblcnnfErhXCzHF4w)

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
- Click the vertical ellipses under **Actions** and select **Edit**.![Audience-attribute-delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7e3ee405ecc3bb2/68c10c6707b4fa0e0538cd0c/Audience-attribute-delete.png)
- 

  **Note:** To delete custom attributes from a referenced audience, ensure that the experience associated with that audience is in ‘Draft’ status.
- In the **Audience** page, scroll to the **Rules** section and then click the **Delete** icon next to the preferred custom attribute from the list.![AD_4nXdtBi_SNyrZXK4ezg1oc90NVzfvVdyaoBb_b2r48hht_AysKVLTD7Ep9s1R--TziPKl2MbHTv0fhJ1fsoqyckBHRsjTCFNgNBMBTTIh2ctnB8G30jKB4ZlZLIycXjc3c3gFYZedUtSqd7egAlU5D0HhgiI](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtBi_SNyrZXK4ezg1oc90NVzfvVdyaoBb_b2r48hht_AysKVLTD7Ep9s1R--TziPKl2MbHTv0fhJ1fsoqyckBHRsjTCFNgNBMBTTIh2ctnB8G30jKB4ZlZLIycXjc3c3gFYZedUtSqd7egAlU5D0HhgiI?key=hKIHfQblcnnfErhXCzHF4w)
- Once you have done that, click the **Save** button.
- Now that we have removed the custom attribute from the Audience’s Rules, click the **Attributes** tab in the left navigation panel.
- You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Attributes-delete-ellipsis.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40693e2597e997c7/68c10cae4a2c2dab9212159f/Attributes-delete-ellipsis.png)
- In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.![AD_4nXdgiR5k0wMeVtTA0U3KZ0Q3jHTNInSsGKG_7m5tV79MwEzrvtyXltNEmhGUSEBl4DPGDiLtkhBIi0n4tC-GxpOsiaNcihYUoXNFhdKJt9njeEjcuGE99pmluu_ZhCOoZx2XOH9HJRMMja82Z-WTG4JpD1aQ](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgiR5k0wMeVtTA0U3KZ0Q3jHTNInSsGKG_7m5tV79MwEzrvtyXltNEmhGUSEBl4DPGDiLtkhBIi0n4tC-GxpOsiaNcihYUoXNFhdKJt9njeEjcuGE99pmluu_ZhCOoZx2XOH9HJRMMja82Z-WTG4JpD1aQ?key=hKIHfQblcnnfErhXCzHF4w)

  **Warning:** Deleting a custom attribute might affect the Audience segmentation, experience performance, and the data for that attribute will no longer be collected from that point onward.

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