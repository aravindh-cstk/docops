---
title: "[Second level navigation] - Authentication and Security"
description: Overview of Contentstack authentication and security methods, including two-factor authentication, account lockout policy, and single sign-on.
url: https://www.contentstack.com/docs/developers/security/authentication-and-security
product: Contentstack
doc_type: listing-page
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Second level navigation] - Authentication and Security

This page provides an overview of Contentstack’s authentication and account security features and links to related documentation. It is intended for developers and administrators who need to understand available security mechanisms and where to configure or learn more about them.

## Authentication and Security

Contentstack has a robust account security mechanism in place to prevent accounts from being hacked. Here's an overview of the methods we provide:
- Two-factor Authentication lets you add an extra layer of security by asking you to enter a one-time security code sent via Authy app or an SMS
- Account Lockout Policy locks your account temporarily for a few minutes or indefinitely (in extreme cases) if a user makes multiple unsuccessful login attempts (by providing invalid credentials)
- With Single Sign-on, users can access the organization through their corporate identity provider credentials, instead of Contentstack account credentials.

These features safeguard your account by preventing any unauthorized users from accessing them. We have some additional [security methods for developers](/docs/developers#security-management) as well. For more details, check out our [Trust and Security](https://www.contentstack.com/trust/#security) page.

## Authentication and Security Measures

- [Two-factor Authentication](/developers/two-factor-authentication)
- [Account Lockout Policy](/developers/account-lockout-policy)
- [Security FAQs](/faqs/#security-faqs)
- [Single Sign-On (SSO)](/developers/single-sign-on)

## Common questions

**How do I add an extra layer of security to my Contentstack account?**  
Use Two-factor Authentication to require a one-time security code during login.

**What happens if there are multiple unsuccessful login attempts?**  
The Account Lockout Policy can temporarily lock your account for a few minutes or indefinitely (in extreme cases).

**Can users sign in with corporate identity provider credentials instead of Contentstack credentials?**  
Yes, with Single Sign-on, users can access the organization through their corporate identity provider credentials.

**Where can I find more security-related resources?**  
See the linked [security methods for developers](/docs/developers#security-management) and the [Trust and Security](https://www.contentstack.com/trust/#security) page.