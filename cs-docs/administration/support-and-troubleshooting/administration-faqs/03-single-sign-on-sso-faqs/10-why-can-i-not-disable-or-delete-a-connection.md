---
title: "Why can I not disable or delete a connection?"
description: "Why can I not disable or delete a connection?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/10-why-can-i-not-disable-or-delete-a-connection
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cseac55074b0f78f54
---

# Why can I not disable or delete a connection?

Contentstack blocks these actions in the following cases:

-   **The connection is the primary one and other connections are enabled.** Mark a different connection as primary, and then disable this one.
-   **The connection is the primary one and you are trying to delete it.** The primary connection is never deletable. Mark a different connection as primary first.
-   **The connection is still enabled and you are trying to delete it.** Disable it first. Disabling is the reversible step; deleting is permanent.
-   **Your plan does not include support for multiple identity providers.** Deleting a connection requires that support.
