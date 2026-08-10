---
title: "Edit a Content Type"
description: "Learn how to edit a content type in Contentstack, including updating fields, properties, and schema safely."
url: /headless-cms/edit-a-content-type
---

# Edit a Content Type

## Edit a Content Type

After creating a [content type](/docs/headless-cms/about-content-types), you can edit it to add, remove, or modify [fields](/docs/headless-cms/about-fields) and their [properties](/docs/headless-cms/about-field-properties).

**Warning:** Removing a field, changing its data type, or toggling the **Multiple** attribute can result in data loss. Refer to the [Content Type Change Management](/docs/headless-cms/content-type-change-management) document for safe guidelines on making schema changes.

To edit a content type, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the "Content Models" icon.
2.  Click the vertical ellipsis in the **Actions** column next to the content type, then select **Settings** to update its name, description, or type (Single or Multiple).
3.  To open the content type and edit its schema, click the content type title. You can also click the vertical ellipsis in the **Actions** column and select **Edit**.
    
    ![Edit_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3663c8f50dbaa8a2/68dc36b4c471fcb250cf0487/Edit_CT.png)
    
4.  The content type builder page opens, where you can modify the schema:
    1.  **Add fields:** Click the “Insert a field” (+) icon.
    2.  **Remove fields:** Click the “Delete” icon next to the field.
    3.  **Edit field properties:** Click the “Properties” (gear) icon for the field, then update details in the **Properties** section.
    4.  **Reorder fields:** Drag and drop the “Move” icon next to the field name.

**Note:** After you save changes to the content type schema, Contentstack automatically creates a new version of its schema. To compare schema changes between versions, refer to the [Content Type Versioning](/docs/headless-cms/content-type-versioning) document.

Editing a content type lets you refine your content model as your project evolves. Use the builder tools carefully and follow change management guidelines to ensure your updates do not impact existing content or workflows.

## API Reference

To edit a content type via API, refer to the [Update Content Type](/docs/developers/apis/content-management-api/content-types#update-content-type) API Request.
