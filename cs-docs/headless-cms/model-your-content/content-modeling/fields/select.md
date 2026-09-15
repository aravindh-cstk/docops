---
title: "Select"
description: "Learn how to use the Select field in Contentstack to create predefined options, configure display types, and manage single or multiple selections in content types."
url: /headless-cms/select
uid: bltab89ecf9de373770
---

# Select

## Select

The Select field allows users to choose from a predefined set of options. Use this field to standardize input, limit entries to specific values, minimize manual errors, and ensure data consistency across your stack.

Depending on the configuration, users can select a single option or multiple options.

**Note:** You can add up to **100 choices** per Select field.

You can update the following properties of a Select field at any time:

-   [Display Name](/docs/headless-cms/display-name)
-   [Unique ID](/docs/headless-cms/unique-id)
-   [Instruction Value](/docs/headless-cms/instruction-value)
-   [Help Text](/docs/headless-cms/help-text)
-   [Mandatory](/docs/headless-cms/mandatory)
-   [Non-localizable](/docs/headless-cms/non-localizable)
-   [Selection Type](/docs/headless-cms/selection-type)
-   [Limit for Multiple Choices](/docs/headless-cms/limit-for-multiple-choices)
-   [Display Type](/docs/headless-cms/display-type)
-   [Choice Data Type](/docs/headless-cms/choice-data-type)
-   [Add Choices](/docs/headless-cms/add-choices)

## Configuring Choices

You can define options for the Select field in the following ways:

-   **Single-value choices:** Add options where the displayed label and stored value are the same.  
    **For example**: S, M, L, XL

-   **Key-value pair choices**: Define options as key-value pairs using a colon (:) separator. The key appears in the entry editor, and the value is stored in the backend.

    **For example**: New York:NY


**Note:** Each key and value can contain up to **100 characters**.

**Warning:** Enabling or disabling the **Key-value** option removes all existing choices. Back up your existing values or export the content type schema before changing this setting.

## Selection Type

The Select field supports:

-   Single selection (radio buttons or dropdown)
-   Multiple selection (checkboxes or multi-select dropdown)

Configure this using the **Selection Type** setting in the field configuration panel.

## Display Type

The Display Type determines how options appear in the entry editor:

-   **Dropdown**: Suitable for long lists of options
-   **Radio**: Ideal for a small number of mutually exclusive options
-   **Checkboxes**: Used when multiple selections are allowed

### Horizontal Layout for Radio Buttons

You can display radio button options horizontally to optimize space in the entry editor.

To enable horizontal layout:

1.  Navigate to the content models section in your stack.
2.  Open the **Select** field settings.
3.  Set **Display Type** to **Radio**.
4.  Enable the **Display Horizontally** option.
5.  **Save** your content type.

![Select_Field.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd1afd5fe183461b/69c6a4e72cdc8a0e221d2997/Select_Field.gif)

By configuring selection type, display type, and choice formats, you can control how data is entered and stored in your content types. Use this field when you need consistency, reduce manual input errors, and ensure structured data across entries.
