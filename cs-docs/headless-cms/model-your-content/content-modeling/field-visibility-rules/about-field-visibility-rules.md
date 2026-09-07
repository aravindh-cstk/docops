---
title: "About Field Visibility Rules"
description: "Field Visibility Rules in Contentstack let you show or hide fields dynamically based on user input, ensuring a streamlined data entry process."
url: /headless-cms/about-field-visibility-rules
uid: blt71448caed295a7fa
---

# About Field Visibility Rules

## About Field Visibility Rules

You can use field visibility rules to dynamically show or hide specific [fields](/docs/headless-cms/about-fields) on the [entry](/docs/headless-cms/about-entries) page based on the values entered in certain fields. This ensures a clean and efficient data entry process, displaying only the relevant fields and improving data accuracy.

## Features

-   **Dynamic Behavior:** Rules act as conditions that determine whether certain fields appear or disappear as users fill out an entry.
-   **Custom Configuration:** While [creating](/docs/headless-cms/create-a-content-type) or [editing](/docs/headless-cms/edit-a-content-type) content types, you can set these rules to tailor the entry to specific data requirements.
-   **Enhanced User Experience:** This feature is widely used in online forms and shopping sites to streamline the entry process, ensuring users see only what’s necessary.

## Field Visibility Rules for Global Fields

Field Visibility Rules can also be applied to **Global** fields, enabling you to control the visibility of fields inside a reusable global component.

When a Global Field with visibility rules is **referenced** inside a Content Type:

-   The rules are **inherited** into the Content Type.
-   Inherited rules are **read-only** at the Content Type level and can only be modified in the **Global Field** editor.
-   Any new rules added at the Content Type level remain editable there.

## Use Cases

Field Visibility Rules are commonly used in forms to create a streamlined experience. Here are some examples:

-   **E-commerce Checkout:** Selecting the **Same as Shipping Address** checkbox hides the **Billing Address** field.
-   **Gender-based Fields:** Choosing **Male** for Gender can automatically add “Mr.“ before the **First Name** and hides female-specific titles such as “Ms.” and “Mrs.”
-   **Job Application Forms:** Selecting **Have any prior experience?** displays the **Years of Experience** field, while deselecting it hides the field.
-   **Global Field Example:** A **Newsletter Preferences** global field contains fields for subscription status, email address, and preferred frequency. A rule can hide the email and frequency fields unless the subscription status is set to "Subscribed."
-   **Modular Block Example**: In a **Product Details** modular block, you can define rules that show or hide fields within the same block. If **Product Type** is set to **Physical**, the **Shipping Details** fields in that block are displayed. If **Product Type** is set to **Digital**, the shipping fields in that block are hidden. Both the **operand** and **target** fields must belong to the **same block**, ensuring rules stay self-contained.

-   **Group Field Example**: In a **Team Members** group field marked as **Multiple**, you might want to reveal additional social fields per team member. For instance, when a user selects **Has Social Links** within one instance of the group, fields for **LinkedIn URL** and **Twitter URL** appear for that specific member. Rules apply **per instance**, ensuring that each team member’s visibility settings are independent.


**Tip:** Remember to [create an entry](/docs/headless-cms/create-an-entry) to see the rule in action.

**Note:** Only the stack [owners](/docs/headless-cms/types-of-roles#owner), [admins](/docs/headless-cms/types-of-roles#admin), and users assigned to the [developer](/docs/headless-cms/types-of-roles#developer) role can create Field Visibility Rules in the stack. Refer to the [Add a Field Visibility Rule](/docs/headless-cms/add-a-field-visibility-rule) document for detailed steps.

This feature improves form usability and helps ensure accurate data collection. By configuring visibility rules, you can tailor forms to meet specific content requirements.
