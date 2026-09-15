---
title: "Invite Users to Organization"
description: "Streamline collaboration in Contentstack by inviting users to your organization. Learn how to manage roles and access with our step-by-step guide."
url: /administration/invite-users-to-organization
uid: blt57f98abc02126578
---

# Invite Users to Organization

## Invite Users to Organization

Invite users to your Contentstack organization to enable seamless collaboration across your team. This page shows you how to invite users, assign their roles during the invitation, and handle invitations in SSO-enabled organizations.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to invite one or more users to your organization.

-   How to assign CMS and Administration roles during the invitation.

-   How invitations work in SSO-enabled organizations.


## Invite Users

To invite users to an organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to your desired organization, click the “App Switcher” icon and select **Administration** from the list.

2.  Navigate to **Users** and click **Invite User**.![Invite User button on the Users page](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc1ac8505cb5f63e3/9b35abdd11858c77eb1638df/Invite_User_1.png?locale=en-us)
3.  On the **Invite User** page, enter the email address of the users to invite.

    **Note:** The selected roles and permissions will apply to all the email IDs mentioned. To add users with different set of permissions, the ideal approach would be to add them separately.

4.  In the **CMS** section, click **Manage Roles**. This opens a sidebar displaying existing stack-role assignments for the selected users.

    1.  Select the stacks to which you want to assign roles.
    2.  Choose one or more roles.
    3.  Click **Save** to confirm your selections.

        **Note:** If no CMS level roles are selected for the user(s), they will not be able to access any of the stacks.


    ![CMS Manage Roles sidebar with stack and role selections](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am0de390fd9d9b828c/9734554e27ae1c709acde3fe/Invite_User_2.png?locale=en-us)
5.  In the **Administration** section, click **Manage Roles**. The sidebar displays available product roles.

    1.  Select the appropriate roles for the users.
    2.  Click **Save** to confirm.

        **Note:** To successfully send the invitation, you must assign at least one role from the Administration section.


    ![Administration section Manage Roles sidebar](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8eca99b81985e75f/78abd1f064d2fd5f0798a51e/RBAC_Administration_Section.png?locale=en-us)
6.  Once done, click **Invite** to send the invitation.![Invite button sending the invitation](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1ab71403e15904cb/f1180568686f73458b4f4942/Invite_User_3.png?locale=en-us)

The invited users will receive an email notification. After accepting the invitation, they will be added to the organization with the assigned roles and access.

**Additional Resource:** Learn more about organization [roles](/docs/administration/about-administration-roles) in Contentstack.

## Invite Users to SSO-enabled Organizations

For organizations with [Single Sign-On (SSO)](/docs/administration/about-single-sign-on-sso) enabled, the invitation process remains the same. However, if “[Strict Mode](/docs/administration/set-up-sso-in-contentstack)” is disabled, you see the **Allow Access without SSO** checkbox. Select this option to let the invited user access the SSO-enabled organization using their Contentstack credentials instead of IdP credentials.

## Related Resources

-   [Add users to Organization](/docs/developers/apis/administration-api/organizations#add-users-to-organization)
-   [Resend pending Organization invitation](/docs/developers/apis/administration-api/organizations#resend-pending-organization-invitation)
-   [Get all Organization invitations](/docs/developers/apis/administration-api/organizations#get-all-organization-invitations)
