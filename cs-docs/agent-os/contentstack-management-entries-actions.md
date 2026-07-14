---
title: "[Automations guides and connectors] - Contentstack Management - Entries Actions"
description: Contentstack Management connector actions for entry-based operations in Automation Hub.
url: https://www.contentstack.com/docs/agent-os/contentstack-management-entries-actions
product: Contentstack
doc_type: automation-hub-connector-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Management - Entries Actions

This page describes the Contentstack Management connector’s Entries actions available in Automation Hub, including how to configure each action to create, fetch, update, localize, publish, unpublish, and delete entries. It is intended for users building automations that interact with Contentstack entries and should be used when setting up or testing entry-related steps in an automation workflow.

## Contentstack Management - Entries Actions

An [entry](../content-managers/author-content/about-entries.md) is a specific piece of content that you intend to publish. This could be a blog post, article, product description, or any other type of content that you want to make available to your audience. You can perform entry based operations using the Contentstack Management Entries actions.

Let’s look at each of these in detail.

## Create an Entry

This action lets you create an entry automatically in your stack. To know more, visit [Create entries](../content-managers/author-content/create-an-entry.md).
- Under **Choose an Action** tab, select the **Create an Entry** action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Content Type** from the **Lookup** list. Provide your entry data in the **Entry Data** field.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list as shown below:

    **Note**: Provide your entry data as per your [content type schema](../developers/create-content-types/json-schema-for-creating-a-content-type.md) in JSON format only.

    **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).
- In the** Entry Data** field, you can add a predefined schema template for your entry data. This will add a structure to provide your entry data in a particular format for different fields.

  **Note:** You must manually configure the entry data for **JSON Rich Text Editor**, **Custom**, and **Experience Container** fields.![Entry_Data.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6fd04a2aae390276/66715d6c7a609d8b5ca6ce70/Entry_Data.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Locale**. You can also include the branch details by clicking the** Include branch **checkbox.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd98d551d42320afa/66715d6d664d452ca4210ef3/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt979322d5fd436310/66715d6c4969e4af8f85b53a/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button to finish setting up the Create Entry action for the Contentstack connector.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt852669a54149d3f0/66715d6cfb43150a2ee64373/Save_Exit.png)

## Delete an Entry

This action deletes an entry in a stack.
- Under **Choose an Action** tab, select the **Delete an Entry **action.
- On the **Delete an Entry Configure Action** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content** **Type**, and **Entry** from the **Lookup** list.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the** Show Optional Fields **toggle button to display the **Select Locale(s)** field.

  **Note: **You can select multiple **Locale(s) **to delete the entry saved in that locale.
- Click the **Delete all the localized entries** checkbox to delete all the localized versions of the entry.**Note:** If you provide the locale and click the **Delete all the localized entries **checkbox, all the localized entries will be deleted along with the fallback language i.e., **English-United States (M)** and the value passed in the locale field will become null.

        **Note:** If you select the fallback language in the locale field, i.e., **English-United States (M)**, and uncheck the checkbox, the entry in the fallback language will be deleted and localized entries will be preserved.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcbb7bd24abca69f/66715d7a3ab7db77bb18c1bf/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b307ffd4e1d1204/66715d7a7b258d0300c8a8bc/Save_Exit.png)

## Get All Entries

This action fetches all the entries present in a stack.
- Under **Choose an Action** tab, select the **Get All Entries** action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Content Type** from the **Lookup **list.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list as shown below:

    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Entry Limit**, **Skip Entry (Pagination)**, **Entry Version**, and **Select Locale** fields.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b76faa9f64d4c21/66715d87f17bde91a69911cc/Show_Optional_Fields.png)
- Provide your data in the **Customized Data (query) **field to filter the entry. Enter your data in the **Key**, **Operator**, and **Value** fields.
In the **Customized Data (query)** field, you can filter the entry based on Updated At/Created At options. For example, you can fetch all the entries updated after a certain time and date as shown below:

    **Note:** You can retrieve entries created on a specific date by using the date-specific operators such as "Less than specified number" or "Greater than specified number" for the Created At and Updated At keys.

    You can view the **Lookup **data for all the fields present in the content type including **Reference**, **Modular Blocks** and **Group **fields. Using the **Operator **filter you can sort the data.

    **Additional Resource:** Refer to the [Content Delivery API Docs](../../api-docs/api-detail/content-delivery-api.md#queries) for more information on Queries.

    In the **Reference** field, enter the ID of the reference field of your content type.

    You can also include the count of the entries, metadata details, workflow, branch and publish details by clicking the respective checkboxes.

    **Note:** The **Reference** and the **Customized Data (query)** fields act as filters to fetch only those entries that fulfill the specifications provided in both the fields.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt603d923c70338b4c/66715d887b258d06f9c8a8c0/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d49c866d94e32af/66715d873641c710b41370c2/Save_Exit_Button.png)

