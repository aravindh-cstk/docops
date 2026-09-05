---
title: "Typesense Cloud"
description: "Use the Typesense Cloud Connector to seamlessly index, update, or delete documents with Automate workflows."
url: /agent-os/typesense-cloud
uid: blt755ccf56f8b7e3ce
---

# Typesense Cloud

## Typesense Cloud

The Typesense Cloud Connector lets you automate adding, updating, or deleting indexed documents in a Typesense Cloud collection. By integrating this connector in your Contentstack Automations, you can keep your search indexes in sync with your content workflows.

## Prerequisites

-   Typesense Cloud [account](https://cloud.typesense.org/)
-   Contentstack [account](https://www.contentstack.com/login)
-   Access to organization that has Agent OS enabled

To use the Typesense Cloud connector, you must first add your Typesense Cloud account. To do so, follow the steps given below:

## Connect your Typesense Cloud Account

1.  Click **Configure** **Action** **Step** in the left navigation panel.
2.  Click **Action** **Step** to configure third-party services.
3.  Within the **Configure** **Action** **Step**, click the **Typesense Cloud** connector.![Typesense_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86c1bb718850df4a/68ba89f4b6a4572295fe66f2/Typesense_Connector.png)
4.  Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Index an Entry** action.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte89dc20bbdf4835a/68beaafed2e6bb5112d17c32/Select_Fields.png)
5.  On the **Configure Action** page, click the **\+ Add New Account** to add your Typesense Cloud account.![Add_an_Accoun.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba741223e3bd2751/68beaaecbc3a224c294b6dd4/Add_an_Accoun.png)
6.  In the **Authorize** modal, enter the **API Key** and the **Typesense Host Node URL**.
    1.  To generate the API Key, login to your Typesense Cloud [account](https://cloud.typesense.org/).
    2.  In the Typesense Cloud dashboard, click **Overview** in the left navigation panel.
    3.  Click **Generate API Keys** to create a new API Key. An API key file is downloaded to your local machine. You will see two API keys: **Admin API Key** and **Search Only API Key**.

        -   **Search Only API Key:** Use this API Key to search or read the data from Typesense Cloud collection.
        -   **Admin API Key:** Use this API Key to write the data in the Typesense Cloud collection.

        ![Typesense_Cloud_Generate_API_Keys.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt072fa97d45b57362/68ba89f411efa939785c8eac/Typesense_Cloud_Generate_API_Keys.png)
    4.  Copy the **Admin API Key**.
    5.  Copy the node **URL** to add the Typesense Host Node URL.
    6.  To add/update/delete a document, you must create a **Collection** in the Typesense Cloud account. To do so, follow these steps:

        1.  In the left navigation panel, click **Collections**.
        2.  Click **New Collection**.
        3.  Edit the example schema and click **Create Collection**.

        **Additional Resource:** Refer to the [Collections](https://typesense.org/docs/29.0/api/collections.html#create-a-collection) documentation to learn more.

7.  Enter an Account Name, then click **Authorize**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt917942b07533702e/68ba89eaea3098f83cec1e4b/Authorize_Account.png)

Once done, you can go ahead and set up your Typesense Cloud connector.

## Set up the Typesense Cloud Connector

Perform the following steps to set up the Typesense Cloud connector:

1.  From the left navigation panel, click **Configure Action** Step.
2.  Then, click **Action** **Step** to configure third-party services.
3.  Within the **Configure** **Action** **Step**, click the **Typesense Cloud** connector.![Typesense_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86c1bb718850df4a/68ba89f4b6a4572295fe66f2/Typesense_Connector.png)
4.  Under **Choose an Action**, you will see these actions: **Index an Entry**, **Update an Entry**, and **Delete an Entry**.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte89dc20bbdf4835a/68beaafed2e6bb5112d17c32/Select_Fields.png)

Let’s look at each of them in detail.

### Index an Entry

This action adds a new document into a Typesense Cloud collection.

1.  Under **Choose an Action** tab, select the **Index an Entry** action.
2.  On the **Index an Entry Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account](#connect-your-typesense-cloud-account) step.
    2.  Select an existing **Collection Name** to add the document from the **Lookup** list.
    3.  In the **Document ID** field, enter the ID of the document to add into the Typesense collection.

        **Note:** The Document ID in **Typesense Cloud** refers to the unique identifier for each record within a collection. This ID is essential for creating, updating, deleting, or retrieving records.

    4.  In the **Entry Data** field, enter the entry data in JSON format to add in a specific collection.  
        ![Select_Fields_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1529161190a9bb5d/68beaafed8ada2f45a2f23e8/Select_Fields_Index.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit_Button_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta68809cc61a49eee/68ba89eabfa11f65b4a16c83/Save_Exit_Button_Index.png)

### Update an Entry

This action updates the entry data in the Typesense Cloud collection.

1.  Under **Choose** **an Action** tab, select the **Update an Entry** action.
2.  On the **Update an Entry Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account](#connect-your-typesense-cloud-account) step.
    2.  Select an existing **Collection Name** to update the document from the **Lookup** list.
    3.  In the **Document ID** field, enter the ID of the document to update into the Typesense collection.
    4.  In the **Entry Data** field, enter the entry data in JSON format to update a specific collection. It is not necessary to provide the complete document object; you only need to include the fields that require updating.![Select_Fields_Update_an_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd006c208abc5ee00/68beaafe356bcf1c69727bff/Select_Fields_Update_an_Entry.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test** **Action**.
5.  Once set, click **Save** **and** **Exit**.![Save_Exit_Button_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt399119f2fbae7600/68ba89eac9b76ab0c8394766/Save_Exit_Button_Update.png)

### Delete an Entry

This action removes a single document from the Typesense Cloud collection.

1.  Under **Choose** **an Action** tab, select the **Delete an Entry** action.
2.  On the **Delete an Entry Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** to connect your Typesense Cloud account as shown in the [Connect your Typesense Cloud Account](#connect-your-typesense-cloud-account) step.
    2.  Select the **Collection Name** from the **Lookup** list where the document resides.
    3.  In the **Document ID** field, enter the ID of the document to delete from the Typesense collection.  
        ![Select_Fields_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cff1434d339aa61/68beaafee2fb9a29d4917590/Select_Fields_Delete.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test** **Action**.
5.  Once set, click **Save** **and** **Exit**.![Delete_Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90f7582507137a3c/68ba89eab6a457a937fe66ee/Delete_Test_Action.png)

This sets the **Typesense Cloud** connector.
