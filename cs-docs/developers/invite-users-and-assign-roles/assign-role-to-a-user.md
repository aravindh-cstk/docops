---
title: "[Set Up Your Project] - Assign Role to a User"
description: Assign Role to a User in Contentstack and understand permission resolution for multiple roles.
url: https://www.contentstack.com/docs/headless-cms/assign-role-to-a-user
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Assign Role to a User

This page explains how to assign or update roles for existing stack users in Contentstack, who is allowed to assign roles, and how permissions are resolved when a user has multiple roles. Use it when managing user access and permissions across stacks, branches, and aliases.

## Assign Role to a User

**Note**: Only the stack [owner](./types-of-roles.md#owner), [admins](./types-of-roles.md#admin), and users assigned [developer](./types-of-roles.md#developer) roles, who has invited a specific [user](./about-stack-users.md), can assign a particular role to that user. Any role you assign to a stack user will be reflected across all the branches of the stack. That user role will be able to access data of only the allowed branch(es) or branches associated with the allowed alias(es). Refer to our [Global Modules](../branches/global-modules.md) document for more information.

To update a role assigned to an existing user, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md), navigate to the “Settings” icon on the left navigation panel, and select **Users & Roles**. This opens the **Users** page where you can see a list of existing users in the stack.
- Click on the user to whom you want to assign a specific role.
- In the **Update User** window, select the role(s) from the **Roles** dropdown menu.
- Click on **Update**.

**Note**: The stack owner can assign roles to all users of the stack.

Now, the user, whose role is changed, will have updated rights over the stacks and to the content within.

**Additional Resource**: You can assign a role to users when you add them. Follow the steps mentioned in the [Add a New User](./add-a-new-user.md) article.

## Permission Resolution for Multiple Roles

When you are assigned more than one role, Contentstack evaluates permissions from all your roles together. Your effective permissions are the union of all granted permissions. If your roles grant different levels of access for the same resource, the most permissive access applies.

**Example**: If one role grants *read* permission and another grants *write* permission on the same content type, you will have the *write* access.

## Common questions

**Q: Who can assign a role to a user in a stack?**  
A: Only the stack owner, admins, and users assigned developer roles who has invited a specific user can assign a particular role to that user.

**Q: Do role changes apply across branches?**  
A: Any role you assign to a stack user will be reflected across all the branches of the stack.

**Q: What happens if a user has multiple roles?**  
A: Contentstack evaluates permissions from all your roles together; effective permissions are the union of all granted permissions, and the most permissive access applies for the same resource.

**Q: Can roles be assigned when adding a new user?**  
A: Yes. You can assign a role to users when you add them by following the steps in the [Add a New User](./add-a-new-user.md) article.