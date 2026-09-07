---
title: "Netlify Trigger"
description: "Configure the Netlify trigger to sync workflows with deployment status and form submissions using a Site ID and personal access token."
url: /agent-os/netlify-trigger
uid: blt057e94fa262d3979
---

# Netlify Trigger

## Netlify Trigger

The Netlify trigger allows you to kickstart seamless workflows based on real-time events in your hosting environment.

It automates tasks triggered by deployment status changes or new form submissions, streamlining the connection between your content and live site deployments.

## Prerequisites

Start with adding your Netlify account by following the steps given below:

### Connect your Netlify Account

1.  Navigate to your project and click **Automations** in the top navigation panel.
2.  Click **\+ New Automation** and from the dropdown options, click **Create New**. Enter a **Name** and an optional **Description**. Click **Create**.
3.  Click **Configure Trigger** from the left navigation panel.
4.  Within the **Configure** **Trigger**, click the **Netlify** connector.![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5283a0157f09b85/6a02f33ab9d8afc5b2372f26/Select_Trigger.png)
5.  Under **Choose Trigger** tab, select the **Netlify Trigger**.![Select_action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbed5f76004e0b211/6a02f33a8b50846f8b0d4ff8/Select_action.png)
6.  In the **Authorize** modal, enter a **Title** and a **Token**.
7.  You can generate a new token from the **Personal access token** section in your Netlify console. Navigate to **User settings** > **Applications** \> **New access token** > **Generate token**.![Netlify_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84c7f1e40ca0e970/639d6d8c04ce585b97424850/Netlify_Dashboard.png)

    **Additional Resource:** For more information, refer to the [Obtain a token in Netlify UI](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli) document.

    Then click **Authorize.** ![Authorize_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5798608568928144/6a02f33a2e7ac0cc44f9eeeb/Authorize_button.png)

## Set up the Netlify Trigger

Perform the following steps to set up the Netlify trigger connector:

1.  From the left navigation panel, click **Configure** **Trigger**.
2.  Within the **Configure Trigger**, click the **Netlify** connector.  
    ![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5283a0157f09b85/6a02f33ab9d8afc5b2372f26/Select_Trigger.png)
3.  Under the **Choose Trigger** section, select **Netlify** Trigger.  
    ![Select_action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbed5f76004e0b211/6a02f33a8b50846f8b0d4ff8/Select_action.png)

    **Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.

4.  Let’s look at it in detail.


### Netlify Trigger

The Netlify Trigger event lets you trigger an automation when you perform deployment related activities in your Netlify account.

Let’s look at the steps to set up the trigger event.

1.  Under the **Choose Trigger** tab, select **Netlify** Trigger.
2.  On the **Netlify Trigger Configure Trigger** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Netlify account as shown in the [Connect your Netlify Account](#connect-your-netlify-account) step.
    2.  Select the **Site ID** from the **Lookup** drop-down.

        The **Site ID** is a unique identification given to a project configured in Netlify. You can select the desired project for which you want to configure the Netlify connector.

    3.  Select the trigger event from the drop-down, i.e., **Deployment succeeded**.

        The **Netlify** Trigger supports the following events:

        -   **Deployment started:** Triggered when Netlify begins building a new deployment.
        -   **Deployment succeeded:** Triggered when a deployment completes successfully and goes live.
        -   **Deployment failed:** Triggered when a deployment fails during the build or publish process.
        -   **Deployment locked:** Triggered when deployments are temporarily disabled for a site.
        -   **Deployment unlocked:** Triggered when deployments are re-enabled for a site.
        -   **Form submission received:** Triggered when a new form submission is captured by Netlify.  
            ![Select_Events.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b02947fe21308b4/6a02f944a03d8d650d24ce51/Select_Events.png)
3.  Click **Proceed**.
4.  Click **Test Trigger** to execute and test the trigger that you configured.
5.  If successful, the system dsiplays the following output. If it looks appropriate, click **Save and Exit**. ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82d3e2f346474592/6a02f945f3b4d82a9143115f/Save_Exit_Button.png)

This sets up the **Netlify** trigger connector.
