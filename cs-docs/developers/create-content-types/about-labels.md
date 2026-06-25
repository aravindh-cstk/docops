---
title: "[Set Up Your Project] - About Labels"
description: About Labels
url: https://www.contentstack.com/docs/headless-cms/about-labels
product: Set Up Your Project
doc_type: concept
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Labels

This page explains what Labels are and how to use them to organize Content Types within a stack, including branch-specific behavior. It is intended for developers setting up or managing content modeling workflows, and should be used when you need to categorize and navigate Content Types more effectively.

## About Labels

Labels are like folders that provide flexibility for organizing your [Content Types](./about-content-types.md). They allow you to categorize and manage the content types in your [stack](../set-up-stack/about-stack.md) effectively, ensuring a streamlined workflow.

## Key Features of Labels

- **Categorization and Organization:** Labels help group and classify content types for easier access.
- **Branch-Specific Labels:** Labels are unique to each branch. For instance, labels created in the development branch are applicable only to content types within that branch. For more details, refer to the [Branch-specific Modules](../branches/branch-specific-modules.md) document.
- **Flexible Grouping:** You can apply labels to one or more content types to organize them based on specific criteria. Similarly, a content type can have more than one label assigned to it.

## Example Use Case

Suppose your stack has content types for different teams: Marketing, Writers, and Developers. You can:

- Create labels named *marketing*, *writers*, and *developers*.
- Assign these labels to the content types for each team.
- Use these labels to logically group and access content types, simplifying navigation and management.

Organizing content types with labels allows your teams to locate and manage their resources more effectively.

**Note:** Content types without labels appear under **Unlabeled** in the **Views** section on the Entry List page.

## Common questions

### Are labels shared across branches?

No. Labels are unique to each branch, and labels created in one branch apply only to content types within that branch.

### Can a content type have multiple labels?

Yes. A content type can have more than one label assigned to it.

### Where do content types without labels appear?

Content types without labels appear under **Unlabeled** in the **Views** section on the Entry List page.