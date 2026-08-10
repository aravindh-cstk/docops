---
title: "Additional Metadata Support for Entries"
description: "Learn how to add and manage additional metadata for entries in Contentstack without increasing their version. Streamline content organization with custom metadata.
"
url: /headless-cms/additional-metadata-support-for-entries
---

# Additional Metadata Support for Entries

## Additional Metadata Support for Entries

Metadata provides supplementary information about an [entry](/docs/headless-cms/about-entries), aiding in its management and classification. By default, when you create a new entry in Contentstack, certain metadata is automatically added, including:

-   Entry name
-   Localization status
-   Publishing status
-   Last modification date and time
-   Content types in which the entry has been referenced

To enhance content management, Contentstack allows the addition of custom metadata to entries [via the Metadata for Entries and Assets API Request](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets) without incrementing their versions. This feature facilitates better organization and categorization of entries, making it easier to search for specific content within a content type.

## Adding Custom Metadata via API

Custom metadata can be added to entries using the Content Management API. This process does not increment the entry's version, ensuring version control remains intact.

**Note:** The metadata size allowed per extension per entry/asset is 5KB. Ensure that the metadata added complies with this limitation. For more information, refer to the [Additional Metadata Support for Entries documentation](/docs/headless-cms/additional-metadata-support-for-entries).

### Examples of Custom Metadata

Here are some examples of custom metadata that can be added to entries:

-   **Entry type**: Indicates whether the entry is a parent or a referenced entry.
-   **Owner details**: Information about the entry owner
-   **SEO tags**: Generic SEO tags to improve search engine optimization.
-   **Entry categorization**: Taxonomy-based classifications to group entries effectively.
-   **Custom tags or labels**: User-defined tags or labels for better organization.

**Additional Resource:** Contentstack also allows you to add custom metadata for your assets. Refer to the [Additional Metadata Support for Assets](/docs/headless-cms/additional-metadata-support-for-assets) documentation to learn more about it.

## API References

You can refer to the following metadata related API requests:

-   [Create Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#create-metadata)
-   [Get Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#get-metadata)
-   [Update Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#update-metadata)
-   [Delete Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#delete-metadata)
-   [Publish Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#publish-metadata)
