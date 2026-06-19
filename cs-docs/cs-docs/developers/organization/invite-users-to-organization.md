---
title: "[Organization] - Invite Users to Organization"
description: Invite users to your Contentstack organization to enable seamless collaboration across your team.
url: https://www.contentstack.com/docs/administration/invite-users-to-organization
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: unknown
---

# [Organization] - Invite Users to Organization

This page explains how to invite users to a Contentstack organization (including SSO-enabled organizations) and where to find related API references. It is intended for organization owners/admins who manage user access and roles, and should be used when onboarding new team members or updating organization access.

## Invite Users to Organization

Invite users to your Contentstack organization to enable seamless collaboration across your team.

To invite users to an organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to your desired organization, click the “App Switcher” icon and select **Administration** from the list.
- Navigate to **Users** and click **Invite User**.
- On the **Invite User** page, enter the email address of the users to invite.**Note**: The selected roles and permissions will apply to all the email IDs mentioned. To add users with different set of permissions, the ideal approach would be to add them separately.
- In the **CMS** section, click **Manage Roles**. This opens a sidebar displaying existing stack-role assignments for the selected users.Select the stacks to which you want to assign roles.
- Choose one or more roles.
- Click **Save** to confirm your selections.**Note:** If no CMS level roles are selected for the user(s), they will not be able to access any of the stacks.
- In the **Administration** section, click **Manage Roles**. The sidebar displays available product roles.Select the appropriate roles for the users.
- Click **Save** to confirm.**Note:** To successfully send the invitation, you must assign at least one role from the Administration section.
- Once done, click **Invite** to send the invitation.

The invited users will receive an email notification. After accepting the invitation, they will be added to the organization with the assigned roles and access.

**Additional Resources: **Learn more about organization [roles](/docs/developers/organization/organization-roles/) in Contentstack.

## Invite Users to SSO-enabled Organizations

For organizations with [Single Sign-On (SSO)](/docs/developers/single-sign-on/about-single-sign-on-sso/) enabled, the invitation process remains the same. However, if “[Strict Mode](/docs/developers/single-sign-on/set-up-sso-in-contentstack#user-management-in-contentstack)” is disabled, you see the **Allow Access without SSO** checkbox. Select this option to let the invited user access the SSO-enabled organization using their Contentstack credentials instead of IdP credentials.

## API Reference

- To add users to the organization via API, refer to the [Add users to Organization](/docs/developers/apis/content-management-api#add-users-to-organization) request.
- To resend pending organization invitations, via API refer to the [Resend pending Organization invitation](/docs/developers/apis/content-management-api#resend-pending-organization-invitation) request.
- To get all organization invitations via API, refer to the [Get all Organization invitations](/docs/developers/apis/content-management-api#get-all-organization-invitations) request.

## Common questions

**How do I ensure invited users can access stacks?**  
Assign CMS level roles in the **CMS** section; **Note:** If no CMS level roles are selected for the user(s), they will not be able to access any of the stacks.

**What is required to successfully send an invitation?**  
Assign at least one role from the **Administration** section; **Note:** To successfully send the invitation, you must assign at least one role from the Administration section.

**Do SSO-enabled organizations use a different invitation process?**  
For organizations with SSO enabled, the invitation process remains the same, with the additional **Allow Access without SSO** option available when “Strict Mode” is disabled.

**Where can I find API endpoints for invitations?**  
See the **API Reference** section for links to add users, resend pending invitations, and get all organization invitations via API.