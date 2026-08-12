---
title: "Migrating Entries Between Branches Using Migration Scripts"
description: "Migrating Entries Between Branches Using Migration Scripts"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/14-migrating-entries-between-branches-using-migration-scripts
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csc5516c83b9c78bfd
---

# Migrating Entries Between Branches Using Migration Scripts

Entries needed to move from one branch to another within the same stack.

**Root Cause**

There's no single built-in "move branch" command. The migration script feature's built-in operations (creating or editing a content type or field) only cover content type and global field schema changes, not entries - moving entries requires a script that calls entry-level management operations directly. The --branch flag scopes a script to one branch, so a script copying entries between branches needs to open a second connection to the source branch itself.

**Resolution**

1.  Use migration scripts (csdx cm:stacks:migration) rather than looking for a built-in move-branch command.
2.  Refer to Contentstack's migration script documentation for structure and execution steps.
3.  Test against a non-production branch first before relying on it for production data.
4.  If the branch sync involves added or modified content types, run csdx cm:branches:merge first - it automatically generates ready-to-run entry migration scripts for the affected content types and prints the exact csdx cm:stacks:migration --multiple --file-path ... command to run them. This can be faster than writing a script from scratch when entry sync is tied to a content-type merge.
