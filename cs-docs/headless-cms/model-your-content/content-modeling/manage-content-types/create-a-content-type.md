---
title: "Create a Content Type"
description: "Learn how to create and configure content types in Contentstack to define reusable content structures."
url: /headless-cms/create-a-content-type
uid: bltc895a4a926c204ca
---

# Create a Content Type

## Create a Content Type

A [content type](/docs/headless-cms/about-content-types) defines the structure of your content using a set of fields that represent the components of your web or mobile property.

**Additional Resource:** Refer to the [Content Modeling](/docs/headless-cms/about-content-modeling/) section to understand how you can define the structure of a content type as per your requirements.

**Note:** Content types are branch-specific. If you create or update a content type in a particular branch (e.g., development), it will be available only within that branch.

To create a content type, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to create a content type, and select **Content Models**.
2.  Click the **\+ New Content Type** button and, from the dropdown:
    -   Select **Create New** to create a new content type, or
    -   Select **Use Prebuilt** to import a prebuilt content type.

        **Note:** To import a prebuilt content model within your stack, refer to our guide on [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models).

3.  In the **Create New Content Type** modal that appears, enter the **Name** for the content type. The **Unique ID** will be auto-generated.
4.  Add a **Description**. This step is optional.
5.  Based on the number of entries you want to create, under **Type**, select either:
    -   **Single** (for creating a single entry, such as a homepage), or
    -   **Multiple** (for creating multiple pages of the same structure).
6.  Click **Save and Proceed**.![Create_New_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7da3a590b37018a/69c6a5ae0a6de1d27c553a0c/Create_New_CT.png)

## Use the Content Type Builder

In the **Content Type Builder** page:

-   Add fields by clicking the **Insert a field** (+) icon that appears when you hover below the title field.
-   Configure field properties by clicking the **Settings** (cog) icon.
-   Click **Save** or **Save and Close** to apply your changes.

**Additional Resource:** You can also create a content type by [importing the JSON schema](/docs/headless-cms/import-a-content-type) of your content type via the Contentstack UI.

## Key Considerations

-   **Choosing the Right Type:** If your content may scale in the future, consider using **Multiple** to avoid migration later.
-   **Reusability**
    -   Use **Global Fields** for repeated structures
    -   Use **Reference fields** to link related content
-   **UID Best Practices**
    -   Use clear, stable UIDs (e.g., hero\_title)
    -   Avoid renaming UIDs after integration begins

## Field Limits in a Content Type

Each content type has limits on the total number of [fields](/docs/headless-cms/about-fields) and the number of [JSON Rich Text](/docs/headless-cms/about-json-rich-text-editor) fields that can be added.

To help you manage these limits, the **Content Type Builder** displays usage banners based on defined thresholds.

### When Approaching the Limit

When you reach 80% of the allowed limit, an informational banner appears at the top of the Content Type Builder showing:

-   The number of fields used
-   The number of JSON RTE fields used

This gives you early visibility so you can optimize your content structure before reaching the limit.

### When the Limit Is Reached

When you reach the maximum allowed number of fields:

-   You cannot add additional fields of that type.
-   A persistent banner indicates that the limit has been reached.
-   To add a new field, you must delete an existing one.

**Note:** Banners remain visible across sessions until the limits are no longer exceeded.

## API Reference

To create a content type via API, refer to the [Create a Content Type](/docs/developers/apis/content-management-api/content-types#create-a-content-type) API request.

**Additional Resource:** Refer to our documentation on how to [generate the JSON schema for creating a content type](/docs/headless-cms/json-schema-for-creating-a-content-type) to understand how you can add or update fields in your content type.

Creating a well-structured content type ensures consistency and scalability across your digital experiences. Once your content type is set up, you can begin creating [entries](/docs/headless-cms/about-entries/) and publishing content to your [environment](/docs/headless-cms/about-environments). Regularly reviewing and optimizing your content structure helps maintain performance, usability, and long-term maintainability of your stack.
