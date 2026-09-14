---
title: "As an owner or admin, how do I invite users that are not in my corporate IdP to my SSO-enabled organization?"
description: "As an owner or admin, how do I invite users that are not in my corporate IdP to my SSO-enabled organization?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/18-as-an-owner-or-admin-how-do-i-invite-users-that-are-not-in-my-corporate-idp-to-my-sso-enabled-organization
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs71dc150a689e57da
---

# As an owner or admin, how do I invite users that are not in my corporate IdP to my SSO-enabled organization?

To invite users who are not in your identity provider, perform the following steps:

1.  Open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.
2.  Open the connection that has strict mode enabled, go to **3\. User Management**, and disable **Strict Mode**.
3.  Go to **Users** in the organization settings and [invite the users](/docs/administration/invite-users-to-organization).
4.  While inviting, select the **Allow Access Without SSO** checkbox, which lets the invited user access the SSO-enabled organization with Contentstack credentials.

**Note**: If your plan includes it, **User Email Whitelists** is an alternative that keeps strict mode on. It lets specified users access APIs while strict mode is enabled. The setting applies to the organization rather than to one connection, so it appears only on the connection that has strict mode enabled, and it accepts up to 100 addresses.
