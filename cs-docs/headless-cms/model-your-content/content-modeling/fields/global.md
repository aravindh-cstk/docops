---
title: "Global"
description: "Learn how to create and use Global fields in Contentstack to reuse field groups across content types and manage metadata."
url: /headless-cms/global
---

# Global

## Global

A Global field is a reusable group of fields. Define it once and use it across multiple content types in your stack. This helps you avoid recreating the same set of fields repeatedly.

You can update the following properties of a Global field at any time:

-   Select Global Field
-   [Display Name](/docs/headless-cms/display-name)
-   [Unique ID](/docs/headless-cms/unique-id)
-   [Instruction Value](/docs/headless-cms/instruction-value)
-   [Help Text](/docs/headless-cms/help-text)
-   [Multiple](/docs/headless-cms/multiple)
-   [Non-localizable](/docs/headless-cms/non-localizable)
-   [Mark as Global Field Title](/docs/headless-cms/mark-as-title#mark-as-global-field-title)

**Note:** You can now **show a Global field as a separate tab** in the entry editor for better organization and navigation. Learn how to enable the [Show as Tab](/docs/headless-cms/show-as-tab) option.

## Use the Right Field Type for Your Model

When designing your content model, choose the appropriate field type based on reuse and flexibility needs:

| Use when | Field type | Why |
| --- | --- | --- |
| Reusing the same field structure across multiple content types (for example, SEO metadata) | Global Field | Define once and reuse across content types |
| Defining a field group used only within a single content type | Group | Keeps the model simple when reuse is not required |
| Creating flexible, repeatable page sections (for example, hero, testimonials) | Modular Blocks | Enables dynamic page composition |

**Guideline:** If a field structure is reused across two or more content types, consider using a Global Field.

## Common Reusable Global Field Patterns

For website-focused projects, you can standardize commonly reused field structures by creating Global Fields such as:

**SEO**

-   Meta Title (meta\_title)
-   Meta Description (meta\_description)
-   Open Graph Title (open\_graph\_title)
-   Open Graph Description (open\_graph\_description)
-   Open Graph Image (open\_graph\_image)
-   Enable Search Indexing (enable\_indexing)

**CTA**

-   Label (label)
-   URL (url)
-   Variant (variant)

**Author Summary**

-   Name (name)
-   Role (role)
-   Avatar (avatar)
-   Short Bio (bio\_short)

These are example structures. Adapt field names and configurations based on your project requirements.

## Example: SEO Global Field

For example, to standardize SEO metadata across all pages, you can create a Global field named **SEO** and add the following subfields:

-   Meta Title (meta\_title)
-   Meta Description (meta\_description)
-   Open Graph Title (open\_graph\_title)
-   Open Graph Description (open\_graph\_description)
-   Open Graph Image (open\_graph\_image)
-   Enable Search Indexing (enable\_indexing)

Once created, add the **SEO** Global field to all relevant content types. When content creators add entries, the SEO field appears automatically with these predefined subfields, ready to use.

**Note:** Updating fields in an existing content type may result in data loss. Before making changes, refer to the [Content Type Change Management](/docs/headless-cms/content-type-change-management) documentation.

## UID Guidelines for API Consistency

Field Unique IDs (UIDs) are used in API responses and act as stable identifiers for fields.

-   Use consistent and descriptive UIDs when creating fields.
-   Avoid changing UIDs after integrating with frontend applications.
-   If a UID must change, update all dependent systems and validate API responses.

**Example:**

-   Display name: Hero Title
-   UID (used in API): hero\_title

## Localization Considerations

When configuring Global Fields:

-   Use **non-localizable fields** only when values must remain the same across all locales.
-   Use **localizable fields** for content that varies by region (for example, SEO metadata or page titles).

Plan localization behavior early to avoid inconsistencies across entries.

## Before You Modify a Global Field

Before updating a Global Field used in live content:

-   Identify all content types that use the Global Field.
-   Determine whether the change is additive (safer) or breaking (for example, renaming, deleting, or changing field types).
-   Review the impact on existing entries and API consumers.
-   Test changes in a non-production environment.
-   Publish and validate content using the Delivery API.

## Copy Field Values Across Global Fields

Content managers can copy the values of an instance within a Global field and paste them into:

-   Another instance within the same entry.
-   A matching instance of the same Global field in a different entry.

This simplifies content duplication and speeds up entry creation.

To copy and paste field values across group fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  In the **Global** field, select the instance, click the vertical ellipsis, and select **Copy Field Values**.
2.  In the target entry or instance, click the vertical ellipsis again and select **Paste Field Values**.
    
    **Note:** The destination instance must match the original instance’s name and structure.
    
    ![Copy_Field_Values_Across_Global_Fields.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20a2edbf3f7c6feb/68dc20dd1b16f7dc48dd30c7/Copy_Field_Values_Across_Global_Fields.gif)
    

**Additional Resources:**

-   Learn how to [add Global fields to any content types](/docs/headless-cms/add-the-global-field-to-content-types) in your stack.
-   Enhance a Global field by adding a [Modular Block within it](/docs/headless-cms/modular-blocks-within-global-fields), [nesting a Global field inside a Group field](/docs/headless-cms/global-fields-within-group-fields), or even [within another Global field](/docs/headless-cms/about-global-field#nested-global-fields).
-   Use [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) to dynamically show or hide fields based on conditions.
