---
title: "Schema Drafts"
description: "Schema Drafts"
url: /lytics/schema-drafts
uid: blt90d45af22e3eac43
---

# Schema Drafts

## Schema Drafts

Stage, review, and publish batches of schema changes — fields, mappings, and identity key ranks — together.

Drafts, previously named **Schema Patches**, are managed through the `/schema/patch` endpoints in the API, so this page uses "patch" when describing API resources and payloads.

## Introduction

**Schema Drafts** are how you make schema changes in Lytics. Instead of editing one field at a time against the live schema, you stage fields, mappings, and identity key ranks into a single, named changeset — a **draft** — preview a complete diff against your live schema, and publish everything at once.

When a draft is applied, it creates a new published [schema version](/docs/lytics/schema-versions). If anything goes wrong, you can revert to a previous version using the standard schema version history.

## When to Use Schema Drafts

Use a draft when you want to:

-   **Onboard a new data source** — add the fields and mappings that belong together and roll them out as a single reviewed change.
-   **Reorganize identity resolution** — adjust identity key ranks alongside related field changes.
-   **Coordinate with a team** — give each changeset a name and description so reviewers know what it's for, and let multiple people work on separate drafts at once.
-   **Review before anything goes live** — inspect a property-level diff of every change against the live schema, so nothing reaches the live schema without an explicit apply step.

## Enabling Schema Drafts

Schema drafts are available to every account, but the workflow has to be turned on before you can use it in the UI. Until it's enabled, schema edits made in the UI go through the legacy draft-based editor.

An administrator turns the workflow on from **Building Profiles → Schema → Drafts** using the **Enable** button. Users without permission to edit account settings will need to contact their administrator to enable the feature.

Before enabling, note that:

-   **It's an account-wide switch.** Once enabled, every schema change made in the UI — for all users on the account — goes through a draft. The legacy draft editor is no longer available, and direct links to the old create and edit screens redirect into the draft workflow.
-   **You must clear the existing draft first.** If the account has unpublished schema changes, the **Upgrade schema management** dialog blocks activation until you publish or discard them. This keeps in-progress edits from being stranded in a draft that's about to be retired.

Enabling drafts changes how everyone on the account edits the schema, so plan to switch over when your team is ready to adopt the draft workflow together.

## How Schema Drafts Work

The schema draft lifecycle has five steps:

1.  **Create a draft** — Start by creating a new draft with a name and description. Each draft targets a specific table (e.g., `user`). Think of the draft as an empty container for your proposed changes.

1.  **Add changes** — Add, modify, or mark for deletion any combination of fields, mappings, and identity key ranks within the draft. You can make as many changes as needed before moving forward.

1.  **Review the diff** — Inspect the draft to see exactly what would change relative to the live schema, with property-level before/after values for every modified field and mapping, so you can verify each change before it goes live.

1.  **Apply the draft** — When you're satisfied, apply the draft. This publishes a new schema version containing all of the draft's changes. From this point forward, incoming data is processed against the updated schema.

1.  **Revert if needed** — If the applied changes cause issues, use [schema version history](/docs/lytics/schema-versions) to revert to a previous version.

You can update a draft as many times as needed before applying it. You can also delete a draft entirely if you decide not to proceed.

## Accessing Schema Drafts

From the Lytics navigation, open **Building Profiles → Schema → Drafts**. The list shows every draft in the account with its target table, description, creator, and timestamps. You can filter by table and sort by any column.

![Schema Drafts list page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am356c3a5de9a443c5/21076346bb140e576652328e/img-0275.png)

From the list you can:

-   **Create a new draft** — name it, describe it, and choose the table it targets (e.g., `user`).
-   **Open an existing draft** — continue editing a draft someone started earlier.
-   **Delete a draft** — discard a staged changeset you no longer need.

## The Draft Editor

Opening a draft takes you into a three-step wizard — **Draft Details → Edit Schema → Review & Publish** — across the top of the page. The core work happens in the middle **Edit Schema** step, which is organized into tabs:

![Draft editor — Fields tab with two fields in the draft](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0c9494f6aa75392f/c7465f1519cae1e6556dcb56/img-0276.png)

