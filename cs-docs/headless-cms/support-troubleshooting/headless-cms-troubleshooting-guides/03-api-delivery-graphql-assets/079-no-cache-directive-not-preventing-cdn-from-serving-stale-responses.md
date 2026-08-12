---
title: "no-cache Directive Not Preventing CDN from Serving Stale Responses"
description: "no-cache Directive Not Preventing CDN from Serving Stale Responses"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/079-no-cache-directive-not-preventing-cdn-from-serving-stale-responses
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs62f00fc93c48f4e8
---

# no-cache Directive Not Preventing CDN from Serving Stale Responses

Using a Cache-Control: no-cache header in API requests does not prevent the CDN from serving cached responses. Stale or inconsistent data continues to be returned despite the no-cache directive.

**Root Cause**

The no-cache directive instructs the CDN to revalidate cached content with the origin before serving it, but it does not prevent the CDN from storing the response. Under certain conditions, a CDN may interpret no-cache as permission to serve a stored response if revalidation is deferred or unavailable. The no-store directive is the correct directive to fully prevent caching and storage of a response.

**Resolution**

1.  Replace Cache-Control: no-cache with Cache-Control: no-store in requests where caching must be fully disabled.
2.  The no-store directive instructs the CDN and all intermediate caches not to store any version of the response, ensuring every request retrieves fresh content from the origin.
3.  Refer to the Contentstack CDN documentation for details on supported Cache-Control directives and their behavior within the Contentstack delivery infrastructure.

After switching to no-store, send the same request multiple times and confirm that each response reflects the latest origin data without CDN-served variations.
