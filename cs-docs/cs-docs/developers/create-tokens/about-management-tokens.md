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

Management Tokens are secure credentials that grant read-write or read-only access to the content within your stack. When used in combination with the stack API key, they authorize requests made via the [Content Management API](/docs/developers/apis/content-management-api) (CMA), enabling you to programmatically manage the content of your [stack](/docs/developers/set-up-stack/about-stack/).

**Note:** A management token can be assigned to all or specific branches and aliases, giving you flexibility in how content access is controlled. For more information, refer to our [Global Modules](/docs/developers/branches/global-modules) document.

A management token with read-write permissions can perform all possible actions on the following modules:
- [Entries](/docs/content-managers/working-with-entries/about-entries)
- [Assets](/docs/content-managers/working-with-assets/about-assets)
- [Content types](/docs/developers/create-content-types/about-content-types)
- [Labels](/docs/developers/create-content-types/about-labels)
- [Extensions](/docs/developers/about-experience-extensions)
- [Releases](/docs/content-managers/create-and-manage-releases/about-releases)
- [Environment](/docs/developers/set-up-environments/about-environments)
- [Languages](/docs/developers/multilingual-content/about-languages)
- [Webhooks](/docs/developers/set-up-webhooks/about-webhooks)
- [Roles](/docs/developers/invite-users-and-assign-roles/types-of-roles)
- [Users](/docs/owners-and-admins/organization-users) (Except adding and removing users to/from a stack)
- [Workflows](/docs/developers/set-up-workflows-and-publish-rules/about-workflows) (Except for changing workflow stages)
- [Publish Rules](/docs/developers/set-up-workflows-and-publish-rules/about-publish-rules) (Except set up publishing rules that require the approval of users or roles)
- [Audit Log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log) (Read-only)
- [Publish Queue](/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue)

A management token with just read permissions can be used to make all GET requests for the modules mentioned above.

**Note:** Management tokens **cannot** be used for the following modules: [organization](/docs/developers/organization/about-organizations/), stack, user session, and [tokens](/docs/developers/create-tokens/overview-of-tokens/).

## Common questions

### Do Management Tokens work by themselves?
No. Management Tokens are used in combination with the stack API key to authorize requests made via the [Content Management API](/docs/developers/apis/content-management-api) (CMA).

### What is the difference between read-write and read-only Management Tokens?
A management token with read-write permissions can perform all possible actions on the listed modules, while a management token with just read permissions can be used to make all GET requests for those modules.

### Can a Management Token be limited to certain branches or aliases?
Yes. A management token can be assigned to all or specific branches and aliases.

### What modules cannot be accessed using Management Tokens?
Management tokens **cannot** be used for the following modules: [organization](/docs/developers/organization/about-organizations/), stack, user session, and [tokens](/docs/developers/create-tokens/overview-of-tokens/).

<!-- filename: set-up-your-project-about-management-tokens.md -->