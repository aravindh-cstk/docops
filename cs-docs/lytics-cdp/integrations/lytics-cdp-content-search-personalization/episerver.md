---
title: "Episerver"
description: "Episerver offers solutions to automate and personalize campaigns across channels including web, mobile, email."
url: /lytics/episerver
---

# Episerver

## Episerver

## Overview

[Episerver](https://www.episerver.com/) offers solutions to automate and personalize campaigns across channels including web, mobile, email.

Integrating Episerver with Lytics allows you to export Lytics audiences to Episerver recipient lists for use in your marketing campaigns.

## Authorization

If you haven't already done so, you will need to set up an Episerver account before you begin the process described below. You will also need to create an [API user](https://world.episerver.com/documentation/developer-guides/campaign/rest-api/) that Lytics will use to import/export data. To create an Episerver API user, please contact your Episerver representative.\\ Then follow the steps below to authorize the integration.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Episerver** from the list of providers.
2.  Select the **User API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **Client ID** textbox, enter your Episerver Client ID.
6.  In the **User** textbox, enter the API User Name that Episerver created for you.
7.  In the **API Key** textbox, enter the API Key for the User above.
8.  Click **Save Authorization**.\\

![auth-add-episerver.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37cd1b4b6e95a4ea/d4fca2b8293c0bb924c782d9/auth-add-episerver.png)

## Import Activity

Import your Recipients' activity from Episerver into Lytics and use that data to build targeted audiences. Before you start this workflow, make sure that the user you added in the [authorization](#authorization) step has permission to create a Webhook on the Episerver side. To provide this permission to the API user, please contact Episerver support.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration and Webhook Integration.
-   **Frequency**: Activity data is received in Real-time Integration.
-   **Resulting Data**: Activity data for Episerver Recipients related to Episerver Campaigns will be collected as additional User Fields.

This integration utilizes the [Episerver API](https://api.campaign.episerver.net/apidoc/index.html#/) to register and activate a webhook. On each run of the job, it will:

1.  [Create the webhook](https://api.campaign.episerver.net/apidoc/index.html#/Webhooks/createWebhook) in Episerver.
2.  [Activate the webhook](https://api.campaign.episerver.net/apidoc/index.html#/Webhooks/activateWebhook).

The activated webhook URL will receive the data and post it in the episerver\_acitivity data stream in Lytics.

### Fields

The following fields are included in the default mapping for the episerver\_activity stream.

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| clientId |  | ep\\\_client\\\_id | Episerver Client ID which has this Recipient | string |
| email(mediaTypesToAddresses.EMAIL) |  | email unique id | Email Address | string |
| map("email", epochms()) | IF tolower(type) IN ("open", "click") | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| max(epochms()) | IF eq(tolower(type), "click") | ep\\\_lastclick\\\_ts | Episerver Last Click Event | date |
| max(epochms()) | IF eq(tolower(type), "open") | ep\\\_lastopen\\\_ts | Episerver Last Open Event | date |
| max(epochms()) |  | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(tolower(type), "click") | ep\\\_firstclick\\\_ts | Episerver First Click Event | date |
| min(epochms()) | IF eq(tolower(type), "open") | ep\\\_firstopen\\\_ts | Episerver First Open Event | date |
| recipientId |  | ep\\\_recipient\\\_id unique id | Episerver Recipient ID | string |
| set("email") | IF tolower(type) IN ("open", "click") | channels | All Channels Used | \\\[\]string |
| set(link) |  | ep\\\_links | Episerver Link URLs | \\\[\]string |
| set(mailingId) |  | ep\\\_mailing\\\_id | Episerver set of Mailings with Email Activity | \\\[\]string |
| set(userListId) |  | ep\\\_recipient\\\_list\\\_id | Episerver Recipient List ID | \\\[\]string |
| valuect(hash(urlmain(link))) | IF eq(tolower(type), "click") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(type) |  | ep\\\_event\\\_type | Episerver Count per Email Event | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Episerver in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Episerver** from the list of providers.
2.  Select the **Import Activity** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  (Optional) Select the type of Activity you would like to import from Episerver. If you do not select any, Lytics will import activity for all the event types.
8.  Click **Start Import**.\\

![episerver-import-activity.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5b3ab1f5006282fe/e52c25fe031eb6169091cb41/episerver-import-activity.png)

## Import Recipients

Import Recipients from your Episerver Lists into Lytics to create enriched user profiles that can then be exported as audiences for refined targeting.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting Data**: Full User Profiles for all Episerver Recipients.

This integration utilizes the [Episerver API](https://api.campaign.episerver.net/apidoc/index.html#/) to import Recipients. Each run of the job will proceed as follows:

1.  Make a call to [Episerver Recipients API](https://api.campaign.episerver.net/apidoc/index.html#/Recipients/selectRecipients) and bring in the Recipients' data from the selected Recipient Lists.
2.  Post this data in the episerver\_recipients data stream in Lytics.
3.  After successful completion, it will import new/updated recipients on a daily basis only if [configured](#configuration) to do so.

### Fields

The following fields are included in the default mapping for the episerver\_recipients stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email Address | string |
| id | ep\\\_recipient\\\_id unique id | Episerver Recipient ID | string |
| max(epochms()) | last\\\_active\\\_ts | Last Active | date |
| todate(created) | ep\\\_created\\\_date | Episerver Created Date for Recipient | date |
| todate(modified) | ep\\\_modified\\\_date | Episerver Modified Date for Recipient | date |

### Configuration

Follow these steps to set up and configure an import job for Episerver in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Episerver** from the list of providers.
2.  Select the **Import Recipients** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  from the **Recipient Lists** input, select the Episerver Recipient List(s) to import recipients from.
8.  (Optional) Using **Attributes to Import** , select the fields you want to import that are associated with the Recipients. If no fields are selected, none will be imported.
9.  Select the **Keep Active** checkbox, to bring in new/updated recipients on a daily basis. If not selected the import job will run once.
10.  Click **Start Import**.\\

![epi_import_recipients.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am49f5903573beb24e/c74cbac4f14f9aa1ed438a21/epi_import_recipients.png)

## Export Audiences

Send Lytics user profiles to your existing Episerver recipient lists. All existing members and new members of the selected audience are exported in real-time.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: Audience Trigger Integration.
-   **Frequency**: Real-time Integration, with a one-time Backfill of the audience after setup.
-   **Resulting Data**: Lytics users that are members of the selected audience(s) are exported to Episerver as recipients and put in the selected recipient List.

This integration utilizes the [Episerver REST API](https://world.episerver.com/documentation/developer-guides/campaign/rest-api/) to send users to the selected recipient list in Episerver. Once initiated, the job will:

1.  Run a backfill of the selected Lytics audience(s), and create or add [recipients](https://api.campaign.episerver.net/apidoc/index.html#/Recipients/addRecipients) to the Episerver recipient list.
2.  After a backfill, the job will receive real-time updates when a user enters or exits the audience.
3.  For each user entering the audience, it will [create and add the user](https://api.campaign.episerver.net/apidoc/index.html#/Recipients/addRecipients) in the Recipient List. It will also populate the audience column mapped during work [configuration](#configuration) with the concatenated value of the Lytics Audience that the user is in.
4.  For each user exiting in the selected audience, the job will [update](https://api.campaign.episerver.net/apidoc/index.html#/Recipients/modifyRecipientAttributes) the Episerver Recipient List field, which is mapped with audience membership using the concatenated value of the Lytics Audience that user will be in after this event.

### Fields

You can export any Lytics user fields to [Episerver fields](https://api.campaign.episerver.net/apidoc/index.html#/Recipient%20lists/getRecipientListAttributeNames) that are present in the selected recipient list. Lytics allows you to map user profile fields with the corresponding Episerver recipient list field as part of the job [configuration](#configuration-2).

### Configuration

Follow these steps to set up and configure an export job for Episerver in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Episerver** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/episerver/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job.
8.  From the **Recipient List** dropdown, select the Episerver recipient list you want to export your audiences to.
9.  From the **Identifier Field** dropdown, select the Lytics user field that represents the Recipient's Identifier ID in Episerver.
10.  (Optional) From the **Add Audience Membership** input, select the Episerver recipient list field where the Lytics Audience Membership will be populated.
11.  (Optional) Use the **Fields Mapping** input to map Lytics fields to the existing field of the selected Episerver Recipient list. Select Lytics data fields on the left and the Episerver recipient list fields on the right. If no fields are mapped, only the identifier field will be exported.
12.  Click **Start Export**.\\

![episerver-work-export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab801644a3434ef/32f2c4910b1d72ecc159fd94/episerver-work-export.png)

Users should be available in the Episerver recipient list within a few minutes of starting the export. Larger audiences may take a few hours to be completely added to the list.