| Tab | What it's for |
| --- | --- |
| **Fields** | Add new fields, edit existing ones, or mark fields for deletion. Inline controls for data type, description, merge operator, capacity, keep days, and the other properties described in [Fields & Mappings](/docs/lytics/fields-mappings). |
| **Mappings** | Add or modify LQL mappings that transform incoming stream data into user fields. |
| **Ranks** | Reorder identity keys to change the priority used during profile resolution. See [Identity Key Ranks](/docs/lytics/identity-key-ranks). |
| **Preview** | A side-by-side diff of the draft against the live schema — every property that would change, with before/after values. |
| **Advanced** | A raw JSON editor for the draft, for power users. Access to this tab is permission-gated, so it only appears for users with the required role. |

## Working with Fields and Mappings

Within the **Fields** and **Mappings** tabs, each item carries an **edit status** that describes how it relates to the live schema:

| Status | Meaning |
| --- | --- |
| `new` | Added in this draft — does not exist in the live schema. |
| `modified` | Exists in the live schema, but one or more properties have changed. |
| `deleted` | Marked for removal — will be deleted when the draft is applied. |
| `unmodified` | Shown for context only. No changes from the live schema. |

When adding or updating a field, the same properties apply as when managing fields directly — data type, merge operator, capacity, keep days, and so on. See [Fields & Mappings](/docs/lytics/fields-mappings) for details on field and mapping properties.

### Adding existing items to a draft

To modify a field or mapping that already exists, use **Manage Fields** or **Manage Mappings** at the bottom of the grid and choose **Add Existing**. Results can be filtered by type, identifier, stream, and category. Editable items surface first; non-editable items (e.g., system fields) are shown but cannot be selected. Use **Select All** to pull a whole filtered set into the draft at once.

### "Add related" shortcuts

Click a field in the draft to jump into the mapping selector, pre-filtered to mappings that use that field. Click a mapping to find the field it writes to. This makes it straightforward to build complete, self-consistent changesets.

### Undoing a change

Each item in the draft can be reverted independently without discarding the rest of the draft. For example, if you've added three fields and decide one of them isn't ready, remove that one field's changes and keep the other two.

If you don't set a `managed_by` value when adding a field or mapping to a draft, it defaults to the current user.

## Identity Key Ranks in a Draft

Identity key rank lists — which control the priority ordering of identity keys used during profile resolution — can also be staged in a draft, from the **Ranks** tab. Bundling rank changes alongside field and mapping updates ensures everything is reviewed and applied together.

See [Identity Key Ranks](/docs/lytics/identity-key-ranks) for more on how rank ordering affects identity resolution.

## Previewing a Draft

The **Preview** tab is the gate between "staged" and "published." It shows:

-   Every field, mapping, and rank change in the draft, grouped by type.
-   Property-level before/after values for modified items.
-   Status pills on each item (`Added`, `Modified`, `Deleted`) so you can scan the shape of the change at a glance.

![Draft editor — Preview tab showing a field added to the draft, with its slug, label, type, identity-key, and managed-by values](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6390f08c5c30f128/1ad43d120e5b974566485c8d/img-0277.png)

Nothing in this tab affects the live schema — it is purely a read-only review surface.

## Publishing a Draft

When you're satisfied with the preview, publish the draft. This creates a new [schema version](/docs/lytics/schema-versions) containing all of the draft's changes, and incoming data is processed against the updated schema from that point forward.

If something goes wrong after publishing, revert to a previous version using the standard schema version history — no need to manually undo each change.

Drafts that target the `content` table publish immediately on apply, without a separate review step. User-table drafts follow the full stage → preview → publish workflow.

## Managed Workflows and Drafts

For accounts with drafts enabled, LQL workflows that need to modify the schema (for example, managed integrations that add new fields as they discover them in incoming data) will create a draft for you to review, rather than writing the changes straight into the schema. You'll see these drafts appear in the list with an identifying tag; open, review, and publish them as you would any manually-created draft.

## Permissions

-   **Create / edit a draft** — requires the `schema:edit` permission.
-   **Delete a draft** — requires the `schema:delete` permission.
-   **Enable drafts for the account** — requires permission to edit account settings.
-   **Advanced tab (raw JSON)** — separately gated for power users.

## Related

-   [Schema Versions](/docs/lytics/schema-versions) — Publishing and reverting schema versions
-   [Fields & Mappings](/docs/lytics/fields-mappings) — Managing individual fields and mappings
-   [Identity Key Ranks](/docs/lytics/identity-key-ranks) — Identity key ranking and priority
