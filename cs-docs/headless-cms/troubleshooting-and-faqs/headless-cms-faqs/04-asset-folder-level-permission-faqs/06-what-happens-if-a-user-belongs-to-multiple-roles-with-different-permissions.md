---
title: "What happens if a user belongs to multiple roles with different permissions?"
description: "What happens if a user belongs to multiple roles with different permissions?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/04-asset-folder-level-permission-faqs/06-what-happens-if-a-user-belongs-to-multiple-roles-with-different-permissions
doc_type: faq
_cms_section_uid: cs271800b5e9eaa5c4
_cms_faq_uid: cs2eb0cbea60a15f01
---

# What happens if a user belongs to multiple roles with different permissions?

When a user belongs to multiple roles with varying [permissions](/docs/headless-cms/create-a-role#permissions-on-assets/):

-   **Permissive actions are merged**: If one role grants "Update" permission and another grants "Publish," the user will have both permissions.
-   **Cannot Do permissions take precedence**: If one role allows "Read" and another explicitly denies "Read," the restriction takes priority, and the user’s access is limited.

This ensures that restrictive permissions are prioritized for better control and security.
