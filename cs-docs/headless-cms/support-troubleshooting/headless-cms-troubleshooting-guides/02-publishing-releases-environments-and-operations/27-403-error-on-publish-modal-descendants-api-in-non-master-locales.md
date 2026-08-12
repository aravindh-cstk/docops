---
title: "403 Error on Publish Modal Descendants API in Non-Master Locales"
description: "403 Error on Publish Modal Descendants API in Non-Master Locales"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/27-403-error-on-publish-modal-descendants-api-in-non-master-locales
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs0885af2d9f66bc4e
---

# 403 Error on Publish Modal Descendants API in Non-Master Locales

The publish modal displays a spinner or 403 error when attempting to publish entries in non-master locales. The issue affects entries in specific stacks and appears only for certain locale combinations.

**Root Cause**

The 403 error on the publishing modal’s descendants API is caused by a deleted locale UID being referenced in the query. When a locale is deleted from a stack, its localeUid may remain as a reference in certain entry metadata. When the publish modal attempts to fetch descendants for that locale, the query fails with a 403 because the localeUid no longer exists.

**Resolution**

A platform fix has been deployed. The descendants query now only fetches entries where deleted\_at is false, preventing the 403 error from being triggered by deleted locale references. No action is required for stacks affected by this bug after the fix is applied.

1.  If the 403 error persists after the fix deployment, contact Contentstack Support with the affected stack API key, entry UID, and the locale combination that triggers the error.
2.  As a workaround before the fix is available: publish the entry via the CMA directly, bypassing the publish modal: POST /v3/bulk/publish with the entry UID and target locale and environments specified in the request body.

After the fix is applied, open the publish modal for an entry in a non-master locale and confirm the descendants list loads without a 403 error or spinner.
