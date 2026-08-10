---
title: "Group Fields within Global Fields"
description: "Learn to create a Group field within a Global field in Contentstack to streamline content modeling and maintain consistency across entries."
url: /headless-cms/group-fields-within-global-fields
---

# Group Fields within Global Fields

## Group Fields within Global Fields

Use [Group](/docs/headless-cms/group) fields within [Global](/docs/headless-cms/about-global-field) fields in Contentstack to streamline content modeling and reduce repetitive configurations. This approach lets you create reusable, structured field groups that can be referenced across multiple [content types](/docs/headless-cms/about-content-types), ensuring consistency, simplifying maintenance, and speeding up content creation.

For example, a healthcare website may need to display banners or advertisements with related links on every webpage. Instead of adding these elements separately to each content type, you can create a **Global** field that includes a **Group** field called **Banner** containing:

-   [Single Line Textbox](/docs/headless-cms/single-line-textbox) (Banner Title)
-   [Rich Text Editor](https://www.contentstack.com/docs/headless-cms/about-json-rich-text-editor) (Description)
-   [File field](/docs/headless-cms/file) (Banner Image)
-   [Link field](/docs/headless-cms/link) (Helpful Links)

Once created, this Global field can be referenced in any content type, ensuring a uniform display of banners and related links across all web pages.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) can create Global fields and Content Types.

To create a Group field within a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C” (for Windows and Mac OS users).
2.  On the **Content Models** page, select **Global Fields** and click **\+ New Global Field**.
3.  Enter a **Name** and **Description** (optional), and click **Proceed**.
    
    ![Global field setup modal in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d3c9f9337fb7b77/6800b92045744f70edc9861e/1._Complex-Global-Fields_Group-Fields-Within-Global-Fields_New-Global-Field-Button.png)
    
4.  Click the **Insert a Field (+)** icon and select **Group** field.
5.  In the **Group Properties** modal, enter a display name.
6.  Click the **Insert a field (+)** icon inside the group and add the following fields:
    1.  **Single Line Textbox**: For banner heading
    2.  **JSON Rich Text Editor**: For detailed banner text
    3.  **File**: To upload an image for the banner
    4.  **Link**: For related webpage links
7.  Click **Save** or **Save and Close**.
    
    ![Saved Global field with nested group structure](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt360e1e865dfaff2e/6800b920996a89383121516a/2._global_field_created.png)
    
8.  Navigate to **Content Models** and open a content type.
9.  Click the **Insert a field (+)** icon and select **Global** field.
10.  Select the newly created Global field from the **Select Global Fields** modal and click **Save** or **Save and Close**.

![Global field being inserted into a content type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0b078b34cb3a99f/6800b91fdac25828f3addb24/3._global_field_inserted_within_group_field.png)

**Note:** When you add a Group field to your Global field, each Group field counts as a single nesting level.

All fields inside the Global Field, including the Group Field and its subfields, are now added to the Content Type. By nesting Group Fields within Global Fields, you create modular, reusable structures that enhance content consistency and simplify maintenance across content types.
