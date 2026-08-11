---
title: "Will I need to resend an invite to my existing organization users if I enable SSO?"
description: "Will I need to resend an invite to my existing organization users if I enable SSO?"
url: /administration/troubleshooting-and-faqs/administration-faqs/03-single-sign-on-sso-faqs/06-will-i-need-to-resend-an-invite-to-my-existing-organization-users-if-i-enable-ss
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: csc82d362b331e3cd1
---

# Will I need to resend an invite to my existing organization users if I enable SSO?

No. You do not have to send an invitation again since the existing users continue to remain part of the organization, even after SSO is enabled. 

Nothing changes for the existing users, except that they are required to sign in using SSO, instead of normal Contentstack username/password login. However, if any existing user is not part of your identity provider, you may have to disable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#user-management-in-contentstack) and update the user in Contentstack by assigning permission to **Allow Access Without SSO.**
