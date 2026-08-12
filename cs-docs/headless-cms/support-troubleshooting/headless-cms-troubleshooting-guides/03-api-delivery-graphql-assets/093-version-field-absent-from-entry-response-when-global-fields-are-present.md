---
title: "Version Field Absent from Entry Response When Global Fields Are Present"
description: "Version Field Absent from Entry Response When Global Fields Are Present"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/093-version-field-absent-from-entry-response-when-global-fields-are-present
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs565992137f9a699a
---

# Version Field Absent from Entry Response When Global Fields Are Present

The version field (\_version) is present in the API response when fetching a global field independently, but is absent from the entry response when the entry contains that global field.

**Root Cause**

The version field in Contentstack represents the version of the top-level object being fetched. When fetching an entry that includes a global field, the \_version in the response reflects the entry’s version, not the global field’s version. The global field itself does not independently contribute a version number to the parent entry response - its version is only visible when the global field is fetched directly.

**Resolution**

1.  To retrieve the version of the global field itself, fetch it directly via the global fields API endpoint.
2.  To retrieve the version of the entry, use the standard entry fetch endpoint - the \_version field in the entry response reflects the entry’s version.
3.  If the intent is to track changes to global fields embedded within entries, use the Audit Log API to view modification history.

After fetching the global field directly, confirm that the \_version field is present in the response and reflects the expected version number.
