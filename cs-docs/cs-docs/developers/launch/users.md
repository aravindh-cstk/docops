---
title: "[Contentstack Launch] - Users"
description: Users, roles, capabilities, permissions, and user management actions in Contentstack Launch projects.
url: https://www.contentstack.com/docs/launch/users
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Users

This page explains how users, roles, and permissions work in Contentstack Launch, and how to invite or remove users from a Launch project. It is intended for Organization Owners/Admins, Launch Project Owners, and Admins managing access to Launch projects.

Users

Users are individuals who have access to contribute to or manage the Launch project.
Roles define the scope of actions users can perform based on their level of access.

## Roles and Capabilities

| Roles | Capabilities |
|---|---|
| Organization Owner/Admin | Full access to all actions and settings, including the ability to install external Git provider apps. |
| Launch Project Owner | Full access to all actions and settings. |
| Admin | Can perform all actions and manage settings, except deleting a project or repairing the Git connection. |
| Read-Only | Can view environments, deployments, and settings but cannot create, update, or delete anything. |

**Note**: Only the Launch Project Owner, [Organization Owner](../organization/organization-roles.md#organization-owner) and [Organization Admin](../organization/organization-roles.md#organization-admin) can add or remove users.

## User Permissions

The following table outlines the permissions for each role across various resources:

| Resources | Actions | Organization Owner/Admin | Launch Project Owner | Admin | Read-Only |
|---|---|---|---|---|---|
| Project | View | check_circle | check_circle | check_circle | check_circle |
| Project | Create | check_circle | check_circle | check_circle | cancel |
| Project | Update | check_circle | check_circle | check_circle | cancel |
| Project | Repair Git Connection | check_circle | check_circle | cancel | cancel |
| Project | Delete | check_circle | check_circle | cancel | cancel |
| Environment | View | check_circle | check_circle | check_circle | check_circle |
| Environment | Create | check_circle | check_circle | check_circle | cancel |
| Environment | Update | check_circle | check_circle | check_circle | cancel |
| Environment | Delete | check_circle | check_circle | check_circle | cancel |
| Domain | View | check_circle | check_circle | check_circle | check_circle |
| Domain | Create | check_circle | check_circle | check_circle | cancel |
| Domain | Update | check_circle | check_circle | check_circle | cancel |
| Domain | Delete | check_circle | check_circle | check_circle | cancel |
| Deploy Hook | View | check_circle | check_circle | check_circle | check_circle |
| Deploy Hook | Create | check_circle | check_circle | check_circle | cancel |
| Deploy Hook | Update | check_circle | check_circle | check_circle | cancel |
| Deploy Hook | Delete | check_circle | check_circle | check_circle | cancel |
| Password Protection | View | check_circle | check_circle | check_circle | check_circle |
| Password Protection | Enable | check_circle | check_circle | check_circle | cancel |
| Password Protection | Disable | check_circle | check_circle | check_circle | cancel |
| Deployment | View | check_circle | check_circle | check_circle | check_circle |
| Deployment | Create | check_circle | check_circle | check_circle | cancel |
| User | View | check_circle | check_circle | check_circle | check_circle |
| User | Invite | check_circle | check_circle | cancel | cancel |
| User | Remove | check_circle | check_circle | cancel | cancel |
| Event Tracking (Lytics) | View | check_circle | check_circle | check_circle | check_circle |
| Event Tracking (Lytics) | Enable | check_circle | check_circle | check_circle | cancel |
| Event Tracking (Lytics) | Disable | check_circle | check_circle | check_circle | cancel |
| Cache Priming | View | check_circle | check_circle | check_circle | check_circle |
| Cache Priming | Enable | check_circle | check_circle | check_circle | cancel |
| Cache Priming | Disable | check_circle | check_circle | check_circle | cancel |

## Managing Users

### Invite a User to the Project

- [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the **Launch **icon from the dashboard.
- On the Launch landing page, click the desired project.
- From the top panel, click the **Settings** icon.
- In the **Users** section, click the **Invite User** button.
- In the **Invite User** modal:To assign the **Admin** role to the user, follow the steps below:Enter the user's email address.
- Select the role as **Admin** from **Roles** drop-down.
- Optionally, add a message for the invitee.
- Click **Invite** to send the invitation.
- To assign the **Read-Only** role to the user, follow the steps below:Enter the user's email address.
- Select the role as **Read-Only** from **Roles** drop-down.
- Optionally, add a message for the invitee.
- Click **Invite** to send the invitation.

You can invite multiple users by entering their email addresses.
The invited user will receive an email. Once they accept the invite and are authorized, their status will update to **Accepted**.

### Remove a User from the Project

- Go to the desired project and click the **Settings** icon from the left navigation panel.
- In the **Users** section, locate the user you want to remove.
- Click the **ellipses** under **Actions** and select **Remove**.
- Click the **Yes, Remove** button to successfully remove the user.

## Common questions

### Who can add or remove users in a Launch project?
Only the Launch Project Owner, Organization Owner, and Organization Admin can add or remove users.

### What is the difference between Admin and Read-Only roles?
Admin can perform all actions and manage settings (with some restrictions), while Read-Only can view environments, deployments, and settings but cannot create, update, or delete anything.

### Can I invite multiple users at once?
Yes. You can invite multiple users by entering their email addresses.

### What happens after a user is invited?
The invited user will receive an email, and once they accept the invite and are authorized, their status will update to **Accepted**.