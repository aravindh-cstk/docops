---
title: "Short UID Not Supported as API Query Parameter for Experience or Variant Retrieval"
description: "Short UID Not Supported as API Query Parameter for Experience or Variant Retrieval"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/08-short-uid-not-supported-as-api-query-parameter-for-experience-or-variant-retriev
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: csa0bbdf6276229fa5
---

# Short UID Not Supported as API Query Parameter for Experience or Variant Retrieval

Attempting to retrieve a specific Experience or Variant by passing its Short UID as a query parameter in the Contentstack API does not return the expected result. This prevents developers from using Short UIDs as identifiers in API-driven workflows.

**Root Cause**

Short UIDs are not supported as direct query parameters in the Contentstack API. This is a current API design limitation and not a product defect.

**Resolution**

1.  Replace Short UIDs with full UIDs or slug-based identifiers when querying Experiences or Variants via the API.
2.  If your application has already stored Short UIDs, build a mapping layer in your backend that translates Short UIDs to full UIDs or slugs before making API calls.
3.  To retrieve variant content, use the Contentstack Delivery SDK or CDA and specify variant aliases rather than relying on Short UID-based querying.
4.  Store full UIDs or slugs as the primary identifiers in your application architecture to avoid this limitation going forward.

Once full UIDs or slugs are used in API requests, Experiences and Variants will be retrieved as expected.
