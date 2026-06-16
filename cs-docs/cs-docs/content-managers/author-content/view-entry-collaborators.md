---
title: "[Author Content] - View Entry Collaborators"
description: Contentstack’s View Entry Collaborators feature allows you to see which collaborators are currently viewing or editing the same entry.
url: https://www.contentstack.com/docs/content-managers/author-content/view-entry-collaborators
product: Contentstack
doc_type: feature-guide
audience:
  - content-managers
  - editors
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - View Entry Collaborators

This page explains how to use Contentstack’s **View Entry Collaborators** feature to identify who is viewing or editing an entry, understand field-specific collaborator indicators, and how Drafts and Auto Save affects collaboration. It is intended for content managers and editors working in shared entries, especially when coordinating simultaneous edits.

### View Entry Collaborators

Contentstack’s **View Entry Collaborators** feature allows you to see which collaborators are currently viewing or editing the same entry. This helps teams work on shared content while reducing the risk of conflicting updates.

When [Drafts and Auto Save](/docs/content-managers/author-content/about-drafts-and-auto-save) is enabled, collaborator presence indicators work with automatic draft synchronization and field-level locking to support collaborative editing.

## Identify Collaborators in an Entry
When you open an entry, collaborator initials appear at the **top of the entry page**.

Each collaborator is displayed with a status indicator:
- **Color dot:** The collaborator is currently active and viewing or editing the entry.
- **Grey initials:** The collaborator is idle.

Hover over a collaborator’s initials to view their **full name**.

## Locate Field-Specific Collaborators
When a collaborator edits a specific field, their initials appear next to that field. This indicates which fields are currently being modified and helps prevent conflicting updates.

When **Drafts and Auto Save** is enabled:
- Edits are automatically saved as drafts.
- Changes made by collaborators become visible after synchronization.
- A field may be temporarily locked while another user is editing it.

**Tip**: Before making changes, check which collaborators are active in the entry to avoid editing the same fields.

## Field Locking During Collaboration
To prevent simultaneous edits to the same field, Drafts and Auto Save introduces **field-level locking**.

When a user begins editing a field:
- The field becomes temporarily locked for other users.
- Other fields in the entry remain available for editing.
- The lock is automatically released after editing stops or after a period of inactivity.

This allows multiple users to work in different parts of the same entry while protecting content from accidental overwrites.

## Version Updates During Collaboration
When a collaborator saves or publishes changes, a new version of the entry may be created.

If you are editing an older version, Contentstack may prompt you to **review and compare versions before saving** to prevent overwriting more recent updates.

**Tip**: When multiple collaborators are editing the same entry, review the latest version before saving major updates.

## Common questions

### How do I know if someone is actively working in the entry?
Look for collaborator initials at the top of the entry page; a **color dot** indicates the collaborator is currently active.

### What does it mean when initials appear next to a field?
It indicates a collaborator is editing that specific field, helping you avoid making conflicting changes.

### Why can’t I edit a field while someone else is editing it?
When **Drafts and Auto Save** is enabled, the field may be temporarily locked due to **field-level locking**.

### What should I do if Contentstack prompts me to review and compare versions?
Review the latest version before saving to avoid overwriting more recent updates created by collaborators.