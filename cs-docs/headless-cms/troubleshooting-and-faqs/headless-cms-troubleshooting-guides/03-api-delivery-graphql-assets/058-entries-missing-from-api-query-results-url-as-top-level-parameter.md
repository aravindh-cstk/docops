---
title: "Entries Missing from API Query Results - url as Top-Level Parameter"
description: "Entries Missing from API Query Results - url as Top-Level Parameter"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/058-entries-missing-from-api-query-results-url-as-top-level-parameter
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse8ac8ceb0aab70c3
---

# Entries Missing from API Query Results - url as Top-Level Parameter

An API query intended to filter entries by a URL field returns all entries (up to the default 100 limit) instead of the specific entry matching the URL. The URL filter appears to be ignored.

**Root Cause**

The URL filter is being passed as a top-level query parameter (for example, url=/about) rather than inside the query JSON object. The CDA only processes field filters when they are included within the query JSON parameter. Top-level parameters that are not recognized by the API are silently ignored, causing the API to return the default result set without filtering.

**Resolution**

1.  Move the URL filter inside the query JSON object: query={“url”:“/about”}
2.  Correctly URL-encode the query parameter when including it in the request URL.
3.  Test the corrected query with a known URL value and confirm the correct single entry is returned.
4.  If filtering by the URL field, ensure the field is named url (the system URL field) or use the exact field UID for custom URL fields.

After moving the filter inside the query JSON object, confirm the API returns only the entry matching the specified URL.
