---
title: "Referenced Content Type Not Accessible - Role Missing Access"
description: "Referenced Content Type Not Accessible - Role Missing Access"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/35-referenced-content-type-not-accessible-role-missing-access
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs8157852c998c441f
---

# Referenced Content Type Not Accessible - Role Missing Access

Client users encounter: ‘The referenced content type(s) do not exist or are not accessible’ when viewing a specific entry. The entry works for users with higher permissions.

**Root Cause**

The user’s role does not have Read access to the referenced content type. Contentstack enforces content type access at the role level.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and open the affected role.
2.  Under Content Types, add the inaccessible content type and grant at least Read access.
3.  For read-only reference resolution (no edits needed), grant Read-only to allow the reference to resolve without permitting modifications.
4.  Save the role and ask affected users to log out and back in.

After updating the role, reload the affected entry and confirm the referenced content type resolves without the access error.
