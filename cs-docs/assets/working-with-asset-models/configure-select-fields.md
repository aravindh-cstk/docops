---
title: "Configure Select Fields"
description: "Configure Select, Radio, and Checkbox fields in Assets to capture metadata from a controlled list of choices instead of free text."
url: /assets/configure-select-fields
uid: blt812988449dd6673d
---

# Configure Select Fields

## Configure Select Fields

A Select field captures metadata from a list of choices that you define, instead of leaving the value to free text. Use it when a value belongs to a fixed set, such as region, usage rights, or image orientation.

Free-text fields drift. Three people typing a region produce APAC, Apac, and Asia Pacific, and none of them filter together. A Select field removes that problem at the point of entry: users pick from your list, so every asset stores the same value and search returns all of them.

## When to Use a Select Field

Use a Select field when the set of valid values is known in advance and changes rarely. Region, license type, approval status, and product line are good candidates.

Use a Single Line Textbox instead when the value is unique to each asset, such as a campaign name or a photographer credit. A list with hundreds of one-off entries is harder to maintain than a text field.

## Choose a Display Type

**Select** is the field type. Once you choose it, pick a **Display Type**, which controls how the choices are presented and how many a user can pick.

-   **Dropdown**: A dropdown list. Supports both single and multiple selection.
-   **Radio Button**: The choices are shown as radio buttons, and one can be selected.
-   **Checkboxes**: The choices are shown as checkboxes, and several can be selected.

The display type controls presentation and selection behavior together. A field set to **Radio Button** cannot accept more than one value, and one set to **Checkboxes** always accepts more than one.

**Note:** You cannot change the display type after you save the field. To switch from **Radio Button** to **Checkboxes**, create a new field.

## Configure the Field

To add a Select field, sign in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to **Assets** through the App Switcher and select the **Fields** tab.
2.  Click **\+ New Field**.
3.  In the **General** section, enter a **Name**, confirm the **UID**, and add an optional **Description**.
4.  In the **Fields** section, open the **Field Type** dropdown and choose **Select**.
5.  In the **Selection Settings** panel on the right, choose a **Display Type** and configure the options described below.
6.  Click **Save Field**.

### Selection Mode

Available for the **Dropdown** display type only. Choose **Single** to let users pick one value, or **Multiple** to let them pick several.

**Radio Button** is always single selection and **Checkboxes** is always multiple selection, so the setting does not appear for those display types.

### Data Type

Choose **Text** or **Number** to control what a choice value may contain. A Number field rejects any choice value that is not numeric, which keeps sorting and range filters meaningful.

**Note:** You cannot change the data type after you save the field.

### Choice Format

Choose how each entry in your list is defined.

-   **Value Only** (default): Each choice is a single value. Users see that value, assets store it, and the API returns it.
-   **Value-Key Pair**: Each choice has a key and a value. The key is the label users see in the asset details form. The value is what the asset stores, what the API returns, and what appears in the filter panel.

Use Value-Key Pair when the stored value needs to stay machine-friendly while users see something readable. A choice with the key High Resolution and the value high\_res shows **High Resolution** in the form, stores high\_res on the asset, and returns high\_res from the API.

**Warning:** Switching between Value Only and Value-Key Pair clears every choice you have already added. Set the format before you build the list.

**Note:** You cannot change the choice format after you save the field.

## Add Choices

You can add choices one at a time or in bulk.

To add them one at a time, open **Add Choices** and select **Add Choice**, then enter the value. In the Value-Key Pair format, enter the key and the value separately. Each key and each value must be unique within the field.

To add several at once, open **Add Choices** and select **Bulk Add Choices**. Paste your list into the text area, choose the delimiter that separates the entries, and click **Add Choices**.

Nine delimiters are available: new line (the default), comma, pipe, semicolon, double colon, hyphen, slash, backslash, and tilde. Duplicate entries are skipped, and the count of skipped entries appears below the text area.

**Warning:** Changing the delimiter after you paste text merges the list into a single entry. Update the separators in the text area by hand if you need to change the delimiter.

A field holds up to **300 choices**.

### Reorder Choices and Set Defaults

