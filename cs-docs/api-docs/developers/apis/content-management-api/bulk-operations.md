---
title: "CMA | Bulk Operations"
description: Run and monitor bulk operations for Contentstack entries and assets through management endpoints.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/bulk-operations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Bulk Operations

You can perform bulk operations such as [Add to Release](/docs/content-managers/author-content/bulk-add-to-release), [Publish](/docs/content-managers/bulk-operations-on-entries-and-assets/bulk-publish-entries), [Unpublish](/docs/content-managers/bulk-operations-on-entries-and-assets/bulk-unpublish-entries), and [Delete](/docs/content-managers/bulk-operations-on-entries-and-assets/bulk-delete-entries) on multiple entries or assets, or [Change the Workflow Details](/docs/content-managers/bulk-operations-on-entries-and-assets/update-entry-workflow-details-in-bulk) of multiple entries or assets at the same time.

**Additional Resource**: You can also learn how to [perform bulk operations on search results](/docs/content-managers/search-content/about-bulk-operations-on-search-results).

**Points to keep in mind**:

- Each bulk publish API request publishes a maximum of 10 items per request, if the Bulk Publish feature is part of your plan. So, for example, if you publish 100 items, you need to make 10 Bulk API requests.
- Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is 1 request per second i.e., in one second you can make only one bulk publish API request.
- Mentioning the version number of the entries is optional. If you don't specify the version number, the latest version of the entries will be published or unpublished.
- Bulk publishing of entries of all locals is not supported. However, you can specify the locales as an array (en-us, fr-fr, zh-zh, and so on) against the ‘locale’ parameter to get them published.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Related Pages

- [Bulk Add to Release](https://www.contentstack.com/docs)
- [Bulk Publish Operation](https://www.contentstack.com/docs)
- [Bulk Unpublish Operation](https://www.contentstack.com/docs)
- [Bulk Delete Operation](https://www.contentstack.com/docs)
- [Bulk Update Workflow Details Operation](https://www.contentstack.com/docs)
