---
title: "[Author Content | Entry Versions] - Restore Old Entry Version"
description: Restore or rollback to an earlier saved version of an entry in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/restore-old-entry-version
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content | Entry Versions] - Restore Old Entry Version

This page explains how to restore (roll back) an entry to a previously saved version in Contentstack. It is intended for content managers and developers who need to recover earlier content states after updates, and should be used when you want to make an older version the latest version of an entry.

## Restore Old Entry Version

In Contentstack, every update to an entry is saved as a version, allowing you to track changes and restore previous states if needed. This feature helps you recover earlier content versions efficiently.

To restore or rollback to an earlier saved version of an entry, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries”.
- Navigate to the entry you want to modify.
- Click the version icon in the top-right corner of the page or the “Versions” icon in the right sidebar.
- Locate the entry you want to restore and click it.
- Click the **Save** button to make the selected version the latest version of the entry.
- After restoring the version, publish the entry to the desired environment(s). This action ensures that the restored version replaces the currently published version.

## Common questions

**How do I access an entry’s version history?**  
Click the version icon in the top-right corner of the page or the “Versions” icon in the right sidebar.

**Does restoring a version automatically publish it?**  
No. After restoring the version, publish the entry to the desired environment(s).

**What happens when I click Save after selecting an older version?**  
The selected version becomes the latest version of the entry.

**Why would I restore an old entry version?**  
To recover earlier content versions efficiently after changes or updates.