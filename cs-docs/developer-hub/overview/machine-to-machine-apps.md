---
title: "Machine to Machine Apps"
description: "Learn about Machine-to-Machine (M2M) Apps in Contentstack for secure server-to-server communication and task automation."
url: /developer-hub/machine-to-machine-apps
---

# Machine to Machine Apps

## Machine to Machine Apps

**Note:** _This feature is in Beta. Contact your Account Manager to enable it._

**Machine-to-Machine (M2M) Apps** are designed for secure server-to-server communication, eliminating the need for user intervention. These apps use the [OAuth 2.0](/docs/developer-hub/contentstack-oauth) protocol for authentication and authorization, making them highly secure and reliable for machine-to-machine interactions.

### Use Cases

Here are some practical applications of Machine-to-Machine apps to automate tasks and integrate with other systems:

-   **User Management:** Automate the creation, updating, and deletion of users in Contentstack. This ensures user directories stay in sync with your HR system.
-   **Invitation Management:** Simplify the process of inviting new users to your organization.
-   **Data Sync:** Synchronize user data with other systems such as your CRM.
-   **Workflow Automation:** Create complex workflows to automate repetitive user management tasks.

### Scopes

Machine-to-Machine Apps currently have limited scope access but we plan to expand these with future updates. Below are the available scopes:

| Scope | Level | Description |
| --- | --- | --- |
| scim:manage | SCIM | Manage users and groups using SCIM, keeping user directories synchronized between Contentstack and other systems. |
| organization.share:read | Organization | View details of organization invitations shared with users. |
| 
organization.share:write

 | 

Organization

 | 

Update or remove organization invitation shares to manage user access.

 |
| 

analytics:read

 | 

Organization

 | 

View organization analytics.

 |
| 

auditlog:read

 | 

Audit Log

 | 

View details of organization audit log.

 |
| 

launch:manage

 | 

Launch

 | 

Manage Contentstack Launch projects.

 |
| 

launch.projects:read

 | 

Launch

 | 

View all projects.

 |
| 

launch.projects:write

 | 

Launch

 | 

Create and update projects.

 |
| 

launch.projects:delete

 | 

Launch

 | 

Delete projects.

 |
| 

launch.gitproviders:manage

 | 

Launch

 | 

Manage external Git providers in Launch.

 |
| 

teams:read

 | 

Team

 | 

View all teams.

 |
| 

teams:write

 | 

Team

 | 

Create, update and delete teams.

 |
