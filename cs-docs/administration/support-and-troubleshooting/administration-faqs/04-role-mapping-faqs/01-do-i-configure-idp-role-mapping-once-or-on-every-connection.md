---
title: "Do I configure IdP role mapping once, or on every connection?"
description: "Do I configure IdP role mapping once, or on every connection?"
url: /administration/support-and-troubleshooting/administration-faqs/04-role-mapping-faqs/01-do-i-configure-idp-role-mapping-once-or-on-every-connection
doc_type: faq
_cms_section_uid: csd56aae73f06f20ce
_cms_faq_uid: cs176828abab969196
---

# Do I configure IdP role mapping once, or on every connection?

On every connection. Each connection holds its own set of mappings between IdP roles and Contentstack roles, up to 200 mappings per connection.

Role mapping is currently supported for Okta, OneLogin, and Microsoft Entra ID.
