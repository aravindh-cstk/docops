---
title: "[Set Up Your Project] - Key Features of Management Tokens"
description: Key Features of Management Tokens
url: https://www.contentstack.com/docs/headless-cms/key-features
product: Contentstack
doc_type: guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Set Up Your Project] - Key Features of Management Tokens

This page explains the key features of Management Tokens, including what they are used for and the controls available when creating them. It is intended for developers and administrators who need to make authorized Content Management API (CMA) requests for managing a stack’s content.

## Key Features of Management Tokens

Management Tokens provide secure read-write access to the content of your [stack](../set-up-stack/about-stack.md). They act as credentials, used in combination with your stack API key, to make authorized [Content Management API](../../../api-docs/api-detail/content-management-api.md) (CMA) requests for managing your stack's content.

Let’s look at the key features of [Management Token](./about-management-tokens.md):
- **Stack-level token and not a user-specific token:** One important aspect of a management token is that it’s a stack-level credential and not tied to any individual user. This means anyone with access to the token can use it to make authorized CMA requests.
- **Provides access control:** When [generating a management token](./generate-a-management-token.md), you can define its access level. You can allow it to perform read-only actions or grant it both read and write access to content modules.
- **Provision to set expiry:** You can configure whether the management token should expire on a specific date or remain non-expiring, depending on your use case.
- **Custom rate limits:** Management tokens allow you to define custom rate limits, specifying the maximum number of read (GET) and write (POST, PUT, DELETE) requests permitted per second.
- **Owners/admins can create:** Only the stack [owners](../invite-users-and-assign-roles/types-of-roles.md#owner) or [admins](../invite-users-and-assign-roles/types-of-roles.md#admin) have the ability to create a management token, adding a layer of administrative control.

**Additional Resource:** Refer to the [limitations](./limitations-of-management-tokens.md) document for more information.

## Common questions

### Who can create a management token?
Only the stack [owners](../invite-users-and-assign-roles/types-of-roles.md#owner) or [admins](../invite-users-and-assign-roles/types-of-roles.md#admin) have the ability to create a management token.

### Are management tokens tied to a specific user?
No. A management token is a stack-level credential and not tied to any individual user.

### Can a management token be read-only?
Yes. When [generating a management token](./generate-a-management-token.md), you can define its access level and allow it to perform read-only actions.

### Can management tokens have custom rate limits?
Yes. Management tokens allow you to define custom rate limits for read (GET) and write (POST, PUT, DELETE) requests permitted per second.