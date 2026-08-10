---
title: "Images Not Appearing in GraphQL Asset Queries"
description: "Images Not Appearing in GraphQL Asset Queries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/035-images-not-appearing-in-graphql-asset-queries
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs540c53c9ca38dc12
---

# Images Not Appearing in GraphQL Asset Queries

GraphQL queries for assets or entries containing image references return no results or empty arrays for image fields. The images exist in the CMS but are not visible in the query response.

**Root Cause**

GraphQL only returns published assets. Images that exist in the CMS but have not been published to the target environment are not included in the Delivery API response, even if they are visible in the CMS UI.

**Resolution**

1.  Navigate to the Assets section in the CMS.
2.  Identify the assets referenced in the failing GraphQL query.
3.  Publish the assets to the target environment.
4.  Re-run the GraphQL query and confirm that the images now appear in the response.

After publishing the assets, execute the GraphQL query. If image data is returned in the response, the assets are now live in the target environment.
