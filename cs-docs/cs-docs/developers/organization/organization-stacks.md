---
title: "[Organization] - Organization Stacks"
description: Manage and delete stacks under an organization in Contentstack, including role-based deletion steps and related API references.
url: https://www.contentstack.com/docs/administration/organization-stacks
product: Contentstack
doc_type: guide
audience:
  - developers
  - owners-and-admins
version: unknown
last_updated: 2026-03-25
---

# [Organization] - Organization Stacks

This page explains where to find the Organization Stacks list in Contentstack, what information is available there, and how Organization Owners or Stack creators/owners can delete a stack. Use it when you need to manage stacks at the organization level or permanently delete a stack.

### Organization Stacks

Under the **Stacks** tab of the [Organization Settings](/docs/owners-and-admins/organization-settings-overview) page, you will see the list of [stacks](/docs/developers/set-up-stack/about-stack) created under the Organization.

To access the Stacks settings page, you need to perform the following steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login).
- Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
- Click on the **Stacks** tab.

Here, you will find the following basic information related to the stacks:
- **Name**: Name of the stack
- **Owner**: Displays the name of the stack owner
- **Email Address**: Email ID of the stack owner
- **Users**: Number of users added in the stack
- **Created At**: Date and time of stack creation
- **Actions**: Allows you to delete a stack

From this page, you can only **Delete** a stack.

## Delete a Stack

**Note:** Only the [Organization Owner](https://www.contentstack.com/docs/developers/organization/organization-roles#organization-owner) or [Stack creator/owner](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to delete a stack.

Let us look in detail the steps that need to be performed by the respective roles.

### Organization Owner

To delete a stack through the **Settings** page, perform the following steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login).
- Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
- Select the **Stacks** settings option, and click on the ellipses under the **Actions** column.**Note**: Only Organization Owner can delete a stack from the Org Admin settings.
- Confirm the **Delete** action.

Your stack will now be permanently deleted.

### Stack Creator/Owner

There's an alternative method of deleting stacks through the Stack Settings page. This method can be performed by the Stack Creator/Owner. To delete a stack, perform the following steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login) and go to the stack that you want to delete.
- Click the “Settings” icon on the left navigation panel and select **Stack**.
- On the **Stack Settings** page, click on **Delete Stack** button.
- Confirm the **Delete** action to delete your stack permanently.

**Warning**: Deletion of the stack will result in the permanent deletion of all the content stored within that stack.

## API Reference

You can refer to the following API calls:
- [Delete a Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/#delete-stack)
- [Get all stacks in an Organization](https://www.contentstack.com/docs/developers/apis/content-management-api/#get-all-stacks-in-an-organization)

## Common questions

**Q: Where do I find the list of stacks under an organization?**  
A: Under the **Stacks** tab of the [Organization Settings](/docs/owners-and-admins/organization-settings-overview) page.

**Q: Who is allowed to delete a stack?**  
A: Only the [Organization Owner](https://www.contentstack.com/docs/developers/organization/organization-roles#organization-owner) or the [Stack creator/owner](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles#owner).

**Q: What happens when a stack is deleted?**  
A: The stack is permanently deleted, and deletion will result in the permanent deletion of all the content stored within that stack.

**Q: Are there API calls related to organization stacks?**  
A: Yes. See [Delete a Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/#delete-stack) and [Get all stacks in an Organization](https://www.contentstack.com/docs/developers/apis/content-management-api/#get-all-stacks-in-an-organization).