Choices appear to users in the order you define. Drag a choice by its handle to move it, or use the kebab menu on the row to move it to the top or the bottom of the list.

The kebab menu also sets defaults. A default choice is preselected when a user uploads a new asset. Single-selection fields accept one default, and multiple-selection fields accept several. A default is optional, and no choice is set as default automatically.

**Note:** You cannot remove a choice that is set as the default. Remove the default flag first, then remove the choice.

## Edit Choices After Assets Use Them

Choice lists are meant to be edited. Adding, renaming, or removing a choice updates the list immediately for new selections and for validation, and it does not rewrite assets that already exist.

An asset that holds a value you later removed keeps that value. The API continues to return it unchanged. The asset details form shows the field as blank, so the next person to edit the asset picks a valid choice and the stale value is replaced on save.

This means you can correct a list without a migration, and without silently changing metadata on assets you have not looked at.

**Tip:** To retire a choice without disturbing existing assets, remove it from the list and let assets adopt a valid value as they are next edited. To correct a typo everywhere at once, edit the choice value and then re-save the affected assets.

## Enter Values on an Asset

On the asset details panel, a Select field renders as a dropdown list, radio buttons, or checkboxes, according to its display type.

The **Radio Button** and **Checkboxes** display types show the first five choices inline. When a field has more, a **View All** link opens the full list in a popover with **Apply**, **Cancel**, and **Reset** actions. Apply commits your selection, Cancel discards it, and Reset clears the field.

In a multiple-selection dropdown, each chosen value appears as a chip. Click the close icon on a chip to clear that value.

## Filter Assets by a Select Field

Add a Select field to the filter panel through **Manage Filters**, the same way as any other user-defined field. The field then appears in the left navigation panel on the asset listing page.

Three operators are available:

-   **Contains**: Matches assets holding any of the values you select. Selecting several values widens the result set rather than narrowing it.
-   **Is empty**: Matches assets where the field holds no value.
-   **Is not empty**: Matches assets where the field holds any value.

Applied filters appear as pills above the listing. Removing the last value in a group removes the filter.

The filter panel lists choice values, not keys. A field using Value-Key Pair therefore shows high\_res in the filter and **High Resolution** in the asset form, which is expected.

**Note:** Choices that you remove from the field disappear from the filter panel the next time the page loads. Filters saved in a URL that reference a removed choice are ignored.

## Read and Write Values Through the API

Select values live in user\_defined\_fields on the asset, keyed by field UID. The API stores and returns the choice value, never the key.

A single-selection field returns a value:

```
{
  "user_defined_fields": {
    "resolution": "high_res"
  }
}
```

A multiple-selection field returns an array:

```
{
  "user_defined_fields": {
    "regions": ["emea", "apac"]
  }
}
```

Write the same shapes back through the Update an Asset request. Values are validated at write time: a value that does not match a live choice is rejected, as is a non-numeric value on a Number field.

**Additional Resource:** For the full request and response format, refer to the [Assets API reference](/docs/developers/apis/assets-api).

## What You Cannot Change Later

Four settings are fixed once you save the field for the first time. Confirm them before saving.

| Setting | Fixed after first save |
| --- | --- |
| UID | Yes |
| Display Type | Yes |
| Selection Mode | Yes |
| Data Type | Yes |
| Choice Format | Yes |
| Choices | No, edit freely |
| Name and Description | No, edit freely |

## Common Questions

**Can I convert an existing text field into a Select field?** No. Create a Select field, add it to the relevant asset types, and populate it on the assets that need it.

**What happens to assets when I delete the field?** Deleting a field removes it from every asset type and asset it is associated with. The values are not recoverable, so confirm the field is unused first.

**Why does my filter show a different label from the asset form?** The field uses the Value-Key Pair choice format. The form shows the key and the filter shows the value. Both refer to the same choice.

**Can two choices share a value?** No. Each key and each value must be unique within the field.

**Is there a limit on the number of choices?** Yes, 300 per field.

**Additional Resource:** For an overview of every field type available in Assets, refer to [Field Types](/docs/assets/field-types). To create fields of any type, refer to [Create User-Defined Fields](/docs/assets/create-user-defined-fields).
