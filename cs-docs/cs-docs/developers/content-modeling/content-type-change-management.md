---
title: "[Content Modeling] - Content Type Change Management"
description: Guidelines and best practices for safely modifying content type schemas after entries have been created and published, including adding, editing, deleting, and restoring fields.
url: https://www.contentstack.com/docs/headless-cms/content-type-change-management
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Content Modeling] - Content Type Change Management

This page explains how to safely manage changes to a content type schema after entries have already been created and published, including how to add, edit, delete, and restore fields. It is intended for developers and content managers who need to evolve content models without causing data loss or disrupting live sites/apps, and should be used whenever planning schema updates across staging and production environments.

### Content Type Change Management

When modifying a [content type](/docs/developers/create-content-types/about-content-types) schema after creating and publishing entries, there is a risk of data loss. However, by following specific guidelines, you can make changes safely without impacting the content on your live site or app.

**Note:** Any updates made to a content type schema are applied immediately and reflected in all existing entries across environments. However, these changes will not impact already published entries except for references. References rely on the latest schema and may not work as expected for already published entries if they haven’t been republished with the updated schema.

This guide explains the types of schema changes you can make and the best practices for implementing them safely. The scenarios covered include:
- Adding a new field to an existing content type
- Editing an existing field of an existing content type
- Deleting a field from an existing content type
- Making multiple or major changes to the content type schema

To understand these scenarios, we will consider an example. You have a content type named **Product,** and there are several [fields](/docs/developers/create-content-types/about-fields) within the **Product** content type:
- **Name:** [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) (String data type)
- **Price:** Single Line Textbox (String data type)
- **Description:** [Rich Text Editor](/docs/developers/create-content-types/rich-text-editor) (String data type) for displaying the product’s description

You have [created](/docs/content-managers/working-with-entries/create-an-entry) and [published](/docs/content-managers/working-with-entries/publish-an-entry) multiple entries for the “Product” content type. Now let’s look at the changes that you want to perform and the steps to be followed to perform the changes.

## Add a New Field

Adding a new field to a content type does not cause data loss since it does not modify or delete existing fields.

You want to add a **Manufacturer** (Single Line Textbox) field to the **Product** content type. To do this, perform the following steps:
- **Edit the content type:** Go to the [stack](/docs/developers/set-up-stack/about-stack) and [edit](/docs/developers/create-content-types/edit-a-content-type) the **Product** content type.
- **Add the new field:** Click the “Insert a field” (+) button and select **Single Line Textbox**.
- **Publish entries on staging:** [Edit existing entries](/docs/content-managers/working-with-entries/edit-an-entry) to populate data in the new field, then save and [publish](/docs/content-managers/publish-content) these entries on the staging environment.
- **Make changes to UI code:** Add the field’s UID to your codebase to display its content. Push the changes to staging for validation.
- **Publish/push on production:** Once tested, publish the entries and push the updated code to production.

## Edit an Existing Field in an Existing Content Type

Editing a field in an existing content type can lead to potential data loss.

For example, if you change the data type of the **Price** field from String to Number, all existing data in the Price field (with the String data type) will be lost.

To prevent data loss, follow these steps:
- **Add a new field:** Edit the **Product** content type and add a new field: **Price_new**.
- **Edit entries:** Manually [edit](/docs/content-managers/working-with-entries/edit-an-entry) all the existing entries, and enter new data in the **Price_new** field.
- **Publish entries:** Publish the updated entries to the staging environment.
- **Make changes to UI code:** Replace the `price` UID with `price_new` UID in your presentation code.
- **Test and publish:** If staging works correctly, publish the entries and push the updated code to production.
- **Delete the old field:** After confirming everything is functioning, delete the original Price field from the Product content type.

## Delete a Field from a Content Type

**Warning:** When you delete a field, the associated data is removed temporarily but can be restored if necessary.

