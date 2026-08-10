---
title: "include_publish_details Returns Empty in CMA Response"
description: "include_publish_details Returns Empty in CMA Response"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/14-include-publish-details-returns-empty-in-cma-response
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs9edee23ab56dc766
---

# include_publish_details Returns Empty in CMA Response

CMA API calls using include\_publish\_details=true return an empty or null publish\_details field, even though entries are confirmed as published. The issue appears on EU stacks but entries are visible in the CDA.

**Root Cause**

A backend inconsistency in how publish details are stored per locale causes the CMA to fail to retrieve them for certain entries. The data exists but is not correctly indexed for retrieval. Re-saving all locales of the affected entries forces a re-write of the publish details index, resolving the retrieval issue.

**Resolution**

1.  Identify all locales for the affected entries.
2.  Open each entry, switch to each locale, and perform a save without content changes.
3.  For large numbers of entries, use a CMA script to fetch each entry per locale and re-save using PUT /v3/content\_types/{uid}/entries/{entry\_uid}?locale={locale}.
4.  After re-saving, re-run the include\_publish\_details=true request and confirm the publish\_details field is now populated.

After re-saving all locales, verify the CMA response includes publish\_details with the correct environment and publish timestamp for each locale.
