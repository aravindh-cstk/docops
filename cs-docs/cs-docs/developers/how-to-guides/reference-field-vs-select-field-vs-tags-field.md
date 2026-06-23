---
title: "[How-to Guides and Knowledgebase articles] - Reference Field vs Select Field vs Tags Field"
description: Differences and recommendations for using Reference fields, Select fields, and Tags fields in Contentstack content types.
url: https://www.contentstack.com/docs/developers/how-to-guides/reference-field-vs-select-field-vs-tags-field
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Reference Field vs Select Field vs Tags Field

This page explains the differences between Reference fields, Select fields, and Tags fields in Contentstack content types, and provides recommendations for when to use each. It is intended for developers and content managers designing content models and deciding how to categorize or relate entries.

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn more about Reference, Select, and Tags fields, refer to the [Fields](/docs/developers/create-content-types#fields) documentation.

The “Reference” field, the “[Select](../create-content-types/select.md)” field, and the default “Tags” field of a content type serve different purposes. However, since they have something in common (i.e., selecting among the given options or categorizing entries), it may be a confusing and challenging decision on which [field](../create-content-types/about-fields.md) to use for your use case.

Let’s have a look at the characteristics of these three fields and their usage recommendations.

## Reference Fields
- [Reference fields](../create-content-types/reference.md) are commonly used to add references to other [entries](../../content-managers/author-content/about-entries.md).
- On the entry page, the reference field is like a dropdown list that shows all entries of the referred [content type(s)](../create-content-types/about-content-types.md) as available options.
- When an option is selected, a reference to that entry is stored in the backend.
- **Examples of usage**:“Category” field within Blog content type
- “Author” field within Blog content type
- “Store Location” field within Product content type
- For navigation of a site
- **Using a reference field helps in**:**Avoiding rework in case of changes**: If there is any change in the [referred entry](../../content-managers/author-content/view-entry-references.md), it automatically gets reflected in all the entries where it was referred. For example, if the author changes her profile image, it would reflect in all the entries where the author’s entry was referred to.
- **Avoiding manual work of adding data repeatedly**: Instead of repeatedly adding author details on each blog post, select the relevant author entry from the list.
- **Avoiding manual work when the selected list of values change**: When the set of predefined choices constantly changes, use a Reference field instead of a Select field. For example, Suppose a store manager constantly updates a list of store locations with newly added stores. In that case a Reference field helps to select the store location from the referred entry list.

## Select Field
- The **Select field** allows choosing from two or more predefined choices.
- On the entry page, the options of the Select field can be displayed as either dropdown or radio buttons.
- When an option is selected, it stores the actual value of the selected option in the backend.
- It is recommended to use when the choices are predefined and are not likely to change.
- **Examples of usage**:“Gender” field in a survey form
- “Age Group” field in a form

## Tags
- Commonly used to add tags to an entry.
- The applied tags are visible on the entry list page.
- Use tags if you plan to search entries by tags using Contentstack’s Advanced Search.
- Not recommended if you wish to retrieve entries (by filtering) using [APIs](/docs/developers/apis/).

## Recommendations
- To categorize similar entries for easy retrieval later using API queries, we suggest using the **Reference field** (marked as multiple) instead of **Tags**.
- Use **Reference fields** for fields such as Categories, Author, Navigation.
- Use the **Select** field when the options are predefined and are not likely to change. Any changes require a developer to update the content type constantly.
- Avoid **Tags** unless you want to search entries by tags using Contentstack’s [Advanced Search](/docs/content-managers/search-content/about-advanced-search).

**Additional Resource:** If you want to learn more about fields, refer to our documentation on [Field Properties](../create-content-types/about-field-properties.md).

## Common questions

**Q: When should I use a Reference field instead of a Select field?**  
A: Use a Reference field when the set of predefined choices constantly changes, and you want to select from referred entries rather than maintain a static list of options.

**Q: Why are Tags not recommended for retrieving entries using APIs?**  
A: Tags are not recommended if you wish to retrieve entries (by filtering) using [APIs](/docs/developers/apis/).

**Q: What is a typical use case for a Select field?**  
A: It is recommended to use when the choices are predefined and are not likely to change, such as “Gender” or “Age Group” fields in forms.

**Q: What is the main benefit of using Reference fields for related data like Authors or Categories?**  
A: If there is any change in the referred entry, it automatically gets reflected in all the entries where it was referred, helping avoid rework and repeated manual updates.