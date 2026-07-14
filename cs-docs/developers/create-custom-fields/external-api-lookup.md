---
title: "[Extensions] - External API Lookup"
description: Documentation for the legacy (deprecated) External API Lookup custom field extension, including setup and usage steps.
url: https://www.contentstack.com/docs/developers/create-custom-fields/external-api-lookup
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy
last_updated: 2026-03-25
---

# [Extensions] - External API Lookup

This page explains how to create and use the legacy (deprecated) External API Lookup custom field extension in Contentstack, intended for developers configuring custom fields in stacks and content types when integrating third-party/external API resources into entry creation.

## External API Lookup

**Note:** The External API Lookup custom field is part of our legacy Experience Extensions and is deprecated.

The External API Lookup extension allows you to fetch resources from third-party/external apps using APIs and display the resources in a [field](../create-content-types/about-fields.md) in the [content type](../create-content-types/about-content-types.md) of your [stack](../set-up-stack/about-stack.md).

Thus, while creating an [entry](../../content-managers/author-content/about-entries.md), you can select one or more resources from a list of possible values as an input value for the field.

This step-by-step guide explains how to create an External **API Lookup** extension for your content types.

## Steps for Execution

- [Add the “External API Lookup” custom field to your Stack](#add-the-external-api-lookup-custom-field-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Add the “External API Lookup” custom field to your stack

To add the External API Lookup [custom field](./about-custom-fields.md) to your [stack](../set-up-stack/about-stack.md), log in to your [Contentstack account](https://app.contentstack.com/#!/stacks) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.

- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.![External_API_Lookup_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt492b5b89cf2399ad/60c21893fbd63412d4134899/External_API_Lookup_1_Highlighted.png)
- In the **Select Extension Type** window, select **Custom Field**.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0a5acfec466941b2/611359345d80fd1b92ab9ba0/image.png)
- On the **Create New Extension **page, enter values in the fields as given below:
  - **Title ***(required)*: Provide a suitable title, for example, “External API Lookup,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
  - **Field Data Type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **Text**.
  - **Multiple ***(optional)*: Leave this field unchecked.
  - **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
  - **External source code ***(required)*: In this field, you need to enter the extension code. To get the code, [download it](https://github.com/contentstack/extensions/tree/master/external-api-lookup-template) from our repository. Then, open the index.html file located at the root folder, and paste its code in this field.
  - **Config Parameter ***(required)*: Provide values for the config parameters if you have used any in your source code. You need to provide the Rest API endpoint that fetches the list for the External API Lookup extension. Here’s an example:

```
{
    "url": "https://jsonplaceholder.typicode.com/users/"
}
```

- **Save **the custom field.

Now, let’s understand how you can start using your extension in your content type.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

In your stack, click on “Content Models” on the left navigation panel. By default, you will be on the Content Type page.

- [Create a content type](../create-content-types/create-a-content-type.md) by clicking on the **+ New Content Type**. button. Enter the relevant details for the content type and click on **Save**. This leads you to the **Content Type Builder** page where you can add the relevant fields.
- Add the **Custom** field in your content type.
- Select **External API Lookup** from the dropdown and set the other properties of your custom field.
- After adding other relevant fields in your Content Type, click on **Save and Close**.

This will create your Content Type. Now, go to the content type and [create a new entry](../../content-managers/author-content/create-an-entry.md). Enter the appropriate details. In the **External API Lookup** field, select any value while creating an entry for this content type as shown below.

## Common questions

### Is the External API Lookup custom field still supported?
**Note:** The External API Lookup custom field is part of our legacy Experience Extensions and is deprecated.

### Where do I add the API endpoint used by the External API Lookup extension?
In the **Config Parameter ***(required)* field, provide the Rest API endpoint that fetches the list for the External API Lookup extension.

### What field data type should I select for this custom field?
For **Field Data Type ***(required)*, select **Text**.

### Where do I get the extension source code to paste into External source code?
To get the code, [download it](https://github.com/contentstack/extensions/tree/master/external-api-lookup-template) from the repository, then open the index.html file located at the root folder, and paste its code in the **External source code ***(required)* field.