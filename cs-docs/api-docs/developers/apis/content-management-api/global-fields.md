---
title: "CMA | Global Fields"
description: Create, update, fetch, and manage reusable global field schemas across Contentstack content types.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/global-fields
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Global Fields

A Global field is a reusable field (or group of fields) that you can define once and reuse across multiple content types within your stack. This eliminates the need to recreate the same set of fields multiple times, saving effort and ensuring consistency.

**Note**: If your Global field contains [nested Global fields](/docs/developers/global-field/about-global-field#nested-global-fields), they will appear as part of the schema in the API response.

You can pass the **branch header** in API requests to fetch or manage modules within specific branches of the stack. Additionally, setting the include_branch query parameter to true includes the _branch key in the response, specifying the unique ID of the branch where the module resides.

**Additional Resource**: You can create dynamic and flexible Global Fields by nesting Global fields within a [Modular Block](/docs/developers/global-field/global-fields-as-blocks-within-modular-blocks), [Global](/docs/developers/global-field/about-global-field/), or a [Group](/docs/developers/global-field/group-fields-within-global-fields) fields.

## Related Pages

- [Get All Global Fields](https://www.contentstack.com/docs)
- [Get Single Global Field](https://www.contentstack.com/docs)
- [Create Global Field](https://www.contentstack.com/docs)
- [Update Global Field](https://www.contentstack.com/docs)
- [Delete Global Field](https://www.contentstack.com/docs)
- [Import Global Field](https://www.contentstack.com/docs)
- [Export Global Field](https://www.contentstack.com/docs)
