---
title: "Merging Branches"
description: "Learn how to efficiently merge branches in Contentstack's developer documentation. Explore step-by-step instructions and best practices for seamless branch merging."
url: /headless-cms/merging-branches
uid: bltf8f7b8a18b2e750d
---

# Merging Branches

## Merging Branches

The Branch Merging feature enables you to merge changes between two branches using a variety of available merge strategies. When merging two branches, you select a base branch where changes will be merged and a compare branch that contains the changes to be merged.

**Note:** The Merge feature currently only merges differences between content type and global field modules, and is **only available via** [**Content Management API**](/docs/developers/apis/content-management-api/branches#merge-branches) **and** [**CLI commands**](/docs/headless-cms/compare-and-merge-branches-using-the-cli).

The default behavior when merging will create a backup of the branch you are merging into for safety. You can use this to quickly revert your site in the event that there is an issue with the merge via an alias.

**Note:** You can create an additional revert branch beyond the established maximum limit of branches per stack. For instance, if you already have reached the maximum limit of branches in your stack, you can perform a merge operation, provided that you manually delete the backup branch or any other branch before attempting the next merge.

## Strategies to Merge Branches

You can merge two branches using the following strategies:

1.  **Prefer base:** This strategy enables you to add changes from the compare branch to the base branch, and when conflicts arise, it keeps the changes in the base branch and ignores the changes in the compare branch. Anything present in the base branch but not in the compare branch will be kept
2.  **Prefer compare:** This strategy enables you to add changes from the compare branch to the base branch, and when conflicts arise, it keeps the changes in the compare branch and discards the changes in the base branch.
3.  **Overwrite with compare:** This strategy allows you to completely replace the base branch with the changes from the compare branch. Anything in the base branch that is not present in the compare branch will be lost.
4.  **Merge new only:** This strategy allows you to merge only the new changes from the compare branch to the base branch and ignores any modified changes in the compare branch.
5.  **Merge modified with prefer base:** This strategy allows you to add only the modified changes from the compare branch to the base branch. When conflicts arise, it keeps the modified changes of the base branch and ignores the modified changes of the compare branch. Any new items in the compare branch are ignored.
6.  **Merge modified with prefer compare:** This strategy allows you to add only the modified changes from the compare branch to the base branch. When conflicts arise, it keeps the modified changes of the compare branch and ignores the modified changes of the base branch. Any new items in the compare branch are ignored.
7.  **Ignore:** This strategy allows you to ignore all changes from the compare branch, keeping the base branch as it is. This can be used to ignore a specific change or to ignore all changes and merge only specific changes.

**Additional Resource:** Learn how to merge branches using our new requests in the [Merging Branches](/docs/developers/apis/content-management-api/branches#merge-branches) section in CMA. To merge branches via CLI, you can refer to the [Merge Branches](/docs/headless-cms/compare-and-merge-branches-using-the-cli#steps-to-merge-branches) section in the guide on [how to Compare and Merge Branches using the CLI.](/docs/headless-cms/compare-and-merge-branches-using-the-cli)

## Use-Cases of Merging Branches

Consider a scenario where you have your production-facing content in the main branch. It consists of the following content types:

-   **Homepage:** with fields “Title,” “Categories,” “Feature A,” and “Topics”
-   **Footer:** with fields “Title” and “Copyright”
-   **Product:** with fields “Title” and “Related Products”
-   **Author:** with fields “Title” and “Image”

Now, you plan to redesign your website and create a branch called redesign that is a copy of all of the above-mentioned content types from the main branch and their current content. You make the following structural changes to the content types within the child branch:

-   **Homepage** - with fields “Title,” “Feature B” (modified from “Feature A”), and “SEO Description” (new)
-   **Banner** \- a new content type with fields “Title” and “Image”
-   **Product** - with only the “Title” field (and the “Related Products” field removed)
-   **Author** - with the “Title” and “Biography” (new) fields (and the “Image” field removed)

Let us understand how each of the strategies affects our merge function individually.

### Merge Using Prefer Base

Since this strategy allows you to add changes from the compare branch to the base branch, and in case of conflicts, prefers to keep content from the base branch intact. Your new merged main branch will be as follows (items in bold came from the compare branch):

-   Homepage with Title, Categories, Feature A, **SEO Description**, and Topics fields
-   Footer with the Title and Copyright fields
-   **Banner with Title and Image fields**
-   Product with the Title and Related Products fields
-   Author with the Title, **Biography**, and Image fields

### Merge Using Prefer Compare

Since this strategy allows you to add changes from the compare branch to the base branch, and in case of conflicts, prefers to keep content from the compare branch intact. Your new merged main branch will be as follows (items in bold came from the compare branch):

-   Homepage with Title, Categories, **Feature B, SEO Description,** and Topics fields
-   Footer with the Title and Copyright fields
-   **Banner with Title and Image fields**
-   Product with the Title and Related Products fields
-   Author with the Title, **Biography**, and Image fields

### Merge Using Overwrite with Compare

Since this strategy allows you to completely overwrite the base branch with the changes from the compare branch. Your new merged main branch will be as follows (everything comes from the compare branch):

-   Homepage with Title, Feature B, and SEO Description fields
-   Banner with Title and Image fields
-   Product with the Title field
-   Author with the Title and Biography fields

### Merge Using New Only

Since this strategy allows you to add only new changes from the compare branch to the base branch. Your new merged main branch will be as follows (items in bold came from the compare branch):

-   Homepage with Title, Categories, Feature B, SEO Description, and Topics fields
-   Footer with the Title and Copyright fields
-   **Banner with Title and Image fields**
-   Product with the Title and Related Products fields
-   Author with the Title, Biography, and Image fields

### Merge Using Modified With Prefer Base

Since this strategy allows you to add only modified changes from the compare branch to the base branch, and in case of conflicts, prefers to keep content from the base branch intact. All newly added items are ignored during the merge. Your new merged main branch will be as follows (items in bold came from the compare branch):

-   Homepage with Title, Categories, Feature A, **SEO Description**, and Topics fields
-   Footer with the Title and Copyright fields
-   Product with the Title and Related Products fields
-   Author with the Title, **Biography**, and Image fields

### Merge Using Modified With Prefer Compare

Since this strategy allows you to add only modified changes from the compare branch to the base branch, and in case of conflicts, prefers to keep content from the compare branch intact. All newly added items are ignored during the merge. Your new merged main branch will be as follows (items in bold came from the compare branch):

-   Homepage with Title, Categories, **Feature B, SEO Description,** and Topics fields
-   Footer with the Title and Copyright fields
-   Product with the Title and Related Products fields
-   Author with the Title, **Biography**, and Image fields

**Warning:** Make sure to select the correct strategy for your merge operation.

**Note:** You can use ignore as the default merge strategy and use different merge strategies for all or specific content types and global fields.
