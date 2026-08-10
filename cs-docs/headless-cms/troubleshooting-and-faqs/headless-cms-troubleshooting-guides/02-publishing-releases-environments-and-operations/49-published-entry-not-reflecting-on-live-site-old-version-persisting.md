---
title: "Published Entry Not Reflecting on Live Site - Old Version Persisting"
description: "Published Entry Not Reflecting on Live Site - Old Version Persisting"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/49-published-entry-not-reflecting-on-live-site-old-version-persisting
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csb818b2f02b3a0722
---

# Published Entry Not Reflecting on Live Site - Old Version Persisting

A team publishes an updated version of an entry (for example, V6) but the live site continues to serve the old version (V5). The publish operation shows as successful in the UI and the release includes the correct version, but the content does not change on the frontend.

**Root Cause**

This can occur when the entry’s internal state has a discrepancy between the saved version and the version being pushed to the delivery layer. The publish appears to succeed because the entry exists and meets schema validation, but the delivery layer does not register a meaningful change from its current state.

**Resolution**

1.  Re-save the entry to create a new version (even without making content changes) - open the entry, click Save, and confirm a new version number is created.
2.  Publish the newly created version.
3.  If the entry was published via a Release, confirm the new version is included in the Release items - older versions in a Release are not automatically replaced when a new version is saved.
4.  After publishing the new version, add a cache-busting query parameter to the live URL to confirm the new content is being served: append ?cb=timestamp to force a fresh CDN fetch.

After re-saving and republishing, verify the live site serves the updated content version.
