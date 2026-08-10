---
title: "Fetching created_by and updated_by for Content Types via API"
description: "Fetching created_by and updated_by for Content Types via API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/092-fetching-created-by-and-updated-by-for-content-types-via-api
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs64a5191af689bf2c
---

# Fetching created_by and updated_by for Content Types via API

There is no direct field on content type API responses for the creator or last modifier details. The created\_by and updated\_by information is needed for programmatic user management or audit purposes.

**Root Cause**

The CMA does not include created\_by and updated\_by fields on content type API responses. This information is recorded in the audit log rather than in the content type schema response.

**Resolution**

1.  Use the Contentstack Audit Log API to retrieve creator and modifier details for content types. The audit log records create and update events with the associated user information.
2.  Call GET /v3/audit-logs with appropriate filters to retrieve content type activity.
3.  For last-login and user management use cases, export users from Organization Settings > Users as a CSV file, which includes the Last Login field. Filter the CSV to identify inactive users.

After querying the Audit Log API, confirm that the creator and modifier details for content types are present in the response.
