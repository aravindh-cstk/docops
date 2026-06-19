---
title: "[Security Management] - Enable SAML Encryption"
description: Enable SAML encryption for SAML attributes in Contentstack and download the Contentstack public certificate for IdP configuration.
url: https://www.contentstack.com/docs/administration/enable-saml-encryption
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
  - organization-owners
version: unknown
last_updated: 2026-03-26
---

# [Security Management] - Enable SAML Encryption

This page explains what SAML encryption is in the context of Contentstack Single Sign-On (SSO), how organization owners can enable SAML encryption for SAML attributes, and where to download the Contentstack public certificate needed to configure encryption in your IdP.

## Enable SAML Encryption

Security Assertion Markup Language (SAML) is an open standard for trading authorized content such as logins, identifiers, and other suitable attributes between Contentstack and an IdP.

SAML simplifies and secures the authentication process by authorizing users with a single set of authentication credentials.

An IdP stores specific SAML attributes that help validate users during logins. Allowing encryption of the SAML attributes adds another layer of security so that personal or corporate data is not compromised.

**Note**: Enabling SAML encryption is optional. Even without the encryption, communication between the IdP and Contentstack application transpires over encrypted links.

## Enabling encryption for SAML attributes in Contentstack

Once you enable the encryption, the IdP will encrypt the SAML attributes using the public key obtained from Contentstack.

To enable SAML encryption, perform the following steps:
- Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the [Organization Settings](/docs/owners-and-admins/organization-settings-overview) page, and click on the **Single Sign-On** tab.

**Note**: Only the owner of an organization can set up SSO.
- Click on the **2. IdP Configuration** tab.
- Check the **Enable SAML Encryption** checkbox, and click on **Save**.

## Download the Contentstack Public Certificate for SAML Encryption

You will need a public certificate to encrypt your SAML attributes via your IdP. Download the Contentstack Public Certificate for either the [NA region](https://app.contentstack.com/public_cert.cer) or the [EU region](https://eu-app.contentstack.com/public_cert.cer) and upload it to your IdP to configure the SAML encryption.

## Common questions

### Who can enable SAML encryption in Contentstack?
Only the owner of an organization can set up SSO, which includes enabling SAML encryption.

### Do I need to enable SAML encryption for SSO to work?
No. Enabling SAML encryption is optional, and communication between the IdP and Contentstack application transpires over encrypted links even without it.

### What certificate do I need to configure SAML encryption in my IdP?
You need the Contentstack public certificate, which you can download for either the NA region or the EU region and upload to your IdP.

### Where do I enable the SAML encryption setting in Contentstack?
In Organization Settings, open the **Single Sign-On** tab, go to **2. IdP Configuration**, then check **Enable SAML Encryption** and click **Save**.