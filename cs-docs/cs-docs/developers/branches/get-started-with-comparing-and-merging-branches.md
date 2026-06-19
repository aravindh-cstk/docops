---
title: Get Started with Comparing and Merging Branches
description: Get started guide for comparing and merging branches.
url: https://www.contentstack.com/docs/headless-cms/get-started-with-comparing-and-merging-branches
product: Branches
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# Get Started with Comparing and Merging Branches

This page explains how to compare and merge branches (for content types and global fields) so you can review structural changes safely and choose an appropriate merge strategy before updating production-facing content.

When making structural changes to your website, it is crucial to ensure that you are completely satisfied with the changes. Our [Branches](/docs/developers/branches/about-branches/) feature allows you to create a branch based on another branch, so you can make significant changes to the structure of your website. Previously, you could only finalize the changes in this new branch and then create an alias to point to the new changes or merge them via scripts you had to manually create.

Our support for comparing and merging branches makes it easier for you to work with the new changes on your website.

Let's consider a scenario where you have production-facing content in the** main** branch, and you want to redesign your website. To achieve this, you create a **redesign** branch that is a copy of the main branch.

In the **redesign** branch, you can make structural changes to the content types and global fields. Once you have finished making the changes, you can compare them with the main branch and then merge the changes in the redesign branch into the main branch.

**Note:** The branches compare and merge feature is available only for the content type and global field modules of your stack.

Let's take a look at how you can efficiently work with comparing and merging branches with the example mentioned above.

## Compare the Redesign and Main Branch

When you have any changes in the redesign branch, you can compare it with the main branch to review and identify the differences between them. You can use any of the following three methods to compare the branches:
- **All modules:** This method allows you to compare all modules, including content types and global fields, from both branches simultaneously.
- **Specific module:** With this method, you can compare only one module at a time from each branch. You can choose to compare either content types or global fields individually, depending on the module requested.
- **UID level: **This method lets you compare specific content types or global fields between both branches. It allows you to check the exact content changes by comparing specific items in a given module between both branches.

In this case, the differences between the base (main) and compare (redesign) branches would be as follows:

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Content Type |
|---|---|---|---|
| **Homepage** | **Homepage** | Field (unchanged) | Title |
|  | Title | Field | Categories |
|  | (not present) | Field (renamed/reconfigured) | Featured A |
|  | Featured B | Field | (not present) |
|  | SEO Description | Field | Topics |
|  | (not present) | **Content Type** | **Footer** |
| **Footer** | (not present) | Field | Title |
|  | (not present) | Field | Copyright |
|  | (not present) | **Content Type** | (not present) |
| **Banner** | **Banner** | Field | (not present) |
|  | Title | Field | (not present) |
|  | Image | **Content Type** | **Product** |
| **Product** | **Product** | Field (unchanged) | Title |
|  | Title | Field | Related Products |
|  | (not present) | **Content Type** | **Author** |
| **Author** | **Author** | Field (unchanged) | Title |
|  | Title | Field | (not present) |
|  | Biography | Field | Image |
|  | (not present) |  |  |

