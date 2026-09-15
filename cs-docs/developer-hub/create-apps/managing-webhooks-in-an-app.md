---
title: "Managing Webhooks in an App"
description: "Managing Webhooks in an App"
url: /developer-hub/managing-webhooks-in-an-app
uid: blt20b8c19eddf1aded
---

# Managing Webhooks in an App

## Managing Webhooks in an App

A webhook provides a mechanism or a method for enabling real-time communication and data exchange between Contentstack and your application.

**Additional Resource:** For more information on how Webhooks work, refer to the documentation on [Set Up Webhooks](/docs/headless-cms/about-webhooks).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in the Developer Hub

## What You Will Learn

-   How to enable a webhook for an app.

-   How to configure the webhook URL, authentication, events, branch scope, and notification recipients.

-   How to disable a webhook.


## Steps to Enable Webhook

1.  After logging into your [Contentstack account](https://www.contentstack.com/login/), click the **Developer Hub** icon and select the desired app.
2.  From the left navigation menu, click the **Webhooks** option.  
    ![Enable_Webhooks_.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3b767fa98f5a155/65b7adf5e5c1f3d765d956cc/Enable_Webhooks_.png)
3.  To enable the webhook, use the **Enable Webhook** toggle button.

    Once the webhook is enabled, you can configure it for your app by entering the following details:

    -   Enter a valid **URL to Notify** (mandatory fields).
    -   To secure the **URL to Notify**, provide necessary details in the **HTTP Basic Auth Username** and **HTTP Basic Auth Password** fields. You can also provide unique **Custom Headers** for securing the URL further.  
        ![Enabled_Webhook_Options.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd89fea87e30c9470/65b7adf45f12ed2b4be21a9e/Enabled_Webhook_Options.png)
4.  Next, select the events you want to be notified of.
    -   Stack apps have **App Events** as well as **Stack Events**:  
        ![3.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt637717e6721d1e69/6380654e7140e510ae4aa339/3.jpg)
    -   Whereas, organization apps have only **App Events**:  
        ![4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4392e542f25b387d/627de73a5d936230ca8ed0eb/4.png)
    -   **Branch-level Scope** will allow the webhook event to be triggered on the selected branch only, i.e. Main Branch, All branches.
    -   Webhook will be triggered for any **Branch Event(s)** such as Created and Deleted.
    -   Webhook will be triggered on any **Branch Alias(es) Event(s)** such as assigned and unassigned.  
        ![Branch-Support.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf331365861190888/65263de6600b651cb935b547/Branch-Support.png)
5.  You can specify the email addresses of the users under the **User(s) to Notify** section whenever the [Circuit Breaker](/docs/headless-cms/webhook-circuit-breaker) disables any webhook. Contentstack sends the email alert to the specified user(s).  
    ![users_to_notify](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf4b06c31f260883/653b96ce56bf7b0407d2c7f4/Users_to_notify.png)
6.  Configure the webhook information.
7.  Click **Save** to save your webhook details in the manifest.

    You will see the details of the webhook logs on the **Webhooks** tab in the **App Configuration** screen after installing the app.

    You can update the branch for which you want to trigger the webhooks from the **Branch** dropdown.


## Steps to Disable Webhook

1.  In the left navigation panel, click the **Webhooks** tab.  
    ![Disable_Webhook_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1743b061022abf90/65b7adf48fc5c0e7d50bc573/Disable_Webhook_Button.png)  

2.  Click the **Enable Webhook** toggle button to disable the webhook, and then click the **Disable webhook** button in the modal.

Once the webhook is disabled, the **Configure Webhook** section will disappear, but the details added previously will remain saved. And, no notifications will be sent to the target URL any more.

**Note:** Users can enable/disable the webhook anytime they want.
