---
title: "[Taxonomy] - Edit a Taxonomy"
description: Edit a taxonomy to update its name or description in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/edit-a-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Edit a Taxonomy

This page explains how to edit an existing taxonomy in Contentstack, including where to find the Taxonomy settings and what fields can be updated. It is intended for developers or stack administrators who manage taxonomies and need to update taxonomy details after creation.

## Edit a Taxonomy

Once created, you can edit a taxonomy to make changes such as update its name or description.

To edit a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to edit a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Select the taxonomy you want to edit and click the vertical ellipsis in the **Actions **column.
- Click the **Edit** button.
- In the **Edit Taxonomy** modal, you can edit the Taxonomy **Name **or **Description** but not the Taxonomy **UID**. Once done, click **Update** to save your changes.

## API Reference

To edit taxonomies via the API, refer to the [Update a Taxonomy](../../../api-docs/api-detail/content-management-api.md#update-a-taxonomy) API request.

## Common questions

### Can I edit a taxonomy UID after it is created?
No. In the **Edit Taxonomy** modal, you can edit the Taxonomy **Name **or **Description** but not the Taxonomy **UID**.

### Where do I find the Taxonomy settings in a stack?
Navigate to the “Settings” icon (press “S”), and select **Taxonomy**.

### Is there an API to edit taxonomies?
Yes. Refer to the [Update a Taxonomy](../../../api-docs/api-detail/content-management-api.md#update-a-taxonomy) API request.

### What changes can I make when editing a taxonomy?
You can update its name or description.