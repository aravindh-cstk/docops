---
title: "[Set Up Your Project] - Config Parameter (for Custom Fields only)"
description: Config Parameter (for Custom Fields only)
url: https://www.contentstack.com/docs/developers/create-content-types/config-parameter-for-custom-fields-only
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Config Parameter (for Custom Fields only)

This page explains the **Config Parameter** property for Custom Fields, intended for developers configuring custom field instances within content types, especially when you need to override default configuration for a specific field instance.

## Config Parameter (for Custom Fields only)

The Config Parameter property allows you to add configuration parameters specific to only the current instance of the [custom](/docs/developers/create-content-types/custom) field.

Ideally, if you add configuration parameters while setting up the **Custom Field **extension, it applies to all instances of the custom field automatically. However, if you want to override the default config for a particular instance of the custom field, you can use this field while adding the custom field to your [content type](/docs/developers/create-content-types/about-content-types).

Here’s an example to understand this better. If, while setting up the [Table ](/docs/developers/create-custom-fields/table)field, you specify in the **Config Parameter** field that the default rows & columns limit should be "10", every time you add an instance of the custom field, the default rows and columns limit would be "10."

Note: The maximum column limit is 50, you can specify the limit values of rows & columns in the **Config Parameter **of the [Table](/docs/developers/create-custom-fields/table) custom field extension.

However, if you want to change the default rows & columns limit for a particular instance of the custom field in your content type, you can specify it in the **Config Parameter** field property of that instance, while [creating the content type](/docs/developers/create-content-types/create-a-content-type).

As a result, only that instance of the Table field will have "10" as the default rows & columns limit. Other instances will continue to get the data according to the default config settings.

**Warning:** Refrain from providing any kind of secret keys that might allow unauthorized data manipulation, as the value can be viewed by users who have access to your Custom Field.

**Note:** You can [Enable field data syncing with Contentstack](/docs/developers/create-custom-fields/create-new-custom-field#enable-field-data-syncing-with-contentstack) to make the created field UI recognize the config parameters within the custom control.

## Common questions

### When should I use the Config Parameter property instead of configuring the Custom Field extension?
Use the Config Parameter property when you want to override the default config for a particular instance of the custom field while adding it to a content type.

### Does setting Config Parameter on a content type affect all instances of the custom field?
No. The Config Parameter property applies to only the current instance of the custom field.

### Are there limits for the Table custom field configuration?
Yes. Note: The maximum column limit is 50, you can specify the limit values of rows & columns in the **Config Parameter **of the [Table](/docs/developers/create-custom-fields/table) custom field extension.

### Can I store secret keys in Config Parameter?
**Warning:** Refrain from providing any kind of secret keys that might allow unauthorized data manipulation, as the value can be viewed by users who have access to your Custom Field.