---
title: "[Marketplace guides and apps] - Installed Apps"
description: Information about viewing installed apps, permissions, and managing configuration, UI locations, and webhooks.
url: https://www.contentstack.com/docs/marketplace/installed-apps
product: Marketplace
doc_type: guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Installed Apps

This page explains where to find and manage Installed Apps for your organization and stacks, including access permissions and how to view or edit app configuration, UI locations, and webhooks.

## Installed Apps

This section houses all the apps installed for your organization or the stacks within. You can view installed apps, their UI Locations, and webhooks. You can modify configurations and uninstall apps from this interface.

## Access Level to Installed Apps

You can see all or some of the installed apps based on the permissions that you have at the stack and organization level.
- If you are **an org****anization admin or owner**, you can see all the stack and organization apps installed by any user in your organization.
- If you are **a st****ack admin or owner**, you can see the apps installed for the stacks that you have access to.
- If you are **not a stack admin or owner**, you can see the apps installed for the stacks that you have access to.

## View/Edit Configuration, UI Locations, and Webhook

To view or edit the configuration, UI locations, and webhook for any of the installed apps, perform the following steps:
- Go to **Manage** > **Installed Apps** in the Marketplace section. Click the app that you want to change the configuration for. You can see the app information page.

  **Note**: You can also go to this page from **Discover** > **Apps**.
- Go to the **Installed On** tab. You can see a list of stacks where the app is installed. Hover over the stack from which you want to uninstall the app or update the configuration settings. You can see **Uninstall App** and **Configuration** icons.
- Click the **Configuration** tab to enter the configuration details of the app.
- Click the **UI Locations** tab to access the app's locations.
 You can see the number of locations in the box corresponding to each UI Location.
 Click the icon (highlighted in the following screenshot) to view the UI Locations in detail.
 You can enable or disable a particular UI location by using the toggle button.
**Note**: The UI locations marked as **Required** cannot be disabled.
- If webhooks are enabled for the app, you can see a **Webhook** tab. The Webhook section provides a list of all configured events under the **Webhook Logs** section.
 If the app supports webhooks for all branches, and the branch feature is enabled for your organization, you can configure the webhook to send notifications only from a selected set of branches.
Inside the **Configure Webhook** section, you can select the following options under **Branch Scope**:
      **All Branches**: if you want the webhook to trigger on all branches of the organization.
- **Specific Branches**: if you want the webhook to trigger on a specific branch(s). You can add multiple branches.

## Common questions

**How do I find the Installed Apps page?**  
Go to **Manage** > **Installed Apps** in the Marketplace section.

**Why can’t I see all installed apps?**  
Visibility depends on your stack and organization permissions (org admin/owner, stack admin/owner, or other users with stack access).

**Can I disable any UI Location for an installed app?**  
You can enable or disable a particular UI location by using the toggle button, but the UI locations marked as **Required** cannot be disabled.

**Where do I configure webhook branch scope?**  
Inside the **Configure Webhook** section, under **Branch Scope**, choose **All Branches** or **Specific Branches**.