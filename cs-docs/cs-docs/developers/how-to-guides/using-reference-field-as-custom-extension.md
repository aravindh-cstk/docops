---
title: "[How-to Guides and Knowledgebase articles] - Using Reference Field as Custom Extension"
description: Using Reference Field as Custom Extension in Contentstack, including setup steps, prerequisites, and example content model.
url: https://www.contentstack.com/docs/developers/how-to-guides/using-reference-field-as-custom-extension
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [How-to Guides and Knowledgebase articles] - Using Reference Field as Custom Extension

This page explains how to use the Reference field as a custom field extension in Contentstack, including a sample content model and step-by-step setup. It is intended for developers who are configuring custom fields/extensions and reference relationships across content types, and should be used when you need a custom field that dynamically fetches referenced entries based on another selected reference.

## Using Reference Field as Custom Extension

The [Custom field](../create-custom-fields/about-custom-fields.md) extension in Contentstack allows you to add and use customized fields in your content type. You can add customized fields referring to content of other content types as entries in your custom field.

In Contentstack, you can also use the [Reference](../create-content-types/reference.md) field as a custom field extension. The reference field allows you to fetch entries from multiple content types and use them in your custom field. This functionality lets you render entries from the [referenced](../create-content-types/referenced-content-type.md) content types and access them in your content type.

Let’s understand how we can use a reference field as a custom extension, with an example.

## Process Overview

Consider a sample content model with three content types i.e., Person, Home, and Pet. The Person content type will be used as a reference field of the Home content type.

Similarly, the Person and Home content types will be used as reference and custom fields of Pet content type. Accordingly, the content models are given below:

**Home** content type:
- It has a reference field named **Person **that fetches entries from the **Person** content type.

**Pet** content type:
- It has a reference field named **Person** that fetches entries from the **Person** content type.
- It has a custom reference field called **Home **that fetches entries based on the “Person” selected in the above reference field and associated with the **Home** content type.

The following relationships exist between the content types:
- One person can own many homes
- One person can have many pets
- A pet lives in one of their owner’s home

The above use case defines that a user wants to see the “Homes” owned by the selected Person who is associated with a particular **Pet** content type entry.

