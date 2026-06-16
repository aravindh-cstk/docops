---
title: "[Global Field] - Reference Fields within Global Fields"
description: Reference Fields within Global Fields
url: https://www.contentstack.com/docs/developers/global-field/reference-fields-within-global-fields
product: Contentstack
doc_type: reference
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Global Field] - Reference Fields within Global Fields

This page explains how to add reference fields within global fields in Contentstack to link reusable content across multiple content types consistently. It is intended for developers and content modelers who design scalable content models, and should be used when you want centralized, reusable linked content (for example, author details) that updates everywhere it is referenced.

## Reference Fields within Global Fields

You can add [reference](/docs/developers/create-content-types/reference) fields within [global](/docs/developers/global-field/about-global-field) fields to link reusable content across multiple [content types consistently](/docs/developers/create-content-types/about-content-types). This method helps maintain uniformity and simplifies the process of updating related content, such as author details, categories, or tags, especially in large-scale websites and applications.

For example, if your blog frequently displays author information with each post, you can use a Global field that includes a Reference field linked to a content type (e.g., Author Details). Once set up, this ensures that all blog entries pull accurate, consistent author information from a single source. Any updates to the referenced entry automatically reflect wherever it’s used.

**Note:** Only the stack [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and [developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can create Global fields and content types.

To add a Reference field within Global fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

## Step 1: Create the Referenced Content Type

- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C” (for Windows and Mac OS users).
- Click **+ New Content Type** and provide a **Name** (e.g., Author Details).
- Click **Insert a field (+)** icon and add the following fields:**Single Line Textbox:** For Author Name
- **Multi Line Textbox:** For Author Address
- **JSON Rich Text Editor:** For Author Qualification Details
- Click **Save and Close**.

## Step 2: Create Global Field

- Navigate to **Content Models**, select **Global Fields**, and click **+ New Global Field**.
- In the **Create New Global Field** modal, provide a **Name** (e.g., Blog Post) and click **Proceed**.
- Within the **Global Field**, add the following fields:**Single Line Textbox:** For Blog Title
- **JSON Rich Text Editor:** For Blog Content
- **Reference field:** To link the **Author Details** content type
- Click **Save and Close**.

## Step 3: Create Main Content Type

- Click **+ New Content Type** and provide a suitable **Name** (e.g., **Blogs**).
- Add the following basic fields:**Single Line Textbox:** Blog Header
- **JSON Rich Text Editor:** Blog Footer
- Click the **Insert a field (+)** icon and select the **Global** field.
- Click the **Select Global Field** field and select the **Blog Post** global field.
- Click **Save** or **Save and Close**.

Using Reference Fields within Global Fields helps you centralize and reuse content elements across entries. This method is ideal for linking dynamic content such as authors, categories, or partners. It reduces repetitive work, ensures consistency, and supports scalable, maintainable content models.

## Common questions

### Can I use a Reference field inside a Global field to link to a content type?
Yes, you can add [reference](/docs/developers/create-content-types/reference) fields within [global](/docs/developers/global-field/about-global-field) fields to link reusable content across multiple content types consistently.

### Who can create Global fields and content types?
Only the stack [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and [developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can create Global fields and content types.

### What is a common use case for Reference Fields within Global Fields?
A common use case is linking reusable author information (for example, Author Details) so that all blog entries pull accurate, consistent author information from a single source.

### Do updates to referenced entries automatically reflect wherever they’re used?
Yes, any updates to the referenced entry automatically reflect wherever it’s used.