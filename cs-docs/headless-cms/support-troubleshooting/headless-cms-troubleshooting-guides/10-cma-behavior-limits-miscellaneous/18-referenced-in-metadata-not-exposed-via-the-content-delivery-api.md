---
title: "referenced_in Metadata Not Exposed via the Content Delivery API"
description: "referenced_in Metadata Not Exposed via the Content Delivery API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/18-referenced-in-metadata-not-exposed-via-the-content-delivery-api
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs5f24cecf907cbc8f
---

# referenced_in Metadata Not Exposed via the Content Delivery API

A request is made to expose the referenced\_in metadata via the CDA to enable programmatic identification of unused or orphaned entries for content audit purposes.

**Root Cause**

The referenced\_in metadata is an internal Contentstack data structure that tracks which entries reference a given entry. It is available via the CMS UI (under an entry’s References tab) but is not exposed through the Content Delivery API. This is an intentional design decision - the CDA is optimized for delivering published content to end users and does not expose internal content management metadata.

**Resolution**

The referenced\_in data is not available via the CDA. Available alternatives for content audit use cases:

1.  Use the Content Management API (CMA) - the CMA can return referenced\_in data for entries via: GET /v3/content\_types/{uid}/entries/{entry\_uid}?include\_referenced\_in=true (check current documentation for exact parameter support).
2.  Build a custom reference graph by fetching all entries via the CMA and analyzing the reference fields in each entry’s data to determine which entries reference which others.
3.  Use the Contentstack Audit Log to track reference creation and removal events over time.

After implementing a CMA-based reference graph or using the include\_referenced\_in parameter, verify that unused entries can be identified programmatically for content audit workflows.
