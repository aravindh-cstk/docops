---
title: "Non-localizable Field"
description: "Learn how to set fields as non-localizable in Contentstack, ensuring consistent content across languages. Perfect for URLs and images!"
url: /headless-cms/non-localizable-field
uid: bltd0d3aeed389d860e
---

# Non-localizable Field

## Non-localizable Field

Contentstack allows you to mark any field in a content type as **Non-localizable**. This feature prevents content managers from translating or modifying a field's value in localized entries. It is useful when specific content, such as a **URL field** or a **common image**, should remain the same across all locales.

When a field is marked as **Non-localizable**, you can enter data only in the **master-language entry**. The field remains **disabled** (non-editable) in all localized versions.

**Note:** If you update a **Non-localizable** field in the **master-language entry**, the system automatically updates the field in all localized copies, and their **version numbers** increment by **1**.

**Important**: The ability to mark fields as **Non-localizable** within **Group** (**Multiple**), **Modular Blocks**, and **Global** fields (**Multiple**) is plan based. If this feature is not working in your stack, it may not be enabled for your organization. To access it, please contact our [support](mailto:support@contentstack.com) team.

For users on older plan, the following limitations apply:

-   Fields inside a **Modular Blocks** field cannot be marked as Non-localizable
-   Fields inside a **Group** and **Global** field marked as **Multiple** cannot be marked as Non-localizable

You can enable the **Non-localizable** option to restrict field editing in localized entries. The field remains editable only in the **master-language entry**, and its value automatically reflects in localized versions.

To mark a field as non-localizable, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/headless-cms/about-stack/), and perform the following steps:

1.  Open the **Content Type Builder** page of the content type where you want to mark a non-localizable field.
2.  Hover over the field you want to mark as **Non-localizable** and click the **Settings** (gear) icon.
3.  Toggle the **Non-localizable** property.
4.  Click **Save and Close**.
5.  Open an entry in the updated content type in the master language and enter data for all fields, including the **Non-localizable** field. **Save** the entry.
6.  Select a **different language** using the language selector at the top of the page. This opens the **localized copy** of the entry.

You will notice that the **Non-localizable** field is **disabled** in the localized entry.

![Scenario 1 - Adding a New Entry in the Master Locale.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8cb5d8404ddaaedd/680fd75fff7937dc1e13c032/Scenario_1_-_Adding_a_New_Entry_in_the_Master_Locale.gif)

## Understanding the Behavior of Non-localizable Fields

Before using the **Non-localizable** field feature, it's important to understand how it behaves in different scenarios.

### Scenario 1: Changing a Field to Non-localizable in an Existing Content Type

If you update an existing content type (with localized entries) and **mark a field as Non-localizable**, the following happens:

-   The field’s value from the **master-language entry** is immediately reflected in all **localized entries**.
-   The **version number of all localized entries** increases by **1** since the data has changed.

### Scenario 2: Changing a Non-localizable Field Back to Localizable

If you **remove the Non-localizable setting** from a field that was previously marked as **Non-localizable**, the following occurs:

-   The field’s value from the **master-language entry** remains in all **localized entries**.
-   The **Non-localizable** tag disappears from the field in the **master-language entry**.
-   You can now **edit** the field separately in each localized entry.
-   The version number of localized entries remains unchanged.

### Scenario 3: Deleting All Languages Except the Master Language

If you **delete all languages** from your stack, leaving only the **master language**, the following happens:

-   All **localized entries** are permanently **deleted**.
-   The **Non-localizable** tag disappears from the field in the **master-language entry**.
-   If you **re-add the deleted language**, all previously deleted entries are **restored**, including the **Non-localizable** field, which continues to function as before.

**Note:** In some cases, such as when you add a new instance of a Group, Modular Block, or Global in a localized entry, **Non-localizable behavior may not apply**. The new instance is treated as a localized addition, and its fields—including those marked Non-localizable—can be edited. For more details, refer to [Managing Non-Localizable Fields](/docs/headless-cms/managing-non-localizable-fields).
