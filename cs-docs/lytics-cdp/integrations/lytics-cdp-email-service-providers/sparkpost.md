---
title: "SparkPost"
description: "SparkPost"
url: /lytics/sparkpost
---

# SparkPost

## SparkPost

## Overview

Connect [SparkPost](https://www.sparkpost.com/) and Lytics to improve the personalization and precision of your email marketing. Lytics combines email data and customer behavior from your other marketing tools so you can create audiences based on how your customers interact with your brand. Use your custom audiences to make your next campaign personal and powerful.

### Before You Begin

You will need the username and password of your Sparkpost account. Obtain an [API Key from Sparkpost](https://www.sparkpost.com/docs/getting-started/create-api-keys/). If sending triggered emails, you have [created and published an email template](https://www.sparkpost.com/docs/getting-started/creating-template/) in SparkPost to utilize when sending triggered emails.

## Authentication

First, you need to authorize Lytics to use your SparkPost account.

1.  Log into your [Lytics account](https://activate.getlytics.com/login).

1.  Open the [Sparkpost](https://activate.getlytics.com/data/integrations/sparkpost) integration or Click **Data** > **Integrations** and select **SparkPost** from the integrations list. ![sparkpost](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame850cc6f9425222b/1d4047a39870a9f6b66ffd2a/img-0307.png)

1.  Click **Authorizations**, and then click **New Authorization**

1.  In the **API Key** box, copy your SparkPost API key.

1.  In the **Description** box, enter a description.

1.  Click **Authorize**. ![sparkpost-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf6c24c9d71938b90/554850ad87fd6b16974e5e8c/img-0308.png)

Lytics is now authorized to utilize your SparkPost account. You can now setup the [import of SparkPost customer activity and data](#setup-webhooks-to-import-sparkpost-data-into-lytics) into Lytics or the [sending of triggered emails to Lytics audiences](#sending-triggered-emails).

## Import SparkPost Data into Lytics using a Webhook

| Summary |  |
| --- | --- |
| Frequency | Daily at specified time |
| Streams | spark\\\_activity |
| Customer fields | email |
| Provider fields | None |
| Customer activity | click, open, delivery, spam\\\_complaint, list\\\_unsubscribe, link\\\_unsubscribe, bounce |
| Campaign content | None |
| Click URL param | None |

1.  Log into your [Lytics account](https://activate.getlytics.com/login).
2.  Click **Data** > **Integrations** and select **SparkPost** from the integrations list.
3.  Click the **Setup Webhooks** tab.
4.  Identify the authorization you would like to use and click **Select**.
5.  Click **Start Setup**. ![Screen Shot 2018-12-04 at 3.39.25 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am191c4c4ef4e71ce8/8847b672a2e15c6d526e98da/img-0309.png)

SparkPost user data and activity will now be imported into Lytics in real-time and can be used to build or refine Lytics audiences. You can check the **Webhooks** section of your SparkPost account to verify the webhook is active, it will be named **Lytics Webhook**.

## Sending Triggered Emails

You can use Lytics to trigger SparkPost to send an email to your customers when they enter a Lytics audience. You could send a welcome email when a customer moves from unknown to known or a retention email when a customer becomes disengaged.

1.  Log into your [Lytics account](https://activate.getlytics.com/login).

1.  Click **Data** > **Integrations** and select **SparkPost** from the integrations list.

1.  Click **New Workflow**, and then click the **Send Triggered Emails** tab.

1.  Identify the authorization you would like to use and click **Select**.

1.  In the **Audience** drop-down list, select a Lytics audience. Customers entering this audience will trigger SparkPost to send them an email. ![sparkpost-select-audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9d332d94492b6fbb/84a164760923920f3507549e/img-0310.png)

1.  In the **Template** drop-down list, select the SparkPost email template you would like to use. ![sparkpost-select-template](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc373854db05eda4c/b23252196da830059ebe043a/img-0311.png)

1.  Send emails to existing members of the choosen Lytics audience by selecting the **Immediately send an email to users who already exist in the selected audience** box.

1.  Click **Start Send**. ![sparkpost-email-start-send](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2bdfaa653282ef9e/0b381da95cd3eed551ea240f/img-0312.png)

Lytics will now trigger SparkPost to send an email to a customer as they enter the specificed audience.
