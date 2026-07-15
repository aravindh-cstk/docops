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
- In the left-hand side primary navigation, click the **Marketplace**** icon** to go to the Marketplace.![Revoking_Token_-_Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b45feb874dc7c42/63ecda683c33ff1cbf91735f/Revoking_Token_-_Marketplace.png)
- Go to **Manage > Authorized Apps**![Revoke_Token_-_Authorized_Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8dd9017f1409194/63ecda6892662910c4ebf8ee/Revoke_Token_-_Authorized_Apps.png)
- Under the **Authorized Apps **section, click the app for which you want to revoke the permissions.
- On the page that appears, click the user whose permission you want to revoke.![Revoking_Token_-_Select_User](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ea57b5297efa2a9/63ecde523464ff7685a87096/Revoking_Token_-_Select_User.png)
- Click the **Revoke** button to proceed. After you revoke the app, it can no longer access your data.  ![Revoke_Token_-_Revoke](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ddb246450ed2602/63ecda680773755832f89e41/Revoke_Token_-_Revoke.png)If you are a non-admin user of the organization, you will see the permissions authorized by only you. On the page that appears, click the **Revoke** button to revoke the access token.![Revoke_Token_-_Revoke_3](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0fbbaedda8fb28c/63ece1dae4d5251cb468821a/Revoke_Token_-_Revoke_3.png)
- You can also revoke the permissions of all users by clicking the **Revoke All** button.![Revoke_Token_-_Revoke_All](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea92b7a3b755f88d/63ecda699b18a175e2431a24/Revoke_Token_-_Revoke_All.png)

## Revoking Permissions for Contentstack Starter

Follow the steps below to revoke the permissions for Contentstack Starter:
- In the left-panel, under the **Manage **section, click **Authorized Apps.**
- Click **Contentstack Starter** to view the authorized access tokens.![Revoking_Token_-_Contentstack_Starter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9189640441df7bc0/63ece0d492662910c4ebf902/Revoking_Token_-_Contentstack_Starter.png)
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