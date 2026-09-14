---
title: "Download Contentstack (SP) Metadata"
description: "Download Contentstack's service provider SAML metadata as an XML file and share it with your IdP team to configure single sign-on."
url: /administration/download-sp-metadata
uid: blt119b7ca7a2e138b1
---

# Download Contentstack (SP) Metadata

## Download Contentstack (SP) Metadata

To configure single sign-on (SSO), your identity provider (IdP) needs Contentstack's service provider (SP) details, such as the Assertion Consumer Service (ACS) URL and the entity ID. Contentstack provides these as a standards-based Security Assertion Markup Language 2.0 (SAML 2.0) metadata file that your IdP team can import directly. When SAML assertion encryption is enabled on the connection, the metadata also includes the public certificate your IdP uses to encrypt assertions.

Instead of copying individual fields, you download the SP metadata as an XML file and share it with your IdP team.

**Note:** This action is available on each SSO connection to the organization [owner](/docs/headless-cms/types-of-roles#owner), a security manager, or a user with a custom role that has SSO write permissions.

## What the Metadata Contains

The SP metadata XML includes the connection's ACS URL, its ACS binding (**HTTP-POST**), the entity ID, and the supported NameID format. These are the values your IdP application needs to trust and route SAML responses to Contentstack.

If SAML assertion encryption is enabled on the connection, the metadata also includes one public certificate, which the IdP uses to encrypt assertions. If encryption is off, the metadata contains no certificate. Enable encryption before you download the file if your IdP team needs the certificate. For details, refer to [Enable SAML Encryption](/docs/administration/enable-saml-encryption).

**Note:** A connection carries a single encryption certificate. The metadata never contains more than one.

## Download the Metadata XML

To download the SP metadata and share it with your IdP team, perform the steps below:

1.  Open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.

2.  Open the connection you want to configure. Contentstack opens it at **1\. SSO Configuration**.

3.  Click **Download Metadata XML**.

4.  Send the downloaded file to your IdP administrator to import into the IdP application.


**Additional Resource:** To import your IdP's metadata into Contentstack, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata). To enable encryption for SAML attributes, refer to [Enable SAML Encryption](/docs/administration/enable-saml-encryption).