**Additional Resource:** Learn how to compare branches using our new requests in the [Comparing Branches](/docs/developers/apis/content-management-api/#comparing-branches) section in CMA. To compare branches via CLI, you can refer to the [Compare Branches](/docs/developers/cli/compare-and-merge-branches-using-the-cli/#steps-to-compare-branches) section in the guide on how to [Compare and Merge Branches using the CLI](/docs/developers/cli/compare-and-merge-branches-using-the-cli/).

In the above scenario, the status of the content types would be as follows:
- **Base only: **The Footer content type is present only in the base branch.
- **Compare only:** The Banner content type is present only in the compare branch.
- **Modified:** The content types are present in both branches but have been modified.

**Homepage:** In the compare branch, the Categories and Topics fields are deleted, the Feature A field is renamed to Feature B, and a new SEO Description field is added.
- **Product:** In the compare branch, the Related Products field is deleted.
- **Author:** In the compare branch, the Image field is deleted, and a new Biography field is added.

Now that you have identified the differences between the two branches, you can choose the merge strategies that best suit how you want to display your content in production.

Let’s learn about the different merge strategies.

## Merge the Redesign and Main Branch

Now that you have made changes in the redesign (compare) branch and compared them with the main (base) branch, you can proceed to merge these changes into the main (base) branch.

In the scenario above, the result of using various merge strategies would be as follows:
- **Prefer base:** This strategy allows you to add changes from the compare branch to the base branch, and in case of conflicts, it prefers to keep what is in the base branch intact. Anything not present in the compare branch will not be removed from the base branch.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Merge with Prefer Base | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories | Categories |  | Field |
|  | Featured A | Featured B | Featured A | Field |
|  | SEO Description | SEO Description |  | Field |
|  | Topics | Topics |  | **Content Type** |
| **Footer** | **Footer** |  | **Footer** | Field |
|  | Title |  | Title | Field |
|  | Copyright |  | Copyright | **Content Type** |
| **Banner** |  | **Banner** | **Banner** | Field |
|  |  | Title | Title | Field |
|  |  | Image | Image | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products | Related Products |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography | Biography |  | Field |
|  | Image | Image |  |  |

- **Prefer compare:** This strategy allows you to add changes from the compare branch to the base branch, and in case of conflicts, it prefers to keep what is in the compare branch intact. Anything not present in the compare branch will not be removed from the base branch.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Merge with Prefer Compare | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories | Categories |  | Field |
|  | Featured A | Featured B | Featured B | Field |
|  | SEO Description | SEO Description |  | Field |
|  | Topics | Topics |  | **Content Type** |
| **Footer** | **Footer** |  | **Footer** | Field |
|  | Title |  | Title | Field |
|  | Copyright |  | Copyright | **Content Type** |
| **Banner** |  | **Banner** | **Banner** | Field |
|  |  | Title | Title | Field |
|  |  | Image | Image | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products | Related Products |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography | Biography |  | Field |
|  | Image | Image |  |  |

- **Overwrite with compare:** This strategy allows you to completely overwrite the base branch with the changes from the compare branch. Anything in the base branch that is not present in the compare branch will be lost.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Overwrite with Compare | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories |  |  | Field |
|  | Featured A | Featured B | Featured B | Field |
|  | SEO Description | SEO Description |  | Field |
|  | Topics |  |  | **Content Type** |
| **Footer** | **Footer** |  |  | **** |
|  | Title |  |  | Field |
|  | Copyright |  |  | **Content Type** |
| **Banner** |  | **Banner** | **Banner** | Field |
|  |  | Title | Title | Field |
|  |  | Image | Image | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products |  |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography | Biography |  | Field |
|  | Image |  |  |  |

- **Merge new only:** This strategy allows you to add only new changes from the compare branch to the base branch. All modified changes are ignored.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Merge New Only | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories | Categories |  | Field |
|  | Featured A | Featured B | Featured A | Field |
|  | SEO Description |  |  | Field |
|  | Topics | Topics |  | **Content Type** |
| **Footer** | **Footer** |  | **Footer** | Field |
|  | Title |  | Title | Field |
|  | Copyright |  | Copyright | **Content Type** |
| **Banner** |  | **Banner** | **Banner** | Field |
|  |  | Title | Title | Field |
|  |  | Image | Image | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products | Related Products |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography |  |  | Field |
|  | Image | Image |  |  |

- **Merge modified with prefer base:** This strategy allows you to add only modified changes from the compare branch to the base branch, and in case of conflicts, it prefers to keep content from the base branch intact. New items are ignored. Anything not present in the compare branch will not be removed from the base branch.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Merge Modified with Prefer Base | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories | Categories |  | Field |
|  | Featured A | Featured B | Featured A | Field |
|  | SEO Description | SEO Description |  | Field |
|  | Topics | Topics |  | **Content Type** |
| **Footer** | **Footer** |  | **Footer** | Field |
|  | Title |  | Title | Field |
|  | Copyright |  | Copyright | **Content Type** |
| **Banner** |  | **Banner** |  | ****Field |
|  |  | Title |  | Field |
|  |  | Image |  | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products | Related Products |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography | Biography |  | Field |
|  | Image | Image |  |  |

- **Merge modified with prefer compare:** This strategy allows you to add only modified changes from the compare branch to the base branch, and in case of conflicts, it prefers to keep content from the compare branch intact. New items are ignored. Anything not present in the compare branch will not be removed from the base branch.

| Modules | Main (Base) Branch | Redesign (Compare) Branch | Merge Modified with Prefer Compare | Content Type |
|---|---|---|---|---|
| **Homepage** | **Homepage** | **Homepage** | **Homepage** | Field |
|  | Title | Title | Title | Field |
|  | Categories | Categories |  | Field |
|  | Featured A | Featured B | Featured B | Field |
|  | SEO Description | SEO Description |  | Field |
|  | Topics | Topics |  | **Content Type** |
| **Footer** | **Footer** |  | **Footer** | Field |
|  | Title |  | Title | Field |
|  | Copyright |  | Copyright | **Content Type** |
| **Banner** |  | **Banner** |  | ****Field |
|  |  | Title |  | Field |
|  |  | Image |  | **Content Type** |
| **Product** | **Product** | **Product** | **Product** | Field |
|  | Title | Title | Title | Field |
|  | Related Products | Related Products |  | **Content Type** |
| **Author** | **Author** | **Author** | **Author** | Field |
|  | Title | Title | Title | Field |
|  | Biography | Biography |  | Field |
|  | Image | Image |  |  |

- **Ignore:** This strategy ignores all changes from the compare branch. The base branch is unchanged.

**Note:** You can use ignore as the default merge strategy and use different merge strategies for all or specific content types and global fields.

**Warning:** Make sure to select the correct strategy for your merge operation.

By default, when merging, a backup of the base branch is created before the merge process begins. In case of issues or for testing purposes, you can create an alias that points to the backup of the main (base) branch. This ensures that your production website displays the content as it is and does not break. Once you are satisfied with your merge action, you can point the alias back to the main (base) branch that contains the new merged changes.

**Additional Resource:** Learn how to merge branches using our new requests in the [Merging Branches](/docs/developers/apis/content-management-api/#merging-branches) section in CMA. To merge branches via CLI, you can refer to the [Merge Branches](/docs/developers/cli/compare-and-merge-branches-using-the-cli/#steps-to-merge-branches)section in the guide on how to [Compare and Merge Branches using the CLI](/docs/developers/cli/compare-and-merge-branches-using-the-cli/).

## Common questions

**Which modules support the branches compare and merge feature?**  
The branches compare and merge feature is available only for the content type and global field modules of your stack.

**What are the available methods to compare branches?**  
All modules, Specific module, and UID level.

**What happens during merge by default?**  
By default, when merging, a backup of the base branch is created before the merge process begins.

**Can I use different merge strategies for different items?**  
Yes, you can use ignore as the default merge strategy and use different merge strategies for all or specific content types and global fields.