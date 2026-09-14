---
title: "What happens if a user's IdP roles do not match any mapping?"
description: "What happens if a user's IdP roles do not match any mapping?"
url: /administration/support-and-troubleshooting/administration-faqs/04-role-mapping-faqs/03-what-happens-if-a-user-s-idp-roles-do-not-match-any-mapping
doc_type: faq
_cms_section_uid: csd56aae73f06f20ce
_cms_faq_uid: cs2b731b94c8dc2d52
---

# What happens if a user's IdP roles do not match any mapping?

The sign-in is denied. The user cannot access the organization through that connection until a matching mapping exists.

**Warning**: Organization owners are exempt and are never stripped of their roles, so testing successfully as the owner does not prove that other users can sign in. Before you enable IdP role mapping on a connection, confirm that every group you expect to sign in has a matching mapping, and that the **Role Delimiter** you set matches the separator your IdP uses in its roles claim.
