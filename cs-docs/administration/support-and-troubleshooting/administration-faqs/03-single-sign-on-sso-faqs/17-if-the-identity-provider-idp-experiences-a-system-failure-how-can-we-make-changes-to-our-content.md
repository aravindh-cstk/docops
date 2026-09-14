---
title: "If the identity provider (IdP) experiences a system failure, how can we make changes to our content?"
description: "If the identity provider (IdP) experiences a system failure, how can we make changes to our content?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/17-if-the-identity-provider-idp-experiences-a-system-failure-how-can-we-make-changes-to-our-content
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs1a6f3af71f632569
---

# If the identity provider (IdP) experiences a system failure, how can we make changes to our content?

The organization [owner](/docs/administration/about-administration-roles) can always sign in with Contentstack credentials, whether or not SSO is enabled.

If your organization has more than one connection and only one identity provider is affected, users on the other connections continue to sign in as usual.

If the failure blocks everyone, the owner can restore access as follows:

1.  Sign in to the Contentstack account.
2.  Open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
3.  Open the connection that has strict mode enabled, go to **3\. User Management**, and disable **Strict Mode**.
4.  Go to **Users** in the organization settings and grant access to the required users by selecting **Allow Access Without SSO**.

These users can then access the organization with their Contentstack credentials instead of through SSO. A user who does not have a Contentstack account receives an email with account setup instructions, and can access the organization once the account is set up.

**Note**: Strict mode applies across the organization, so disabling it on the connection that holds the toggle removes the SSO-only requirement for every connection.
