---
title: "How is it different from Authtoken"
description: "Learn how Management Tokens differ from Authtokens in terms of access, scope, and use cases."
url: /headless-cms/how-is-it-different-from-authtoken
uid: blt37c09300c37a2b61
---

# How is it different from Authtoken

## How is it different from Authtoken

A [Management Token](/docs/headless-cms/about-management-tokens) is a stack-level token used primarily for automation scripts, third-party app integrations, and [Single Sign On](/docs/administration/about-single-sign-on-sso/) (SSO)-enabled organizations. Unlike an [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens), which is a read-write, user-specific token used to make authorized [CMA requests](/docs/developers/apis/content-management-api), a management token is not linked to any individual user. This means no personal user details are attached to API requests made using a management token.

If someone gains access to your authtoken and knows the [Stack](/docs/headless-cms/about-stack) API key, they can make API requests that appear to originate from you. Management Tokens, however, are not tied to specific users, and therefore, role-specific permissions are not applicable. These tokens can perform all actions that authtokens can, except for a few exceptions related to Users, Workflows, and Publish Rules.

**Note:** Only the [owner](/docs/headless-cms/types-of-roles#owner) or [admin](/docs/headless-cms/types-of-roles#admin) of a stack can create Management Tokens.
