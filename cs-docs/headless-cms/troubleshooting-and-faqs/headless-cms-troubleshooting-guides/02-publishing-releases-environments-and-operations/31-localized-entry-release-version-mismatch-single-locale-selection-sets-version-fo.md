---
title: "Localized Entry Release Version Mismatch - Single Locale Selection Sets Version for All"
description: "Localized Entry Release Version Mismatch - Single Locale Selection Sets Version for All"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/31-localized-entry-release-version-mismatch-single-locale-selection-sets-version-fo
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs6ba94df276f51488
---

# Localized Entry Release Version Mismatch - Single Locale Selection Sets Version for All

When adding a localized entry to a Release, selecting a single locale version (with a lower version number) and then adding other locales causes all selected locales to inherit the version of the initially selected locale. This results in older content versions being included in the Release for some locales.

**Root Cause**

The Release item addition logic uses the version of the first selected locale as the version reference when multiple locales are added together in certain selection sequences. When all locales are selected simultaneously (multi-select), each locale correctly retains its own latest version. However, when a single locale is selected first and then other locales are added, the version of the initial selection is applied to all.

**Resolution**

1.  When adding localized entries to a Release, select all locales simultaneously (multi-select) in a single operation rather than selecting one locale first and then adding others.
2.  After adding entries to a Release, review the Release items list to verify each locale shows the expected (latest) version number before deploying.
3.  If incorrect versions were already added, remove the affected entries from the Release and re-add them using the multi-select approach.

After using multi-select for locale addition, verify in the Release items list that each locale shows its own correct latest version number, not the version of the initially selected locale.
