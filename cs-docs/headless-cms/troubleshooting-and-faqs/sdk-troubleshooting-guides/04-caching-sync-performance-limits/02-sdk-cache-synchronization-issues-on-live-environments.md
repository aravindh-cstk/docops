---
title: "SDK Cache Synchronization Issues on Live Environments"
description: "SDK Cache Synchronization Issues on Live Environments"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/04-caching-sync-performance-limits/02-sdk-cache-synchronization-issues-on-live-environments
doc_type: faq
_cms_section_uid: cs2fbb946b868a690a
_cms_faq_uid: cseccf79ad3a90e153
---

# SDK Cache Synchronization Issues on Live Environments

Stale content appears when cache policy/persistence settings prioritize cache over freshness.

**Root Cause**

The SDK’s cache policy is set to prioritize local persistence (e.g., CACHE\_ELSE\_NETWORK) over real-time API data, causing the application to serve stale content.

**Resolution**

1.  Use modern cache policy configuration (cacheOptions.policy) for your freshness requirement.
2.  Prefer network-first patterns for dynamic/live content paths.
3.  Ensure persistence store TTL/maxAge and cache invalidation strategy are intentional.
4.  Remove guidance relying on legacy/non-standard cache clearing methods.

cacheOptions

: {

policy

:

Policy

.

NETWORK\_ELSE\_CACHE

,

persistenceStore

:

new

PersistenceStore

({

storeType

:

'localStorage'

,

maxAge

:

3600000

}) }

Recently updated entries return latest updated\_at/content after policy changes. Escalate with cache policy, persistence config, and timestamps of publish vs fetch.
