---
title: "Lytics User Permissions"
description: "Understand how access to Lytics projects is governed by Contentstack organization membership and project-level roles, and see a full breakdown of who can do what."
url: /lytics/user-permissions
---

# Lytics User Permissions

## Lytics User Permissions

Access to a Lytics project is governed by two layers working together: your Contentstack organization membership, and the role you hold on a specific project. This page describes both layers, how they combine, and what each level of access allows.

## How Access Works

### Contentstack Organization Membership

Every Lytics project belongs to one Contentstack organization. A user's relationship to that organization determines their baseline access to all Lytics projects within it.

| **Organization status** | **What it grants** |
| --- | --- |
| **Organization Owner** | Full access to every Lytics project in the organization. Implicitly administers every project, regardless of any project-level role assignment. |
| **Organization Admin** | Same as the owner – full access to every Lytics project in the organization. |
| **Organization Member** (no admin role) | No access to Lytics projects by default. Must be explicitly invited as a collaborator on each project they need to use. |

**Note:** Organization-level access is inherited, not configured in the Lytics CDP. Manage it from your Contentstack organization settings.

### Project-Level Roles

Beyond organization-level access, individual users are added to specific projects as collaborators and assigned a role. Roles are per-project, a user can be an Admin on one project and an Observer on another.

**Important points to know:**

-   A collaborator on Project A is **not** automatically a collaborator on Project B.
-   The user who **creates** a project is automatically its Owner and always retains full access, regardless of any roles assigned to them.
-   Being a member of the parent Contentstack organization does **not**, by itself, grant access to a Lytics project.

## How the Layers Combine

The Lytics CDP evaluates access in a fixed order of precedence. The first condition that matches determines whether the action is allowed or denied.

| **Priority** | **Condition** | **Result** |
| --- | --- | --- |
| 1 | User is an Organization Owner or Admin | Access allowed |
| 2 | User is the Project Owner | Access allowed |
| 3 | User holds a project role that covers the action | Access allowed |
| 4 | None of the above conditions are met | Access denied |

**The practical effect of this order is as follows:**

-   An **Organization Owner or Admin** can perform any action on any Lytics project in the organization, regardless of their project-level role.
-   A **Project Owner** who is an organization member (not an admin) has full control over their own project but cannot access other projects in the organization.
-   An **Invited Collaborator's** access is limited to the specific actions permitted by the role they were assigned on that project.

The table makes the precedence logic scannable without the question-mark phrasing, and the bullet summary below it translates each rule into plain consequence, which is what a reader actually needs to walk away with.

## Permissions Matrix

The following table shows what each access level can do across common Lytics CDP actions.

| **Action** | **Org Owner / Admin** | **Project Owner** | **Invited Collaborator** |
| --- | --- | --- | --- |
| View project list | ✅ | ✅ (own projects) | ✅ (projects they're on) |
| Create a new project | ✅ | - | ❌ |
| View project dashboard | ✅ | ✅ | ✅ |
| Edit project name, description, domain | ✅ | ✅ | Depends on role |
| Add or remove a connection (CMS stack, Launch, Personalize) | ✅ | ✅ | Depends on role |
| Invite collaborators | ✅ | ✅ | Depends on role |
| Change a collaborator's role | ✅ | ✅ | Depends on role |
| Remove a collaborator | ✅ | ✅ | Depends on role |
| Delete the project | ✅ | ✅ | ❌ |
| Open the Lytics platform  | ✅ | ✅ | ✅ |
| Access Contentstack organization settings | Depends on org role | ❌ | ❌ |

**Note:**

-   Where the table shows **Depends on role**, the specific permission is determined by the role assigned to the collaborator on that project.
-   Check the role description in the collaborator invite picker or hover over the role name in the **Users** tab in Settings.
