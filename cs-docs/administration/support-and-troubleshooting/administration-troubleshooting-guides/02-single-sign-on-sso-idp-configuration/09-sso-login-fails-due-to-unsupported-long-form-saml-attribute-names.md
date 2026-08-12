---
title: "SSO Login Fails Due to Unsupported Long-Form SAML Attribute Names"
description: "SSO Login Fails Due to Unsupported Long-Form SAML Attribute Names"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/09-sso-login-fails-due-to-unsupported-long-form-saml-attribute-names
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csdeca584e72d6cebf
---

# SSO Login Fails Due to Unsupported Long-Form SAML Attribute Names

SSO configuration and testing may fail even when the certificate and URL are correctly uploaded.

**Root Cause**

Contentstack requires short attribute names (email, first\_name, last\_name) for SAML assertions. Long schema URNs (for example, http://schemas.xmlsoap.org/ws/2005/05/identity/claims/Email) are not supported.

**Resolution**

1.  Open the identity provider's application configuration.
2.  Replace any long schema URNs used for SAML attributes with the supported short names: email, first\_name, and last\_name.
3.  Save the updated configuration.

After updating the attribute names, retest SSO to confirm authentication completes successfully.
