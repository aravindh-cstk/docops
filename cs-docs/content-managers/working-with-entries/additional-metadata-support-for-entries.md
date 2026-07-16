---
title: "[Author Content] - Additional Metadata Support for Entries"
description: Additional metadata support for entries in Contentstack, including default metadata, adding custom metadata via API, examples, and related API references.
url: https://www.contentstack.com/docs/headless-cms/additional-metadata-support-for-entries
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Additional Metadata Support for Entries

This page explains how metadata works for entries in Contentstack, what metadata is added by default, and how to add custom metadata via the Content Management API without incrementing entry versions. It is intended for content managers and developers who need improved organization, classification, and searchability of entries.

## Additional Metadata Support for Entries

Metadata provides supplementary information about an [entry](../author-content/about-entries.md), aiding in its management and classification. By default, when you create a new entry in Contentstack, certain metadata is automatically added, including:
- Entry name
- Localization status
- Publishing status
- Last modification date and time
- Content types in which the entry has been referenced

To enhance content management, Contentstack allows the addition of custom metadata to entries [via the Metadata for Entries and Assets API Request](../../../api-docs/api-detail/content-management-api.md#metadata-for-entries-and-assets) without incrementing their versions. This feature facilitates better organization and categorization of entries, making it easier to search for specific content within a content type.

## Adding Custom Metadata via API

Custom metadata can be added to entries using the Content Management API. This process does not increment the entry's version, ensuring version control remains intact.

**Note**: The metadata size allowed per extension per entry/asset is 5KB. Ensure that the metadata added complies with this limitation. For more information, refer to the[Additional Metadata Support for Entries documentation](./additional-metadata-support-for-entries.md).

## Examples of Custom Metadata

Here are some examples of custom metadata that can be added to entries:
- **Entry type**: Indicates whether the entry is a parent or a referenced entry.
- **Owner details**: Information about the entry owner
- **SEO tags**: Generic SEO tags to improve search engine optimization.
- **Entry categorization**: Taxonomy-based classifications to group entries effectively.
- **Custom tags or labels**: User-defined tags or labels for better organization.

**Additional Resource:** Contentstack also allows you to add custom metadata for your assets. Refer to the [Additional Metadata Support for Assets](../author-content/additional-metadata-support-for-assets.md) documentation to learn more about it.

## API References

You can refer to the following metadata related API requests:
- [Create Metadata](../../../api-docs/api-detail/content-management-api.md#create-metadata)
- [Get Metadata](../../../api-docs/api-detail/content-management-api.md#get-metadata)
- [Update Metadata](../../../api-docs/api-detail/content-management-api.md#update-metadata)
- [Delete Metadata](../../../api-docs/api-detail/content-management-api.md#delete-metadata)
- [Publish Metadata](../../../api-docs/api-detail/content-management-api.md#publish-metadata)

## Common questions

### Does adding custom metadata increment an entry’s version?
No. Contentstack allows the addition of custom metadata to entries via the API without incrementing their versions.

### What is the metadata size limit per entry/asset?
The metadata size allowed per extension per entry/asset is 5KB.

### Where can I find the API requests related to metadata?
See the API References section, which includes Create Metadata, Get Metadata, Update Metadata, Delete Metadata, and Publish Metadata.

### Can I add custom metadata to assets as well?
Yes. Refer to the [Additional Metadata Support for Assets](../author-content/additional-metadata-support-for-assets.md) documentation.