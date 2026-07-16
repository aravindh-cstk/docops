---
title: "[Marketplace guides and apps] - Algolia App Installation Guide"
description: Algolia App Installation Guide
url: https://www.contentstack.com/docs/marketplace/algolia
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Algolia App Installation Guide

This page explains how to install and configure the Algolia app from the Contentstack Marketplace, including prerequisites, credential setup, configuration options, and how to use the app within a stack. It is intended for Contentstack stack owners/admins and developers who need to sync entries and assets to Algolia indices across environments.

## Algolia App Installation Guide

Algolia is an AI-powered search and discovery platform that enhances dynamic experiences. It helps businesses, particularly e-commerce brands, quickly and efficiently discover and access content, thereby boosting performance.

The Contentstack Marketplace allows you to install and use the Algolia app to update Algolia indices automatically when entries and assets are published, unpublished, or deleted within Contentstack.

**Note:** The Algolia app has been migrated to a **Full Page UI location**. We are no longer supporting the **Stack Dashboard UI location**.

## Prerequisites
- [Algolia account](https://www.algolia.com/users/sign_in)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Follow the step-by-step guide to install and configure Algolia within your stack.

## Steps for Execution
- [Retrieve your Algolia Credentials](#retrieve-your-algolia-credentials)
- [Install and Configure the Algolia app in Marketplace](#install-and-configure-the-algolia-app-in-marketplace)
- [Use the Algolia app within your Stack](#use-the-algolia-app-within-your-stack)

## Retrieve your Algolia Credentials
To get the Algolia credentials, log in to your [Algolia account](https://www.algolia.com/users/sign_in), and follow the steps given below:

In the left navigation, click **Settings**, then under **Team and Access**, click the **API Keys** option.![Algolia-API-Keys-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8abbdc89414c87bc/68ef47b2da161219b684b40a/Algolia-API-Keys-Option.png)
- Under the **Your API Keys** tab, you can view the **Application ID**. Copy it to the clipboard to use during app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).![Algolia-Application-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee549167851c2e2f/68ef47b1bd1d806b8be6f81a/Algolia-Application-ID.png)
- Under the **All API Keys** tab, you can view the already created **API Keys**.While creating a new API Key, ensure to select **Indices**.

Also, add the **ACL** options to perform indexing.
- In the left navigation, click the “Search” icon. Under **Index**, you can copy the **Index Name** by clicking the “Copy” icon.![Algolia-Index-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f7b6635fc510b9f/68ff8a88f62d8ca5c0c2dad3/Algolia-Index-Name.png)

Now, you have **Application ID**, **Index Name**, and **API Key** to configure the Algolia app in [step 2](#install-and-configure-the-algolia-app-in-marketplace).

## Install and Configure the Algolia App in Marketplace
To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
- Click **Apps** from the left panel.
- Within the Marketplace, you can view the available apps. Hover over the **Algolia** app and click **Install**.![Algolia-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43fbcc3e5b19f8bb/68ee964bbd1d805edbe6f565/Algolia-App.png)
- In the pop-up window, select the stack where you want to install the Algolia app, accept the **Terms of Service**, and click the **Authorize & Install** button.![Algolia-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07a541c2f73cc9b8/68ee964bffa4016af5eec40b/Algolia-App-Install.png)
- On the **Configuration** screen, enter the following details:Click the **+ Add Configuration** button to add new configuration details.
- Select the environment and provide the Algolia credentials such as **Application Id**, **Index Name**, and **API Key** retrieved in [step 1](#retrieve-your-algolia-credentials).**Note:**

Credentials entered for an environment will be applicable to the entries published on that environment.
- At least one environment configuration must be added.
- In the **Select Default Environment** drop-down, select the environment to set it as the default for Algolia search results.**Note:** If you don't choose a default environment, the first environment in the configuration will be displayed as the default environment in the Fullpage app.
- To delete the configuration, click the “Delete” icon corresponding to the environment.
- Enable the **Additional Settings** toggle button if you want to add only specific content types with selected mapping rules or fields, or control the behavior of content type entries and assets that are added to Algolia indices.Under **Content Type Mapping**, click the **+ Add Rule** button to add one or more rules by selecting the content type and appropriate mapping fields.**Note:** The app will add entries to Algolia Index only for the content types added in the mapping rule(s). Also, the added rules(s) will apply to all the configured environments selected.

Click the **+ Add Field** option in the Mapping Fields drop-down to add a new field.

You can map nested or complex structures in the following manner:

While mapping nested fields, you must specify the object and its field using the dot(.) notation.For example,** Object.age** for accessing the age field within the object.
- While mapping arrays, use indexing.For example, **Array[1] **for accessing the second value of an array.
- While mapping modular blocks, you provide `modular_blocks[].block_a.heading`, it will send all instances of `block_a.heading` inside `modular_blocks` from the entry to Algolia. To target only the first instance, use indexing like `modular_blocks[0].block_a.heading`. However, do not use an index and an empty [] at the same time.For example, `modular_blocks[0].block_a.group[].title` is invalid.

You can use the above rules to create mapping rules for complex structures that include objects and arrays.

**Note:** All Contentstack fields are supported through this feature. For reference complex fields, only single-level nesting is supported.

Example:

```
{
  "reference": [
    {
      "uid": "bltxxxxxxxxxxxx",
      "_content_type_uid": "example_content_type"
    }
  ]
}
```
If we have a reference field named `reference`, then `reference[0].title` will give the title of the reference field selected.
- Mark the **Select for all Content Types** checkbox if you want to add entries to Algolia Index for all the content types along with the content types for which you set the rules by selecting **Mapping Fields**.**Note:** By default, the **Select for all Content Types** checkbox is selected.

If you **select** this option, the app will perform the following actions:

The app adds the entries of content types specified in Mapper to Algolia according to the rules or fields added.
- The app adds the entries of content types not added to Mapper to Algolia with all their data.

If you **deselect** this option, the app will perform the following actions:
- The data for all content type entries will not be added to Algolia.
- If the content type Mapping has not been provided then content type webhook will be disabled and no data from content type entries will be added.
- Mark the **Select for Asset(s)** checkbox if you want to add Asset(s) to Algolia Index.This option will add your assets' data to the Algolia Index on publishing. Similarly, this option can remove your data from the Algolia Index when unpublished or deleted from Contentstack.

**Note:**

By default, the **Select for Asset(s)** checkbox is selected.
- If this option is not selected, Asset(s) data will not be added to Algolia.
- For existing users, a pop-up will appear on the **Configuration** screen while updating the app. Make sure to save the app to the latest settings, even if no changes are made.![Algolia-Configuration-Update-Alert](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c56f4d5045014bf/68ee9673bf9ee90c9d904a3b/Algolia-Configuration-Update-Alert.png)
- After adding the configuration details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app location ([Full Page UI location](../developer-hub/full-page-location.md)). You can use the toggle button to enable or disable it based on your requirements.![Algolia-Configuration-UI-Location](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta41c246a16135727/68ee966af3ff9ef982871139/Algolia-Configuration-UI-Location.png)
- If the branch feature is enabled for your organization, navigate to the **Webhook** tab to configure and trigger it on the required branches.Inside the **Configure Webhook** section, you can select the following options under **Branch Scope**:

**All Branches:** If you want the webhook to trigger on all branches of the stack.
- **Specific Branches:** If you want the webhook to trigger on a specific branches. You can add multiple branches.

  **Note:** When the webhook is triggered from the branch, Algolia's `ObjectId` value will have the branch uid appended at the end.![Algolia-Configuration-Webhooks](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3e873656cdff794/68ee964c6bfd9328633fee82/Algolia-Configuration-Webhooks.png)

**Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Algolia app.

## Use the Algolia App within your Stack
To use the Algolia app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

Navigate to the stack dashboard, click **Content Models** from the header, and click the **+ New Content Type** button.![Algolia-Content-Models](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte77f217f6b0f69e8/68ee964b150a96155956b871/Algolia-Content-Models.png)
- Create a new content type by adding relevant details as displayed below.![Algolia-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1659e25a23b66a3e/68ee966c08234819504e8685/Algolia-Content-Type.png)
- In the **Content Type Builder** page, add the required fields, and click **Save** or **Save and Close** to save the content type.
- Navigate to **Entries** from the header and click **+ New Entry** to create an entry within the same content type.![Algolia-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt425ee64816a8be9c/68ee966b150a96969b56b876/Algolia-Sample-Entry.png)
- **Save** and **Publish** your entry within the same environment which was configured during the app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).**Note:**

Publish the entries only in the environment(s) you selected while configuring the Algolia app.
- When publishing **entries with references** in bulk, the processing time may vary based on the number of entries and the depth of references. Below are the approximate times observed for bulk publishing operations:**10,000 entries with references:** 1 hour 20 minutes
- **5,000 entries with references:** 41 minutes
- **3,000 entries with references:** 24 minutes

These times are estimates and may differ depending on factors such as network speed, the complexity of referenced data, and your Algolia index configuration.
- Log in to your [Algolia account](https://www.algolia.com/users/sign_in) and go to the **Index** section to view the published entry.**Note:** If you unpublish or delete an entry on a specified environment, the app deletes the entry from Algolia's index.
If you delete a content type from your stack, the app deletes all the published entries of that content type which you added to Algolia from Algolia's index.

## Algolia as a Full Page App
To view analytics in the Algolia app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
- Navigate to the stack dashboard, click **Apps** from the header, and select the **Algolia** app.![Aloglia-Full-Page-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt861528a03df28b3f/68ee966bbd1d80219fe6f56b/Aloglia-Full-Page-App.png)
- You can view the **Audit Log** within the Full page app. You can also filter logs by **All Logs**, **Success Logs**, or **Error Logs** to quickly identify the status of operations. This ensures full traceability and helps troubleshoot sync or indexing issues with ease.Under **Actions**, click the vertical ellipses corresponding to the record to view the following:

**View Details**: Shows the call details that includes request payload, details, and response.
- **View Entry**: Redirects you to the corresponding entry within Contentstack, allowing you to quickly review or edit the content that triggered the log.
- **Retry**: Allows you to reattempt the failed sync operation.

  **Note:** The **Retry** option is not available for the Delete operation. If a delete action fails, you must first retrieve the entry from Trash and then retry the delete operation manually.
- Click the **Algolia Search Results** tab to view insights into your search activity across different environments within Algolia.Select the **Environment** from the dropdown menu. The available options correspond to the environments configured during app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).

You can explore insights such as **Top Searches** and **Top searches with no results** at once:

**Top Searches**: Displays the most frequently searched keywords by users. Each result shows the search term (**Result**), the number of times it was searched (**Count**), and the number of hits (**Hits**) indicating how many results matched the search.
- **Top searches with no results**: Lists search terms that returned no results. This helps identify missing or unindexed content in Algolia. Columns include the **Result**, **Count** (number of times searched), and **Filter Count** (number of filtered search

**Note:** Each Algolia app has a limit of **10,000 requests** per month. Exceeding this limit will result in a 429 error. If you plan to perform bulk publishing or require assistance, contact the [support](mailto:support@contentstack.com) team.

## Common questions

### Does the Algolia app support the Stack Dashboard UI location?
No. **Note:** The Algolia app has been migrated to a **Full Page UI location**. We are no longer supporting the **Stack Dashboard UI location**.

### What Algolia credentials are required during configuration?
**Application ID**, **Index Name**, and **API Key**.

### What happens if I don’t choose a default environment?
**Note:** If you don't choose a default environment, the first environment in the configuration will be displayed as the default environment in the Fullpage app.

### What is the monthly request limit for the Algolia app?
**Note:** Each Algolia app has a limit of **10,000 requests** per month. Exceeding this limit will result in a 429 error.

Filename: marketplace-guides-and-apps-algolia-app-installation-guide.md