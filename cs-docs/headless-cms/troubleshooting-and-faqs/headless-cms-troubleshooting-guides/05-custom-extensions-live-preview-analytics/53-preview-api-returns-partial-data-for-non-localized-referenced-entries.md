---
title: "Preview API Returns Partial Data for Non-Localized Referenced Entries"
description: "Preview API Returns Partial Data for Non-Localized Referenced Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/53-preview-api-returns-partial-data-for-non-localized-referenced-entries
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csc3d6838a2daaca0b
---

# Preview API Returns Partial Data for Non-Localized Referenced Entries

Preview API endpoints (rest-preview or graphql-preview) return partial data for referenced entries that are not localized in the requested locale. Only reference metadata (uid, content\_type\_uid) is returned rather than the full entry data. The same entries return full data via the standard CDN delivery endpoint.

**Root Cause**

The preview endpoint does not automatically apply locale fallback behavior to referenced entries. When a referenced entry has not been localized in the requested locale (for example, en-us), the preview endpoint returns only the stub reference metadata rather than falling back to the master locale. This behavior differs from the CDN delivery endpoint which applies configured locale fallback automatically.

**Resolution**

1.  Add the fallback\_locale parameter explicitly to the GraphQL preview query. For example: allPage(fallback\_locale: true) { … }
2.  For REST preview calls, include the fallback\_locale=true query parameter in the preview request URL.
3.  Ensure referenced entries that should appear in preview are either (a) localized in the requested locale, or (b) the query includes fallback\_locale to enable automatic fallback to the master locale.

After adding the fallback\_locale parameter, re-run the preview query and confirm that non-localized referenced entries return their full data by falling back to the master locale.
