---
title: "Assign Role to a User"
description: "steps to assign a role to a user"
url: /headless-cms/assign-role-to-a-user
---

# Assign Role to a User

## Assign Role to a User

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admins](/docs/headless-cms/types-of-roles#admin), and users assigned [developer](/docs/headless-cms/types-of-roles#developer) roles, who has invited a specific [user](/docs/headless-cms/about-stack-users), can assign a particular role to that user. Any role you assign to a stack user will be reflected across all the branches of the stack. That user role will be able to access data of only the allowed branch(es) or branches associated with the allowed alias(es). Refer to our [Global Modules](/docs/headless-cms/global-modules) document for more information.

To update a role assigned to an existing user, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), navigate to the “Settings” icon on the left navigation panel, and select **Users & Roles**. This opens the **Users** page where you can see a list of existing users in the stack.
2.  Click on the user to whom you want to assign a specific role.
3.  In the **Update User** window, select the role(s) from the **Roles** dropdown menu.
4.  Click on **Update**.

**Note:** The stack owner can assign roles to all users of the stack.

Now, the user, whose role is changed, will have updated rights over the stacks and to the content within.

**Additional Resource:** You can assign a role to users when you add them. Follow the steps mentioned in the [Add a New User](/docs/headless-cms/add-a-new-user) article.

### Permission Resolution for Multiple Roles

When you are assigned more than one role, Contentstack evaluates permissions from all your roles together. Your effective permissions are the union of all granted permissions. If your roles grant different levels of access for the same resource, the most permissive access applies.

**Example**: If one role grants _read_ permission and another grants _write_ permission on the same content type, you will have the _write_ access.
