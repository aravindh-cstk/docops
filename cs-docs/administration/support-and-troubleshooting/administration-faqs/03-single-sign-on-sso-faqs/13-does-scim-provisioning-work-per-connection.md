---
title: "Does SCIM provisioning work per connection?"
description: "Does SCIM provisioning work per connection?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/13-does-scim-provisioning-work-per-connection
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs60133fd82e7e3879
---

# Does SCIM provisioning work per connection?

No. System for Cross-domain Identity Management (SCIM) provisioning is configured once for the organization, and every connection shares it.

**Warning**: Do not push groups with the same name from more than one identity provider into the same organization. Duplicate group names cause provisioning conflicts on both the IdP side and the Contentstack side.
