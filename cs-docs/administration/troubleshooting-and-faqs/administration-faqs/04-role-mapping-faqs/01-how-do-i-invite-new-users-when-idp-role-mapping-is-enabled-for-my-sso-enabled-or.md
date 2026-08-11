---
title: "How do I invite new users when IdP Role Mapping is enabled for my SSO-enabled organization?"
description: "How do I invite new users when IdP Role Mapping is enabled for my SSO-enabled organization?"
url: /administration/troubleshooting-and-faqs/administration-faqs/04-role-mapping-faqs/01-how-do-i-invite-new-users-when-idp-role-mapping-is-enabled-for-my-sso-enabled-or
doc_type: faq
_cms_section_uid: csd56aae73f06f20ce
_cms_faq_uid: cs3275e067769ddd49
---

# How do I invite new users when IdP Role Mapping is enabled for my SSO-enabled organization?

To add new IdP users to your SSO enabled organization, just add them to any of your IdP group or role (in your IdP settings) that is mapped with Contentstack roles. They can then directly login to Contentstack (via SSO) with the corresponding permissions.

If you want to provide a different set of permissions to some [users](/docs/administration/organization-users), create a new group/role in your IdP, and add users to this group. Subsequently, add the [mapping](/docs/administration/idp-role-mapping) for this group in Contentstack SSO user settings.

To invite external users, disable **Strict Mode** and invite them as usual from Contentstack from **Organization Settings**. Remember to select the **Allow login without SSO** checkbox.
