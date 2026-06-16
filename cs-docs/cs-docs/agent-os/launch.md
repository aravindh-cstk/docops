---
title: Automations guides and connectors - Launch
description: Set up the Launch connector in Automate to trigger deployments and revalidate CDN cache for Contentstack Launch projects.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/launch
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
- Within the **Configure Action Step**, click the **Launch** connector.
- Under the **Choose an Action t**ab, select any one action from the list. Here, we are selecting the **Deploy a Build** action.
- On the **Configure Action **page, click the **+ Add New Account** to add your Launch account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.
- In the pop-up that appears, select your organization to complete the authorization.
- Enter an **Account Name** and then click **Save**.

Once done, you can go ahead and set up your Launch connector.

## Set up the Launch Connector

Perform the following steps to set up the Launch action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Launch** connector.**Note:** You can sort and search the connector(s) based on the filter.
- Under the **Choose an Action **tab, you will see these actions: **Deploy a Build **and **Revalidate CDN Cache**.

  Let’s look at each of them in detail.

### Deploy a Build

  This action triggers a deployment in Contentstack Launch when specific events occur (e.g., publish/unpublish of content).
- Under **Choose an Action **tab, select the **Deploy a Build** action.
- On the **Deploy a Build Configure Action** page, enter the details given below:
        Click **+ Add New Account** to connect your Launch account as shown in the [Connect your Launch Account to Automate](#connect-your-launch-account-to-automate) step.
- Select a **Project** created in the Launch platform from the **Lookup** list.
- Select an **Environment** where you want to deploy your build from the **Lookup** list.
- Click **Proceed**.
- Click **Test Action **to test the configured action.**Note:** If a deployment is ongoing and you trigger a new one in the same instance, then the previous deployment will show as “Failed” in Launch.
- Once set, click **Save and Exit**.
- Navigate to the Launch platform to view the deployment status of your project in the Deployments tab.

### Revalidate CDN Cache
- Under **Choose an Action** tab, select the **Revalidate CDN Cache **action.
- On the **Revalidate CDN Cache Configure Action **page, enter the details given below:
          Click** + Add New Account **to connect your Launch account as shown in the [Connect your Launch Account to Automate](#connect-your-launch-account-to-automate) step.
- Select a **Project** created in the Launch platform from the **Lookup** list.
- Select an **Environment **where you want to revalidate the cache from the **Lookup **list.
- Select the Revalidate Type, i.e., **Path**, **Cache Tags**, or **Hostnames** from the dropdown.If **Path** is selected:

              In the **Revalidation Path** field, enter the URL to revalidate the CDN cache.
- You can optionally mark the **Is Prefix - Include all the nested URLs under the revalidation path** checkbox to revalidate all the nested URLs under the revalidation path.

            If **Cache** **Tags** is selected:
- In the **Cache Tags** field, enter the cache tags you want the system to invalidate when the action runs.The **Cache Tags **option is used to invalidate or purge specific cached content from the CDN based on assigned tags, rather than clearing the entire cache.

                When an entry or asset is published or unpublished, the action targets only the cache entries associated with its tags (e.g., entry ID, content type, or custom labels). This ensures that only the affected content is refreshed, while other cached content remains intact and continues to be served quickly.

            If **Hostnames** is selected:
- In the **Hostnames** field, enter the domain or subdomain that you want to target when the action runs.The **Hostnames** option purges cached content only for the specified **domains** or **subdomains**, rather than all domains in the environment. This ensures that cache invalidation is limited to the selected hostnames (for example, www.example.com, staging.example.com), giving you precise control over which audiences see refreshed content without affecting other mapped domains.
- Click **Proceed**.
- Click **Test Action **to test the configured action.
- Once set, click **Save and Exit**.
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