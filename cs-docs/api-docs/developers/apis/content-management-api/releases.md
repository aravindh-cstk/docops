---
title: "CMA | Releases"
description: Create, update, fetch, deploy, and manage releases that group Contentstack entries and assets for publishing.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/releases
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Releases

You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a ‘release’, and then deploy this release to an environment. This will publish/unpublish all the items of the release to the specified environment. Read more about [Releases](/docs/content-managers/create-and-manage-releases).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Note**: Pass the release_version parameter as **2.0** in the Headers section if you have the latest release enabled for your organization. Reach out to our [support](mailto:support@contentstack.com) team for more information.

## Related Pages

- [Releases Collection](https://www.contentstack.com/docs)
- [Release Items](https://www.contentstack.com/docs)
- [Deploy/Execute a Release](https://www.contentstack.com/docs)
- [Clone a Release](https://www.contentstack.com/docs)
- [Lock a Release](https://www.contentstack.com/docs)
- [Unlock a Release](https://www.contentstack.com/docs)
