---
title: "[Administration] - About Administration Roles"
description: About Administration Roles
url: https://www.contentstack.com/docs/administration/about-administration-roles
product: Contentstack
doc_type: concept
audience:
  - administrators
  - developers
version: unknown
last_updated: unknown
---

# [Administration] - About Administration Roles

This page explains Contentstack Administration roles and how role-based access control (RBAC) determines organization-wide capabilities. It is intended for organization administrators and anyone responsible for managing users, security, and access across Contentstack products, and should be used when assigning or reviewing Administration roles.

## About Administration Roles

Contentstack uses **role-based access control** (**RBAC**) to govern who can manage your organization and what they can do. Administration roles are organization-level roles that control organization-wide capabilities, such as managing users, roles, teams, security configuration, and audit logs.

Administration roles are separate from product roles. An Administration role governs the organization itself, while a product role governs access within a specific product, such as the CMS, Assets, or AgentOS. Every invited user receives at least one Administration role, and that role determines the level of organization-wide control they hold.

## Out-of-the-Box Administration Roles

Contentstack provides four default Administration roles:
- **Owner:** The highest level of access in an organization. An Owner role can do everything an Admin role can do, and can also transfer organization ownership to another user. Each organization can only have one Owner role.
- **Admin:** Full access to organization administration. An Admin manages organization users, roles, and teams; configures System for Cross-domain Identity Management (SCIM) provisioning, security settings, and webhooks; and reviews organization analytics, stacks, and audit logs. The Admin role also includes the access needed to invite users and assign product roles across the organization.
- **Security Manager:** Manages the organization's identity and security configuration. A Security Manager configures Single Sign-On (SSO), SCIM provisioning, security settings, and webhooks, and reviews audit logs. The role provides read-only visibility into organization users, roles, teams, and stacks, but does not manage users or assign roles.
- **Product Analytics Viewer:** Read-only access to organization analytics. A Product Analytics Viewer views organization information and analytics but cannot manage users, roles, or settings.
- **Member:** The default role assigned to every invited user. A Member has read-only access to organization information and no organization-wide administrative capabilities. A user's access within each product depends on the product roles assigned to them. At least one Administration role is required for every user, and Member is preselected during the invitation flow.

**Note:** The Administration Member role is distinct from product-specific Member roles, such as the Assets Member role. The Administration Member role controls organization access, while a product Member role controls access within that product.

## What Each Role Can Do

The table below compares the four Administration roles across key organization-level capabilities:

| Capability | Admin | Security Manager | Product Analytics Viewer | Member |
|---|---|---|---|---|
| Organization users | Manage | View | — | — |
| Roles | Manage | View | — | — |
| Teams | Manage | View | — | — |
| Single Sign-On (SSO) | — | Manage | — | — |
| SCIM provisioning | Manage | Manage | — | — |
| Security configuration | Manage | Manage | — | — |
| Webhooks configuration | Manage | Manage | — | — |
| Organization analytics | View | — | View | — |
| Audit logs | View | View | — | — |
| Stacks | View | View | — | — |
| Organization information | View | View | View | View |

## How Administration Roles Work With Product Roles

A user's effective access is determined by the combination of their Administration role and the product roles assigned to them. The Administration role sets organization-wide capabilities, and product roles scope what the user can do inside each product they are assigned.

For example, a user with the Member Administration role and the CMS Content Manager product role can work with content in their assigned stacks but cannot manage organization users or settings. A user with the Admin Administration role can manage the organization regardless of their product roles.

**Additional Resource:** To learn about the default roles available for each product, refer to the [About Product Roles](/docs/administration/about-product-roles) documentation.

**Additional Resource:** To assign Administration roles when onboarding users, refer to the [Invite Users to Organization](/docs/developers/organization/invite-users-to-organization) documentation.

## Common questions

### Are Administration roles the same as product roles?
No. Administration roles are organization-level roles, while product roles govern access within a specific product, such as the CMS, Assets, or AgentOS.

### Does every user need an Administration role?
Yes. Every invited user receives at least one Administration role, and at least one Administration role is required for every user.

### What is the difference between Owner and Admin?
An Owner role can do everything an Admin role can do, and can also transfer organization ownership to another user. Each organization can only have one Owner role.

### Can a user manage content without being an Admin?
Yes. A user with the Member Administration role and an appropriate product role (for example, the CMS Content Manager product role) can work with content in their assigned stacks but cannot manage organization users or settings.