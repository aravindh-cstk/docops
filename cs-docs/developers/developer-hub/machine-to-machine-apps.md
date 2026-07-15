---
title: "[Developer Hub guides] - Machine to Machine Apps"
description: Machine-to-Machine (M2M) Apps for secure server-to-server communication using OAuth 2.0, including use cases and available scopes.
url: https://www.contentstack.com/docs/developer-hub/machine-to-machine-apps
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
  - administrators
version: beta
last_updated: 2026-03-25
---

# [Developer Hub guides] - Machine to Machine Apps

This page explains Machine-to-Machine (M2M) Apps, what they are used for, and which OAuth scopes are currently available. It is intended for developers and admins who need secure server-to-server integrations and should be used when setting up automation or integrations that do not require user interaction.

## Machine to Machine Apps

**Note:** *This feature is in Beta. Please contact your Account Manager to enable it.*

**Machine-to-Machine (M2M) Apps **are designed for secure server-to-server communication, eliminating the need for user intervention. These apps use the [OAuth 2.0](./contentstack-oauth.md) protocol for authentication and authorization, making them highly secure and reliable for machine-to-machine interactions.

## Use Cases

Here are some practical applications of Machine-to-Machine apps to automate tasks and integrate with other systems:
- **User Management:** Automate the creation, updating, and deletion of users in Contentstack. This ensures user directories stay in sync with your HR system.
- **Invitation Management:** Simplify the process of inviting new users to your organization.
- **Data Sync:** Synchronize user data with other systems such as your CRM.
- **Workflow Automation:** Create complex workflows to automate repetitive user management tasks.

## Scopes

Machine-to-Machine Apps currently have limited scope access but we plan to expand these with future updates. Below are the available scopes:

| Scope | Level | Description |
|---|---|---|
| scim:manage | SCIM | Manage users and groups using SCIM, keeping user directories synchronized between Contentstack and other systems. |
| organization.share:read | Organization | View details of organization invitations shared with users. |
| organization.share:write | Organization | Update or remove organization invitation shares to manage user access. |
| analytics:read | Organization | View organization analytics. |
| auditlog:read | Audit Log | View details of organization audit log. |
| launch:manage | Launch | Manage Contentstack Launch projects. |
| launch.projects:read | Launch | View all projects. |
| launch.projects:write | Launch | Create and update projects. |
| launch.projects:write | Launch | Create and update projects. |
| launch.projects:delete | Launch | Delete projects. |
| launch.gitproviders:manage | Launch | Manage external Git providers in Launch. |
| teams:read | Team | View all teams. |
| teams:write | Team | Create, update and delete teams. |

## Common questions

**Q: Do Machine-to-Machine (M2M) Apps require a user to log in?**  
A: No. Machine-to-Machine (M2M) Apps are designed for secure server-to-server communication, eliminating the need for user intervention.

**Q: What authentication protocol do M2M Apps use?**  
A: These apps use the [OAuth 2.0](./contentstack-oauth.md) protocol for authentication and authorization.

**Q: Are Machine-to-Machine Apps generally available?**  
A: No. **Note:** *This feature is in Beta. Please contact your Account Manager to enable it.*

**Q: Can M2M Apps manage teams and Launch projects?**  
A: Yes, based on the available scopes, including `teams:read`, `teams:write`, `launch:manage`, and other Launch-related scopes.