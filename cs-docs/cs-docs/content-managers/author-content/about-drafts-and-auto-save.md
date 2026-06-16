---
title: Drafts and Auto Save - About Drafts and Auto Save
description: Overview of Drafts and Auto Save, including how auto save works, version types, and real-time collaboration behavior.
url: https://www.contentstack.com/docs/content-managers/author-content/about-drafts-and-auto-save
product: Contentstack
doc_type: concept
audience:
  - content-managers
  - editors
  - administrators
version: unknown
last_updated: 2026-03-25
---

# Drafts and Auto Save - About Drafts and Auto Save

This page explains how Drafts and Auto Save works in Contentstack, including auto-saving behavior, versioning (major and minor draft versions), and collaboration controls like field-level locking. It is intended for content managers, editors, and administrators who need to understand when and how to use Drafts and Auto Save while editing entries.

## About Drafts and Auto Save

**Note**: Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

Drafts and Auto Save automatically captures your changes while you edit an entry. It protects your work from accidental loss and supports collaboration when multiple users work on the same entry.

As you edit, Contentstack saves draft changes in the background. The entry remains in the draft stage until you click **Save**. Clicking **Save** confirms your edits and creates a new major version.

**Note**: Administrators can [manage](/docs/content-managers/author-content/enable-drafts-and-auto-save) the feature at the stack level. To review or update the setting, navigate to **Settings**, then **Entries** and enable the **Drafts and Auto Save** checkbox.

Drafts and Auto Save combines automatic draft protection with structured version control.

## When to Use Drafts and Auto Save

Drafts and Auto Save is especially useful when:
- Multiple users edit the same entry at the same time
- You work on long-form content that requires frequent updates
- You want to review draft changes before creating a new version
- Your team collaborates across regions or time zones

## How Auto Save Works

Here’s what happens while you edit an entry:
- Draft changes save automatically at regular intervals
- Other active users viewing the same entry see updates shortly after they are saved
- If you refresh the page or close the browser tab, your draft changes remain available
- Fields being edited are temporarily locked to prevent overlapping edits

These automatic saves create **minor draft versions**, such as V1.1, V1.2, and V1.3. The entry remains in draft status during this process.

When you click **Save**:
- Contentstack creates a new **major version** (for example, V1 → V2)
- All minor draft versions are grouped under the previous major version in the version history
- The version history reflects a clean, structured progression

This approach protects in-progress edits while keeping version history organized.

## Key Capabilities

Drafts and Auto Save provides structured draft protection, controlled collaboration, and organized version history. These capabilities enable the teams to edit entries confidently without losing changes or creating version conflicts.

### Understanding Version Types

Drafts and Auto Save maintains two version types:

#### Major Versions
- Created when you click **Save**
- Represent confirmed changes
- Appear as V1, V2, V3, and so on

#### Minor Draft Versions
- Created automatically during editing
- Appear as V1.1, V1.2, and similar formats
- Available in the **Compare Version History** panel

**Note:** Draft versions are retained only for the five most recent major versions of an entry. Older draft versions are automatically removed when new major versions are created.

You can compare minor draft versions with the last saved version before confirming changes. This allows you to review edits without creating unnecessary major versions.

## Real-Time Collaboration

Drafts and Auto Save supports collaborative editing while preventing conflicts.

### Field-Level Locking

When a user edits a field, that specific field is locked for other users. Other fields in the entry remain editable.

Each editable (leaf) field functions as an independent lock. A leaf field is an individual field that does not contain nested subfields.

This allows multiple users to work in different sections of the same entry at the same time.

### Structural Restrictions

If a nested field is locked, structural actions, such as reordering blocks, are temporarily restricted. This prevents changes that could interfere with another user’s edits.

**Note**: You cannot edit or reorder a field that another user is actively modifying.

### Conflict Handling

To maintain content integrity, Drafts and Auto Save:
- Prevents two users from editing the same field simultaneously.
- Displays notifications when another user saves changes.
- Allows you to discard draft edits and revert to the last saved version.
- Separates minor draft updates from major saved versions in version history.
- Certain actions, such as changing the locale or using features like **publishing, workflows**, or **releases**, are not available until the entry is saved and a major version is created.

You can compare draft changes with previous versions before publishing updates.

## Why Drafts and Auto Save Matters

Without Drafts and Auto Save, teams may experience:
- Lost edits due to browser crashes or accidental tab closures
- Conflicts when multiple users edit the same field
- Excessive manual saves that clutter version history

Drafts and Auto Save reduces these risks by:
- Saving draft changes automatically
- Preventing overlapping edits
- Maintaining a structured version history

This supports a more reliable and controlled editing workflow.

## Who Benefits from Drafts and Auto Save

Drafts and Auto Save benefits:
- **Content Managers:** Maintain control over drafts while protecting in-progress edits.
- **Editors and Marketers:** Collaborate confidently without repeatedly saving entries.
- **Administrators and Team Leads:** Gain clearer version tracking and reduced version clutter.

This feature is especially valuable for teams that frequently work on the same entries across regions, departments, or time zones.

Drafts and Auto Save protects draft changes, supports controlled collaboration, and maintains structured version history. By separating minor draft updates from confirmed major versions, it ensures that teams can edit confidently without losing work or creating unnecessary version clutter.

## Common questions

### Is Drafts and Auto Save available to all users?
No. Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users.

### When does Contentstack create a major version?
A major version is created when you click **Save**.

### What happens if I refresh the page or close the browser tab while editing?
If you refresh the page or close the browser tab, your draft changes remain available.

### Can two users edit the same field at the same time?
No. Drafts and Auto Save prevents two users from editing the same field simultaneously by using field-level locking.