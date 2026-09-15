---
title: "Redeploy Automatically when Content is Published on CMS"
description: "Learn how to configure and manage automatic redeployments in Contentstack Launch."
url: /launch/redeploy-automatically-when-content-is-published-on-CMS
uid: blt4dab782038b876fc
---

# Redeploy Automatically when Content is Published on CMS

## Redeploy Automatically when Content is Published on CMS

Launch allows you to set up a site to redeploy automatically when its content is modified in the CMS.

This step-by-step guide lets you redeploy automatically when content is published on your Contentstack CMS.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization
-   A site on Launch that fetches data from the CMS

## What You Will Learn

-   How to add a Launch deploy hook URL as a webhook in your stack.

-   How to set trigger conditions so publishing content redeploys the site.

-   How to confirm the redeployment by publishing an entry.


## Steps for Execution

Follow the steps to redeploy automatically when content is published.

1.  Create a [deploy hook](/docs/launch/deploy-hooks) in Launch.
2.  Follow the steps to add the deploy hook as a Webhook to Contentstack CMS.

    1.  Copy the **deploy hook URL**.  
        ![Launch_Auto-Redeploy_Deploy_Hook-CopyURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7afd976080332748/65c1b0314cd370001a70c32e/Launch_Auto-Redeploy_Deploy_Hook-CopyURL.png)
    2.  Go to your stack and then go to **Settings > Webhooks**.  
        ![Launch_Auto-Redeploy_Webhook_Left-Nav-New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt212353b10f369a28/67c687d18c6f4e2673b80914/Launch_Auto-Redeploy_Webhook_Left-Nav-New.png)
    3.  Click the **\+ New Webhook** button.
    4.  In the **Name** field, enter a suitable name for the Webhook.
    5.  In the **URL To Notify** field, paste the deploy hook URL.  
        ![Launch_Auto-Redeploy_Webhook_Name_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfae040171405081/65c1b031c258642b3108ae37/Launch_Auto-Redeploy_Webhook_Name_URL.png)
    6.  In the **Trigger Conditions** field, enter the conditions for the deploy hook to trigger.
    7.  Click the **Enable Webhook** toggle button.
    8.  Click the **Save** button.  
        ![Launch_Auto-Redeploy_Webhook_Save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte094d5d1fb214d23/65c1b03108722270a9495278/Launch_Auto-Redeploy_Webhook_Save.png)

    You will see the conditions updated on the Webhooks page.  

    ![Launch_Auto-Redeploy_Webhook_Display.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8ca8497e9413f9f/65c1b031e7bf981b216d1308/Launch_Auto-Redeploy_Webhook_Display.png)

3.  Go to the entry where you want to make the update.
4.  Make the necessary updates, and click the **Save** button.
5.  Click the **Publish** button, select Environment(s) and Language(s), and then click the **Send** button.  
    ![Launch-Auto_Redeploy-PublishEntry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted5a225421cef7d3/6434fd33ab116a10dd6a4253/Launch-Auto_Redeploy-PublishEntry.png)  
    On clicking **Publish**, the Webhook gets triggered and the project gets automatically redeployed in Launch.
