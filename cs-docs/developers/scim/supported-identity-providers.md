---
title: "[Security Management] - Supported Identity Providers for SCIM"
description: Supported Identity Providers for SCIM
url: https://www.contentstack.com/docs/administration/supported-identity-providers
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Security Management] - Supported Identity Providers for SCIM

This page lists the identity providers (IdPs) that are currently supported for SCIM provisioning in Contentstack. It is intended for developers and administrators who are setting up SCIM-based user provisioning and need to confirm which IdP integrations are available before configuring their organization.

## Supported Identity Providers for SCIM

Using [SCIM](./about-scim.md)provisioning functionality, you can provision and deprovision users from your Contentstack [organization](../organization/about-organizations.md) via the IdP client’s portal. Currently, we support SCIM provisioning via [OneLogin](./set-up-scim-provisioning-with-onelogin.md), [Microsoft Azure AD](./set-up-scim-provisioning-with-microsoft-azure-ad.md), and [Okta](./set-up-scim-provisioning-with-okta.md) only. We plan to add support for other IdPs soon.

## Guides for using SCIM Provisioning with specific IdPs

- [Set up SCIM Provisioning with OneLogin](./set-up-scim-provisioning-with-onelogin.md)
- [Set Up SCIM Provisioning with Microsoft Azure AD](./set-up-scim-provisioning-with-microsoft-azure-ad.md#add-users-and-groups-to-your-application)
- [Set Up SCIM Provisioning with Okta](./set-up-scim-provisioning-with-okta.md)

## Common questions

### Which identity providers are supported for SCIM provisioning?
Currently, SCIM provisioning is supported via OneLogin, Microsoft Azure AD, and Okta only.

### Can I use an identity provider other than OneLogin, Azure AD, or Okta?
The page states that support is currently limited to OneLogin, Microsoft Azure AD, and Okta, and that support for other IdPs is planned.

### Where can I find setup instructions for my IdP?
Use the links in the “Guides for using SCIM Provisioning with specific IdPs” section to access the setup guide for OneLogin, Microsoft Azure AD, or Okta.