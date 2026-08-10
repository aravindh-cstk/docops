---
title: "$exists:false Queries Are Significantly Slower Than $exists:true"
description: "$exists:false Queries Are Significantly Slower Than $exists:true"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/099-exists-false-queries-are-significantly-slower-than-exists-true
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs468b06fe9d4ef0d6
---

# $exists:false Queries Are Significantly Slower Than $exists:true

CDA queries using $exists: false on a field (for example, hero\_video) have significantly higher response times compared to queries using $exists: true on the same field. The performance difference is consistent.

**Root Cause**

Queries using $exists: false require a full collection scan to identify entries where the field is absent, because the absence of a field cannot be indexed in the same way as its presence. $exists: true queries can leverage an index on the field, making them fast. The $exists: false condition cannot benefit from the field index, resulting in much higher query execution time on large datasets.

**Resolution**

1.  Add additional indexed field filters to the $exists: false query to reduce the scan scope. For example, filter on a content type or status field that is indexed, in addition to the $exists condition.
2.  Alternatively, add a dedicated boolean field (for example, has\_hero\_video: false) to the content model. Set this field explicitly when creating or updating entries. The boolean field can be indexed and queried with $exists: true, achieving the same result with better performance.
3.  If the performance issue is severe and the content model cannot be changed, contact Contentstack Support and request that the specific field be added to the index for the stack.

After adding the additional filter or the dedicated boolean field, re-run the query and measure the response time. If the latency is reduced to a level comparable to $exists: true queries, the optimization is effective.
