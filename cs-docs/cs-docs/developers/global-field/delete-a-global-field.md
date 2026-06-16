---
title: "[Global Field] - Delete a Global Field"
description: How to delete a Global field in Contentstack and related considerations, including API reference.
url: https://www.contentstack.com/docs/developers/global-field/delete-a-global-field
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Global Field] - Delete a Global Field

This page explains how to delete a Global field in Contentstack, including warnings about data impact and a link to the API method. It is intended for developers and content modelers who manage Content Models and Global Fields, and should be used when a Global field is no longer needed and you want to remove it safely.

## Delete a Global Field

Global fields in Contentstack allow you to reuse sets of fields across multiple content types. However, if a Global field is no longer needed, you can delete it safely. Follow this guide to remove a Global field from your stack while preserving content integrity.

To delete a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to delete a Global field.
- Click the **Content Models** icon in the left navigation panel and select **Global Fields** in the left panel.
- Locate the Global field you want to delete. Click the vertical ellipsis in the **Actions** column next to it and select **Delete**.
- In the **Delete Global Field** modal, enter the name of the Global field and confirm the action by clicking Delete.

**Warning:**
- Although you can restore a deleted Global field from the trash, its data will be permanently removed from all entries where it was used.
- If the Global field is nested within another Global field, deleting it will also affect all content types and entries that reference the parent Global field.

Deleting a Global field should be done carefully to avoid data loss in your content types. Always review dependencies before proceeding to ensure a smooth content management experience.

## API Reference

To delete a Global field via API, refer to the [Delete Global Field](/docs/developers/apis/content-management-api#delete-global-field) API request.

## Common questions

### Can I restore a deleted Global field?
Yes. Although you can restore a deleted Global field from the trash, its data will be permanently removed from all entries where it was used.

### What happens to entries that used the deleted Global field?
Its data will be permanently removed from all entries where it was used.

### What if the Global field is nested inside another Global field?
If the Global field is nested within another Global field, deleting it will also affect all content types and entries that reference the parent Global field.

### Is there an API to delete a Global field?
Yes. To delete a Global field via API, refer to the [Delete Global Field](/docs/developers/apis/content-management-api#delete-global-field) API request.