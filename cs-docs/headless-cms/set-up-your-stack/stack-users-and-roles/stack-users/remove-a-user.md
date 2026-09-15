---
title: "Remove a User"
description: "Learn how to efficiently remove users from your Contentstack stack, whether through UI steps or API requests, with this comprehensive guide."
url: /headless-cms/remove-a-user
uid: bltc44fdb87d1be36ee
---

# Remove a User

## Remove a User

A [user](/docs/headless-cms/about-stack-users) with the required permissions can remove an existing user from the [stack](/docs/headless-cms/about-stack).

**Note:** The [stack owner](/docs/headless-cms/types-of-roles#owner) has the right to remove any user from a stack. But, an admin or developer can only remove a user whom they added.

To remove a user, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to the stack from which you want to remove the user.
2.  Click the “Settings” icon on the left navigation panel, and select **Users & Roles**. The **Users & Roles** page opens up where you can see the list of users (collaborators) in the stack.
3.  Hover over the user you want to delete, click on the “Delete” icon (trash bin) that appears at the extreme right.
4.  Confirm the **Remove** action to permanently remove the user from the stack.

## API Reference

To remove a user from the stack via API request, refer to the [Unshare a stack](/docs/developers/apis/content-management-api/stacks#unshare-a-stack) API request.
