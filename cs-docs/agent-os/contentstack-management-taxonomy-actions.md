---
title: "[Automations guides and connectors] - Contentstack Management - Taxonomy Actions"
description: Contentstack Management - Taxonomy Actions
url: https://www.contentstack.com/docs/agent-os/contentstack-management-taxonomy-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Contentstack Management - Taxonomy Actions

This page explains the available Contentstack Management Taxonomy actions in Automation Hub and how to configure each action. It is intended for developers and automation builders who want to create, manage, import/export, and query taxonomies and terms within a Contentstack stack using Automation Hub connectors.

## Contentstack Management - Taxonomy Actions

[Taxonomy](../developers/taxonomy/about-taxonomy.md) assists in organizing the content within stack into categories, making it easier to navigate, search, and retrieve information. You can perform taxonomy based operations using the following Contentstack Management Taxonomy actions.
- Create a Taxonomy
- Create a Term
- Delete a Taxonomy
- Delete a Term
- Export a Taxonomy
- Get All Ancestors of a Term
- Get All Descendants of a Term
- Get All Taxonomies
- Get All Terms
- Get All Terms across All Taxonomies
- Get a Single Taxonomy
- Get a Single Term
- Import a Taxonomy
- Update a Taxonomy
- Update a Term

Let’s look at each of these in detail.

## Create a Taxonomy

This action lets you create a new taxonomy in a stack.
- Under **Choose an Action** tab, select the **Create a Taxonomy** action.
- On the **Create a Taxonomy Configure Action **page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list.
- Enter a suitable **Taxonomy UID **and **Taxonomy Title**. For example, enter *sample_taxonomy *in Taxonomy UID and *Sample_Taxonomy* in Taxonomy Title.

  **Note:** The Taxonomy UID must contain **only **alphanumeric values and underscores.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1847053b2c5066a5/6628da3133301d24ea8928ef/Select_Fields.png)
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Taxonomy Description **field.
- In the **Taxonomy Description **field, specify a suitable description for your taxonomy.![Show_optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c2f1e705ce47bdd/6628da32776d0c3abb24df4c/Show_optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_and_-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1137ba3f733251be/6628da31a02ad77708ee9a04/Save_and_-Exit.png)

## Create a Term

This action lets you create a new term within a taxonomy.
- Under **Choose an Action** tab, select the **Create a Term **action.
- On the **Create a Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. In this example, we are creating a term for the *Sample_Taxonomy* we created in the previous action.
- Enter a suitable** Term UID**, **Term Title**, and **Term Order **to create a new term. For example, enter *child_term_test* in Term UID and *Child_Term_Test* in Term Title, and *1 *in the Term Order.

  **Note: **The Term UID must contain **only **alphanumeric values and underscores.
- In the **Select Parent Term** field, select the parent to create a term. For example, select *Parent_Test *term created within *Sample_Taxonomy*. The new term will become a child element of the *Parent_Test* term.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5913b2c38511ccb7/6628da3ec9de4664b2d490a1/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4946f7169c50827/6628da3e33301d0ee88928f3/Save_Exit.png)

## Delete a Taxonomy

This action deletes a taxonomy and all its associated terms from a stack.
- Under **Choose an Action** tab, select the **Delete a Taxonomy **action.
- On the **Delete a Taxonomy Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. For example, select *Test* stack and *Sample 2 *taxonomy.
- Click the **Force Delete** checkbox to delete the taxonomy. This will delete the taxonomy even if it is referenced in the entries.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c4492f4bd25f712/6628da49528fc1d56155b5bc/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta60f8c911af79740/6628da4985518c906c557f06/Save_Exit.png)

## Delete a Term

This action deletes a term within a taxonomy.
- Under **Choose an Action** tab, select the **Delete a Term **action.
- On the **Delete a Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Taxonomy**, and **Term **from the **Lookup **list.For example, select *Test *stack, *Sample_Taxonomy *taxonomy, and *Child_Term_Test *term.
- Click the **Force Delete** checkbox to delete the term. This will force the term to be deleted even if it is referenced in the entries.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2de6b2596c467686/6628da57210d9032793a4d7a/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte792ccfdb94fbb49/6628da56c9de462aded490a9/Save_Exit.png)

