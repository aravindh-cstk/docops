---
title: "[Set Up Your Project] - Custom"
description: Documentation for the Custom field used to add and use customizable fields in a Contentstack content type via extensions (custom field logic).
url: https://www.contentstack.com/docs/headless-cms/custom
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Custom

This page explains the **Custom** field in Contentstack content types, including prerequisites (extensions/custom fields), configurable properties, and ways to add custom fields. It is intended for developers configuring content models and should be used when you want to integrate custom field logic or third-party business applications into a content type.

### Item 1

#### Article section

##### Heading

Custom

##### Content

The **Custom** field enables you to add and use customizable fields in the content type. You need to add one or more extensions (custom field logic) to the stack to use this field. Apart from using the default [fields](./about-fields.md) such as “Single-line textbox,” “Rich Text Editor,” and so on, you can integrate with numerous business applications, such as “[Marketo Forms](https://developers.marketo.com/javascript-api/forms/)”, “[Optimizely](https://www.optimizely.com/)”, and “[Brightcove](https://www.brightcove.com/en/)” by adding them as [custom fields](../create-custom-fields/about-custom-fields.md) to the Contentstack [content type](./about-content-types.md).

**Additional Resource:** To learn what Extensions are and how they work, refer to the [Extensions](/docs/developers#extend-contentstack-s-ui-through-extensions) guide.

This field possesses certain [properties](./about-field-properties.md) that you can change at any time per your needs. The properties that you can modify are “Select Extension,” “[Display Name](./display-name.md)”, “[Unique ID](./unique-id.md)”, “[Instruction Value](./instruction-value.md)”, “[Help Text](./help-text.md)”, “[Config Parameter](./config-parameter-for-custom-fields-only.md),” “[Mandatory](./mandatory.md),” and “[Non-localizable](./non-localizable.md).”

After you [add or create a custom field](../create-custom-fields/create-new-custom-field.md) extension in the stack, you can [use it in content types](../create-custom-fields/use-custom-field-in-content-types.md).

The following are the two ways to add custom fields to your content types:
- **Create new custom fields** - Create custom fields by writing custom code and using it in the content types.
- **Use prebuilt templates** - Use the prebuilt templates by modifying the given code to suit your requirements. Contentstack provides certain pre-built custom fields such as color picker, code editor, video selector, and more.

For this example, the Star Rating custom field is added in the content type, you will see it on the entry page as shown below.

**Additional Resources**:
- Contentstack enables you to enhance the functionality of a field by setting up [Field Visibility Rules](./about-field-visibility-rules.md) to hide/show a field on meeting certain conditions.
- You can check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide to learn how you can map your webpage’s layout with your Content Type.
- Editing any current field in the existing Content Type might result in data loss. To prevent data loss, check out our [Content Type Change Management guide](../content-modeling/content-type-change-management.md).

## Common questions

### Do I need an extension to use the Custom field?
Yes. You need to add one or more extensions (custom field logic) to the stack to use the **Custom** field.

### What kinds of integrations can be added as custom fields?
You can integrate with numerous business applications (for example, Marketo Forms, Optimizely, and Brightcove) by adding them as custom fields to a Contentstack content type.

### What can I configure on a Custom field in a content type?
You can modify properties such as “Select Extension,” “Display Name,” “Unique ID,” “Instruction Value,” “Help Text,” “Config Parameter,” “Mandatory,” and “Non-localizable.”

### How can I add custom fields to content types?
You can either create new custom fields by writing custom code, or use prebuilt templates by modifying the given code to suit your requirements.