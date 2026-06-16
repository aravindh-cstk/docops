---
title: [Automations guides and connectors] - Contentstack Delivery
description: Use the Contentstack Delivery connector to fetch assets and entries.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-delivery
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-08
filename: contentstack-delivery.md
---

# [Automations guides and connectors] - Contentstack Delivery

This page explains [Automations guides and connectors] - Contentstack Delivery for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Contentstack Delivery

The Contentstack Delivery Connector lets you fetch entries and assets published in the environment. The Contentstack Delivery connector currently contains four actions: **Get All Assets**, **Get All Entries**, **Get a Single Asset**, and **Get a Single Entry**.

**Note:** With the Contentstack Delivery connector, you can **only** fetch the **published** entries/assets.

Details of each action are covered in their respective sections.

### Prerequisites

To use the Contentstack Delivery connector, you first need to add your [Contentstack account](https://www.contentstack.com/login). To do so, follow the steps given below:

#### Connect your Contentstack Account to Automate

1. Click **Configure Action Step** from the left navigation panel.
2. Click **Action Step** to configure third-party services.
3. Within the **Configure Action Step**, click the **Contentstack** connector.  
   ![Contentstack_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cc49e75a39ae1e2/65fd9dda3caa575b6fcfb6c6/Contentstack_Action.png)
4. Select the **Contentstack Delivery** connector to retrieve published entries and assets.  
   ![Select_Category.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22d535d70e6802a5/65fd9ddb6f7fa76e95eac92a/Select_Category.png)
5. Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Get All Assets** action.  
   ![Get_All_Asset_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt525567dad5e20196/65fd9ddaf6f513062eba182a/Get_All_Asset_Action.png)
6. On the **Configure Action** page, click the **+ Add New Account** to add your Contentstack account.
7. In the **Authorize** modal, enter a **Title**. Enter the **Delivery** **Token** of your stack. Click the **Authorize** button.  
   ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4df2537033212963/65fd9dda0901368ee0d9672a/Authorize_Button.png)

   **Additional Resource:** To learn more about Delivery Tokens, refer to the [Working with Delivery Tokens](/docs/developers/create-tokens#work-with-delivery-tokens) guide.

Once done, you can go ahead and set up your Contentstack Delivery connector.

### Set up the Contentstack Delivery Connector

Perform the following steps to set up the Contentstack Delivery connector:

1. From the left navigation panel, click **Configure Action Step**.
2. Then, click **Action** **Step** to configure third-party services.
3. Within the **Configure Action Step**, click the **Contentstack** connector.  
   ![Contentstack_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cc49e75a39ae1e2/65fd9dda3caa575b6fcfb6c6/Contentstack_Action.png)

   **Note:** You can sort and search the connector(s) based on the filter.
4. Select the **Contentstack** **Delivery** connector to retrieve published entries and assets.  
   ![Select_Category.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22d535d70e6802a5/65fd9ddb6f7fa76e95eac92a/Select_Category.png)
5. Under **Choose an Action**, you will see four actions: **Get All Assets**, **Get All Entries**, **Get a Single Asset**, and **Get a Single Entry**.  
   ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7aa86ab019083fe5/65fd9ddb8272860db6220f86/Select_Action.png)

Let’s look at each of them in detail.

#### Action 1: Select the **Get All Assets** action

The **Get All Assets** action lets you fetch details of all the published assets in a stack. To use the Get All Assets action, follow the steps below:

1. Under **Choose an Action** tab, select the **Get All Assets** action.
2. On the **Get All Assets Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
   2. Select a **Stack** and an **Environment** from the **Lookup** list.  
      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt707569208af760af/65fdbc428f44444264c3a202/Select_Fields.png)
   3. Optionally, enable the **Show Optional Fields** toggle button to display the **Branch**, **Locale**, and **Version** fields.

      **Note:** By default, the main branch is selected (even if the Branch field is empty).
   4. You can also include the count of the assets, metadata details, fallback (to fetch the assets in the defined fallback language), and publish details by clicking the respective checkboxes.  
      ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f6c9cf2ef84828a/65fdbc42bcecd46573f591a8/Show_Optional_Fields.png)
3. Once done, click **Proceed**.
4. Click **Test** **Action** to test the configured action.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d486181daf89b4f/65c0b582b3cfc0fabde5dd71/Test_Action.png)
5. On successful configuration, you can see the below output. Click **Save and Exit**.  
   ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte13bee900ee1f31f/6604283c53e37d261efc3671/Save-Exit.png)

#### Action 2: Select the **Get All Entries** action

The **Get All Entries** action fetches all the published entries in a stack. To use the Get All Entries action, follow the steps below:

