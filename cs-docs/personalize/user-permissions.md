---
title: "[Personalize] - User Permissions"
description: Roles, capabilities, and permissions for users in Contentstack Personalize projects, including how to invite and remove users.
url: https://www.contentstack.com/docs/personalize/user-permissions
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Personalize] - User Permissions

This page explains how user roles work in Contentstack Personalize, what capabilities and permissions each role has across project resources, and how authorized users can invite or remove users from a Personalize project.

### Item 1

#### Article section

##### Heading

User Permissions

##### Content

In Contentstack Personalize, 'users' are anyone who has been granted access to work on a project. These users can either contribute to the project's content and functionality or manage the project settings.

To control what each user can do, Contentstack Personalize utilizes 'roles.' These roles determine the specific actions a user is allowed to perform within the project based on their assigned level of access.

Essentially, roles define the boundaries of a user's permissions and responsibilities.

## Roles and Capabilities

| Roles | Capabilities |
|---|---|
| Organization Owner/Admin | Full access to all actions and settings at the organization level, including the ability to manage the project and its resources (Experiences, Audiences, Attributes, and Events). |
| Project Owner | Full access to all actions and settings at a project level, to manage the project and its resources (Experiences, Audiences, Attributes, and Events). |
| Project Member | Can view projects but cannot manage project-level settings. Can create, update, or delete resources (Experiences, Audiences, Attributes, and Events). |

## User Permissions

The following table outlines the permissions for each role across various resources:

| Resources | Actions | Org Owner/Admin | Project Owner | Project Member |
|---|---|---|---|---|
| Project | Create | check_circle | check_circle | cancel |
| Project | Update | check_circle | check_circle | cancel |
| Project | Connect/Disconnect stack | check_circle | check_circle | cancel |
| Project | Delete | check_circle | check_circle | cancel |
| Users | Invite | check_circle | check_circle | cancel |
| Users | Remove | check_circle | check_circle | cancel |
| Experiences | Create | check_circle | check_circle | check_circle |
| Experiences | Update | check_circle | check_circle | check_circle |
| Experiences | Delete | check_circle | check_circle | check_circle |
| Experience Versions | Create | check_circle | check_circle | check_circle |
| Experience Versions | Update | check_circle | check_circle | check_circle |
| Experience Versions | Delete | check_circle | check_circle | check_circle |
| Audiences | Create | check_circle | check_circle | check_circle |
| Audiences | Update | check_circle | check_circle | check_circle |
| Audiences | Delete | check_circle | check_circle | check_circle |
| Attributes | Create | check_circle | check_circle | check_circle |
| Attributes | Update | check_circle | check_circle | check_circle |
| Attributes | Delete | check_circle | check_circle | check_circle |
| Events | Create | check_circle | check_circle | check_circle |
| Events | Update | check_circle | check_circle | check_circle |
| Events | Delete | check_circle | check_circle | check_circle |

## Managing Users

To manage users in a Personalize project, you must be an [Organization Owner](../developers/organization/organization-roles.md#organization-owner) or [Organization Admin](../developers/organization/organization-roles.md#organization-admin) or a Project Owner.

### Invite a User to the Project

To invite a user to a Personalize project, follow the steps below:
- Log in to your [Contentstack account.](https://www.contentstack.com/login/)
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- On the Personalize landing page, click the preferred project.
- From the top panel, click the **Settings** icon.
- In the **Users** section, click the **+ Invite User** button.
- In the **Invite User** modal, enter the user's email address and an optional message for the invitee and then click **Invite** to send the invitation.
- You can invite multiple users by entering their email addresses.The invited user will receive an email. Once they accept the invite and are authorized, their status will update to **Accepted**.

### Remove a User from the Project

To remove a user from a project, follow the steps below:
- Go to the preferred project and click the **Settings** icon from the top navigation panel.
- In the **Users** section, locate the user you want to remove.
- Click the **vertical ellipses** under **Actions** and click **Remove**.
- Click the **Remove** button to successfully remove the user.

## Common questions

**Q: Who is considered a “user” in Contentstack Personalize?**  
A: A user is anyone who has been granted access to work on a project.

**Q: What determines what actions a user can perform in a project?**  
A: The user’s assigned role determines the specific actions they are allowed to perform within the project.

**Q: Who can manage users (invite/remove) in a Personalize project?**  
A: An Organization Owner, Organization Admin, or a Project Owner.

**Q: What happens after a user is invited to a project?**  
A: The invited user will receive an email, and once they accept the invite and are authorized, their status will update to **Accepted**.