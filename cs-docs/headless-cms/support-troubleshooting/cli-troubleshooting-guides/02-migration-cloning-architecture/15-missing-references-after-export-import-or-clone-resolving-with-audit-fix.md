---
title: "Missing References After Export/Import or Clone: Resolving with Audit Fix"
description: "Missing References After Export/Import or Clone: Resolving with Audit Fix"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/15-missing-references-after-export-import-or-clone-resolving-with-audit-fix
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs21f262ee7db693a1
---

# Missing References After Export/Import or Clone: Resolving with Audit Fix

References were missing after export/import between stacks, and again after using the CLI clone command, with clone update failures showing no clear error messaging.

**Root Cause**

Entries reference other entries or content types by UID; if the referenced target doesn't exist in the target stack - deleted, not part of the exported module set, or pointing to a content type not in the field's reference\_to list - the reference breaks. cm:stacks:audit/cm:stacks:audit:fix (from @contentstack/cli-audit) check reference fields in the exported --data-dir folder, not the live target stack. cm:stacks:clone and cm:stacks:import both run this audit automatically before importing (unless --skip-audit is passed), which is why the same error class shows up across plain export/import and clone. A reference is flagged as broken the same way whether the target is fully missing or just not an allowed content type per reference\_to - and if a referenced module was excluded from export via --module/--content-types filters, the reference breaks purely from export scope, not data corruption.

**Resolution**

1.  Run csdx cm:stacks:audit:fix against the exported content directory (or let import/clone run it automatically).
2.  Import the corrected content into the target stack.
3.  Review the audit report at the printed path. Audit fix removes the invalid UID from the reference field rather than restoring the missing content - it prevents the import failure, not the underlying gap. If the referenced content should exist, locate or recreate it in the source data, then re-run the audit and import.
