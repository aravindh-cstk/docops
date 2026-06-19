---
title: "[Set Up Your Project] - Delete a Role"
description: Delete a custom role in a Contentstack stack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-a-role
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Delete a Role

This page explains who can delete a custom role in a Contentstack stack and how to delete it using the Contentstack web app, with a link to the API request for deleting roles programmatically. It is intended for stack owners and users with appropriate roles who manage access control in a stack.

## Delete a Role

Only the stack [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), or users assigned the [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and [developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) roles and who have created a specific [custom role](/docs/developers/invite-users-and-assign-roles/types-of-roles#custom-role), can delete that role.

To delete a custom role, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to the [stack](/docs/developers/set-up-stack/about-stack), navigate to the “Settings” icon on the left navigation panel, and select **Users & ****Roles**.
- Click the **Roles** tab.
- Hover over the role you want to delete, click the “Delete” icon (Trash bin) that appears at the extreme end.
- Confirm the **Delete** action to delete the role.

Once you delete the role, the user(s) associated with that specific role will not have the right to make any changes to the stack or to the content within.

**Note**: The stack owner can delete all the roles irrespective of the role being created by any other user.

## API Reference

To delete a role via API request, refer to the [Delete role](/docs/developers/apis/content-management-api#delete-role) API request.

## Common questions

**Q: Who can delete a custom role?**  
A: Only the stack owner, or users assigned the admin and developer roles who have created that specific custom role, can delete it.

**Q: What happens to users assigned to a role after it is deleted?**  
A: The user(s) associated with that specific role will not have the right to make any changes to the stack or to the content within.

**Q: Can the stack owner delete roles created by other users?**  
A: Yes, the stack owner can delete all the roles irrespective of the role being created by any other user.

**Q: Is there an API to delete a role?**  
A: Yes, refer to the [Delete role](/docs/developers/apis/content-management-api#delete-role) API request.