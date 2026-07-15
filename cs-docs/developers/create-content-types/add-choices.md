---
title: "[Set Up Your Project] - Add Choices"
description: Add Choices property for the Select field, including single-value and key-value pair choices.
url: https://www.contentstack.com/docs/headless-cms/add-choices
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Add Choices

This page explains how to use the **Add Choices** property of the Select field when setting up a content type, including how to define single-value and key-value pair options. It is intended for developers configuring content types and content managers who will select from these options when creating entries.

## Add Choices

The **Add Choices** property of the [Select](./select.md) field enables you to enter the options that will be visible to the [content managers](../invite-users-and-assign-roles/types-of-roles.md#content-manager) as choices to select from.

**Warning**: If you change the data type after entering the choices, the values added as choices may be lost.

You can add choices within the Select field in two ways:
- **Single-value choices**: You can add options containing simple values, for example, in eCommerce, let someone pick a shirt size from S, M, L, or XL.![Add-Choices_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7883e11f5ccfe232/667420d012a7876233664b9a/Add-Choices_1.png)
- **Key-value pair choices**: You can toggle the **Key-value enabled** option and add key-value pairs separated by a colon (:). Every choice is separated by a comma.**Note**: Only the key name is displayed on the entry page.

For example, we might want to specify the state code for a state while defining choices in a government website, so we can specify key-value pairs such as New York: NY.

**Note**: You can add up to **100** options that are up to **100** characters long.

After you configure this property in your [content type](./about-content-types.md) and [create an entry](../../content-managers/author-content/create-an-entry.md), you will see your entry page as shown below.

## Common questions

### What is the Add Choices property used for?
It enables you to enter the options that will be visible to the content managers as choices to select from.

### What happens if I change the data type after entering choices?
**Warning**: If you change the data type after entering the choices, the values added as choices may be lost.

### What is the difference between single-value choices and key-value pair choices?
- **Single-value choices**: You can add options containing simple values.
- **Key-value pair choices**: You can toggle the **Key-value enabled** option and add key-value pairs separated by a colon (:).

### Are there limits on how many choices I can add?
**Note**: You can add up to **100** options that are up to **100** characters long.