---
title: "URL Slug Accented Characters Replaced With Hyphens Instead of Transliteration"
description: "URL Slug Accented Characters Replaced With Hyphens Instead of Transliteration"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/27-url-slug-accented-characters-replaced-with-hyphens-instead-of-transliteration
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs80efd5b62cacc3d1
---

# URL Slug Accented Characters Replaced With Hyphens Instead of Transliteration

When generating URL slugs from titles containing accented characters (ñ, ä, ó), Contentstack removes the character and inserts a hyphen instead of converting to the non-accented equivalent.

**Root Cause**

The URL slug generator removes characters outside the standard ASCII range and inserts a separator. It does not apply automatic transliteration. This is the platform’s default behavior.

**Resolution**

1.  Implement transliteration in the URL generation logic on the frontend or in a webhook/automation. Use a library such as slugify with unicode: true (Node.js) or Python’s unidecode library.
2.  For existing entries with incorrect slugs, use a CMA script to fetch entries, apply transliteration to URL field values, and update entries programmatically.
3.  Consider a custom App SDK extension on the URL field that automatically applies transliteration as the user types the entry title.

After implementing transliteration, verify that new entries with accented characters generate slugs with correctly transliterated ASCII equivalents.
