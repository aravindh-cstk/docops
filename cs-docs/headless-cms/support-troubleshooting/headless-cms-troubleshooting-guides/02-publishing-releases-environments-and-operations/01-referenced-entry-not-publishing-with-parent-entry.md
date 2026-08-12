---
title: "Referenced Entry Not Publishing with Parent Entry"
description: "Referenced Entry Not Publishing with Parent Entry"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/01-referenced-entry-not-publishing-with-parent-entry
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs8760ac05a8357569
---

# Referenced Entry Not Publishing with Parent Entry

Referenced entries are not automatically published unless they are already live at the time the parent entry is published.

**Root Cause**

During scheduled publishing, dependencies are resolved at publish time. If a referenced entry is not live in the same environment when the parent entry publishes, it is not included automatically.

**Resolution**

1.  Identify all referenced entries in the parent entry.
2.  Schedule the referenced entries to publish first.
3.  Schedule the parent entry to publish a few minutes later.

After the scheduled publish completes, open the parent entry and confirm that all referenced entries are published and visible in the target environment.

For more information, refer to [Working with Nested Reference Publishing](/docs/headless-cms/working-with-nested-reference-publishing) documentation.
