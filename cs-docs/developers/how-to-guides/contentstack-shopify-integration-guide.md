---
title: "[How-to Guides and Knowledgebase articles] - Contentstack Shopify Integration Guide"
description: Contentstack Shopify Integration enables seamless two-way syncing of products and collections between your Shopify store and Contentstack CMS.
url: https://www.contentstack.com/docs/developers/how-to-guides/contentstack-shopify-integration-guide
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Contentstack Shopify Integration Guide

This page explains how to set up and use the Contentstack Shopify Integration for two-way syncing of products and collections between Shopify and Contentstack. It is intended for developers and administrators who manage Contentstack organizations/stacks and Shopify stores, and should be used when installing the OAuth app and configuring synchronization settings.

## Contentstack Shopify Integration Guide

The Contentstack Shopify Integration enables seamless two-way syncing of products and collections between your Shopify store and Contentstack CMS. This integration streamlines content management by allowing product data updates in one platform to reflect instantly across both, improving efficiency and ensuring consistency across all digital touchpoints.

## Prerequisites

- [Shopify account](https://accounts.shopify.com/)
- [Shopify store](https://accounts.shopify.com/store-login)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization and Stack as the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner)/[Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)

## Steps for Executions

- [Install the OAuth App](#install-the-oauth-app)
- [Integrate Shopify with Contentstack](#integrate-shopify-with-contentstack)

## Install the OAuth App

To authenticate the Shopify app with Contentstack (in [step 2](#integrate-shopify-with-contentstack)), follow the steps given below:

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- Install the OAuth app in the stack that corresponds to your region using the following links:
  - [Shopify OAuth App for North America (NA)](https://app.contentstack.com/#!/apps/66e9149af59ee4001270a6ba/install)
  - [Shopify OAuth App for Europe (EU)](https://eu-app.contentstack.com/#!/apps/66e9149af59ee4001270a6ba/install)
  - [Shopify OAuth App for Azure North America (Azure NA)](https://azure-na-app.contentstack.com/#!/apps/66e9149af59ee4001270a6ba/install)
  - [Shopify OAuth App for Azure Europe (Azure EU)](https://azure-eu-app.contentstack.com/#!/apps/66e9149af59ee4001270a6ba/install)
  - [Shopify OAuth App for GCP North America (GCP NA)](https://gcp-na-app.contentstack.com/#!/apps/66e9149af59ee4001270a6ba/install)

## Integrate Shopify with Contentstack

To integrate Shopify with Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and go to the Organization that you want to connect with Shopify. Then, perform the following steps:

Log in to your [Shopify account](https://accounts.shopify.com/store-login).

- On the admin interface, from the **Select Region** drop-down, select your desired region (**North America**, **Europe**, **Azure Europe**, **Azure North America**, **GCP North America**) and click the **Authenticate** button.
- A screen appears. To connect Shopify with Contentstack, scroll down, and click the **Authorize** button for successful authorization.
- Now, you are connected with the Contentstack organization.
- If you want to change the **Region** or connect with any other Contentstack organization, click the **Reauthenticate** button.
- Now to synchronize the Shopify data with Contentstack, select the **Stack**. After selecting a stack, you can select an existing Content Type or create a new Content Type for syncing the **Content Type for Products**.  
  **Note**: Syncing Products is mandatory.
- Select **Sync Products Delete Event** checkbox to enable the deletion of products from Shopify when the corresponding entries are deleted in Contentstack.
- You can also sync all available content types within the selected stack (as [Meta Objects in Shopify](#meta-objects-in-shopify)) by clicking the **Sync All Content Types** checkbox.
- Click the **Sync Collections** checkbox if you want to synchronize the Shopify Collections in Contentstack. For syncing **Content Type for Collections**, you can create a new Content Type or select an existing Content type.  
  **Note**: Syncing Collections is optional.
- Select **Sync Collections Delete Event** checkbox to enable the deletion of collections from Shopify when the corresponding entries are deleted in Contentstack.
- Click the **Connect** button to create a connection between Contentstack and Shopify and continue the syncing process. If there is any update in Contentstack, that will automatically be updated in Shopify and vice-versa.
- Click the **Sync Now** button to initiate the syncing process between Contentstack and Shopify.  
  If some Products or Collections are available in Contentstack, but not in Shopify, they will be created in Shopify. Click **Confirm** to proceed with the syncing process.  

  **Note**: All Contentstack [Fields](/docs/developers/create-content-types#fields) support this transition from Contentstack to Shopify except [Custom](../create-content-types/custom.md) and [Taxonomy](../create-content-types/taxonomy.md) fields.
- After the syncing process is complete, it will show a **Success** status with the day, date, and time.
- Click the **Disconnect** button to stop the syncing process without updating the data in Shopify and Contentstack.  
  In the modal, click the **Disconnect** button again to stop the sync.  

  The connection is disconnected successfully.

## Syncing Between Shopify and Contentstack

The two-way integration between Shopify and Contentstack ensures real-time synchronization of products and collections data across both platforms. Using the Contentstack Shopify Integration, updates in Contentstack automatically reflect in Shopify, while changes in Shopify can also sync back to Contentstack, ensuring data consistency and efficient content management.

### Meta Fields in Shopify

In Shopify, **Meta Fields** are custom data structures used to store additional information of products and collections beyond standard fields. When integrated with Contentstack, it can hold the details from additional fields, allowing for a seamless flow of content between Shopify and Contentstack’s CMS.

**Note**: The `entry_uid` metafield is used by the app to track the corresponding entry in Contentstack. You must not modify this field, as any changes may cause the app to malfunction.

**Example for Meta fields in Products**:

**Example for Meta fields in Collections**:

### Meta Objects in Shopify

In Shopify, **Meta Objects** are custom data structures used to store additional information of complex fields of products and collections from Contentstack along with other content types. This allows for a seamless flow of content between Shopify and Contentstack’s CMS. Through the Shopify admin interface or API, these Meta Objects are attached to products, enabling additional content, like data from Contentstack, to enhance the overall customer experience.

Contentstack transfers data to Shopify's Meta Objects using [Webhooks](../set-up-webhooks/about-webhooks.md). These webhooks trigger automatically whenever content is updated or published in Contentstack, ensuring real-time synchronization within Shopify. In case of Webhooks failure, you can sync the data manually again by clicking the **Sync Now** button.

**Additional Resource**: For more information, refer to the [Shopify Meta Objects](https://help.shopify.com/en/manual/custom-data/metaobjects) documentation.

### Naming Conventions

To handle smooth synchronization with Shopify, Contentstack defined naming conventions.

- **Title**: Shopify allows duplicate names in Product Titles, but Contentstack requires each entry [Title](../create-content-types/title.md) to be unique. To address this in the Contentstack entry, the **Product ID** is appended to the **Title**, separated by a hyphen (-).Example: *SampleProduct* becomes *SampleProduct-1234567890123*
- **URL**: If you enter an incorrect URL in the Contentstack entry, an error will occur during the sync with Shopify. The [URL](../create-content-types/url.md) must start with “**https:**”, “**http:**”, “**mailto:**”, “**sms:**”, or “**tel:**”.Example: [https://www.contentstack.com](https://www.contentstack.com)
- **Group**: Group field can be used to hold and transfer grouped data, like product specifications or attributes, within Shopify’s meta objects.Meta Objects Name Format for Group field:`<content_type_uid>-<group_uid>`

  Example: *sample_content_type-sample_group*

  **For Nested Groups**

  Meta Objects Field Name Example: *sample_content_type-group_1-group_2-group_3.field_1*
- **Modular Block**: [Modular Block](../create-content-types/modular-blocks.md) field can store and sync complex, multi-part content like product descriptions, specifications, promotional, or other details.Meta Objects Name Format for Modular Block field:`<content_type_uid>-<modular_block_uid>-<block_uid>`

  Example: *sample_content_type-modular_blocks-block_1*
- **Global Field**: Contentstack’s [Global](../create-content-types/global.md) Field is similar to Shopify’s Global field. It can store common data applicable to multiple products or collections, such as brand information, pricing models, or universal tags.

These naming conventions help maintain consistency and readability across both Shopify and Contentstack platforms.

**Note**: If the [Multiple](../create-content-types/multiple.md) property is enabled or selected under **Advanced** properties in the [URL](../create-content-types/url.md), [Single Line Textbox](../create-content-types/single-line-textbox.md), [Multi Line Textbox](../create-content-types/multi-line-textbox.md), [Rich Text Editor](../create-content-types/rich-text-editor.md), [JSON Rich Text Editor, Markdown](../json-rich-text-editor/about-json-rich-text-editor.md), [Select](../create-content-types/select.md), [Number](../create-content-types/number.md), and [Boolean](../create-content-types/boolean.md) fields, the sync will fail as Shopify does not support this functionality.

## Common questions

1. **Do I need to sync Collections to use the integration?**  
   No. **Note**: Syncing Collections is optional.

2. **Is syncing Products required?**  
   Yes. **Note**: Syncing Products is mandatory.

3. **Can I delete Shopify products/collections when entries are deleted in Contentstack?**  
   Yes, by selecting **Sync Products Delete Event** and/or **Sync Collections Delete Event** checkbox.

4. **What should I do if webhooks fail and data doesn’t sync?**  
   You can sync the data manually again by clicking the **Sync Now** button.

Filename: contentstack-shopify-integration-guide.md