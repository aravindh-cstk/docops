---
title: "References Not Populated in Parent Entries After Import: Reference UID Mismatch"
description: "References Not Populated in Parent Entries After Import: Reference UID Mismatch"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/11-references-not-populated-in-parent-entries-after-import-reference-uid-mismatch
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs7aba7217495b387f
---

# References Not Populated in Parent Entries After Import: Reference UID Mismatch

Reference fields inside a specific content type's entries were not linked in the parent entries after export/import, even though the referenced entries imported successfully.

**Root Cause**

cm:stacks:import resolves references in two passes: it first creates entries and records old-to-new UID mappings in the backup directory, then rewrites reference fields by looking up each referenced UID in that mapping. If a referenced entry's old UID isn't in the mapping when the second pass runs, the reference can't resolve. This commonly happens when the referenced content type was imported in a separate run using a different (or no) --backup-dir, so its mapping never lands in the same mapping file the parent entries' update pass reads, or when some referenced entries failed to import and were logged as failures instead of mapped.

**Resolution**

1.  Confirm the referenced entries were created successfully; check the failed-entries log in the --backup-dir folder for that content type.
2.  Confirm the UID mapping file under --backup-dir contains an entry for each referenced UID. If the two content types were imported with different backup directories, re-import both using the same --backup-dir so their mappings live in one file.
3.  Follow Contentstack's [Update Missing Reference UIDs](/docs/headless-cms/update-missing-reference-uids) documentation: download the examples folder, and set mapper-path in config.json to the backup directory shown after a successful import (<path>/\_backup\_<number>/), with contentTypes listing the affected content type UIDs.
4.  Run the 05-Update-reference-entry-from-mapper script: csdx cm:stacks:migration --file-path ./05-Update-reference-entry-from-mapper.js --config-file ./config.json -k <stack\_ApiKey>.
5.  Validate the previously unlinked references now populate. If not, confirm the referenced entries still exist under the same UIDs recorded in the mapping - entries deleted and recreated outside the CLI won't match.