## Export a Taxonomy

This action exports a taxonomy and all its associated terms in a stack.
- Under **Choose an Action** tab, select the **Export a Taxonomy **action.
- On the **Export a Taxonomy Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. For example, select *Test *stack and *Sample_Taxonomy* taxonomy.
- Select a **Format **in which you want to export the taxonomy. You can choose to export the taxonomy in *JSON *or *CSV *format. For example, select *JSON*.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01d5a740da925767/6628da6533301d2f148928f9/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7de4794a4f8b1c22/6628da65b0ec772cced6e2fa/Save_Exit.png)

## Get All Ancestors of a Term

This action fetches the details of all the ancestors of a term.
- Under **Choose an Action** tab, select the **Get All Ancestors of a Term** action.
- On the **Get All Ancestors of a Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Taxonomy**, and **Term **from the **Lookup **list. For example, select *Test *stack, *Automate *taxonomy, and *What is Conditional Path* term.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93c82ab15c1d510b/6628dc51ca8874940ded3e51/Select_Fields.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Term Limit** and **Skip Term (Pagination) **fields. For example, enter *5 *in Term Limit and *1 *in Skip Term. This will skip the first term and fetch the next 5 terms.
- Click the checkboxes to include the **count of terms**, **number of child terms**, and **referenced entries count**.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38795a40cd9e7d74/6628dc5124e1812c41ace79c/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d31365e642b950a/6628dc51776d0c3a4824df5c/Save_Exit.png)

## Get All Descendants of a Term

This action fetches the details of all the descendants of a term.
- Under **Choose an Action** tab, select the **Get All Descendants of a Term** action.
- On the **Get All Descendants of a Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Taxonomy**, and **Term **from the **Lookup **list. For example, select *Test *stack, *Automate *taxonomy, and *Guides *term.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6afa51bf63bc968c/6628dc60528fc1367555b5d8/Select_Fields.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Term Limit**, **Skip Term (Pagination)**, and **Term Hierarchy **fields.For example, enter *5 *in Term Limit, *1 *in Skip Term, and *1 *in Term Hierarchy. This will skip the first term and fetch the next 5 terms.

  With Term Hierarchy, the first descendant of *Guides *will be fetched. If you enter Term Hierarchy as 2, then 2 descendants of *Guides *will be fetched.
- Click the checkboxes to include the **count of terms**, **number of child terms**, **referenced entries count**, and the **order of the term(s) according to their placement in the taxonomy**.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0af47a61790fb577/6628dc60bb637234781dfbab/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb98f5cc908d4f017/6628dc6033301d214689290b/Save_Exit.png)

## Get All Taxonomies

This action fetches the details of all the taxonomies in a stack.
- Under **Choose an Action** tab, select the **Get All Taxonomies** action.
- On the **Get All Taxonomies Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list. For example, select *Test *stack.![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb9b7928475e0631/6628dc7358ce888031c304b3/Select_Field.png)
- **[Optional] **Enable the** Show Optional Fields** toggle button to display the **Taxonomy Limit**, **Skip Taxonomy (Pagination**), **Search Taxonomy**, and **Select Taxonomies **fields.For example, select *Automate*, *Demo 1*, and *Regions *in Select Taxonomies. Enter *3 *in Taxonomy Limit and *1 *in Skip Taxonomy.

  In the **Search Taxonomy **field, enter a UID or name of the taxonomy to search all the taxonomies containing the specified value. For example, enter Auto in Search Taxonomy.

  **Note: **You can select multiple **Taxonomies **to fetch the details.
