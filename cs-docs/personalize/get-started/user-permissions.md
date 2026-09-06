---
title: "User Permissions"
description: "Learn how to manage user roles, permissions, and access controls in Contentstack Personalize. Invite or remove users, and control project access."
url: /personalize/user-permissions
uid: blt1dc2e19c287eff1b
---

# User Permissions

## User Permissions

In Contentstack Personalize, 'users' are anyone who has been granted access to work on a project. These users can either contribute to the project's content and functionality or manage the project settings.

To control what each user can do, Contentstack Personalize utilizes 'roles.' These roles determine the specific actions a user is allowed to perform within the project based on their assigned level of access.

Essentially, roles define the boundaries of a user's permissions and responsibilities.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   A Personalize project
-   Organization [Owner and Admin](/docs/administration/about-administration-roles), or Project Owner permissions

## What You Will Learn

-   The Personalize roles and what each one can do.

-   How to invite a user to a Personalize project.

-   How to remove a user from a Personalize project.


## Roles and Capabilities

| **Roles** | **Capabilities** |
| --- | --- |
| Organization Owner/Admin | Full access to all actions and settings at the organization level, including the ability to manage the project and its resources (Experiences, Audiences, Attributes, and Events). |
| Project Owner | Full access to all actions and settings at a project level, to manage the project and its resources (Experiences, Audiences, Attributes, and Events). |
| Project Member | Can view projects but cannot manage project-level settings. Can create, update, or delete resources (Experiences, Audiences, Attributes, and Events). |

## User Permissions

The following table outlines the permissions for each role across various resources:

| Resources | Actions | Org Owner/Admin | Project Owner | Project Member |
| --- | --- | --- | --- | --- |
| Project | Create | check\_circle | check\_circle | cancel |
| Update | check\_circle | check\_circle | cancel |
| Connect/Disconnect stack | check\_circle | check\_circle | cancel |
| Delete | check\_circle | check\_circle | cancel |
| Users | Invite | check\_circle | check\_circle | cancel |
| Remove | check\_circle | check\_circle | cancel |
| Experiences | Create | check\_circle | check\_circle | check\_circle |
| Update | check\_circle | check\_circle | check\_circle |
| Delete | check\_circle | check\_circle | check\_circle |
| Experience Versions | Create | check\_circle | check\_circle | check\_circle |
| Update | check\_circle | check\_circle | check\_circle |
| Delete | check\_circle | check\_circle | check\_circle |
| Audiences | Create | check\_circle | check\_circle | check\_circle |
| Update | check\_circle | check\_circle | check\_circle |
| Delete | check\_circle | check\_circle | check\_circle |
| Attributes | Create | check\_circle | check\_circle | check\_circle |
| Update | check\_circle | check\_circle | check\_circle |
| Delete | check\_circle | check\_circle | check\_circle |
| Events | Create | check\_circle | check\_circle | check\_circle |
| Update | check\_circle | check\_circle | check\_circle |
| Delete | check\_circle | check\_circle | check\_circle |

## Managing Users

To manage users in a Personalize project, you must be an [Organization Owner or Admin](/docs/administration/about-administration-roles) or a Project Owner.

### Invite a User to the Project

To invite a user to a Personalize project, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  On the Personalize landing page, click the preferred project.
3.  From the top panel, click the **Settings** icon.
4.  In the **Users** section, click the **\+ Invite User** button.![Invite User button in project Users section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4afdd07f19fb2c98/68df5aa3b0493a6337ccd5c4/Invite_user.png)
5.  In the **Invite User** modal, enter the user's email address and an optional message for the invitee and then click **Invite** to send the invitation.![Invite User modal with email and message fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f9ce33ba15d6e0f/6814743bc98d9b20f63ca233/Personalize_-_User_Permissions_-_Invite_User_Modal.png)
6.  You can invite multiple users by entering their email addresses.The invited user will receive an email. Once they accept the invite and are authorized, their status will update to **Accepted**.


### Remove a User from the Project

To remove a user from a project, follow the steps below:

1.  Go to the preferred project and click the **Settings** icon from the top navigation panel.
2.  In the **Users** section, locate the user you want to remove.
3.  Click the **vertical ellipses** under **Actions** and click **Remove**.![Remove option under user Actions menu](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dbe5cda6175e648/6814743c987681144f6e38ce/Personalize_-_User_Permissions_-_Remove_User_button.png)
4.  Click the **Remove** button to successfully remove the user.![Confirm remove user modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3abe75634ffdad68/6814743b58f7b0351de2cb3a/Personalize_-_User_Permissions_-_Remove_User_Modal.png)
