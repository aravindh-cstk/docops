---
title: "Add Taxonomy to a Content Type"
description: "Learn the seamless process of adding and configuring taxonomies to categorize content within Contentstack's Content Types."
url: /headless-cms/add-taxonomy-to-a-content-type
---

# Add Taxonomy to a Content Type

## Add Taxonomy to a Content Type

Once you have set up your taxonomy, you can add it as a field to your content types and classify your entries.

To add a taxonomy to a content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to add a taxonomy to a content type, and click the “Content Models” icon on the left navigation panel.
2.  [Create a new content type](/docs/headless-cms/create-a-content-type) or select an existing.
3.  In the “Content Type Builder” page, select the fields you want by clicking the “Insert a field” (+ icon) that appears when you hover the cursor.
4.  Select **Taxonomy** from the list of fields.![Taxonomy_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e1aa78c8f62419a/6656f1dce4a7327037977ca3/Taxonomy_Field.png)
5.  You can configure the properties of the taxonomy field by clicking the properties.![Taxonomy_Properties.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16b8e5e73821badb/6656f2e7cb7d1875c3656317/Taxonomy_Properties.png)
    
    **Note:** By default, the UID for the taxonomy field is set to taxonomies and cannot be updated.
    
6.  Click the **\+ Add Taxonomy** button and select a taxonomy from the dropdown menu of available taxonomies within the stack.
7.  If you want to limit the maximum number of terms for the taxonomy field, enter a number in the **Maximum Number of Terms** field.
    
    **Note:** The maximum number of terms allowed per entry is **25**.
    
8.  You can disable the **Optional Field** toggle if you want to make this field mandatory.
9.  Finally, click **Apply** to add the taxonomy.![Add_Taxonomy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8cec7221c1c70b6/6656d7c5672d190352dc9351/Add_Taxonomy.png)

**Note:** You can include multiple taxonomies within a single taxonomy field in a content type.

![Taxonomy_Field_in_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecaf5673e8dc803f/6656f1fdcb7d185ed8656310/Taxonomy_Field_in_CT.png)

**Note:** You can only add the Taxonomy field at the parent level; it cannot be added within modular blocks or group fields.

Once you've added the taxonomy field to a content type, you can begin adding entries and [categorizing them using taxonomy](/docs/headless-cms/adding-terms-to-entries-with-taxonomy/).
