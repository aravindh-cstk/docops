---
title: "About Single Sign-On (SSO)"
description: "About Single Sign-On (SSO)"
url: /administration/about-single-sign-on-sso
uid: blt1f49b932dcba41e6
---

# About Single Sign-On (SSO)

## About Single Sign-On (SSO)

**Note:** SSO can only be set up by the [owner](/docs/owners-and-admins/organization-roles#organization-owner) of an [organization](/docs/owners-and-admins/about-organizations).

_Contentstack supports Single Sign-On (SSO). If your Contentstack organization is SSO-enabled, users can access the organization through your corporate identity provider credentials, instead of Contentstack account credentials. This eliminates the normal login process and enables faster and secure access to your apps._

Single Sign-On is a method that enables a particular system (usually the concerned organization’s identity provider) to authenticate users and subsequently inform Contentstack that the users have been authenticated. The users are then allowed to access their resources in Contentstack without having to sign in using Contentstack credentials.  

**Note:** When a user opts out of SSO from an SSO-enabled organization, the user needs to use the [Reset Password](/docs/developers/password-related-security/forgot-reset-password/) option to create a new password for a new login session.

   
Contentstack uses the most-commonly adopted SSO standard, i.e., Security Assertion Markup Language 2.0 (SAML 2.0). Consequently, our SSO implementation can be integrated with any well-known identity provider (IdP) that supports SAML 2.0. You can refer to our [SSO Guides](/docs/developers/single-sign-on#sso-guides) section to learn how you can integrate SSO with any IdP.

**Note:** You can now enable encryption for the SAML attributes via your IdP. [Read more](/docs/developers/single-sign-on/enable-saml-encryption).

To access the SSO settings, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page, and then click on the **SINGLE SIGN-ON** tab.

You can browse through the following topics, mentioned in the “More Articles” section, to learn how you can set up SSO, how it works, and more.
