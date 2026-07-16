---
title: "[Create Tokens] - Limitations of Delivery Tokens"
description: Limitations and constraints for Delivery Tokens in Contentstack, including plan limits, branch/alias linking, expiration behavior, access scope, and role permissions.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-delivery-tokens
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Create Tokens] - Limitations of Delivery Tokens

This page lists the limitations and constraints of Delivery Tokens in Contentstack. It is intended for developers and stack administrators who create or manage tokens and need to understand plan limits, scope restrictions, and required permissions before configuring access.

## Limitations of Delivery Tokens

- The number of Delivery Tokens is restricted based on your Contentstack subscription plan. To increase this limit, contact Contentstack [support](mailto:support@contentstack.com).
- A Delivery Token can be linked to all branches and aliases in a stack or restricted to just one branch or alias. Associating a token with a specific set of branches or aliases is not supported.
- Tokens don’t automatically expire, so unused tokens may remain active indefinitely.
- Delivery Tokens are **read-only tokens**. To manage content, you must use Management Tokens instead.
- Only the stack **Owner**, **Admin**, and **Developer** roles have permission to create Delivery Tokens.

## Common questions

**Q: Do Delivery Tokens expire automatically?**  
A: Tokens don’t automatically expire, so unused tokens may remain active indefinitely.

**Q: Can a Delivery Token be restricted to multiple specific branches or aliases?**  
A: Associating a token with a specific set of branches or aliases is not supported.

**Q: Who can create Delivery Tokens?**  
A: Only the stack **Owner**, **Admin**, and **Developer** roles have permission to create Delivery Tokens.

**Q: Can I use a Delivery Token to manage content?**  
A: Delivery Tokens are **read-only tokens**. To manage content, you must use Management Tokens instead.