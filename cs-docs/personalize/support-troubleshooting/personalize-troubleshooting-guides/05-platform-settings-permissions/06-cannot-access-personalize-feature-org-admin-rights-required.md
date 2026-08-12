---
title: "Cannot Access Personalize Feature - Org Admin Rights Required"
description: "Cannot Access Personalize Feature - Org Admin Rights Required"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/05-platform-settings-permissions/06-cannot-access-personalize-feature-org-admin-rights-required
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: csa416e1af715955dc
---

# Cannot Access Personalize Feature - Org Admin Rights Required

A user is unable to access the Contentstack Personalize feature despite being a member of the organization. Personalize does not appear or is inaccessible from the user's account.

**Root Cause**

Access to Contentstack Personalize requires organization admin or owner rights. Regular organization member roles do not grant access to the feature.

**Resolution**

1.  Verify the user's current role in the Contentstack organization settings. If the role is "Member" rather than "Admin" or "Owner," the user will not be able to access Personalize.
2.  Request that an existing organization admin or owner elevate the user's role to admin, or add the user as a collaborator on the specific Personalize project.
3.  Once the role is updated, ask the user to log out and log back in, then navigate to the Personalize section to confirm access.

Organization admins and owners have full access to Personalize. Collaborators added to a specific project can view and work within that project. Members without either role will not see or be able to access Personalize.
