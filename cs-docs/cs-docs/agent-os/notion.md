---
title: [Automations guides and connectors] - Notion
description: Connect Notion with your favorite apps. Automate tasks, streamline workflows, and boost productivity seamlessly.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/notion
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-08
filename: notion.md
---

# [Automations guides and connectors] - Notion

This page explains [Automations guides and connectors] - Notion for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Notion

[Notion](https://www.notion.so/) is an all-in-one productivity and collaboration platform, combining note-taking, task management, databases, and project organization in a single, customizable space – ideal for both individual and team workflows.

The Notion connector enhances your Notion experience by enabling automated content management through creation, deletion, addition, and retrieval of data in your workspace via Automate. By integrating multiple tools in one space, it streamlines workflows for optimized productivity, seamless collaboration, and efficient knowledge management.

This guide provides step-by-step instructions for using the Notion Automate connector. For instance, you can set up automation with a Contentstack Entry Trigger and Notion’s "[Create a Page](#action-2-select-the-create-a-page-action)" action. When a user publishes an entry in a selected environment, a new page with entry details is automatically generated in your Notion workspace.

### Prerequisites

* [Notion account](https://www.notion.so/)
* [Contentstack account](https://www.contentstack.com/login/)
* Access to an organization that has Automate enabled

### Connect your Notion Account to Automate

Perform the following steps to set up the Notion account:

1. Click **Configure** **Action** **Step** from the left navigation panel.
2. Click **Action Step** to configure third-party services.
3. Within the **Configure** **Action** **Step**, click the **Notion** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79d9d2a4baa50b62/672dccb453e3c4d184b3abf9/Select_Connector.png)
4. Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Create a Page** action.![Create_Page_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75277a4fd240c0f8/672dccb490cfa340ddfd9278/Create_Page_Action.png)
5. On the **Configure Action** page, click the **+ Add New Account** button to add your Notion account.![Create_Page_Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt66a092b6a1ea6b05/672dccb4af37292240038f98/Create_Page_Add_Account.png)
6. Select the permission level needed to access your pages in Notion, then click the **Authorize** button.  
   ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42455480073aeefd/672dccb4a3eb8e8fcd3e10fc/Authorize_Button.png)
7. Log in to your Notion workspace using your email ID. You can also opt for Single Sign-On if preferred.![Login_Notion.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt081bcb2e4d53fdc4/672dccb48a441809a92d9526/Login_Notion.png)
8. In the pop-up, go to the top-right corner, select your workspace, and click the **Select** **Pages** button.![Select_Pages.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe833a4252b5daf8/672dccb4ed5a1d19bce33c93/Select_Pages.png)
9. Pick the specific pages to grant Automate access to in your Notion workspace.![Allow_Access.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4729a741691aeabf/672dccb453e3c4adafb3abf5/Allow_Access.png)
10. Provide an Account Name and then click **Save**.

This sets up your Notion account for the Notion connector.

### Set up the Notion Connector

Perform the following steps to set up the Notion action connector:

1. From the left navigation panel, click **Configure** **Action** **Step**.
2. Then, click **Action** **Step** to configure third-party services.
3. Within the **Configure** **Action** **Step**, click the **Notion** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79d9d2a4baa50b62/672dccb453e3c4d184b3abf9/Select_Connector.png)
4. Under **Choose an Action**, you will see these actions: **Add Content to a Page**, **Create a Page**, **Delete a Database**, **Delete a Page**, and **Get Page Details**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6020140901ba819c/672dccb43dfab3236af56fa0/Select_Actions.png)

Once done, you can go ahead and set up your Notion connector.

#### Action 1: Select the Add Content to a Page action

1. Under **Choose an Action** tab, select the **Add Content to a Page** action.
2. On the **Add Content to a Page Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Notion account as shown in the [Connect your Notion Account to Automate](#connect-your-notion-account-to-automate) step.
   2. Select a parent **Page** **Name** where you wish to add the content.
   3. In the **Select Content Schema Type** field, select the format for the content either **Text** or **JSON**.
   4. In the **Text/JSON Content Type** field, enter the content to be added. If you select **JSON** as the **Content** **Schema** **Type**, you can click the **Template** icon to fetch the predefined schema template for your page.

      **Note:** The **Content Schema Type** has a maximum character limit of **2000** characters.

      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98c86730056c87ad/672e114b170171421df00745/Select_Fields.png)
   5. Optionally, enable the **Show Optional Fields** toggle button to select the **Block** **Name**. This ensures that the content is added to your page after the selected block.![Select_Block.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e727541ef66af04/672e114b4c9c316cff018160/Select_Block.png)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test** **Action**.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt610e91e0ddd74a2e/672dce0494fe5a6060b81a1d/Test_Action.png)
5. Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49bd2a9e3721e836/672dce0497ce065a88478099/Save_Exit.png)

#### **Action 2: Select the Create a Page action**

