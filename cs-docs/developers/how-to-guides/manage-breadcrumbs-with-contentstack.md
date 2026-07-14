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
- [Create a content type](../create-content-types/create-a-content-type.md) named “Navigation” of type [Content Block](/docs/developers/create-content-types/webpage-vs-content-block) and set it as [Multiple](../create-content-types/multiple.md). Add the [Link](../create-content-types/link.md) field along with the default “Title” field as shown below:![Manage_Breadcrumbs_with_Contentstack_1_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt97eed0f08a56e82e/60b7bd95166608198786547f/Manage_Breadcrumbs_with_Contentstack_1_no_highlight.png)
- For each "page" in the [content type](../create-content-types/about-content-types.md), add a [Reference](../create-content-types/reference.md) field named "Breadcrumb" with “Multiple” as the selected option that refers to the **Navigation** content type.![Manage_Breadcrumbs_with_Contentstack_3_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt27e7cee510222585/60b7bdd07979111986c71026/Manage_Breadcrumbs_with_Contentstack_3_no_highlight.png)![Manage_Breadcrumbs_with_Contentstack_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1fabe12067c797bf/60b7bda68bf36608f2c02da5/Manage_Breadcrumbs_with_Contentstack_2_no_highlight.png)
- You can then define your breadcrumb hierarchy while creating [entries](../../content-managers/author-content/about-entries.md) in your content type. Consider **Products** for example:

**Note:** Make sure you add the breadcrumbs in the correct sequence.
- So, when you render the page in your front end layer, you have to get this entry by including the Reference field, `Breadcrumb`. Refer to our [Content Delivery API](../../../api-docs/api-detail/content-delivery-api.md#include-reference) documentation for more details.
For example, when you run the GET API call: `https://cdn.contentstack.io/v3/content_types/products/entries?environment=production&locale=en-us&include[]=breadcrumb`, You will get the Reference field array as follows:![json data of breadcrumb.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltca3dc260fbf2f83f/5ff8a5a0b47cdf7fc7d6d2d6/json_data_of_breadcrumb.png)
- This is how you can render them on the page and the breadcrumb navigation will look like the following:![navigation using breadcrumb.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf44316314fcbe366/5d885d93c7fab32df76ddf65/navigation_using_breadcrumb.png)

## Common questions

**Q: Is this page still supported and up to date?**  
A: **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

**Q: What content type is used to store breadcrumb items?**  
A: Create a content type named “Navigation” of type Content Block and set it as Multiple, and add the Link field along with the default “Title” field.

**Q: How do I associate breadcrumbs with a page entry?**  
A: Add a Reference field named "Breadcrumb" with “Multiple” selected that refers to the **Navigation** content type.

**Q: How do I fetch breadcrumb references via the API?**  
A: Include the Reference field, `Breadcrumb`, and use `include[]=breadcrumb` in the GET API call (for example: `https://cdn.contentstack.io/v3/content_types/products/entries?environment=production&locale=en-us&include[]=breadcrumb`).