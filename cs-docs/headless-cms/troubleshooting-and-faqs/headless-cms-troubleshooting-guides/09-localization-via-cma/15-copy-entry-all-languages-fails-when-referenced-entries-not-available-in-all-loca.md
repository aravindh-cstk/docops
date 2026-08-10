---
title: "‘Copy Entry - All Languages’ Fails When Referenced Entries Not Available in All Locales"
description: "‘Copy Entry - All Languages’ Fails When Referenced Entries Not Available in All Locales"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/15-copy-entry-all-languages-fails-when-referenced-entries-not-available-in-all-loca
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csc440620f09cb1a7f
---

# ‘Copy Entry - All Languages’ Fails When Referenced Entries Not Available in All Locales

Using ‘Copy - All Languages’ fails for certain locales. The bulk task queue shows failures and copied entry is missing locale versions.

**Root Cause**

During the copy process, Contentstack attempts to create copies of the entry and all referenced entries across all selected locales. If a referenced entry or asset does not have a localized version in a target locale, the copy fails for that locale.

**Resolution**

1.  Review the bulk task queue to identify which locales failed and which referenced entries caused the failure.
2.  Localize the referenced entries in the failing locales before retrying the copy operation.
3.  Alternatively, use ‘Copy - Master Only’ first, then manually add locale versions.

After localizing referenced entries in the failing locales, retry ‘Copy - All Languages’ and confirm all locales are created successfully.