1. Under **Choose an Action** tab, select the **Create a Page** action.
2. On the **Create a Page Content Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Notion account as shown in the [Connect your Notion Account to Automate step](#connect-your-notion-account-to-automate-step).
   2. Select the **Parent** **Type** for the new page. You can create the page within an existing parent page or database.![Select_page_Database.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt292814bfefc0186b/672e115bc741490f9cc2ff5c/Select_page_Database.png)

      **When Selecting Parent as Page**

      1. In the **Select Page Name** field, select a parent page where the new page will be created. Enter a page title for the new page in the **Page** **Title** field.  
         ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt72fb48cb61501eb4/672e115bc09b5d862ac4bbe2/Select_Fields.png)
      2. Optionally, enable the **Show Optional Fields** toggle button to view the following fields:
         1. In the **Select Content Schema Type** field, select the content format as either **Text** or **JSON** format.
         2. In the **Text/JSON** **Content** **Type** field, enter the content you wish to add. If you select **JSON** as the **Content Schema Type**, you can click the **Template** icon to fetch the predefined schema template for your page.

            **Note:** The **Content Schema Type** has a maximum character limit of **2000** characters.
         3. Enter the URLs for the **Page Icon** and **Cover Image**.  
            ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf372dc53c4321038/672e115c20ed6c548fa50d7c/Show_Optional_Fields.png)

      **When Selecting Parent as Database**

      1. In the **Select Database Name** field, select an existing database where the new page is created.
      2. In the **Database** **Properties** field, enter the content for the appropriate database columns. Ensure the data is in **JSON** format or use the predefined template for your database.  
         ![Select_Fields_Database.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt945ab1660bfd8725/672e115b09c2c0122461dce8/Select_Fields_Database.png)
      3. Optionally, enable the **Show Optional Fields** toggle button to view the following fields:
         1. In the **Select Content Schema Type** field, select the content format as either **Text** or **JSON**.
         2. In the **Text/JSON Content Type** field, enter the content you wish to add.
         3. If you select **JSON** as the **Content Schema Type**, you can click the **Template** icon to fetch the predefined schema template for your database.

            **Note:** The **Content Schema Type** has a maximum character limit of **2000** characters.
         4. Enter the URLs for the **Page Icon** and **Cover Image**.  
            ![Show_Optional_Fields_Database.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a64380e6b7c6941/672e115bcc42510b19a23035/Show_Optional_Fields_Database.png)
   3. Click **Proceed**.
   4. Check if the details are correct. If yes, click **Test Action**.  
      ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f6274352ba7c748/672dce0f97ce064a5447809d/Test_Action.png)
   5. Once set, click **Save and Exit**.  
      ![Save_Exit_dATABASE.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt774835c629815a75/672dce0f1701715532f00583/Save_Exit_dATABASE.png)

#### Action 3: Select the Delete a Database action

1. Under **Choose an Action** tab, select the **Delete a Database** action.
2. On the **Delete a Database Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Notion account as shown in the [Connect your Notion Account to Automate](#connect-your-notion-account-to-automate) step.
   2. Select a **Database** **Name** to delete.

      **Warning:** This action will permanently remove all the content within the database.

      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78d859391e55b027/672e116a188be38b5bf06972/Select_Fields.png)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test** **Action**.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0bc0654596acfc9f/672dce1ae9a3c65f03f51e84/Test_Action.png)
5. Once set, click **Save and Exit**.  
   ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt99d0dd929058113d/672dce1a15798d966801d248/Save_Exit.png)

#### Action 4: Select the Delete a Page action

1. Under **Choose an Action** tab, select the **Delete a Page** action.
2. On the **Delete a Page Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Notion account as shown in the [Connect your Notion Account to Automate](#connect-your-notion-account-to-automate) step.
   2. Select a **Page** **Name** to delete.

      **Warning:** This action will permanently remove all the content within the selected page.

      ![Select_Page_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03e9a0cfc0bdad8e/672e1178e5b8c50980a8293c/Select_Page_Name.png)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test Action**.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c1544bab56bdb49/672dce239f35ca8556c83190/Test_Action.png)
5. Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79dc5f86709ab1e8/672dce234c9c3141a5017fdf/Save_Exit.png)

#### Action 5: Select the Get Page Details action

1. Under **Choose an Action** tab, select the **Get Page Details** action.
2. On the **Get Page Details Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your Notion account as shown in the [Connect your Notion Account to Automate](#connect-your-notion-account-to-automate) step.
   2. Select a **Page** **Name** to fetch its details.
   3. Optionally, enable the **Show Optional Fields** toggle button to check the Include page content box. This retrieves details of all the child elements within the page.  
      ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe1bdf4e826c13a5/672e1184252d980b97a07567/Select_Fields.png)
3. Click **Proceed**.
4. Check if the details are correct. If yes, click **Test** **Action**.  
   ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf631bb3952581a9c/672dce344b9fed04e92c1bfa/Test_Action.png)
5. Once set, click **Save and Exit**.  
   ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d6c66dc36954802/672dce2caf37290ea3038f9d/Save_Exit.png)

This sets the **Notion** connector.

## Common questions
### What is covered in [Automations guides and connectors] - Notion?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Notion?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
