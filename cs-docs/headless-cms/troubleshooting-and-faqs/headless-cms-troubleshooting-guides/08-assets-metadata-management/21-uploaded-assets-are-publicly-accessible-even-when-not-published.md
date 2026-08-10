---
title: "Uploaded Assets Are Publicly Accessible Even When Not Published"
description: "Uploaded Assets Are Publicly Accessible Even When Not Published"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/21-uploaded-assets-are-publicly-accessible-even-when-not-published
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csa9cce3aeb60cb20e
---

# Uploaded Assets Are Publicly Accessible Even When Not Published

Assets uploaded to Contentstack remain accessible via their direct URL even when they have not been published to any environment. This prevents restricting access to unpublished or draft assets.

**Root Cause**

By design, Contentstack assets are publicly accessible once uploaded, regardless of their publish status. The asset URL is deterministic and accessible without authentication. Publish status controls whether an asset is returned in API responses, but does not restrict direct URL access.

**Resolution**

Two approaches are available depending on the use case:

1.  Use the Contentstack Delivery API to fetch assets programmatically. Append the environment parameter to the request (for example: ?environment=production) to ensure only assets published to the specified environment are returned.
2.  To restrict direct URL access entirely, implement secure asset URLs with token-based access or serve assets through a proxy layer that enforces publish-status checks before delivery.

After implementing environment-scoped API fetching, confirm that only published assets are returned in the API response for the specified environment.
