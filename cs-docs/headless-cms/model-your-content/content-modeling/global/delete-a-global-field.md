---
title: "Delete a Global Field"
description: "Learn how to delete a Global field in Contentstack safely. Follow these steps to remove a Global field while ensuring data integrity in your content types."
url: /headless-cms/delete-a-global-field
uid: blt192b74b3728588f6
---

# Delete a Global Field

## Delete a Global Field

Global fields in Contentstack allow you to reuse sets of fields across multiple content types. However, if a Global field is no longer needed, you can delete it safely. Follow this guide to remove a Global field from your stack while preserving content integrity.

To delete a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to delete a Global field.
2.  Click the **Content Models** icon and select **Global Fields** in the left panel.
3.  Locate the Global field you want to delete. Click the vertical ellipsis in the **Actions** column next to it and select **Delete**.
4.  In the **Delete Global Field** modal, enter the name of the Global field and confirm the action by clicking Delete.

    ![Delete Global Field confirmation modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfeb1cc25de9f8263/67ffa3804851b564c7d2f203/1-Delete-a-Global-Field-1.gif)


**Warning:**

-   Although you can restore a deleted Global field from the trash, its data will be permanently removed from all entries where it was used.
-   If the Global field is nested within another Global field, deleting it will also affect all content types and entries that reference the parent Global field.

Deleting a Global field should be done carefully to avoid data loss in your content types. Always review dependencies before proceeding to ensure a smooth content management experience.

## API Reference

To delete a Global field via API, refer to the [Delete Global Field](/docs/developers/apis/content-management-api/global-fields#delete-global-field) API request.
