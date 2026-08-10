---
title: "Fetching Taxonomy Term Names via API: Use GraphQL"
description: "Fetching Taxonomy Term Names via API: Use GraphQL"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/01-fetching-taxonomy-term-names-via-api-use-graphql
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs250c4023278e7ba7
---

# Fetching Taxonomy Term Names via API: Use GraphQL

CMA responses for entries return only taxonomy\_uid and term\_uid values, not the human-readable taxonomy term names. Displaying taxonomy names in front-end applications requires additional lookups.

**Root Cause**

The REST CDA and CMA return taxonomy data as UIDs rather than resolved names. Term names require a separate lookup via the Taxonomy API or can be resolved in a single query using GraphQL.

**Resolution**

Option A: GraphQL (recommended): Use GraphQL to query entries and include the taxonomy term names inline. GraphQL resolves the taxonomy\_uid and term\_uid to their display names within the same query, eliminating the need for separate lookups.

Option B: Taxonomy API: Use the CMA Taxonomy Terms endpoint to fetch term names: GET /v3/taxonomies/{taxonomy\_uid}/terms. Build a local lookup map of term\_uid to term name and use it to resolve names from entry responses.

1.  For the GraphQL approach, add the taxonomies field to the entry query and select term name and uid within it.
2.  Test the query in the GraphQL Explorer to confirm term names are returned alongside entry data

After implementing either approach, confirm that taxonomy term names are displayed correctly in the application without requiring additional API round-trips per entry.
