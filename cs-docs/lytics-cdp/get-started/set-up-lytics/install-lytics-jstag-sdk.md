---
title: "Install the Lytics JStag SDK"
description: "Learn how to install the Lytics JStag SDK on your front-end, verify the installation, and confirm data is flowing to your Lytics project dashboard."
url: /lytics/install-lytics-jstag-sdk
uid: blt74ef1f00168f479d
---

# Install the Lytics JStag SDK

## Install the Lytics JStag SDK

The Lytics JStag SDK is a JavaScript snippet that loads automatically on every page. Once installed, it tracks page views and user interactions, then sends that data to your Lytics project.

This page covers copying the snippet from your project dashboard, adding it to your front-end, and verifying that data is reaching Lytics.

**Note:** If your site runs on Contentstack Launch, do not use this method. Instead, connect your Launch project via **Project Connections**, which manages event tracking from your Launch environment settings. See the [Real-Time User Event Tracking in Contentstack Launch](/docs/launch/event-tracking-in-contentstack-launch) guide.

## Prerequisites

1.  You have created a [Lytics](/docs/lytics/create-a-lytics-project) project in Contentstack.
2.  Access to your front-end codebase or deployment pipeline.
3.  Ability to edit and deploy changes to the <head> of your site.

## Steps for Execution

### 1\. Installing the Lytics JStag SDK

To install the Lytics JStag SDK, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Lytics CDP**.  
    ![App_switcher_lytics_cdp.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf69dcd6f266aec40/5ad0badf5b92541ed3b5a0d2/App_switcher_lytics_cdp.png?locale=en-us)
2.  You will be redirected to the **Lytics Projects** landing page.
3.  From the list of Lytics projects, click on the Lytics Project where you want to install the Lytics JStag SDK.
4.  From the project dashboard, click **Install Lytics**.  
    ![Install_lytics.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6013b66dd3ec113a/397eb9c245e2c3970bb35f9b/Install_lytics.png?locale=en-us)
5.  The **Install Lytics** modal opens with two sections:
    -   **Installation instructions:** JavaScript snippet generated for this specific project.
    -   **Installation verification:** Status indicator that polls Lytics for received events.
6.  In the **Installation Instructions** section, click **Copy**.  
    ![Lytics_JStag_Code_snippet.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6ced3428f8f6a5b6/8127b6e45f9fc3632e8a0bbe/Lytics_JStag_Code_snippet.png?locale=en-us)

    **Note:** The snippet is a small <script> tag scoped to your project's Lytics account. It loads JStag from Lytics's CDN and starts tracking page views and interactions automatically.

7.  Paste the snippet as the first element inside <head> on every page you want to track.
8.  Save and deploy your front-end.

The snippet loads the Lytics JStag SDK from Lytics’s CDN and begins tracking page views and user interactions automatically.

### 2\. Verify the Installation

1.  After deploying, visit your live site in a separate browser tab and navigate through a few pages.
2.  Return to the Install Lytics modal and click the refresh icon in the **Verifying the Installation** section.

| **Status** | **Meaning** | **Action** |
| --- | --- | --- |
| **Successfully installed** | Events are reaching Lytics. | Installation is complete. Close the modal. |
| **Not installed** | No events received yet. | Wait a few minutes and refresh again. |
| **Unable to verify** | Status check failed. | Check snippet placement and network connectivity, then retry. |

If verification stays in **Not installed** after several refreshes:

-   Confirm the snippet is in <head>, not <body>.
-   Confirm the page is live and loading in a standard (non-incognito) browser session.
-   If your front-end uses a non-default Lytics stream, the modal’s verification check reports Not installed even when data is flowing. Check stream activity directly at app.lytics.com.

### 3\. Confirm Data in the Dashboard

Once verification reports success, return to the project dashboard. Within a few minutes, the dashboard's **Event Activity** chart begins populating, and the event, profile, and audience counts start climbing as Lytics processes incoming traffic.

If counts remain at zero for more than a few minutes:

-   Recheck the **Install Lytics** modal's verification step.
-   Confirm the deployed page actually loads the snippet (view page source on the live page).
-   Open the Lytics platform from **Manage Lytics** and inspect raw stream activity directly.

### 4\. Next Steps

You now have a working Lytics project collecting events. Common follow-ups:

-   **Connect this project to your CMS stacks, Launch projects, and Personalize projects** so audience data flows between products. See Connect Lytics to Contentstack Products.
-   **Invite your team.** Add colleagues as collaborators and assign appropriate roles. See Manage Collaborators and Roles.
-   **Build audiences.** Audience authoring happens on the Lytics platform. Click **Go to Lytics App** from the dashboard to jump to the [Lytics platform](https://www.lytics.com/).
