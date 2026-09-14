---
title: "Does Contentstack support single logout (SLO)?"
description: "Does Contentstack support single logout (SLO)?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/16-does-contentstack-support-single-logout-slo
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: csa1a39d3cc56ed856
---

# Does Contentstack support single logout (SLO)?

No. Signing out of Contentstack ends only your Contentstack session: Contentstack does not send a logout request to your identity provider, so you remain signed in there. Signing out at the identity provider likewise does not end your Contentstack session. A Contentstack session ends when you sign out of Contentstack, or when the connection's session time-out elapses.
