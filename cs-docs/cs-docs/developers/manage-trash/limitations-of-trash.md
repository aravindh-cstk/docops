---
title: "[Set Up Your Project] - Limitations of Trash"
description: Limitations of Trash
url: https://www.contentstack.com/docs/developers/manage-trash/limitations-of-trash
product: Set Up Your Project
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Limitations of Trash

This page lists the limitations of Trash, including retention duration and restrictions during restore operations. It is intended for developers managing deleted items and planning restore workflows. Use it when you need to understand what can and cannot be changed while restoring items from the Trash.

## Limitations of Trash

- Any deleted item stays in the Trash for a maximum of **14** days from the date of deletion.
- You cannot change the **file path** for an asset or asset folder while restoring it from the Trash.
- You cannot edit asset folder details while restoring a folder. You can only view asset folder information.
- You cannot edit the content type schema while restoring a content type. You get a **read-only** view of the schema.
- When you restore a published entry or asset that was previously deleted, it is recovered as a **draft entry** or **unpublished asset**. You need to **publish** the entry again to reflect the changes on the website.

## Common questions

### How long do deleted items remain in the Trash?
Any deleted item stays in the Trash for a maximum of **14** days from the date of deletion.

### Can I change an asset’s file path while restoring it?
You cannot change the **file path** for an asset or asset folder while restoring it from the Trash.

### What happens when I restore a previously published entry or asset?
When you restore a published entry or asset that was previously deleted, it is recovered as a **draft entry** or **unpublished asset** and you need to **publish** the entry again to reflect the changes on the website.