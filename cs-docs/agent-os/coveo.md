---
title: [Automations guides and connectors] - Coveo
description: Learn to use the Coveo Automate connector to efficiently push and delete items from your website to Coveo.

url: https://www.contentstack.com/docs/agent-os/coveo
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-10-25
filename: coveo.md
---

# [Automations guides and connectors] - Coveo

This page explains [Automations guides and connectors] - Coveo for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Coveo

The Coveo connector allows you to efficiently push new items from your website or remove outdated ones, ensuring your content stays up-to-date and relevant in your search experiences.

This guide offers a step-by-step approach to using the Coveo Automate connector to manage content on the Coveo platform.

You will learn how to use the connector into your workflow and perform essential content management tasks such as pushing and deleting items, making it easier to maintain and optimize your website's search content on Coveo.

**Example**

Set up an automation using Contentstack Entry Publish Trigger and Coveo Push Content action. When a user publishes an entry in a specific environment, the entry URL is fetched, and the content is pushed to the selected Coveo Source.

### Prerequisites

* [Coveo account](https://platform.cloud.coveo.com/login)
* [Contentstack account](https://www.contentstack.com/login/)
* Access to organization that has Automate enabled

### Retrieve the Coveo API Key and Organization ID

To use the Coveo Connector, you need the API Key and Organization ID. To fetch these details, follow the steps given below:

1. Log in to your [Coveo](https://platform.cloud.coveo.com/login) account.
2. From the top navigation, click **Contentstack**. You will see four regions listed (**US EU AU CA**).
   1. Click **Create a test organization**.  
      ![Select_Org.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38c178e4c6641cd4/6709235a4eae35ae17b43fd4/Select_Org.png)
   2. On the **Create a Test Organization** page, enter a name for your organization in the **Organization** **name** field.
   3. Select your preferred region for the available options and click the **Create** button.  
      ![Create a Test Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5eae164f1216ab04/67092200698556397c5be423/Create_a_Test_Organization.png)
3. Your Organization ID will be displayed. Please note or copy the Organization ID as (shown below). We will need this ID while setting up the connector.  
   ![Select_your_org.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b03c1b54feb590d/670924147d4fe4fd5d6622f6/Select_your_org.png)
4. Now, we need to obtain the API Key. To do this, follow the steps given below:
   1. From the left navigation panel, click **Organization**, and then go to the **API** **Keys** tab.
   2. On the **API** **Keys** page, click the **Add** **key** button to create a new API key.  
      ![API Keys.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdacd946eb6beedab/670924daef76892cf0567c94/API_Keys.png)
   3. You will be navigated to the **Add an API key** screen. By default, the **Configuration** tab will be selected. Enter a name for the key inside the **Key** **name** field and an optional description.
   4. In the **Privileges** tab, select **Admin** from the **Preset** drop-down.  
      ![Admin Selection.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7e8ed5c6f701f97/67092200ff6476145d2192d5/Admin_Selection.png)
   5. Click the **Add** **key** button, copy the API key, and then click the **Ok** button. You will see the API key.  
      ![Add an API Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdcf5194032dbd3d/67092200b0b1531757951da0/Add_an_API_Key.png)

      **Note:** Please ensure you copy the API key to your clipboard. You will not be able to view it again.
   6. To push (add) or delete items, you must create a source. To do so, follow the steps below:
      1. From the left navigation, under **Content**, click **Sources**. Click the **Get** **started** button.

         If you are added to an existing Coveo organization, you will see the **Add** **source** button. Else, you will see the Get started button where you can start setting up the source.

         **Additional Resource:** Refer to the [Manage your sources](https://docs.coveo.com/en/3390/index-content/manage-your-sources) document to learn more.
      2. In the **Add a source of content** window, click the **Push** tab and click the **Push** card.
      3. In the **Add a Push Source** screen, enter a name for the source in the **Source** **name** field and then, click **Add** **source** button. Read the terms, check the 'I understand' box, and click the **Continue** button. Your source will be created.

**Note:** Make note of the API key and the Organization ID that we have fetched, we will need this while setting up the account in Automate.

### Connect your Coveo Account to Automate

Perform the following steps to set up the Coveo account:

1. Click **Configure** **Action** **Step** from the left navigation panel.
2. Click **Action** **Step** to configure third-party services.
3. Within the **Configure** **Action** **Step**, click the **Coveo** connector.  
   ![Select_Coveo_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1e953420ebbda78/6709220169c48a420583ba47/Select_Coveo_Connector.png)
4. Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Delete** **Content** action.  
   ![Select_Delete_Content_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7901ab6090347296/670922018307678618c33a7c/Select_Delete_Content_Action.png)
5. On the **Configure** **Action** page, click the **+ Add New Account** to add your Coveo account.  
   ![Add_an_Account_Delete.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9e3e5df7094c7e4/6718f59443c85447bb668c80/Add_an_Account_Delete.jpeg)
6. In the **Authorize** modal, enter the following:
   1. **Title (required)**
   2. **API Key (required):** Enter the API key that we retrieved from the [above step](#retrieve-the-coveo-api-key-and-organization-id).
   3. **Organization ID (required):** Enter the Organization ID retrieved from the [above step](#retrieve-the-coveo-api-key-and-organization-id).
   4. **Select Region (required):** Select the region as shown in the [above step](#retrieve-the-coveo-api-key-and-organization-id).
7. Once done, click **Authorize**.  
   ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51f54af972adb32f/6709220081159a45f49e6409/Authorize_Button.png)

This sets up your Coveo account for the Coveo connector.

### Set up the Coveo Connector

Perform the following steps to set up the Coveo action connector:

1. From the left navigation panel, click **Configure Action** Step.
2. Then, click **Action** **Step** to configure third-party services.
3. Within the **Configure** **Action** **Step**, click the **Coveo** connector.  
   ![Select_Coveo_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1e953420ebbda78/6709220169c48a420583ba47/Select_Coveo_Connector.png)
4. Under **Choose an Action**, you will see these actions: **Delete** **Content** and **Push** **Content**.  
   ![Select_Coveo_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49aab55d9ae13b6f/670922013104e8fe6690f6af/Select_Coveo_Actions.png)

Once done, you can go ahead and set up your Coveo connector.

#### Action 1: Select the Delete Content action:

1. Under **Choose an Action** tab, select the **Delete Content** action.
2. On the **Delete** **Content Configure** **Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Coveo account as shown in the [Connect your Coveo Account to Automate](#connect-your-coveo-account-to-automate) step.
   2. Select a **Source** to delete the content from.
   3. In the **Document** **ID** field, enter the website URL or a file URI you wish to delete.

      The example below includes a website URL, followed by the file URI fetched from the previous step.

      ![Delete_Content_Fields.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91b5f7f3ecfef809/6718f594f79414637658d21d/Delete_Content_Fields.jpeg)
   4. Optionally, enable the **Show Optional Fields** toggle button to check the **Remove all child elements from the document** box, which will delete all items and references.

      **Additional Resource:** Refer to the [deleteChildren](https://docs.coveo.com/en/search/#q=what%20is%20deleteChildren) documentation to learn more.

      ![Show_Optional_Fields.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8e93524ac3fc476/6718f594e409e1154a047206/Show_Optional_Fields.jpeg)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test Action**.  
   ![Test_Action.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd46343166941e123/67092218ff6476633a2192e4/Test_Action.jpeg)
5. Once set, click **Save and Exit**.  
   ![Save_Exit.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteadb927e9fc92d6d/6709221878f0165ab75462b8/Save_Exit.jpeg)

#### Action 2: Select the Push Content action:

1. Under **Choose** **an Action** tab, select the **Push** **Content** action.
2. On the **Push Content Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Coveo account as shown in the [Connect your Coveo Account to Automate](#connect-your-coveo-account-to-automate) step.
   2. Select a **Source** to delete the content to.
   3. In the **Document** **ID** field, enter the website URL or a file URI you wish to push.

      The example below includes a website URL, followed by the file URI fetched from the previous step.

      **Additional Resource:** Refer to the [Swagger UI](https://platform.cloud.coveo.com/docs?urls.primaryName=PushAPI#/Item/put_organizations__organizationId__sources__sourceId__documents) documentation to learn more.

      ![Select_Fields_Push_Content.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a26fef6618f0654/6718f59421e431d62c373269/Select_Fields_Push_Content.jpeg)
   4. In the **Document Body** field, enter the content items you want to add. You **must** define “data” and “title” as keys and pass strings as values for both, as shown below:  
      ![Document_Body_Push_Content.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8e26e0a127d9d06/6718f5940cb3eca62bc6bf76/Document_Body_Push_Content.jpeg)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test** **Action**.  
   ![Test_Action.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacfde54f46025dbc/6709222351c0066c3c802c81/Test_Action.jpeg)
5. Once set, click **Save** **and** **Exit**.  
   ![Save_Exit.jpeg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c591369fe20e2b6/67092223ff647684662192ec/Save_Exit.jpeg)

This sets the **Coveo** connector.

## Common questions
### What is covered in [Automations guides and connectors] - Coveo?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Coveo?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