- Click the checkboxes to include the **count of taxonomies**, **count of terms**, **referenced term count**, **referenced entries count**, and **get the deleted taxonomies**.

  **Note:** If you mark the checkbox for Get deleted taxonomies, the output will only display all the deleted taxonomies in the selected stack.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6e450b2520bbb2c/663880de4aea13f477967798/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8f141b78627bace/6628dc74b8b5ce1914dc209b/Save_Exit.png)

## Get All Terms

This action fetches the details of all the terms in a stack.
- Under **Choose an Action** tab, select the **Get All Terms** action.
- On the **Get All Terms Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. For example, select *Test *stack and *Automate *taxonomy.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8db28ba61ec9c8a8/6628dc88a9b0ab3604b92341/Select_Fields.png)
- **[Optional] **Enable the** Show Optional Fields** toggle button to display the **Term Limit**, **Skip Term (Pagination)**, **Search Term(s)**, **Select Terms**, and **Term Hierarchy** fields.For example, enter *5 *in Term Limit, *1 *in Skip Term (Pagination). Enter *Repeat Path* in Search Term(s). Select *What is Repeat Path*, *Repeat Path Use Case*, and *What is Conditional Path* in the Search Terms field. Enter *2 *in Term Hierarchy.
- Click the checkboxes to include the **count of terms**, **number of child terms**, **referenced entries count**, **order of the term(s) according to their placement in the taxonomy**, and **get the deleted terms**.

  **Note:** If you mark the checkbox for **Get deleted taxonomies**, the output will only display all the deleted terms from the selected taxonomy in the selected stack based on the specified Term Hierarchy.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48eaacec74ac2271/6628dc8851b16f30f6c4e28b/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6a258278d6389f21/6628dc88528fc1e96355b5de/Save_Exit.png)

## Get All Terms across All Taxonomies

This action fetches the details of all the terms across all the taxonomies in a stack.
- Under **Choose an Action** tab, select the **Get All Terms across All Taxonomies** action.
- On the **Get All Terms across All Taxonomies Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list.
For example, select *Test *stack.
- Enter the **Search Term(s)** to fetch all the term(s).For example, enter *repeat *in Search Term.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49aa6a9b796e8820/6628dc96a02ad71e20ee9a13/Select_Fields.png)
- **[Optional]** Enable the **Show Optional Fields **toggle button to display the **Term Limit**, **Skip Term (Pagination)** fields. For example, enter *4 *in Term Limit and *1 *in Skip Term (Pagination).
- Click the checkboxes to include the **count of terms**, **number of child terms**, and **referenced entries count**.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt502a8685503bb579/6628dc96bb6372c9681dfbb3/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ee846b9069ffd7e/6628dc964da2a9a219ff2b4b/Save_Exit.png)

## Get a Single Taxonomy

This action fetches the details of a single taxonomy in a stack.
- Under **Choose an Action** tab, select the **Get a Single Taxonomy** action.
- On the **Get a Single Taxonomy Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. For example, select *Test *stack and *Sample_Taxonomy* taxonomy.
- **[Optional] **Enable the** Show Optional Fields** toggle button to display the checkboxes for the **count of terms**, **referenced term count**, and** referenced entries count**.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb1e67410119a52e/6628dc34b05441619999ffbe/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17c4f33c96b7cc05/6628dc34bb6372e0351dfba7/Save_Exit.png)

## Get a Single Term

This action fetches the details of a single term in a stack.
- Under **Choose an Action** tab, select the **Get a Single Term** action.
- On the **Get a Single Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Taxonomy**, and **Term **from the **Lookup **list. For example, select *Test *stack, *Sample_Taxonomy *taxonomy, and *Parent_Test* term.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89795e01bdf23991/6628dc41528fc16db555b5d4/Select_Fields.png)
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the checkboxes for the **number of child terms** and **referenced entries count**.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a9c78cd8645085f/6628dc4085518c1bba557f19/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97d9e5311931e934/6628dc4081c88442fa37fdb7/Save_Exit.png)

## Import a Taxonomy

