---
title: "[Set Up Your Project] - Branches Real-world Scenarios"
description: Real-world use cases and scenarios for working with Branches in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/real-world-scenarios
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Branches Real-world Scenarios

This page explains real-world scenarios for using Branches (and aliases) in Contentstack, aimed at developers who need to manage parallel workstreams, reduce risk to production content, and support workflows like redesigns, testing, and CI/CD rollback.

[Branches](./about-branches.md)allows you to make changes and iterate your work without the risk of impacting the content deployed on production. Thus, making it easier for developers to work on multiple releases simultaneously.

Let's look at the following use cases to learn how to work with Branches in Contentstack.

## Example 1: Use branches for in-progress and production content

Before branches, developers maintained different stacks, one for development and another for production content. These multiple cloned stacks in your organization made it difficult for developers to migrate their changes to production.

With branches, you can reduce the stacks in your organization by maintaining the development and production branches within one stack.

To achieve this, you'll need to create a development branch within your production stack and select the production (main) branch as your source branch.

The development branch will now have a copy of all the content from the main branch (production). With this development branch, the developers can modify the structure, add new changes, iterate, and publish in a testing environment to preview the recent changes.

**Additional Resource:** To create a new branch, read our doc on [creating a branch](./create-a-branch.md).

You can compare the differences in the content types and global fields between the development and main branches. Once you are satisfied with the changes, you can merge the development branch into the main branch.

**Additional Resource:** Refer to our [Get started with comparing and merging branches](./get-started-with-comparing-and-merging-branches.md)documentation to learn more about comparing and merging branches

When merging, a backup of the branch you are merging into (in this case the main branch) is created by default before the merge action takes place. If you use aliases, you can easily point the alias to this backup branch to quickly switch back to how things were before the merge occurred.

**Additional Resource:** To learn how to assign a new alias or modify an alias, read our doc on how to [Assign an Alias](./assign-an-alias-to-a-branch.md) or [Edit an Alias](./edit-an-alias.md).

## Example 2: Use branches to redesign your website

Suppose you want to redesign the entire website. Traditionally you would clone the stack and make changes in the cloned model. But with numerous content types and stacks, it becomes difficult to keep track of the original content and the cloned one.

With the use of branches, you can redesign or restructure your website with great ease. All you need to do is create a branch named "redesign" and select the existing content (main) branch as your source branch.

In the** redesign** branch, you can make structural changes to your content types and global fields. Once you are satisfied with your changes, you can compare the differences and then merge the redesign branch into the main branch using the overwrite with compare strategy to completely replace the main (base) branch with the newly redesigned changes from the redesign (compare) branch.

**Note:** The [Compare](./comparing-branches.md) and [Merge](./merging-branches.md) feature currently only compares and merges differences between content type and global field modules, and is only available via [Content Management API](../../../api-docs/api-detail/content-management-api.md#comparing-branches) and [CLI commands](../cli/compare-and-merge-branches-using-the-cli.md).

## Example 3: Use branches to prevent data loss

Consider a developer restructures the content model of an existing production website. A content manager not aware of these recent changes comes in and updates the content and publishes it to production.

Due to unintentional changes, the production website may break, resulting in content loss.

You can correct this minor error by restoring the previous version. But, if the developer had restructured a large number of content types, this may be a tedious restoration activity.

With branches, one can avoid such costly website errors and prevent data loss.

To do so, the developer can create a new branch named "test" and select the main branch or any desired branch as the source branch.

The content of the source branch will now be available in the test branch. The developer can iterate the content model with great ease.

Then, when the content looks good, use an alias to reflect the new changes on the production website.

Once you are done and satisfied with your changes, you can compare and merge the two branches.

## Example 4: Integrate branches and aliases with CI/CD for an instant release rollback capability

In the CI/CD pipeline, many development teams use Git-based branching methods to maintain consistent code integration across the developer workflow. Once the integration is done, CD tools automate application code deployment to the desired environment (e.g., production).

With branches and aliases, developers can maintain production content across different branches without affecting live website data. Content managers can publish content changes to a website without the assistance of a development team to pull content from Contentstack and display it on a presentation layer.

Aliases can always point back to the previously referenced content branch in case of unintentional content deployment. This flexibility allows developers to roll back changes instantly. Here, CI/CD can integrate with the CMS to automate rollback for such content changes.

**Additional Resource**: Refer to our [Use Branches and Aliases to Drive Continuous Integration and Deployment](./use-branches-and-aliases-to-drive-continuous-integration-and-deployment.md) document to learn how branches and aliases help integrate Contentstack with standard CI/CD practices.

Let's consider a scenario where we need to make changes to production data for a live website.

To integrate Contentstack with your CI/CD strategies to facilitate consistent, hassle-free content deployment to the live website, you can follow the below steps:

Create a copy of the **main **branch content in a separate branch to change your production data. The child branch you create inherits all of the content types, entries, assets, languages, extensions, releases, etc., that were part of the parent branch as it is.
- Assign an alias to the "production" branch with the alias ID "deploy," for instance. This alias will help fetch and display data from the target branch on the live website.
- Specify an alias ID in the frontend code against the branch key to tell the application where it needs to fetch content. Whichever branch is associated with that alias ID then becomes the main branch for the production environment. For instance, we pass the "deploy" alias ID here to fetch data from the "production" branch.
- Change content types, entries, assets, etc., present on a branch (e.g., "development") without affecting your "production" branch data. You can test the changes until they are ready to deploy to production.
- Once the "development" branch changes are ready to go, you can use two different ways to apply the changes to production data:**For minor changes** such as adding or removing a few fields, you can use the Contentstack CLI to apply these changes to the "production" branch.
- **For major changes** such as redesigning the marketing website, you can use an alias to point to the “development” branch to test your new changes. Once satisfied with your changes, you can merge the development (compare) branch into the production (base) branch.

The default behavior when merging will create a backup of the branch you are merging into for safety. You can use this to quickly revert your site in the event that there is an issue with the merge via an alias. With flexible release rollback capabilities, branches allow Contentstack to align with your CI/CD pipeline and strategies.

**Additional Resource:** To understand the complete working of comparing and merging branches, please read our end-to-end guide on [Getting Started with Comparing and Merging Branches.](./get-started-with-comparing-and-merging-branches.md)

## Common questions

### Do branches replace the need to clone stacks for development and production?
With branches, you can reduce the stacks in your organization by maintaining the development and production branches within one stack.

### What gets compared and merged between branches?
The [Compare](./comparing-branches.md) and [Merge](./merging-branches.md) feature currently only compares and merges differences between content type and global field modules.

### What happens during a merge if something goes wrong?
When merging, a backup of the branch you are merging into is created by default before the merge action takes place, and you can point an alias to this backup branch to quickly switch back.

### How do branches and aliases help with CI/CD rollback?
Aliases can always point back to the previously referenced content branch in case of unintentional content deployment, which allows developers to roll back changes instantly.