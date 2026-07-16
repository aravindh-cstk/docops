---
title: "[AM2.0] - Add Users to Space"
description: Instructions for inviting users to a specific space from Space Settings and assigning space-level roles.
url: https://www.contentstack.com/docs/assets/add-users-to-space
product: Contentstack
doc_type: how-to
audience:
  - administrators
  - developers
  - asset-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Add Users to Space

This page explains how to invite users to a specific space in Contentstack and assign space-level roles. It is intended for admins or managers who control space access and should be used when granting new or existing organization users access to a particular space.

## Add Users to Space

You can add users to a specific **space** directly from **Space Settings** to grant them access and assign space-level roles.

**Note:** If the invited user is not already part of your Contentstack organization, Contentstack adds the user to the organization with the **Member** role by default.

To add users to a space, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets** through “App Switcher” and open the required space.
- Navigate to **Space Settings** > **Users & Roles**.
- On the **Users** tab, click **+ Invite User**.
- Enter one or more email addresses (comma-separated).
- Select the space role(s) to assign (e.g., **Space Admin**, **Asset Developer**, **Asset Manager**, or a custom space role).
- Click **Invite** to send the invitation.

The invited user gains access to the space after accepting the invitation.

**Note:**
- Users must accept the invitation before they can access the space.
- Space access is required even if the user already has an organization-level or product-level role.
- You can assign multiple space roles if permitted by your organization’s role configuration.

## Common questions

**Q: What role is assigned if the invited user is not already in the organization?**  
A: Contentstack adds the user to the organization with the **Member** role by default.

**Q: Can a user access the space immediately after being invited?**  
A: No, users must accept the invitation before they can access the space.

**Q: Do users with organization-level or product-level roles still need space access?**  
A: Yes, space access is required even if the user already has an organization-level or product-level role.

**Q: Can I assign more than one space role to a user?**  
A: Yes, you can assign multiple space roles if permitted by your organization’s role configuration.