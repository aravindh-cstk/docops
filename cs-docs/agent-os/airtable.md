---
title: Automations guides and connectors - Airtable
description: Airtable connector actions for creating, updating, deleting, and fetching records in Airtable.
url: https://www.contentstack.com/docs/agent-os/airtable
product: Automations guides and connectors
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Airtable

This page describes how to set up and use the Airtable connector in Automations, including how to configure actions to create, update, delete, and fetch Airtable records. It is intended for developers or automation builders who need to connect an automation workflow to Airtable and should be used when configuring Airtable action steps.

## Airtable

The Airtable connector lets you create/update/delete and fetch the records in Airtable.

## Set up Airtable Connector

The Airtable connector lets you perform the following actions:
- [Create Record](#create-record)
- [Delete a Record](#delete-a-record)
- [Get Single Record](#get-single-record)
- [Get Records](#get-records)
- [Update a Record](#update-a-record)

Let’s look at each of them in detail.

### Create Record

This action lets you create a record(s) in a table.
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Airtable** connector.![Select_the_Connector_Airtable.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1fa84887af01fe9c/6527c950a0980f6a14ede99a/Select_the_Connector_Airtable.png)
- Under **Choose an Action** tab, select the **Create Record** action.![Select_the_Create_Record_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt009dd9cb6ad3a20e/645c88d39a25be48d043d1b6/Select_the_Create_Record_Action.png)
- Click the **+ Add New Account** button to add your Airtable account.![Add_New_Account_Create_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8520858a8f8362c8/645c88a522f998927fc598d4/Add_New_Account_Create_Record.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.![Click_the_Authorize_button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53ae03d3be81a97e/645c88b032acc846f05ee2f2/Click_the_Authorize_button.png)
- Click **+ Add a base **to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.![Grant_access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8585c09ad23174b/645c88b1c7969599f0e27550/Grant_access.png)
- Enter an **Account Name** and then click **Save**.![Save_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b14333e512b2e94/645c88bb6f143f8e2a6d081e/Save_Account.png)
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to create a new record(s) in the selected table.![Select_the_Database_Table_fields_Create_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf984f02a91362554/645c88dfe4e69e19530375f5/Select_the_Database_Table_fields_Create_Record.png)
- In the **Record Data** field, provide the value for the record(s) you want to create.**Note:** Below is a sample format to create the records. Here Name, Notes, and Status are column names of the table. You must provide values in key-value pairs.

```
{
        "records" : [
            "fields": {
                "Name" : "Demo",
                "Notes" : "Demo notes",
                "Status" : "Done"
            }
        ]
    }
```
- Click the **Proceed** button.
- Click the **Test Action **button to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f2f39078eb1680c/645c88e0c796956b75e27558/Test_Action.png)
- Once set, click the **Save and Exit** button.![Save_Exit_Create_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt015b68fd1cc5005e/645c88bb897f62dffb44c103/Save_Exit_Create_Record.png)

You have successfully created a record(s) in the selected table in Airtable.

### Delete a Record

This action lets you delete a single record in a table.
- Under **Choose an Action** tab, select the **Delete a Record** action.![Select_the_Delete_a_Record_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5116708cbdc3dfd3/645c88df805b40d7ab5eba92/Select_the_Delete_a_Record_Action.png)
- Click the **+ Add New Account** button to add your Airtable account.![Add_New_Account_Delete_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7bc66226e6cdfc54/645c88a5190e6e158c6fd299/Add_New_Account_Delete_Record.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base** to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.
- Enter an **Account Name **and then click **Save**.
- Select a** Database Name/ID **present in the Airtable account.
- Select a **Table Name/ID** to delete a record.
- In the **Record ID** field, select the ID of the record you want to delete from the **Lookup** dropdown.![Select_Fields_Delete_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c0b6b814e15a57c/645c88d2897f62657844c109/Select_Fields_Delete_Action.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Once set, click the** Save and Exit** button.![Save_Exit_Delete_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08265d449314dd62/645c88c70906cc5400ce0b4e/Save_Exit_Delete_Record.png)

You have successfully deleted a record in the selected table in Airtable.

### Get Single Record

This action lets you fetch the details of a single record from a table.
- Under **Choose an Action** tab, select the** Get Single Record **action.![Select_the_Get_Single_Record_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte147dd8b8ae28894/645c88df8a8445053810143a/Select_the_Get_Single_Record_Action.png)
- Click the **+ Add New Account **button to add your Airtable account.![Add_New_Account_Get_Single_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbcb2d7fd62c89717/645c88b07578d5c607e6811d/Add_New_Account_Get_Single_Record.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base **to add a new database or select an existing one. Click** Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to fetch details of a record from the selected table.
- In the **Record ID** field, select the ID of the record you want to fetch from the **Lookup** dropdown.![Select_Fields_Get_Single_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3da977ae3a410a8/645c88d26f143f777a6d0822/Select_Fields_Get_Single_Record.png)
- Click the **Proceed** button.
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit** button.![Save_Exit_Get_Singal_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7192e85f2802fbbc/645c88c8805b40ccad5eba8a/Save_Exit_Get_Singal_Record.png)

You have successfully fetched the details of a single record from the selected table.

### Get Records

This action lets you fetch the details of multiple records in a table.
- Under **Choose an Action** tab, select the **Get Records **action.![Select_the_Get_Records_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf527c288141930f/645c88df528846b71b8b6877/Select_the_Get_Records_Action.png)
- Click the **+ Add New Account **button to add your Airtable account.![Add_New_Account_Get_Records](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31e25423eea2afca/645c88a58dbb8266c233f795/Add_New_Account_Get_Records.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base** to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID **to fetch details of a record(s) present in the table.
- In the **Number of records** field, enter the number of records you want to fetch from the selected table.

  **Note: **You can fetch up to 100 records.![Select_the_Fields_Get_Records](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt350146380cce8a15/645c88df562ac12dfd5fb048/Select_the_Fields_Get_Records.png)
- **[Optional]** Enable the **Show optional fields** toggle button to display the **Sort ****Column Name**, **Order of Sorting**, and **Airtable Filter** field.
Column Name sorts the records based on the column names. The Order of Sorting field sorts the records in Ascending or Descending order. You can add a filter formula to fetch the record.

  **Additional Resource:** To learn more, refer to the [Formula field reference](https://support.airtable.com/docs/formula-field-reference#numeric-operators-and-functions) document.![Show_Optional_Fields_Get_Records](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt130fb250568974e6/645c88e04ebc810c9433ec0c/Show_Optional_Fields_Get_Records.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Once set, click the **Save and Exit** button.![Save_Exit_Get_Records](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt994e28eb5f89f122/645c88c7065c95c773561210/Save_Exit_Get_Records.png)

You have successfully fetched the details of multiple records from the selected table.

### Update a Record

This action lets you update a record in a table.
- Under **Choose an Action **tab, select the **Update a Record** action.![Select_the_Update_Record_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f8c91488fe395c7/645c88df065c955657561214/Select_the_Update_Record_Action.png)
- Click the **+ Add New Account** button to add your Airtable account.![Add_Account_Update_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde979483112c73e2/645c88a5065c95f7d156120c/Add_Account_Update_Record.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click** + Add a base** to add a new database or select an existing one. Click** Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to update a new record in the table.
- In the **Record ID** field, select the ID of the record you want to update from the **Lookup** dropdown.![Update_Record_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc96e3ab1be78c2a9/645c88e0c79695bc65e27554/Update_Record_Fields.png)
- In the **Record Data** field, provide the value for the record you want to update.

  **Note:** You need to add the values for each column to update the record. If any column value is not updated, then it will remain empty![Record_Data_Update_Record](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec970be7b10bc977/645c88bbba05c555f06e4c52/Record_Data_Update_Record.png)
- Click the **Proceed** button.
- Click the** Test Action **button to test the configured action.
- Once set, click the **Save and Exit **button.![Save_Exit_Update_Records](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7b028241160ba67/645c88c8805b4083285eba8e/Save_Exit_Update_Records.png)

You have successfully updated a record in the selected table.

## Common questions

### Do I need to add a new Airtable account for each action?
You can click **+ Add New Account** when configuring an action step to add your Airtable account, and then select a **Database Name/ID** and **Table Name/ID** present in the Airtable account.

### How many records can I fetch with Get Records?
In the **Number of records** field, you can fetch up to 100 records.

### Where do I find the Record ID for Delete a Record, Get Single Record, or Update a Record?
In the **Record ID** field, select the ID of the record you want from the **Lookup** dropdown.

### Can I sort or filter results when using Get Records?
Enable the **Show optional fields** toggle button to display the **Sort ****Column Name**, **Order of Sorting**, and **Airtable Filter** field, and you can add a filter formula to fetch the record.

<!-- filename: automations-guides-and-connectors-airtable.md -->