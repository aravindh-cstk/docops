---
title: "Configure Multiple Identity Providers"
description: "Attach up to five SAML identity providers to a single Contentstack organization, each with its own session policy, role mapping, and login URL."
url: /administration/configure-multiple-identity-providers
uid: blt364fcccf387c4a22
---

# Configure Multiple Identity Providers

## Configure Multiple Identity Providers

Contentstack lets you attach more than one **Security Assertion Markup Language 2.0** (**SAML 2.0**) **identity provider** (**IdP**) to a single organization. Each IdP is a separate connection with its own certificate, session policy, role mapping, and login URL.

Multi-IdP support serves organizations with distinct user populations, such as full-time employees, contractors, and subsidiary brands, that authenticate against different identity systems but belong to one Contentstack organization.

**Note:** The organization [owner](/docs/headless-cms/types-of-roles#owner), a security manager, or a user with a custom role that has **single sign-on** (**SSO**) write permissions can add and manage IdP connections.

## When to Use Multiple IdPs

Use multiple IdPs when the people in one organization do not all live in the same identity system. Common scenarios include:

-   A parent company and an acquired subsidiary that each run their own Okta or Microsoft Entra ID tenant.
-   Employees authenticating through a corporate IdP while contractors authenticate through a separate one.
-   A staged migration from one IdP to another, where both must stay active during the cutover.

If every user in your organization authenticates through a single identity system, one IdP connection is sufficient. You do not need to configure additional connections.

## Key Concepts

-   **Connection**: A single IdP configuration, including its SAML details, certificate, user-management settings, and status. An organization can hold up to five connections.
-   **Primary connection**: One connection marked as the default IdP for the organization. You can promote any active connection to primary.
-   **SSO ID**: The unique identifier of a connection. It doubles as the login route for that IdP, so each IdP has its own login URL. The SSO ID is set when you create the connection and cannot be changed afterward.
-   **Status**: A connection is **Active** or **Inactive**. Only active connections accept logins.
-   **SSO-enabled organization**: An organization is considered SSO-enabled when at least one IdP connection is enabled.

## Limits and Constraints

-   An organization can hold a maximum of **five** IdP connections.
-   Contentstack supports **SAML 2.0 only**. **OpenID Connect** (**OIDC**) is not supported.
-   A user is identified by email address across every IdP in the organization. The same email cannot map to different users in different IdPs.
-   The SSO ID is fixed for the life of a connection. You cannot edit it after you create the connection, and to replace it you delete the connection and create a new one. You can edit the connection's display name at any time. When you promote a different connection to primary, you can optionally transfer the SSO ID to the new primary so users keep the same login URL. For details, refer to [Set a Primary Connection](#set-a-primary-connection).

**Warning:** Because the SSO ID is part of the login URL that your IdP application references, deleting a connection breaks the login URL that uses its SSO ID. Distribute the new URL to affected users before you remove the old connection.

## How Login Works with Multiple IdPs

Contentstack does not display an IdP selection screen and does not route users by email domain. Each IdP has its own login URL built from its SSO ID. You distribute the correct SSO ID to each user.

When a user signs in through a connection, Contentstack records which IdP issued the session. Role mapping, session timeout, and strict mode apply per connection, based on the IdP the user signed in through.

## Add an Additional IdP

Before you add a second IdP, confirm that your first connection is configured and working. To add a connection, sign in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the steps below:

1.  Go to **Administration** through “App Switcher”, and then click **Single Sign-On**.
2.  Click **Add Connection**.

    **Note:** The **Add Connection** action appears only when multi-IdP support is enabled for your organization and you have fewer than five connections. If you do not see it, contact our [support](mailto:support@contentstack.com) team.

3.  Complete the four-step configuration wizard for the new connection:
    1.  **SSO Configuration**: Enter a connection name (up to 128 characters) and, optionally, a description (up to 400 characters).
    2.  **IdP Configuration**: Provide the IdP's SAML details manually, by metadata URL, or by metadata XML. For details, refer to [Import IdP Metadata](/docs/administration/import-idp-metadata).
    3.  **User Management**: Set strict mode, session timeout, and IdP role mapping for this connection.
    4.  **Test & Enable**: Test the connection, and then enable it.
4.  Distribute the connection's login URL to the users who authenticate through this IdP.

The new connection appears in the Connections list with its status and per-connection settings.

## Understand the Connections List

The Connections list shows every IdP attached to the organization. Each connection displays:

-   Its name, SSO ID, and status (**Active** or **Inactive**).
-   A **Primary** label on the default connection.
-   The state of **Strict SSO**, **IdP Role Mapping**, and **SAML Encryption** for that connection.
-   Who last modified it and when.

To act on a connection directly from the list, use its quick-action menu. For the full set of actions, refer to [Manage SSO Connections](/docs/administration/manage-sso-connections).

## Set a Primary Connection

The primary connection is the organization's default IdP. To promote a connection, open its quick-action menu and select **Set as Primary**. When you promote a connection, you can choose to transfer the current primary's SSO ID to the new primary, so users continue to use the same login URL.

The following rules govern the primary connection:

-   Only an enabled (active) connection can be designated as the primary connection.
-   You cannot disable the primary connection while other active connections exist. Disable the other connections first.
-   You cannot delete the primary connection at all, whatever the state of the other connections. To remove it, mark a different connection as primary first, then disable and delete the old one.
-   If every connection is disabled and you then enable a connection that is not the primary, Contentstack automatically promotes it to the primary connection.

## Invitation Emails in a Multi-IdP Organization

When an SSO-enabled organization has more than one enabled connection, every organization invitation email contains a single SSO login link, the one for the primary connection. Users who authenticate through a non-primary IdP use the login URL you distribute for their connection.

## Disable SSO for the Organization

To turn off SSO for the whole organization, disable the connections in this order:

1.  Disable every secondary (non-primary) connection.
2.  Disable the primary connection.

Because the primary connection cannot be disabled while other active connections exist, this order is required.

## How Strict Mode Applies Across IdPs

Strict mode is set per connection, but it takes effect across the whole organization. If any **enabled** connection has strict mode on, users cannot sign in to the organization without SSO. Because of this, only one connection can hold the strict mode toggle at a time, and enabling it on one connection disables the toggle on the others. A disabled connection does not contribute to the organization's strict state, so disabling a strict connection removes strict mode for the organization.

**Warning:** Strict mode is shared across the organization, so enabling it on any connection locks every connection to SSO-only access. Confirm the intended state before you rely on password fallback.

## How Role Mapping Applies Across IdPs

IdP role mapping is configured per connection. When a user signs in through a connection that has role mapping enabled, the roles from that IdP's SAML assertion determine the user's effective roles for that session. For the precedence rules between IdP role mapping and SCIM-assigned roles, refer to [IdP Role Mapping](/docs/administration/idp-role-mapping).

**Additional Resource:** To configure a single connection end to end, refer to [Set Up SSO in Contentstack](/docs/administration/set-up-sso-in-contentstack).
