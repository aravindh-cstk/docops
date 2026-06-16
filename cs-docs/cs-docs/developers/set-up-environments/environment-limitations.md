---
title: "[Set up Environments] - Environment Limitations"
description: Environment Limitations for Set up Environments
url: https://www.contentstack.com/docs/developers/set-up-environments/environment-limitations
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set up Environments] - Environment Limitations

This page lists the limitations and constraints for environments, intended for developers configuring environments in Contentstack stacks and managing related tokens and content access.

## Environment Limitations

- Environment names cannot use the following special characters: `#%^+\/?\*:|"'<>\s{}=,`
- Environment names cannot contain spaces.
- Environment names should **not exceed 255 characters** and cannot contain capital letters.
- Environments are stack-specific and cannot be shared between stacks.
- Once an environment is deleted, it cannot be restored.
- Any published content in the deleted environment remains in Contentstack but becomes inaccessible via that environment.
- [Delivery tokens](/docs/developers/create-tokens/about-delivery-tokens) associated with the deleted environment become invalid, preventing API-based content retrieval.

## Common questions

### What characters are not allowed in environment names?
Environment names cannot use the following special characters: `#%^+\/?\*:|"'<>\s{}=,`, and they cannot contain spaces.

### Can I share an environment between stacks?
No. Environments are stack-specific and cannot be shared between stacks.

### What happens to delivery tokens when an environment is deleted?
[Delivery tokens](/docs/developers/create-tokens/about-delivery-tokens) associated with the deleted environment become invalid, preventing API-based content retrieval.

### Can a deleted environment be restored?
No. Once an environment is deleted, it cannot be restored.