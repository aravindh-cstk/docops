---
title: "Modular Blocks"
description: "Learn how to use Modular Blocks in Contentstack to build dynamic, flexible content structures without needing developer changes."
url: /headless-cms/modular-blocks
---

# Modular Blocks

## Modular Blocks

The **Modular Blocks** field lets content managers dynamically build and modify components of a page or app, directly from the entry editor. It provides flexibility to assemble rich content structures without developer involvement.

For example, content managers can choose from predefined blocks like:

-   **Banner**: [Single Line Textbox](/docs/headless-cms/single-line-textbox) and [File](/docs/headless-cms/file) fields
-   **Product Details**: [Title](/docs/headless-cms/title), [RTE](/docs/headless-cms/about-json-rich-text-editor/), and File fields
-   **Video**: File and [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) fields

They can add, reorder, or remove these blocks as needed, allowing them to design complex page layouts independently.

![CMS-Modular-Blocks](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d0e8ccff59ee1cd/69f3113041d166cef13df881/CMS-Modular-Blocks.png)

Let’s explore how both developers and content managers can use this field effectively.

## Developer

To use Modular Blocks, developers must first add the field to a content type.

1.  In the content type builder, insert the **Modular Blocks** field.
2.  Click **\+ New Block**, provide a name (e.g., Hero Banner), and click **Create**.
3.  Inside the block, use **Insert a Field** to add the required fields.
4.  Repeat this to add multiple blocks within the same Modular Blocks field.
5.  Rename or delete any block if needed.
    
    ![Developer_Creating_MB.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb58bd56a8b16999f/688ce87402d85c803cdf8697/Developer_Creating_MB.png)
    

**Note:**

