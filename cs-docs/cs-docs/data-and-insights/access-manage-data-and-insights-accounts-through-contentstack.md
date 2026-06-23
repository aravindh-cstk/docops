---
title: Access and Manage Data & Insights (Lytics) Accounts through Contentstack
description: How to access Data & Insights (Lytics) through Contentstack, including OAuth authentication, role permissions, troubleshooting, and limitations.
url: https://www.contentstack.com/docs/data-and-insights/access-manage-data-and-insights-accounts-through-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# Access and Manage Data & Insights (Lytics) Accounts through Contentstack

This page explains how to access and manage Data & Insights (Lytics) accounts through Contentstack, including how OAuth-based authentication works, how to launch the app from the Contentstack App Switcher, and how roles and permissions map between Contentstack and Data & Insights (Lytics). It is intended for Contentstack Organization Owners/Admins and users who need to verify access, troubleshoot login issues, or understand limitations.

## Access and Manage Data & Insights (Lytics) Accounts through Contentstack

The **Data & Insights (Lytics)** integration in Contentstack enables seamless connectivity between your personalization and audience intelligence workflows.

Before you can access Data & Insights (Lytics), an **Organization Owner or Admin must first create a Data Activation Layer** in the Organization Admin settings. The Data & Insights (Lytics) account for your organization is generated only after this step is completed. Authentication and access for the Lytics app are handled through an **OAuth 2.0 flow** within Contentstack.

This means you do not need to log in directly through the Data & Insights (Lytics) portal. Password resets are not supported, and all access occurs through the **Contentstack App Switcher**.

This guide explains how to log in, manage access, and understand role permissions when using Data & Insights (Lytics) through Contentstack.

## Prerequisites

- [Data & Insights (Lytics) ](./integrating-data-and-insights-lytics.md)enabled for your organization
- The web domain of your digital property (e.g. example.com)
- Access to the Contentstack Organization/Stack as the [Owner](../developers/organization/organization-roles.md#organization-owner) / [Admin](../developers/organization/organization-roles.md#organization-admin)

## How Authentication Works

All authentication between Contentstack and Data & Insights (Lytics) uses **OAuth 2.0.**

When you launch Data & Insights (Lytics) from within Contentstack:

- Contentstack securely requests access tokens for your organization via the Data & Insights (Lytics) OAuth endpoint.
- Your login session is validated automatically through Contentstack’s token exchange with Data & Insights (Lytics); you do not need to enter or reset a password.
- You are redirected to your Data & Insights (Lytics) workspace with your Contentstack credentials.

**Note:**

- Direct login attempts via [Data & Insights (Lytics)](https://www.lytics.com/) are not supported for Contentstack-managed accounts. Always access Data & Insights through the Contentstack App Switcher.
- On your first access, you may see a prompt asking you to [Authorize or Grant Access for Lytics to connect with Contentstack](./create-data-and-insights-lytics-integration.md#authorize-and-configure-content-classification-for-your-dal-connection). Click **Accept** to establish the OAuth connection. This step appears only once.

## Accessing Data & Insights (Lytics) through Contentstack

- Log in to [Contentstack. ](https://www.contentstack.com/login)
- From the **App Switcher**, click the **Data & Insights** icon.
- Contentstack redirects you to the Data & Insights (Lytics) OAuth authorization screen and logs you in automatically.
- After authentication, you are redirected to your organization’s **Data & Insights (Lytics) dashboard**.

## Verifying Account Connection

To confirm that your [Data & Insights (Lytics) account](./create-data-and-insights-lytics-integration.md) is properly linked to your Contentstack organization:

- Log in to [Contentstack](https://www.contentstack.com/login).
- From the **App Switcher,** click the **Data & Insights **icon.
- Check that your Data & Insights (Lytics) account name matches your Contentstack organization name.
- Open the dashboard to verify audience segments, data imports, and connection status.

## Understanding Roles and Permissions

Data & Insights (Lytics) roles are mapped automatically to your Contentstack organization roles. Role management is handled directly through Contentstack.

| Contentstack Role | Data & Insights Access Level | Description |
|---|---|---|
| Owner | Admin | Full access to audience configuration, event data, and integration settings. |
| Admin | Editor | Manage audiences and events; analyze data; no config changes. |
| Member (non-admin) | Audience Manager | Access to content classification, collections, and topics. |
| Member (non-admin) | Data Manager | Manage schemas, queries, users, integrations, and PII fields. |
| Guest / Collaborator | Restricted | No access unless explicitly granted. |

**Note:**Roles cannot be changed inside the Data & Insights (Lytics) interface for Contentstack-managed accounts. To modify permissions, contact Contentstack [Support](mailto:support@contentstack.com).

## Troubleshooting Login and Access Issues

| Issue | Cause | Resolution |
|---|---|---|
| Unable to log in | Direct login not supported | Use Contentstack App Switcher |
| Access Denied | Insufficient permissions | Ask Org Owner to verify your role |
| OAuth redirect loop | Cached credentials or expired token | Clear browser cache/cookies and retry |
| Missing audiences or metrics | Role-based visibility | Ensure you have Editor or Admin access |
| Password reset not received | Reset not supported for CS-managed accounts | Use Contentstack login only |

**Warning:** Do not attempt to reset Lytics passwords or create standalone Lytics logins. This breaks the OAuth integration.

## Limitations

- Password reset is not available for Contentstack-provisioned Lytics accounts.
- Only Owners/Admins can edit roles or provision users.
- Direct login via Lytics portal is not supported.
- Lytics session behavior follows Contentstack session policies.

## Common questions

### Can I log in to Data & Insights (Lytics) directly from the Lytics website?
No. Direct login attempts via [Data & Insights (Lytics)](https://www.lytics.com/) are not supported for Contentstack-managed accounts. Always access Data & Insights through the Contentstack App Switcher.

### Who needs to create the Data Activation Layer before anyone can access Data & Insights (Lytics)?
An **Organization Owner or Admin** must first create a Data Activation Layer in the Organization Admin settings.

### Why doesn’t password reset work for my Data & Insights (Lytics) account?
Password resets are not supported for Contentstack-provisioned Lytics accounts, and all access occurs through the **Contentstack App Switcher** using an **OAuth 2.0 flow**.

### Where do I change roles and permissions for Data & Insights (Lytics)?
Role management is handled directly through Contentstack, and roles cannot be changed inside the Data & Insights (Lytics) interface for Contentstack-managed accounts.