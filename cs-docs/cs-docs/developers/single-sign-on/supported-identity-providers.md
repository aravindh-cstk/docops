---
title: "[Security Management] - Supported Identity Providers"
description: Supported identity providers for integrating Contentstack SSO using SAML 2.0, with links to setup guides.
url: https://www.contentstack.com/docs/developers/single-sign-on/supported-identity-providers
product: Contentstack
doc_type: guide
audience:
  - developers
  - security-admins
version: unknown
last_updated: 2026-03-26
---

# [Security Management] - Supported Identity Providers

This page explains which identity providers (IdPs) are supported for Contentstack SSO via SAML 2.0 and provides links to step-by-step setup guides for specific IdPs, intended for developers and security administrators configuring single sign-on.

## Supported Identity Providers

You can integrate [Contentstack SSO](/docs/developers/single-sign-on/about-single-sign-on-sso) with all the identity providers (IdP) that support SAML 2.0 protocol. This includes all major IdPs such as **Okta**, **OneLogin**, **Azure AD**, **AD FS**, **Google G-Suite**, **Ping Identity**, **Ping Federate**, **Auth0**, **LastPass**, **Clear Login**, **Centrify**, and more.

We have step-by-step SSO setup guides for some of the popular IdPs. You can check out the details in the corresponding articles given in the list below. Or you can refer to our general guide on setting up SSO with any IdP.

## Guides for setting up SSO with specific IdPs

- [Set up SSO with Okta](/docs/developers/single-sign-on/set-up-sso-with-okta) (*supports IdP Role Mapping*)
- [Set up SSO with OneLogin](/docs/developers/single-sign-on/set-up-sso-with-onelogin) (*supports IdP Role Mapping*)
- [Set up SSO with Microsoft Azure AD](/docs/developers/single-sign-on/set-up-sso-with-microsoft-azure-ad) (*supports IdP Role Mapping*)
- [Set up SSO with AD FS](/docs/developers/single-sign-on/set-up-sso-with-adfs) (*no support for IdP Role Mapping yet*)
- [Set up SSO with Google G-Suite](/docs/developers/single-sign-on/set-up-sso-with-google-g-suite) (*no support for IdP Role Mapping yet*)

## Guide for setting up SSO with other SAML 2.0 IdPs

- [Set up SSO with other SAML 2.0 IdP](/docs/developers/single-sign-on/set-up-sso-in-contentstack)

## Common questions

### Do I need a specific identity provider to use Contentstack SSO?
No. You can integrate Contentstack SSO with all identity providers (IdP) that support SAML 2.0 protocol.

### Which popular IdPs are included in the supported list?
Major IdPs include Okta, OneLogin, Azure AD, AD FS, Google G-Suite, Ping Identity, Ping Federate, Auth0, LastPass, Clear Login, and Centrify.

### Where can I find setup instructions for my IdP?
Use the step-by-step guides listed under “Guides for setting up SSO with specific IdPs,” or use the general guide under “Guide for setting up SSO with other SAML 2.0 IdPs.”

### Does every IdP guide support IdP Role Mapping?
No. Some guides note “supports IdP Role Mapping,” while others note “no support for IdP Role Mapping yet.”