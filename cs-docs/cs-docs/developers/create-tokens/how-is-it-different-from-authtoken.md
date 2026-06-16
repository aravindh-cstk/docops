---
title: "[Set Up Your Project] - How is it different from Authtoken"
description: Differences between Management Tokens and Authtokens, including scope, user linkage, and permissions.
url: https://www.contentstack.com/docs/developers/create-tokens/how-is-it-different-from-authtoken
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - How is it different from Authtoken

This page explains how a Management Token differs from an Authtoken, including how each token is scoped, what permissions apply, and what security implications to consider. It is intended for developers and administrators configuring authentication for automation, integrations, or API access, and should be used when deciding which token type to use for Content Management API requests.

## How is it different from Authtoken

A [Management Token](/docs/developers/create-tokens/about-management-tokens) is a stack-level token used primarily for automation scripts, third-party app integrations, and [Single Sign On](/docs/developers/single-sign-on/about-single-sign-on-sso/) (SSO)-enabled organizations. Unlike an [Authtoken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-auth-tokens), which is a read-write, user-specific token used to make authorized [CMA requests](/docs/developers/apis/content-management-api), a management token is not linked to any individual user. This means no personal user details are attached to API requests made using a management token.

If someone gains access to your authtoken and knows the [Stack](/docs/developers/set-up-stack/about-stack) API key, they can make API requests that appear to originate from you. Management Tokens, however, are not tied to specific users, and therefore, role-specific permissions are not applicable. These tokens can perform all actions that authtokens can, except for a few exceptions related to Users, Workflows, and Publish Rules.

**Note:** Only the [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) or [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) of a stack can create Management Tokens.

## Common questions

### When should I use a Management Token instead of an Authtoken?
Use a Management Token for automation scripts, third-party app integrations, and SSO-enabled organizations where the token should not be linked to an individual user.

### Are Management Tokens tied to role-specific permissions?
No. Management Tokens are not tied to specific users, and therefore, role-specific permissions are not applicable.

### Can Management Tokens do everything an Authtoken can do?
Management Tokens can perform all actions that authtokens can, except for a few exceptions related to Users, Workflows, and Publish Rules.

### Who can create Management Tokens?
Only the [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) or [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) of a stack can create Management Tokens.