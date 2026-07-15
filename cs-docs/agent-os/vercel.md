---
title: Automations guides and connectors - Vercel
description: Set up the Vercel action connector to trigger a deployment in Vercel.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/vercel
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# Automations guides and connectors - Vercel

This page explains what the Vercel connector does and how to set up the Vercel action connector to trigger deployments. It is intended for developers configuring third-party action steps and should be used when you want to connect an automation workflow to Vercel deploy hooks.

## Vercel

Vercel lets you host websites and web services. It lets you connect your GitHub repository and instantly deploy the master/main branch of your project to Vercel domains without any supervision.

The Vercel Action Connector allows you to trigger a deployment in Vercel.

## Set up Vercel

Perform the following steps to set up the Vercel action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Vercel **connector.![Vercel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd073273a3682a350/6527f8ec31f9bbac62966804/Vercel.png)
- Under **Choose an Action** tab, select the **Trigger Deploy** action.![Vercel-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddf0a7526a51c0cd/63dcad54b3b39d7d817f0503/Vercel-Action.png)
- On the **Configure Action** page, enter the hook URL in the **Name** field.![Vercel-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7542516a55f6a240/63dcad54c338484e3b194f42/Vercel-Configure-Action.png)

**Note:** In Vercel, you will find the hook URL in your project’s **Project Settings** page, under **Git** > **Deploy Hooks**. To create a new hook, provide a “name” for your hook and the branch name of your GitHub project, and click **Create Hook**.

**Additional Resource:** For more information, refer to the [Vercel - Deploy Hooks](https://vercel.com/docs/concepts/git/deploy-hooks/) documentation.
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Vercel-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9d6a8e5479ac7d9/63dcad546d590c21c347cd2d/Vercel-Input.png)
- Check if the details are correct. If yes, click **Test Action**.![Vercel-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c2e9d21542dbcb6/63dcad547ccfaf4bc687f040/Vercel-Test-Action.png)
- Once set, click **Save and Exit**.![Vercel-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32b4bffa66656c42/63dccf846d590c21c347cd77/Vercel-Output.png)

**Note: **The **PENDING** state means that your deployment activity has been queued.

Go to your project’s **Deployments** page in Vercel. You will see the details of the latest version deployed.

This sets up your **Vercel** action connector.

## Common questions

**How do I find the hook URL in Vercel?**  
In Vercel, you will find the hook URL in your project’s **Project Settings** page, under **Git** > **Deploy Hooks**.

**What does the PENDING state mean?**  
The **PENDING** state means that your deployment activity has been queued.

**Where can I verify the deployment after triggering it?**  
Go to your project’s **Deployments** page in Vercel. You will see the details of the latest version deployed.

**Where can I learn more about Vercel deploy hooks?**  
Refer to the [Vercel - Deploy Hooks](https://vercel.com/docs/concepts/git/deploy-hooks/) documentation.