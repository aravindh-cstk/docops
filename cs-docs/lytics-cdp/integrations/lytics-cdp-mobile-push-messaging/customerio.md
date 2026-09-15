---
title: "Customer.io"
description: "Customer.io is an automated messaging platform that supports strengthens the relationship between subscription businesses and their customers by sending…"
url: /lytics/customerio
uid: blt47d72bd6f30e89f6
---

# Customer.io

## Customer.io

## Overview

[Customer.io](https://customer.io/) is an automated messaging platform that supports strengthens the relationship between subscription businesses and their customers by sending meaningful messages at the time they're most likely to be engaged.

Connect Customer.io and Lytics to improve the precision and personalization of your email marketing. Lytics combines historical email data with rich behavioral data from your other marketing tools. This unified data helps you create audiences to make your next email campaign personal and powerful.

## Authorization

If you haven't already done so, you will need to setup a Customer.io account before you begin the process described below. In order to authorize Customer.io, you will be required to provide a Site ID and API Key which Lytics uses to send data to your account. To obtain your Site ID and API key please refer to the [Customer.io documentation](https://customer.io/docs/api/).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Customer.io** from the list of providers.
2.  Select the **API Key** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **Site ID** text box, enter your Site ID credential.
6.  In the **API Key** text box, enter your API Key credential.
7.  Click **Save Authorization**.\\

![customer-io-auth.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3fba0be87f7e2bfd/320fd01b2b5b615945e26b05/customer-io-auth.png)

## Import Webhook Events

In order to import data from Customer.io, you need to setup the webhook to send event data to Lytics. This webhook sends behavioral events from Customer.io to Lytics in real-time. This activity data can then be used as targeting criteria for campaigns using Lytics audiences.

### Integration Details

-   **Implementation Type:** Server-side Integration.
-   **Implementation Technique:** Webhook Integration.
-   **Frequency:** Real-time Integration.
-   **Resulting Data:** New or existing User Profiles containing Customer.io activity data as User Fields.

Before running the import webhook events job, it is expected that [webhooks are set up in Customer.io](#configuring-webhooks-in-customer.io) to send event data to Lytics. Events will come in to a data stream called customerio. Lytics will do some additional processing on these events and they will be added to a stream customerio\_events. From there, if [the import job](#configuration) has been run, the incoming events will be mapped as user fields.

### Fields

The following fields are included in the default mapping of the customerio\_events stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| customer\\\_id |  | cio\\\_customer\\\_id unique id | Customer.io ID | string |
| email(email) |  | email unique id | Email Address | string |
| epochms() | IF (eq(object\\\_type, "email") AND eq(metric, "bounced")) | cio\\\_email\\\_last\\\_bounced\\\_ts | Customer.io Email Last Bounced Date | date |
| epochms() | IF (eq(object\\\_type, "email") AND eq(metric, "clicked")) | cio\\\_email\\\_last\\\_clicked\\\_ts | Customer.io Email Last Clicked Date | date |
| epochms() | IF (eq(object\\\_type, "email") AND eq(metric, "opened")) | cio\\\_email\\\_last\\\_open\\\_ts | Customer.io Email Last Open Date | date |
| epochms() | IF (eq(object\\\_type, "email") AND eq(metric, "sent")) | cio\\\_email\\\_last\\\_send\\\_ts | Customer.io Email Last Sent Date | date |
| epochms() | IF (eq(object\\\_type, "in-app") AND eq(metric, "bounced")) | cio\\\_inapp\\\_last\\\_bounced\\\_ts | Customer.io In-App Last Bounced Date | date |
| epochms() | IF (eq(object\\\_type, "in-app") AND eq(metric, "clicked")) | cio\\\_inapp\\\_last\\\_clicked\\\_ts | Customer.io In-App Last Clicked Date | date |
| epochms() | IF (eq(object\\\_type, "in-app") AND eq(metric, "opened")) | cio\\\_inapp\\\_last\\\_open\\\_ts | Customer.io In-App Last Open Date | date |
| epochms() | IF (eq(object\\\_type, "in-app") AND eq(metric, "sent")) | cio\\\_inapp\\\_last\\\_send\\\_ts | Customer.io In-App Last Sent Date | date |
| epochms() | IF (eq(object\\\_type, "push") AND eq(metric, "bounced")) | cio\\\_push\\\_last\\\_bounced\\\_ts | Customer.io Push Last Bounced Date | date |
| epochms() | IF (eq(object\\\_type, "push") AND eq(metric, "clicked")) | cio\\\_push\\\_last\\\_clicked\\\_ts | Customer.io Push Last Clicked Date | date |
| epochms() | IF (eq(object\\\_type, "push") AND eq(metric, "opened")) | cio\\\_push\\\_last\\\_open\\\_ts | Customer.io Push Last Open Date | date |
| epochms() | IF (eq(object\\\_type, "push") AND eq(metric, "sent")) | cio\\\_push\\\_last\\\_send\\\_ts | Customer.io Push Last Sent Date | date |
| epochms() | IF (eq(object\\\_type, "slack") AND eq(metric, "failed")) | cio\\\_slack\\\_last\\\_bounced\\\_ts | Customer.io Slack Last Failed Date | date |
| epochms() | IF (eq(object\\\_type, "slack") AND eq(metric, "clicked")) | cio\\\_slack\\\_last\\\_clicked\\\_ts | Customer.io Slack Last Clicked Date | date |
| epochms() | IF (eq(object\\\_type, "slack") AND eq(metric, "sent")) | cio\\\_slack\\\_last\\\_send\\\_ts | Customer.io Slack Last Sent Date | date |
| epochms() | IF (eq(object\\\_type, "sms") AND eq(metric, "bounced")) | cio\\\_sms\\\_last\\\_bounced\\\_ts | Customer.io SMS Last Bounced Date | date |
| epochms() | IF (eq(object\\\_type, "sms") AND eq(metric, "clicked")) | cio\\\_sms\\\_last\\\_clicked\\\_ts | Customer.io SMS Last Clicked Date | date |
| epochms() | IF (eq(object\\\_type, "sms") AND eq(metric, "sent")) | cio\\\_sms\\\_last\\\_send\\\_ts | Customer.io SMS Last Sent Date | date |
| max(epochms()) | IF (eq(metric, "opened") OR eq(metric, "clicked")) | last\\\_active\\\_ts | Last Active | date |
| set(campaign\\\_id) |  | cio\\\_campaign\\\_ids | Customer.io Campaign IDs | \\\[\]string |
| set(campaign\\\_name) |  | cio\\\_campaign\\\_names | Customer.io Campaign Names | \\\[\]string |
| set(journey\\\_id) |  | cio\\\_journey\\\_ids | Customer.io Journeys | \\\[\]string |
| set(object\\\_type) |  | cio\\\_channels | Customer.io Channels | \\\[\]string |
| set(subject) |  | cio\\\_subjects | Customer.io Subjects | \\\[\]string |
| valuect(event) |  | cio\\\_events | Customer.io Event Counts | map\\\[string\]intsum |
| valuect(hash(urlmain(href))) |  | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF (eq(object\\\_type, "email") AND eq(metric, "opened")) | cio\\\_email\\\_hourlyopens | Customer.io Email Hourly Opens | map\\\[string\]intsum |

### Configuring Webhooks in Customer.io

The following steps are required before running the import job.

1.  In Lytics, under **Account Settings**, [create a new API token](/docs/lytics/account-settings#api-tokens).
2.  Login to Customer.io, navigate to production, **Admin > Integration** and then **Webhooks**. In the URL textbox, enter the following URL: https://api.lytics.io/collect/json/customerio?key=YOUR\_API\_TOKEN. Replace YOUR\_API\_TOKEN with the Lytics token you generated in the previous step.\\

![customerio_webhook.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1bdaaeb718b972fd/d89aa9d790d7c749c80bc18b/customerio_webhook.png)

1.  Click **Update** to save the changes.

Customer.io webhooks should now begin sending to the Lytics data stream customerio.

### Configuration

This import job simply adds the necessary queries to map the webhook data as User Fields, without running this job, raw events from the webhooks will not be processed for use in the audience builder.

Follow these steps to set up and configure an import job for Customer.io in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **Customer.io** from the list of providers.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Webhook** checkbox if you have already set the webhook to point at Lytics. If you haven't learn how [here](/docs/lytics/webhooks).
7.  Click **Start Import**.\\

![customerio-import.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am88450671445f88c1/19e4f5b1761ef75a7eece003/customerio-import.png)

Shortly after running the import job you should see user fields with Customer.io events populating on user profiles in your account.

## Export Users

Exporting your Lytics audiences to Customer.io will create or update user data in Customer.io.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting Data**: Lytics users that are a member of the selected audience(s) are exported to Customer.io.

This integration utilizes [Customer.io API](https://customer.io/docs/api/) to send user data. Once the user initiates the export job, it will send the user data that is in the selected audience. For each user to export, it will [create or update the user](https://customer.io/docs/api/#apitrackcustomerscustomers_update) in Customer.io with the user fields selected during [configuration](#configuration-1) as attributes.

### Fields

Customer.io supports the following fields as listed in their [documentation](https://customer.io/docs/api/#apitrackcustomerscustomers_update):

-   **ID** (required): which is used to identify the customer
-   **Email**: email address for the user
-   **Attributes**: Additional attributes that define the user.

Lytics allows you to send other user data fields as **Extra Attributes** in the job [configuration](#configuration).

You can also enable the **Membership Attribute** option to make the exported audience targetable in Customer.io. When enabled, each exported user is stamped with a boolean attribute named lytics\_<slug> (the slug of the triggering audience or flow step), set to true — for example, an audience with the slug disney\_products produces "lytics\_disney\_products": true on the user. You can then segment or target on that attribute in Customer.io.

**Note:** The membership attribute is set when a user enters the audience and is not removed when the user later exits. Use this toggle rather than adding \_segments to **Extra Attributes**.

### Configuration

Follow these steps to set up and configure an export job for Customer.io in the Lytics platform.

1.  Select **Customer.io** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience Name** input, Select the Lytics audience to export to Customer.io.
7.  From the **Unique Identifier Field** input, select the Lytics user field that will be used to identify users in Customer.io.
8.  From the **Email field** input, select the field name that contains the user's email.
9.  (Optional) From the **Extra Attributes** input, select list of extra attributes to send to customer.io.
10.  (Optional) Enable the **Membership Attribute** toggle to write a boolean attribute (lytics\_<slug>) marking each exported user as a member of this audience, so you can target them in Customer.io.
11.  (Optional) Select the **Existing Users** checkbox to immediately trigger pushes to users who currently exist in the selected Lytics audience.
12.  Click **Start Export**.\\

![customer-io-export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6055f064a0432154/769043251fe3fbebcf194889/customer-io-export.png)
