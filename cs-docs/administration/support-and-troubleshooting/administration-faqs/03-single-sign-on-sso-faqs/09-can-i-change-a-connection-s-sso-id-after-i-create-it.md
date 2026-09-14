---
title: "Can I change a connection's SSO ID after I create it?"
description: "Can I change a connection's SSO ID after I create it?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/09-can-i-change-a-connection-s-sso-id-after-i-create-it
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs2e29864b2d779c5f
---

# Can I change a connection's SSO ID after I create it?

No. The SSO ID is fixed for the life of the connection, because it forms part of the login URL and the ACS URL that your IdP application references. SSO IDs are also unique across all Contentstack organizations, so an ID already in use elsewhere is rejected even if no connection in your organization uses it.

When you mark a different connection as primary, you can transfer the current primary's SSO ID to it so that users keep the same login URL.

**Warning**: After you transfer an SSO ID, update the ACS URL in your IdP application to match. Until you do, sign-in through that connection fails.
