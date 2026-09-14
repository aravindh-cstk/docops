---
title: "How do I enable SAML encryption?"
description: "How do I enable SAML encryption?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/23-how-do-i-enable-saml-encryption
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs03f47d494e13e35e
---

# How do I enable SAML encryption?

You enable SAML encryption in Contentstack and in your IdP settings. In an organization with more than one connection, configure it separately for each connection that needs it.

**To enable SAML encryption in Contentstack, follow the steps given below:**

1.  Open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
2.  Open the connection you want to configure, and go to **2\. IdP Configuration**.
3.  Turn on the **Enable SAML Encryption** toggle, and click **Save**.

**Provide the following details in your IdP to enable SAML encryption:**

1.  In the **Single Sign-On URL** field, provide the ACS URL generated for that connection in Contentstack. Each connection has its own ACS URL.
2.  Use Contentstack's entity ID in your IdP in **Audience URI**, **SP Entity ID**, **SAML Issuer ID**, or a similar field.
3.  In **NameID Format**, select or enter **Email Address**, which defines the parameter your IdP uses to identify Contentstack users.
4.  Upload the [Contentstack public certificate](/docs/administration/enable-saml-encryption#download-the-contentstack-public-certificate-for-saml-encryption) to your IdP. Once encryption is enabled on the connection, this certificate is also included in that connection's service provider (SP) metadata, which you can download from **1\. SSO Configuration**.
