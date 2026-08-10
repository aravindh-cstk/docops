---
title: "Content Type Change Management"
description: "Learn guidelines to safely manage content type schema changes in Contentstack, ensuring no data loss or live site issues."
url: /headless-cms/content-type-change-management
---

# Content Type Change Management

## Content Type Change Management

When modifying a [content type](/docs/headless-cms/about-content-types) schema after creating and publishing entries, there is a risk of data loss. However, by following specific guidelines, you can make changes safely without impacting the content on your live site or app.

**Note:** Any updates made to a content type schema are applied immediately and reflected in all existing entries across environments. However, these changes will not impact already published entries except for references. References rely on the latest schema and may not work as expected for already published entries if they haven’t been republished with the updated schema.

This guide explains the types of schema changes you can make and the best practices for implementing them safely. The scenarios covered include:

1.  Adding a new field to an existing content type
2.  Editing an existing field of an existing content type
3.  Deleting a field from an existing content type
4.  Making multiple or major changes to the content type schema

To understand these scenarios, we will consider an example. You have a content type named **Product,** and there are several [fields](/docs/headless-cms/about-fields) within the **Product** content type:

1.  **Name:** [Single Line Textbox](/docs/headless-cms/single-line-textbox) (String data type)
2.  **Price:** Single Line Textbox (String data type)
3.  **Description:** [Rich Text Editor](/docs/headless-cms/rich-text-editor) (String data type) for displaying the product’s description

You have [created](/docs/headless-cms/create-an-entry) and [published](/docs/headless-cms/publish-an-entry) multiple entries for the “Product” content type. Now let’s look at the changes that you want to perform and the steps to be followed to perform the changes.

## Add a New Field

Adding a new field to a content type does not cause data loss since it does not modify or delete existing fields.

You want to add a **Manufacturer** (Single Line Textbox) field to the **Product** content type. To do this, perform the following steps:

1.  **Edit the content type:** Go to the [stack](/docs/headless-cms/about-stack) and [edit](/docs/headless-cms/edit-a-content-type) the **Product** content type.
2.  **Add the new field:** Click the “Insert a field” (+) button and select **Single Line Textbox**.
3.  **Publish entries on staging:** [Edit existing entries](/docs/headless-cms/edit-an-entry) to populate data in the new field, then save and [publish](/docs/headless-cms/publish-an-entry) these entries on the staging environment.
4.  **Make changes to UI code:** Add the field’s UID to your codebase to display its content. Push the changes to staging for validation.
5.  **Publish/push on production:** Once tested, publish the entries and push the updated code to production.

## Edit an Existing Field in an Existing Content Type

Editing a field in an existing content type can lead to potential data loss.

For example, if you change the data type of the **Price** field from String to Number, all existing data in the Price field (with the String data type) will be lost.

To prevent data loss, follow these steps:

1.  **Add a new field:** Edit the **Product** content type and add a new field: **Price\_new**.
2.  **Edit entries:** Manually [edit](/docs/headless-cms/edit-an-entry) all the existing entries, and enter new data in the **Price\_new** field.
3.  **Publish entries:** Publish the updated entries to the staging environment.
4.  **Make changes to UI code:** Replace the price UID with price\_new UID in your presentation code.
5.  **Test and publish:** If staging works correctly, publish the entries and push the updated code to production.
6.  **Delete the old field:** After confirming everything is functioning, delete the original Price field from the Product content type.

## Delete a Field from a Content Type

**Warning:** When you delete a field, the associated data is removed temporarily but can be restored if necessary.

For instance, if you want to delete the Description field from the Product content type, follow these steps:

1.  **Make changes to UI code:** If you have used the description UID anywhere in your code, remove it.
2.  **Delete the field:** Edit the **Product** content type and delete the **Description** field.
3.  **Publish entries:** Save and publish the entries again on staging.
4.  **Test on staging:** Verify the updates on staging.
5.  **Publish/push on production:** If staging is successful, publish the entries and push the updated code to production.

## Restore Content of the Deleted Field

If you accidentally delete a field along with its data from an existing content type and you want to restore the field along with the data, you will be able to do so. For example, if you delete the **Price** field from the “Product” content type, all data for the **Price** field will be lost temporarily.

You can restore the field and its data using two methods: through the UI or through the API.

### Restore Content Through UI

To retrieve the field data using the UI, follow these steps:

1.  **Add the deleted field to the content type:** Edit the content type and re-add the deleted field. Ensure that you use the exact UID of the original field; otherwise, the data cannot be retrieved. If you are unsure of the field's UID, consider using the [API method](/docs/headless-cms/content-type-change-management#restore-content-through-api) instead.
2.  **Retrieve the required version of the entries:** [Compare the versions](/docs/headless-cms/compare-entry-versions) of each entry to identify the version containing the data for the restored field. Repeat this process for all entries in the content type.
3.  **Save the entry to make it the latest version:** Open the retrieved version of each entry and save it to make it the latest version. Perform this step for all entries in the content type.

### Restore Content Through API

To retrieve the field data using the API, follow these steps:

1.  **Find the version of the content type that includes the field:** Use the [Get a Single Content Type](/docs/developers/apis/content-management-api/content-types#get-a-single-content-type) API request to retrieve the current version of the content type. The version number will be provided in the response body. Then, using the same API request and specifying the version parameter, locate the content type version that includes the deleted field in its schema.
2.  **Restore the content type version that contains the field:** Copy the schema from the response body of the version that contains the deleted field. Remove all parameters except title, uid, schema, and options. Use the [Update Content Type](/docs/developers/apis/content-management-api/content-types#update-content-type) API request and include the modified schema in the request body to restore the content type schema with the deleted field.
3.  **Retrieve the entries:** Use the [Get a Single Entry](/docs/developers/apis/content-management-api/entries#get-a-single-entry) API request to query the latest version of each entry. If the required data is not present in the latest version, query previous versions until you locate the version containing the data for the deleted field. Repeat this process for all entries of the content type.
4.  **Update the entries:** Copy the response body of the required entry version from the above API request. Use the [Update an Entry](/docs/developers/apis/content-management-api/entries#update-an-entry) API request to update each entry with the restored data. Perform this step for all entries in the content type to ensure consistency.

## Make Major Changes to the Schema of a Content Type

When planning significant changes to the schema of a content type, follow these steps to prevent data loss:

1.  **Create a copy of the content type:** [Copy](/docs/headless-cms/copy-a-content-type) the existing content type.
2.  **Edit the schema:** Modify the copied content type as required.
3.  **Create and publish entries:** Populate the new content type and publish these entries in the staging environment.
4.  **Make changes to UI code:** Update references to the new content type fields in your code.
5.  **Test on staging:** Deploy the updated code and entries to the staging environment.
6.  **Publish/push on production:** Once testing is successful, publish the entries and deploy the updated code to production.
7.  **Delete old content type:** After confirming that the new content type is functional, [delete](/docs/headless-cms/delete-a-content-type) the old content type.

By following these structured guidelines, you can safely make changes to content type schemas while minimizing risks of data loss or live-site disruptions. Always test changes in a staging environment before deploying them to production.
