---
title: "If SSO is already enabled for my organization, does enabling IdP Role Mapping cause any change?"
description: "If SSO is already enabled for my organization, does enabling IdP Role Mapping cause any change?"
url: /administration/troubleshooting-and-faqs/administration-faqs/04-role-mapping-faqs/02-if-sso-is-already-enabled-for-my-organization-does-enabling-idp-role-mapping-cau
doc_type: faq
_cms_section_uid: csd56aae73f06f20ce
_cms_faq_uid: cs055fabb063851d04
---

# If SSO is already enabled for my organization, does enabling IdP Role Mapping cause any change?

Yes. Only the [roles](/docs/administration/about-administration-roles) received from your IdP for the users will be honored. This means that, on enabling IdP Role Mapping, the existing roles assigned to the users will be overridden by the roles assigned to IdP groups. This, however, is not applicable for external users (i.e., users who log in without [SSO](/docs/administration/about-single-sign-on-sso) to your SSO-enabled organization).

Please note that there is no way to revert the changes that were overridden by your IdP roles. The roles that were assigned to users prior to enabling IdP Role Mapping are erased.
