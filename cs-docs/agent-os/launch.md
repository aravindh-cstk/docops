---
title: Automations guides and connectors - Launch
description: Set up the Launch connector in Automate to trigger deployments and revalidate CDN cache for Contentstack Launch projects.
url: https://www.contentstack.com/docs/agent-os/launch
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# Automations guides and connectors - Launch

This page explains how to use the Launch connector in Contentstack Automate to trigger deployments and revalidate CDN cache for Contentstack Launch projects. It is intended for developers or admins configuring Automate action steps, and should be used when you want to deploy builds or refresh cached content without rebuilding and redeploying your entire site.

## Launch

Launch is a deployment platform that enables you to host your Contentstack-powered website instantly. To get started, create a new project in Launch and link it with your GitHub repository.

The Launch connector in Automate lets you trigger deployments of projects created in the Contentstack Launch platform. With the **Revalidate CDN Cache** action, you can revalidate the CDN cache of your Launch environment by providing a revalidation path.

Using the Revalidate CDN Cache Action will allow you to refresh the cache of specific site URLs and show new content where previously cached content was published. This is especially useful where you do not want to rebuild and redeploy your entire website to make minor content changes.

Follow these steps to set up your Launch Connector, set up a Deployment Action, and set up automatic cache revalidation.

## Prerequisites
- Contentstack [account](https://www.contentstack.com/login)
- Access to organization that has Automate enabled

To use the Launch connector, you must first add your Launch account. To do so, follow the steps given below:

### Connect your Launch Account to Automate
- Click **Configure Action Step **in the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Launch** connector.![select_connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb79ba121b3a0608/68c131f48f21b414a50eabb5/select_connector.png)
- Under the **Choose an Action t**ab, select any one action from the list. Here, we are selecting the **Deploy a Build** action.![Select_Deploy_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d487bdad3d79e04/68c131f46aa0bec9389c4da5/Select_Deploy_Action.png)
- On the **Configure Action **page, click the **+ Add New Account** to add your Launch account.![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt765ebadebc4fd186/68c131e04a2c2d6d281216c9/Add_Account.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt52a279cd782fbd56/68c131e0ba6f811e82c2fa64/Authorize.png)
- In the pop-up that appears, select your organization to complete the authorization.![Organization-Access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f1e47ef7ee80241/642174bf7c7ed6502c698530/Organization-Access.png)
- Enter an **Account Name** and then click **Save**.![Save_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc491f357ecc4d7c0/68c131e0356bcfb8f5728cdb/Save_Account.png)

Once done, you can go ahead and set up your Launch connector.

## Set up the Launch Connector

Perform the following steps to set up the Launch action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Launch** connector.

  **Note:** You can sort and search the connector(s) based on the filter.
- Under the **Choose an Action **tab, you will see these actions: **Deploy a Build **and **Revalidate CDN Cache**.

  Let’s look at each of them in detail.

### Deploy a Build

  This action triggers a deployment in Contentstack Launch when specific events occur (e.g., publish/unpublish of content).
- Under **Choose an Action **tab, select the **Deploy a Build** action.
- On the **Deploy a Build Configure Action** page, enter the details given below:
        Click **+ Add New Account** to connect your Launch account as shown in the [Connect your Launch Account to Automate](#connect-your-launch-account-to-automate) step.
- Select a **Project** created in the Launch platform from the **Lookup** list.
- Select an **Environment** where you want to deploy your build from the **Lookup** list.![Select_Fields_Deploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1b6fff8efe2015e/68c147b511efa913e95ca6f8/Select_Fields_Deploy.png)
- Click **Proceed**.
- Click **Test Action **to test the configured action.

  **Note:** If a deployment is ongoing and you trigger a new one in the same instance, then the previous deployment will show as “Failed” in Launch.
- Once set, click **Save and Exit**.![Save_Exit_Deploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt864da3add9f5002c/68c131e8e2fb9abead9182dd/Save_Exit_Deploy.png)
- Navigate to the Launch platform to view the deployment status of your project in the Deployments tab.

### Revalidate CDN Cache
- Under **Choose an Action** tab, select the **Revalidate CDN Cache **action.
- On the **Revalidate CDN Cache Configure Action **page, enter the details given below:
          Click** + Add New Account **to connect your Launch account as shown in the [Connect your Launch Account to Automate](#connect-your-launch-account-to-automate) step.
- Select a **Project** created in the Launch platform from the **Lookup** list.
- Select an **Environment **where you want to revalidate the cache from the **Lookup **list.![Select_Project_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt775e924c90b30ce6/68c131f4d2e6bb5eb5d18a78/Select_Project_Environment.png)
- Select the Revalidate Type, i.e., **Path**, **Cache Tags**, or **Hostnames** from the dropdown.If **Path** is selected:

              In the **Revalidation Path** field, enter the URL to revalidate the CDN cache.
- You can optionally mark the **Is Prefix - Include all the nested URLs under the revalidation path** checkbox to revalidate all the nested URLs under the revalidation path.![Select_Path_Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta94cf282734443a2/68c131f4fc86ebb644e186e6/Select_Path_Type.png)

            If **Cache** **Tags** is selected:
- In the **Cache Tags** field, enter the cache tags you want the system to invalidate when the action runs.The **Cache Tags **option is used to invalidate or purge specific cached content from the CDN based on assigned tags, rather than clearing the entire cache.

                When an entry or asset is published or unpublished, the action targets only the cache entries associated with its tags (e.g., entry ID, content type, or custom labels). This ensures that only the affected content is refreshed, while other cached content remains intact and continues to be served quickly.

            If **Hostnames** is selected:
- In the **Hostnames** field, enter the domain or subdomain that you want to target when the action runs.The **Hostnames** option purges cached content only for the specified **domains** or **subdomains**, rather than all domains in the environment. This ensures that cache invalidation is limited to the selected hostnames (for example, www.example.com, staging.example.com), giving you precise control over which audiences see refreshed content without affecting other mapped domains.![Select_Hostnames.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab85a83bb2a75d51/68c131f4a726cb28e2e18ad5/Select_Hostnames.png)
- Click **Proceed**.
- Click **Test Action **to test the configured action.
- Once set, click **Save and Exit**.![Save_and_Exit_Revalidate_CDN_Cache.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde26692946285caa/68c131e814fd0d14f231eb31/Save_and_Exit_Revalidate_CDN_Cache.png)
- Navigate to your website and reload the page to see the updated content.

This sets the **Launch** action connector.

## Common questions

### Do I need a Launch account before using the Launch connector in Automate?
Yes. To use the Launch connector, you must first add your Launch account by using **+ Add New Account** and completing the OAuth authorization steps.

### What actions are available in the Launch connector?
Under the **Choose an Action** tab, you will see these actions: **Deploy a Build** and **Revalidate CDN Cache**.

### When should I use Revalidate CDN Cache instead of deploying a build?
Use **Revalidate CDN Cache** when you want to refresh cached content for specific URLs (or by cache tags/hostnames) without rebuilding and redeploying your entire website.

### Where can I verify whether a deployment ran successfully?
Navigate to the Launch platform to view the deployment status of your project in the Deployments tab.