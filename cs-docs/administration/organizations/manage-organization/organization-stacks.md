---
title: "Organization Stacks"
description: "Learn how to manage and delete stacks in Contentstack. Discover detailed steps for organization administrators and stack owners."
url: /administration/organization-stacks
uid: bltd6831aed4d5b6d2a
---

# Organization Stacks

## Organization Stacks

The **Stacks** tab in Administration lists every [stack](/docs/headless-cms/about-stack) in your organization, with its owner, its number of users, and when it was created. The Organization Owner can also delete a stack from this tab.

## Prerequisites

-   [Contentstack account](/login)
-   To view the Stacks tab: the [Organization Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) role
-   To delete a stack: the Organization Owner role, or [ownership](/docs/headless-cms/types-of-roles#owner) of that stack

## What You Will Learn

-   How to view the stacks in your organization.
-   How to delete a stack as the Organization Owner.
-   How to delete a stack as its owner.

## View Stacks in Your Organization

To view the stacks in your organization, sign in to your [Contentstack account](/login) and perform the following steps:

1.  Click the **App Switcher** icon in the top-right corner and select **Administration**.
2.  Click the **Stacks** tab.

The list shows the following for each stack:

-   **Name**: The name of the stack
-   **Owner**: The name of the stack owner
-   **Email Address**: The email address of the stack owner
-   **Users**: The number of users in the stack
-   **Created At**: The date and time the stack was created
-   **Actions**: The option to delete the stack, available only to the Organization Owner

Use **Search stacks** to find a stack by name, and **Refresh List** to reload the list. **Table Settings** lets you choose which columns appear.

![Stacks tab in Administration, listing each stack with its name, owner, owner's email address, number of users, and creation date](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amec09cbab1611c46c/fd06166f2e68944c6e759413/organization-stacks-list.png)

## Delete a Stack

**Note:** Only the [Organization Owner](/docs/administration/about-administration-roles) or the [stack owner](/docs/headless-cms/types-of-roles#owner) can delete a stack. The Organization Owner deletes it from Administration. The stack owner deletes it from the stack's settings.

### As the Organization Owner

To delete a stack from Administration, sign in to your [Contentstack account](/login) and perform the following steps:

1.  Click the **App Switcher** icon in the top-right corner and select **Administration**.
2.  Click the **Stacks** tab.
3.  In the row of the stack you want to delete, click the actions icon under **Actions**.
4.  Confirm the **Delete** action.

The stack is permanently deleted.

### As the Stack Owner

The owner of a stack can delete it from the stack's settings. To do so, sign in to your [Contentstack account](/login), go to the stack you want to delete, and perform the following steps:

1.  Click the “Settings” icon in the left navigation panel and select **Stack**.
2.  On the **Stack Settings** page, click the **Delete Stack** button.
3.  Confirm the **Delete** action to delete the stack permanently.

**Warning:** Deleting a stack permanently deletes all content stored in that stack.

## Related Resources

-   [Delete stack (Content Management API)](/docs/developers/apis/content-management-api/stacks#delete-stack)
-   [Get all stacks in an Organization (Administration API)](/docs/developers/apis/administration-api/organizations#get-all-stacks-in-an-organization)
