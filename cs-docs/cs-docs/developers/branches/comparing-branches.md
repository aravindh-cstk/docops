---
title: Comparing Branches
description: Documentation for the Branch Compare feature to compare changes between a base branch and a compare branch.
url: https://www.contentstack.com/docs/headless-cms/comparing-branches
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Comparing Branches

This page explains how the Branch Compare feature works in Contentstack, including what you can compare, possible comparison statuses, and example use-cases. It is intended for developers who need to review differences between branches before merging changes, using the Content Management API or CLI.

## Comparing Branches

The Branch Compare feature enables you to compare the changes between two branches – the Base branch (typically main) and the Compare branch (typically where the desired changes reside).

The base branch serves as the basis for comparison and also the location where any changes would be merged into (see [Merging Branches](./merging-branches.md) for more information). The compare branch contains the changes you want to merge.

**Note**: The Compare feature is currently available only for the content type and global field modules and is accessible through [Content Management API](../../../api-docs/api-detail/content-management-api.md#comparing-branches) and [CLI commands](../cli/compare-and-merge-branches-using-the-cli.md).

## Methods to Compare Branches

When comparing two branches, you can see:
- All the differences between the branches’ content types and global fields
- All the differences between the branches’ content types only
- All the differences between the branches’ global fields only
- All the differences between a specific content type in both branches
- All the differences between a specific global field in both branches

**Additional Resource:** To learn how to compare branches using our new request in the [Comparing Branches](../../../api-docs/api-detail/content-management-api.md#comparing-branches) section in CMA, refer to our documentation. To compare branches via CLI, you can refer to the [Compare Branches](../cli/compare-and-merge-branches-using-the-cli.md#steps-to-compare-branches) section in the guide on how to [Compare and Merge Branches using the CLI](../cli/compare-and-merge-branches-using-the-cli.md).

## Status of Comparisons

There are three possible outcomes when comparing branches:
- **Base only:** This status indicates that the difference is present only in the base branch. For example, the “Homepage” content type is present only in the base branch.
- **Compare only:** This status indicates that the difference is present only in the compare branch. For example, the “Homepage” content type is present only in the compare branch.
- **Modified:** This status denotes that the content type or global field is present in both branches but its properties have been modified. For example, the Homepage content type is present in both the base and compare branches but has new fields in compare and different settings for a field in both branches.

## Use-Cases of Comparing Branches

Let's learn how to Compare branches in Contentstack using a few use cases.

### Modifying a Content Type to Support New Requirements

Consider a scenario where you need to redesign certain fields of your website without affecting anything in production. For example, you want to modify the Blog content type to have an Author reference field rather than an Author single line textbox. To achieve this, you can create a child branch called “development” that inherits all content types, entries, assets, languages, etc. from the main branch as is.

Next, you can make changes to the Blog content type within the development branch. Once you are satisfied with your changes, you can quickly check the differences between the development (compare) branch and the main (base) branch using Branch Compare [CMA requests](../../../api-docs/api-detail/content-management-api.md#comparing-branches) or [CLI commands](../cli/compare-and-merge-branches-using-the-cli.md).

In this case, the differences will show a “modified” status since the Blog content type exists in both the base and compare branches, but you have made changes to their structure.

### Adding a New Feature

Consider a scenario where you need to add a new content type called Hero Banner to your website. You can start by creating a copy of your main branch. Your child branch can be called “redesign”, and it inherits all the content types, entries, assets, languages, etc. that were part of the main branch as is.

Now, you can create the new Hero Banner content type in the redesign branch without affecting the production (main) branch. Once you are satisfied with the development changes in the redesign branch, you can compare both the redesign and main branch using Branch Compare CMA requests or CLI commands.

The differences would show the status as:
- base only if the content type or global field is present only in the base branch.
- compare only if the content type or global field is present only in the compare branch.
- modified if the content type or global field is present in both branches, but its properties have been modified.

For the above mentioned scenario, the status for the comparison will be “compare_only” since the new content type exists only in the compare branch.

**Additional Resource:** Once you are satisfied with the development changes between your branches, you can merge them. Learn more about [Merging Branches](./merging-branches.md).

## Common questions

### Where is the Branch Compare feature available?
The Compare feature is currently available only for the content type and global field modules and is accessible through [Content Management API](../../../api-docs/api-detail/content-management-api.md#comparing-branches) and [CLI commands](../cli/compare-and-merge-branches-using-the-cli.md).

### What does the “Modified” status mean?
**Modified:** This status denotes that the content type or global field is present in both branches but its properties have been modified.

### When should I compare branches?
Use Branch Compare when you want to quickly check the differences between the development (compare) branch and the main (base) branch using Branch Compare [CMA requests](../../../api-docs/api-detail/content-management-api.md#comparing-branches) or [CLI commands](../cli/compare-and-merge-branches-using-the-cli.md).

### What should I do after comparing branches?
Once you are satisfied with the development changes between your branches, you can merge them. Learn more about [Merging Branches](./merging-branches.md).