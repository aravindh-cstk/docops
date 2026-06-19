---
title: "[Security Management] - Validations"
description: Content validations in Contentstack, including built-in validation rules, custom regex validations, custom error messages, and how to set validations on fields.
url: https://www.contentstack.com/docs/administration/validations
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Security Management] - Validations

This page explains how validations work in Contentstack, including built-in validation rules and custom regex-based validations, and how to apply them to fields in content types. It is intended for developers and content administrators who configure content models and want to reduce human errors during content entry.

## Validations

No matter how robust a CMS platform is, it cannot eliminate the human errors made while entering content in it.

But these errors can be minimized by setting content validations.

Validations are set of rules or conditions that check for the correctness or accuracy of the data being entered.

In Contentstack, validations can be set on the fields of a [content type](/docs/developers/create-content-types/about-content-types). So, when [content managers](/docs/developers/invite-users-and-assign-roles/types-of-roles) input data, these [validations](/docs/developers/create-content-types/validation-regex/) check if the content being entered meets the specified conditions.

Contentstack provides many built-in validation rules that you can apply to your fields depending on the type of input data for the field. Apart from these built-in content validations, you can set your custom validation rules too.

## Built-in Content Validations

Let’s go through the types of validation checks available in Contentstack. These validations can be set on specific [fields](/docs/developers/create-content-types/about-fields) of your content type.

### Mandatory

You can mark a field as [Mandatory](/docs/developers/create-content-types/mandatory), which means that a particular field cannot be left blank. Fields marked as mandatory will be represented by an asterisk (*) sign beside the field name. Content managers will not be able to save entries if "Mandatory" fields are left blank.

You can set this validation rule to the “Single Line Textbox,” “Multi Line Textbox,” “Rich Text Editor,” “Markdown,” “Number,” “Date,” “File,” “Link,” and “Reference” fields.

**Additional Resource:** You can look at our list of guides under [Create Content Types](/docs/developers/create-content-types) section that covers how to create a content type, what fields you can add, what field properties you can apply to them, field visibility rules, content type labels, and other actions.

### Unique

Marking a field as [Unique](/docs/developers/create-content-types/unique) prevents the duplication of entered content across entries in a content type. Every time a [user](/docs/developers/invite-users-and-assign-roles/about-stack-users) enters an already entered value into a unique field, the validator will prompt the user to change the duplicate value.

You can set this validation rule to the “Single Line Textbox,” “Multi Line Textbox,” “Rich Text Editor,” “Markdown,” “Number,” “Date,” “File,” “Link,” and “Reference” fields.

### Number of Characters

Setting a character limit will ensure that users enter content within the maximum or the minimum number of characters set to a field. For example, you want to create a "Password" field on your website, and you want to set a minimum and maximum limit to the cell. In this case, the [Number of Characters](/docs/developers/create-content-types/number-of-characters) validation rule comes in handy.

You can set this validation rule to the “Single Line Textbox” and “Multi Line Textbox” fields.

### Allow Images Only

You can set [this validation rule](/docs/developers/create-content-types/allow-images-only) to the [File](/docs/developers/create-content-types/file) field only. Setting this rule will allow you to upload only image file type instead of any file type.

### Allowed File Type(S)

You can set the [Allowed file type(s)](/docs/developers/create-content-types/allowed-file-types) validation rule to specify the file types that users can upload. Setting this option will validate every file that the user will upload.

Once you set the permitted file types for a field, users will not upload any other file types apart from the ones mentioned in this validation rule. Let’s say if you set the values as “pdf, png, md”, the user will only be able to upload files PDF documents, PNG graphic images, and Markdown files.

You can set this validation rule to the File field.

### File Size Limit

You can set a validation rule to restrict the size limit of files that are being uploaded. Once you set limits for file size, users will not upload files that have sizes that do not fall within the mentioned range.

You can set this validation rule to the File field.

### Set Date Range

This validation allows you to enter a range of dates that the user will be allowed to select from. Setting this validation rule enables the user to choose a time that will fall only within a specified date range.

You can set this validation rule to the [Date](/docs/developers/create-content-types/date) field.

## Custom Validation (Regex)

You define [custom validation rules](/docs/developers/create-content-types/validation-regex) that will perform validation checks (format, length, etc.) on the user's value entered in the given field. If the user enters a value that does not pass these checks, an error will be thrown.

**Note:** Lengthy input strings or complex regex validation logic may result in “catastrophic backtracking,” which may not allow you to save the content type. Read more on [how to prevent catastrophic backtracking](/docs/developers/create-content-types/validation-regex#prevent-catastrophic-backtracking).

Validation rules can be defined by specifying custom validation regular expressions. Let’s see a few examples:

- Email: To check whether the email address entered in the email field is valid or not, you can specify the following regex code as the validation rule for the field:

```
[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

```

- URL: To check whether a URL entered by a user is valid, you can use the following regex code for validating the field:

```
^(http(?:s)?\:\/\/[a-zA-Z0-9]+(?:(?:\.|\-)[a-zA-Z0-9]+)+(?:\:\d+)?(?:\/[\w\-]+)*(?:\/?|\/\w+\.[a-zA-Z]{2,4}(?:\?[\w]+\=[\w\-]+)?)?(?:\&[\w]+\=[\w\-]+)*)$

```

- Date: You can define rules to check whether the date entered by a user is in the valid format by using the following regex code.

```
^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$

```

**Note:** The above code will check if the entered value is in one of the “dd/mm/yyyy”, “dd-mm-yyyy”, or “dd.mm.yyyy” formats. It will also validate leap years.
Learn more about [regular expressions](http://www.regular-expressions.info/).

## Custom Error Message

For custom validation rules, you can set [custom error messages](/docs/developers/create-content-types/validation-error-message) displayed to the user if the validation checks specified in the field do not pass. For example, when you enter an email address of invalid format, you will get the notification - “Please enter a valid email address” or “Entered email address is invalid”.

## Setting Validations to Fields

You can set up validations for fields while setting their properties. When you select a field in your content type, check the validations that you wish to apply to it. These validators become effective and start validating your input only when you start creating entries.

When the validators encounter invalid content in the form of content of invalid format, incompatible date ranges, etc., it alerts users with their default error messages.

## Common questions

### What are validations used for in Contentstack?
Validations are used to minimize human errors by checking the correctness or accuracy of the data being entered into fields.

### Where can validations be applied?
Validations can be set on the fields of a content type in Contentstack.

### Can I create my own validation rules?
Yes, apart from built-in content validations, you can set custom validation rules using regex.

### When do validations start working?
Validators become effective and start validating your input only when you start creating entries.