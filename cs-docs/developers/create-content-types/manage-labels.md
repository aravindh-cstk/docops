---
title: "[Set Up Your Project] - Manage Labels"
description: Manage labels in Contentstack to organize and categorize your content types, including adding, editing, and deleting labels, with related API reference links.
url: https://www.contentstack.com/docs/headless-cms/manage-labels
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Manage Labels

This page explains how to manage labels in Contentstack to organize and categorize content types. It is intended for developers and content modelers who need to add, edit, or delete labels in a stack, or reference the related Content Management API endpoints.

## Manage Labels

Labels in Contentstack provide an efficient way to organize and categorize your content types, making them easier to manage and access. Whether you need to add a new label, update an existing one, or remove labels that are no longer needed, Contentstack offers a simple and intuitive way to handle these actions.

To manage labels, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md), and click the “Content Models” icon in the left navigation panel to view the list of [content types](./about-content-types.md).
- Click the “Gear” icon.![Manage Labels Gear Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9c64f77933411dd/67a0481a4ddeeaf3b2c82fb5/ManageLabels-Gear.png)
- The **Manage Labels** modal appears. From this modal, you can:**Add a new label:** Click the **+ New Label** button, enter the desired label name, and save your changes.
- **Edit an existing label:** Update the label name or nest it under another label for better organization.
- **Delete a label:** Select the label you want to delete and confirm the action to remove it from the list.![Delete Label Confirmation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58875040b9c1814d/67a04a1bf6f9a61b370cf68f/ManageLabels-Edit-Del.png)

## API Reference

To manage labels via API, refer to the following API requests:
- [Add label](../../../api-docs/api-detail/content-management-api.md#add-label)
- [Update label](../../../api-docs/api-detail/content-management-api.md#update-label)
- [Delete label](../../../api-docs/api-detail/content-management-api.md#delete-label)

## Common questions

### Where do I find the Manage Labels option in the UI?
Go to your stack, click the “Content Models” icon in the left navigation panel, then click the “Gear” icon to open the **Manage Labels** modal.

### Can I organize labels under other labels?
Yes. You can edit an existing label and nest it under another label for better organization.

### Can I manage labels using the API instead of the UI?
Yes. Use the API Reference links for **Add label**, **Update label**, and **Delete label** to manage labels via API.

### What happens when I delete a label?
You select the label you want to delete and confirm the action to remove it from the list.