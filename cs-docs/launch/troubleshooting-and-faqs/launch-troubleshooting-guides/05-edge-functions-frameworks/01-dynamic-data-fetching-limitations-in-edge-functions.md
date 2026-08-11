---
title: "Dynamic Data Fetching Limitations in Edge Functions"
description: "Dynamic Data Fetching Limitations in Edge Functions"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/05-edge-functions-frameworks/01-dynamic-data-fetching-limitations-in-edge-functions
doc_type: faq
_cms_section_uid: csdb00c5f9828f74b1
_cms_faq_uid: cs300432247b49686c
---

# Dynamic Data Fetching Limitations in Edge Functions

WinterCG runtime limitations prevent the direct fetching of dynamic data from Contentstack entries within a Launch Edge Function, causing failures when attempting to avoid hardcoded URLs in proxy configurations.

**Root Cause**

Launch Edge Functions operate within a restricted runtime environment that does not support the direct execution of certain SDK queries or external fetches intended for complex dynamic data retrieval.

**Resolution**

To handle dynamic URL routing or data retrieval within an Edge Function, implement the following workaround:

1.  **Create an API Route**: Develop a Next.js API route at the origin to fetch the required data from Contentstack using the JavaScript SDK.
2.  **Consume Data in Edge Function**: Configure the Edge Function to call the internal API route rather than querying the CMS directly.
3.  **Optimize with Caching**: Apply cache-control headers to the API response to improve performance and reduce origin load.
4.  **Implement Revalidation**: Utilize Contentstack Automate to trigger cache revalidation, ensuring the Edge Function has access to the most recent data without constant fetching.

The issue is resolved when the Edge Function successfully retrieves dynamic URLs through the intermediary API route without encountering runtime failures.
