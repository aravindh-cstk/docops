---
title: "Edit a Global Field"
description: "Learn how to edit a Global field in Contentstack without data loss. Follow best practices to update schema and avoid impacting existing entries."
url: /headless-cms/edit-a-global-field
uid: blt61f2dc084dec501c
---

# Edit a Global Field

## Edit a Global Field

Once created, you can edit a Global field anytime. However, removing a field, changing its data type, or enabling the [Multiple](/docs/headless-cms/multiple/) attribute may result in data loss.

**Additional Resource:** If a Global field is used in published entries within a content type, modifying its schema may cause data loss in those entries. To avoid issues, refer to the [content type change management](/docs/headless-cms/content-type-change-management) guide for best practices on updating content type schemas without impacting live content.

To edit a Global field, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to edit a Global field.
2.  Click the **Content Models** icon in the left navigation panel and select **Global Fields** in the left panel.
3.  Locate the Global field you want to edit. Click the vertical ellipsis in the **Actions** column next to it and select **Edit**.

    ![Edit global field option in actions menu](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb830fd70d0b5a3d9/67ff94d595f40fb6bc992771/3._edit_a_global_field.png)

4.  Modify the **Name** or **Description** as needed.
5.  To edit the fields inside the Global field, click its title.
6.  Make the necessary changes to the Global field schema.

    **Note:** Changing or removing a field in a Global field increases the version number of all entries where the Global field is used.

    ![Edit global field tiles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94e291ce4c15d7a0/680a233f2835f92c42ad9c28/2-edit-global-field-title.gif)

7.  Click **Save** or **Save and Close** to apply the changes.

**Warning**:

-   Enabling the **Multiple** attribute for any field within a Global field will permanently erase that field’s data in all existing entries.
-   When modifying nested Global fields, carefully assess the impact to prevent unintended data loss.

## API Reference

To edit a Global field via API, refer to the [Update Global Field](/docs/developers/apis/content-management-api/global-fields#update-a-global-field) API request.
