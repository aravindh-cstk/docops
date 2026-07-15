---
url: /headless-cms/branch-support-for-variants
marker: "Headless CMS | Variants"
heading: "Branch Support for Variants"
---

Branch support for Variants lets you manage variant groups and entry variants on any branch, not only the main branch. You can link content types and author entry variants in an isolated branch, keep those changes separate from other branches, and merge variant group configuration into another branch when ready. This is useful when you onboard to Personalize for the first time or run an A/B test and want to test personalization without affecting production content.

> **Note:** The Entry Variants feature is available as part of the Personalize license and may not be accessible to all users. For more information, contact the [support](mailto:support@contentstack.com) team.

## Global and Branch-Specific Configuration

A variant group has two parts that behave differently across branches:

-   **Global:** The variant group and its variants. These are shared across all branches. Variant groups originating from a Personalize experience are created globally, and their variants remain consistent across all branches. Updating a variant group’s name or description, or linking and unlinking variants, changes the global configuration.
-   **Branch-specific:** The content types linked to the variant group on the current branch, and the entry variants you create. Content type assignment is isolated per branch — linking or unlinking a content type, and the entry variants you author apply only to the branch you are working on.

> **Note:** Content type assignments are branch-specific. Changes in one branch do not affect other branches.

## Work with Variant Groups Across Branches

-   Switching branches preserves the relationships between variants. The variant group and its variants stay consistent, while the content type assignment reflects the branch you switch to.
-   Entry variants are isolated per branch. An entry variant created in one branch is not visible in other branches.
-   Unlinking a content type does not delete content. You can still update, publish, or unpublish existing entry variants, but you cannot create new ones until you re-link the content type.

## Merge Variant Groups Across Branches

Merge supports variant groups in addition to content types and global fields. You merge from a **compare branch** into a **base branch**. The merge compares the variant group configuration, its variants, and linked content types, and applies changes based on the strategy you choose.

**Note:**

-   Merging variant groups is available through the Content Management API. A user interface for merging variant groups is planned for a future release.
-   Workflow status is not included in the merge. Changes to workflow on one branch do not affect other branches.

You can merge a specific variant group or compare all variant groups across the two branches. The following merge strategies are available:

| **Merge strategy** | **What it does** |
| --- | --- |
| **Merge - Prefer Base** | Keeps the base branch configuration. For conflicting items, the base branch value is preferred. New items from the compare branch are added. |
| **Merge - Prefer Compare** | For conflicting items, the compare branch value is preferred. New items from the compare branch are added. |
| **Override with Compare** | Replaces the base branch configuration entirely with the compare branch configuration. |
| **Merge - New Only** | Adds only new items from the compare branch. Conflicting and existing items in the base branch are left unchanged. |
| **Merge - Modified Only** | For modified variant groups, the base branch value is preferred. |

## API Reference

To merge variant groups via API, refer to the Content Management API [merge](/docs/developers/apis/content-management-api/branches#merge-branches) request.
