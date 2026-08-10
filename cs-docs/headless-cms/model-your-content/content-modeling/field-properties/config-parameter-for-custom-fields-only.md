---
title: "Config Parameter (for Custom Fields only)"
description: "Learn how to customize configuration parameters for Contentstack's custom fields to manage individual instance settings with precision and flexibility."
url: /headless-cms/config-parameter-for-custom-fields-only
---

# Config Parameter (for Custom Fields only)

## Config Parameter (for Custom Fields only)

The Config Parameter property allows you to add configuration parameters specific to only the current instance of the [custom](/docs/headless-cms/custom) field.

Ideally, if you add configuration parameters while setting up the **Custom Field** extension, it applies to all instances of the custom field automatically. However, if you want to override the default config for a particular instance of the custom field, you can use this field while adding the custom field to your [content type](/docs/headless-cms/about-content-types).

Here’s an example to understand this better. If, while setting up the Table field, you specify in the **Config Parameter** field that the default rows & columns limit should be "10", every time you add an instance of the custom field, the default rows and columns limit would be "10."

**Note:** Note: The maximum column limit is 50, you can specify the limit values of rows & columns in the **Config Parameter** of the Table custom field extension.

However, if you want to change the default rows & columns limit for a particular instance of the custom field in your content type, you can specify it in the **Config Parameter** field property of that instance, while [creating the content type](/docs/headless-cms/create-a-content-type). 

As a result, only that instance of the Table field will have "10" as the default rows & columns limit. Other instances will continue to get the data according to the default config settings.

![config-parameter.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4634e5ac22c09f6e/65cef3cc90d6657de8643a32/config-parameter.png)

**Warning:** Refrain from providing any kind of secret keys that might allow unauthorized data manipulation, as the value can be viewed by users who have access to your Custom Field.

**Note:** You can [Enable field data syncing with Contentstack](/docs/headless-cms/custom) to make the created field UI recognize the config parameters within the custom control.