## Get a Single Entry

This action lets you fetch details of a single entry in your stack.
- Under **Choose an Action** tab, select the **Get a Single Entry **action.
- Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, and **Entry** from the **Lookup** list.
You can fetch the UID for all the previously configured automation steps directly from the Lookup list as shown below:

    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the **Show Optional Fields** toggle button to display additional fields. Select the entry **Version** and **Locale** and check the **Include workflow**,** Include publish details**, and **Include branch **checkboxes to fetch these details in addition to the entry details.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteca4af9de016cdb1/6499738a94be104d0b893968/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb153122066b670d4/63d94b5de4e29e75dc5dece2/Test-Action.png)
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc061e4be82f75969/6499738ae64f41671042d4f4/Save_Exit.png)

## Localize an Entry

This action lets you create localized versions of your entries. Here’s a link to know more about [Localization](../developers/multilingual-content/about-localization.md).
- Under **Choose an Action** tab, select the** Localize an Entry** action.
- Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select the **Stack**, **Branch** ,**Content Type**, **Entry**, and **Locale** from the **Lookup** list.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list as shown below:

    **Note: **Locale provides a list of languages present in your stack.

    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- Provide your entry data in the **Entry Data** field.

  **Note**: Provide your entry data in JSON format as per your content type schema.
- **[Optional]** Enable the** Show Optional Fields **toggle button to display the** Include branch **checkbox to include the branch details.![Select_Entry_Data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf03050f5c0b91a04/64996d2fc411216e74a18e13/Select_Entry_Data.png)
- Click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4da28daab866fc88/63d94b4ee4e29e75dc5decde/Test-Action.png)
- The output will be shown as follows. Click the **Save and Exit** button to finish setting up the Localize an Entry action for the Contentstack connector.![Save_and_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5234beb1bf8ea281/64996d3129ad9810e48256c7/Save_and_Exit.png)

## Get Publish Queue

This action fetches all the entries present in the Publish Queue in Contentstack.
- Under **Choose an Action** tab, select the **Get** **Publish Queue** action.
- On the **Get Publish Queue Configure Action** page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Branch **from the **Lookup **list.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Customized Data (query)**, **Entry Limit**, and **Skip (Pagination)** fields. You can also include the count for the total number of entries by clicking the checkbox.
- Provide your data in the **Customized Data (query)** field to filter the entry. Enter your data in a key-value pair in JSON format.

  **Additional Resource:** Refer to the [Content Delivery API](../../api-docs/api-detail/content-delivery-api.md#queries) documentation to know more about queries.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2fd0931c2dc6906/67850de0704a101de8415aae/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49cae6b6cb8c6c60/67850ddf49bc8c2edf439e3f/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt708ad32b02e6eab7/67850de0704a100ba1415aaa/Save_Exit.png)

## Publish an Entry

This action lets you publish an entry automatically in your stack. To know more, visit [publish entries](../content-managers/author-content/publish-an-entry.md).
- Under **Choose an Action** tab, select the **Publish an Entry **action.
- On the **Publish an Entry Configure Action** page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, **Entry** from the **Lookup** list.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list.

        **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).
- Select the **Environment(s) **and **Locale(s)** from the **Lookup **list where you want to publish the entry.![Select_Locale_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c5db19280fd6b59/6601a8f42e5b7167ca3eabea/Select_Locale_Environment.png)
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the** Publish Schedule** field. Click the **Nested Reference Publishing** checkbox to publish the entry along with the referenced entries. Learn more about [Nested Reference Publishing](../content-managers/publish-content/about-nested-reference-publishing.md).

        **Note: **You can select multiple **Environment(s) **and **Locale(s) **to publish the entry.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f44731e7c747a8a/6601a8f4f6f5134d27ba216e/Test_Action.png)
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0b60bd10d9bd616/6601a8f4c19510717adecec3/Save_and_Exit.png)

## Remove Localization

This action restores the entry to its initial non-localized state within a stack. For more information, refer to our [Localization](../developers/multilingual-content/about-localization.md) documentation.
- Under **Choose an Action** tab, select the **Remove Localization** action.
- On the **Remove Localization Configure Action **page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, **Entry**, and **Locale **from the **Lookup **list.
Locale provides a list of languages currently added in your stack for the selected branch.**Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).

        **Note:** The entry must be already localized in the selected locale to remove the localization.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb85692a24e9af4b/6628c783b0ec77e7f3d6e1ae/Save_Exit_button.png)

## Set Entry Workflow

