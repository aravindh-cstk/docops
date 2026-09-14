---
title: "How does Contentstack decide which identity provider a user signs in through?"
description: "How does Contentstack decide which identity provider a user signs in through?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/06-how-does-contentstack-decide-which-identity-provider-a-user-signs-in-through
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs95d3c58afbd58d1d
---

# How does Contentstack decide which identity provider a user signs in through?

The SSO ID in the login URL decides it. Contentstack does not display an identity provider selection screen and does not route users by email domain.

Each connection has its own login URL built from its SSO ID, and you distribute the correct URL to the users who authenticate through that connection. Copy the URL from the connection's quick-action menu using **Copy URL**.
