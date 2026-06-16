---
title: "[Set Up Your Project] - Add Choices"
description: Add Choices property for the Select field, including single-value and key-value pair choices.
url: https://www.contentstack.com/docs/developers/create-content-types/add-choices
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

The **Add Choices** property of the [Select](/docs/developers/create-content-types/select) field enables you to enter the options that will be visible to the [content managers](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) as choices to select from.

**Warning**: If you change the data type after entering the choices, the values added as choices may be lost.

You can add choices within the Select field in two ways:
- **Single-value choices**: You can add options containing simple values, for example, in eCommerce, let someone pick a shirt size from S, M, L, or XL.
- **Key-value pair choices**: You can toggle the **Key-value enabled** option and add key-value pairs separated by a colon (:). Every choice is separated by a comma.**Note**: Only the key name is displayed on the entry page.

For example, we might want to specify the state code for a state while defining choices in a government website, so we can specify key-value pairs such as New York: NY.

**Note**: You can add up to **100** options that are up to **100** characters long.

After you configure this property in your [content type](/docs/developers/create-content-types/about-content-types) and [create an entry](/docs/content-managers/working-with-entries/create-an-entry), you will see your entry page as shown below.

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