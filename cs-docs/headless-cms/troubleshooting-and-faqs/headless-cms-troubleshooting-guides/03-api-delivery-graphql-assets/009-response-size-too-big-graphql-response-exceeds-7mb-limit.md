---
title: "RESPONSE_SIZE_TOO_BIG - GraphQL Response Exceeds 7MB Limit"
description: "RESPONSE_SIZE_TOO_BIG - GraphQL Response Exceeds 7MB Limit"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/009-response-size-too-big-graphql-response-exceeds-7mb-limit
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csffbf65d70476f8df
---

# RESPONSE_SIZE_TOO_BIG - GraphQL Response Exceeds 7MB Limit

The GraphQL Explorer or API returns the following error even though the query appears to request a reasonable amount of data:

{ “error”: { “message”: “Response size was too big. Maximum response size allowed is 7MB”, “code”: “RESPONSE\_SIZE\_TOO\_BIG”, “hint”: “Try making smaller queries or reduce the response size by using ‘limit’ arguments.” } }

**Root Cause**

Contentstack enforces a 7MB maximum on GraphQL response payloads. This limit exists to protect platform performance. The limit is evaluated against the full serialized JSON response - including all resolved references, nested fields, and asset metadata. Queries that request many entries with deeply nested references or large text fields commonly exceed this threshold even when the individual entry count appears small. The API returns an HTTP 503 status code along with the RESPONSE\_SIZE\_TOO\_BIG error code when this limit is exceeded.

**Resolution**

1.  Add a limit argument to the top-level query to reduce the number of entries returned per request. For example: allBlogPost(limit: 10)
2.  Remove fields from the selection set that are not strictly needed for the use case, especially deeply nested reference chains and large Rich Text fields.
3.  Split a single large query into multiple smaller queries, each targeting a subset of the content.
4.  Use pagination - combine limit with skip to page through results incrementally rather than fetching all entries in one request.
5.  For asset-heavy queries, consider fetching asset UIDs only and resolving asset metadata in separate calls.

After reducing the query scope, re-run it in the GraphQL Explorer. If the RESPONSE\_SIZE\_TOO\_BIG error no longer appears and results are returned, the response is now within the 7MB limit.
