---
title: "CDN Cache Refresh Timing After Publish and Unpublish Actions"
description: "CDN Cache Refresh Timing After Publish and Unpublish Actions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/078-cdn-cache-refresh-timing-after-publish-and-unpublish-actions
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs06aaee03a35a76ee
---

# CDN Cache Refresh Timing After Publish and Unpublish Actions

After publishing or unpublishing content, there is an observable delay before the change is reflected in API responses. The expected behavior and timing of CDN cache refresh is unclear.

**Root Cause**

Contentstack automatically triggers a CDN cache purge when a publish, unpublish, or delete action occurs. The first request after the purge hits the origin server to retrieve the fresh content, and subsequent requests are served from the refreshed CDN cache. The time between the publish action and full CDN propagation is typically near-instant but may take a short period during high-load conditions.

**Resolution**

1.  Allow a brief propagation window after publishing before expecting the change to be universally reflected across all CDN nodes.
2.  If content is not updating after an extended period, verify the publish was successful by checking the publish queue in the CMS.
3.  For time-sensitive deployments, use cache-busting parameters in test requests to confirm the origin is returning updated content before CDN propagation completes.
4.  Note: There is no public API available for manually triggering a CDN cache clear. Cache purges are automatic on publish, unpublish, and delete events.

After publishing, wait for the propagation window and request the URL without cache-busting parameters. If the updated content is returned, the CDN has propagated the change.
