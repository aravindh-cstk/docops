---
title: "Table App Installation Guide"
description: "The Marketplace Table app lets you add a table as a custom field in your content type."
url: /marketplace/table
---

# Table App Installation Guide

## Table App Installation Guide

Contentstack’s Table app enables you to add a table as a custom field in your content type, allowing Content Managers to input data in a tabular format within entries. The Table app lets you add table headings in rows and subsequent data in columns. You can perform various operations such as sorting, inserting, and deleting rows and columns.

**Note:** The number of rows and columns in a table depends on the size of the JSON data to be stored. Currently, only **10 KB** of JSON data can be stored via the Custom Field.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Table app within your stack.

## Steps for Execution

1.  [Install and Configure the Table app in Marketplace](#install-and-configure-the-table-app-in-marketplace)
2.  [Use the Table app within your Entry](#use-the-table-app-within-your-entry)

## Install and Configure the Table App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
2.  Click **Apps** from the left panel.
3.  Within the Marketplace, you can see all the available apps. Hover over the **Table** app and click **Install**.  
    ![Marketplace_table.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4d46f756dfaa427/6a0194ca5a57717f03219e2a/Marketplace_table.png)
4.  In the pop-up window, select the stack where you want to install the Table app, accept the **Terms of Service**, and click the **Install** button.  
    ![Install_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea14609020732206/669510c625847000b8dcbce1/Install_App.png)
5.  On the **UI Locations** tab, you can see the predefined app location. The only available UI location for the Table app is the **Custom Field**. If you disable this UI location, you will not be able to save the configuration as it requires at least one UI location to be enabled.  
    ![Configuration_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30fbb4c6afd9a527/66950ca7fbce31ab13239d00/Configuration_Screen.png)
    
    **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
    
6.  Click **Open Stack** to start using the Table application.

## Use the Table App within your Entry

To use the Table app within an entry of your stack, follow the steps given below:

1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:  
    ![New_Content_Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1463bc74e17189e/669510c6d316c71770b314be/New_Content_Type.png)
3.  In the **Content Type Builder** page, add a [Custom field](/docs/headless-cms/custom) in your content type by clicking the **Insert a field** link represented by a + sign.
4.  On the **Custom Field Editor Properties** modal:
    1.  Enter a **Display Name** for the field, for example Table.
    2.  (Optional) Enter an **Instruction Value** and **Help Text** for the field.
    3.  Click inside the **Select Extension/App** field.
    4.  The **Select Extensions or App** modal will open. From this modal, select **Table** from the list of plugins, and then click **Proceed**.  
        ![Select_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47fa1445be72cd4e/669510c5815b2b425892abb8/Select_App.png)
        
        This adds Table to the custom field.
        
        ![Custom_Field_App_Showing.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta379f78a1a06de1f/66950ca71e4e7ec919b6671b/Custom_Field_App_Showing.png)
5.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
6.  To use the Table app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, go to the **Entries** page and click **\+ New Entry**.
7.  In the **Select Content Type** modal, select the content type that we created above and click the **Proceed** button.
8.  The entry opens. You will see the custom field with the **\+ Add Table** button. Click on it to add the new table.  
    ![Add_Table.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta45f488ff994c035/6698d21b06a6fa6a4e7ca1e1/Add_Table.png)
    
    You can see the Table in the Custom field on your entry page, as shown below:
    
    ![Table_In_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf77b79ec303da53/6698ef2d06a6fa35177ca339/Table_In_Entry.png)
    
    **Note:** You can use the keyboard shortcuts to perform certain actions such as bold, italics, etc. to highlight a particular table item.
    
9.  Here's how you can work with the available options:
    1.  Click the icon as shown below. If you want to add a header row or a column, you can simply enable the respective toggle. If you want to delete the entire table, click the **Delete Table** option.  
        ![Header_Row_Column.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8638726ef3c32b51/6698d21c9fecd88413d57e7e/Header_Row_Column.png)
    2.  If you want to view the table in full-screen, click the **Full Screen** icon as shown below:  
        ![Full_Screen_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c9ecf45ab6751a0/6698ecfa79f2045698392124/Full_Screen_Icon.png)
    3.  You can then start entering the data in the table. Once you have entered the data in the table, click the icon (as shown below) and select the respective options if you want to add or delete a row or a column.  
        ![Click_to_View_Insert_Options.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7b91ce65291a174/6698ecfa54407534a3fecadb/Click_to_View_Insert_Options.png)
    4.  To import or export the table data in a CSV file, click the **Import CSV File** and **Export CSV File** icons respectively.  
        
        ![Import_Export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bf102a86b93ad0b/6698ecfa54407517fefecadf/Import_Export.png)
    5.  You can also search for a particular item in the table by using the Search option.  
        ![Search_Bar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf122850897fe9892/669510c577a780e446448ae7/Search_Bar.png)
    6.  Using the drag handle, you can drag and drop the rows to change the sequence.  
        ![Drag_Drop.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc190aa485a0e40d0/6698ecfae13bf8ba5cf85b08/Drag_Drop.png)
10.  After adding your table, **Save** and **Publish** your entry.