This action lets you set the workflow stage for your entry. Read more about [workflow stages](../developers/set-up-workflows-and-publish-rules/about-workflow-stages.md).
- Under **Choose an Action **tab, select the **Set Entry Workflow** action.
- On the **Set Entry Workflow Configure Action **page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Content Type** from the **Lookup** list. Also, select an **Entry** from the **Lookup** list for which you want to set the workflow stage.
- Select the **Workflow Stage ID** from the **Lookup** list.**Note**: If you select the Workflow Stage ID as Next Stage, the workflow stage of the selected entry will be updated automatically to the next stage. And, if your entry has reached the last stage of the workflow, a success message will be shown for the completed workflow.

        **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Set Due Date**, **Comment**, **Assignee Name(s)**, **Assignee Role(s)**, and **Select Locale** fields.
- Select the **Assignee Name(s)** and **Assignee Role(s)**. With the **Assignee Name(s)**, you can add the user to review the workflow updates, send an email notification and add comments for the assignee.
With the **Assignee Role(s)**, you can add the users with similar roles, such as developers, testers to check the workflow updates.

        **Note: **You can select multiple **Assignee Name(s) **and **Assignee Role(s)** to let the users know about the workflow update.
- Set a **Due Date**. This defines a date for the entry stage to be completed. With **Notify via Email**, you can choose to notify other members in the workflow about the action changes via email.
- Under **Comment**, add a comment for the next stage user.![Due_Date_Comment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5972ff9e9252936c/6601a8c2d05755982400090e/Due_Date_Comment.png)
- Select a **Locale** from the **Lookup **list in which you want to set the workflow stage.![Locale.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda07a4fa70e6a8a3/6601a8c1bcecd466a7f59932/Locale.png)
- Click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f935f32d755d58c/6601a8c274a5c3564504a09a/Test_Action.png)
- If the setup is successful, you will see the following output. Click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19f4325497a89f5b/6601a8c1d9235fdc4bc994b4/Save_Exit.png)

## Unpublish an Entry

This action lets you unpublish an entry automatically in your stack. To know more, visit [unpublish entries](../content-managers/author-content/unpublish-an-entry.md).
- Under **Choose an Action** tab, select the **Unpublish an Entry **action.
- On the** Unpublish an Entry Configure Action **page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, and **Entry **from the **Lookup** list.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup** list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33328d6d35e1b605/6601a8b5090136f235d96fb1/Select_Fields.png)
- Select the **Environment(s) **from where you want to unpublish the entry.![Select_Env.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8192bc4c6b285b9/6601a8b5f6f513ea8aba216a/Select_Env.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Select Locale(s) **and **Unpublish Schedule** fields.

        **Note: **You can select multiple **Environment(s) **and **Locale(s) **to unpublish the entry.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt508563223056675d/6601a8b46f31274f9494f139/Test_Action.png)
- On successful configuration, you can see the below output. Click **Save and Exit.******![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a8473528c6bf84a/6601a8b4d05755705300090a/Save_Exit.png)

## Update an Entry

This action lets you update an entry automatically in your stack.
- Under **Choose an Action** tab, select the **Update an Entry** action.
- Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, **Content Type**, **Entry Data**, and **Entry** from the **Lookup** list.
You can fetch the UID for all the previously configured automation steps directly from the **Lookup **list as shown below:

    **Note: **Enter the data in JSON format only.

    **Note: **By default, the main branch is selected (even if the **Branch** field is empty).
- In the **Entry Data** field, you can add a predefined schema template for your entry data. This will add a structure to provide your entry data in a particular format for different fields.

  **Note:** You must configure the entry data for **JSON Rich Text Editor**, **Custom**, and **Experience Container** fields manually.![Select_Different_Field_Entry_Data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5134fc362b356a68/64ba24131511258a5835a980/Select_Different_Fields.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display additional fields. Select the **Locale** and check the** Include branch **checkbox to fetch these details in addition to the entry details.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf2d6a1d5dc43cda3/64ba2412d7401adc642b0731/Select_Show_Optional_Field.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75efcbe55f666a46/63d94aef5d9574542d40b53e/Test-Action.png)
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_and_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt389b851578a6889c/64ba2413d85ca631e876ea28/Save_and_Exit.png)

## Common questions

### Which branch is used if I don’t select a branch?
By default, the **main** branch is selected (even if the **Branch** field is empty).

### Do these actions require connecting a Contentstack account?
Yes. The steps repeatedly instruct you to click **+ Add New Account** to connect your Contentstack account as shown in the **Connect your Contentstack Account to Automate** step.

### What format should I use for Entry Data?
Where specified, **Entry Data** should be provided in JSON format (and as per your content type schema where noted).

### Can I publish or unpublish to multiple environments/locales?
Yes. The documentation notes you can select multiple **Environment(s)** and **Locale(s)** for publishing and unpublishing where applicable.