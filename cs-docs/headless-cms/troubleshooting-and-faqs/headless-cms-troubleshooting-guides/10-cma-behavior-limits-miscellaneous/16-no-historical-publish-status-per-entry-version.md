---
title: "No Historical Publish Status Per Entry Version"
description: "No Historical Publish Status Per Entry Version"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/16-no-historical-publish-status-per-entry-version
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs2391caed1eb3bc9a
---

# No Historical Publish Status Per Entry Version

A user wants to know, for a given entry, whether each past version was published and to which environment. They expect a version-by-version publish history.

**Root Cause**

Contentstack does not retain a per-version publish history for entries. The include\_publish\_details flag returns the current publish state of the latest version only. The /versions endpoint lists all version numbers and their creation timestamps, but does not include publish status for each individual version.

**Resolution**

There is no API endpoint that provides per-version publish history. Available alternatives:

1.  Use the Audit Log API (GET /v3/audit-logs) to retrieve publish and unpublish events for specific entries. Audit log events include the entry UID, timestamp, action type, environment, and user. Cross-reference with version numbers to approximate a publish history.
2.  Configure webhooks to fire on publish and unpublish events. Capture the payload (which includes the entry UID, version, environment, and timestamp) in an external system to build a persistent per-version publish history.
3.  Use include\_publish\_details=true in the CDA request to retrieve the current publish status for the current version.

For teams that need per-version publish tracking, the webhook-based approach provides the most complete ongoing record. The audit log API is useful for reconstructing historical data from existing records.
