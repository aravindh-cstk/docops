---
title: Automations guides and connectors - Typesense Cloud
description: Documentation for the Typesense Cloud Connector in Contentstack Automations, including prerequisites, account connection steps, and available actions (Index, Update, Delete).
url: https://www.contentstack.com/docs/agent-os/typesense-cloud
product: Contentstack Automations
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# Automations guides and connectors - Typesense Cloud

This page explains how to connect and configure the Typesense Cloud connector in Contentstack Automations. It is intended for developers and automation builders who want to keep Typesense Cloud search indexes synchronized with Contentstack content workflows, and should be used when setting up indexing, updating, or deleting documents via Automations.

## Typesense Cloud

The Typesense Cloud Connector lets you automate adding, updating, or deleting indexed documents in a Typesense Cloud collection. By integrating this connector in your Contentstack Automations, you can keep your search indexes in sync with your content workflows.

## Prerequisites
- Typesense Cloud [account](https://cloud.typesense.org/)
- Contentstack [account](https://www.contentstack.com/login)
- Access to organization that has Automate enabled

To use the Typesense Cloud connector, you must first add your Typesense Cloud account. To do so, follow the steps given below:

## Connect your Typesense Cloud Account to Automate
- Click **Configure** **Action** **Step** in the left navigation panel.
- Click **Action** **Step** to configure third-party services.
- Within the **Configure** **Action** **Step**, click the **Typesense Cloud** connector.![Typesense_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86c1bb718850df4a/68ba89f4b6a4572295fe66f2/Typesense_Connector.png)
- Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Index an Entry** action.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte89dc20bbdf4835a/68beaafed2e6bb5112d17c32/Select_Fields.png)
- On the **Configure Action** page, click the **+ Add New Account** to add your Typesense Cloud account.![Add_an_Accoun.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba741223e3bd2751/68beaaecbc3a224c294b6dd4/Add_an_Accoun.png)
- In the **Authorize** modal, enter the **API Key** and the **Typesense Host Node URL**.To generate the API Key, login to your Typesense Cloud [account](https://cloud.typesense.org/).
- In the Typesense Cloud dashboard, click **Overview** in the left navigation panel.
- Click **Generate API Keys** to create a new API Key. An API key file is downloaded to your local machine. You will see two API keys: **Admin API Key **and **Search Only API Key**.**Search Only API Key: **Use this API Key to search or read the data from Typesense Cloud collection.
- **Admin API Key:** Use this API Key to write the data in the Typesense Cloud collection.
- Copy the **Admin API Key**.
- Copy the node **URL** to add the Typesense Host Node URL.
- To add/update/delete a document, you must create a **Collection** in the Typesense Cloud account. To do so, follow these steps:In the left navigation panel, click **Collections**.
- Click **New Collection**.
- Edit the example schema and click **Create Collection**.

**Additional Resource:** Refer to the [Collections](https://typesense.org/docs/29.0/api/collections.html#create-a-collection) documentation to learn more.
- Enter an Account Name, then click **Authorize**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt917942b07533702e/68ba89eaea3098f83cec1e4b/Authorize_Account.png)

Once done, you can go ahead and set up your Typesense Cloud connector.

## Set up the Typesense Cloud Connector
Perform the following steps to set up the Typesense Cloud connector:
- From the left navigation panel, click **Configure Action** Step.
- Then, click **Action** **Step** to configure third-party services.
- Within the **Configure** **Action** **Step**, click the **Typesense Cloud **connector.
- Under **Choose an Action**, you will see these actions: **Index an Entry**, **Update an Entry**, and **Delete an Entry**.

Let’s look at each of them in detail.

### Index an Entry
This action adds a new document into a Typesense Cloud collection.
- Under **Choose an Action** tab, select the **Index an Entry** action.
- On the **Index an Entry Configure Action** page, enter the details given below:Click **+ Add New Account **to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account to Automate](#connect-your-typesense-cloud-account-to-automate) step.
- Select an existing **Collection Name** to add the document from the **Lookup** list.
- In the **Document ID** field, enter the ID of the document to add into the Typesense collection.

  **Note: **The Document ID in** Typesense Cloud** refers to the unique identifier for each record within a collection. This ID is essential for creating, updating, deleting, or retrieving records.
- In the **Entry Data **field, enter the entry data in JSON format to add in a specific collection.![Select_Fields_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1529161190a9bb5d/68beaafed8ada2f45a2f23e8/Select_Fields_Index.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit_Button_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta68809cc61a49eee/68ba89eabfa11f65b4a16c83/Save_Exit_Button_Index.png)

### Update an Entry
This action updates the entry data in the Typesense Cloud collection.
- Under **Choose** **an Action** tab, select the **Update an Entry** action.
- On the **Update an Entry Configure Action** page, enter the details given below:Click **+ Add New Account** to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account to Automate](#connect-your-typesense-cloud-account-to-automate) step.
- Select an existing **Collection Name** to update the document from the **Lookup** list.
- In the **Document ID** field, enter the ID of the document to update into the Typesense collection.
- In the **Entry Data** field, enter the entry data in JSON format to update a specific collection. It is not necessary to provide the complete document object; you only need to include the fields that require updating.![Select_Fields_Update_an_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd006c208abc5ee00/68beaafe356bcf1c69727bff/Select_Fields_Update_an_Entry.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test** **Action**.
- Once set, click **Save** **and** **Exit**.![Save_Exit_Button_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt399119f2fbae7600/68ba89eac9b76ab0c8394766/Save_Exit_Button_Update.png)

### Delete an Entry
This action removes a single document from the Typesense Cloud collection.
- Under **Choose** **an Action** tab, select the **Delete an Entry** action.
- On the **Delete an Entry Configure Action** page, enter the details given below:Click **+ Add New Account **to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account to Automate](#connect-your-typesense-cloud-account-to-automate) step.
- Select the **Collection Name** from the **Lookup** list where the document resides.
- In the **Document ID** field, enter the ID of the document to delete from the Typesense collection.![Select_Fields_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cff1434d339aa61/68beaafee2fb9a29d4917590/Select_Fields_Delete.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test** **Action**.
- Once set, click **Save** **and** **Exit**.![Delete_Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90f7582507137a3c/68ba89eab6a457a937fe66ee/Delete_Test_Action.png)

This sets the **Typesense Cloud** connector.

## Common questions

### Which API key should I use when authorizing the connector?
Use the **Admin API Key** when you need to write the data in the Typesense Cloud collection.

### Do I need to create a Typesense collection before using the connector actions?
Yes. To add/update/delete a document, you must create a **Collection** in the Typesense Cloud account.

### What actions are available in the Typesense Cloud connector?
Under **Choose an Action**, you will see these actions: **Index an Entry**, **Update an Entry**, and **Delete an Entry**.

### What is the Document ID used for?
The Document ID in **Typesense Cloud** refers to the unique identifier for each record within a collection and is essential for creating, updating, deleting, or retrieving records.