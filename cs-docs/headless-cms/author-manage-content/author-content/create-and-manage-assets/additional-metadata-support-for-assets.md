---
title: "Additional Metadata Support for Assets"
description: "Manage assets efficiently in Contentstack with additional metadata support. Add custom metadata via API for categorization and classification."
url: /headless-cms/additional-metadata-support-for-assets
uid: blt8dd65a5a652dbbfe
---

# Additional Metadata Support for Assets

## Additional Metadata Support for Assets

**Note:** This is a plan-based feature and may not be available to everyone. For more information, contact our [support](mailto:support@contentstack.com) team.

Metadata provides supplementary information about an asset, aiding in its management and classification. By default, Contentstack automatically generates basic metadata for uploaded assets, including:

-   **Asset Name:** The name assigned to the asset.
-   **Modification Details:** The date and time of the last update.
-   **File Size:** The size of the asset.
-   **Asset Location:** The folder in which the asset resides within the repository.
-   **Usage References:** The content types where the asset has been used.

However, as content requirements grow, you may need custom metadata for more efficient asset management. This is where **Additional Metadata Support** becomes invaluable.

## Benefits of Additional Metadata Support

Custom metadata can be added to assets via the API, without affecting their version history. This feature offers several benefits:

-   **Improved Organization:** Sort and categorize assets using custom metadata attributes.
-   **Enhanced Search Capabilities:** Add metadata to make assets easily discoverable.
-   **Flexible Tagging:** Define metadata such as asset type, SEO tags, or owner details to suit your specific needs.

**Note:**

-   Metadata can only be created via the [Metadata Content Management API](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets) requests and is not accessible through the Contentstack UI.
-   Metadata must be associated with an extension, and the maximum allowed size per extension per entry/asset is **5 KB**.

## Adding Metadata to Assets

Examples of metadata you can add include:

-   **Asset Type:** Classify assets as images, videos, audio clips, or documents.
-   **Owner Details:** Store information about the asset's owner or creator.
-   **SEO Metadata:** Add SEO-related tags to improve search engine visibility.
-   **Copyright Information:** Specify copyright details for intellectual property protection.
-   **Custom Tags or Labels:** Create unique tags for enhanced categorization.

**Additional Resource:** To add custom metadata for your entries, refer to the [Additional Metadata Support for Entries](/docs/headless-cms/additional-metadata-support-for-entries) document.

## API Reference

Use the following API requests to manage your metadata effectively:

-   [Create Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#create-metadata)
-   [Get Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#get-metadata)
-   [Update Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#update-metadata)
-   [Delete Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#delete-metadata)
-   [Publish Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#publish-metadata)
-   [Unpublish Metadata](/docs/developers/apis/content-management-api/metadata-for-entries-and-assets#unpublish-metadata)
