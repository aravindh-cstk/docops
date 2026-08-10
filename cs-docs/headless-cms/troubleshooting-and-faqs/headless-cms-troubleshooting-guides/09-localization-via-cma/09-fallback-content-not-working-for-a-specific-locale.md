---
title: "Fallback Content Not Working for a Specific Locale"
description: "Fallback Content Not Working for a Specific Locale"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/09-fallback-content-not-working-for-a-specific-locale
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csafcc4a36dbe29ddb
---

# Fallback Content Not Working for a Specific Locale

Locale fallback is not working for the en-gb locale. The API returns empty or incorrect content instead of falling back to the master locale content.

**Root Cause**

Fallback behavior applies to entries that have not been localized for the requested locale and returns the master locale version. However, if an older, outdated localized version of the entry exists for en-gb (even if blank or incorrect), it takes precedence over the fallback. Contentstack returns the localized version even if it is outdated.

**Resolution**

1.  Identify entries where the en-gb localized version is outdated or incorrect.
2.  Unpublish the outdated en-gb version. This removes the localized version from the delivery layer.
3.  After unpublishing, the CDA will fall back to the master locale content for en-gb requests.

After unpublishing the outdated localized version, re-query the CDA for the en-gb locale and confirm the correct master locale content is returned.
