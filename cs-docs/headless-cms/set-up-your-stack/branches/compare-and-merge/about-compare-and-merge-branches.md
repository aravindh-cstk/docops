---
title: "About Compare and Merge Branches"
description: "Learn how to compare and merge branches in Contentstack. Branches are a way to create different versions of your content."
url: /headless-cms/about-compare-and-merge-branches
---

# About Compare and Merge Branches

## About Compare and Merge Branches

With **Compare** and **Merge** Branches, you can now compare the differences between two branches and merge them together.

**Note:** Both the **Compare** and **Merge** features are currently only available for content types and global fields, and are accessible through the [Content Management API](/docs/developers/apis/content-management-api/branches#compare-branches) and [CLI commands](/docs/headless-cms/compare-and-merge-branches-using-the-cli/).

## How to Compare Branches

The **Compare** feature provides a way to compare two branches: a Base branch and a Compare branch. The Base branch serves as the basis for comparison and also the location where any changes would be merged into (see the [How to Merge Branches](#how-to-merge-branches) section). The Compare branch contains the changes you want to merge. The resulting comparison displays any differences between the content types and global fields in both branches.

When comparing two branches, you can see:

-   All the differences between the branches’ content types and global fields
-   All the differences between the branches’ content types only
-   All the differences between the branches’ global fields only
-   All the differences between a specific content type in both branches
-   All the differences between a specific global field in both branches

Learn more about [comparing branches.](/docs/headless-cms/comparing-branches)

## How to Merge Branches

The **Merge** feature allows you to combine changes between the Base and Compare branches into the Base branch.

**Note:** Once a merge action is triggered, the default behavior is to create a backup branch of the original Base branch.

You can select a default merge strategy as well as override the default strategy per content type or global field. The merge strategies available are as follows:

-   **Prefer base:** When resolving a conflict between the two branches, the system keeps the change in the base branch and ignores the change in the compare branch. Anything present in the base branch but not in the compare branch will be kept.
-   **Prefer compare:** When resolving a conflict between the two branches, the system keeps the change in the compare branch and ignores the change in the base branch.
-   **Overwrite with compare:** Replaces what is in the base branch with what is in the compare branch. Anything present in the base branch but not in the compare branch will be kept.
-   **Merge new only:** Merges only the new changes from the compare branch into the base branch and ignores any modified changes in the compare branch.
-   **Merge modified with prefer base**: Merges only the modified changes from the compare branch into the base branch and ignores any new changes in the compare branch. When resolving a conflict between the two branches, the system keeps the change in the base branch and ignores the change in the compare branch.
-   **Merge modified with prefer compare:** Merges only the modified changes from the compare branch into the base branch and ignores any new changes in the base branch. When resolving a conflict between the two branches, the system keeps the change in the compare branch and ignores the change in the base branch.
-   **Ignore:** Ignores the changes in the compare branch, keeping the base branch intact. This can be used either to ignore a specific change or to ignore all changes and merge only specific changes.

Learn more about [merging branches.](/docs/headless-cms/merging-branches)

**Additional Resource:** If you want to carry out operations related to **Compare** and **Merge** **Branches** within your stack using the CLI, refer to the guide on how to [Compare and Merge Branches using the CLI](/docs/headless-cms/compare-and-merge-branches-using-the-cli/).

## API Reference

To perform operations related to Compare and Merge Branches within your stack via API, refer to the following documents:

-   [Comparing Branches](/docs/developers/apis/content-management-api/branches#compare-branches)
-   [Merging Branches](/docs/developers/apis/content-management-api/branches#merge-branches)
