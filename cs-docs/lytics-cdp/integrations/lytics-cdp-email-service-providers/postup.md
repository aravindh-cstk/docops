---
title: "PostUp"
description: "PostUp is an enterprise email solution that can be leveraged to target audiences through email, browser push, and on-site engagement. Integrating PostUp…"
url: /lytics/postup
---

# PostUp

## PostUp

## Overview

[PostUp](https://postup.com/) is an enterprise email solution that can be leveraged to target audiences through email, browser push, and on-site engagement. Integrating PostUp with Lytics allows you to keep your PostUp lists up-to-date with relevant user data from Lytics audiences that are enriched with behavioral scores, content affinities, and more.

## Authorization

If you haven't already done so, you will need to set up a PostUp account before you begin the process described below. To authenticate this integration, your level of system access should include privileges to perform the following API operations on PostUp:

-   [Importing through import template](https://apidocs.postup.com/docs/importing-through-import-template)
-   [Check import status](https://apidocs.postup.com/docs/check-import-status)
-   [Create list](https://apidocs.postup.com/docs/create-list)
-   [Return an array of lists](https://apidocs.postup.com/docs/return-an-array-of-lists)
-   [Create an import template](https://apidocs.postup.com/docs/create-an-import-template-1)

If you get an error on your workflow that looks like an authentication error, please contact your PostUp site administrator for more information about your user-level system access. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **PostUp** from the list of providers.
2.  Select the PostUp method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your PostUp **Username** and **Password** for the authorization.
6.  Click **Save Authorization**.

## Import Audiences & Activity Data

Import PostUp recipients and campaign activity into Lytics to gain insights into your users and campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Profiles and User Fields.

This integration utilizes the [PostUp APIs](https://apidocs.postup.com/docs/getting-started-on-my-api) to import user data. Once the import is started the job will:

1.  If it has been more then 24 hours since the last recipient import:
    1.  [Iterate through lists](https://apidocs.postup.com/docs/return-an-array-of-lists).
    2.  For each list, request [recipients in the list](https://apidocs.postup.com/docs/return-member-subscriptions-for-list)
    3.  Ingest the recipients, to the **postup\\\_users** stream
2.  [Request all campaigns](https://apidocs.postup.com/docs/return-all-campaigns)
3.  For each campaign, [request all the mailings](https://apidocs.postup.com/docs/return-all-mailings-under-a-specific-campaign) from the past 90 days.
4.  For each of the mailings [request a mailing report](https://apidocs.postup.com/docs/recipient-level-reporting), of each activity type:
    1.  Opens
    2.  Unique clicks
    3.  Hard Bounces
    4.  Soft Bounces
5.  Ingest the tab separated file for each report to the **postup\\\_activity** stream.

### Fields

The following fields are included in the default mapping of the postup\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(address) | email unique id | Email Address | string |
| recipientId | pu\\\_id unique id | PostUp Recipient ID | string |
| externalId | pu\\\_ext\\\_id unique id | PostUp External ID | string |
| set("email" or "mobile") | channels | All Channels Used (web, email, etc.) | \\\[\]string |
| emaildomain(address) | emaildomain | Email Domain | string |
| carrier | pu\\\_carrier | PostUp carrier | string |
| set(list\\\_catagory) | pu\\\_categories | PostUp List Categories | \\\[\]string |
| comment | pu\\\_comment |  | string |
| dateJoined | pu\\\_joined\\\_date | PostUp Date Joined | date |
| set(list\\\_id) | pu\\\_list\\\_ids | PostUp List IDs | \\\[\]string |
| set(list\\\_title) | pu\\\_list\\\_titles | PostUp List Titles | \\\[\]string |
| sourceSignupDate | pu\\\_source\\\_signup\\\_date | PostUp Date Signed Up Source | date |
| status | pu\\\_status |  | string |
| dateUnsub | pu\\\_unsub\\\_date | PostUp Date Unsubscribed | date |

The following fields are included in the default mapping of the postup\_activity stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| recipientId | pu\\\_id unique id | PostUp Recipient ID | string |
| email(address) | email unique id | Email Address | string |
| externalId | pu\\\_ext\\\_id unique id | PostUp External ID | string |
| set("email" or "mobile") | channels | All Channels Used (web, email, etc.) | \\\[\]string |
| emaildomain(address) | emaildomain | Email Domain | string |
| valuect(hash(urlmain(url\\\_clicked))) | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| map("email" or "mobile", epochms()) | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| bounce\\\_reason | pu\\\_bounce\\\_reason | PostUp Last Bounce Reason | string |
| count(event\\\_type) | pu\\\_click\\\_ct | PostUp Click Count | int |
| map(campaign\\\_id,1) | pu\\\_click\\\_ct\\\_by\\\_campaign | PostUp Campaign Click Count | map\\\[string\]int |
| valuect(hourofday()) | pu\\\_hourly\\\_open | PostUp Hourly Opens | map\\\[string\]intsum |
| valuect(hourofweek()) | pu\\\_hourofweek | PostUp Hour of Week Opens | map\\\[string\]intsum |
| epochms() | pu\\\_last\\\_click\\\_ts | PostUp Last Click | date |
| urlmain(url\\\_clicked) | pu\\\_last\\\_click\\\_url | PostUp Last URL Clicked | string |
| epochms() | pu\\\_last\\\_open\\\_ts | PostUp Last Open | date |
| valuect(yymm()) | pu\\\_monthly | PostUp Opens By Month | map\\\[string\]intsum |
| count(event\\\_type) | pu\\\_open\\\_ct | PostUp Open Count | int |
| map(campaign\\\_id,1 | pu\\\_open\\\_ct\\\_by\\\_campaign | PostUp Campaign Open Count | map\\\[string\]int |

### Configuration

Follow these steps to set up and configure an import of PostUp in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **PostUp** from the list of providers.
2.  Select the **Import** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![postup config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am377e936564530f64/b35240208e16822dc18bc2b8/postup_config.png)

1.  In the **Site ID** text input, enter your PostUp site ID. It can be found at the bottom of the **Server** tab in the PostUp UI
2.  ![PostUp site-id](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am95c1d3d134efab66/0390656ccc57e98fa64eca61/site-id.png)
3.  Click **Start Import**.

## Export Audiences

Improve and refine your email targeting on PostUp by exporting Lytics audiences containing real-time, event-driven recipient updates.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: Audience Trigger Integration
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Updates to users in Lytics are transmitted to PostUp lists. New recipients are added, existing recipients are updated. Recipients are never removed from PostUp lists.

This integration utilizes the PostUp [REST API](https://apidocs.postup.com/docs/getting-started-on-my-api) to create and update recipients in PostUp lists.

1.  If no existing PostUp list is specified, one will be created.
2.  As users enter the Lytics audience being exported, they will be created and added to the PostUp list.
3.  If users are exiting the selected Lytics audience, you can configure the job to remove users from PostUp list.
4.  User updates are pushed to PostUp in batches via the [PostUp import endpoint](https://apidocs.postup.com/docs/importing-through-import-template). As users are updated in Lytics, updates are pushed to PostUp and the selected field mappings are modified.

### Fields

By default, Lytics exports the following field to PostUp:

| Lytics User Field | Description | \\\_\\\_\\\_ Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

Lytics fields can be mapped to a selection of standard PostUp fields. You can also map to custom PostUp fields, which must be first created in PostUp:

1.  From the PostUp main menu, select Settings.
2.  Select Custom Fields.
3.  At the bottom of the page, under Add New Field, type your field name and select the appropriate type (note: Lytics does not support types Currency and Single Character).
4.  Click Save.

In the Lytics UI, select field mappings as described in step 11 below.

### Configuration

Follow these steps to set up and configure an export of an Audience in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **PostUp** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![postup-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ccfe61cd05a9a3a/c6fdbfe6c70518a40a063871/postup-export.png)
8.  **Audience**: select the Lytics audience to sync to a PostUp list.
9.  **PostUp List**: (optional) select the PostUp list to update. If no list is selected, a new list will be created in PostUp called "Lytics + audience tag".
10.  **Email Field**: Lytics field name that contains the user’s email. The Lytics Email Address is the default.
11.  **Identifier Field Mapping**: (optional) select the Lytics fields you would like to export, along with your desired corresponding PostUp fields.
12.  **Remove Subscribers from List**: (optional) check to remove a user from the selected PostUp list when that user exits the selected Lytics audience.
13.  Click **Start Export**.
