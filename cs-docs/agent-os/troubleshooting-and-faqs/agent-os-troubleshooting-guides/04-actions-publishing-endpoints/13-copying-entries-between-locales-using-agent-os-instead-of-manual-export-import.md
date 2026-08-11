---
title: "Copying Entries Between Locales Using Agent OS Instead of Manual Export/Import"
description: "Copying Entries Between Locales Using Agent OS Instead of Manual Export/Import"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/13-copying-entries-between-locales-using-agent-os-instead-of-manual-export-import
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs701fb8de3f0e60c0
---

# Copying Entries Between Locales Using Agent OS Instead of Manual Export/Import

Content created in the wrong locale (for example, entries mistakenly created in Italian instead of English) needs to be copied to the correct locale, and it is unclear whether this can be Agent OS or must be handled through a manual export/import.

**Root Cause**

This is not a defect, Agent OS supports building a workflow for this use case, so a manual export/import is not required.

**Resolution**

1.  Create an Agent OS workflow that uses a **Get an Entry** action to retrieve the entry from the source locale (for example, Italian).
2.  Add an **Update an Entry** action targeting the target locale (for example, English), and map the fields from the source entry to the corresponding fields on the target locale entry.
3.  Optionally, add conditions to control which entries are processed, and a publish step if the copied entries should be published automatically.
4.  Note that references and assets do not need special handling in this mapping, since they are UID-based and remain intact across the copy.
5.  Run the workflow and confirm the target-locale entries now contain the expected field values.

Entries created in the wrong locale are copied into the correct locale with their field values, references, and assets intact, without a manual export/import.
