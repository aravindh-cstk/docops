---
title: "CMA | Embed Entries and Assets in the Rich Text Editor"
description: Manage embedded entries and assets in Rich Text fields, including references used in structured content.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/embed-entries-and-assets-in-the-rich-text-editor
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Embed Entries and Assets in the Rich Text Editor

You can embed other entries and/or assets inside the [Rich Text Editor](/docs/developers/create-content-types/rich-text-editor) (RTE) field while creating entries. Inside the RTE field, you can embed entries inline; at the block level; or as a hyperlink; and assets as downloadable entities or simply display them (for images).

**Note**: This feature is available only if it is part of your plan. To avail of this feature, you can get in touch with our [Support](mailto:support@contentstack.com) team.

The embedded items are added as HTML components within the RTE, and their contents change dynamically as and when you modify the source item. When retrieved or modified, these embedded HTML components are returned in the API response as JSON objects.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Additional Resource**: Refer to the “Utils SDK” of our [SDKs](/docs/developers/#platforms-and-sdks) to understand how you can render embedded entries and assets using the Contentstack SDKs.

## Related Pages

- [Create a content type with embedded RTE objects](https://www.contentstack.com/docs)
- [Update content type with embedded RTE objects](https://www.contentstack.com/docs)
- [Create an entry with embedded entries in RTE](https://www.contentstack.com/docs)
- [Create an entry with embedded assets in RTE](https://www.contentstack.com/docs)
- [Update embedded RTE objects](https://www.contentstack.com/docs)
- [Get information on embedded RTE objects](https://www.contentstack.com/docs)
