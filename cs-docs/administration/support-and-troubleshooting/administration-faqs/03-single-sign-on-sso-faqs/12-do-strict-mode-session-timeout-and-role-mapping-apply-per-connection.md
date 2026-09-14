---
title: "Do strict mode, session timeout, and role mapping apply per connection?"
description: "Do strict mode, session timeout, and role mapping apply per connection?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/12-do-strict-mode-session-timeout-and-role-mapping-apply-per-connection
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: csc115d485a82fc774
---

# Do strict mode, session timeout, and role mapping apply per connection?

Session timeout and IdP role mapping are per connection. A user's session length and mapped roles come from the connection that user signed in through.

Strict mode behaves differently. You set it on a connection, but it applies to the whole organization: if any **enabled** connection has strict mode on, no one signs in to the organization without SSO. Because of this, only one connection holds the strict mode toggle at a time, and a disabled connection does not contribute to the organization's strict state.
