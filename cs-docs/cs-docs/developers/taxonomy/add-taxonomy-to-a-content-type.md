---
title: "[Taxonomy] - Add Taxonomy to a Content Type"
description: Add a taxonomy as a field to content types in Contentstack and configure taxonomy field properties.
url: https://www.contentstack.com/docs/headless-cms/add-taxonomy-to-a-content-type
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-26
---

# [Taxonomy] - Add Taxonomy to a Content Type

This page explains how to add a Taxonomy field to a content type in Contentstack and configure its settings. It is intended for developers and content modelers who have already set up a taxonomy and now want to classify entries by adding taxonomy fields to content types.

### Add Taxonomy to a Content Type

Once you have set up your taxonomy, you can add it as a field to your content types and classify your entries.

To add a taxonomy to a content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to add a taxonomy to a content type, and click the “Content Models” icon on the left navigation panel.
- [Create a new content type](/docs/developers/create-content-types/create-a-content-type) or select an existing.
- In the “Content Type Builder” page, select the fields you want by clicking the “Insert a field” (+ icon) that appears when you hover the cursor.
- Select **Taxonomy **from the list of fields.
- You can configure the properties of the taxonomy field by clicking the properties.  
  **Note**: By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.
- Click the **+ Add Taxonomy** button and select a taxonomy from the dropdown menu of available taxonomies within the stack.
- If you want to limit the maximum number of terms for the taxonomy field, enter a number in the **Maximum Number of Terms** field.**Note**: The maximum number of terms allowed per entry is **25**.
- You can disable the **Optional Field** toggle if you want to make this field mandatory.
- Finally, click **Apply** to add the taxonomy.

**Note**: You can include multiple taxonomies within a single taxonomy field in a content type.

**Note**: You can only add the Taxonomy field at the parent level; it cannot be added within modular blocks or group fields.

Once you've added the taxonomy field to a content type, you can begin adding entries and [categorizing them using taxonomy](/docs/content-managers/author-content/adding-terms-to-entries-with-taxonomy/).

## Common questions

**Q: Can I add more than one taxonomy to a content type?**  
A: Yes, you can include multiple taxonomies within a single taxonomy field in a content type.

**Q: Can I change the UID of the taxonomy field?**  
A: No. By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.

**Q: What is the maximum number of terms allowed per entry for a taxonomy field?**  
A: The maximum number of terms allowed per entry is **25**.

**Q: Can I add the Taxonomy field inside modular blocks or group fields?**  
A: No. You can only add the Taxonomy field at the parent level; it cannot be added within modular blocks or group fields.