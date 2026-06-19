---
title: "[Field Properties] - Maximum Number of Terms"
description: Documentation for the Maximum Number of Terms field property for taxonomy fields in Contentstack content types.
url: https://www.contentstack.com/docs/headless-cms/maximum-number-of-terms
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Field Properties] - Maximum Number of Terms

This page explains how to use the **Maximum Number of Terms** field property for taxonomy fields in Contentstack content types. It is intended for developers and content modelers configuring taxonomy fields, and should be used when you need to limit how many terms users can add to an entry.

## Maximum Number of Terms

The **Maximum Number of Terms** property allows you to specify a limit of maximum terms a user can [add to an entry](/docs/content-managers/author-content/adding-terms-to-entries-with-taxonomy/). Once you set this limit, users will be restricted from adding terms beyond the specified maximum.

**Note**: The maximum number of terms allowed per entry is **25**.

To set the maximum number of terms for a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login) and go to the stack. Perform the following steps in the stack:

- Once the **Content Type** is created, add the required fields along with the Taxonomy field.
- Within the Taxonomy field properties, add the necessary details for the [Display Name](/docs/developers/create-content-types/display-name/), [Help Text](/docs/developers/create-content-types/help-text/), and [Instruction Value](/docs/developers/create-content-types/instruction-value/) field properties.**Note**: By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.
- Click on **+ Add Taxonomy**, and in the pop-up window, select a taxonomy from the drop down menu.
- Within the **Maximum Number of Terms** field, enter the limit.
- Once all the details are filled, click **Apply **to save the changes.

**Additional Resource**: Refer to our [Add Taxonomy to a Content Type](/docs/developers/taxonomy/add-taxonomy-to-a-content-type) document for more information.

## Common questions

**How many terms can be added to an entry at most?**  
**Note**: The maximum number of terms allowed per entry is **25**.

**What happens if a user tries to add more terms than the maximum?**  
Once you set this limit, users will be restricted from adding terms beyond the specified maximum.

**Where do I configure the Maximum Number of Terms setting?**  
Within the Taxonomy field properties, use the **Maximum Number of Terms** field to enter the limit and click **Apply **to save the changes.

**Where can I learn more about adding taxonomy to a content type?**  
Refer to our [Add Taxonomy to a Content Type](/docs/developers/taxonomy/add-taxonomy-to-a-content-type) document for more information.