1. Under **Choose an Action** tab, select the **Get All Entries** action.
2. On the **Get All Entries** **Configure** **Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
   2. Select a **Stack**, **Branch**, **Content** **Type**, and **Environment** from the **Lookup** list.  
      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4df22d3bca6b7bb/65fdbc546f7fa71810eaca71/Select_Fields.png)

      **Note:** By default, the main branch is selected (even if the Branch field is empty).
   3. Optionally, enable the **Show Optional Fields** toggle button to display the **Entry Limit**, **Skip Entry (Pagination)**, **Entry Version**, and **Select Locale** fields. You can also include the count of the entries, fallback (to fetch the assets in the defined fallback language), metadata details, branch, and publish details by clicking the respective checkboxes.
   4. Provide your data in the **Customized Data (query)** field to filter the entry. Enter your data in the **Key**, **Operator**, and **Value** fields.

      In the **Customized Data (query)** field, you can filter the entry based on *Updated At/Created At* options. For example, you can fetch all the entries updated after a certain time and date as shown below:

      ![Show_optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4efa6ffd961ed7c6/65fdbc548272867f4f22109f/Show_optional_Fields.png)

      **Note:** You can retrieve entries created on a specific date by using the date-specific operators such as "Less than specified number" or "Greater than specified number" for the Created At and Updated At keys.

      You can view the **Lookup** data for all the fields present in the content type including **Reference**, **Modular** **Blocks** and **Group** fields. Using the **Operator** filter you can sort the data.

      In the **Reference** field, enter the ID of the reference field of your content type.

      ![Refeernce.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5aa2fb53b4a3c1c3/65fdbc531741ea599b6507b8/Refeernce.png)
3. Click **Proceed**.
4. Click **Test** **Action** to test the configured action.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a162e895ff41526/65fdbc533caa57e2a1cfb798/Test_Action.png)
5. The output will be shown as follows. Click the **Save** **and** **Exit** button.  
   ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c879005e62cfd5e/65fdbc530bda8410db12dae8/Save_Exit.png)

#### Action 3: Select the **Get a Single Asset** action

The **Get a Single Asset** action lets you fetch details of a single asset published in a stack. To use the Get a Single Asset action, follow the steps below:

1. Under **Choose an Action** tab, select the **Get a Single Asset** action.
2. On the **Get a Single Asset Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
   2. Select a **Stack**, **Environment**, and **Asset** from the **Lookup** list.  
      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13c02f20e5047fd6/65fdbc638f44445621c3a216/Select_Fields.png)

      **Note:** By default, the main branch is selected (even if the Branch field is empty).
   3. Optionally, enable the **Show Optional Fields** toggle button to display the **Branch** field. You can also include the publish and metadata details by clicking the respective checkboxes.  
      ![Show_optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt05efb29ff98d48f5/65fdbc63949724279df627d2/Show_optional_Fields.png)
3. Once done, click **Proceed**.
4. Click Test **Action** to test the configured action.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe3506163cf250d7/65fdbc63f6f5130e37ba1979/Test_Action.png)
5. On successful configuration, you can see the below output. Click **Save and Exit**.  
   ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc32908bcf2ad99ae/660428e853e37d0904fc3679/Save_Exit.png)

#### Action 4: Select the **Get a Single Entry** action

The **Get a Single Entry** action lets you fetch details of a single entry published in a stack. To use the Get a Single Entry action, follow the steps below:

1. Under **Choose an Action** tab, select the **Get a Single Entry** action.
2. On the **Get a Single Entry Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
   2. Select a **Stack**, **Branch**, **Content** **Type**, **Environment**, and **Entry** from the **Lookup** list.  
      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4145836bfa8fe71a/65fdbc72d057558ee30001c9/Select_Fields.png)

      **Note:** By default, the main branch is selected (even if the Branch field is empty).
   3. Optionally, enable the **Show Optional Fields** toggle button to display additional fields. Select the entry **Locale** and **Reference** fields.

      In the **Reference** field, enter the ID of the reference field of your content type. You can also include the metadata and publish details along with fallback (to fetch an entry defined in a particular fallback) and branch checkboxes to fetch these details in addition to the entry details.

      ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e79764ca2cec3cf/65fdbc72cddae0f174b008a7/Show_Optional_Fields.png)
3. Once done, click **Proceed**.
4. Click **Test Action** to test the configured action.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfaede93e70ce7bee/65fdbc72df69723fce39c70c/Test_Action.png)
5. On successful configuration, you can see the below output. Click **Save and Exit**.  
   ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt29ba086afd560023/65fdbc726f3127430f94e71b/Save_Exit.png)

This sets the **Contentstack Delivery** connector.

## Common questions
### What is covered in [Automations guides and connectors] - Contentstack Delivery?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Contentstack Delivery?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
