---
title: "Copying or Syncing Entries Between Branches (No Built-In Feature)"
description: "Copying or Syncing Entries Between Branches (No Built-In Feature)"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/17-copying-or-syncing-entries-between-branches-no-built-in-feature
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csfc63a8b95b73279a
---

# Copying or Syncing Entries Between Branches (No Built-In Feature)

Copying or syncing entries, including localized versions and references, from one branch to another had no direct UI option.

**Root Cause**

There's no single built-in feature to copy or sync entries between branches outside manual UI actions. Bulk or reference-aware copying requires the Content Management API or the CLI, with custom scripting for localizations and references.

**Resolution**

1.  Single entry: copy manually via the UI, or use the Content Management API with a custom script to fetch each locale and recreate it in the target branch.
2.  Bulk copying: use the CLI to export from the source branch and import into the target branch - both cm:stacks:export and cm:stacks:import accept a --branch flag, so this is a genuinely supported flow. Alternatively, use the Content Management API with a custom script.
3.  Entries with references: copy referenced entries first, then the entries that reference them, using a UID-mapping table in a two-pass approach.
4.  If the entries belong to content types involved in a branch merge, csdx cm:branches:merge automatically generates ready-to-run entry migration scripts and prints the csdx cm:stacks:migration --multiple command to run them - the closest thing to a built-in entry-sync feature, though limited to content types involved in a merge.
