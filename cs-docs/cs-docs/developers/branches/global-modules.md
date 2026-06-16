---
title: "[Set Up Your Project] - Global Modules"
description: Global modules available throughout the stack irrespective of which branch you are working on.
url: https://www.contentstack.com/docs/developers/branches/global-modules
product: Branches
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Global Modules

This page explains which modules are global across branches in a stack, how changes propagate between branches, and what branch-level constraints apply. It is intended for developers and stack administrators configuring or managing branch behavior and access.

### Item 1

#### Article section

##### Heading

Global Modules

##### Content

Global modules are available throughout the stack irrespective of which branch you are working on. Changes made in these modules within a branch will be reflected in all the other branches as well.

## Taxonomy

Taxonomy, offers versatile options for classifying, organizing, and managing content according to your unique requirements. The classification methods include hierarchical structuring, relational organization (which may or may not be hierarchical), and predefined lists based on metadata/attributes applicable across diverse use cases.

## Environments

Environment is a global module available across all branches of your stack. Any environment that you create in the main branch, will be available across all the other branches of the stack.

## Users

A user added to a stack can access and perform actions across branches present in the stack as per the roles assigned to them.

**Note:** Users with the roles owner, admin and developer can only create and delete branches.

## Roles

Any role you assign to a stack user will be reflected across all the branches of the stack. That user role will be able to access data of only the allowed branch(es) or branches associated with the allowed alias(es).

## Webhooks

You can select specific branches for which webhooks should trigger. This webhook will be accessible throughout all the branches.

**Note:** Webhooks can be assigned only to a single branch at a time.

## Workflows

You can assign workflows to all or specific branches in your stack. Changes can be made and accessed throughout all the branches.

## Publish Rules

You can assign publishing rules to all the branches in your stack or to a specific branch. Changes can be made and accessed throughout all the branches.

## Tokens

Both the delivery and management tokens can be assigned to specific branches of the stack.

You can also assign both the delivery and the management tokens to specific aliases to fetch or manage data from their associated branches.

## Marketplace Apps

In your organization, you have the option to install [marketplace apps](/docs/developers/marketplace-apps/) for a specific stack. Once installed, these apps can be utilized across all branches within the same stack.

## Common questions

### Are global modules shared across all branches?

Yes. Global modules are available throughout the stack irrespective of which branch you are working on, and changes made in these modules within a branch will be reflected in all the other branches as well.

### Can any user create or delete branches?

No. **Note:** Users with the roles owner, admin and developer can only create and delete branches.

### Can a webhook be assigned to multiple branches at the same time?

No. **Note:** Webhooks can be assigned only to a single branch at a time.

### Are tokens limited to branches only, or can they be assigned to aliases too?

Both. Both the delivery and management tokens can be assigned to specific branches of the stack, and you can also assign both the delivery and the management tokens to specific aliases to fetch or manage data from their associated branches.