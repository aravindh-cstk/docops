---
title: "Zendesk"
description: "Zendesk"
url: /lytics/zendesk
uid: blt04a7cc392be144ab
---

# Zendesk

## Zendesk

## Overview

[Zendesk](https://www.zendesk.com/) is a customer support and ticket tool that makes communicating with customers and employees easy.

Connect Zendesk and Lytics to get a complete view of how your users are engaging with your brand. Lytics brings together all of the behavioral data from your marketing tools and can connect that data to your Zendesk tickets and users. This enables you to prioritize tickets based on user engagement or suppress marketing materials to users who have open tickets.

## Authorization

If you haven't already done so, you will need to set up a Zendesk account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Zendesk from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Zendesk supports the following authorization methods:
3.  [Zendesk API Key](#api-key): for Zendesk User Imports and User Exports
4.  [Zendesk Connect API Key](#connect-api-key): for Zendesk Connect Audience Exports
5.  Enter a **Label** to identify your authorization.
6.  (Optional) Enter a **Description** for further context on your authorization.
7.  Complete the configuration steps needed for your authorization. These steps will vary by method.
8.  Click **Save Authorization**.

### API Key

Use this authorization method for Zendesk User Imports and User Exports. To connect to Zendesk using an API Key, you will need three pieces of information:

-   **Your Zendesk Email Address**: This is the email address that you login to Zendesk with.
-   **Subdomain**: This is what comes after `://` and before `.zendesk.com` in the URL when you are using Zendesk.
-   **API Key**: To obtain your API key, navigate to your Zendesk API Settings. Enable token access to the API and copy your token:

![zendesk api token auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8e54d87d72979665/f5b3148c9a5459fa4e8be02b/img-0394.png)

Once you have retrieved your API Key:

1.  Enter the following:
2.  **Zendesk Email Address**
3.  **API Key**
4.  **Subdomain**
5.  **Description**: a sentence to help you identify the authorization.

You are now ready to start a Zendesk [Import](#import-tickets-and-users) or [Export](#export-users) job.![zendesk authorization legacy blurred](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am56b70dd3318bd0c6/41115a6899916eb2831fa2e3/img-0395.png)

### Connect API Key

Use this authorization method for Zendesk Connect Audience Exports.

1.  Enter the following:
2.  **API Key**: your Zendesk Connect API Key. This is the private key which can be found in your Zendesk Connect account under Settings > Environments.
3.  **Description**: a sentence to help you identify the authorization.

You are now ready to start a [Zendesk Connect Audience Export](#zendesk-connect-audience-export) job. ![zendesk connect authorization blurred](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ba3f3c7cefebc22/76db7933f731b9836f5502ec/img-0396.png)

## Import Tickets and Users

Import Zendesk users and tickets to leverage Lytics Insights and behavioral scoring to make sure you're reaching the right users with the right messages.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Users are imported in Batch Integration every 15 minutes.
-   **Resulting data**: User Profiles and User Fields.

This integration utilizes the [Zendesk Support API](https://developer.zendesk.com/rest_api/docs/support/introduction) to import user data. Once the import is started the job will:

1.  Retrieve all users in your Zendesk account via the `/api/v2/search.json` [endpoint](https://developer.zendesk.com/rest_api/docs/support/search#list-search-results).
2.  Retrieve all tickets in your Zendesk account via the `/api/v2/incremental/tickets.json` [endpoint](https://developer.zendesk.com/rest_api/docs/support/incremental_export#incremental-ticket-export).
3.  Ingest all users and tickets and emit them to the `zendesk_users` and `zendesk_tickets` data streams in Lytics.
4.  Sleep for 15 minutes.
5.  On subsequent runs, only users and tickets that have been modified since the last time they were imported will be retrieved.

### Fields

The following fields are included in the default mapping of the `zendesk_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| id | zd\\\_userid `unique id` | Zendesk User ID | string |
| email | email `unique id` | Email Address | string |
| email | emaildomain | Email Domain | string |
| name | name | Full Name | string |
| external\\\_id | zd\\\_external\\\_id | Zendesk External ID | string |
| locale | zd\\\_locale | Zendesk Locale | string |
| phone | zd\\\_phone | Zendesk Phone Number | string |
| role | zd\\\_role | Zendesk Role | string |
| timezone | zd\\\_timezone | Zendesk Timezone | string |
| tags | zd\\\_user\\\_tags | Zendesk User Tags | string |



The following fields are included in the default mapping of the `zendesk_tickets` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| requester\\\_id | zd\\\_userid `unique id` | Zendesk User ID | string |
|  | channels | All Channels Used | \\\[\]string |
| created\\\_at | last\\\_active\\\_ts | Last Active on Any Channel | date |
|  | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| created\\\_at | zd\\\_created\\\_dt | Last Zendesk Ticket Created Date | date |
| created\\\_at | zd\\\_first\\\_created\\\_dt | First Zendesk Ticket Created Date | date |
| has\\\_incidents | zd\\\_has\\\_incidents | Zendesk User Has Incidents | string |
| id | zd\\\_id | Zendesk Ticket ID | string |
| created\\\_at | zd\\\_last\\\_created\\\_dt | Last Zendesk Ticket Created Date | date |
| organization\\\_id | zd\\\_org\\\_id | Zendesk Organization ID | string |
| organization\\\_name | zd\\\_org\\\_name | Zendesk Organization Name | string |
| organization\\\_tags | zd\\\_org\\\_tags | Zendesk Organization Tags | string |
| via\\\_channel | zd\\\_platforms | Zendesk Platform Submitted Via | \\\[\]string |
| satisfaction\\\_rating\\\_score | zd\\\_satisfaction\\\_scores | Zendesk Ticket Satisfaction Scores | \\\[\]string |
| status | zd\\\_status | Zendesk Ticket Status | \\\[\]string |
| subject | zd\\\_subjects | Zendesk Ticket Subjects | \\\[\]string |
| submitter\\\_id | zd\\\_submitter\\\_ids | Zendesk Ticket Submitter IDs | \\\[\]string |
| tags | zd\\\_tags | Zendesk Ticket Tags | \\\[\]string |
| id | zd\\\_ticket\\\_ct | Zendesk Ticket Count | int |
| url | zd\\\_ticket\\\_urls | Zendesk Ticket URLs | \\\[\]string |
| type | zd\\\_types | Zendesk Ticket Types | \\\[\]string |
|  | zd\\\_yymm | Zendesk User Submitted Tickets Counts | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Zendesk in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Zendesk** from the list of providers.
2.  Select the **Import** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Tickets** checkbox to import all Zendesk tickets.
7.  Select the **Users** checkbox to import all Zendesk users.
8.  Click the **Start Import** button.

![Zendesk Import Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6faa78e703c81b90/4e994d26c14731bb07cd2c33/img-0397.png)

## Export Users

Export Lytics audiences to behavioral data and scoring from Lytics to reach the most relevant users in your Zendesk Support account.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration daily.
-   **Resulting data**: Your Zendesk user profiles will be updated with data from the fields you select in the work configuration. Lytics audience membership is also added as attributes on the Zendesk profiles.

This integration utilizes the [Zendesk Support API](https://developer.zendesk.com/rest_api/docs/support/introduction) to import user data. Once the import is started the job will:

1.  Scan the members currently in the audiences configured in **Audiences to Include**. If no audiences are configured, all Lytics users will be exported.
2.  Send the users in batches of 100 via the `/api/v2/users/update_many.json` [endpoint](https://developer.zendesk.com/rest_api/docs/support/users#update-many-users).
3.  Configured fields are sent in the requests so that fields are updated in Zendesk on every run.
4.  If the steps for [Including Lytics Audience Information](#including-lytics-audience-information) below are followed, fields will be added corresponding to the audiences the user is a member of. If **Audiences to Include** is populated, only those configured audiences will be added. Otherwise, all of the user's audiences will be added.
5.  After all users are sent, the job will sleep for 24 hours and then repeat the process.

### Fields

By default, Lytics exports the following fields to Zendesk: Export Users:

| Lytics User Field | Description | Zendesk Field | Type |
| --- | --- | --- | --- |
| full\\\_name | Full Name | Full Name | string |
| first\\\_name | First Name | First Name | string |
| last\\\_name | Last Name | Last Name | string |

### Configuration

Follow these steps to set up and configure an export job for Zendesk in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Zendesk** from the list of providers.
2.  Select the **Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job. ![zendesk export config new](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amacdd408557fa8702/d8c19c4dec8017ffde4c0e23/img-0398.png)
8.  If you wish to include audience information on the profiles exported to Zendesk, follow the instructions for [Including Lytics Audience Information](#including-lytics-audience-information) below.
9.  From the **Full Name Field** input, select the field that contains a user's full name.
10.  From the **First Name Field** input, select the field that contains a user's first name. Note that this is required if "Full Name Field" is not provided.
11.  From the **Last Name Field** input, select the field that contains a user's last name. Note that this is required if "Full Name Field" is not provided.
12.  From the **Phone Number Field** input, select the field that contains a user's phone number.
13.  From the **Email Address Field** input, select the field that contains a user's email address.
14.  From the **Timezone Field** input, select the field that contains a user's timezone.
15.  Click on the **Show Advanced Options** tab to expand the advanced configuration.
16.  From the **Audiences to Include** input, select the list of Lytics audiences you want to export to Zendesk. If this is left blank, all audiences that a user is a member of will be exported to Zendesk.
17.  From the **Time of Day** input, select the time of day to start export each day.
18.  From the **Timezone** input, select the timezone for the time of day.
19.  Click the **Start Export** button.

#### Including Lytics Audience Information

The first step in adding Lytics audience information to a Zendesk user is to create a new field in Zendesk to receive this information.

Start by clicking the gear Settings icon in Zendesk at the left of the screen. Then click on **User Fields** under the "Manage" heading, and click on the **Text** field type to create a new field:![zendesk userfields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9aca353b9da374c2/d25d89e418f2861283fb4e9e/img-0399.png)

You can give the field any title and description that you like, but the Field key _must_ be `member_of_lytics_group` for Lytics to find it.

![text user field correct fieldkey](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6b7d3ba432071ad8/306c3914b30a842a99046030/img-0400.png)

Click **Create Field** and you're ready to get Lytics audience information into Zendesk.

Start a Zendesk Export like in the section above and use the audience selector to tell Lytics which lists you want to be visible in Zendesk.![zendesk configure export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am85caeefd999c2804/b6a02ec6c4b7120289955bc2/img-0401.png) After you click **Start Export**, your Zendesk users will be updated with the names of the Lytics audiences they belong to. Lytics will update this information daily, along with any other fields you selected in the configuration steps above.

## Zendesk Connect Audience Export

Zendesk Connect manages proactive customer communication across channels, to deliver better customer experiences at scale. Export Lytics audiences to Zendesk Connect to reach your desired audiences on Zendesk Connect channels.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**:

REST API Integration with Audience Trigger Integration

-   **Frequency**: Real-time Integration
-   **Resulting data**: User Profiles and User Fields.

Users are updated in Zendesk according to the **Identifier Field** selected in the configuration. If the user does not yet exist in Zendesk, it will be created. User fields selected in the configuration will be added to the Zendesk profile as user attributes. An additional attribute will be added, which will include the slug of the Lytics audience being exported and the current membership status for the user in the audience, e.g. `lytics_test_audience: true`.

This integration utilizes the [Zendesk Connect API](https://developer.zendesk.com/embeddables/docs/connect/rest_api) to send user data. Once the export is started the job will:

1.  Enter events will be generated for all current members of the audience if the **Existing Users** option is selected during the configuration.
2.  Every time a user enters or exits the audience, the export will send the user and its fields via the `/v2/identify/batch` [endpoint](https://developer.zendesk.com/embeddables/docs/connect/rest_api#identifybatch). If the event is an enter, the audience slug attribute will be set to `true`. If the event is an exit, the audience slug attribute will be set to `false`.
3.  Mapped fields are updated in Zendesk every time an event for the user is processed.

### Fields

By default, Lytics exports the following fields to Zendesk Connect.

| Lytics User Field | Description | Zendesk Connect Field | Type |
| --- | --- | --- | --- |
| email | Email Address | first\\\_name | string |
| first\\\_name | First Name | first\\\_name | string |
| last\\\_name | Last Name | last\\\_name | string |

### Configuration

Follow these steps to set up and configure an export job for Zendesk in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information

1.  Select **Zendesk** from the list of providers.
2.  Select the **Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![Zendesk Connect Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am18f2b34ea07a9bcc/36fe2991292f9b333c4f649d/img-0402.png)
8.  From the **Identifier Field** input, select the field that contains a user's identifier.
9.  (optional) From the **Email Field** input, select the field that contains a user's email.
10.  (optional) From the **First Name Field** input, select the field that contains a user's first name.
11.  (optional) From the **Last Name Field** input, select the field that contains a user's last name.
12.  (optional) From the **Fields to Export** input, select a list of user fields to export.
13.  Select the **Existing Users** checkbox, select to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they leave or enter the audience.
14.  Click the **Start Export** button.