-   You can add up to **5 Modular Blocks** fields per content type, with up to **20 blocks** in each field.
-   You can also mark a Modular Blocks field to **Show as Tab** in the entry editor. This option displays the field as a separate tab, helping content managers navigate large entries more easily. Learn more in [Show as Tab](/docs/headless-cms/show-as-tab).
-   You can now designate a specific field inside a block as the “title” of each block instance by enabling the [Mark as Modular block title](/docs/headless-cms/mark-as-title#mark-as-modular-block-title) toggle.  
    

**Warning:** You cannot add a Modular Blocks field within a [Group](/docs/headless-cms/group) field.

## Content Manager

While creating an entry, the Modular Blocks field appears with links to add the defined blocks (e.g., Banner, Product Details). Content managers can:

-   Add blocks and repeat them as needed
-   Sort or delete blocks
-   Insert a block above another using the icons at the top-right of each block

When entering text into certain fields, the block’s title auto-updates to reflect the first field’s value. This occurs when using:

-   Single Line Textbox
-   Multi Line Textbox
-   Date field (shows date in ISO format)
-   Title field in a Link field
-   Radio or dropdown field (single select)

![Content_Managers_Adding_MB.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61d0bf0851586c7b/688ce88bad1f9a7b587aa4a7/Content_Managers_Adding_MB.png)

## Real-World Scenarios of Using Modular Blocks

Let's learn how to work with Modular Blocks in Contentstack using a few use cases.

### Example 1: Flexible Page Components

A common implementation pattern is to use a single Modular Blocks field (for example, sections) to define reusable page components. This allows content managers to assemble layouts dynamically, while developers map each block UID to a UI component.

You can define blocks such as:

-   hero\_section
    -   headline (Single Line Textbox, required)
    -   subheadline (Multi Line Textbox, optional)
    -   primary\_cta\_label (Single Line Textbox, optional)
    -   primary\_cta\_url (Link, optional)
-   feature\_grid
    -   section\_title (Single Line Textbox, required)
    -   features (Group, multiple)
        -   icon (File, optional)
        -   name (Single Line Textbox, required)
        -   description (Multi Line Textbox, optional)
-   testimonial\_section
    -   quote (Multi Line Textbox, required)
    -   author\_name (Single Line Textbox, required)
    -   author\_role (Single Line Textbox, optional)
-   blog\_highlights\_section
    -   section\_title (Single Line Textbox, required)
    -   items (Reference, multiple, optional)

**Tip:** Keep block and field UIDs stable after implementation. Changing UIDs requires updates in application code.

### Example 2: Creating a Menu

You can use Modular Blocks to create a navigation menu with references to internal or external pages.

To create a menu using modular blocks, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon.
2.  Click **\+ New Content Type** and name it **Landing Page**.
3.  Add fields like:
    1.  Title (default)
    2.  JSON Rich Text Editor (Main Text) ![Example_2-_Creating_a_LP_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1af645552d642fa/688ce94a558a1b242df6edda/Example_2-_Creating_a_LP_CT.png)
4.  Click **Save and Close** to save your content type.
5.  Now, create another content type named **Menu**.
6.  Insert a **Modular Blocks** field and name it **Menu**.
7.  Inside **Menu**, create blocks:
    1.  **Landing Page Reference:** Single Line Textbox (Label) and Reference field (linked to Landing Page)
    2.  **External**: Single Line Textbox and Link field
    3.  **Custom**: Two Single Line Textboxes (Label, Path) ![Example_2-_Creating_a_Menu_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt767086267534ba6b/688ce972450d71ee29cebb16/Example_2-_Creating_a_Menu_CT.png)

Now that we are done creating our content types, let's create entries in them and see modular blocks in action.

1.  Navigate to “Entries” and create a new entry in the **Landing Page** content type.
2.  Create two entries namely, **Frontpage** and **About**.
3.  In the **Menu** content type, create an entry with:
    1.  **Landing Page Reference** title as **Home** and reference **Frontpage**.
    2.  Add another block with the title **About** referencing the **About** entry.
    3.  Within **External**, set the title as **Contentstack** and the URL as https://contentstack.com.
    4.  Within **Custom** keep the title as **Docs** with the Path as /documentation/start.
        
        **Tip:** The Custom block allows linking to any internal path (e.g., /some-other-link/on-my-webpage).
        

You can now use the [Content Delivery API](/docs/developers/apis/content-delivery-api) to retrieve the Menu entry content and build your navigation dynamically. For example, refer to this [example](https://gist.github.com/oskarei/10a547de2049399d696414e84e9e9889).

### Example 3: Light Geo-Segmentation

To show different content based on user location, create a content type with blocks like:

-   India
-   USA
-   Europe

Each block can hold region-specific content. Editors can structure content accordingly.

![Example_3-_Light_Geo-Segmentation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb09a32d0ee5932e/688ceaaec8868a7eaa6212a8/Example_3-_Light_Geo-Segmentation.png)

**Note:** Modular Blocks enable content structure. Actual geo-segmentation logic (based on IP) needs to be implemented externally.

## Nested Modular Blocks

You can nest a Modular Blocks field inside a block of another Modular Blocks field, allowing even greater flexibility.

Let’s say you want to let authors:

-   Create a standard news article with optional fields like image, description, and body content.
-   Or create a photo gallery with multiple image uploads.

To create nested modular blocks, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon.
2.  Create a new or select an existing content type.
3.  Add a **Modular Blocks** field named **Article Type**.
4.  Create two blocks:
    1.  **News Articles** that contains a **nested Modular Blocks** field with:
        1.  Image Block (File field)
        2.  Description Block (Single Line Textbox)
        3.  Body Block (RTE)
    2.  **Image Gallery** that contains a File field with **Multiple** enabled. ![Nested_Modular_Blocks.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e5d9384b0d26df7/688ceac57adc79b15ee97faf/Nested_Modular_Blocks.png)

**Note:**

-   Only **two levels** of nesting are supported.
-   Maximum of **20 blocks** can be added per Modular Blocks field.

Now, while creating entries, authors can choose between article or gallery and structure the content using reusable patterns.

1.  Open the entry and scroll to the **Modular Blocks** field.
2.  Click a block name (e.g., News Articles) to add it.
3.  Inside it, select a nested block from the defined list (e.g., Image Block).
4.  Repeat or reorder blocks as needed.

**Note:** You can add up to **30 block instances** inside a nested Modular Blocks field.

## Copy Field Values Across Modular Blocks

Content managers can also copy the values of a block within a Modular Blocks field and paste them into:

-   Another block in the same entry
-   A block in the same Modular Blocks field in a different entry

This simplifies content duplication and speeds up entry creation.

To copy and paste field values across modular blocks, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  In the **Modular Blocks** field, hover over the desired block.
2.  Click the vertical ellipsis and select **Copy Field Values**.
3.  In the target entry or block, click the vertical ellipsis again and select **Paste Field Values**.

**Note:** The destination block must match the original block’s name and structure.

![Copy_MB_values.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4c244734e069f38/6891e14bca22f96f254a4d2f/Copy_Paste_MB_Values.png)

## API Response Structure

When retrieving entries using the Content Delivery API, Modular Blocks are returned as an array of objects. Each object represents a block and its fields.

```
{
 "entry": {
   "title": "Homepage",
   "sections": [
     {
       "hero_section": {
         "headline": "Build faster",
         "subheadline": "Ship composable experiences"
       }
     }
   ]
 }
}
```

### UID vs Label

When integrating with APIs or SDKs:

-   **UID**: Used in API responses and application logic
-   **Label**: Display name in the UI

Always use UIDs in code to ensure correct data mapping.

### Implementation guidance

-   Identify the block UID (for example, hero\_section)
-   Map each block to a UI component
-   Handle optional fields safely
-   Render blocks in the order returned by the API

## Troubleshooting Modular Blocks

| Issue | Possible cause | What to check |
| --- | --- | --- |
| Section not rendering | Block UID mismatch | Verify block UID matches API response |
| Field value missing | Field UID mismatch | Compare API response keys with implementation |
| Content not visible | Entry not published | Check environment, locale, and publish status |
| Incorrect order | Rendering ignores array order | Render blocks in API response order |
| Nested content missing | Parser limitation | Ensure nested blocks are supported |

## Best Practices

-   Use a consistent Modular Blocks field name (for example, sections)
-   Define required and optional fields clearly
-   Maintain a mapping between block UIDs and UI components
-   Validate API responses before debugging UI issues

## Limitations of Modular Blocks

-   You can add a maximum of **five Modular Blocks fields** in a single content type.
-   Each Modular Blocks field can contain up to **100 block definitions**.
-   Up to **three levels** of nesting are allowed within Modular Blocks fields.
-   A nested Modular Blocks field can include up to **20 block definitions**.
-   A content type can include a maximum of **100 fields** in total, including Modular Blocks fields and nested fields.
-   You can add up to **100 block instances** within a Modular Blocks field while creating an entry.
-   A nested Modular Blocks field supports up to **30 block instances** per entry.

**Additional Resources:**

-   Learn about [best practices for adding Modular Blocks](/docs/headless-cms/content-modeling-best-practices#use-modular-blocks-field-for-dynamic-web-pages) in our dedicated guide.
-   Read our Modular Blocks [validation guide](/docs/agent-os) to understand how to implement validation rules effectively.
-   Explore our comprehensive documentation on [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) to control how fields appear based on user input.
