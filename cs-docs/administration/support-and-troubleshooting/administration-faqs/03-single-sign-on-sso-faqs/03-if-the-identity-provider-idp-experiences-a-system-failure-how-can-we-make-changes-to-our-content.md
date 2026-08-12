---
title: "If the Identity Provider (IdP) experiences a system failure, how can we make changes to our content?"
description: "If the Identity Provider (IdP) experiences a system failure, how can we make changes to our content?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/03-if-the-identity-provider-idp-experiences-a-system-failure-how-can-we-make-changes-to-our-content
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs85e2d0b763727bde
---

# If the Identity Provider (IdP) experiences a system failure, how can we make changes to our content?

An organization [owner](/docs/administration/about-administration-roles) can always use his Contentstack credentials to [log in](https://www.contentstack.com/login) to Contentstack and make relevant changes, irrespective of whether SSO has been enabled or not.

If the IdP experiences system fails, then the owner can perform the following steps:

1.  Log in to the Contentstack account.
2.  Go to [Organization settings](/docs/administration/organization-settings-overview) page and open the **Single Sign-On** tab, go to **User Management**, disable [Strict Mode](/docs/administration/set-up-sso-in-contentstack#user-management-in-contentstack), and grant access to the required user(s) by checking the **Allow Access without SSO** option.

These users will now be able to access the organization using their Contentstack credentials, instead of through SSO (IdP credentials).

However, if the user does not have a Contentstack account, he/she will receive an email with the account setup instructions to create an account in Contentstack. Post setting up their account, they will be able to access the Organization content.
