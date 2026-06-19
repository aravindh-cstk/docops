---
title: "[Set Up Your Project] - Number of Characters"
description: Documentation for the Number of Characters property used to set minimum and maximum character limits for fields in content types.
url: https://www.contentstack.com/docs/headless-cms/number-of-characters
product: Set Up Your Project
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Number of Characters

This page explains how to use the **Number of Characters** property when creating content types, including who should use it (developers configuring fields) and when to apply it (to enforce minimum/maximum character limits for user input).

## Number of Characters

The **Number of Characters** property lets you specify a limit of the minimum or maximum number of characters that a user can input to a [field](/docs/developers/create-content-types/about-fields).

For example, you want to create an SEO block in your website containing the Meta Title and Meta Description fields and set a minimum and maximum limit for these fields. Using this property, you can configure the Meta Title and Meta Description fields to have a maximum limit of 60 and 160 characters, respectively.

When you [create a content type](/docs/developers/create-content-types/create-a-content-type) and add an input type of field to it, under the **Number of Characters** property, you will see two options:
- **Minimum**: Lets you specify the minimum number of characters to enter in the field.
- **Maximum**: Lets you specify the maximum number of characters to enter in the field.

A user should adhere to the **Number of Characters** property while creating entries for a content type. If the input to a field is not within the specified limit, the entry cannot be published.

## Common questions

**How do I set a minimum character limit for a field?**  
Under the **Number of Characters** property, use **Minimum** to specify the minimum number of characters to enter in the field.

**How do I set a maximum character limit for a field?**  
Under the **Number of Characters** property, use **Maximum** to specify the maximum number of characters to enter in the field.

**What happens if the input is outside the specified character limit?**  
If the input to a field is not within the specified limit, the entry cannot be published.

**Where do I find the Number of Characters property?**  
When you create a content type and add an input type of field to it, you will see the **Number of Characters** property with the available options.