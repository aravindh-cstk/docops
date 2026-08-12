---
title: "include_fallback=false Still Returns Non-Localized Entries"
description: "include_fallback=false Still Returns Non-Localized Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/11-include-fallback-false-still-returns-non-localized-entries
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs5ccf1dcb20efd515
---

# include_fallback=false Still Returns Non-Localized Entries

When calling the All Entries API with a specific locale parameter (for example, locale=zh-it) and include\_fallback=false, entries that have not been explicitly localized for zh-it are still returned in the response.

**Root Cause**

Setting include\_fallback=false prevents the API from returning the master locale version as a fallback, but it does not exclude entries that have not been explicitly localized. An entry must have an active localized version for the requested locale in order for locale filtering to work as expected. Without explicit localization, the entry still appears in results because it exists in the stack and the fallback suppression only applies to the content fields, not to the entry’s presence in the result set.

**Resolution**

1.  To receive only entries that have been explicitly localized for a specific locale, localize each required entry for that locale in the CMS.
2.  Alternatively, add a query filter for the locale field in the request: query={“locale”:“zh-it”} - this restricts results to entries where the zh-it locale version exists.
3.  Combine the locale parameter, include\_fallback=false, and the locale field filter for the most restrictive locale-specific query.

After localizing the entries or adding the locale query filter, re-run the API call and confirm that only entries with explicit zh-it localization are returned.
