---
title: "[Organization] - Change Organization Role of Existing Users"
description: "How to update the organization role and stack-level permissions for an existing user in Contentstack."
url: https://www.contentstack.com/docs/administration/change-organization-role-of-existing-users
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Organization] - Change Organization Role of Existing Users

This page explains how to change an existing user’s organization role (Admin or Member) and optionally update stack-level permissions in Contentstack. It is intended for organization admins who manage users and roles, and should be used when you need to update access levels for users already added to an organization.

## Change Organization Role of Existing Users

You can update the organization role of an existing user. Along with that, you can also update the stack-level permissions for a user.

To change [organization role](./organization-roles.md) of a user, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Select the organization from the dropdown in the header, and click on the “Org Admin” icon on the left navigation panel.
- In the **Settings** page, click on **Users**. This displays the list of users within the organization.
- Click on the user whose role you want to change. This opens the **Edit user** page.
- As per your requirement, change the organization role to **Admin** or **Member**. You can also change the **Stack Role** of the user.
- Click on **Update** once you are done updating the roles.

## API Reference

You can refer the [Get all roles in an Organization](../../../api-docs/api-detail/content-management-api.md#get-all-roles-in-an-organization) API request

## Common questions

**Q: Can I change both the organization role and the stack role for a user at the same time?**  
A: Yes, you can change the organization role and also change the **Stack Role** of the user.

**Q: Where do I find the user list for my organization?**  
A: In the **Settings** page, click on **Users** to view the list of users within the organization.

**Q: What organization roles can I assign from this flow?**  
A: You can change the organization role to **Admin** or **Member**.

**Q: Is there an API related to organization roles?**  
A: Yes, you can refer the [Get all roles in an Organization](../../../api-docs/api-detail/content-management-api.md#get-all-roles-in-an-organization) API request.