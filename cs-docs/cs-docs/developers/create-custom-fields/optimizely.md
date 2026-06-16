---
title: "[Extensions] - Optimizely"
description: Documentation for creating and using the legacy Optimizely extension (custom field) in Contentstack to select Optimizely audiences per entry and serve personalized content.
url: https://www.contentstack.com/docs/developers/create-custom-fields/optimizely
product: Contentstack
doc_type: extension-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Optimizely

This page explains how to create and configure the legacy **Optimizely** extension (custom field) in Contentstack, how to use it in content types and entries, and how to query content by audience on the presentation layer. It is intended for developers setting up audience-based personalization using Optimizely audiences within Contentstack entries.

**Note**: This documentation uses the legacy approach with extensions. We have launched Optimizely as a Marketplace App. For more information on Optimizely, please refer to the [Optimizely App Installation Guide](/docs/developers/marketplace-apps/optimizely).

The **Optimizely** extension lets you serve personalized content by allowing you to select the audience for each entry. This extension fetches and displays your Optimizely audiences into a [field](/docs/developers/create-content-types/about-fields) in your [content type](/docs/developers/create-content-types/about-content-types). Thus, while creating [entries](/docs/content-managers/working-with-entries/about-entries), you can select audience(s) for each entry. Based on the selection, the entry will be visible only to the targeted audience when published.

This step-by-step guide explains how to create an **Optimizely** extension in Contentstack. The steps to be performed are as follows:
- [Retrieve your project ID](#retrieve-your-project-id)
- [Add audiences](#add-audiences)
- [Generate access token](#generate-access-token)
- [Add “Optimizely” extension to your stack](#add-optimizely-extension-to-your-stack)
- [Use the extension in Contentstack](#use-your-custom-field-extension-in-contentstack)
- [Use the extension on the presentation layer to serve personalized content](#use-the-extension-on-the-presentation-layer-to-serve-personalized-content)

## Retrieve your project ID

In order to use this extension, you will need the ID of your Optimizely project. If you haven’t created any projects, [refer to this guide](https://help.optimizely.com/Set_Up_Optimizely/Manage_projects_in_Optimizely_X_Web#Create_a_new_project) to create one.

On successful creation of your project, you will see your project ID in the URL. The project ID is the part after "projects/" in the URL. For example, in “https://app.optimizely.com/v2/projects/11111111111,” the number "11111111111" is the project ID.

Save this ID as you will need it in Step 4 when configuring your Optimizely extension.

## Add audiences

If you haven’t added any audiences in your project, create some in your Optimizely account by referring to the [Set up audiences in Optimizely](https://help.optimizely.com/Target_Your_Visitors/Set_up_audiences_in_Optimizely_X%3A_Audience_Builder) guide.

The audiences you add to your project will be visible as possible values for your extension field in Contentstack.

## Generate access token

In order to use Optimizely resources within Contentstack, you will need to authenticate by providing your personal access token. You can create new tokens by following the steps given in this [guide](https://help.optimizely.com/Integrate_Other_Platforms/Generate_a_personal_access_token_in_Optimizely_X_Web).

Note down this token, since you will need it while configuring the extension in Step 4.

## Add “Optimizely” extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/) and perform the following steps:

Go to your [stack](/docs/developers/set-up-stack/about-stack), click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:

**Title ***(required)*: Provide a suitable title, for example “Optimizely,” for your custom field. This title will be visible when you select the extension in the [**custom**](/docs/developers/create-content-types/custom) field in your content type.

- **Field Data Type** *(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code ***(required)*: Specify the extension code here. To get the code, [download it](https://github.com/contentstack/extensions/tree/master/optimizely), and paste the contents of the `index.html` file in this field.
- **Config Parameters ***(required)*: Enter the configuration details for the extension. Here, you need to mention the project ID created in **Step 1 **and the Optimizely API access token generated in

**Step 3**.

```
{
    "access_token": "1:pl1abaBAbabaBabAb_aBa1BaBAb11ab4AbA1AB_A1Bab-ABabaBA",
    "project_id": "11111111111"
}
```

- **Save **the custom field.

Now, let’s understand how you can start using your custom field extension in your content type.

## Use your custom field extension in Contentstack

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](/docs/developers/create-content-types/create-a-content-type) and add the [Custom](/docs/developers/create-content-types/custom) field to it.
- Under **Select Extension**, select the “Optimizely” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](/docs/content-managers/working-with-entries/create-an-entry)for this content type, and you will see the **Optimizely **field in action.

## Use the extension on the presentation layer to serve personalized content

In order to display personalized content to your site visitors, you will need to query entries based on the audience type of your site visitor. You can use Contentstack queries as follows to fetch the content based on the audience ID provided:

**SDK**

```
let Query = Stack.ContentType('content_type_uid').Query().where('audience_field_uid.id', '11718912337')

```

- **API**

```
https://cdn.contentstack.io/v3/content_types/product/entries?api_key=blt20962a819b57e233&access_token=blt01638c90cc28fb6f&environment=production&locale=en-us&query={ "audience_field_uid.id": { "$in": [ array_of_auidences ] } }

```

**Additional Resource: **You can check out our documents that show how you can use Optimizely with Contentstack: [Optimizely Experiments](/docs/developers/create-sidebar-extensions/optimizely-experiments/), [A/B Testing Using Contentstack and Optimizely](/docs/developers/how-to-guides/a-b-testing-using-contentstack-and-optimizely), and [Implementing Personalization Using Optimizely on Your Website](/docs/developers/how-to-guides/implementing-personalization-using-optimizely-on-your-website).

## Common questions

### Is this the recommended way to use Optimizely with Contentstack?
No. **Note**: This documentation uses the legacy approach with extensions. We have launched Optimizely as a Marketplace App. For more information on Optimizely, please refer to the [Optimizely App Installation Guide](/docs/developers/marketplace-apps/optimizely).

### What do I need before configuring the extension?
You will need the ID of your Optimizely project and your personal access token.

### What field data type should I select for the Optimizely custom field?
- **Field Data Type** *(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.

### How do I query entries for a specific audience on the presentation layer?
You can use Contentstack queries as follows to fetch the content based on the audience ID provided using the **SDK** or **API** examples shown in the page.

Filename: extensions-optimizely.md