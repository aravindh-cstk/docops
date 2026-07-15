---
title: "[Automations guides and connectors] - Netlify Trigger"
description: Netlify Trigger
url: https://www.contentstack.com/docs/agent-os/netlify-trigger
product: Contentstack
doc_type: automations-guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-05-12
---

# [Automations guides and connectors] - Netlify Trigger

This page explains how to configure the Netlify Trigger connector in Automations to start workflows based on Netlify deployment and form submission events. It is intended for users setting up Automations integrations and should be used when connecting a Netlify account and configuring trigger events.

## Netlify Trigger

The Netlify trigger allows you to kickstart seamless workflows based on real-time events in your hosting environment.

It automates tasks triggered by deployment status changes or new form submissions, streamlining the connection between your content and live site deployments.

## Prerequisites

Start with adding your Netlify account by following the steps given below:

### Connect your Netlify Account

- Navigate to your project and click **Automations** in the top navigation panel.
- Click **+ New Automation** and from the dropdown options, click **Create New**. Enter a **Name** and an optional **Description**. Click **Create**.
- Click **Configure Trigger **from the left navigation panel.
- Within the **Configure** **Trigger**, click the **Netlify** connector.![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5283a0157f09b85/6a02f33ab9d8afc5b2372f26/Select_Trigger.png)
- Under **Choose Trigger** tab, select the **Netlify Trigger**.![Select_action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbed5f76004e0b211/6a02f33a8b50846f8b0d4ff8/Select_action.png)
- On the **Configure Trigger** page, click the **+ Add New Account** to add your Netlify account.![Add_new_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68d0f60eca2960d5/6a02f944965849a3c992f96b/Add_new_Account.png)
- In the **Authorize **modal, enter a **Title** and a **Token**.
- You can generate a new token from the **Personal access token** section in your Netlify console. Navigate to **User settings** > **Applications **> **New access token** > **Generate token**.**Additional Resource:** For more information, refer to the [Obtain a token in Netlify UI](https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui/) document.

Then click** Authorize.**

## Set up the Netlify Trigger

Perform the following steps to set up the Netlify trigger connector:

- From the left navigation panel, click **Configure** **Trigger**.
- Within the **Configure Trigger**, click the **Netlify** connector.
- Under the **Choose Trigger** section, select **Netlify** Trigger.

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.

- Let’s look at it in detail.

### Netlify Trigger

The Netlify Trigger event lets you trigger an automation when you perform deployment related activities in your Netlify account.

Let’s look at the steps to set up the trigger event.

- Under the** Choose Trigger** tab, select **Netlify** Trigger.
- On the **Netlify Trigger Configure Trigger** page, enter the details given below:Click **+ Add New Account **button to connect your Netlify account as shown in the [Connect your Netlify Account](#connect-your-netlify-account) step.
- Select the** Site ID **from the **Lookup** drop-down.The** Site ID** is a unique identification given to a project configured in Netlify. You can select the desired project for which you want to configure the Netlify connector.
- Select the trigger event from the drop-down, i.e., **Deployment Started**.For **Netlify** Trigger, you will find the following events:

**Deployment started:** Triggered when Netlify begins building a new deployment.
- **Deployment succeeded:** Triggered when a deployment completes successfully and goes live.
- **Deployment failed: **Triggered when a deployment fails during the build or publish process.
- **Deployment locked: **Triggered when deployments are temporarily disabled for a site.
- **Deployment unlocked:** Triggered when deployments are re-enabled for a site.
- **Form submission received: **Triggered when a new form submission is captured by Netlify.![Select_Events.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b02947fe21308b4/6a02f944a03d8d650d24ce51/Select_Events.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.

This sets up the **Netlify** trigger connector.

## Common questions

### What events can the Netlify Trigger listen for?
For **Netlify** Trigger, you will find the following events: **Deployment started**, **Deployment succeeded**, **Deployment failed**, **Deployment locked**, **Deployment unlocked**, and **Form submission received**.

### Where do I get the Netlify token needed to authorize the account?
You can generate a new token from the **Personal access token** section in your Netlify console. Navigate to **User settings** > **Applications **> **New access token** > **Generate token**.

### What should I do if I re-configure another trigger after configuring Netlify Trigger?
After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.

### How do I validate that the trigger is working?
Click **Test Trigger** to execute and test the trigger that you configured. If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.