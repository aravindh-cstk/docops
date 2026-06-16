---
title: "[Set Up Your Project] - About Aliases"
description: Contentstack allows you to assign aliases to any branch of your stack. An alias acts as a pointer to a specific branch.
url: https://www.contentstack.com/docs/developers/branches/about-aliases
product: Contentstack
doc_type: concept
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Aliases

This page explains what aliases are in Contentstack branches, how they work as pointers to specific branches, and when to use them in frontend application code to avoid heavy code changes when switching branch targets.

## About Aliases

Contentstack allows you to assign aliases to any [branch](/docs/developers/branches/about-branches) of your stack. An alias acts as a pointer to a specific branch.

Aliases offer another way to refer to a specific branch within your frontend application code. Define a target branch for your alias and avoid the hassle of making heavy changes to your code. You can point the alias to a different target branch, whenever required, so that the application renders content to your website from the specified branch.

For example, your stack may have a "production" alias that points to the "main" branch. The default behavior when merging will automatically generate a backup of the branch you are [merging](/docs/developers/branches/merging-branches/) into as a safety measure. In case there's an issue, simply point the "production" alias to the new "backup" branch.

You can manage your stack's aliases under the **Aliases** section:

**Additional Resource: **For more information about using branches and aliases in your stack, read our [Branches Real-world Scenarios](/docs/developers/branches/real-world-scenarios) document.

## Common questions

### What is an alias in Contentstack branches?
An alias acts as a pointer to a specific branch of your stack.

### Why use an alias instead of referencing a branch directly in code?
Aliases offer another way to refer to a specific branch within your frontend application code and help you avoid the hassle of making heavy changes to your code.

### Can an alias be repointed to a different branch later?
Yes, you can point the alias to a different target branch, whenever required.

### Where do I manage aliases in my stack?
You can manage your stack's aliases under the **Aliases** section.

<!-- filename: set-up-your-project-about-aliases.md -->