---
title: "New Users Cannot Authenticate When Invited via the Contentstack UI in Strict-Mode SSO Organizations"
description: "New Users Cannot Authenticate When Invited via the Contentstack UI in Strict-Mode SSO Organizations"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/14-new-users-cannot-authenticate-when-invited-via-the-contentstack-ui-in-strict-mode-sso-organizations
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs9b65da95b76b95c0
---

# New Users Cannot Authenticate When Invited via the Contentstack UI in Strict-Mode SSO Organizations

New users can be provisioned and invited successfully, but are still unable to log in via SSO, while existing users in the same organization continue to log in without issue.

**Root Cause**

When an organization has SSO Strict Mode enabled, users invited directly through the Contentstack UI are provisioned for standard email/password access, which conflicts with Strict Mode's requirement that all access be governed by the identity provider. Users added this way cannot authenticate via SSO, while users originally provisioned through the IdP are unaffected.

**Resolution**

1.  Confirm whether the organization has SSO Strict Mode enabled.
2.  If so, provision the new user directly from the identity provider (for example, Okta or Microsoft Entra ID) side, rather than inviting them through the Contentstack UI.
3.  If email/password access is needed instead of SSO, have the Organization Owner disable Strict Mode and then re-invite the user with Allow Access without SSO enabled.

After provisioning the user through the identity provider, confirm they can log in successfully via SSO.
