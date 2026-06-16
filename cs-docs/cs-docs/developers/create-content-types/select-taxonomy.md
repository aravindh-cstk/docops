---
title: "[Field Properties] - Select Taxonomy"
description: How to use the Select Taxonomy field property to add an existing taxonomy while configuring the Taxonomy field in Contentstack.
url: https://www.contentstack.com/docs/developers/create-content-types/select-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Field Properties] - Select Taxonomy

This page explains how to use the **Select Taxonomy** field property in Contentstack to add an existing taxonomy while configuring a Taxonomy field in a content type. It is intended for developers or content modelers setting up content types and should be used when you need to associate a taxonomy with a specific content type.

## Select Taxonomy

The **Select Taxonomy** property allows you to add an existing taxonomy while configuring the Taxonomy field.

To select a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), go to your stack, and perform the following steps:
- Once the **Content Type** is created, add the required fields along with the [Taxonomy](/docs/developers/create-content-types/taxonomy) field. Please note that the [Title](/docs/developers/create-content-types/title/) field is the default field.
- Within the Taxonomy field properties, add the necessary details for the [Display Name](/docs/developers/create-content-types/display-name/), [Help Text](/docs/developers/create-content-types/help-text/), and [Instruction Value](/docs/developers/create-content-types/instruction-value/) field properties.**Note**: By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.
- Click on **+ Add Taxonomy**, and in the pop-up window, use the dropdown menu to choose a taxonomy. This will allow you to add terms from the selected taxonomy to the entry for this specific content type.**Additional Resource**: You can also set a limit for the [maximum number of terms](/docs/developers/create-content-types/maximum-number-of-terms/) a user can add.
- Once all the details are filled, click **Apply **to save the changes.

**Additional Resource**: Refer to our [Add Taxonomy to a Content Type](/docs/developers/taxonomy/add-taxonomy-to-a-content-type) document for more information.

## Common questions

### Can I change the UID of the taxonomy field?
No. **Note**: By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.

### Where do I select the taxonomy to add?
Click on **+ Add Taxonomy**, and in the pop-up window, use the dropdown menu to choose a taxonomy.

### Can I limit how many terms a user can add?
Yes. **Additional Resource**: You can also set a limit for the [maximum number of terms](/docs/developers/create-content-types/maximum-number-of-terms/) a user can add.

### Where can I find more information about adding taxonomy to a content type?
Refer to our [Add Taxonomy to a Content Type](/docs/developers/taxonomy/add-taxonomy-to-a-content-type) document for more information.