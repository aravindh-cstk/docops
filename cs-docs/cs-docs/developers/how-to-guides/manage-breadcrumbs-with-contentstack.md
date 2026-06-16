---
title: "[How-to Guides and Knowledgebase articles] - Manage Breadcrumbs with Contentstack"
description: Manage Breadcrumbs with Contentstack
url: https://www.contentstack.com/docs/developers/how-to-guides/manage-breadcrumbs-with-contentstack
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Manage Breadcrumbs with Contentstack

This page explains how to create and manage breadcrumb navigation using Contentstack content types and reference fields. It is intended for developers implementing breadcrumb hierarchies in a front-end application and should be used when modeling navigation structures and fetching breadcrumb references via the Content Delivery API.

## Manage Breadcrumbs with Contentstack

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

Contentstack simplifies the process of creating breadcrumbs for easy navigation. To create breadcrumbs in Contentstack, follow the steps given below:
- [Create a content type](/docs/developers/create-content-types/create-a-content-type) named “Navigation” of type [Content Block](/docs/developers/create-content-types/webpage-vs-content-block) and set it as [Multiple](/docs/developers/create-content-types/multiple). Add the [Link](/docs/developers/create-content-types/link) field along with the default “Title” field as shown below:
- For each "page" in the [content type](/docs/developers/create-content-types/about-content-types), add a [Reference](/docs/developers/create-content-types/reference) field named "Breadcrumb" with “Multiple” as the selected option that refers to the **Navigation** content type.
- You can then define your breadcrumb hierarchy while creating [entries](/docs/content-managers/working-with-entries/about-entries) in your content type. Consider **Products** for example:

**Note:** Make sure you add the breadcrumbs in the correct sequence.
- So, when you render the page in your front end layer, you have to get this entry by including the Reference field, `Breadcrumb`. Refer to our [Content Delivery API](/docs/developers/apis/content-delivery-api#include-reference) documentation for more details.
For example, when you run the GET API call: `https://cdn.contentstack.io/v3/content_types/products/entries?environment=production&locale=en-us&include[]=breadcrumb`, You will get the Reference field array as follows:
- This is how you can render them on the page and the breadcrumb navigation will look like the following:

## Common questions

**Q: Is this page still supported and up to date?**  
A: **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

**Q: What content type is used to store breadcrumb items?**  
A: Create a content type named “Navigation” of type Content Block and set it as Multiple, and add the Link field along with the default “Title” field.

**Q: How do I associate breadcrumbs with a page entry?**  
A: Add a Reference field named "Breadcrumb" with “Multiple” selected that refers to the **Navigation** content type.

**Q: How do I fetch breadcrumb references via the API?**  
A: Include the Reference field, `Breadcrumb`, and use `include[]=breadcrumb` in the GET API call (for example: `https://cdn.contentstack.io/v3/content_types/products/entries?environment=production&locale=en-us&include[]=breadcrumb`).