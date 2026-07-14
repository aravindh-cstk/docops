---
title: "[Organization] - Organization Users"
description: Manage organization users in the Users section, including inviting, editing, removing, unlocking, resetting MFA, exporting, and viewing last login details.
url: https://www.contentstack.com/docs/administration/organization-users
product: Contentstack
doc_type: guide
audience:
  - developers
  - owners-and-admins
version: v1
last_updated: 2026-03-25
---

# [Organization] - Organization Users

This page explains how to view and manage users in a Contentstack organization from the **Administration → Users** area, including common user actions (invite, edit roles, remove, unlock, reset MFA, export) and where to find related API references. It is intended for organization owners/admins and developers who administer organization access and user security.

### Item 1

#### Article section

##### Heading

Organization Users

##### Content

The **Users** section displays all users in your [organization](./about-organizations.md). It lets you invite, manage, and take action on organization users.

Navigate to **Administration** through “App Switcher”, then click the **Users** tab to view organization users.

**Additional Resource**: Another way to manage users is through individual stacks. Refer to [Invite Users and Assign Roles](/docs/developers/invite-users-and-assign-roles) for more information.

You can perform the following actions on organization users:
- Invite new user(s) to your organization
- Change organization role of existing user
- Remove user(s) from your organization
- Force password reset
- Reset **Multi-Factor Authentication** (**MFA**)
- Unlock Users
- Export the user list to CSV
- View and sort by last login date

Let’s walk through each action.

## Invite New User(s)
To invite user(s) to your organization, perform the following steps:
- Click **Invite User**.![RBAC_Invite_User.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8c34e529cf38e27f/4aa6173a6fe0f1b66d06e8d4/RBAC_Invite_User.png)
- Enter the email address of the user. To add multiple users, enter email addresses separated by a comma.
- Assign an organization role to the new user. You can only assign either the **Admin** or **Member** role.
- Optionally, assign stack-specific roles to the user.
- Click **Invite**.

**Note:** Only the organization [owner](./organization-roles.md#organization-owner) and users with [admin](./organization-roles.md#organization-admin) roles can invite new users.

**Additional Resource:** See our [Invite Users to an Organization](./invite-users-to-organization.md) document for more details, including steps for [Single Sign-On (SSO)](../single-sign-on/about-single-sign-on-sso.md) enabled organizations.

## Edit a User
To update permissions for a user, perform the following steps:
- Click on the user you want to edit or click the vertical ellipses in the **Actions** column and click **Edit**. This opens the **Edit user** page.![RBAC_Edit_User.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6efdbeb486a9b14c/24a548bbc0f9c8f3c4e5c1e5/RBAC_Edit_User.png?locale=en-us)
- Update roles under **Assign Organization Role** or the **Stack Role** as required, and click **Update**.

## Remove a User
To remove a user from the organization, perform the following steps:
- Navigate to the user you want to remove, click the vertical ellipses in the **Actions** column, and click **Remove**.![Organization_Users_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f8d0ae7de732e95/6891b2400a46b0f55eef43c2/Organization_Users_4.png)
- In the **Remove User** modal, click **Remove** to confirm the action.

**Note:** Alternatively, you can also remove a user from the **Edit user** page.

**Warning:** Removing a user revokes their access to all stacks in the organization.

## Force Password Reset
To send a password reset email to a user:
- Select the checkboxes next to the users you want to send a password reset email to, and select **Force Password Reset**.![Organization_Users_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd884f8754a6bd05/6891aef574c4fdd1eb74a96a/Organization_Users_5.png)
- In the **Force Password Reset** modal, click **Continue** to confirm the action.

The user is forced to reset their password on their next login.

## Unlock Users
Manually unlock users who have been locked out due to failed login attempts.

To unlock users individually or in bulk:
- Click the vertical ellipsis in the **Action** column next to the locked user.![Unlock_Users_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0465f2f1b10ad97e/693aa8495bb1c13b1837e284/Unlock_Users_1.png)Or select up to **10 users** using the respective checkboxes.![Unlock_Users_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879e21d28d5d776/693aa84afe65010a443ecf9e/Unlock_Users_2.png)
- Click **Unlock User**.
- Review the selected users in the confirmation modal and click **Continue** or **Proceed** to restore access.

**Note**:
- The **Unlock User** option is not available for:Users who are part of multiple Contentstack organizations
- Org owners

In both cases, contact Contentstack [support](mailto:support@contentstack.com) to unlock the user.
- The **Unlock User** button appears only if **all user selected in bulk** are unlockable. If one or more selected users are ineligible (e.g., multi-org users or organization owner or already unlocked user), the option will not be shown.

## Reset MFA
Reset MFA when a user cannot access their account. Common scenarios include lost or stolen devices, switching to a new device, account security concerns, or issues with the authenticator app.

To reset MFA for a user:
- Click the vertical ellipses in the **Actions** column of a user and select **Reset MFA**.![Organization_Users_6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3cf95dac6ccbb8c/6891aef6ef8ef11f13cbbf62/Organization_Users_6.png)
- In the **Reset Multi-Factor Authentication** modal, click **Proceed** to confirm the action.

The user receives an email with a link to reset their MFA configuration.

## Export Users List
Export details of all organization users in a **Comma-Separated Values** (**CSV**) file. The users are sorted alphabetically by their email address in CSV. You can open this CSV file using any spreadsheet application.

Click the “Export” icon to download the CSV file with all organization users.

## View Last Logged-in Details of Users
The **Users** list also displays the most recent login timestamp for each user in the **Last Login At** column. You can sort the list by this column to easily identify recently or infrequently active users.

 **Additional Resource:** To perform bulk actions on organization users, refer to our [Bulk Operations on Organization Users](./bulk-operations-on-organization-users.md) document for more details.

## API Reference
To manage organization users via API, refer to the following API requests:
- [Add users to Organization](../../../api-docs/api-detail/content-management-api.md#add-users-to-organization)
- [Resend pending Organization invitation](../../../api-docs/api-detail/content-management-api.md#resend-pending-organization-invitation)
- [Get all Organization invitations](../../../api-docs/api-detail/content-management-api.md#get-all-organization-invitations)
- [Get Organization users by email](../../../api-docs/api-detail/content-management-api.md#get-organization-users-by-email)

## Common questions

**How do I access the organization user management screen?**  
Navigate to **Administration** through “App Switcher”, then click the **Users** tab.

**Who can invite new users to the organization?**  
Only the organization owner and users with admin roles can invite new users.

**What happens when I remove a user from the organization?**  
Removing a user revokes their access to all stacks in the organization.

**Can I manage organization users via API?**  
Yes. See the links under **API Reference** for the relevant API requests.