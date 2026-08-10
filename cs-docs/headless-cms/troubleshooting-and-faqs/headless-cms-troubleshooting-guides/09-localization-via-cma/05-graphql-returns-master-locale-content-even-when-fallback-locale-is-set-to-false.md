---
title: "GraphQL Returns Master Locale Content Even When fallback_locale Is Set to False"
description: "GraphQL Returns Master Locale Content Even When fallback_locale Is Set to False"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/05-graphql-returns-master-locale-content-even-when-fallback-locale-is-set-to-false
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs2e4637a897f56921
---

# GraphQL Returns Master Locale Content Even When fallback_locale Is Set to False

A GraphQL query includes fallback\_locale: false to prevent fallback behavior, but the API continues to return content from the master locale instead of returning null or an empty response for the requested locale.

**Root Cause**

This is expected behavior when an entry has not been localized for the target language. The fallback\_locale: false parameter instructs GraphQL not to apply locale fallback - but only when a localized version of the entry exists. If the entry has never been localized and exists only in the master locale, GraphQL returns the master locale content regardless of the fallback\_locale setting, because there is no localized version to suppress.

In other words: fallback\_locale: false prevents fallback from a non-master locale to the master locale, but it does not suppress the master locale content itself when the entry is master-only.

**Resolution**

1.  Open the affected entry in the CMS.
2.  Localize the entry for the specific target language by creating a locale-specific version.
3.  Publish the localized version to the target environment.
4.  Re-run the GraphQL query with fallback\_locale: false. The query will now return the localized content instead of the master locale content.

If no content should be returned for a locale where the entry is intentionally absent, the entry must have a localized version (even if blank or unpublished) for fallback suppression to take effect.

After localizing and publishing the entry for the target locale, re-run the query with fallback\_locale: false. If localized content is returned instead of master locale content, the entry is correctly localized.
