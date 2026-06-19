---
title: "[Set Up Your Project] - Limitations of Management Tokens"
description: Limitations and usage restrictions for management tokens.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-management-tokens
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Limitations of Management Tokens

This page lists the limitations and restrictions of management tokens, including who can generate them, where they can be used, and constraints such as token count and rate limits. It is intended for developers and stack administrators who need to understand management token boundaries when configuring access and automation.

## Limitations of Management Tokens

- A maximum of **30 management tokens** can exist at a time in a specific stack.
- Only the owner or admin of a stack can generate a management token.
- A management token cannot be used for the following modules: organization, stack, user session, and tokens.
- A management token cannot be used to accept or reject received publish/unpublish requests for entries.
- A management token cannot be used to invite or remove users from the stack.
- The custom rate limit value for read and write requests cannot exceed the organization’s predefined rate limit.

## Common questions

### Who can generate a management token?

Only the owner or admin of a stack can generate a management token.

### How many management tokens can exist in a stack at one time?

A maximum of **30 management tokens** can exist at a time in a specific stack.

### Can a management token be used for organization, stack, user session, or tokens modules?

No. A management token cannot be used for the following modules: organization, stack, user session, and tokens.

### Can I set a custom rate limit higher than the organization’s predefined rate limit?

No. The custom rate limit value for read and write requests cannot exceed the organization’s predefined rate limit.