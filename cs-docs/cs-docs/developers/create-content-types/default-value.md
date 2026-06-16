---
title: "[Set Up Your Project] - Default Value"
description: Documentation for the Default Value property of a field when setting up a project and creating content types.
url: https://www.contentstack.com/docs/developers/create-content-types/default-value
product: Documentation
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Default Value

This page explains the **Default Value** property for a field in a content type, who it affects (developers configuring fields and users creating entries), and when to use it to prefill repeated values for new entries.

### Item 1

#### Article section

##### Heading

Default Value

##### Content

The **Default Value** property of a [field](/docs/developers/create-content-types/about-fields) allows you to provide a default value for the field. When you set a default value of a field, users will see that value by default whenever they [create a new entry](/docs/content-managers/working-with-entries/create-an-entry). However, you do have the provision to change this value while creating an entry.

The advantage of using this property is when you don’t want to enter constant data every time while creating multiple entries, the provided default value gets applied to the field it's assigned to.

For example, for a **Location **([Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox)) field you won’t need to enter the same data every time you create an entry. Instead, you can use the **Default Value** property and enter the data of the **Location **field while configuring the [content type](/docs/developers/create-content-types/about-content-types).

**Note**: If you choose to modify the default value of a field after creating some entries for the content type, the updated value will only apply to new entries created thereafter, while the existing entries will retain their original values.

## Common questions

### What happens if I change a field’s default value after entries already exist?
If you choose to modify the default value of a field after creating some entries for the content type, the updated value will only apply to new entries created thereafter, while the existing entries will retain their original values.

### Can users change the default value when creating a new entry?
Yes. Users will see the default value by default whenever they create a new entry; however, you do have the provision to change this value while creating an entry.

### When should I use the Default Value property?
Use it when you don’t want to enter constant data every time while creating multiple entries, so the provided default value gets applied to the field it's assigned to.

### Where do I configure a field’s default value?
You can use the **Default Value** property and enter the data of the field while configuring the content type.