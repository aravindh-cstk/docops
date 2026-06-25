---
title: "[Set Up Your Project] - Limitations of Branches"
description: Limitations and constraints for using branches in a project.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-branches
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Limitations of Branches

This page lists the limitations of Branches, including naming rules, plan and tier constraints, and restrictions around editing, deleting, and using Compare and Merge features. It is intended for developers setting up or managing branches and should be referenced when creating or maintaining branch configurations.

## Limitations of Branches

- This feature will be plan based.
- The branch UID must be in lower case and only ‘_’ can be used to separate two words.
- The maximum number of branches allowed per stack will depend on the product tier.
- Once you create a branch, you cannot edit it’s name or source branch.
- The maximum character length for a branch ID is **15**
- You cannot edit the name of the main branch.
- You cannot delete a branch that is being used as a source branch.
- The Compare and Merge features are currently available only through CMA and CLI for the content type and global field modules only.

## Common questions

**How should I format a branch UID?**  
The branch UID must be in lower case and only ‘_’ can be used to separate two words.

**Can I rename a branch after creating it?**  
Once you create a branch, you cannot edit it’s name or source branch.

**Why can’t I delete a branch?**  
You cannot delete a branch that is being used as a source branch.

**Where are Compare and Merge features available?**  
The Compare and Merge features are currently available only through CMA and CLI for the content type and global field modules only.