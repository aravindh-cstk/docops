---
title: "Modifying a Field UID Causes Data Loss"
description: "Modifying a Field UID Causes Data Loss"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/56-modifying-a-field-uid-causes-data-loss
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs885c4f6e55ad1405
---

# Modifying a Field UID Causes Data Loss

A customer asks whether it is safe to rename a field UID after content has been created. They want to restructure their content model without losing existing data.

**Root Cause**

Renaming a field UID in Contentstack is not recommended and will result in data loss. Entries store field values keyed by the field UID. When a UID is changed, the entry data stored under the old UID becomes inaccessible - it is not automatically migrated to the new UID. The field will appear empty for all existing entries.

**Resolution**

1.  Do not rename field UIDs on content types that contain existing entry data.
2.  If renaming is necessary, use the safe migration approach: create a new field with the desired UID, migrate data from the old field to the new field using a CMA script, verify the migration, and then delete the old field.
3.  For new content types with no data, UIDs can be renamed freely before any entries are created.

If a UID rename has already been performed and data is missing, recreate the field with the original UID - if the original data was not overwritten, it may still be retrievable under the original UID.
