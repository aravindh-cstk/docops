---
title: "What does the primary connection control?"
description: "What does the primary connection control?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/08-what-does-the-primary-connection-control
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: csfa0a86c676effb9c
---

# What does the primary connection control?

The primary connection is the organization's default identity provider. It determines the SSO login link that appears in organization invitation emails.

The primary connection does not route sign-in. A user signs in through whichever connection's login URL they visit, whether or not that connection is the primary one.

The following rules govern the primary connection:

-   Only an enabled connection can be marked as primary.
-   You cannot disable the primary connection while other connections are enabled. Disabling the only connection in the organization is allowed.
-   You cannot delete the primary connection. To remove it, mark a different connection as primary first, then disable and delete the old one.
-   If every connection is disabled and you then enable a connection that is not the primary one, Contentstack promotes it to primary.
