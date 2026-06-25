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
- Within the **Configure Action Step**, click the **Airtable** connector.
- Under **Choose an Action** tab, select the **Create Record** action.
- Click the **+ Add New Account** button to add your Airtable account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base **to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to create a new record(s) in the selected table.
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
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit** button.

You have successfully created a record(s) in the selected table in Airtable.

### Delete a Record

This action lets you delete a single record in a table.
- Under **Choose an Action** tab, select the **Delete a Record** action.
- Click the **+ Add New Account** button to add your Airtable account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base** to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.
- Enter an **Account Name **and then click **Save**.
- Select a** Database Name/ID **present in the Airtable account.
- Select a **Table Name/ID** to delete a record.
- In the **Record ID** field, select the ID of the record you want to delete from the **Lookup** dropdown.
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Once set, click the** Save and Exit** button.

You have successfully deleted a record in the selected table in Airtable.

### Get Single Record

This action lets you fetch the details of a single record from a table.
- Under **Choose an Action** tab, select the** Get Single Record **action.
- Click the **+ Add New Account **button to add your Airtable account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base **to add a new database or select an existing one. Click** Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to fetch details of a record from the selected table.
- In the **Record ID** field, select the ID of the record you want to fetch from the **Lookup** dropdown.
- Click the **Proceed** button.
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit** button.

You have successfully fetched the details of a single record from the selected table.

### Get Records

This action lets you fetch the details of multiple records in a table.
- Under **Choose an Action** tab, select the **Get Records **action.
- Click the **+ Add New Account **button to add your Airtable account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click **+ Add a base** to add a new database or select an existing one. Click **Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID **to fetch details of a record(s) present in the table.
- In the **Number of records** field, enter the number of records you want to fetch from the selected table.**Note: **You can fetch up to 100 records.
- **[Optional]** Enable the **Show optional fields** toggle button to display the **Sort ****Column Name**, **Order of Sorting**, and **Airtable Filter** field.
Column Name sorts the records based on the column names. The Order of Sorting field sorts the records in Ascending or Descending order. You can add a filter formula to fetch the record.**Additional Resource:** To learn more, refer to the [Formula field reference](https://support.airtable.com/docs/formula-field-reference#numeric-operators-and-functions) document.
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Once set, click the **Save and Exit** button.

You have successfully fetched the details of multiple records from the selected table.

### Update a Record

This action lets you update a record in a table.
- Under **Choose an Action **tab, select the **Update a Record** action.
- Click the **+ Add New Account** button to add your Airtable account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- Click** + Add a base** to add a new database or select an existing one. Click** Grant access** to allow access to Airtable.
- Enter an **Account Name** and then click **Save**.
- Select a **Database Name/ID** present in the Airtable account.
- Select a **Table Name/ID** to update a new record in the table.
- In the **Record ID** field, select the ID of the record you want to update from the **Lookup** dropdown.
- In the **Record Data** field, provide the value for the record you want to update.**Note:** You need to add the values for each column to update the record. If any column value is not updated, then it will remain empty
- Click the **Proceed** button.
- Click the** Test Action **button to test the configured action.
- Once set, click the **Save and Exit **button.

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