---
title: "Localytics"
description: "Localytics is a leading mobile engagement platform giving companies the insights and tools they need to improve their mobile app acquisition, engagement…"
url: /lytics/localytics
---

# Localytics

## Localytics

## Overview

[Localytics](https://www.localytics.com/) is a leading mobile engagement platform giving companies the insights and tools they need to improve their mobile app acquisition, engagement, and retention efforts.

Integrating Lytics with Localytics enables mobile profile resolution, activity, and marketing activation. You can import profile and mobile activity from Localytics, export your behavioral audiences from Lytics, and trigger push notifications directly through Localytics.

## Authorization

If you haven't already done so, you will need to set up a [Localytics account](https://uplandsoftware.com/localytics/) before you begin the process described below and retrieve [organization level API keys](https://help.uplandsoftware.com/localytics/help/_SettingsSystem/Settings.htm#API) from Localytics which will be used to make API calls. After retrieving your API keys from Localytics, follow the directions below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Localytics** from the list of providers.
2.  Select the **Localytics Keys** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **API Key** text box, enter your API Key credential.
6.  In the **API Secret** password box, enter your API Secret credential.
7.  Click **Save Authorization**.

## Import Activity

Import mobile activity from Localytics to add mobile behavior data to user profiles in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: One-time Batch Integration, or hourly continuous imports.
-   **Resulting Data**: Raw Event Data.

This integration utilizes the [Localytics raw logs export API](https://docs.localytics.com/dev/export-apis.html#raw-log-exports) to retrieve event data:

1.  Every hour, requests the full hour of logs for the mobile activity from 2 hours prior period.
2.  Ingests the activity into the Lytics data stream localytics\_activity

### Fields

The following fields are included in the default mapping of the localytics\_activity stream:

| Source Field | Conditional (IF) | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| advertising\\\_id |  | idfa | Current IDFA | string |
| app |  | localytics\\\_app | Localytics App | string |
| app\\\_ver |  | localytics\\\_app\\\_ver | Localytics App Version | string |
| carrier |  | localytics\\\_device\\\_carrier | Localytics Device Carrier | string |
| count(type) | eq(action, "e") | localytics\\\_eventct | Localytics Event Count | int |
| count(type) | eq(action, "o") | localytics\\\_openct | Localytics Open Count | int |
| custom.drop\\\_reason |  | localytics\\\_drop\\\_reason | Localytics Last Drop Reason | string |
| custom.request\\\_id |  | localytics\\\_request\\\_id | Localytics Last Request ID | string |
| customer\\\_ids.customer\\\_id |  | localytics\\\_customer\\\_id unique id | Localytics Customer ID | string |
| device\\\_timezone |  | device\\\_timezone | Device Timezone | string |
| device\\\_uuid |  | localytics\\\_device\\\_id | Localytics Device ID | string |
| google\\\_advertising\\\_id |  | google\\\_aid | Current Google Advertising ID | string |
| language |  | language | Language | string |
| limit\\\_advertising |  | localytics\\\_limit\\\_advertising | Localytics Limit Advertising | bool |
| max(epochms()) | eq(action, "e") | localytics\\\_lastevent\\\_ts | Localytics Last Event | date |
| max(epochms()) | eq(action, "o") | localytics\\\_lastopen\\\_ts | Localytics Last Open | date |
| name |  | localytics\\\_event\\\_name | Localytics Last Event Name | string |
| os\\\_ver |  | localytics\\\_os\\\_version | Localytics OS Version | string |
| platform |  | localytics\\\_platform | Localytics Platform | string |
| push\\\_status |  | localytics\\\_push\\\_status | Localytics Push Status | string |
| set(advertising\\\_id) |  | idfas unique id | IDFAs | \\\[\]string |
| set(google\\\_advertising\\\_id) |  | gaids unique id | Google Advertising IDs | \\\[\]string |
| type |  | localytics\\\_type | Localytics Type | string |
| user\\\_type |  | localytics\\\_user\\\_type | Localytics User Type | string |

### Configuration

Follow these steps to set up and configure an import job for localytics in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Localytics**.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Complete the configuration steps for your job.
5.  From the **Localytics App** input, select the Localytics app to import activity data from.
6.  In the **Start Date** text box, enter a past date to pull in historical activity data. If left empty, only new activity data will be imported. Please use the format yyyy-mm-dd, e.g. 2019-03-27.
7.  Select the **Keep Updated** checkbox, to continuously import Localytics activity.
8.  Click **Start Import**.

## Import Profiles

Import profile data from Localytics to add mobile user data to user profiles in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: One-time Batch Integration, or daily continuous import.
-   **Resulting Data**: Full User Profiles from Localytics.

This integration utilizes the the [Localytics Profile Export API](https://docs.localytics.com/dev/export-apis.html#profile-exports). You will need to set up the ProfileDB export in the Localytics UI as described in the linked doc. Once the export is started, and then the import started in Lytics, the job will:

1.  Import the Localytics ProfileDB export file.
2.  Every day at 16:00 UTC, if _Profile Changes_ is selected.
    -   change logs from Localytics for the prior 24 hours are imported
    -   on the first of the month a full profile import is run instead of the change logs
3.  If **Profile Changes** is not selected, the full profile export will be imported every day.
4.  Ingested profile data is written to the localytics\_profiles data stream in Lytics.

### Fields

The following fields are included in the default mapping of the localytics\_profiles stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| \\\_ll.advertising\\\_id | idfa | Current IDFA | string |
| \\\_ll.carrier | localytics\\\_device\\\_carrier | Localytics Device Carrier | string |
| \\\_ll.device\\\_timezone | device\\\_timezone | Device Timezone | string |
| \\\_ll.device\\\_uuid | localytics\\\_device\\\_id | Localytics Device ID | string |
| \\\_ll.google\\\_advertising\\\_id | google\\\_aid | Current Google Advertising ID | string |
| \\\_ll.language | language | Language | string |
| \\\_ll.last\\\_session\\\_date | localytics\\\_last\\\_session\\\_date | Localytics Last Session Date | date |
| \\\_ll.limit\\\_advertising | localytics\\\_limit\\\_advertising | Localytics Limit Advertising | bool |
| \\\_ll.os\\\_ver | localytics\\\_os\\\_version | Localytics OS Version | string |
| \\\_ll.platform | localytics\\\_platform | Localytics Platform | string |
| \\\_ll.push\\\_status | localytics\\\_push\\\_status | Localytics Push Status | string |
| \\\_ll.raw\\\_customer\\\_id | localytics\\\_customer\\\_id unique id | Localytics Customer ID | string |
| \\\_ll.type | localytics\\\_type | Localytics Type | string |
| \\\_ll.user\\\_type | localytics\\\_user\\\_type | Localytics User Type | string |
| $email | email unique id | Email Address | string |
| $first\\\_name | first\\\_name | First Name | string |
| $full\\\_name | name | Full Name | string |
| $last\\\_name | last\\\_name | Last Name | string |
| profiledb\\\_id | localytics\\\_profiledb\\\_id | Localytics Profile DB ID | string |
| set(\\\_ll.advertising\\\_id) | idfas unique id | IDFAs | \\\[\]string |
| set(\\\_ll.google\\\_advertising\\\_id) | gaids unique id | Google Advertising IDs | \\\[\]string |

### Configuration

Follow these steps to set up and configure an import job for Localytics in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Localytics**.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Complete the configuration steps for your job.
5.  In the **ProfileDB ID** numeric field enter the ID of the Localytics Profile DB to pull profile data from. See [Localytics documentation](https://docs.localytics.com/dev/export-apis.html#profile-exports-transactions) for details.
6.  Select the **Keep Updated** checkbox to continuously import Localytics profiles every day. Uncheck to run import once.
7.  From the **Update Type** input select whether to pull from the complete profile export or the profile changes from Localytics. To use profile changes, a profile changes export must be started in Localytics. Profile changes will result in less data being ingested into Lytics, and may lead to faster profile updates. Select Full Profile DB if profile changes is not available.
8.  Click **Start Import**.

Profile data should appear in the localytics\_profile stream within an hour, and the mapped user fields above will be added to the user profiles as new profile data is imported.

## Triggered Push

Trigger push notifications through Localytics when users enter a Lytics audience.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting Data**: Custom mapping between Lytics user fields and Localytics push configuration.

This integration utilizes the [Localytics Push API](https://docs.localytics.com/dev/push-api.html#push-api) to send push notifications to Localytics users. As new users enter a Lytics audience who have a Localytics ID, a push notification will be triggered via Localytics.

### Fields

By default, Lytics exports the following fields to Localytics. Other user fields can be sent using the templating explained [below](#templating).

| Lytics User Field | Description | Localytics Field | Type |
| --- | --- | --- | --- |
| localytics\\\_customer\\\_id | Localytics Customer ID Field | Customer ID Field | string |
|  |  |  |  |

### Configuration

Follow these steps to set up and configure triggered push notifications job to Localytics in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Localytics**.
2.  Select the **Export Triggered Push** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Select the audience to export.
5.  Complete the configuration steps for your job.
6.  Select the **Existing Users** checkbox, to check this to immediately trigger pushes to users who currently exist in the selected Lytics audience.
7.  From the **Localytics App** input, select the Localytics app to send messages from.
8.  From the **Customer ID Field** input, select field that contains the ID that uniquely identifies the Localytics customer.
9.  In the **Alert** input, enter the push notification text.
10.  In the **Alert Title** input, optional - enter a short string describing the purpose of the notification.
11.  In the **Alert Subtitle** input, optional - enter a short string that expands on the title. This is only displayed for users running iOS 10 (and above).
12.  In the **Request ID** input, optional - enter the unique request ID. Typically, you will send a GUID/UUID for this field. Localytics will automatically de-duplicate requests within 24 hours of each other, at the app\\\_id + customer\\\_id level, that are received for the same request\\\_id. Maximum of 255 characters length.
13.  In the **Label 1** input, optional - specifies a set of optional labels associated with this request. These labels are intended to provide a finer level of granularity in measuring and analyzing campaign performance data than just campaign\\\_key and request\\\_id.
14.  In the **Label 2** input, optional - specifies a set of optional labels associated with this request. These labels are intended to provide a finer level of granularity in measuring and analyzing campaign performance data than just campaign\\\_key and request\\\_id.
15.  In the **Label 3** input, optional - specifies a set of optional labels associated with this request. These labels are intended to provide a finer level of granularity in measuring and analyzing campaign performance data than just campaign\\\_key and request\\\_id.
16.  In the **Label 4** input, optional - specifies a set of optional labels associated with this request. These labels are intended to provide a finer level of granularity in measuring and analyzing campaign performance data than just campaign\\\_key and request\\\_id.
17.  **Other Push Options** - The rest of the options map directly to options available via the Push API in Localytics. See Localytics [Push API](https://docs.localytics.com/dev/push-api.html#getting-started) documentation for more information.
18.  In the **iOS Sound** text box, optional - enter the sound file in the app bundle or in the Library/Sounds folder of the app’s data container. If the sound file doesn’t exist or default is specified as the value, the default alert sound is played.
19.  In the **iOS Category** text box, optional - enter the category of actions (interactive push) to display to the user upon delivery.
20.  In the **iOS Badge** input, optional - specifies the unread badge number to display upon delivery.
21.  In the **iOS Deep Link URL** input, optional - enter the url of the rich media attachment.
22.  In the **iOS Attachment URL** input, optional - enter the url of the rich media attachment.
23.  In the **iOS Attachment Type** input, optional - enter the media type of the rich media attachment.
24.  In the **Android Priority** text box, optional - enter whether the notification should pre-emptively wake the device from Doze mode.
25.  In the **Android Channel** text box, optional - enter the channel for the notification.
26.  From the **Android Deep Link URL** input, optional - enter the deeplink url.
27.  From the **Android Attachment URL** input, optional - enter the url of the rich media attachment.
28.  Click **Complete** to start the job.

### Templating

User profile fields can be dynamically inserted into an alert using templating of supported fields. The Localytics fields including the alert title, alert subtitle, and alert body fields. For template examples and details on how to find available user fields, see the [Templating](/docs/lytics/integrated-marketing-tools#templating) section.

## Export Audiences

Send Lytics audiences and user fields to Localytics to refine your targeting and improve engagement on your mobile marketing campaigns through Localytics. All existing members and new members of your selected Lytics audiences will be exported in real-time.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time), with a one-time [backfill](/docs/lytics/integrated-marketing-tools#backfill) of the audience after setup.
-   **Resulting Data**: Lytics users that are members of the selected audiences are exported as Localytics profiles.

This integration utilizes the [Localytics Profile API](https://docs.localytics.com/dev/profile-api.html#profile-api) to create/update Localytics profiles. Once initiated, the workflow will:

1.  Run a backfill of the selected Lytics audiences, and create or update [Localytics profiles](https://docs.localytics.com/dev/profile-api.html#profile-creating-and-updating).
2.  After a backfill, the workflow will receive real-time updates when a user enters or exits the audience.

Creating or updating a Localytics profile is done using the **Profile ID Field** which can be [configured](#configuration) when setting up this workflow. If the Lytics user with selected **Profile ID Field** does not exist in Localytics, then Lytics will create a Localytics profile with that ID and fill their attributes with the ones selected in the workflow.

If the user being exported to Localytics already exists, then Lytics will update its attribute. The attribute values will be overwritten except for the lytics\_audiences attribute. The update will happen only for the attributes that are selected during [configuration](#configuration). If the Localytics user has other attributes which are not in the workflow configuration, then those attributes will remain unchanged in Localytics.

For each user entering the audience, it will also create/update the lytics\_audiences set attribute for the profile with the slug of Lytics audiences that the user is in. If this attribute already exists, Lytics will update its value depending on enter/exit, not overwrite it. For each user exiting the audience, the workflow will remove the Lytics audience slug from the lytics\_audiences attribute of Localytics profile for that exit event.

### Fields

You can export any Lytics user fields to [Localytics](https://docs.localytics.com/dev/profile-api.html#profile-data-types) as profile attributes. Lytics allows you to select user fields as part of the workflow configuration described below.

### Configuration

Follow these steps to set up and configure an export job for Localytics in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Localytics**.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/localytics/authorization).
4.  Select the audiences to export.
5.  Complete the configuration steps for your job.
6.  Select the **Existing Users** checkbox to export users who are already in the selected Lytics audiences.
7.  From the **Localytics App** input select the Localytics app to send your Lytics audiences to.
8.  From the **Profile ID Field** input select the field in the Lytics audience user that corresponds to Localytics profile ID. If a user does not exist for this ID in Localytics, then we will create the user with this ID. **Note:** Lytics users who do not have the selected ID field will be dropped.
9.  From the **Special Profile Attributes** input select the fields in the Lytics audience user that are special profile IDs in Localytics. Please refer to the [Localytics documentation](https://docs.localytics.com/dev/profile-api.html#profile-special-ids) for more information on this.
10.  From the **Attributes** input select the field in the Lytics audience user that you would like to send as Localytics profile attributes.
11.  Select the **Audience Membership** checkbox to send Lytics audience membership as an attribute of the Localytics profile. Checking this will create a set attribute in Localytics with name lytics\_audiences and populate it with Lytics audience slugs that the user is part of.
12.  Click **Start Export**.
