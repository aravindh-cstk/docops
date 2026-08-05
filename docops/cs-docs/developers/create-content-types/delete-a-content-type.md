---
title: "[Set Up Your Project] - Delete a Content Type"
description: Delete a Content Type
url: https://www.contentstack.com/docs/headless-cms/delete-a-content-type
product: Contentstack
doc_type: how-to
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Delete a Content Type

This page explains how to delete a content type in Contentstack, including required permissions and what happens to associated entries. It is intended for developers (and stack administrators) managing content models, and should be used when you need to remove an existing content type from a stack.

## Delete a Content Type

Contentstack allows you to delete a [content type](./about-content-types.md) that you created in your [stack](../set-up-stack/about-stack.md).

**Note**: Unless you are the Owner or Admin of the stack, you cannot delete content types created by other stakeholders.

To delete a content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your stack, click on the “Content Models” icon on the left navigation panel.
- Next, click on the ellipses under the **Actions** column (extreme right) for the corresponding content type you want to delete.
- Click on **Delete**.![delete-a-content-type-1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt377209beb80a3db0/65ca1a24dccfc62885aaefab/delete-a-content-type-1.png)
- Confirm the **Delete** action.![delete-a-content-type-2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c516b9a82de1bb4/65ca1a2423dbef3c16ffe2a1/delete-a-content-type-2.png)

**Warning:** These steps will move the content type along with all the [entries](../../content-managers/author-content/about-entries.md) within it to the [trash](../manage-trash/about-trash.md). But, before you delete anything, we suggest you check out our article on [Content Type Change Management](../content-modeling/content-type-change-management.md#make-major-changes-to-the-schema-of-a-content-type).

## API Reference

To delete your content type via API request, refer to the [Delete a Content Type](../../../api-docs/api-detail/content-management-api.md#delete-content-type) API request.

## Common questions

**Can I delete a content type created by someone else?**  
Unless you are the Owner or Admin of the stack, you cannot delete content types created by other stakeholders.

**What happens to entries when I delete a content type?**  
These steps will move the content type along with all the entries within it to the trash.

**Where can I find the API request to delete a content type?**  
Refer to the [Delete a Content Type](../../../api-docs/api-detail/content-management-api.md#delete-content-type) API request.

**What should I review before deleting a content type?**  
Check out the article on [Content Type Change Management](../content-modeling/content-type-change-management.md#make-major-changes-to-the-schema-of-a-content-type).