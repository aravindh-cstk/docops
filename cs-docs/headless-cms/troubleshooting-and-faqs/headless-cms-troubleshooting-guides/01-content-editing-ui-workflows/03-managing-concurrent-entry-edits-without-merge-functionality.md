---
title: "Managing Concurrent Entry Edits Without Merge Functionality"
description: "Managing Concurrent Entry Edits Without Merge Functionality"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/03-managing-concurrent-entry-edits-without-merge-functionality
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs9be24aa18254bdca
---

# Managing Concurrent Entry Edits Without Merge Functionality

Multiple contributors working on the same entry may overwrite each other's changes because the platform does not support merging entry versions. This prevents the simultaneous consolidation of updates from different users into a single version.

**Root Cause**

The platform's versioning architecture is designed for linear tracking and does not include a native merge feature.

**Resolution**

1.  Use Workflows to manage the progression of entry edits and handoffs between users.
2.  Add Field Notes to provide context or instructions to other contributors.
3.  Coordinate with team members to ensure only one user is editing a specific entry version at a time.

After implementing a workflow-based editing process, check the version history of an entry. If updates are saved sequentially without data loss from overwrites, the coordination strategy is effective.
