---
title: "[Global Field] - Group Fields within Global Fields"
description: Use Group fields within Global fields in Contentstack to streamline content modeling and reduce repetitive configurations.
url: https://www.contentstack.com/docs/headless-cms/group-fields-within-global-fields
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Global Field] - Group Fields within Global Fields

This page explains how to use **Group** fields inside **Global** fields in Contentstack to create reusable, structured field groups that can be referenced across multiple content types. It is intended for developers and content modelers who design content models and should be used when you want to reduce repetitive field configurations and ensure consistency across content types.

## Group Fields within Global Fields

Use [Group](../create-content-types/group.md) fields within [Global](./about-global-field.md) fields in Contentstack to streamline content modeling and reduce repetitive configurations. This approach lets you create reusable, structured field groups that can be referenced across multiple [content types](../create-content-types/about-content-types.md), ensuring consistency, simplifying maintenance, and speeding up content creation.

For example, a healthcare website may need to display banners or advertisements with related links on every webpage. Instead of adding these elements separately to each content type, you can create a **Global** field that includes a **Group** field called **Banner** containing:
- [Single Line Textbox](../create-content-types/single-line-textbox.md) (Banner Title)
- [Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) (Description)
- [File field](../create-content-types/file.md) (Banner Image)
- [Link field](../create-content-types/link.md) (Helpful Links)

Once created, this Global field can be referenced in any content type, ensuring a uniform display of banners and related links across all web pages.

**Note:** Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and Content Types.

To create a Group field within a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C” (for Windows and Mac OS users).
- On the **Content Models** page, select **Global Fields** and click **+ New Global Field**.
- Enter a **Name** and **Description** (optional), and click **Proceed**.
- Click the **Insert a Field (+)** icon and select **Group** field.
- In the **Group Properties** modal, enter a display name.
- Click the **Insert a field (+)** icon inside the group and add the following fields:**Single Line Textbox**: For banner heading
- **JSON Rich Text Editor**: For detailed banner text
- **File**: To upload an image for the banner
- **Link**: For related webpage links
- Click **Save** or **Save and Close**.
- Navigate to **Content Models** and open a content type.
- Click the **Insert a field (+)** icon and select **Global** field.
- Select the newly created Global field from the **Select Global Fields** modal and click **Save** or **Save and Close**.

**Note:** When you add a Group field to your Global field, each Group field counts as a single nesting level.

All fields inside the Global Field, including the Group Field and its subfields, are now added to the Content Type. By nesting Group Fields within Global Fields, you create modular, reusable structures that enhance content consistency and simplify maintenance across content types.

## Common questions

### Who can create Global fields and Content Types?
Only the stack owner, admin, and developer can create Global fields and Content Types.

### What is the benefit of using a Group field inside a Global field?
It helps streamline content modeling and reduce repetitive configurations by creating reusable, structured field groups that can be referenced across multiple content types.

### Does a Group field inside a Global field affect nesting limits?
Yes. When you add a Group field to your Global field, each Group field counts as a single nesting level.

### After adding a Global field to a content type, what fields are included?
All fields inside the Global Field, including the Group Field and its subfields, are added to the Content Type.