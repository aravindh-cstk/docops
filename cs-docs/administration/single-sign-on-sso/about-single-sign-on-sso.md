---
title: "About Single Sign-On (SSO)"
description: "Learn how Single Sign-On (SSO) works in Contentstack, including SAML 2.0 support, multiple identity providers, metadata exchange, and role mapping."
url: /administration/about-single-sign-on-sso
uid: blt1f49b932dcba41e6
---

# About Single Sign-On (SSO)

## About Single Sign-On (SSO)

**Note:** SSO can be configured by the organization [owner](/docs/headless-cms/types-of-roles#owner), a security manager, or a user with a custom role that has SSO write permissions.

Contentstack supports **Single Sign-On** (**SSO**). If your Contentstack organization is SSO-enabled, users can access the organization through your corporate identity provider credentials, instead of Contentstack account credentials. This eliminates the normal login process and enables faster and secure access to your apps.

Single Sign-On enables an identity provider to authenticate users and subsequently inform Contentstack that the users have been authenticated. The users are then allowed to access their resources in Contentstack without having to sign in using separate Contentstack credentials.

**Note:** When a user opts out of SSO from an SSO-enabled organization, the user needs to use the [Reset Password](/docs/administration/forgot-reset-password) option to create a new password for a new login session.

Contentstack uses the most-commonly adopted SSO standard, i.e., **Security Assertion Markup Language 2.0** (**SAML 2.0**). Consequently, our SSO implementation can be integrated with any well-known **identity provider** (**IdP**) that supports SAML 2.0.

An organization can attach multiple SAML 2.0 IdPs, **up to five**, with each IdP set up as a separate connection. Each connection has its own certificate, session policy, role mapping, and login URL, so you can support several identity providers within the same organization. An organization is considered SSO-enabled when at least one connection is enabled. To learn how to add and manage these connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers) and [Manage SSO Connections](/docs/administration/manage-sso-connections).

During IdP onboarding, you can exchange SAML metadata instead of entering each field manually. You can import your IdP metadata through a metadata URL or an XML file, and you can share the Contentstack **service provider** (**SP**) metadata with your IdP. For details, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata) and [Download SP Metadata](/docs/administration/download-sp-metadata).

**Note:** You can enable encryption for the SAML attributes via your IdP.

**Additional Resource:** To learn more about the multi-IdP and metadata capabilities, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers), [Import IdP Metadata](/docs/administration/import-idp-metadata), [Download SP Metadata](/docs/administration/download-sp-metadata), and [Manage SSO Connections](/docs/administration/manage-sso-connections).
