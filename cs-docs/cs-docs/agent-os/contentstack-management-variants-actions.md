---
title: "[Automations guides and connectors] - Contentstack Management - Variants Actions"
description: Contentstack Management - Variants Actions
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-management-variants-actions
product: Contentstack
doc_type: automation-hub-connector-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Management - Variants Actions

This page explains the Contentstack Management connector’s Variant Actions in Automate, including how to fetch, publish, and update variants in a Variant Group. It is intended for users configuring Automate workflows that interact with Contentstack Personalize variants and should be used when setting up or testing these specific actions.

## Contentstack Management - Variants Actions

[Variants](/docs/personalize/about-variants) are the different variations of an entry displayed to different audiences created within a Personalize project.

The Contentstack Management Variant Actions lets you update, publish, and fetch the details of all the variants in a Variant Group.

**Note:** You can create an [Entry Variant](/docs/content-managers/entry-variants/create-an-entry-variant) for Variant Groups via Automate or the CMS. However, audiences for Experiences can be created **only **via the Contentstack Personalize platform.

Let’s look at each of them in detail.

## Get All Variants of a Content Type

This action fetches the details of all the variants for the selected content type.

- Under **Choose an Action** tab, select the **Get All Variants of a Content Type** action.
- On the **Get All Variants of a Content Type** **Configure Action **page, enter the details given below:  
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate)step.
- Select a **Stack** and **Content** **Type** from the **Lookup** list.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit**.

## Get All Variants of an Entry

This action fetches the details of all the variants of a specific entry for the selected content type.

- Under **Choose an Action** tab, select the **Get All Variants of an Entry** action.
- On the **Get All Variants of an Entry** **Configure Action **page, enter the details given below:  
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate)step.
- Select a **Stack**, **Content Type**, and **Entry **from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit**.

## Get a Single Variant

This action fetches the details of a single variant from a selected Variant Group.

- Under **Choose an Action** tab, select the **Get a Single Variant **action.
- On the **Get a Single Variant Configure Action** page, enter the details given below:  
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Variant Group**, and **Variant **from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.

## Publish Variant(s) of an Entry

This action publishes the entry’s existing variant(s).

- Under **Choose an Action** tab, select the **Publish Variant(s) of an Entry** action.
- On the **Publish Variant(s) of an Entry Configure Action **page, enter the details given below:  
      Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, **Entry**, **Variant Group**, and **Variant(s)** from the **Lookup **list.
- Select the **Locale(s)** and **Environment(s)** to publish the entry’s variant. You can select multiple locales and environments.
- Optionally, enable the **Show Optional Fields** toggle button to schedule the publishing activity. You can mark the checkboxes for **Nested reference publishing**, **Publish latest base**, **Publish latest base conditionally**.**Additional Resource: **Refer to the [Publish an Entry Variant](https://www.contentstack.com/docs/content-managers/entry-variants/publish-an-entry-variant/) document to learn more.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.

## Update a Variant of an Entry

This action updates the content of an entry’s existing variant in the Variant Group.

- Under **Choose an Action** tab, select the **Update a Variant of an Entry **action.
- On the **Update a Variant of an Entry Configure Action **page, enter the details given below:  
      Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Content Type**, **Entry**, **Variant Group**, and **Variant **from the **Lookup **list.
- Enter the **Entry Data **to update the variant in JSON format.  
        **Sample JSON:**

```
{
  "entry": {
    "title": "Sample Title Updated",
    "name": "Jane Doe",
    "group": {
      "multi_line": "This is the updated multi-line field content."
    },
    "global_field": {
      "single_line": "This is the updated single-line field content."
    }
  }
}
```

- Enter or fetch the **Change** **Set **data to update the variant content in JSON format.Change Set represents a subset of fields and their updated values from the entry data. It indicates that only certain fields are updated, while the rest of the data remains unchanged.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.

## Common questions

### What are Variants in this context?
[Variants](/docs/personalize/about-variants) are the different variations of an entry displayed to different audiences created within a Personalize project.

### Can I create audiences for Experiences via Automate or the CMS?
No. Audiences for Experiences can be created **only **via the Contentstack Personalize platform.

### What does “Change Set” mean when updating a variant?
Change Set represents a subset of fields and their updated values from the entry data. It indicates that only certain fields are updated, while the rest of the data remains unchanged.

### Where can I learn more about publishing an entry variant?
Refer to the [Publish an Entry Variant](https://www.contentstack.com/docs/content-managers/entry-variants/publish-an-entry-variant/) document to learn more.

