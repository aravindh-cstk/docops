---
title: "About Teams"
description: "Contentstack’s Teams feature simplifies the assignment of roles and permissions, by grouping users."
url: /administration/about-teams
---

# About Teams

## About Teams

Teams is an organization-level feature that groups users so you can assign roles to many people at once instead of one user at a time. You assign roles to a team, and every member of that team inherits those roles.

As an organization grows, assigning and maintaining roles for each user across stacks, spaces, and projects becomes difficult to manage and audit. Teams makes the group the unit of access: you define the roles once, and membership determines who receives them. When responsibilities change, you update the team instead of each user.

## Key Benefits

-   **Bulk role assignment**: Assign roles to a group of users in a single action instead of configuring each user individually.
-   **Consistent permissions**: Every member of a team shares the same set of roles, which keeps access predictable and easier to audit.
-   **Organization, product, and project-level roles**: Assign organization-level Administration roles and product roles across the CMS, Assets, and AgentOS, along with project-level roles for individual stacks, spaces, or AgentOS projects.
-   **Additive role inheritance**: A user who belongs to more than one team inherits the combined roles of all those teams.
-   **Centralized governance**: Teams are managed under Administration, so access stays under organization-level control.

## When to Use Teams

Use Teams when several users need the same access and managing them individually is inefficient. Common scenarios include:

-   Onboarding a group of new users who all need the same roles.
-   Giving a cross-functional group access to a specific set of stacks, spaces, or projects without affecting unrelated ones.
-   Granting temporary access for a seasonal campaign or short-term project, then removing it by deleting the team.
-   Restructuring access after an organizational change by adjusting team roles instead of reassigning every user.

Assign roles directly to individual users when the access is unique to one person and is unlikely to be reused.

## How Teams Works

You access **Teams** under **Administration** through the "App Switcher". Teams is an organization-wide feature, so it applies across the products and projects in your organization.

![Teams option in Contentstack Administration](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt4dfdc86f847dc591/0d09b3f545bd2512639a48ac/Admins-teams.png?locale=en-us)

-   **Who can manage teams**: The organization Owner and Admin can create, edit, and delete teams. The Security Manager role can view teams but cannot manage them.
-   **Role assignment**: Each team must have at least one Administration role. You can also assign product roles per product and project-level roles per stack, space, or AgentOS project.
-   **Role inheritance**: A user who belongs to multiple teams inherits the roles from all of them. If two teams assign different roles for the same project, the user holds both.
-   **Stack ownership precedence**: If a user is the owner of a stack, the owner permission takes precedence over any stack-level role assigned through a team.
-   **Reflected in Users and Roles**: Roles assigned through a team also appear under the [Users and Roles](/docs/administration/about-administration-roles) module.
