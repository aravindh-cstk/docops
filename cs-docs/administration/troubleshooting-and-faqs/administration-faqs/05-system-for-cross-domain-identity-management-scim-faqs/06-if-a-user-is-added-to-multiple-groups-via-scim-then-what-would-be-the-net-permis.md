---
title: "If a user is added to multiple groups via SCIM, then what would be the net permission to the user?"
description: "If a user is added to multiple groups via SCIM, then what would be the net permission to the user?"
url: /administration/troubleshooting-and-faqs/administration-faqs/05-system-for-cross-domain-identity-management-scim-faqs/06-if-a-user-is-added-to-multiple-groups-via-scim-then-what-would-be-the-net-permis
doc_type: faq
_cms_section_uid: cs1238a36bbfe9f272
_cms_faq_uid: cs44e02e0762f05ed2
---

# If a user is added to multiple groups via SCIM, then what would be the net permission to the user?

If a user belongs to multiple groups, he/she will get the highest order of permission on the organization and stack(s). For example, user1 belongs to group1 and group2, and these groups have the following set of permissions:

-   Group1:[Organization Admin](/docs/administration/about-administration-roles)“[Developer](/headless-cms/types-of-roles#developer)” role in all stacks
-   Group2: [Organization Member](/docs/administration/about-administration-roles)“[Content manager](/headless-cms/types-of-roles#content-manager)” role in all stacks

In this case, user1 will be the admin of the organization and have the “Developer” and "Content manager" roles in all the stacks.
