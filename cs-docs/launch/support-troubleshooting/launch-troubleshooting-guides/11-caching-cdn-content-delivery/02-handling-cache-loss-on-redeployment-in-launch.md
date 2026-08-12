---
title: "Handling Cache Loss on Redeployment in Launch"
description: "Handling Cache Loss on Redeployment in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/11-caching-cdn-content-delivery/02-handling-cache-loss-on-redeployment-in-launch
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: cs4346acc6828385f5
---

# Handling Cache Loss on Redeployment in Launch

A Launch project loses its locally cached data each time a new deployment is triggered. This is particularly disruptive for applications that build a content cache at startup and rely on it across requests, as each deployment resets the cache to zero.

**Root Cause**

Launch deployments run in ephemeral build environments. Each deployment creates a fresh instance, and any in-memory or local file system cache from the previous deployment is not carried forward. Local caches cannot persist across deployments in this architecture.

**Resolution**

1.  Move cache data to an external persistent store such as Redis, a database (e.g., MongoDB or PostgreSQL), or a cloud storage bucket (e.g., AWS S3 or Google Cloud Storage).
2.  Update the application to read from and write to the external cache store rather than the local file system or in-memory cache.
3.  On application startup, populate the external cache if it is empty, and serve from it on subsequent requests.
4.  Use Contentstack Automate webhooks to invalidate or refresh specific cache entries when content is published, rather than rebuilding the entire cache on each deployment.

The issue is resolved when cache data persists across deployments and the application does not incur a full cache rebuild cost after each release.
