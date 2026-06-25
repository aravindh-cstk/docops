---
title: "[Marketplace guides and apps] - Authorized Apps"
description: Manage authorized apps in Contentstack Marketplace, view app access tokens, and revoke permissions.
url: https://www.contentstack.com/docs/marketplace/authorized-apps
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Authorized Apps

This page explains how Contentstack Apps request and use permissions via access tokens, where to view authorized apps in the Marketplace, and how users and organization admins can revoke app permissions when access should be removed.

## Authorized Apps

While authorizing a Contentstack App, the app requests permissions from the user to perform a set of operations on behalf of the user. The app receives an access token after a user authenticates and authorizes access, then passes it as a credential when it calls the Contentstack APIs.

All users can manage the Authorized app’s access to their Contentstack data from Marketplace. The apps that have permission to access Contentstack data are listed under **Marketplace > Manage > Authorized Apps** section.

Users can get information about each app and revoke the app’s access. The organization admin can manage apps authorized by all organization members, and members can manage only those app's authorized by themselves.

## Revoke Permissions of an App

To revoke permissions for an app, follow the below steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login/).
- In the left-hand side primary navigation, click the **Marketplace**** icon** to go to the Marketplace.
- Go to **Manage > Authorized Apps**
- Under the **Authorized Apps **section, click the app for which you want to revoke the permissions.
- On the page that appears, click the user whose permission you want to revoke.
- Click the **Revoke** button to proceed. After you revoke the app, it can no longer access your data.  If you are a non-admin user of the organization, you will see the permissions authorized by only you. On the page that appears, click the **Revoke** button to revoke the access token.
- You can also revoke the permissions of all users by clicking the **Revoke All** button.

## Revoking Permissions for Contentstack Starter

Follow the steps below to revoke the permissions for Contentstack Starter:
- In the left-panel, under the **Manage **section, click **Authorized Apps.**
- Click **Contentstack Starter** to view the authorized access tokens.
- Click the **Revoke **button.

## Common questions

### Where can I find the list of apps that can access my Contentstack data?
The apps that have permission to access Contentstack data are listed under **Marketplace > Manage > Authorized Apps** section.

### Who can revoke authorized app access?
Users can revoke access for apps they have authorized, and the organization admin can manage apps authorized by all organization members.

### What happens after I click **Revoke**?
After you revoke the app, it can no longer access your data.

### How do I revoke access for all users for an app?
You can also revoke the permissions of all users by clicking the **Revoke All** button.