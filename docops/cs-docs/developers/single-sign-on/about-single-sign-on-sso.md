---
title: "[Security Management] - About Single Sign-On (SSO)"
description: About Single Sign-On (SSO) in Contentstack organizations, including SAML 2.0 support and access to SSO settings.
url: https://www.contentstack.com/docs/administration/about-single-sign-on-sso
product: Contentstack
doc_type: concept
audience:
  - developers
  - organization-owners
version: unknown
last_updated: 2026-03-25
---

# [Security Management] - About Single Sign-On (SSO)

This page explains what Single Sign-On (SSO) is in Contentstack, what it enables for SSO-enabled organizations, and where organization owners can find the SSO settings to configure and learn more about SSO behavior.

## About Single Sign-On (SSO)

**Note**: SSO can only be set up by the [owner](../organization/organization-roles.md#organization-owner) of an [organization](../organization/about-organizations.md).*
*

*Contentstack supports Single Sign-On (SSO). If your Contentstack organization is SSO-enabled, users can access the organization through your corporate identity provider credentials, instead of Contentstack account credentials. This eliminates the normal login process and enables faster and secure access to your apps.*

Single Sign-On is a method that enables a particular system (usually the concerned organization’s identity provider) to authenticate users and subsequently inform Contentstack that the users have been authenticated. The users are then allowed to access their resources in Contentstack without having to sign in using Contentstack credentials.

**Note**: When a user opts out of SSO from an SSO-enabled organization, the user needs to use the [Reset Password](../security/forgot-reset-password.md) option to create a new password for a new login session.

Contentstack uses the most-commonly adopted SSO standard, i.e., Security Assertion Markup Language 2.0 (SAML 2.0). Consequently, our SSO implementation can be integrated with any well-known identity provider (IdP) that supports SAML 2.0. You can refer to our [SSO Guides](../single-sign-on.md#sso-guides) section to learn how you can integrate SSO with any IdP.

**Note:** You can now enable encryption for the SAML attributes via your IdP. [Read more](./enable-saml-encryption.md).

To access the SSO settings, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the** Organization Settings **page, and then click on the **SINGLE SIGN-ON** tab.

You can browse through the following topics, mentioned in the “More Articles” section, to learn how you can set up SSO, how it works, and more.

## Common questions

### Who can set up SSO for a Contentstack organization?
SSO can only be set up by the [owner](../organization/organization-roles.md#organization-owner) of an [organization](../organization/about-organizations.md).

### What SSO standard does Contentstack use?
Contentstack uses Security Assertion Markup Language 2.0 (SAML 2.0).

### What happens if a user opts out of SSO in an SSO-enabled organization?
When a user opts out of SSO from an SSO-enabled organization, the user needs to use the [Reset Password](../security/forgot-reset-password.md) option to create a new password for a new login session.

### Where do I find the SSO settings in Contentstack?
Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the** Organization Settings **page, and then click on the **SINGLE SIGN-ON** tab.