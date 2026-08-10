---
title: "Add a New User"
description: "steps to add a new user in the stack"
url: /headless-cms/add-a-new-user
---

# Add a New User

## Add a New User

A [user](/docs/headless-cms/about-stack-users) with the required permissions can invite other users to collaborate on a [stack](/docs/headless-cms/about-stack).

**Note:** By default, the [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), and [Developer](/docs/headless-cms/types-of-roles#developer) roles have the right to invite other users to a stack. A user added to a stack can access and perform actions across branches present in the stack as per the roles assigned to them. Refer to our [Global Modules](/docs/headless-cms/global-modules) document for more information.

To add a new user in the stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to the stack where you want to add a user  
    
2.  Click the “Settings” icon on the left navigation panel, and select **Users & Roles**. This will open the **Users & Roles** page where you can see the list of all the existing users (collaborators) of the stack along with their details.
3.  Click on the **Invite User** button located at the top right corner of the page.
4.  The **Invite User** forms opens up where you can add the following details:
    1.  **Email**: Enter the email address(es) of the user(s) you want to invite and share the stack with
    2.  **Roles**: Select the [role(s)](/docs/headless-cms/about-stack-roles) that you want to assign to the new user
    3.  **Message** (optional): Enter a short message that goes along with the invitation to the user![Add_a_New_User_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaa1701f258fa3b72/60bf7ea3f8aee612d39966be/Add_a_New_User_no_highlight.png)
5.  Click on **Invite**.

The invited user will receive an invitation email. Once the user accepts the invitation, he/she can collaborate with you on the specified stack.  

## API Reference

To add/invite a new user in your stack via API request, refer to the [Share a stack](/docs/developers/apis/content-management-api/stacks#share-a-stack) API request.
