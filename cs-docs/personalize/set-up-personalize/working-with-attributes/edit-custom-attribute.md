---
title: "Edit a Custom Attribute"
description: "Learn how to edit custom attributes in Contentstack Personalize to maintain accurate audience targeting."
url: /personalize/edit-custom-attribute
---

# Edit a Custom Attribute

## Edit a Custom Attribute

In Contentstack, custom attributes within a Personalize project can be edited to maintain accurate audience segmentation. This is important to ensure that your targeting remains precise.

This guide provides a step-by-step walkthrough for editing custom attributes in Contentstack Personalize.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can edit existing custom attributes.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    

## What You Will Learn

-   How to open an existing custom attribute for editing in a Personalize project.
    
-   How to change an attribute's Name, Key, and Description.
    
-   What to check before changing a Key that is used in an Audience or Experience.
    

## Steps for Execution

To edit an existing custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit a custom attribute.
3.  Click the **Attributes** tab.
4.  You can edit an existing custom attribute by clicking your attribute to open it or by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Edit**.
5.  In the **Edit Attribute** modal, make the necessary changes to the **Name**, **Key**, or **Description** fields.
6.  Once you have done that, click the **Save** button to apply the changes.
    
    **Warning:** Editing a custom attribute (especially the key) that is referenced in an Audience or Experience might affect your audience segmentation and personalized experiences. Ensure you update any references to the modified attribute accordingly.
    
    You must reset the Attribute Key used in the Set and Update User Attributes request via the [Personalize Edge API](/docs/developers/apis/personalize-edge-api/user-attributes) and the set method via the Personalize Edge SDK.
    

You will get a success message after the Custom Attribute has been successfully edited.

## Related Resource

-   [Personalize Management API: Update an Attribute](/docs/developers/apis/personalize-management-api/attributes#update-an-attribute)
