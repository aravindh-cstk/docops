---
title: "Dashboard Fails to Load or “Cannot Access Entry” Error Despite Admin Permissions"
description: "Dashboard Fails to Load or “Cannot Access Entry” Error Despite Admin Permissions"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/05-organization-stack-invitations/08-dashboard-fails-to-load-or-cannot-access-entry-error-despite-admin-permissions
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: cs5393eb43946b8633
---

# Dashboard Fails to Load or “Cannot Access Entry” Error Despite Admin Permissions

A user with confirmed administrator-level permissions may be able to log in but find that the stack dashboard fails to load, or that opening any entry returns a “cannot access entry” error stating the page is unavailable.

**Root Cause**

Failed network requests to the /extensions API can prevent the dashboard from rendering or entries from loading, even when the user's permissions and role are correctly configured.

**Resolution**

1.  Confirm the affected user has been granted the correct permissions and role within the stack.
2.  Have Contentstack Support remove the affected user from the organization.
3.  Have the organization admin re-add the user with the same role.

After re-adding the user, verify that the dashboard loads and that entries can be opened without the “cannot access entry” error.