For instance, if you want to delete the Description field from the Product content type, follow these steps:
- **Make changes to UI code:** If you have used the `description` UID anywhere in your code, remove it.
- **Delete the field:** Edit the **Product** content type and delete the **Description** field.
- **Publish entries:** Save and publish the entries again on staging.
- **Test on staging:** Verify the updates on staging.
- **Publish/push on production:** If staging is successful, publish the entries and push the updated code to production.

## Restore Content of the Deleted Field

If you accidentally delete a field along with its data from an existing content type and you want to restore the field along with the data, you will be able to do so. For example, if you delete the **Price** field from the “Product” content type, all data for the **Price** field will be lost temporarily.

You can restore the field and its data using two methods: through the UI or through the API.

### Restore Content Through UI

To retrieve the field data using the UI, follow these steps:
- **Add the deleted field to the content type:** Edit the content type and re-add the deleted field. Ensure that you use the exact UID of the original field; otherwise, the data cannot be retrieved. If you are unsure of the field's UID, consider using the [API method](/docs/developers/content-modeling/content-type-change-management#restore-content-through-api) instead.
- **Retrieve the required version of the entries:** [Compare the versions](/docs/content-managers/entry-versions/compare-entry-versions) of each entry to identify the version containing the data for the restored field. Repeat this process for all entries in the content type.
- **Save the entry to make it the latest version:** Open the retrieved version of each entry and save it to make it the latest version. Perform this step for all entries in the content type.

### Restore Content Through API

To retrieve the field data using the API, follow these steps:
- **Find the version of the content type that includes the field:** Use the [Get a Single Content Type](/docs/developers/apis/content-management-api#get-a-single-content-type) API request to retrieve the current version of the content type. The version number will be provided in the response body. Then, using the same API request and specifying the version parameter, locate the content type version that includes the deleted field in its schema.
- **Restore the content type version that contains the field:** Copy the schema from the response body of the version that contains the deleted field. Remove all parameters except `title`, `uid`, `schema`, and `options`. Use the [Update Content Type](/docs/developers/apis/content-management-api#update-content-type) API request and include the modified schema in the request body to restore the content type schema with the deleted field.
- **Retrieve the entries:** Use the [Get a Single Entry](/docs/developers/apis/content-management-api#get-a-single-entry) API request to query the latest version of each entry. If the required data is not present in the latest version, query previous versions until you locate the version containing the data for the deleted field. Repeat this process for all entries of the content type.
- **Update the entries:** Copy the response body of the required entry version from the above API request. Use the [Update an Entry](/docs/developers/apis/content-management-api#update-an-entry) API request to update each entry with the restored data. Perform this step for all entries in the content type to ensure consistency.

## Make Major Changes to the Schema of a Content Type

When planning significant changes to the schema of a content type, follow these steps to prevent data loss:
- **Create a copy of the content type:** [Copy](/docs/developers/create-content-types/copy-a-content-type) the existing content type.
- **Edit the schema:** Modify the copied content type as required.
- **Create and publish entries:** Populate the new content type and publish these entries in the staging environment.
- **Make changes to UI code:** Update references to the new content type fields in your code.
- **Test on staging:** Deploy the updated code and entries to the staging environment.
- **Publish/push on production:** Once testing is successful, publish the entries and deploy the updated code to production.
- **Delete old content type:** After confirming that the new content type is functional, [delete](/docs/developers/create-content-types/delete-a-content-type) the old content type.

By following these structured guidelines, you can safely make changes to content type schemas while minimizing risks of data loss or live-site disruptions. Always test changes in a staging environment before deploying them to production.

## Common questions

### Do content type schema updates affect existing entries immediately?
Any updates made to a content type schema are applied immediately and reflected in all existing entries across environments.

### Will schema changes impact already published entries?
These changes will not impact already published entries except for references.

### What is the safest way to change a field’s data type without losing data?
Add a new field, update and publish entries on staging, update UI code to use the new field UID, test, publish to production, and then delete the old field.

### Can deleted field data be recovered?
When you delete a field, the associated data is removed temporarily but can be restored if necessary, either through the UI or through the API.