## Prerequisites
- [Contentstack account](https://app.contentstack.com/#!/login)
- Familiarity with [custom](../create-custom-fields/about-custom-fields.md) and [reference](../create-content-types/reference.md) fields
- Generate a [Management](../create-tokens/generate-a-management-token.md) Token

In this guide, we will be working on three content types. We will import and create these content types in Step 2. In Step 1, we will set up an extension that will be required to execute this exercise.

## Steps for Execution
- [Set up the Extension](#set-up-the-extension)
- [Set up the Essentials](#set-up-the-essentials)
- [Try-out the Set-up](#try-out-the-set-up)

Let’s get started!

## Set up the Extension

Firstly,  log in to your [Contentstack account](https://app.contentstack.com/#!/login) and [create a stack](../set-up-stack/create-a-new-stack.md). Follow the steps given below to [create a custom field](../create-custom-fields/about-custom-fields.md) extension that will be required in the content types in step 2:

Go to your [stack](../set-up-stack/about-stack.md), navigate to the “Settings” gear icon, and select **Extensions**.
- On the **Extensions **page, click on the **+ Add Extension** button, and select **Create new**. If you have not added any extensions in the stack yet, click on the **create a new one** link as shown below:
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension** page, enter values in the fields as given below:
**Title ***(required)*: Provide a suitable title for your custom field. This title will be visible when you select the extension in the custom field in your content type.
- **Field data type** *(required)*: Select the data type in which the input data of the field should be saved in Contentstack. For this example, the data type is **JSON**.
- **Multiple**: **Check** the multiple checkbox option.
- **Hosting method** *(required)*: Select the Hosting method as** Hosted By Contentstack**.
- **Extension Source Code** *(required)*: Specify the extension source code here. Download the extension source code from the GitHub repository link given below. Copy the code from the index.html file located in the root folder and paste it into this field.

[Download the code](https://github.com/contentstack/using-reference-field-as-custom-extension)

**Note**: The downloaded source folder contains a window.html file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload asset](../../content-managers/author-content/create-upload-assets.md) article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section; make note of this URL.
- Add the following config parameters in your extension:
```
{
"windowURL": " ",
"contentType":"home",
}
```

**Note**: For the European region, the baseURL should change to **https://eu-api.contentstack.com** from **https://api.contentstack.io**.

Now, add the credentials of config parameters as given below:

"**windowURL**": The value for windowUrl is the URL of the window HTML file which you just uploaded as an asset.
- **“contentType”**: Add the Home content type UID i.e. **home**.
- Finally, **Save** the extension.

We have successfully set up the extension, let’s proceed to create a content type to use this extension.

## Set up the Essentials

We will now import and create the content types required for this example. To do this, go to your [stack](../set-up-stack/about-stack.md), follow the steps given below:

For this exercise, we require three content types, as mentioned above. We will [import the content types](../create-content-types/import-a-content-type.md) (**Person** and **Home**, which can be downloaded from the link below) and then manually create the **Pet** content type.

[Download content types ](https://github.com/contentstack/using-reference-field-as-custom-extension/raw/main/content-type.zip)In this guide, to perform the exercise, we require three content types, as mentioned earlier. You can import “Person” and “Home” content types from the above link, and then we proceed to create the “Pet” content type.

**Note**: The **Person** content type should be imported first, as it is used as a reference field in the **Home** content type.
- Unzip the folder after downloading and import the content types to your stack. The **Person** content type has a single line text field called **Name,** as shown below:

The **Home** content type schema is shown below, it contains the following fields:**
****House Name**: A single line text field
- **Person** (Reference field): This field fetches entries from **Person** content type
- Now that we have successfully imported the **Person** and** Home **content types, let’s create a content type called **Pet**.
Click on the** + New Content Type** button, select and fill in the necessary details as shown below:

The **Pet** content type schema is shown below, it contains the following fields:
**Title** (*default field*)
- **Url ** (*default field*)
- **Person** (Reference field)
Add a reference field to this content type. Under **Edit Properties, **add a **Display Name **(**Person**) and select the **Person** content type from the **Referenced Content Type **dropdown.
- **Home** (Custom field)
Add a custom field to the content type. Under **Edit Properties, Select Extension **that we created in step 1 and add a **Display Name **(**Home**).
- The **Pet **content type schema should look like this:
- Finally, click on the **Save and Close **button.

## Try-out the Set-up

The content model setup is done in the steps above. Accordingly, let's create entries for each of these content types and see our setup in action.

Go to your **Person** content type and create entries according to your choice.
- Now, create entries for **Home** content type. Select a person from the **Person **reference field to be associated with this entry.
**Note**: The **Person** reference field in the **Home** content type entry should not be empty or null. The association of **Home** entry and **Person** reference field is mandatory.
- Similarly, create entries for **Pet** content-type, associate a person by selecting from the **Person** reference field. The **Home** custom extension will be seen in the **Pet** content type entry.
The Home extension will show the Homes associated with the person selected in the above reference fields.
- Now, click on the checkboxes and select the entries, and proceed to **Save and Close**.
The selected entries will be rendered on the **Pet** entry page as shown below:

## Common questions

### Can I use the Reference field as a custom field extension in Contentstack?
Yes, you can use the [Reference](../create-content-types/reference.md) field as a custom field extension to fetch entries from multiple content types and use them in your custom field.

### What data type is used for the custom field in this example?
For this example, the **Field data type** is **JSON**.

### What is the “windowURL” config parameter used for?
"**windowURL**": The value for windowUrl is the URL of the window HTML file which you just uploaded as an asset.

### What should I change for the European region?
For the European region, the baseURL should change to **https://eu-api.contentstack.com** from **https://api.contentstack.io**.