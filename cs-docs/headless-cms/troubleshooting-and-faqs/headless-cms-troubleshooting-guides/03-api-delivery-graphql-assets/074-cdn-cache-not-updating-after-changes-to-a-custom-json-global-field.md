---
title: "CDN Cache Not Updating After Changes to a Custom JSON Global Field"
description: "CDN Cache Not Updating After Changes to a Custom JSON Global Field"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/074-cdn-cache-not-updating-after-changes-to-a-custom-json-global-field
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs465132f0c05765c4
---

# CDN Cache Not Updating After Changes to a Custom JSON Global Field

After updating an entry through a Custom JSON field that references a global field, the changes are not reflected in the live site. The CDN continues to serve stale content even after the update is confirmed in the CMS.

**Root Cause**

When a global field is updated through a custom JSON field, the CDN cache may not be automatically purged. The cache purge is triggered by a publish event on the parent entry. If the update path does not trigger a standard publish event, the CDN retains the cached version of the content.

**Resolution**

1.  After updating the entry via the Custom JSON field, explicitly publish the parent entry to trigger a CDN cache purge.
2.  If the entry is referenced by other entries, publish those as well to propagate the cache invalidation.
3.  Refer to the Contentstack CDN Cache Management documentation for guidance on revalidation workflows for global fields and custom extensions.

After publishing the parent entry, request the affected URL and confirm the response reflects the updated content.
