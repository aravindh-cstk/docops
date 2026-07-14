---
title: "[Automations guides and connectors] - Azure Blob Storage"
description: Azure Blob Storage connector documentation for creating or uploading blobs via Contentstack Automations.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/azure-blob-storage
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: latest
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Azure Blob Storage

This page explains how to use the Azure Blob Storage connector in Contentstack Automations to create or upload blobs to an Azure Blob Storage container. It is intended for developers and automation builders setting up the connector, generating required Azure credentials (Storage Account Name and SAS Token), and configuring an action step.

## Azure Blob Storage

The [Azure Blob Storage](https://azure.microsoft.com/en-in/products/storage/blobs/) connector lets you create or upload a blob into your Azure Blob Storage account via Contentstack. In the Azure Blob Storage account, you can create multiple containers and create or upload unstructured data (blob), such as images, files, etc.

## Prerequisite

To use the Azure Blob Storage connector, you first need to generate a Storage Account Name, create a container, and then generate a SAS Token in your Azure Blob Storage account. To do this, follow the steps given below:
- Log into your Azure Blob Storage account.
- Click **Storage accounts** from the list of Azure services and then click **+ Create**.![Creating_a_Storage_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5833668805bd925c/65df5430ee3a13f6eac8ee8a/Creating_a_Storage_Account.png)
- Enter all the necessary information and click **Review** to run the validation. This checks if a user has the permissions to create a storage account.![Review_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2ed141ee45871de/65df543011cd1d2516a19b0a/Review_Account.png)
- Once the validation is complete, click **Create** to initiate the storage account deployment.![Create_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79ce5c1b8b5daf57/65df5430eb46a613547e8f97/Create_Account.png)
- Once the deployment completes, the storage account gets created. We will now have to create a container inside this storage account.
- So, navigate to this newly created storage account. Under the **Data storage** section, in the left navigation panel, click **Containers**.![Azure_Blob_Storage_Connector_Containers](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8391a206b7acbd7/65e0ce9e74714188910a418e/Azure_Blob_Storage_Connector_Containers.png)
- Then, click **+ Container**. The **New container** modal opens.
- Enter a suitable name for your container in the **Name** field. You then have to define the access level of the container.
    For this, check the **Anonymous access level** drop-down. If it is disabled, you will have to enable it to change its settings. To do this, follow the steps given below:

      From the left navigation panel, go to the **Settings** menu and then click **Configuration**.
- You will be presented with different options. Scroll down to **Allow Blob anonymous access**, mark the **Enabled** checkbox, and click **Save** at the top.
        **Note**: This access is required so that you can store blobs through the Automate connector to your storage account.
- Now go back to your container by navigating to **Data Storage**. Click **Containers** and then click the **Change access level** option.![Azure_Blob_Storage_Connector_Containers_Click_change_access_level](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt756eaea9f4a3478d/65e0ce9eae62f780d94bf707/Azure_Blob_Storage_Connector_Containers_Click_change_access_level.png)
- From the **Anonymous access level** drop-down, select **Container (anonymous read access for container and blobs)** and click **OK**.![Azure_Blob_Storage_Connector_Containers_Change_access_level](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab51e97a9cdbcc38/65e0ce9ec59852a14cf6c4be/Azure_Blob_Storage_Connector_Containers_Change_access_level.png)
- Navigate to the storage account. From the left navigation panel, click **Access keys** and copy the **Storage account name** to your clipboard.![Storage_account_name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddb38b8489b4e570/65df545b11cd1d7433a19b13/Storage_account_name.png)
- To generate the **SAS Token**, follow the steps below:
      From the left navigation panel, navigate to the **Security + networking** section and click the **Shared access signature** tab.
- In **Allowed services**, keep only **Blob** selected, as our Automate currently supports only blobs.
- In **Allowed service types**, keep all options checked and in **Allowed permissions**, select only **Read**, **Write**, **Delete**, **List**, **Add**, and **Create**.
- Also, keep the options under **Blob versioning permissions** and **Allowed blob index permissions** selected.
- You can set the start and expiry date and time of the SAS token under the **Start and expiry date/time** option.

  **Note**: By default, this token expires in a few hours, so you can set its expiry according to your requirement.
- Once you have added these details, click the **Generate SAS and connection string** button.![Generate_SAS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a369c9c2886af0e/65df543051368b4ea3842d92/Generate_SAS.png)
- The **Connection string**, **SAS token**, and **Blob service SAS URL** will get generated. Copy the SAS Token to your clipboard.

    **Additional Resources**: For more information, refer to the [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview) documentation.

## Set up Azure Blob Storage Connector

Perform the following steps to set up the Azure Blob Storage connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Azure Blob Storage** connector.

  **Note**: You can sort and search the connector(s) based on the filter.![Azure_Blob_Storage_Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb53e3d1d4980ff8/65e1acedd781fe9d7ee74cff/Azure_Blob_Storage_Select_Connector.png)
- Under **Choose an Action** tab, select **Create or Upload a Blob** action.![Select_an_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e5348b3373f544a/65df542f4487d005033ff27f/Select_an_Action.png)
- Click the **+ Add New Account** button to add your Azure Blob Storage account.![Add_New_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba2cfcb29b2dbd78/65df542f74714164640a362b/Add_New_Account.png)
- In the **Authorize** modal, enter a **Title**. Enter the **Storage Account Name** and **SAS Token** retrieved in the [Prerequisite](#prerequisite) step from your Azure Blob Storage account. Click the **Authorize** button.![Authorize_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa47184b187cc805/65df542f7471411b5a0a3629/Authorize_Button.png)
- Select a **Container Name** from the **Lookup** list that appears when you click the textbox.
The lookup drop-down loads all the containers that are already defined in your Azure Blob Storage account.
- Enter a **File Name** (for example, File01.txt) to create or upload a blob in your container.![Select_Container_aand_File_Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2f540ff7ccb91fc/65df545bee3a13f98bc8ee90/Select_Container_aand_File_Name.png)
- Select the **Access Tier**, i.e., **Hot**, **Cold**, **Cool**, and **Archive** to define the accessibility of your blob data. Let’s take a look at each of them:
      **Hot Tier**: A tier designed for frequently accessed or modified data online.
- **Cool Tier**: An online tier tailored for storing rarely accessed or modified data. Data in the Cool tier must be retained for at least 30 days.
- **Cold Tier**: An online tier designed for infrequently accessed or modified data, yet demands swift retrieval. Data in the Cold tier must be retained for a minimum of 90 days.
- **Archive Tier**: A storage tier for rarely accessed data with flexible timing needs, usually within hours. Data in the Archive tier must be retained for at least 180 days.

    **Additional Resources**: For more information, refer to the [Access tiers for blob data](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) documentation.
- In the **Source** drop-down, select a **Source** for the upload (*Content or File URL*) and provide the **Input Value** or **Input URL** for each source.

  **Note**: For the **Source** type **Content** and **File URL**, you **must** create files with an extension, such as .txt or .jpeg. If the appropriate extensions are not provided, the file will be encoded into a format different from its original one. Consequently, this will result in storing a wrongly encoded file in the storage container.![Select_Tier_and_Source_Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt55d34f83f977b738/65df545b11cd1dc708a19b0f/Select_Tier_and_Source_Content.png)![Select_File_URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt953b4060eac9e348/65df545b55b8c66236a125a9/Select_File_URL.png)
- Click the **Show optional fields** toggle button to enter the data for the **Blob Tags** and **Metadata** optional fields.
Blob tags and metadata offer extra details about a blob. Tags help in blob categorization or organization, while metadata offers specific information like creation date, author, or other attributes.![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt479691ca459b7869/65df545bf86c24d37d8e09c0/Show_Optional_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd790ca4a9097825/65df545baca1715be99ff19d/Test_Action.png)
- Once set, click **Save and Exit**.![Save_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1b912419ef77685/65df5430ffa94a0daa3d3efb/Save_Exit_Button.png)
- To check all the files created or uploaded in the container, log into your Azure Blob Storage account.![Final_Screenshot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81ffd0bfd8316136/65df54302c8bef37f8621d6a/Final_Screenshot.png)

This sets the Azure Blob Storage connector.

## Common questions

### What do I need before configuring the Azure Blob Storage connector?
You need to generate a Storage Account Name, create a container, and generate a SAS Token in your Azure Blob Storage account.

### Which Azure service is supported by this connector?
In **Allowed services**, keep only **Blob** selected, as our Automate currently supports only blobs.

### Why do I need to include a file extension when using Content or File URL as the Source?
For the **Source** type **Content** and **File URL**, you **must** create files with an extension, such as .txt or .jpeg; otherwise the file may be encoded into a different format and stored wrongly encoded in the storage container.

### Where can I verify that files were created or uploaded successfully?
To check all the files created or uploaded in the container, log into your Azure Blob Storage account.

<!-- filename: automations-guides-and-connectors-azure-blob-storage.md -->