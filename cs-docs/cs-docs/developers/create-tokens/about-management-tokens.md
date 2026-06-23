---
title: "[Set Up Your Project] - About Management Tokens"
description: About Management Tokens
url: https://www.contentstack.com/docs/headless-cms/about-management-tokens
product: Contentstack
doc_type: concept
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Management Tokens

This page explains what Management Tokens are, what access they provide, and where they can and cannot be used. It is intended for developers who need to authorize Content Management API (CMA) requests for managing stack content programmatically.

## About Management Tokens

Management Tokens are secure credentials that grant read-write or read-only access to the content within your stack. When used in combination with the stack API key, they authorize requests made via the [Content Management API](../../../api-docs/api-detail/content-management-api.md) (CMA), enabling you to programmatically manage the content of your [stack](../set-up-stack/about-stack.md).

**Note:** A management token can be assigned to all or specific branches and aliases, giving you flexibility in how content access is controlled. For more information, refer to our [Global Modules](../branches/global-modules.md) document.

A management token with read-write permissions can perform all possible actions on the following modules:
- [Entries](../../content-managers/author-content/about-entries.md)
- [Assets](/docs/content-managers/working-with-assets/about-assets)
- [Content types](../create-content-types/about-content-types.md)
- [Labels](../create-content-types/about-labels.md)
- [Extensions](../experience-extensions-overview/about-experience-extensions.md)
- [Releases](../../content-managers/create-and-manage-releases/about-releases.md)
- [Environment](../set-up-environments/about-environments.md)
- [Languages](../multilingual-content/about-languages.md)
- [Webhooks](../set-up-webhooks/about-webhooks.md)
- [Roles](../invite-users-and-assign-roles/types-of-roles.md)
- [Users](../organization/organization-users.md) (Except adding and removing users to/from a stack)
- [Workflows](../set-up-workflows-and-publish-rules/about-workflows.md) (Except for changing workflow stages)
- [Publish Rules](../set-up-workflows-and-publish-rules/about-publish-rules.md) (Except set up publishing rules that require the approval of users or roles)
- [Audit Log](../set-up-stack/monitor-stack-activities-in-audit-log.md) (Read-only)
- [Publish Queue](../../content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue.md)

A management token with just read permissions can be used to make all GET requests for the modules mentioned above.

**Note:** Management tokens **cannot** be used for the following modules: [organization](../organization/about-organizations.md), stack, user session, and [tokens](./overview-of-tokens.md).

## Common questions

### Do Management Tokens work by themselves?
No. Management Tokens are used in combination with the stack API key to authorize requests made via the [Content Management API](../../../api-docs/api-detail/content-management-api.md) (CMA).

### What is the difference between read-write and read-only Management Tokens?
A management token with read-write permissions can perform all possible actions on the listed modules, while a management token with just read permissions can be used to make all GET requests for those modules.

### Can a Management Token be limited to certain branches or aliases?
Yes. A management token can be assigned to all or specific branches and aliases.

### What modules cannot be accessed using Management Tokens?
Management tokens **cannot** be used for the following modules: [organization](../organization/about-organizations.md), stack, user session, and [tokens](./overview-of-tokens.md).

<!-- filename: set-up-your-project-about-management-tokens.md -->