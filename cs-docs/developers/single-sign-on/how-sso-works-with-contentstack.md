---
title: "[Security Management] - How SSO works with Contentstack"
description: How Single Sign-On (SSO) works with Contentstack, including IdP authentication flow and role mapping requirements.
url: https://www.contentstack.com/docs/administration/how-sso-works-with-contentstack
product: Contentstack
doc_type: security-management
audience:
  - developers
  - owners
  - admins
version: current
last_updated: 2026-03-26
---

# [Security Management] - How SSO works with Contentstack

This page explains the Single Sign-On (SSO) authentication flow in Contentstack for SSO-enabled organizations, including what users experience during sign-in and when IdP role mapping is required. It is intended for developers, owners, and admins configuring or validating SSO behavior and access control.

## How SSO works with Contentstack

If you have enabled **Single Sign-On (SSO)** for your [Organization](../organization/about-organizations.md), your IdP will handle your authentication to your SSO-enabled organization. This means that if any of your users want to sign in to Contentstack via SSO, they will be redirected to your IdP.

If users are not logged in to your IdP, they will be redirected to the IdP sign-in page, where they are required to authenticate themselves. However, if the users are already signed in to your IdP while signing into Contentstack via SSO, they will not be asked to log in again and will be redirected to the Contentstack dashboard or the requested page.

**Note:** If you've already logged into your SSO IdP, the `trigger_sso_flow=<sso_name> `query parameter automatically lets you log in to Contentstack via SSO, allowing you to skip the Contentstack login page.

However, in order to access and manage content in Contentstack, users need to be assigned specific roles in their respective IdPs and these roles need to be mapped to Contentstack roles. The [IdP Role Mapping](./idp-role-mapping.md) section explains in detail how this works.

## Common questions

### What happens when a user signs in to Contentstack via SSO?
They will be redirected to the IdP for authentication, and then redirected back to the Contentstack dashboard or the requested page.

### Will users be prompted to log in again if they are already signed in to the IdP?
No, if they are already signed in to the IdP, they will not be asked to log in again.

### What does the `trigger_sso_flow=<sso_name>` query parameter do?
If you've already logged into your SSO IdP, the `trigger_sso_flow=<sso_name> `query parameter automatically lets you log in to Contentstack via SSO, allowing you to skip the Contentstack login page.

### Do users need role mapping to access and manage content in Contentstack?
Yes, users need to be assigned specific roles in their respective IdPs and these roles need to be mapped to Contentstack roles.