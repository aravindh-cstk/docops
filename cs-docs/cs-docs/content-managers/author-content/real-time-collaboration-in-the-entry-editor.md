---
title: "[Drafts and Auto Save] - Real-Time Collaboration in the Entry Editor"
description: Real-Time Collaboration in the Entry Editor
url: https://www.contentstack.com/docs/content-managers/author-content/real-time-collaboration-in-the-entry-editor
product: Contentstack
doc_type: feature-guide
audience:
  - content-managers
  - editors
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Drafts and Auto Save] - Real-Time Collaboration in the Entry Editor

This page explains how Real-Time Collaboration works in the Entry Editor when Drafts and Auto Save is enabled, including presence indicators, field-level locking, notifications, and best practices. It is intended for content managers, editors, and teams collaborating on the same entries, and should be used when coordinating concurrent edits to avoid conflicts and lost work.

**Note**: Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

Real-Time Collaboration allows multiple users to work on the same entry at the same time without overwriting each other’s changes.

When Drafts and Auto Save is enabled, edits save in draft state and sync across active sessions. Field-level locking prevents conflicting updates, and collaboration indicators show who is working on specific fields.

This feature helps teams:
- Prevent lost work
- Reduce unnecessary version creation
- Avoid manual merge efforts
- Improve coordination across distributed teams

## Collaboration Awareness with Presence Indicators
Real-Time Collaboration provides visual cues to indicate active users.

When multiple users open the same entry:
- Avatars or user initials appear in the editor
- Users can see who is currently active
- Live updates appear as collaborators make changes

These indicators help teams understand activity within the entry without relying on external communication tools.

## Field-Level Locks and Conflict Detection
To prevent simultaneous edits to the same field, the Entry Editor applies locks at the field level.

### Input Fields
- A field becomes locked when a user begins editing it and remains locked while the user continues working in that field.
- The field unlocks when the user moves focus away from it or after approximately three minutes of inactivity.
- Other users see updates shortly after the changes are saved.

### File and Reference Fields
- Locking begins when a user opens the selection modal
- The field remains locked while the modal is open
- The lock releases after the selection is confirmed or canceled

### Group and Modular Blocks (Container Fields)
Each nested field inside a container acts as an independent lock (also called **leaf-level locking**).

However:
- If a nested field is locked, structural actions are restricted
- Users cannot drag, reorder, delete, or add blocks while a nested field is locked
- Users can continue editing unlocked fields in other blocks

This prevents structural changes from interfering with active edits.

### Custom Fields
For custom fields rendered in an iframe:
- Locking applies when a user interacts within the iframe area
- Interacting with the custom field activates the lock.

**Note**: Locking prevents simultaneous edits to the same field. It does not prevent users from editing different fields within the same entry.

## Notifications for Concurrent Edits
The Entry Editor displays notifications for key collaboration events.

### When Another User Saves a Version
If another user saves the entry while you are editing:
- A notification indicates that a newer version is available
- You can refresh to review the latest version
- Editing behavior may change depending on the entry state. For example, you may need to refresh the entry before continuing to edit.

### When a Field Is Locked
If you attempt to edit a locked field:
- A contextual message appears
- The message identifies that another user is editing the field

**Warning**: Offline editing is not supported. If your network disconnects, the editor becomes temporarily read-only until reconnection.

## Conflict Prevention and Recovery
Drafts and Auto Save reduces the likelihood of editing conflicts, but it is still important to understand the available recovery options.

### Draft Persistence
- Changes remain saved if you refresh or close the browser tab
- The browser prompt for unsaved changes does not appear
- Draft changes remain available until discarded or published

### Discarding Draft Changes
You can discard all draft changes to revert to the last saved version.

Use this option when:
- You want to remove experimental edits
- Collaboration resulted in unintended changes
- You need to restore a stable version

## Best Practices for Teams
Follow these recommendations to collaborate effectively.
- Coordinate OwnershipAssign sections of the entry to specific team members
- Avoid editing the same field simultaneously
- Use comments or internal communication tools to align on structural updates
- Communicate Structural EditsBefore performing major structural actions such as:

Reordering modular blocks
- Deleting grouped content
- Performing large structural updates

Ensure no nested fields are actively locked.
- Refresh Before Major EditsIf you have had the entry open for an extended period:

Refresh the page before making structural changes
- Confirm that no newer version exists
- Use Draft Compare for ReviewCompare minor draft updates with major saved versions
- Review changes before publishing in high-collaboration environments
- Keep Sessions IntentionalAvoid keeping entries open in unused tabs. Active sessions may retain locks longer than necessary.

## When to Use Real-Time Collaboration
Real-Time Collaboration is especially useful when:
- Multiple content managers update the same entry
- Developers and editors collaborate on structured content
- Teams operate across time zones
- High-priority content requires rapid iteration

Real-Time Collaboration enables teams to edit shared entries safely and efficiently. With live presence indicators, field-level locking, draft persistence, and clear notifications, users can collaborate without overwriting changes or creating unnecessary versions.

By understanding locking behavior and following collaboration best practices, teams can maintain accuracy while reducing coordination overhead.

## Common questions

### Is Drafts and Auto Save available to all users?
No. Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack support team for more information.

### What happens if I try to edit a field someone else is editing?
If you attempt to edit a locked field, a contextual message appears and identifies that another user is editing the field.

### How long does an input field stay locked?
A field becomes locked when a user begins editing it and remains locked while the user continues working in that field. The field unlocks when the user moves focus away from it or after approximately three minutes of inactivity.

### Can I edit while offline?
No. Offline editing is not supported. If your network disconnects, the editor becomes temporarily read-only until reconnection.

<!-- filename: drafts-and-auto-save-real-time-collaboration-in-the-entry-editor.md -->