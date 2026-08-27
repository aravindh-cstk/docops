---
title: "Limitations of Management Tokens"
description: "Understand the limitations and permissions of Management Tokens in Contentstack stacks."
url: /headless-cms/limitations-of-management-tokens
uid: blt596cb7401cbb88ce
---

# Limitations of Management Tokens

## Limitations of Management Tokens

-   A maximum of **30 management tokens** can exist at a time in a specific stack.
-   Only the owner or admin of a stack can generate a management token.
-   A management token cannot be used for the following modules: organization, stack, user session, and tokens.
-   A management token cannot be used to accept or reject received publish/unpublish requests for entries.
-   A management token cannot be used to invite or remove users from the stack.
-   The custom rate limit value for read and write requests cannot exceed the organization’s predefined rate limit.
