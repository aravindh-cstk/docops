---
title: "Identifying Unpublished Assets via CMA - Use include_publish_details"
description: "Identifying Unpublished Assets via CMA - Use include_publish_details"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/05-identifying-unpublished-assets-via-cma-use-include-publish-details
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csf79edf3692b70222
---

# Identifying Unpublished Assets via CMA - Use include_publish_details

A customer needs to identify and publish all assets that are not yet published to a specific environment. The Management API does not appear to support filtering assets by publish status directly.

**Root Cause**

The CMA asset query endpoint does not support direct filtering by publish status or environment in query parameters. However, asset publish details can be retrieved and used for client-side filtering.

**Resolution**

1.  Add include\_publish\_details=true to the CMA asset query: GET /v3/assets?include\_publish\_details=true
2.  The response will include a publish\_details array for each asset, showing which environments it is published to.
3.  Process the response client-side to filter assets where the target environment is absent from the publish\_details array.
4.  For large asset libraries, use incremental queries (for example, filtering by updated\_at range) to reduce response size and processing overhead.
5.  After identifying unpublished assets, publish them using: POST /v3/assets/{asset\_uid}/publish

After applying the client-side filter, confirm that the identified unpublished assets are correctly targeted and that subsequent publish calls succeed.
