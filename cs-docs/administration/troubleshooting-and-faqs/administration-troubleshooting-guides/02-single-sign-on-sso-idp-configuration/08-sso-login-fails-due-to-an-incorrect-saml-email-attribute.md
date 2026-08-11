---
title: "SSO Login Fails Due to an Incorrect SAML Email Attribute"
description: "SSO Login Fails Due to an Incorrect SAML Email Attribute"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/08-sso-login-fails-due-to-an-incorrect-saml-email-attribute
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csebed7b90e1a282ff
---

# SSO Login Fails Due to an Incorrect SAML Email Attribute

The SSO Connection Test may fail during SAML configuration even when the certificate and URL are correctly set up.

**Root Cause**

An incorrect email attribute was being passed in the SAML assertion, causing the connection test to fail.

**Resolution**

1.  Review the SAML attribute mapping in the identity provider configuration.
2.  Update the email attribute to the correct value.
3.  Re-run the SSO Connection Test in Contentstack.

After correcting the attribute and re-running the test, verify that the SSO connection succeeds and that users can authenticate.
