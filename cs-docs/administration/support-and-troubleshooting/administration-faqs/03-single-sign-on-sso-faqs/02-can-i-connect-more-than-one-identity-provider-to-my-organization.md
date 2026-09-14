---
title: "Can I connect more than one identity provider to my organization?"
description: "Can I connect more than one identity provider to my organization?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/02-can-i-connect-more-than-one-identity-provider-to-my-organization
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs82fb02664258a9ba
---

# Can I connect more than one identity provider to my organization?

Yes. An organization holds up to five SAML 2.0 identity providers, each set up as a separate connection with its own certificate, session policy, role mapping, and login URL.

Multiple connections suit organizations whose users do not all live in the same identity system, such as a parent company and an acquired subsidiary on separate tenants, employees and contractors on different providers, or a staged migration from one provider to another where both stay live during the cutover.

If everyone in your organization authenticates through one identity system, a single connection is enough. For details, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).
