---
title: Set Up Your Project - Link
description: Documentation for the Link field used when creating content types.
url: https://www.contentstack.com/docs/headless-cms/link
product: Contentstack
doc_type: field-reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# Set Up Your Project - Link

This page describes the **Link** field used in Contentstack content types, including what it does, its subfields, and which field properties you can configure. It is intended for developers and content modelers setting up or updating content types and should be used when deciding how to store and manage links in entries.

### Item 1

#### Article section

##### Heading

Link

##### Content

The **Link **field enables users to add link(s) in their [entry](../../content-managers/author-content/about-entries.md) page. This field possesses two subfields:
- **Title**: Lets you specify the display text for the corresponding link
- **Link**: Lets you specify a static or relative (to the site’s root) URL for the corresponding title

This field possesses certain [properties](./about-field-properties.md) that you can change any time as per your needs. The properties that can be modified are “[Display Name](./display-name.md),” “[Unique ID](./unique-id.md),” “[Instruction Value](./instruction-value.md),” “[Help Text](./help-text.md),” “[Default Value](./default-value.md),” “[Mandatory](./mandatory.md),” “[Multiple](./multiple.md),” and “[Non-localizable](./non-localizable.md).”

After adding this field in [content type](./about-content-types.md), you will see it on your entry page as shown below.

**Additional Resources**:
- Contentstack allows you to hide/show a field when certain conditions are met using [Field Visibility Rules](./about-field-visibility-rules.md).
- Rather than using UI, if you are adding this field to the content type using our [API request](../../../api-docs/api-detail/content-management-api.md#create-a-content-type), refer to the [JSON payload of the Link](./json-schema-for-creating-a-content-type.md#link) field.
- To see how to map a website's layout to your content type, we recommend you to check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide.
- Editing any current field in the existing content type might result in data loss. To prevent data loss, make sure to check out our [Content Type Change Management](../content-modeling/content-type-change-management.md) guide.

## Common questions

### What subfields does the Link field include?
The Link field possesses two subfields: **Title** and **Link**.

### Can the Link field store relative URLs?
Yes. The **Link** subfield lets you specify a static or relative (to the site’s root) URL for the corresponding title.

### Which properties can be modified for the Link field?
The properties that can be modified are “[Display Name](./display-name.md),” “[Unique ID](./unique-id.md),” “[Instruction Value](./instruction-value.md),” “[Help Text](./help-text.md),” “[Default Value](./default-value.md),” “[Mandatory](./mandatory.md),” “[Multiple](./multiple.md),” and “[Non-localizable](./non-localizable.md).”

### Where can I find the JSON payload for creating a Link field via API?
Refer to the [JSON payload of the Link](./json-schema-for-creating-a-content-type.md#link) field.