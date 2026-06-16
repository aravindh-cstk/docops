---
title: "[Personalize] - Manage a Personalize Project"
description: Use this guide to manage an existing Personalize project, navigate project areas, update settings, manage users, connect a stack, or delete the project.
url: https://www.contentstack.com/docs/personalize/manage-personalize-project
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Personalize] - Manage a Personalize Project

This page explains how to manage an existing Contentstack Personalize project, including navigating the project workspace and using Settings to update project details, connect or disconnect a stack, manage users, and perform lifecycle actions like deletion. It is intended for Organization Owners/Admins and project administrators who need to configure or maintain a Personalize project.

## Manage a Personalize Project

Use this guide to manage an existing Personalize project, navigate project areas, update settings, manage users, connect a stack, or delete the project.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to the Contentstack Organization as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin) that has Personalize enabled
- An existing stack you want to link to the Personalize project.

## Project Workspace
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- From the **Projects** list, select the project you want to manage.

After opening a project, use the top navigation bar to switch between the following sections:
- [**Experiences**](/docs/personalize/about-experiences): Create and manage segmented and A/B test experiences. From here, you can activate, pause, reprioritize, or archive experiences as requirements change or experiments conclude.
- [**Audiences**](/docs/personalize/about-audiences): View the audience segments used for targeting experiences. This area helps you understand which audiences are in use, update targeting criteria, and archive segments that are no longer relevant.
- [**Attributes**](/docs/personalize/about-attributes): Define and manage the user and contextual attributes that power audience evaluation and targeting decisions across experiences.
- [**Events**](/docs/personalize/about-events): Configure and track events used for impressions, conversions, and performance measurement, enabling optimization over time.
- [**Settings**](/docs/personalize/manage-personalize-project#settings): Manage project-level configuration and administration, including project details, CMS stack connection, user access, and lifecycle actions such as project deletion.

Most personalization activities occur in **Experiences**, **Audiences**, **Attributes**, and **Events. **Use **Settings** for administrative tasks that affect the project as a whole.

## Settings
Project settings let you manage the core configuration of a Personalize project, including project details, CMS stack connection, user access, and lifecycle actions such as project deletion. The following sections explain how to access and manage these settings.

**To access project settings:**
- Open your Personalize project.
- In the top navigation bar, click **Settings**.

The **Settings** page includes the following sections:
- **General** - Manage project details, stack connection, and project-level actions.
- **Users** - Manage user access and permissions.

By default, the **General** section opens.

### General
Use the **General** section to configure the project.

**Project Details:**
- Update the **Name** field (required).
- Update the **Description** field to better describe the project.
- Review the **UID** field.  
The **UID** field is read-only and serves as the unique system identifier for the project. It is required for API calls, SDK initialization, and integration workflows, and cannot be modified.
- Click **Save** to apply your changes.
- Click **Reset **to discard changes.

**Stack Connection:**
- Select the required Contentstack stack from the dropdown.
- Click **Connect Stack**.

After connecting the stack, you can personalize content authored within the selected Contentstack CMS stack.

**Stack Disconnection******Disconnect a Contentstack stack from a Personalize project if you no longer want to deliver personalized experiences using that stack.

**Delete Project:**

Delete a project permanently to remove all associated personalization data.  
For step-by-step instructions, refer to [Delete a Personalize Project](https://stag-www.contentstack.com/docs/personalize/delete-personalize-project).

### Users
Control access to the Personalize project from the Users section. View users, review their status and role, and invite new users.

Project-level roles in Personalize inherit from Contentstack organization roles. These roles determine what actions a user can perform across experiences, audiences, attributes, and settings.

**View users**
- Go to** Settings.**
- Select **Users** from the left navigation.
- Review the list of users and their **Status** and **Role**.

**Invite users**
- In the **Users** tab, click **Invite User**.
- Enter the user’s email address and an optional message.
- Click **Invite**.

**Modify user roles**

Manage role and permission changes for existing users at the organization or stack level in Contentstack. For step-by-step instructions, refer to [Change Organization Role of Existing Users](/docs/developers/organization/change-organization-role-of-existing-users).

## Common questions

### Who can manage a Personalize project?
Access to the Contentstack Organization as the Owner/Admin that has Personalize enabled is required.

### Where do I connect a Contentstack stack to a Personalize project?
Open your Personalize project, go to **Settings**, and use the **General** section under **Stack Connection**.

### Where do I manage user access for a Personalize project?
Open your Personalize project, go to **Settings**, and select **Users** to view, invite, and review roles/status.

### What happens when I delete a Personalize project?
Delete a project permanently to remove all associated personalization data.