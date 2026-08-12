---
title: "Entry Returned for the Wrong Locale - Expected Fallback Behavior"
description: "Entry Returned for the Wrong Locale - Expected Fallback Behavior"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/14-entry-returned-for-the-wrong-locale-expected-fallback-behavior
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csddf402ea87d6fdf8
---

# Entry Returned for the Wrong Locale - Expected Fallback Behavior

An entry of a specific content type is returned when querying the CDN API with a locale parameter (for example, locale=fr-fr), even though the entry does not exist in French. Only the base locale and a Chinese localization exist for the entry.

**Root Cause**

This is expected behavior. When a localized version of an entry does not exist for the requested locale (in this case fr-fr), Contentstack automatically falls back to the base locale and returns that entry in the response. The fallback chain goes from the requested locale to its parent locale and ultimately to the master/base locale.

**Resolution**

To fetch the entry in a specific localization (for example, Chinese), the API request must explicitly specify that locale:

1.  Update the request to use locale=zh-cn (or the correct locale code for Chinese) instead of locale=fr-fr.
2.  To prevent fallback entries from appearing for locales that have no content, add include\_fallback=false to the request. Note that this suppresses the fallback content fields but the entry may still appear in results - see the include\_fallback filtering guidance for full exclusion.
3.  Localize the entry explicitly for all required locales to have full control over what is returned per locale.

After updating the locale parameter to match the target localization, confirm that the API response returns the correct localized content for that language.
