---
title: "Validation Error Message"
description: "Define a custom error message that will be displayed to the user if the validation checks specified in the \"Validation (Regex)\" field do not pass."
url: /headless-cms/validation-error-message
uid: blt609b14a6114f89cd
---

# Validation Error Message

## Validation Error Message

The **Validation Error Message** property lets you define a custom error message to display if the validation checks specified in the **Validation (Regex)** fails.

If you do not specify any custom error message in this property (and assuming that you have specified certain rules in the **Validation (regex)** property), the system will use a generic error message in case of errors. The generic error message is "The input value is invalid."

**Note:** In order to use this property, make sure that you have used the [**Validation (regex)**](/docs/headless-cms/validation-regex) property.

For example, if you do not want a user to enter an invalid email address in a [field](/docs/headless-cms/about-fields), you can configure this property by setting a message such as "Please enter a valid email address." Now, if the user enters an invalid email address in the field, this error message will be shown on the [entry](/docs/headless-cms/about-entries) page as follows:

![validation-error-message.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt677feb0f8d062835/65cee257828499293683780d/validation-error-message.png)

**Additional Resource:** You can check out our [Content Validations](/docs/administration/validations) guide to ensure accuracy while entering content.
