---
title: Select
description: Learn how to use the Select field in Contentstack to create predefined options, configure display types, and manage single or multiple selections in content types.
url: https://www.contentstack.com/docs/developers/create-content-types/select
product: Contentstack
doc_type: feature-guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-27
---

# Select

This page explains how to use the Select field in Contentstack to define predefined options for content entries. It is useful for developers and content managers who want to standardize input, enforce consistency, and control how values are selected and stored within content types.

## Select

The Select field allows users to choose from a predefined set of options. Use this field to standardize input, limit entries to specific values, minimize manual errors, and ensure data consistency across your stack.

Depending on the configuration, users can select a single option or multiple options.

**Note:** You can add up to 100 choices per Select field.

You can update the following properties of a Select field at any time:

- Display Name  
- Unique ID  
- Instruction Value  
- Help Text  
- Mandatory  
- Non-localizable  
- Selection Type  
- Limit for Multiple Choices  
- Display Type  
- Choice Data Type  
- Add Choices  

## Configuring Choices

You can define options for the Select field in the following ways:

### Single-value choices

Add options where the displayed label and stored value are the same.  
For example: S, M, L, XL

### Key-value pair choices

Define options as key-value pairs using a colon (:) separator. The key appears in the entry editor, and the value is stored in the backend.  
For example: New York:NY

**Note:** Each key and value can contain up to 100 characters.

**Warning:** Enabling or disabling the Key-value option removes all existing choices. Back up your existing values or export the content type schema before changing this setting.

## Selection Type

The Select field supports:

- Single selection (radio buttons or dropdown)  
- Multiple selection (checkboxes or multi-select dropdown)  

Configure this using the Selection Type setting in the field configuration panel.

## Display Type

The Display Type determines how options appear in the entry editor:

- Dropdown: Suitable for long lists of options  
- Radio: Ideal for a small number of mutually exclusive options  
- Checkboxes: Used when multiple selections are allowed  

## Horizontal Layout for Radio Buttons

You can display radio button options horizontally to optimize space in the entry editor.

To enable horizontal layout:

1. Navigate to the content models section in your stack.  
2. Open the Select field settings.  
3. Set Display Type to Radio.  
4. Enable the Display Horizontally option.  
5. Save your content type.  

By configuring selection type, display type, and choice formats, you can control how data is entered and stored in your content types. Use this field when you need consistency, reduce manual input errors, and ensure structured data across entries.

---

## Common questions

### When should I use a Select field instead of a text field?
Use a Select field when you want to restrict input to predefined values and ensure consistency across entries.

### What happens if I switch between single and multiple selection?
The field behavior changes based on the selection type, which may affect how existing data is handled or displayed in entries.

### Can I edit choices after creating the field?
Yes, you can update choices at any time, but certain changes (like toggling key-value mode) may remove existing options.

### Is there a limit to the number of choices?
Yes, you can add up to 100 choices per Select field.