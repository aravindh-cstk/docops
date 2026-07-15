---
title: Create a Content Type
description: Learn how to create and configure content types in Contentstack to define reusable content structures.
url: https://www.contentstack.com/docs/headless-cms/create-a-content-type
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-27
---

# Create a Content Type

This page explains how to create and configure a content type in Contentstack. It is intended for developers and content architects who need to define structured, reusable content models for web or mobile applications. Use this guide when setting up new content structures or managing existing ones within a stack.

A content type defines the structure of your content using a set of fields that represent the components of your web or mobile property.

Additional Resource: Refer to the Content Modeling section to understand how you can define the structure of a content type as per your requirements.

Note: Content types are branch-specific. If you create or update a content type in a particular branch (e.g., development), it will be available only within that branch.

To create a content type, log in to your Contentstack account and perform the following steps:

- Go to your stack where you want to create a content type, and select Content Models.
- Click the + New Content Type button and, from the dropdown:
  - Select Create New to create a new content type, or
  - Select Use Prebuilt to import a prebuilt content type.

Note: To import a prebuilt content model within your stack, refer to our guide on Import Prebuilt Content Models.

- In the Create New Content Type modal that appears, enter the Name for the content type. The Unique ID will be auto-generated.
- Add a Description. This step is optional.
- Based on the number of entries you want to create, under Type, select either:
  - Single (for creating a single entry, such as a homepage), or
  - Multiple (for creating multiple pages of the same structure).
- Click Save and Proceed.![Create_New_CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7da3a590b37018a/69c6a5ae0a6de1d27c553a0c/Create_New_CT.png)

## Use the Content Type Builder

In the Content Type Builder page:

- Add fields by clicking the Insert a field (+) icon that appears when you hover below the title field.
- Configure field properties by clicking the Settings (cog) icon.
- Click Save or Save and Close to apply your changes.

Additional Resource: You can also create a content type by importing the JSON schema of your content type via the Contentstack UI.

## Field Limits in a Content Type

Each content type has limits on the total number of fields and the number of JSON Rich Text fields that can be added.

To help you manage these limits, the Content Type Builder displays usage banners based on defined thresholds.

### When Approaching the Limit

When you reach 80% of the allowed limit, an informational banner appears at the top of the Content Type Builder showing:

- The number of fields used
- The number of JSON RTE fields used

This gives you early visibility so you can optimize your content structure before reaching the limit.

### When the Limit Is Reached

When you reach the maximum allowed number of fields:

- You cannot add additional fields of that type.
- A persistent banner indicates that the limit has been reached.
- To add a new field, you must delete an existing one.

Note: Banners remain visible across sessions until the limits are no longer exceeded.

## API Reference

To create a content type via API, refer to the Create a Content Type API request.

Additional Resource: Refer to our documentation on how to generate the JSON schema for creating a content type to understand how you can add or update fields in your content type.

Creating a well-structured content type ensures consistency and scalability across your digital experiences. Once your content type is set up, you can begin creating entries and publishing content to your environment. Regularly reviewing and optimizing your content structure helps maintain performance, usability, and long-term maintainability of your stack.

## Common questions

### What is a content type in Contentstack?
A content type defines the structure of your content using fields, enabling consistent and reusable content across your applications.

### Can I create content types for different branches?
Yes, content types are branch-specific. Changes made in one branch are not automatically available in others.

### What happens when I reach the field limit?
You cannot add more fields of that type until you delete existing ones. A banner will indicate that the limit has been reached.

### Can I create a content type using an API?
Yes, you can create a content type via API by using the Create a Content Type API request.