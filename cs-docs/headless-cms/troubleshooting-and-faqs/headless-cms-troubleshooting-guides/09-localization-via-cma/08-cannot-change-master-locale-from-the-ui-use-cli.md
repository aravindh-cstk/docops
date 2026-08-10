---
title: "Cannot Change Master Locale from the UI - Use CLI"
description: "Cannot Change Master Locale from the UI - Use CLI"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/08-cannot-change-master-locale-from-the-ui-use-cli
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs109c90b1567ffe1d
---

# Cannot Change Master Locale from the UI - Use CLI

A customer wants to change the master locale of an existing stack (for example, from English to Portuguese Brazil). The option is not available in the Contentstack UI.

**Root Cause**

Contentstack does not support changing the master locale directly through the UI. The master locale is a foundational setting tied to the stack’s content structure, and modifying it requires a data migration approach.

**Resolution**

1.  Use the Contentstack CLI to export the stack content.
2.  Modify the export to define the desired language as the master locale.
3.  Re-import the stack with the updated locale configuration.
4.  For stacks where locales differ and fallback behavior is sufficient, configure fallback locales to achieve similar behavior without a full migration.

After completing the CLI-based migration and re-import, verify the master locale is set correctly and existing content is accessible under the new structure.
