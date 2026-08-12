---
title: "Transferring Ownership of a Launch Project"
description: "Transferring Ownership of a Launch Project"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/08-project-account-management/01-transferring-ownership-of-a-launch-project
doc_type: faq
_cms_section_uid: csdf5c487bad88febc
_cms_faq_uid: cs54ec3c4537066c1e
---

# Transferring Ownership of a Launch Project

When a staff member who originally configured a Contentstack Launch project leaves the organization, the team needs to transfer project ownership and access to another user without losing project configurations or deployment history.

**Root Cause**

Launch project access is tied to user accounts within the Contentstack organization. Transferring ownership requires inviting the new owner, assigning the appropriate role, and removing the departing user—there is no single-click ownership transfer button.

**Resolution**

1.  Log in to Contentstack and navigate to your organization settings.
2.  Invite the new owner by adding them as a user to the organization with Owner or Admin permissions.
3.  Ensure the new user accepts the invitation and can access the relevant stack and Launch project.
4.  Remove the departing user from the stack and organization once ownership has been confirmed.
5.  Refer to the official Contentstack documentation on inviting users, removing users, and transferring stack ownership for detailed steps specific to your plan.

The issue is resolved when the new owner can access the Launch project, view all environments and deployment history, and perform administrative actions independently.
