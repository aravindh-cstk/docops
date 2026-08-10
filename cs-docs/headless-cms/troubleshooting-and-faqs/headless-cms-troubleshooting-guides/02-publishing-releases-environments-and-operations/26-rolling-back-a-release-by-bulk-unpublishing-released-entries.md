---
title: "Rolling Back a Release by Bulk-Unpublishing Released Entries"
description: "Rolling Back a Release by Bulk-Unpublishing Released Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/26-rolling-back-a-release-by-bulk-unpublishing-released-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csee86bfa96f7516bf
---

# Rolling Back a Release by Bulk-Unpublishing Released Entries

A release has been deployed and the customer needs to roll it back - effectively undoing the publish of all entries included in the release. There is no native ‘rollback’ button on a deployed release.

**Root Cause**

Contentstack does not provide a one-click rollback mechanism for deployed releases. Rollback must be performed by explicitly unpublishing the entries that were deployed in the release.

**Resolution**

**From the Entries List page (UI):**

1.  Navigate to the Entries section in the stack.
2.  Use filters or search to identify and select the entries that were part of the released deployment.
3.  Use the checkboxes to select all affected entries.
4.  Click Unpublish from the floating action panel and select the target environments.

**Programmatically via CMA (recommended for large releases):**

1.  Retrieve the list of entry UIDs from the release: GET /v3/releases/{release\_uid}/items
2.  Use the CMA bulk unpublish endpoint: POST /v3/bulk/unpublish with the array of entry UIDs and target environments.
3.  Poll the returned job\_id to confirm all entries are unpublished.

After the rollback, verify a sample of the released entries are no longer accessible via the CDA and that the environment reflects the pre-release content state.
