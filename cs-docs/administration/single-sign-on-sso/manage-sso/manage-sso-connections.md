---
title: "Manage SSO Connections"
description: "Use the quick-action menu on each SSO connection to edit it, copy its SSO URL, disable it, mark it as primary, or delete it."
url: /administration/manage-sso-connections
uid: bltd2af418173db0883
---

# Manage SSO Connections

## Manage SSO Connections

Each single sign-on (SSO) connection on the Connections list has a quick-action menu. From this menu, you edit a connection, copy its SSO URL, disable it, mark it as primary, or delete it, without opening the connection.

**Note:** These actions are available to the organization [owner](/docs/headless-cms/types-of-roles#owner), a security manager, or a user with a custom role that has SSO write permissions.

## Open the Quick-Action Menu

1.  Open the **App Switcher**, go to **Administration**, and then click **Single Sign-On**.

2.  On the Connections list, locate the connection you want to act on.

3.  Click the vertical ellipsis (⋮) on the connection to open its quick-action menu.


## Available Actions

The menu provides the following actions:

| Action | What it does |
| --- | --- |
| Edit | Opens the connection so you can change its SSO, IdP, or user-management settings. |
| Copy SSO URL | Copies the connection's SSO URL to your clipboard so you can share it. |
| Disable | Turns the connection off without deleting its configuration. On a disabled connection, this option becomes **Enable**. |
| Set as Primary | Makes the connection the organization's default (primary) IdP. |
| Set as Primary and Enable | Makes the connection the primary IdP and enables it in a single action. Appears only when more than one connection is configured and the current primary connection is disabled. |
| Delete | Permanently removes the connection and its configuration. Users signed in through this connection are signed out immediately. Never available on the primary connection. |

## Edit a Connection

Select **Edit** to open the connection and change its settings across the SSO configuration, IdP configuration, and user-management steps. For details on each step, refer to [Set Up SSO in Contentstack](/docs/administration/set-up-sso-in-contentstack).

## Copy the SSO URL

Select **Copy SSO URL** to copy the connection's SSO URL to your clipboard. Share this URL with the users who authenticate through this connection.

## Disable or Enable a Connection

Select **Disable** to turn a connection off while keeping its configuration intact, which is useful during maintenance or an IdP migration. To turn a disabled connection back on, open its menu and select **Enable**.

**Note:** You cannot disable the primary connection while other active connections exist. Disable the other connections first. If every connection is disabled and you then enable a connection that is not the primary, Contentstack automatically promotes it to the primary connection.

## Set a Connection as Primary

Select **Set as Primary** to make the connection, the organization's default IdP. Only an enabled, non-primary connection can be marked as primary.

The primary connection determines the SSO login link used across the organization: every organization invitation email contains the primary connection's SSO ID.

When you promote a connection, you can select the swap option to transfer the current primary's SSO ID to the new primary, so users keep the same login URL.

**Warning:** After the swap, you must also update the **Assertion Consumer Service** (**ACS**) URL configured on the IdP side to match the new configuration. Until you update the IdP, SSO authentication may not work correctly. The swap confirmation checkbox exists for this reason, and the same warning appears in the banner once you select it.

## Set as Primary and Enable

When more than one connection is configured and the current primary connection is disabled, the menu shows **Set as Primary and Enable**. Select it to make a connection, the primary IdP and enable it in a single action, instead of enabling the connection and marking it as primary in two separate steps. This option appears only in this state, because no primary connection is currently enabled.

## Delete a Connection

Select **Delete** to permanently remove a connection. You can delete a connection only when it is disabled, and you can never delete the primary connection. To remove the current primary, mark a different connection as primary first, then disable and delete the old one.

**Warning:** Deleting a connection is permanent and breaks the login URL that uses its SSO ID. Confirm that no users depend on the connection before you delete it. To use the same IdP again later, create a new connection and distribute its new login URL.

**Additional Resource:** To add and organize connections, refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).
