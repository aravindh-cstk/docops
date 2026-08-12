---
title: "Resolving Access Limited Error for Non-Admin Users in Launch"
description: "Resolving Access Limited Error for Non-Admin Users in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/08-project-account-management/05-resolving-access-limited-error-for-non-admin-users-in-launch
doc_type: faq
_cms_section_uid: csdf5c487bad88febc
_cms_faq_uid: cs464f2236d361deef
---

# Resolving Access Limited Error for Non-Admin Users in Launch

A user attempting to access Contentstack Launch sees an “Access Limited” error and cannot view any Launch projects, even though they are a member of the organization.

**Root Cause**

Access to Launch projects requires organization-level Admin permissions. Users without this elevated role see a restricted view and cannot access project data. The error is not a technical failure, it reflects the user’s permission scope.

**Resolution**

1.  Confirm that the affected user does not hold the organization-level Admin role by reviewing the organization’s user list.
2.  Request that an existing organization Admin grants the user the required role level to access Launch.
3.  Once the permission change is applied, the user should log out and log back in to refresh their session.
4.  Verify that the user can now view and interact with the Launch dashboard and associated projects.

The issue is resolved when the user can access Launch projects without encountering the “Access Limited” error.
