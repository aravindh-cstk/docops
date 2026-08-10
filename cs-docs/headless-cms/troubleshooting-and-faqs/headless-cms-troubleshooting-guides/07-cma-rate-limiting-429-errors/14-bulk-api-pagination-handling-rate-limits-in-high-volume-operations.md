---
title: "Bulk API Pagination - Handling Rate Limits in High-Volume Operations"
description: "Bulk API Pagination - Handling Rate Limits in High-Volume Operations"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/14-bulk-api-pagination-handling-rate-limits-in-high-volume-operations
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs9ea7b2a8eda005a8
---

# Bulk API Pagination - Handling Rate Limits in High-Volume Operations

An application making bulk API calls hits rate limits and needs guidance on how to structure requests to stay within limits reliably.

**Root Cause**

Bulk operations that fetch or process large datasets often generate more API calls per second than the organization rate limit allows, especially when fetching all entries across multiple content types or locales.

**Resolution**

1.  Use limit and skip parameters to paginate through results in manageable chunks: GET /v3/content\_types/{uid}/entries?limit=100&skip=0, then increment skip by 100 per batch.
2.  Fetch the total count first using the count=true parameter to determine how many pages to fetch: GET /v3/content\_types/{uid}/entries?count=true.
3.  Add a configurable delay between page requests (for example, 50–100ms) to keep the aggregate request rate below the limit.
4.  Monitor X-RateLimit-Remaining in each response header and pause if it drops below a safe threshold.
5.  Process content types sequentially rather than in parallel to avoid multiple loops competing for the same rate limit budget.

After implementing paginated fetching with delays, confirm the total number of entries retrieved matches the count from the initial count request, and that no 429 errors occur during the full fetch.

Note on DataSync: The Contentstack Sync API operates on its own separate rate limit quota, independent of the CDA and CMA quotas. Running a DataSync initial sync concurrently with CDA delivery traffic or CMA migration operations will not cause the two to compete for the same rate limit budget. Each has its own allocation. Additionally, fetching an entry with references counts as a single API request - the reference resolution does not generate additional API calls against the rate limit.
