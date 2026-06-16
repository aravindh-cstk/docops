---
title: "[Set Up Your Project] - Delete a Content Type"
description: Delete a Content Type
url: https://www.contentstack.com/docs/developers/create-content-types/delete-a-content-type
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

Contentstack allows you to delete a [content type](/docs/developers/create-content-types/about-content-types) that you created in your [stack](/docs/developers/set-up-stack/about-stack).

**Note**: Unless you are the Owner or Admin of the stack, you cannot delete content types created by other stakeholders.

To delete a content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your stack, click on the “Content Models” icon on the left navigation panel.
- Next, click on the ellipses under the **Actions** column (extreme right) for the corresponding content type you want to delete.
- Click on **Delete**.
- Confirm the **Delete** action.

**Warning:** These steps will move the content type along with all the [entries](/docs/content-managers/working-with-entries/about-entries) within it to the [trash](https://www.contentstack.com/docs/developers/manage-trash/about-trash). But, before you delete anything, we suggest you check out our article on [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management#make-major-changes-to-the-schema-of-a-content-type).

## API Reference

To delete your content type via API request, refer to the [Delete a Content Type](/docs/developers/apis/content-management-api#delete-content-type) API request.

## Common questions

**Can I delete a content type created by someone else?**  
Unless you are the Owner or Admin of the stack, you cannot delete content types created by other stakeholders.

**What happens to entries when I delete a content type?**  
These steps will move the content type along with all the entries within it to the trash.

**Where can I find the API request to delete a content type?**  
Refer to the [Delete a Content Type](/docs/developers/apis/content-management-api#delete-content-type) API request.

**What should I review before deleting a content type?**  
Check out the article on [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management#make-major-changes-to-the-schema-of-a-content-type).