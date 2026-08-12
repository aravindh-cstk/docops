---
title: "Organization Stacks"
description: "Learn how to manage and delete stacks in Contentstack. Discover detailed steps for organization administrators and stack owners."
url: /administration/organization-stacks
---

# Organization Stacks

## Organization Stacks

The **Stacks** tab of the [Organization Settings](/docs/administration/organization-settings-overview) page lists every stack created under the organization. From this page, you can view stack details and delete a stack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   [Organization Owner](/docs/administration/about-administration-roles) or [Stack Owner](/docs/headless-cms/types-of-roles) permissions

## What You Will Learn

-   How to view the list of stacks in an organization.
    
-   How to delete a stack as an Organization Owner.
    
-   How to delete a stack as a Stack creator/owner.
    

## View Stacks in Organization

To access the Stacks settings page, Log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
2.  Click on the **Stacks** tab.

Here, you will find the following basic information related to the stacks:

-   **Name**: Name of the stack
-   **Owner**: Displays the name of the stack owner
-   **Email Address**: Email ID of the stack owner
-   **Users**: Number of users added in the stack
-   **Created At**: Date and time of stack creation
-   **Actions**: Allows you to delete a stack

![Organization Stacks settings list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e4367932fc3379a/66795eb93a5f4973fdaad232/Delete_Stack_via_Org_Admin_1.png)

From this page, you can only **Delete** a stack.

## Delete a Stack

**Note:** Only the [Organization Owner](/docs/administration/about-administration-roles) or [Stack owner](/docs/headless-cms/types-of-roles#owner) has the right to delete a stack.

Let us look in detail the steps that need to be performed by the respective roles.

### Organization Owner

To delete a stack through the **Settings** page, perform the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
3.  Select the **Stacks** settings option, and click on the ellipses under the **Actions** column.
    
    **Note:** Only Organization Owner can delete a stack from the Org Admin settings.
    
    ![Delete a stack from the Actions column in Org Admin settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6babce2d4d98e620/66795d8a99587f682df4df97/Delete_Stack_via_Org_Admin_(1).png)
4.  Confirm the **Delete** action.

Your stack will now be permanently deleted.

### Stack Owner

There's an alternative method of deleting stacks through the Stack Settings page. This method can be performed by the Stack Creator/Owner. To delete a stack, perform the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login) and go to the stack that you want to delete.
2.  Click the “Settings” icon on the left navigation panel and select **Stack**.
3.  On the **Stack Settings** page, click on **Delete Stack** button. ![Delete Stack button on the Stack Settings page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7425ac3e2caa6010/66796204612ffe5a902893a2/Delete_Stack_via_Org_Admin_3.png)
4.  Confirm the **Delete** action to delete your stack permanently.

**Warning:** Deleting a stack permanently deletes all content stored within that stack.

## Related Resources

-   [Delete stack (Content Management API)](/docs/developers/apis/content-management-api/stacks#delete-stack)
-   [Get all stacks in an Organization (Administration API)](/docs/developers/apis/administration-api/organizations#get-all-stacks-in-an-organization)
