---
title: "Marketplace App Permissions: \"403 Forbidden\""
description: "Marketplace App Permissions: \"403 Forbidden\""
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/02-app-permissions-ui-visibility/03-marketplace-app-permissions-403-forbidden
doc_type: faq
_cms_section_uid: csfbea7c22c80651b0
_cms_faq_uid: csdbdf5309ea7994f8
---

# Marketplace App Permissions: "403 Forbidden"

An app fails to perform actions (like updating an entry) and returns a 403 error, despite being installed.

**Resolution**

1.  Apps use **Management Tokens** with specific roles. Ensure the role assigned to the app during installation has "Write" access.
2.  If the app uses a **User Token**, ensure the user who installed the app has not been removed from the stack.
3.  Update the app's permissions in the **Stack > Settings > Apps** section.

The app successfully performs the restricted action (e.g., saving an entry).
