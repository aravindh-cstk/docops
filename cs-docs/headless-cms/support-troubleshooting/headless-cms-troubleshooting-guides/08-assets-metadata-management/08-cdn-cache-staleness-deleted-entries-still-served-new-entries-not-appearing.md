---
title: "CDN Cache Staleness - Deleted Entries Still Served, New Entries Not Appearing"
description: "CDN Cache Staleness - Deleted Entries Still Served, New Entries Not Appearing"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/08-cdn-cache-staleness-deleted-entries-still-served-new-entries-not-appearing
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cse8baebe417c43fdd
---

# CDN Cache Staleness - Deleted Entries Still Served, New Entries Not Appearing

After creating or deleting entries, the CDN continues to serve stale data: a deleted entry is still returned by the API, a newly created entry does not appear, or a query returns an entry that does not match the request. The issue is observed on the eu-cdn endpoint.

**Root Cause**

In the reported case, this behavior resolved on its own before a root cause could be confirmed - Contentstack’s investigation was limited by the absence of the specific entry UID and request/response details from the affected window, and the CDN endpoint could not be made to reproduce the same behavior afterward. No specific cause was diagnosed. Possible contributing factors for this class of symptom include CDN propagation delay across edge nodes in certain regions, cache-busting logic not triggering correctly for specific query patterns, or a transient CDN routing issue where an edge node has not yet received an invalidation signal - but these are plausible explanations, not a confirmed mechanism.

**Resolution**

1.  Wait briefly - CDN propagation typically completes within a few seconds to minutes. If the correct data appears after a short wait, the propagation delay was the cause.
2.  Use a cache-busting query parameter to force a fresh fetch from the origin while investigating: append ?cb=<timestamp> to the request URL.
3.  If the stale data persists beyond 10–15 minutes, contact Contentstack Support and provide: the affected entry UIDs, the CDN endpoint (for example, eu-cdn), the operation performed (create/delete/update), the timestamp of the operation, and the incorrect response received.
4.  Engineering can force a CDN cache purge for the specific cache key if standard propagation has failed.

After the CDN purge or propagation completes, re-query without the cache-busting parameter and confirm the response reflects the correct current state of the entry.
