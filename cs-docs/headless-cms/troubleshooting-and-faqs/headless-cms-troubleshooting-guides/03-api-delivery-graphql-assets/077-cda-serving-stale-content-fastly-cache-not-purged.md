---
title: "CDA Serving Stale Content - Fastly Cache Not Purged"
description: "CDA Serving Stale Content - Fastly Cache Not Purged"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/077-cda-serving-stale-content-fastly-cache-not-purged
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse11d4368f573a355
---

# CDA Serving Stale Content - Fastly Cache Not Purged

Published content changes are not reflected on the live site even after waiting beyond the expected cache refresh window. The CDA continues to return an older version of the entry. The issue resolves only after manual intervention.

**Root Cause**

The Fastly CDN layer used by Contentstack did not purge the cached version of the content following the publish event. In this scenario, the origin (Contentstack) holds the correct updated content but Fastly continues serving the stale cached response. This is a platform-level caching anomaly requiring engineering intervention.

**Resolution**

1.  Contact Contentstack Support and report the affected entry UID, environment, and the timestamp of the publish event.
2.  Support will escalate to the CDA engineering team, who can force a Fastly cache purge for the affected content.
3.  As an interim measure, append a unique cache-busting query parameter to the request URL (for example, ?cb=<timestamp>) to force a cache miss and retrieve fresh content directly from the origin.

After the Fastly cache is purged by engineering, request the affected URL without cache-busting parameters and confirm the latest content is returned.
