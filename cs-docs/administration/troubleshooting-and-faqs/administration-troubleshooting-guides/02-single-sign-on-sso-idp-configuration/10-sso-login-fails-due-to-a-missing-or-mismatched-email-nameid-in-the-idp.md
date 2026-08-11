---
title: "SSO Login Fails Due to a Missing or Mismatched Email/NameID in the IdP"
description: "SSO Login Fails Due to a Missing or Mismatched Email/NameID in the IdP"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/10-sso-login-fails-due-to-a-missing-or-mismatched-email-nameid-in-the-idp
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs383719acdc46259b
---

# SSO Login Fails Due to a Missing or Mismatched Email/NameID in the IdP

SSO login may fail without a clear error, even though the issue does not originate on the Contentstack side.

**Root Cause**

This behavior typically originates from the identity provider configuration. Common causes include: the user has no email address defined in the IdP, the email address configured in the IdP does not match the one used for authentication, or the NameID field in the IdP settings is not set to EmailAddress.

**Resolution**

1.  Confirm the affected user has an email address defined in the identity provider.
2.  Verify the email address in the IdP matches the one used during authentication.
3.  Confirm the NameID field in the IdP settings is set to EmailAddress.

After correcting the identity provider configuration, ask the user to retry SSO login to verify access is restored.
