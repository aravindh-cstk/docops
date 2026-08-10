---
title: "Delete a Role"
description: "steps to delete a custom role"
url: /headless-cms/delete-a-role
---

# Delete a Role

## Delete a Role

Only the stack [owner](/docs/headless-cms/types-of-roles#owner), or users assigned the [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) roles and who have created a specific [custom role](/docs/headless-cms/types-of-roles#custom-role), can delete that role.

To delete a custom role, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to the [stack](/docs/headless-cms/about-stack), navigate to the “Settings” icon on the left navigation panel, and select **Users &** **Roles**.
2.  Click the **Roles** tab.
3.  Hover over the role you want to delete, click the “Delete” icon (Trash bin) that appears at the extreme end.
4.  Confirm the **Delete** action to delete the role.

Once you delete the role, the user(s) associated with that specific role will not have the right to make any changes to the stack or to the content within.

**Note:** The stack owner can delete all the roles irrespective of the role being created by any other user.

## API Reference

To delete a role via API request, refer to the [Delete role](/docs/developers/apis/content-management-api/roles#delete-role) API request.
