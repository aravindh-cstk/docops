---
title: "[Create Content Types] - Edit a Content Type"
description: Instructions for editing a Contentstack content type, including updating fields and schema properties, with warnings about data loss and links to related guides and API reference.
url: https://www.contentstack.com/docs/headless-cms/edit-a-content-type
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Create Content Types] - Edit a Content Type

This page explains how to edit an existing content type in Contentstack, including updating its settings and modifying its schema (fields and properties). It is intended for developers and content modelers who manage content models and should be used when you need to refine a content type after it has been created.

## Edit a Content Type

After creating a [content type](./about-content-types.md), you can edit it to add, remove, or modify [fields](./about-fields.md) and their [properties](./about-field-properties.md).

**Warning:** Removing a field, changing its data type, or toggling the **Multiple** attribute can result in data loss. Refer to the [Content Type Change Management](../content-modeling/content-type-change-management.md) document for safe guidelines on making schema changes.

To edit a content type, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the "Content Models" icon.
- Click the vertical ellipsis in the **Actions** column next to the content type, then select **Settings** to update its name, description, or type (Single or Multiple).
- To open the content type and edit its schema, click the content type title. You can also click the vertical ellipsis in the **Actions** column and select **Edit**.![Edit_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3663c8f50dbaa8a2/68dc36b4c471fcb250cf0487/Edit_CT.png)
- The content type builder page opens, where you can modify the schema:**Add fields:** Click the “Insert a field” (+) icon.
- **Remove fields:** Click the “Delete” icon next to the field.
- **Edit field properties:** Click the “Properties” (gear) icon for the field, then update details in the **Properties** section.
- **Reorder fields:** Drag and drop the “Move” icon next to the field name.

**Note:** After you save changes to the content type schema, Contentstack automatically creates a new version of its schema. To compare schema changes between versions, refer to the [Content Type Versioning](./content-type-versioning.md) document.

Editing a content type lets you refine your content model as your project evolves. Use the builder tools carefully and follow change management guidelines to ensure your updates do not impact existing content or workflows.

## API Reference

To edit a content type via API, refer to the [Update Content Type](../../../api-docs/api-detail/content-management-api.md#update-content-type) API Request.

## Common questions

**Q: What changes can cause data loss when editing a content type?**  
A: Removing a field, changing its data type, or toggling the **Multiple** attribute can result in data loss.

**Q: Where do I change a content type’s name, description, or type (Single or Multiple)?**  
A: Click the vertical ellipsis in the **Actions** column next to the content type, then select **Settings**.

**Q: How can I compare schema changes after editing a content type?**  
A: After saving changes, Contentstack automatically creates a new version of the schema; refer to the [Content Type Versioning](./content-type-versioning.md) document to compare changes between versions.

**Q: Is there an API to edit a content type?**  
A: Yes. Refer to the [Update Content Type](../../../api-docs/api-detail/content-management-api.md#update-content-type) API Request.