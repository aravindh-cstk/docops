---
title: "Taxonomy API Response Does Not Include Parent/Child Hierarchy"
description: "Taxonomy API Response Does Not Include Parent/Child Hierarchy"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/64-taxonomy-api-response-does-not-include-parent-child-hierarchy
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs213b68db26ab2f40
---

# Taxonomy API Response Does Not Include Parent/Child Hierarchy

When fetching entries that have a Taxonomy field, the API response contains only the taxonomy\_uid and term\_uid - not the full parent/child hierarchy. Displaying the taxonomy path (for example, Battery > Battery Charging) requires additional lookups.

**Root Cause**

Entry-level API responses return taxonomy data as flat UID references by design. The full hierarchical path is not embedded in the entry response. To retrieve hierarchical data, the Taxonomy Terms endpoints must be queried separately.

**Resolution**

1.  Query the taxonomy terms endpoint to retrieve the full term hierarchy: GET /v3/taxonomies/{taxonomy\_uid}/terms
2.  Build a local lookup map of term\_uid to its parent/child relationships.
3.  Use this map to resolve the hierarchical path from the UIDs returned in entry responses.
4.  Alternatively, use GraphQL, which can resolve taxonomy term names and paths inline within an entry query.

After building the taxonomy lookup map, confirm that full hierarchical paths can be resolved from the entry-level taxonomy UIDs.
