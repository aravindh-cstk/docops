---
title: "How can a user, who always logged in to his/her SSO-enabled Contentstack account via SSO (and does not have normal login credentials), access the same organization after SSO has been disabled for the organization?"
description: "How can a user, who always logged in to his/her SSO-enabled Contentstack account via SSO (and does not have normal login credentials), access the same organization after SSO has been disabled for the organization?"
url: /administration/troubleshooting-and-faqs/administration-faqs/03-single-sign-on-sso-faqs/02-how-can-a-user-who-always-logged-in-to-his-her-sso-enabled-contentstack-account-
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs3d2e7d8a90aae92f
---

# How can a user, who always logged in to his/her SSO-enabled Contentstack account via SSO (and does not have normal login credentials), access the same organization after SSO has been disabled for the organization?

When a user is included in an SSO-enabled Organization, he/she accesses the Organization through SSO using their IdP credentials instead of their Contentstack credentials (which they might not have created). If, later on, SSO is disabled for the Organization, the user will not be able to log in to Contentstack through IdP. However, the user is still part of the Organization. To access the same organization, the user will have to perform the following steps:

1.  Open [Contentstack login](https://www.contentstack.com/login) page and click the **Forgot Password?** link.
2.  Enter the email address and click **SEND INSTRUCTIONS**.

Now, the user will receive the password reset instructions on the email address. The user needs to follow the instruction and login to their Contentstack account.
