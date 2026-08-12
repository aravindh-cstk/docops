---
title: "UID Conflicts During Content Migration to a New Stack"
description: "UID Conflicts During Content Migration to a New Stack"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/06-uid-conflicts-during-content-migration-to-a-new-stack
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs2db877f526839bf4
---

# UID Conflicts During Content Migration to a New Stack

Content migration to a new stack fails with errors indicating UID uniqueness conflicts. A content type field UID matches an existing field name, or a global field import fails due to a naming collision.

**Root Cause**

Contentstack enforces unique UIDs for fields within a content type and globally for global fields. During migration, if a field UID in the source stack conflicts with an existing field or global field UID in the target stack, the import fails. Common causes include: a content type has a field with the same UID as a global field already present in the target, or two fields within the same content type share a UID.

**Resolution**

1.  Review the migration error log to identify which UIDs are conflicting.
2.  Rename conflicting field UIDs in the source content type before re-exporting.
3.  Ensure global field UIDs are unique across the target stack before importing.
4.  If the UID collision is between a field and a global field, rename one to resolve the conflict and update any references accordingly.
5.  Re-run the migration after resolving all UID conflicts.

After resolving UID conflicts, re-run the import. If the migration completes without uniqueness errors, all UIDs are compatible with the target stack.
