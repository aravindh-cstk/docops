---
title: "How do I enable SAML encryption?"
description: "How do I enable SAML encryption?"
url: /administration/troubleshooting-and-faqs/administration-faqs/03-single-sign-on-sso-faqs/09-how-do-i-enable-saml-encryption
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: csdfdf2387a66b36c5
---

# How do I enable SAML encryption?

You need to enable SAML encryption in Contentstack and your IdP settings.

**To enable SAML encryption in Contentstack, follow the steps given below:**

1.  Log in to your [Contentstack account](https://www.contentstack.com/login), go to the [Organization Settings](/docs/administration/organization-settings-overview) page, and click on the **Single Sign-On** tab.
2.  Click on the **IdP Configuration** tab.
3.  Check the **Enable SAML Encryption** toggle, and click on **Save**.

**Provide the following details in your IdP to enable SAML encryption:**

1.  In the **Single Sign-On Url** field, provide the ACS URL that was generated for your organization in Contentstack.
2.  Use Contentstack’s Entity ID (generated in Step 1) in your IdP in **Audience URI**, **SP Entity ID**, **SAML Issuer ID**, or fields similar to these.
3.  In the **NameID Format**, select or enter **Email Address**. This defines the parameter that your IdP should use to identify Contentstack users.
4.  \[Optional Step\] If you want to encrypt your SAML attributes, you need to enable SAML encryption in your IdP and upload the [Contentstack Public Certificate](/docs/administration/enable-saml-encryption#download-the-contentstack-public-certificate-for-saml-encryption).
