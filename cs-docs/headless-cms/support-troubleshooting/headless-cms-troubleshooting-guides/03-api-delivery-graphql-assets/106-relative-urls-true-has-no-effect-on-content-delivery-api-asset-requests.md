---
title: "relative_urls=true Has No Effect on Content Delivery API Asset Requests"
description: "relative_urls=true Has No Effect on Content Delivery API Asset Requests"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/106-relative-urls-true-has-no-effect-on-content-delivery-api-asset-requests
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse25278b63d9a3716
---

# relative_urls=true Has No Effect on Content Delivery API Asset Requests

The relative\_urls=true query parameter is added to a Content Delivery API (CDA) request for Get All Assets or Get a Single Asset. Despite being included, the url field continues to return a full absolute URL starting with https://. The parameter appears to have no effect.

**Root Cause**

The relative\_urls=true parameter is supported only in the Content Management API (CMA), not in the Content Delivery API (CDA). When the parameter is passed in a CDA request, it is silently ignored - the CDA always returns absolute URLs for asset fields. This was previously documented incorrectly and the Contentstack documentation has since been updated to clarify that relative\_urls is a CMA-only parameter.

**Resolution**

There is no supported way to retrieve relative asset URLs from the Content Delivery API. To work with relative URLs for assets:

1.  If relative URLs are needed for asset management or internal tooling, use the Content Management API (CMA) with a management token and include relative\_urls=true in the CMA request.
2.  If the use case is front-end rendering, extract the relative path client-side by stripping the domain from the absolute URL returned by the CDA. For example: new URL(absoluteUrl).pathname
3.  Do not rely on relative\_urls=true in CDA requests - the parameter has no effect and the absolute URL will always be returned.

After switching to the CMA for asset requests (if relative URLs are required), confirm the url field returns a relative path. For front-end use cases, apply client-side URL path extraction from the absolute URL returned by the CDA.
