---
title: "About Branches"
description: "Explore Contentstack's Branches feature to efficiently manage multiple content versions, enabling seamless content development and testing."
url: /headless-cms/about-branches
---

# About Branches

## About Branches

Contentstack provides "Branches" to allow you to create multiple copies of your stack content. Every [stack](/docs/headless-cms/about-stack/) has a **main branch** by default. To create a new branch, you can fork a branch off of the main branch.

When you create a branch for the first time, the main branch becomes your source branch. For all subsequent branches you create, you need to specify a source branch from which it will inherit data.

![CMS-Branches](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc74a5a656ba75960/69f3112fc46745a3488c22af/CMS-Branches.png)

Any child branch inherits all of the data from the source branch, including content types, global fields, entries, assets, languages, webhooks, and extensions. Now, when you make a change in the child branch, it does not affect the parent branch.

Developers can update content models without affecting website content. Content managers can continue creating content for the website in the main branch while developers still have access to a full copy of the content in the branch for testing purposes

Consider the following real-world use cases of branches to understand how they are useful:

-   Developers can use a separate branch to remodel website content without affecting the live data
-   Developers and content managers can work concurrently on different copies of the same content to avoid data loss

With the [compare branches](/docs/headless-cms/comparing-branches) feature, you can compare the differences between two branches. If you make changes to your content model in a branch and want to see what’s different, you can use the compare branches feature to do so. Once you are satisfied with your changes, you can integrate the changes in this branch into another branch using the [merge branches](/docs/headless-cms/merging-branches/) feature.

**Note:** Both the Compare and Merge features are currently available only through [Content Management API](/docs/developers/apis/content-management-api/branches#compare-branches) and [CLI commands](/docs/headless-cms/compare-and-merge-branches-using-the-cli/) for the content type and global field modules.

You can also assign aliases to your branches. An alias acts as a pointer to a target branch from which you have to pull content. You can point the alias to a specific branch within your frontend application code. The application then renders content to your website from the target branch.

For example, an alias can be used to point to different branches whenever you plan to test the new set of changes to your website content.

With this feature, you are in complete control of updating the content model or making changes to any content type.

You can browse through the topics mentioned in the “More Articles” section below to start managing content across branches.

#### Tutorial Video

Let's learn how to work with the Branches feature.
