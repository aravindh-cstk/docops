---
title: "[Global Field] - Add the Global Field to Content Types"
description: Add the Global Field to Content Types
url: https://www.contentstack.com/docs/headless-cms/add-the-global-field-to-content-types
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Global Field] - Add the Global Field to Content Types

This page explains how to add a Global field to a content type in Contentstack, including where to find the option in the UI and which Global field properties you can configure. It is intended for developers and content modelers who are building or maintaining content types and want to reuse structured fields across multiple models.

## Add the Global Field to Content Types

Global fields in Contentstack help you reuse structured sets of fields across multiple content types, ensuring consistency and reducing redundancy.

To add a Global field to your content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Click the **Content Models** icon in the left navigation panel to view the available content types.
- Select the content type you want to edit.
- Click the “+” (Insert a field) icon and select **Global** from the list.
- To modify the properties of the Global field, click the **Properties** icon. This opens a modal with two tabs: **Basic** and **Advanced**.
- In the **Basic** tab, under **Select Global Field**, choose your Global field. The selected field appears in your content type as a field, containing the required sub-fields.**Note:** You can add up to **25 Global** fields in a content type.
- You can modify the following properties of a Global field at any time:
  - [**Display Name**](../create-content-types/display-name.md): Defines how the field appears in the UI.
  - [**Unique ID**](../create-content-types/unique-id.md): A system-generated identifier for the field.
  - [**Instruction Value**](../create-content-types/instruction-value.md): Guides users in filling the field.
  - [**Help Text**](../create-content-types/help-text.md): Displays additional information to assist users.
  - [**Multiple**](../create-content-types/multiple.md): Allows multiple instances for the field.
  - [**Non-localizable**](../create-content-types/non-localizable.md): Set the field’s data only in the master-language entry.

**Note:**
- Any changes to a Global field, its subfields, or properties automatically apply to all content types using the field.
- Adding a Global field to a content type counts as **one field**, but all its subfields contribute to the total field count.

By adding a Global field, you ensure consistency, reduce duplication, and simplify updates.

## Common questions

### How many Global fields can I add to a content type?
You can add up to **25 Global** fields in a content type.

### If I update a Global field, do I need to update each content type that uses it?
No. Any changes to a Global field, its subfields, or properties automatically apply to all content types using the field.

### Does adding a Global field affect the total field count?
Yes. Adding a Global field to a content type counts as **one field**, but all its subfields contribute to the total field count.

### Where do I select which Global field to use?
In the **Basic** tab of the Global field properties modal, under **Select Global Field**, choose your Global field.