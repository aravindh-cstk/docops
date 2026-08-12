---
title: "ECONNRESET Errors When Fetching Nested Content with .includeReference"
description: "ECONNRESET Errors When Fetching Nested Content with .includeReference"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/070-econnreset-errors-when-fetching-nested-content-with-includereference
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs92b6462185b9e938
---

# ECONNRESET Errors When Fetching Nested Content with .includeReference

Intermittent network socket disconnection errors (ECONNRESET) occur when fetching entries with nested content using the CDA SDK’s .includeReference method. The errors are inconsistent - some complex pages fail while others with similar structure succeed.

**Root Cause**

ECONNRESET errors in this context are client-side network socket disconnections, not CDA errors. They can be triggered by network instability, proxy timeouts, or connection pool exhaustion when the client makes many simultaneous or large reference-resolution requests. Contentstack CDA responses are valid and complete; the connection is being dropped on the client or intermediate network layer.

**Resolution**

1.  Implement retry logic with exponential backoff around .includeReference calls to handle transient network failures.
2.  Reduce the number of concurrent reference resolution requests by batching or sequencing complex page fetches.
3.  Review network and proxy configuration for connection timeout settings and increase them if requests are being terminated prematurely.
4.  If the issue is environment-specific (for example, only on a deployment platform like Netlify or Vercel), validate the networking configuration of that environment.
5.  Update the .includeReference implementation to use the minimum required depth to reduce response size and connection duration.

After implementing retry logic and reviewing the network configuration, run the affected queries again. If ECONNRESET errors no longer occur consistently, the connection handling has been stabilized.
