---
title: "Enable SAML Encryption"
description: "Enable SAML Encryption"
url: /administration/enable-saml-encryption
---

# Enable SAML Encryption

## Enable SAML Encryption

Security Assertion Markup Language (SAML) is an open standard for trading authorized content such as logins, identifiers, and other suitable attributes between Contentstack and an IdP.

SAML simplifies and secures the authentication process by authorizing users with a single set of authentication credentials.

An IdP stores specific SAML attributes that help validate users during logins. Allowing encryption of the SAML attributes adds another layer of security so that personal or corporate data is not compromised.

**Note:** Enabling SAML encryption is optional. Even without the encryption, communication between the IdP and Contentstack application transpires over encrypted links.

## Prerequisites

-   [Organization Owner](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to enable encryption for SAML attributes in Contentstack.
    
-   How to download the Contentstack public certificate for SAML encryption.
    

## Enabling encryption for SAML attributes in Contentstack

Once you enable the encryption, the IdP will encrypt the SAML attributes using the public key obtained from Contentstack.

To enable SAML encryption, perform the following steps:

1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the [Organization Settings](/docs/administration/organization-settings-overview) page, and click on the **Single Sign-On** tab. ![SSO.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8ec8db6a88618de0/6241b47f79348e75f916206b/SSO.png)
    
    **Note:** Only the owner of an organization can set up SSO.
    
2.  Click on the **2\. IdP Configuration** tab. ![IdP_Config.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt098ad58147de6967/6241b47f7239af5fef4137d1/IdP_Config.png)
3.  Check the **Enable SAML Encryption** checkbox, and click on **Save**. ![Enable_SAML.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt137da74f9d600ad8/6241b47f13968918d3ddd10e/Enable_SAML.png)

## Download the Contentstack Public Certificate for SAML Encryption

You will need a public certificate to encrypt your SAML attributes via your IdP. Download the Contentstack Public Certificate for either the [NA region](https://app.contentstack.com/public_cert.cer) or the [EU region](https://eu-app.contentstack.com/public_cert.cer) and upload it to your IdP to configure the SAML encryption.
