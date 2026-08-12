---
title: "Taxonomy Import to New Stack Silently Fails - Missing Locales and Environments"
description: "Taxonomy Import to New Stack Silently Fails - Missing Locales and Environments"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/38-taxonomy-import-to-new-stack-silently-fails-missing-locales-and-environments
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cse587fc757bad108c
---

# Taxonomy Import to New Stack Silently Fails - Missing Locales and Environments

Exporting taxonomies from one stack and importing into another appears to succeed but no taxonomy data appears in the target stack.

**Root Cause**

Taxonomies have dependencies on locales and environments. If the target stack does not have the same locales and environments as the source stack, the taxonomy import silently fails to associate correctly.

**Resolution**

1.  Before importing, ensure the target stack has the same locales as the source: Settings > Languages.
2.  Ensure the target stack has the required environments configured: Settings > Environments.
3.  After adding the required locales and environments, re-attempt the taxonomy import.
4.  If the import still silently fails, contact Contentstack Support with the import file and target stack details.

After configuring required locales and environments, import the taxonomy and verify terms and hierarchy appear correctly.