This action imports a taxonomy, along with all its associated terms in a stack.
- Under **Choose an Action** tab, select the **Import a Taxonomy** action.
- On the **Import a Taxonomy Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list. For example, select *Test *stack.
- Select the **Format**, i.e., **CSV **or **JSON **to import the taxonomy.
- In the **Taxonomy Data **field, enter the data to import. Provide the data in **JSON **or **CSV **format.**Example:**
**CSV Format:**

```
Taxonomy Name,Taxonomy Uid,Taxonomy Description,Level 1 Term Name,Level 1 Term Uid,Level 2 Term Name,Level 2 Term Uid,Level 3 Term Name,Level 3 Term Uid
Sample Parent Taxonomy,parent_taxonomy,,,,,,,
,,,Sample Child 1,sample_child_1,,,,
,,,,,Sample Grandchild Term 1,sample_grand_child_term_1,,
,,,,,Sample Grandchild Term 2,sample_grand_child_term_2,,
,,,Sample Child 2,sample_child_2,,,,
,,,,,Sample Grandchild Term 3,sample_grand_child_term_3,,
,,,,,,,Sample Great Grandchild Term 1,sample_great_grand_child_term_1

```

**JSON**

```
{"taxonomy":{"uid":"parent_taxonomy","name":"Sample Parent Taxonomy","description":""},"terms":[{"uid":"sample_child_1","name":"Sample Child 1","parent_uid":null},{"uid":"sample_child_2","name":"Sample Child 2","parent_uid":null},{"uid":"sample_grand_child_term_1","name":"Sample Grandchild Term 1","parent_uid":"sample_child_1"},{"uid":"sample_grand_child_term_3","name":"Sample Grandchild Term 3","parent_uid":"sample_child_2"},{"uid":"sample_grand_child_term_2","name":"Sample Grandchild Term 2","parent_uid":"sample_child_1"},{"uid":"sample_great_grand_child_term_1","name":"Sample Great Grandchild Term 1","parent_uid":"sample_grand_child_term_3"}]}
```
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69737243bd27c675/6628dcb133301d021f89290f/Save_Exit.png)

## Update a Taxonomy

This action lets you update the description and title of a taxonomy.
- Under **Choose an Action** tab, select the **Update a Taxonomy** action.
- On the **Update a Taxonomy Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Taxonomy **from the **Lookup **list. For example, select *Test *stack and *Sample_Taxonomy *taxonomy.
- Enter a suitable **Taxonomy Title **and **Taxonomy Description**. For example, enter *Sample_Taxonomy_Updated* in Taxonomy Title and *The Sample_Taxonomy is updated* in Taxonomy Description.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt949a9e28e302268f/6628dcbf24e1814840ace7a5/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9998eca0706c5c33/6628dcbfb8b5ced5fadc20a7/Save_Exit.png)

## Update a Term

This action lets you update the title of a term.
- Under **Choose an Action** tab, select the **Update a Term** action.
- On the **Update a Term Configure Action** page, enter the details given below:
  - Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Taxonomy**, and **Term **from the **Lookup **list. For example, select *Test *stack, *Sample_Taxonomy *taxonomy, and *Parent_Test *term.
- Enter a suitable **Term Title **to update. For example, enter *Parent_Test _Updated *in Term Title.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt00712a2d6ce0ae94/6628dccfb054412b6999ffc9/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf92d434505369e57/662a27d9a9b0abdcbeb92e4f/Save_Exit.png)

## Common questions

### Do I need to connect my Contentstack account before using these actions?
Yes, click **+ Add New Account** to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.

### What formats are supported for importing and exporting a taxonomy?
Export supports *JSON* or *CSV* format, and import supports **CSV **or **JSON **format.

### What does “Force Delete” do when deleting a taxonomy or term?
The **Force Delete** checkbox deletes the taxonomy or term even if it is referenced in the entries.

### How do pagination fields work in “Get” actions?
Fields such as **Term Limit** and **Skip Term (Pagination)** can be used to skip the first term(s) and fetch the next set of terms based on the limit.