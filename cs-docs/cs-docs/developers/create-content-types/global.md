---
title: "[Fields] - Global"
description: Documentation for the Global field, a reusable group of fields that can be used across multiple content types.
url: https://www.contentstack.com/docs/developers/create-content-types/global
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-25
---

# [Fields] - Global

This page explains what a Global field is in Contentstack, which properties you can update, and how to copy field values across Global field instances. It’s intended for developers and content managers who model content types and manage entries, and should be used when you want to reuse a consistent set of fields across multiple content types.

## Global

A Global field is a reusable group of fields. Define it once and use it across multiple content types in your stack. This helps you avoid recreating the same set of fields repeatedly.

You can update the following properties of a Global field at any time:
- Select Global Field
- [Display Name](/docs/developers/create-content-types/display-name)
- [Unique ID](/docs/developers/create-content-types/unique-id)
- [Instruction Value](/docs/developers/create-content-types/instruction-value)
- [Help Text](/docs/developers/create-content-types/help-text)
- [Multiple](/docs/developers/create-content-types/multiple)
- [Non-localizable](/docs/developers/create-content-types/non-localizable)
- [Mark as Global Field Title](/docs/developers/create-content-types/mark-as-title#mark-as-global-field-title)

**Note:** You can now **show a Global field as a separate tab** in the entry editor for better organization and navigation. Learn how to enable the [Show as Tab](/docs/developers/create-content-types/show-as-tab) option.

For example, to standardize SEO metadata across all pages, you can create a Global field named **SEO** and add subfields such as:
- Meta Title
- Meta Description
- Meta Keywords
- Enable Search Indexing

Once created, add the **SEO** Global field to all relevant content types. When content creators add entries, the SEO field appears automatically with the predefined subfields (**Meta Title**, **Meta Description**, **Meta Keywords**, and an **Enable Search Indexing** toggle), ready to use, as shown below:

**Note:** Updating fields in an existing content type may result in data loss. Before making changes, refer to the [Content Type Change Management](/docs/developers/content-modeling/content-type-change-management) documentation.

## Copy Field Values Across Global Fields

Content managers can copy the values of an instance within a Global field and paste them into:
- Another instance within the same entry.
- A matching instance of the same Global field in a different entry.

This simplifies content duplication and speeds up entry creation.

To copy and paste field values across group fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- In the **Global** field, select the instance, click the vertical ellipsis, and select **Copy Field Values**.
- In the target entry or instance, click the vertical ellipsis again and select **Paste Field Values**.**Note:** The destination instance must match the original instance’s name and structure.

**Additional Resources:**
- Learn how to [add Global fields to any content types](/docs/developers/global-field/add-the-global-field-to-content-types) in your stack.
- Enhance a Global field by adding a [Modular Block within it](/docs/developers/global-field/modular-blocks-within-global-fields), [nesting a Global field inside a Group field](/docs/developers/global-field/global-fields-within-group-fields), or even [within another Global field](/docs/developers/global-field/about-global-field#nested-global-fields).
- Use [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules) to dynamically show or hide fields based on conditions.

## Common questions

### What is a Global field used for?
A Global field is a reusable group of fields that you define once and use across multiple content types in your stack.

### Can I change a Global field after creating it?
Yes. You can update properties such as Display Name, Unique ID, Help Text, Multiple, Non-localizable, and Mark as Global Field Title.

### Can I show a Global field as a separate tab in the entry editor?
Yes. You can enable the [Show as Tab](/docs/developers/create-content-types/show-as-tab) option.

### How do I copy values between Global field instances?
Use **Copy Field Values** from the instance’s vertical ellipsis menu, then use **Paste Field Values** in the target instance (which must match the original instance’s name and structure).