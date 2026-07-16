---
title: "[Set Up Your Project] - Validation Error Message"
description: Validation Error Message property documentation for custom validation error messages when Validation (Regex) fails.
url: https://www.contentstack.com/docs/headless-cms/validation-error-message
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Validation Error Message

This page explains the **Validation Error Message** property, who should use it (developers configuring fields and validations), and when to apply it (when you want a custom error message shown to users when **Validation (Regex)** checks fail).

## Validation Error Message

The **Validation Error Message** property lets you define a custom error message to display if the validation checks specified in the **Validation (Regex)** fails.

If you do not specify any custom error message in this property (and assuming that you have specified certain rules in the **Validation (regex)** property), the system will use a generic error message in case of errors. The generic error message is "The input value is invalid."

**Note**: In order to use this property, make sure that you have used the [**Validation (regex)**](./validation-regex.md) property.

For example, if you do not want a user to enter an invalid email address in a [field](./about-fields.md), you can configure this property by setting a message such as "Please enter a valid email address." Now, if the user enters an invalid email address in the field, this error message will be shown on the [entry](../../content-managers/author-content/about-entries.md) page as follows:

**Additional Resource**: You can check out our [Content Validations](../security/validations.md) guide to ensure accuracy while entering content.

## Common questions

**Q: When is the generic error message shown?**  
A: If you do not specify any custom error message in this property, the system will use the generic error message: "The input value is invalid."

**Q: Do I need to configure anything else for Validation Error Message to work?**  
A: **Note**: In order to use this property, make sure that you have used the [**Validation (regex)**](./validation-regex.md) property.

**Q: Where will the custom error message appear?**  
A: If the user enters an invalid value, the error message will be shown on the [entry](../../content-managers/author-content/about-entries.md) page.

**Q: Where can I learn more about validations?**  
A: **Additional Resource**: You can check out our [Content Validations](../security/validations.md) guide to ensure accuracy while entering content.