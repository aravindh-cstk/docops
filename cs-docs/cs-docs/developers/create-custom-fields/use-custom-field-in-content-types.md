---
title: "[Extensions] - Use Custom Field in Content Types"
description: How to use a custom field (extension) in Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-custom-field-in-content-types
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Use Custom Field in Content Types

This page explains how to add and use a custom field (extension) inside a Contentstack content type. It is intended for developers configuring content models and should be used after you have created a custom field in a stack and want to include it in a content type for entry creation.

## Use Custom Field in Content Types

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](/docs/developers/developer-hub/custom-field-location/) for the Contentstack App Framework to extend the functionality of your apps.

Once you have added a custom field to your [stack](/docs/developers/set-up-stack/about-stack), you can use it in your [content type](/docs/developers/create-content-types/about-content-types) like any other field.

To add a custom field in a content type, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your stack and and click on the “Content Models” icon on the left navigation panel.
- Click on the **+ New Content Type** button.
- Enter the details as shown in the below image and click **Save and Proceed**.
- In the Content Type Builder page, add the [Custom](/docs/developers/create-content-types/custom) field in your content type by clicking on the “Insert a field” link represented by a + sign.
- Under **Select Extension**, select the custom field that you created.
You can add other [fields](/docs/developers/create-content-types/about-fields) as per requirements.
- Optionally, you can provide specific configuration settings for your custom extension field within the [**Config Parameters**](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) field in the **Advanced** properties. This setting will be applicable to only this particular instance of the Custom Field.
- After adding the fields, click on either **Save** or **Save and Close** to save your changes.

Now, when you [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for that content type, you will see your custom field in action.

## Common questions

### Should I use Experience Extensions or the Custom Field UI location?
**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](/docs/developers/developer-hub/custom-field-location/) for the Contentstack App Framework to extend the functionality of your apps.

### Where do I select the custom field I created?
Under **Select Extension**, select the custom field that you created.

### Can I configure a custom field differently for a specific content type?
Optionally, you can provide specific configuration settings for your custom extension field within the [**Config Parameters**](/docs/developers/create-content-types/config-parameter-for-custom-fields-only) field in the **Advanced** properties. This setting will be applicable to only this particular instance of the Custom Field.

### When will I see the custom field in action?
Now, when you [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for that content type, you will see your custom field in action.