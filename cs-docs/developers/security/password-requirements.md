---
title: "[Security Management] - Password Requirements"
description: Password requirements and best practices for secure login and account protection in Contentstack.
url: https://www.contentstack.com/docs/administration/password-requirements
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Security Management] - Password Requirements

This page explains Contentstack password requirements, organization-configured password policy guidelines, and recommended best practices. It is intended for Contentstack users and organization owners/admins who need to set, update, or enforce secure password and MFA policies.

## Password Requirements

To ensure secure login and account protection, Contentstack enforces password requirements aligned with strong password security best practices. Organization [owner](../organization/organization-roles.md#organization-owner) and [admin](../organization/organization-roles.md#organization-admin) roles can define [password policies](../organization/security-configuration.md#password-policies) that all users must follow within their workspace to help prevent unauthorized access.

## Password Policy Guidelines

When setting or updating your password, make sure it adheres to the policy configured by your organization’s admin. This policy may include minimum requirements such as:
- Minimum character length (default 8 characters)
- At least one uppercase letter
- At least one special character (e.g., !, @, #, $, %, ^, &, *)
- At least one numeric character (e.g., 0–9)

If your password (e.g., `abcd1234`) does not comply, the system prompts you to make necessary adjustments before proceeding.

## Best Practices

To further enhance your Contentstack password security, the following best practices are recommended:
- Use a strong and unique password that is not used on other sites
- Change your password regularly
- Avoid predictable patterns or easily guessable words
- Enable [Multi-Factor Authentication (MFA)](./multi-factor-authentication.md) using an authenticator app for enhanced security

**Note:** An organization admin can [enforce MFA](../organization/security-configuration.md#multi-factor-authentication) for all users in the organization. If enforced, users are prompted to set up MFA during their next login.

Need help? Reach out to our [support](mailto:support@contentstack.com) team.

## Common questions

### Who can define password policies in Contentstack?
Organization [owner](../organization/organization-roles.md#organization-owner) and [admin](../organization/organization-roles.md#organization-admin) roles can define [password policies](../organization/security-configuration.md#password-policies).

### What happens if my password does not meet the policy?
If your password (e.g., `abcd1234`) does not comply, the system prompts you to make necessary adjustments before proceeding.

### Can MFA be required for all users?
Yes. An organization admin can [enforce MFA](../organization/security-configuration.md#multi-factor-authentication) for all users in the organization.

### Where can I get help if I have issues with password requirements?
Reach out to the [support](mailto:support@contentstack.com) team.