---
title: "Organization Users"
description: "Manage organization users efficiently with our guide: invite, edit roles, remove users, reset MFA, export to CSV, and more. Explore now."
url: /administration/organization-users
uid: blt88e398f88e19a211
---

# Organization Users

## Organization Users

The **Users** section displays all users in your [organization](/docs/administration/about-organizations). It lets you invite, manage, and take action on organization users.

Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.

**Additional Resource:** Another way to manage users is through individual stacks. Refer to [Invite Users and Assign Roles](/docs/headless-cms/about-stack-users) for more information.

You can perform the following actions on organization users:

-   Invite new user(s) to your organization
-   Change organization role of existing user
-   Remove user(s) from your organization
-   Force password reset
-   Reset **Multi-Factor Authentication** (**MFA**)
-   Unlock Users
-   Export the user list to CSV
-   View and sort by last login date

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to invite, edit, and remove organization users.

-   How to force password resets, unlock users, and reset Multi-Factor Authentication (MFA).

-   How to export the user list to CSV and view last login details.


Let’s walk through each action.

## Invite New User(s)

To invite user(s) to your organization, perform the following steps:

1.  Click **Invite User**.![Invite User button on the Users tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8c34e529cf38e27f/4aa6173a6fe0f1b66d06e8d4/RBAC_Invite_User.png)
2.  Enter the email address of the user. To add multiple users, enter email addresses separated by a comma.
3.  In **Assign Product Access**, assign the roles each user needs:
    1.  One or more organization-level **Administration** roles. At least one Administration role is required, and the **Member** role is selected by default.
    2.  Product roles for each product, such as the CMS, Assets, and AgentOS.
    3.  Optionally, project-level roles for individual stacks, spaces, or AgentOS projects.
4.  Click **Invite**.

A user can hold more than one role at the same time. For example, a user can be both a Member and a Product Analytics Viewer.

**Note:** Only the organization [Owner and Admin](/docs/administration/about-administration-roles) role can invite new users.

**Additional Resource:** Refer to the [Invite Users to Organization](/docs/administration/invite-users-to-organization) documentation for more details, including steps for [Single Sign-On (SSO)](/docs/administration/about-single-sign-on-sso) enabled organizations.

## Edit a User

To update permissions for a user, perform the following steps:

1.  Click the user you want to edit or click the vertical ellipses in the **Actions** column and click **Edit**. This opens the **Edit User** page.![Edit option opening the Edit User page](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6efdbeb486a9b14c/24a548bbc0f9c8f3c4e5c1e5/RBAC_Edit_User.png?locale=en-us)
2.  On the **Edit User** page, update the following as required, then click **Update**:
    -   The organization-level **Administration** roles.
    -   The product roles for each product, such as the CMS, Assets, and AgentOS.
    -   The assigned stacks, spaces, or AgentOS projects, and the project-level roles for each.

## Remove a User

To remove a user from the organization, perform the following steps:

1.  Navigate to the user you want to remove, click the vertical ellipses in the **Actions** column, and click **Remove**.![Remove option in the Actions column](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f8d0ae7de732e95/6891b2400a46b0f55eef43c2/Organization_Users_4.png)
2.  In the **Remove User** modal, click **Remove** to confirm the action.

**Note:** Alternatively, you can also remove a user from the **Edit user** page.

**Warning:** Removing a user revokes their access to all stacks in the organization.

## Force Password Reset

To send a password reset email to a user:

1.  Select the checkboxes next to the users you want to send a password reset email to, and select **Force Password Reset**.![Force Password Reset action for selected users](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd884f8754a6bd05/6891aef574c4fdd1eb74a96a/Organization_Users_5.png)
2.  In the **Force Password Reset** modal, click **Continue** to confirm the action.

The user is forced to reset their password on their next login.

## Unlock Users

Manually unlock users who have been locked out due to failed login attempts.

To unlock users individually or in bulk:

1.  Click the vertical ellipsis in the **Action** column next to the locked user.![Unlock option for a locked user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0465f2f1b10ad97e/693aa8495bb1c13b1837e284/Unlock_Users_1.png)

    Or select up to **10 users** using the respective checkboxes.

    ![Bulk selection of locked users](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879e21d28d5d776/693aa84afe65010a443ecf9e/Unlock_Users_2.png)
2.  Click **Unlock User**.
3.  Review the selected users in the confirmation modal and click **Continue** or **Proceed** to restore access.

**Note:**

-   The **Unlock User** option is not available for:

    -   Users who are part of multiple Contentstack organizations
    -   Org owners

    In both cases, contact Contentstack [support](mailto:support@contentstack.com) to unlock the user.

-   The **Unlock User** button appears only if **all user selected in bulk** are unlockable. If one or more selected users are ineligible (e.g., multi-org users or organization owner or already unlocked user), the option will not be shown.

## Reset MFA

Reset MFA when a user cannot access their account. Common scenarios include lost or stolen devices, switching to a new device, account security concerns, or issues with the authenticator app.

To reset MFA for a user:

1.  Click the vertical ellipses in the **Actions** column of a user and select **Reset MFA**.![Reset MFA option in the Actions column](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3cf95dac6ccbb8c/6891aef6ef8ef11f13cbbf62/Organization_Users_6.png)
2.  In the **Reset Multi-Factor Authentication** modal, click **Proceed** to confirm the action.

The user receives an email with a link to reset their MFA configuration.

## Export Users List

Export details of all organization users in a **Comma-Separated Values** (**CSV**) file. The users are sorted alphabetically by their email address in CSV. You can open this CSV file using any spreadsheet application.

Click the “Export” icon to download the CSV file with all organization users.

![Export icon downloading the users CSV](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf27f4b3b0faa5fde/6891b31c3fd889343c634938/Organization_Users_7.png)

## View Last Logged-in Details of Users

The **Users** list also displays the most recent login timestamp for each user in the **Last Login At** column. You can sort the list by this column to easily identify recently or infrequently active users.

![Last Login At column in the Users list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf4f8ad207dd5a91/6891aef54964b85990d6da39/Organization_Users_8.png)

**Additional Resource:** To perform bulk actions on organization users, refer to our [Bulk Operations on Organization Users](/docs/administration/bulk-operations-on-organization-users) document for more details.

## Related Resources

-   [Add users to Organization](/docs/developers/apis/administration-api/organizations#add-users-to-organization)
-   [Resend pending Organization invitation](/docs/developers/apis/administration-api/organizations#resend-pending-organization-invitation)
-   [Get all Organization invitations](/docs/developers/apis/administration-api/organizations#get-all-organization-invitations)
-   [Get Organization users by email](/docs/developers/apis/administration-api/organizations#get-organization-users-by-email)
