---
title: "[Drafts and Auto Save] - Limitations for Drafts and Auto Save"
description: Limitations for Drafts and Auto Save
url: https://www.contentstack.com/docs/headless-cms/limitations-for-drafts-and-auto-save
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-05-07
---

# [Drafts and Auto Save] - Limitations for Drafts and Auto Save

This page describes the known limitations and considerations for using Drafts and Auto Save in Contentstack. It is intended for content managers and authors collaborating on entries, and should be used to understand constraints around connectivity, locking, versioning, conflicts, data safety, and integrations.

## Limitations for Drafts and Auto Save

**Note:** Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

## Connectivity Limitations
- Offline editing is not supported. An active internet connection is required for draft synchronization.
- If the network connection is interrupted, the editor becomes temporarily read-only until the connection is restored.

## Field Locking and Collaboration Limitations
- A field can only be edited by **one user at a time**. Other users cannot edit that field until the lock is released.
- Locks automatically expire after a period of user inactivity.
- In **Group** or **Modular Blocks** fields, structural actions such as adding, deleting, or reordering blocks are restricted if a nested field is locked.
- Custom fields lock when a user interacts within the iframe, preventing other users from editing the field during that interaction.

## Versioning Limitations
- Only explicit **Save** or **Publish** actions create major versions.
- Minor auto-saved updates remain grouped within draft logs until a major version is created.

### Draft Retention
Draft logs are retained only for the **five most recent major versions** of an entry. When a new major version is created, draft logs associated with older versions are automatically removed.

## Conflict Handling Limitations
If another user saves a newer version while you are editing an entry, you must review and compare versions before saving to avoid overwriting changes.

## Data Safety Considerations
Auto Save captures changes frequently, but very recent edits may still be lost in rare situations such as:
- browser crashes
- system failures
- forced application closure

Because Auto Save processes edits at short intervals, changes made within the **last few seconds before the interruption** may not be saved.

## Integration Limitations
- Marketplace apps that update field values using the App SDK `setData` method can bypass standard field locking. When this occurs, updates made by the app may override a locked field. Users who currently hold the lock are notified when the field data changes.
- Draft data created through Drafts and Auto Save is not currently supported in **Visual Builder** or **Live Preview** environments.

## Common questions

**How do major versions differ from auto-saved updates?**  
Only explicit **Save** or **Publish** actions create major versions, while minor auto-saved updates remain grouped within draft logs until a major version is created.

**How many draft logs are retained for an entry?**  
Draft logs are retained only for the **five most recent major versions** of an entry.

**What happens if my network connection drops while editing?**  
If the network connection is interrupted, the editor becomes temporarily read-only until the connection is restored.

**Can integrations override field locking?**  
Marketplace apps that update field values using the App SDK `setData` method can bypass standard field locking, and app updates may override a locked field.