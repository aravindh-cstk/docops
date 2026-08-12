---
title: "Bulk Search for Hyperlink Href Values in JSON RTE Not Working"
description: "Bulk Search for Hyperlink Href Values in JSON RTE Not Working"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/46-bulk-search-for-hyperlink-href-values-in-json-rte-not-working
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csac99d867d7b3c04a
---

# Bulk Search for Hyperlink Href Values in JSON RTE Not Working

Using the Bulk Operations search to find and replace hyperlink href values within JSON RTE content does not return results. Plain text searches work correctly.

**Root Cause**

The Bulk Operations search and replace function operates on the visible field values - the text displayed within the RTE. It does not search through internal structured data such as hyperlink URL attributes within the JSON RTE’s data model. Hyperlink URLs are stored as internal reference fields, not as plain text values.

**Resolution**

This is expected behavior based on the JSON RTE data architecture. For bulk hyperlink URL updates:

1.  Use the CMA to fetch entries and parse the JSON RTE structure programmatically.
2.  Identify and update the href values within the JSON structure using a script.
3.  Update the entries via the CMA update endpoint with the corrected JSON RTE content.

After scripting the JSON RTE update, verify the hyperlink URLs are correctly replaced in the affected entries by fetching them via the CDA.
