---
title: "What happens to signed-in users when I disable or delete a connection?"
description: "What happens to signed-in users when I disable or delete a connection?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/11-what-happens-to-signed-in-users-when-i-disable-or-delete-a-connection
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs43d767065d1b12d3
---

# What happens to signed-in users when I disable or delete a connection?

The two actions differ:

-   **Disable**: sessions that are already active continue until their session timeout elapses. Only new sign-in attempts are blocked.
-   **Delete**: users signed in through that connection are signed out immediately. There is no grace period, and deleting is permanent.
