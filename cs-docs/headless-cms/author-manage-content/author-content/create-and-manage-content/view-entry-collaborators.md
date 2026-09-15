---
title: "View Entry Collaborators"
description: "Learn how to view active collaborators in an entry and identify which fields are currently being edited in Contentstack."
url: /headless-cms/view-entry-collaborators
uid: blt9a41ea4e20443662
---

# View Entry Collaborators

## View Entry Collaborators

Contentstack’s **View Entry Collaborators** feature allows you to see which collaborators are currently viewing or editing the same entry. This helps teams work on shared content while reducing the risk of conflicting updates.

When [Drafts and Auto Save](/docs/headless-cms/about-drafts-and-auto-save) is enabled, collaborator presence indicators work with automatic draft synchronization and field-level locking to support collaborative editing.

## Identify Collaborators in an Entry

When you open an entry, collaborator initials appear at the **top of the entry page**.

Each collaborator is displayed with a status indicator:

-   **Color dot:** The collaborator is currently active and viewing or editing the entry.
-   **Grey initials:** The collaborator is idle.

Hover over a collaborator’s initials to view their **full name**.

## Locate Field-Specific Collaborators

When a collaborator edits a specific field, their initials appear next to that field. This indicates which fields are currently being modified and helps prevent conflicting updates.

When **Drafts and Auto Save** is enabled:

-   Edits are automatically saved as drafts.
-   Changes made by collaborators become visible after synchronization.
-   A field may be temporarily locked while another user is editing it.

**Tip:** Before making changes, check which collaborators are active in the entry to avoid editing the same fields.

## Field Locking During Collaboration

To prevent simultaneous edits to the same field, Drafts and Auto Save introduces **field-level locking**.

When a user begins editing a field:

-   The field becomes temporarily locked for other users.
-   Other fields in the entry remain available for editing.
-   The lock is automatically released after editing stops or after a period of inactivity.

This allows multiple users to work in different parts of the same entry while protecting content from accidental overwrites.

![Collaboration_Awareness_with_Presence_Indicators.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fe2c511bad52ae4/69b8308e675afc52110a985a/Collaboration_Awareness_with_Presence_Indicators.png)

## Version Updates During Collaboration

When a collaborator saves or publishes changes, a new version of the entry may be created.

If you are editing an older version, Contentstack may prompt you to **review and compare versions before saving** to prevent overwriting more recent updates.

![When_Another_User_Saves_a_Version.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0855fa5496d393cb/69b830f330027688c5d9417b/When_Another_User_Saves_a_Version.png)

**Tip:** When multiple collaborators are editing the same entry, review the latest version before saving major updates.
