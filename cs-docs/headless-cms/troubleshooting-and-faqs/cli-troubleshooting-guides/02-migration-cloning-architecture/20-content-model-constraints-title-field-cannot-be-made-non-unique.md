---
title: "Content Model Constraints - Title Field Cannot Be Made Non-Unique"
description: "Content Model Constraints - Title Field Cannot Be Made Non-Unique"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/20-content-model-constraints-title-field-cannot-be-made-non-unique
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csdbfd86c136fcf68b
---

# Content Model Constraints - Title Field Cannot Be Made Non-Unique

Whether the title field on entries can be configured as non-unique was unclear.

**Root Cause**

The title field is unique by default and not configurable to allow non-unique values. This is enforced server-side as part of Contentstack's content model constraints, not by the CLI, so no CLI command, flag, or script can change or bypass it.

**Resolution**

No configuration change is available. If a non-unique display label is needed alongside a unique title, add a separate custom field for that purpose.
