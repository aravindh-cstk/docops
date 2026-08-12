---
title: "Custom Fields, References, or Locales Not Imported Correctly: Use import-setup First"
description: "Custom Fields, References, or Locales Not Imported Correctly: Use import-setup First"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/10-custom-fields-references-or-locales-not-imported-correctly-use-import-setup-first
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs8a52e592176e71b2
---

# Custom Fields, References, or Locales Not Imported Correctly: Use import-setup First

After a CLI import, a custom field (implemented via a Developer Hub app) wasn't populated, one content type's reference fields weren't linked, localized content imported as separate full entries, and running without a backup directory dropped fields from the content model.

**Root Cause**

Running import-setup first is the fix, and it works because of how the CLI resolves its working content directory, not because the backup directory only stores mapping metadata. Confirmed across four import modules (global-fields, content-types, entries, extensions): once a backup directory exists - either an existing one passed via --backup-dir, or a fresh one the CLI auto-creates by copying the entire --data-dir export folder - the CLI reassigns its internal working path to that backup directory for the rest of the run, and every module reads its actual schema and entry content from there, not from the original --data-dir. Without --backup-dir, a new backup directory is created from scratch on every run, so cross-module UID mappings never persist between runs; import-setup generates one and keeps it in place instead.

This explains three of the four reported symptoms directly: fields dropped from the content model when no backup directory was specified, and locale/reference handling that depends on those same mappings existing consistently across runs. It does not fully explain a fourth symptom on its own - after switching to --module entries, the field reappeared in the model but its data still didn't populate. That points to a separate dependency: a custom field backed by a Developer Hub app needs the app itself correctly installed and mapped in the destination stack before its data will populate and render correctly, independent of whether the CLI import step touches the schema. Importing marketplace apps first, before the content types and entries that depend on them, addresses this.

**Resolution**

1.  Run setup first to generate a persistent backup directory: csdx cm:stacks:import-setup -k <stack\_api\_key> -d ./export/main --module entries.
2.  Import Marketplace Apps used by custom fields before importing the content types or entries that depend on them, so the app is installed and mapped in the destination stack first: csdx cm:stacks:import -k <stack\_api\_key> -d ./export/main --backup-dir ./\_backup\_123 --module marketplace-apps.
3.  Then import using that same backup directory, so mappings and content persist instead of resetting: csdx cm:stacks:import -k <stack\_api\_key> -d ./export/main --backup-dir ./\_backup\_123 --replace-existing --module entries.

If localized entries still appear as separate full entries, confirm the master-locale entry finished importing and was mapped before other locales were processed. If a custom field's data still doesn't populate after the app is installed and mapped, or if it populates but doesn't render correctly, check the app's configuration directly in the destination stack - this can be a display/rendering issue in the destination environment rather than an import defect. If a field is missing from the export data itself (for example, added directly in the destination after export), no combination of import-setup or --backup-dir resolves that. (Reference-linking issues specific to one content type required separate investigation - see the following article on reference UID mismatches.)
