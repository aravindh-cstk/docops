---
title: "Create a Global Field"
description: " Learn how to create a Global field in Contentstack to standardize and reuse structured content."
url: /headless-cms/create-a-global-field
---

# Create a Global Field

## Create a Global Field

Global fields are reusable field sets defined once and used across content types, simplifying modeling, ensuring consistency, and avoiding field recreation.

For example, let's say you need to store **employee addresses** across different content types, such as **Employee Profiles** and **Office Locations**. Instead of adding the same set of address fields manually each time, you can create an **Address** Global field and reuse it across multiple content types.

Additionally, **Nested Global** fields allow you to include a Global field within another Global field, making it easy to structure complex data relationships.

**Note:** When working with specific branches, any Global fields you create or update will be unique to that branch. Refer to the [Branch-specific Modules](/docs/headless-cms/branch-specific-modules) documentation for more details.

To create a Global field, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to create a Global field.
2.  Click the **Content Models** icon and select **Global Fields** in the left panel.
3.  Click **\+ New Global Field** to open the **Create New Global Field** modal.
4.  Enter **"**Address**"** as the Global field **Name** and provide a relevant **Description**. The **Unique ID** is auto-generated, but you can update it as required.
    
    **Tip:** Refer to the [Restricted Keywords for Unique IDs](/docs/headless-cms/restricted-keywords-for-uids) to avoid using reserved keywords.
    
5.  Click **Proceed** to create the Global field.
6.  After creating the Global field, the **Global Field Builder** page will open. This page is empty by default.
7.  Click the “+” (Insert a field) icon and choose from the available field options.
8.  Add the following fields to structure the **Address** Global field:
    1.  **House Number:** Select the [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field.
    2.  **Apartment Name:** Select the **Single Line Textbox** field.
    3.  **Street Name:** Select the **Single Line Textbox** field.
    4.  **City:** Select the **Single Line Textbox** field.
    5.  **Postal Code:** Select the [Number](/docs/headless-cms/number/) field.
        
        **Tip:** To modify field behavior, click the **Properties** icon displayed next to each field and configure its settings.
        
9.  Click **Save** or **Save and Close** to save your changes.

Your **Address** Global field will look as follows:

![Address global field structure example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5b4af42eac04494/67ff8ae603573c0f43299f0e/1._about_global_fields_-_image_1.png)

**Additional Resource:** Refer to the [Adding Global Field to the Content Type](/docs/headless-cms/add-the-global-field-to-content-types/) document to reuse the Global Field.

## Using Nested Global Fields

If you have multiple reusable components within a content model, you can use **Nested Global** fields. For example, if you have an **Employee Details** Global field that requires an address section, you can nest the **Address** Global field inside it instead of recreating the same fields.

To add a nested Global field, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Open the **Global Field Builder** for the parent Global field.
2.  Click the “+” (Insert a field) icon and select **Global** from the list.
3.  Click **Select Global Field** and choose **Address** from the available global fields.
4.  **Save** the changes.
    
    ![Nested global field example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3142760db9b2540e/67ff8b04e7161e900da288af/2._about_global_fields_-_nested_global_fields_-_image_2.png)
    

Nested Global fields help in **maintaining consistency** and **reducing redundancy** in complex content structures.

## API Reference

To create a Global field via API, refer to the [Create Global Field](https://www.contentstack.com/docs/developers/apis/content-management-api/global-fields#create-a-global-field) API request.
