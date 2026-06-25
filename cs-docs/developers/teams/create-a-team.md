---
title: "[Teams] - Create a Team"
description: Create a Team in Contentstack and assign Organization- and Stack-level roles, then add users to the Team.
url: https://www.contentstack.com/docs/administration/create-a-team
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [Teams] - Create a Team

This page explains how to create a Team in Contentstack, configure its role mappings at the organization and stack levels, and invite users to the Team. It is intended for Organization admins (and other authorized users) who need to manage access and permissions via Teams.

## Create a Team

A Team lets you assign a specific set of Organization- and Stack-level role(s) to a group of users.

To create a Team, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [Organization](../organization/about-organizations.md) where you want to create a Team, click on the “Org Admin” icon on the left navigation panel and select **Teams **from the menu.
- Click the **+ New Team** button.
- In the **Create New Team** modal that appears, enter the **Team Name** and **Description** (optional) for your team.
- Finally, click **Create Team**.

Once you create a team, your Team’s configuration page will be displayed containing two separate tabs: **Team** and **Users**.

The **Team** tab is for role mappings. Here's a brief explanation of the fields and functionalities:
- **Team Name**: A mandatory field where you can specify the name of the team.
- **Description**: An optional field where you can add a description for the team.
- **Assign Organization Role**: This section is mandatory and allows you to assign a role to the team at the organization level (Admin or Member).
- **Invite to stacks**: This section allows to assign specific stack(s) and corresponding role(s) to this team.

## Add Users to a Team

The **Users **tab is for adding users to the Teams. To add users to your team, follow the steps given below:.
- Click the **Users **tab.
- Click the **+ Invite Users** button.

In the **Invite Users** modal, add the email IDs of users you want to add to the team and click the **Invite** button.

**Additional Resource**: You can also create teams via the [Create a team](../../../api-docs/api-detail/content-management-api.md#create-a-team) API request.

## Common questions

### Who can create a Team?
Typically, users with organization-level administrative access can create and manage Teams from the Org Admin area.

### What is the difference between the **Team** and **Users** tabs?
The **Team** tab is used for role mappings, while the **Users **tab is used to invite and add users to the Team.

### Can I assign both organization and stack roles to a Team?
Yes. You can assign an organization role in **Assign Organization Role** and assign stack(s) and corresponding role(s) in **Invite to stacks**.

### Can I create Teams using an API instead of the UI?
Yes. You can create teams via the [Create a team](../../../api-docs/api-detail/content-management-api.md#create-a-team) API request.