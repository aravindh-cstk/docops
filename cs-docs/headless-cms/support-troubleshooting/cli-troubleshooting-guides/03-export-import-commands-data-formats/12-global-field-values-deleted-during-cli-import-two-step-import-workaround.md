---
title: "Global Field Values Deleted During CLI Import: Two-Step Import Workaround"
description: "Global Field Values Deleted During CLI Import: Two-Step Import Workaround"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/12-global-field-values-deleted-during-cli-import-two-step-import-workaround
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs9bf2f48d72b891df
---

# Global Field Values Deleted During CLI Import: Two-Step Import Workaround

During a migration using cm:stacks:import with a backup directory from import-setup, a field inside a Global Field (implemented via a Marketplace App/Extension) was deleted from the destination stack's content model, affecting every content type that used the Global Field at once.

**Root Cause**

The CLI's import reads schema content, including global field definitions, from the backup directory once one exists for the run - not from the original --data-dir export folder directly, and not only mapping metadata as the checker feedback for this article claimed. If the backup directory's globalfields.json is missing a field that the destination stack's copy of that global field already has, and --replace-existing is used, the CLI performs a full schema replace for that global field using exactly what's in the backup directory, dropping the missing field everywhere the global field is used.

What isn't fully confirmed is why the field was missing from the backup directory's globalfields.json in the first place. The backup directory is a full copy made by import-setup at setup time, so a field genuinely absent from the source export would carry through as absent in the copy - that part is expected. What's unconfirmed is whether something in the setup or copy process itself can drop a field that was present in the original export data, or whether the field was already missing before import-setup ran (for example, because the field was added directly in the destination after export, or the source stack's app/extension wasn't fully synced at export time). This is the same category of custom-field dependency seen in the related import-setup article: a Marketplace App/Extension-backed field can go missing from schema data through paths the CLI import step itself doesn't control.

**Resolution**

1.  Import assets first: csdx cm:stacks:import ... --module=assets.
2.  Then import entries only: csdx cm:stacks:import ... --module=entries. Restricting to one module at a time means the global-fields import step never runs, so the existing global field schema in the destination is left untouched.
3.  If the global field schema needs editing directly, make the edit in the specific backup directory being used for that import run, before running with --replace-existing, and confirm you're pointing at that same directory rather than a newer one created by a fresh import-setup run - each import-setup run creates a new, separately-named backup directory copied fresh from the original export, so edits to an older one are silently bypassed.
4.  As a more direct fix for a full combined import: either drop --replace-existing (so existing global fields are never replaced) or confirm the export data used to build the backup directory actually contains the extension field before importing with --replace-existing - for example, by re-exporting from a source stack where the Marketplace App or Extension is confirmed installed.
