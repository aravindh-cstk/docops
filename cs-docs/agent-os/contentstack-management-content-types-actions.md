---
title: "[Automations guides and connectors] - Contentstack Management - Content Types Actions"
description: Contentstack Management - Content Types Actions
url: https://www.contentstack.com/docs/agent-os/contentstack-management-content-types-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Management - Content Types Actions

This page describes the Contentstack Management connector actions related to Content Types in Automation Hub. It is intended for developers and automation builders who need to fetch content types from a selected stack, either in bulk or individually, while configuring and testing automation actions.

## Contentstack Management - Content Types Actions

A [Content Type](../developers/create-content-types/about-content-types.md) serves as the framework or blueprint for a page or section within your web or mobile platform. It allows you to establish the fundamental structure of this blueprint by incorporating fields and configuring their attributes. By using the Contentstack Management Content Types action, you can fetch all content types from a selected stack.

Let’s look at the action in detail.

## Get All Content Types

This action fetches all the content types present in a stack.

- Under the **Choose an Action **tab, select the **Get All Content Types** action.
- On the **Get All Content Types Configure Action** page, enter the details given below:  
  Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, and **Branch** from the **Lookup** list.

  **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Content Type Limit**, **Customized Data (query)**, and **Skip Content Type (Pagination)** fields.
- Provide your data in the **Customized Data (query)** field to filter the retrieval of content types. Enter your data in the **Key**, and **Value** fields.
- You can also include the total count of the content types, global field schema, and the branch details by clicking the respective checkboxes.**Additional Resource:** Refer to the [Content Delivery API Docs](../../api-docs/api-detail/content-delivery-api.md#queries) for more information on Queries.

  **Note:** The **Customized Data (query)** field acts as a filter to fetch the content types that fulfill the specifications provided in the Key-Value fields.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7ea64f8622dfa61/666686663dcdf6470a2c9e7d/Save_Exit_Button.png)

## Get a Single Content Type

This action fetches the details of a specific content type in a stack.

- Under the **Choose an Action** tab, select the **Get a Single Content Type** action.
- On the **Get a Single Content Type Configure Action** page, enter the details given below:  
  Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and a **Content** **Type** from the **Lookup** list.

  **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).![Select_Fields_Get_Single.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4827b1d6e01fcf2/682ae901a211e78168c7aa41/Select_Fields_Get_Single.png)
- Optionally, enable the **Show Optional Fields** toggle button to display the optional fields. You can check the **Include global field schema** and** Include branch **boxes to include the details of the branch and the global field(s).![Show_Optional_Fields_Get_Single.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9c68e590f5f94ee/682ae901b728367183403d2b/Show_Optional_Fields_Get_Single.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49632183cb17c41a/67446b30c21e6028ad26163f/Save_and_Exit.png)

## Common questions

### What do I need before using these actions?
You need to click **+ Add New Account** to connect your Contentstack account, and then select a **Stack** (and **Branch**) from the **Lookup** list.

### What happens if I don’t select a branch?
**Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

### How do I filter which content types are returned in “Get All Content Types”?
Use the **Customized Data (query)** field and enter your data in the **Key**, and **Value** fields.

### Where can I learn more about queries?
Refer to the [Content Delivery API Docs](../../api-docs/api-detail/content-delivery-api.md#queries) for more information on Queries.

<!-- filename: automations-guides-and-connectors-contentstack-management-content-types-actions.md -->