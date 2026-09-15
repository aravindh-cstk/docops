---
title: "Klaviyo"
description: "Klaviyo is an email marketing platform created for online businesses — featuring powerful email and SMS marketing automation."
url: /lytics/klaviyo
uid: blt5dde1d6fc66a9200
---

# Klaviyo

## Klaviyo

## Overview

[Klaviyo](https://www.klaviyo.com/) is an email marketing platform created for online businesses — featuring powerful email and SMS marketing automation.

Integrating Lytics with Klaviyo allows you to import user profiles and email campaign activity data (such as opens and clicks). You can also export users based on audience membership in real-time for use in email campaigns.

## Authorization

If you haven't already done so, you will need to set up a Klaviyo account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

There are two ways you can connect Lytics and Klaviyo:

-   Klaviyo API Key
-   Klaviyo OAuth Sign-In

### Klaviyo API Key

You would need Klaviyo private api key in order to use this authorization. Please refer to [Klaviyo documentation](https://help.klaviyo.com/hc/en-us/articles/115005062267) on how to generate a private api key. The key will need to be created with the following scopes:

-   Accounts Read Access
-   Events Read Access
-   List Full Access
-   Profiles Full Access
-   Subscriptions Full Access

Follow the steps below to add this authorization in Lytics:

1.  Select **Klaviyo** from the list of providers.
2.  Select the **Klaviyo API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **Private API Key** password box, enter your Private API Key credential.
6.  Click **Save Authorization**.

### Klaviyo OAuth Sign-In

When you select this authorization type, a Klaviyo login pop-up window will be visible. Once you log in, you will be redirected to the consent dashboard. Please allow the Lytics app access to the various scopes required for the import and export jobs.

Please refer to [Klaviyo OAuth documentation](https://developers.klaviyo.com/en/docs/set_up_oauth) for more information on how OAuth works with Klaviyo.

**When adding authorization via OAuth. You will see a pop up window that says "**App has not been reviewed**". Please proceed as Lytics is in the process of being verified by Klaviyo.**

Follow the steps below to add this authorization in Lytics:

1.  Select **Klaviyo** from the list of providers.
2.  Select the **Klaviyo Sign-In** method for authorization.
3.  Enter your Klaviyo login credentials in the login popup and confirm the authorization.
4.  In the **Label** text box, enter a name for the authorization.
5.  (optional) In the **Description** text box, enter a description for this authorization.
6.  Click **Save Authorization**.

![403ba95-klaviyo-oauth.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd3764171d18505be/241755aa96231543114bcff9/403ba95-klaviyo-oauth.png)

## Export Audiences

Exporting Lytics audiences to Klaviyo allows you to enhance your Klaviyo user base with new users or update existing users with cross-channel data from Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting data**: Lytics users that are members of the selected audiences are exported to Klaviyo and added to the selected list. Lytics users can be exported to an existing list or a new list. Only known users (with an email) are exported.

This integration utilizes the [Klaviyo API](https://developers.klaviyo.com/en/v2024-02-15/reference/api_overview) to send users to a list in Klaviyo. Once the export is started, the job will:

1.  [Check if an existing list was selected](https://developers.klaviyo.com/en/v2024-02-15/reference/get_list). If not, [create a new list](https://developers.klaviyo.com/en/v2024-02-15/reference/create_list) with the name provided in the configuration. If no name is provided, create a new list with the name format Lytics {Date}.
2.  Run a backfill by creating or updating existing users in Klaviyo. Users will be [subscribed to a list](https://developers.klaviyo.com/en/v2024-02-15/reference/subscribe_profiles) by default. Otherwise, users are [force added to a list](https://developers.klaviyo.com/en/v2024-02-15/reference/spawn_bulk_profile_import_job).
3.  After a backfill, the job will receive real-time updates when a user enters or exits the audience.
4.  For each user entering the selected audience(s), the job will create or update the user in Klaviyo and by default [subcribe the user](https://developers.klaviyo.com/en/v2024-02-15/reference/subscribe_profiles) or [force add the user](https://developers.klaviyo.com/en/v2024-02-15/reference/spawn_bulk_profile_import_job) to the Klaviyo list. Only known users with valid email identifiers are included in the export.
5.  For each user exiting the selected audience(s), the job will [remove the user](https://developers.klaviyo.com/en/v2024-02-15/reference/delete_list_relationships) from the selected list.

**Larger audiences may take a few days to be completely added to a list due to Klaviyo API limitations.**

### Fields

By default, Lytics exports the following fields to Klaviyo:

| Lytics User Field | Description | Klaviyo Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

In addition to the default fields, you can export a number of Lytics user fields to [Klaviyo fields](https://help.klaviyo.com/hc/en-us/articles/115005074627-Guide-to-Properties). Lytics allows you to map user profile fields with the corresponding Klaviyo field as part of the job [configuration](#configuration).

### Configuration

Follow these steps to set up and configure an export job for Klaviyo in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Klaviyo** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job.
8.  (Optional) From the **List** input, select an existing list to export to. If no list is selected, a new list will be created.
9.  (Optional) In the **New List Name** text box, enter a new list name to export to. If no list name is entered, a new list will be created with the name format Lytics {Date}. **NOTE**: A selected list name will take priority over creating a list with a new name.
10.  From the **Email Field** input, select the field that contains the user emails.
11.  From the **Phone Number Field** input, select the field that contains the user phone numbers.
12.  (Optional) From the **Map Fields** input, map all the fields from Lytics to Klaviyo by selecting the Lytics field on the left, and its Klaviyo destination on the right.
13.  (Optional) Select the **Historical Load** checkbox to state that this is a historical load. In order to send historical opt-in status, the consent date field must be set below and the date must be present on the user to be added.
14.  (Optional) From the **Email Marketing Consent** input, select email marketing consent for users in the exported audience. Different consent groups should be sent through separate jobs to the same list.
15.  (Optional) From the **Email Marketing Consent Date Field** input, select the field that has the date that the user consented to email marketing for this list.
16.  (Optional) From the **SMS Marketing Consent** input, select SMS marketing consent for users in the exported audience. Different consent groups should be sent through separate jobs to the same list.
17.  (Optional) From the **SMS Marketing Consent Date Field** input, select the field that has the date that the user consented to SMS marketing for this list.
18.  (Optional) Select the **Use Add to List instead of Subscribe to List** checkbox to force add profiles to a list. This will ignore a list's opt-in settings. Otherwise, profiles will be single or double opted into the list in accordance with that list’s settings.
19.  Click **Complete** to start a new job.

Users will be available in the Klaviyo list within a few minutes of starting the export. Larger audiences may take a few days to be completely added to the list. You can find the new list in Klaviyo under **Lists & Segments**.

## Import Users & Activity

Importing user and activity data from Klaviyo results in new users or existing user profiles supplemented with Klaviyo data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration every hour.
-   **Resulting data**: User Profiles and Raw Event Data.

This integration utilizes [Klaviyo APIs](https://developers.klaviyo.com/en/v2024-02-15/reference/api_overview) to import user and campaign data. Once the import is started, the job will:

1.  Iterate through all the selected lists and for each:
    1.  Get the [lists's members](https://developers.klaviyo.com/en/v2024-02-15/reference/get_list_profiles) and if the member's profile has been updated since the last import, the member's profile is passed to klaviyo\_users data stream.
2.  For all the selected lists, [get the activity metric data](https://developers.klaviyo.com/en/v2024-02-15/reference/get_events) since the last import. Activity metrics are passed to klaviyo\_activity stream.

### Fields

The following fields are included in the default mapping of the klaviyo\_users stream. If you want to import custom user fields from Klaviyo, please contact your Lytics account manager.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| $address1 | address\\\_1 | Address Line 1 | string |
| $address2 | address\\\_2 | Address Line 2 | string |
| $city | city | City | string |
| $country | country | Country | string |
| $first\\\_name | first\\\_name | First Name | string |
| $last\\\_name | last\\\_name | Last Name | string |
| $latitude | latitude | Latitude | number |
| $longitude | longitude | Longitude | number |
| $organization | organization | Organization | string |
| $phone\\\_number | phone | Phone Number | string |
| $region | region | State/Province | string |
| $timezone | timezone | Timezone | string |
| $zip | zip | Zip | string |
| email($email) | email unique id | Email Address | string |
| id | ka\\\_profile\\\_id unique id | Klaviyo Profile Id | string |
| set($title) | title | Title | \\\[\]string |
| set(campaign\\\_ids) | ka\\\_campaign\\\_ids | Klaviyo Campaign Ids | \\\[\]string |
| set(list\\\_ids) | ka\\\_list\\\_ids | Klaviyo Lists | \\\[\]string |
| todate(updated) | ka\\\_user\\\_updated | Klaviyo Profile Updated | date |

The following fields are included in the default mapping of the klaviyo\_activity stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| Client Name | mail\\\_client | Mail Client | string |
| Client OS Family | mail\\\_client\\\_os\\\_family | Mail Client Operating System Family | string |
| Client OS | mail\\\_client\\\_os | Mail Client Operating System | string |
| Client Type | mail\\\_client\\\_type | Mail Client Type | string |
| Email Domain | email\\\_domain | Email Domain | string |
| count(event\\\_name) | ka\\\_clickct | Klaviyo Click Count | int |
| count(event\\\_name) | ka\\\_openct | Klaviyo Opened Email Count | int |
| count(event\\\_name) | ka\\\_recievedct | Klaviyo Recieved Email Count | int |
| count(event\\\_name) | ka\\\_unsubct | Klaviyo Unsubscribe Count | int |
| email(email) | email unique id | Email Address | string |
| epochms() | ka\\\_recieved\\\_ts | Klaviyo Recieved Email Time | date |
| epochms() | ka\\\_unsub\\\_ts | Klaviyo Unsubscribe Time | date |
| event\\\_name | ka\\\_email\\\_event | Klaviyo Email Event | string |
| max(epochms()) | ka\\\_lastclick\\\_ts | Klaviyo Last Email Click | date |
| max(epochms()) | ka\\\_lastopen\\\_ts | Klaviyo Last Opened Email | date |
| min(epochms()) | ka\\\_firstclick\\\_ts | Klaviyo First Email Click | date |
| min(epochms()) | ka\\\_firstopen\\\_ts | Klaviyo First Opened Email | date |
| profile\\\_id | ka\\\_profile\\\_id unique id | Klaviyo Profile Id | string |
| set(Subject) | ka\\\_email\\\_subject | Klaviyo Email Subject | \\\[\]string |
| set(URL) | ka\\\_email\\\_url | Klaviyo Campaign URL | \\\[\]string |
| set(Campaign Name) | ka\\\_campaign\\\_name | Klaviyo Campaign Name | \\\[\]string |
| set(campaign\\\_id) | ka\\\_campaign\\\_ids | Klaviyo Campaign Ids | \\\[\]string |
| valuect(event\\\_name) | ka\\\_email\\\_eventct | Klaviyo Email Event Count | map\\\[string\]intsum |
| valuect(hash(urlmain(URL))) | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | ka\\\_hourlyclick | Klaviyo Email Clicks By Hour | map\\\[string\]intsum |
| valuect(hourofday()) | ka\\\_hourlyopen | Klaviyo Opened Emails By Hour | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Klaviyo in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Klaviyo** from the list of providers.
2.  Select the **Import Users and Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![Klaviyo import work config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0434ab3a0ad8f8f1/7edb402188c03fd1aff48bed/Screen_Shot_2021-06-14_at_2.17.59_PM.png)

1.  From the **Lists to Import** input, select lists to import. Lists available to be imported from Klaviyo are located in the left column. Campaigns added to the right column will be imported to Lytics.
2.  (Optional) Select the **Skip importing Klaviyo activity data** checkbox to skip importing Klaviyo activity.
3.  (Optional) Select the **Skip importing Klaviyo user profiles** checkbox to skip importing Klaviyo users.
4.  (Optional) In the **Start Date** text box, enter the date to start importing Klaviyo user and activity data. Please use the format yyyy-mm-dd, e.g. 2021-01-25.
5.  (Optional) Select the **Keep Updated** checkbox to continuously import data.
6.  Click **Start Import**.
7.  Navigate to **Building Profiles > Schema** and publish the required changes for the Klaviyo integration to surface these new fields into the Customer Profile.
