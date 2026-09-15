---
title: "Iterable"
description: "Iterable is an integrated, cross-channel platform that supports email, mobile, and web touch points."
url: /lytics/iterable
uid: bltc241bacd67e96540
---

# Iterable

## Iterable

## Overview

[Iterable](https://iterable.com/) is an integrated, cross-channel platform that supports email, mobile, and web touch points.

Integrating Lytics with Iterable allows you to import user and activity data such as clicks and opens to your Lytics user profiles, or export users based on audience membership in real-time to update lists or trigger timely email or push notifications.

The Lytics Canvas supports Iterable email, SMS, Push, and In-app Experiences. Using the Lytics Canvas you can manage the cross-channel customer lifecycle and use Iterable campaigns as your email and mobile touch points.

Read more on using Iterable with Lytics below. Plus, check out our comprehensive [Playbook](https://www.lytics.com/assets/playbook-iterable-improve-email-conversion-rates.pdf) and blog, [How to increase email conversions with intent based personalization](https://www.lytics.com/blog/how-to-increase-email-conversions-intent-based-personalization-playbook/).

## Authorization

If you haven't already done so, you will need to setup an Iterable account before you begin the process described below. You will also need to be a Admin or Super Admin user who can [add or edit API Keys](https://support.iterable.com/hc/en-us/articles/205480335-Account-Roles-and-Permissions) as you will need an [Iterable API Key](https://support.iterable.com/hc/en-us/articles/204780579-API-Overview-and-Sample-Payloads#apikey) to authorize Lytics to use your Iterable account.

**Note:** If you are setting up [Iterable webhooks](#configure-webhooks) you will also need a [Lytics API token](/docs/lytics/account-settings#api-tokens). You can find your API tokens in your [account settings](/docs/lytics/account-settings).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Iterable** from the list of providers.
2.  Select the Iterable method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **API Key** textbox, enter your Iterable API key.
6.  Click **Save Authorization**.

![Iterable Configure Step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amce6647c95e6de2bd/5560008bbebac60579b1ad9f/Screen_Shot_2021-03-26_at_10.04.58_AM.png)

## Import Audiences & Activity Data

Import Iterable users and activity data to add information such as clicks and opens to your Lytics user profiles. Use that data to build behavioral audiences and refine your targeting.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration to download CSV formatted data.
-   **Frequency**: Batch Integration imported once, or on an hourly, continuous basis.
-   **Resulting Data**: Full User Profiles for all Iterable users complete with activity/interaction data.

This integration utilizes the [Iterable APIs](https://api.iterable.com/api/docs) to receive user data. On each run of the job, it will:

1.  [Query for a CSV of all users](https://api.iterable.com/api/docs#export_exportDataCsv) in your Iterable account. This CSV is imported to the iterable\_users stream in Lytics.
2.  [Query for a CSV of all events](https://api.iterable.com/api/docs#export_exportDataCsv) including email, SMS, custom, push, and in-app events. These events are imported to Lytics streams based on the type of activity, i.e. iterable\_activity (email), iterable\_push\_activity, iterable\_sms\_activity, and iterable\_in\_app\_activity.

In addition to running this job, you can also use webhooks for real-time event capture of your Iterable events. Learn more about how to [configure webhooks](#configure-webhooks) in Iterable to send data to Lytics.

### Fields

The fields that are included in the default mapping for various streams (user, email, in-app, push and sms) are shown below in their respective stream tables:

**Stream: iterable\_users**

The following fields are included in the default mapping of the iterable\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| city | city | City | string |
| country | country | Country | string |
| email(email) | email unique id | Email Address | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| firstName | first\\\_name | First Name | string |
| gender | gender | Gender | string |
| lastName | last\\\_name | Last Name | string |
| timeZone | timezone | Timezone | string |
| userId | it\\\_user\\\_id | Iterable User Id | string |

Lytics will import any and all custom fields from Iterable, however this stream does not automatically map these fields. Any custom fields brought in from Iterable must be mapped.



**Stream: iterable\_activity**

The following fields are included in the default mapping of the iterable\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "emailBounce") | it\\\_bouncect | Iterable Bounce Count | int |
| count(event) | IF eq(event, "emailClick") | it\\\_clickct | Iterable Click Count | int |
| count(event) | IF eq(event, "emailOpen") | it\\\_openct | Iterable Open Count | int |
| count(event) | IF eq(event, "emailSend") | it\\\_sendct | Iterable Send Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| map(experience\\\_id, 1) | IF eq(event, "emailClick") | it\\\_conversions | Converted on Iterable Experience | map\\\[string\]int |
| map(experience\\\_id, 1) | IF eq(event, "emailOpen") | it\\\_impressions | Reached with Iterable Experience | map\\\[string\]int |
| max(epochms()) | IF eq(event, "emailBounce") | it\\\_lastbounce\\\_ts | Iterable Last Bounce | date |
| max(epochms()) | IF eq(event, "emailClick") | it\\\_lastclick\\\_ts | Iterable Last Click | date |
| max(epochms()) | IF eq(event, "emailOpen") | it\\\_lastopen\\\_ts | Iterable Last Open | date |
| max(epochms()) | IF eq(event, "emailSend") | it\\\_lastsend\\\_ts | Iterable Last Send | date |
| max(epochms()) | IF eq(event, "emailUnSubcribe") | it\\\_unsub\\\_ts | Iterable Unsub Date | date |
| max(epochms()) | IF eq(event, "emailOpen") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "emailBounce") | it\\\_firstbounce\\\_ts | Iterable First Bounce | date |
| min(epochms()) | IF eq(event, "emailClick") | it\\\_firstclick\\\_ts | Iterable First Click | date |
| min(epochms()) | IF eq(event, "emailOpen") | it\\\_firstopen\\\_ts | Iterable First Open | date |
| min(epochms()) | IF eq(event, "emailSend") | it\\\_firstsend\\\_ts | Iterable First Send | date |
| recipientState |  | state | State | string |
| set(campaignId) |  | it\\\_campaigns | Iterable Campaigns IDs | \\\[\]string |
| set(campaignName) |  | it\\\_campaign\\\_names | Iterable Campaigns | \\\[\]string |
| set(channelId) |  | it\\\_channels | Iterable Channels | \\\[\]string |
| set(city) |  | it\\\_activity | Iterable Open Cities | \\\[\]string |
| set(device) |  | it\\\_devices | Iterable Open Devices | \\\[\]string |
| set(emailListId) |  | it\\\_lists | Iterable Lists | \\\[\]string |
| set(ip) |  | ip\\\_addresses | IP Addresses | \\\[\]string |
| set(messageId) |  | it\\\_messages | Iterable Messages | \\\[\]string |
| set(messageTypeId) |  | it\\\_message\\\_types | Iterable Message Types | \\\[\]string |
| set(oneof(linkUrl, url)) |  | it\\\_email\\\_urls | Iterable Click URLs | \\\[\]string |
| set(region) |  | it\\\_regions | Iterable Open Regions | \\\[\]string |
| set(templateId) |  | it\\\_templates | Iterable Template IDs | \\\[\]string |
| set(templateName) |  | it\\\_template\\\_names | Iterable Templates | \\\[\]string |
| set(userAgent) |  | it\\\_user\\\_agents | Iterable User Agents | \\\[\]string |
| set(workflowId) |  | it\\\_workflow\\\_ids | Iterable Workflow IDs | \\\[\]string |
| set(workflowName) |  | it\\\_workflow\\\_names | Iterable Workflow Names | \\\[\]string |
| signupSource |  | it\\\_signup\\\_source | Iterable Signup Source | string |
| unsubSource | IF eq(event, "emailUnSubcribe") | it\\\_unsubreason | Iterable Unsubscribe Reason | string |
| valuect(event) |  | it\\\_event | Iterable Events | map\\\[string\]intsum |
| valuect(hash(urlmain(oneof(linkUrl, url)))) |  | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(event, "emailOpen") | it\\\_hourlyopen | Iterable Hourly Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event, "emailOpen") | it\\\_hourofweek | Iterable Hour of Week Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event, "emailOpen") | it\\\_monthly | Iterable Events By Month | map\\\[string\]intsum |



**Stream: iterable\_in\_app\_activity**

The following fields are included in the default mapping of the iterable\_in\_app\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "inAppClick") | it\\\_in\\\_app\\\_clickct | Iterable In-App Click Count | int |
| count(event) | IF eq(event, "inAppOpen") | it\\\_in\\\_app\\\_openct | Iterable Open In-App Message Open | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| map(experience\\\_id, 1) | IF eq(event, "inAppOpen") | it\\\_conversions | Converted on Iterable Experience | map\\\[string\]int |
| map(experience\\\_id, 1) | IF eq(event, "inAppClick") | it\\\_impressions | Reached with Iterable Experience | map\\\[string\]int |
| max(epochms()) | IF eq(event, "inAppClick") | it\\\_last\\\_in\\\_app\\\_click\\\_ts | Iterable Last In-App Click | date |
| max(epochms()) | IF eq(event, "inAppOpen") | it\\\_last\\\_in\\\_app\\\_open\\\_ts | Iterable Last In-App Message Open | date |
| max(epochms()) | IF eq(event, "inAppOpen") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "inAppClick") | it\\\_first\\\_in\\\_app\\\_click\\\_ts | Iterable First In-App Click | date |
| min(epochms()) | IF eq(event, "inAppOpen") | it\\\_first\\\_in\\\_app\\\_open\\\_ts | Iterable First In-App Message Open | date |
| set(campaignId) |  | it\\\_campaigns | Iterable Campaigns IDs | \\\[\]string |
| set(campaignName) |  | it\\\_campaign\\\_names | Iterable Campaigns | \\\[\]string |
| valuect(event) |  | it\\\_event | Iterable Events | map\\\[string\]intsum |



**Stream: iterable\_push\_activity**

The following fields are included in the default mapping of the iterable\_push\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "pushBounce") | it\\\_push\\\_bouncect | Iterable Bounce Push Count | int |
| count(event) | IF eq(event, "pushOpen") | it\\\_push\\\_openct | Iterable Open Push Count | int |
| count(event) | IF eq(event, "pushSend") | it\\\_push\\\_sendct | Iterable Send Push Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| map(experience\\\_id, 1) | IF eq(event, "pushOpen") | it\\\_conversions | Converted on Iterable Experience | map\\\[string\]int |
| map(experience\\\_id, 1) | IF eq(event, "pushSend") | it\\\_impressions | Reached with Iterable Experience | map\\\[string\]int |
| max(epochms()) | IF eq(event, "pushBounce") | it\\\_last\\\_push\\\_bounce\\\_ts | Iterable Last Push Bounce | date |
| max(epochms()) | IF eq(event, "pushOpen") | it\\\_last\\\_push\\\_open\\\_ts | Iterable Last Push Open | date |
| max(epochms()) | IF eq(event, "pushSend") | it\\\_last\\\_push\\\_send\\\_ts | Iterable Last Push Send | date |
| max(epochms()) | IF eq(event, "pushUninstall") | it\\\_unsub\\\_ts | Iterable Unsub Date | date |
| max(epochms()) | IF eq(event, "pushOpen") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "pushBounce") | it\\\_first\\\_push\\\_bounce\\\_ts | Iterable First Push Bounce | date |
| min(epochms()) | IF eq(event, "pushOpen") | it\\\_first\\\_push\\\_open\\\_ts | Iterable First Push Open | date |
| min(epochms()) | IF eq(event, "pushSend") | it\\\_first\\\_push\\\_send\\\_ts | Iterable First Push Send | date |
| set(campaignId) |  | it\\\_campaigns | Iterable Campaigns IDs | \\\[\]string |
| set(campaignName) |  | it\\\_campaign\\\_names | Iterable Campaigns | \\\[\]string |
| set(channelId) |  | it\\\_channels | Iterable Channels | \\\[\]string |
| set(messageId) |  | it\\\_messages | Iterable Messages | \\\[\]string |
| set(messageTypeId) |  | it\\\_message\\\_types | Iterable Message Types | \\\[\]string |
| set(oneof(deeplink\\\_ios, deeplink\\\_andriod)) |  | it\\\_push\\\_deeplink | Iterable Push Notification Deeplink | \\\[\]string |
| set(templateId) |  | it\\\_templates | Iterable Template IDs | \\\[\]string |
| set(templateName) |  | it\\\_template\\\_names | Iterable Templates | \\\[\]string |
| set(workflowId) |  | it\\\_workflow\\\_ids | Iterable Workflow IDs | \\\[\]string |
| set(workflowName) |  | it\\\_workflow\\\_names | Iterable Workflow Names | \\\[\]string |
| valuect(event) |  | it\\\_event | Iterable Events | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(event, "pushOpen") | it\\\_mobile\\\_hourlyopen | Iterable Hourly Mobile Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event, "pushOpen") | it\\\_mobile\\\_hourofweek | Iterable Hour of Week Mobile Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event, "pushOpen") | it\\\_mobile\\\_monthly | Iterable Mobile Events By Month | map\\\[string\]intsum |



**Stream: iterable\_sms\_activity**

The following fields are included in the default mapping of the iterable\_sms\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "smsBounce") | it\\\_sms\\\_bouncect | Iterable Bounce SMS Count | int |
| count(event) | IF eq(event, "smsReceived") | it\\\_sms\\\_receivedct | Iterable Open SMS Received | int |
| count(event) | IF eq(event, "smsSend") | it\\\_sms\\\_sendct | Iterable Send SMS Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| map(experience\\\_id, 1) | IF eq(event, "smsReceived") | it\\\_conversions | Converted on Iterable Experience | map\\\[string\]int |
| map(experience\\\_id, 1) | IF eq(event, "smsSend") | it\\\_impressions | Reached with Iterable Experience | map\\\[string\]int |
| max(epochms()) | IF eq(event, "smsBounce") | it\\\_last\\\_sms\\\_bounce\\\_ts | Iterable Last SMS Bounce | date |
| max(epochms()) | IF eq(event, "smsReceived") | it\\\_last\\\_sms\\\_received\\\_ts | Iterable Last SMS Received | date |
| max(epochms()) | IF eq(event, "smsSend") | it\\\_last\\\_sms\\\_send\\\_ts | Iterable Last SMS Send | date |
| max(epochms()) | IF eq(event, "smsOpen") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "smsBounce") | it\\\_first\\\_sms\\\_bounce\\\_ts | Iterable First SMS Bounce | date |
| min(epochms()) | IF eq(event, "smsReceived") | it\\\_first\\\_sms\\\_received\\\_ts | Iterable First SMS Received | date |
| min(epochms()) | IF eq(event, "smsSend") | it\\\_first\\\_sms\\\_send\\\_ts | Iterable First SMS Send | date |
| set(campaignId) |  | it\\\_campaigns | Iterable Campaigns IDs | \\\[\]string |
| set(campaignName) |  | it\\\_campaign\\\_names | Iterable Campaigns | \\\[\]string |
| set(channelId) |  | it\\\_channels | Iterable Channels | \\\[\]string |
| set(messageTypeId) |  | it\\\_message\\\_types | Iterable Message Types | \\\[\]string |
| set(templateId) |  | it\\\_templates | Iterable Template IDs | \\\[\]string |
| set(templateName) |  | it\\\_template\\\_names | Iterable Templates | \\\[\]string |
| set(workflowId) |  | it\\\_workflow\\\_ids | Iterable Workflow IDs | \\\[\]string |
| set(workflowName) |  | it\\\_workflow\\\_names | Iterable Workflow Names | \\\[\]string |
| toPhoneNumber |  | phone | Phone Number | string |
| valuect(event) |  | it\\\_event | Iterable Events | map\\\[string\]intsum |

### Configuration

Follow these steps to set up an import job for Iterable. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Iterable** from the list of providers.
2.  Select **Import Audiences & Activity Data** job type.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) Use the **Activity Events to Import** input to select the Iterable events you would like to import into Lytics. Events available to be imported from Iterable are located in the left column. Events added to the right column will be imported to Lytics. If nothing is selected, all activity events will be imported.
7.  (Optional) Use the **User Fields to Import** input to select the Iterable fields you would like to import into Lytics. Fields available to be imported from Iterable are located in the left column. Fields added to the right column will be imported to Lytics.
8.  (Optional) If you would like users and their activity to be updated continually, select **Keep Updated**.
9.  (Optional) If you would like to skip importing users and just import user activity, select **Skip User Import**. This is useful if you export users from Lytics to Iterable and you want to avoid re-importing users you already have in Lytics.
10.  (Optional) If you would like to skip importing user event activity and just import users, select **Skip Activity Event Import**.
11.  Click **Start Import**.

![Iterable Import Configuration Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4c5fe59228ce94eb/18ca3e4f0d99f54558e301f8/Screen_Shot_2021-01-22_at_1.10.47_PM.png)

User data will begin to import into Lytics from Iterable and should be available within an hour. If **Keep Updated** was selected, user data and activity will be updated hourly until the import is cancelled.

## Export Audiences

This job type will export a Lytics audience to an existing Iterable list or create a new Iterable list. All existing members of that audience are exported to the chosen list and new members are exported in real-time. You can use this export in conjunction with an [Iterable workflow](https://support.iterable.com/hc/en-us/articles/205480265-Workflow-Overview) to send users a triggered Iterable email as they enter an audience in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration, with a one-time Backfill of the audience after setup.
-   **Resulting Data**: Lytics users that are a member of the selected audience(s) are exported to Iterable and subscribed to the selected list. A new Iterable list is created if provided list name is not in Iterable. Both known users (with email) and anonymous users are exported.

This integration utilizes the [Iterable API](https://api.iterable.com/api/docs#lists_subscribe) to send users to the selected list in Iterable. Upon starting, this job will:

1.  Check if an existing list was selected, if not, [create a new list](https://api.iterable.com/api/docs#lists_create) with the name provided in the configuration.
2.  Run a backfill by [creating or updating](https://api.iterable.com/api/docs#users_updateUser) existing users in Iterable.
3.  After a backfill, the job will receive real-time updates when a user enters or exits the audience.
4.  For each user entering the audience, it will [create or update the user in Iterable](https://api.iterable.com/api/docs#users_updateUser) to be subscribed to the selected Iterable list. Both known and anonymous users are included in the export. If a user is anonymous, it is exported using the preferUserId flag on Iterable's /api/lists/subscribe [endpoint](https://api.iterable.com/api/docs#lists_subscribe). Iterable generates a placeholder email for anonymous users of the form example@placeholder.email.
5.  For each user exiting the selected audience, the job will [unsubscribe](https://api.iterable.com/api/docs#lists_unsubscribe) the user from the selected list.
6.  Additionally, if user field changes are selected to be triggered (configured in "Fields to Trigger"), then for users who are a part of the exported audiences, if the value of one of their selected user field changes, then the field change update will be sent to Iterable.

### Fields

By default, Lytics exports the following fields to Iterable:

| Lytics User Field | Description | Iterable Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| _configurable_ | Iterable User ID | userID | string |

In addition to the default fields, you can export any Lytics user fields to [Iterable fields](https://api.iterable.com/api/docs#users_getUserFields) that are present in your Iterable account. Lytics allows you to map user profile fields with the corresponding Iterable field as part of the job [configuration](#configuration-1).

### Configuration

Follow these steps to set up and configure an export job for Iterable. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Iterable** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience(s) to export.
7.  From the **List** text input, choose the Iterable list to export to, or enter a name to create a new list in Iterable.
8.  (Optional) From the **Email Field** input, select the email address field in Lytics. At least one of email field or ID field must be selected.
9.  (Optional) From the **ID Field** input, select the Lytics field that maps to the userID field in Iterable. At least one of email field or ID field must be selected.
10.  (Optional) From the **Map Fields**, map all the fields from Lytics to Iterable by selecting the Lytics field on the left, and its Iterable destination on the right.
11.  (Optional) From the **Fields to Create** input, select a list of user fields to create in Iterable. In Iterable, the created field will have the name inside the ().
12.  (Optional) From the **Convert Map Fields** checkbox, select to convert Lytics map fields into an array of key-value objects in Iterable. This minimizes the field count in Iterable. Uncheck if you would like to send map fields to Iterable as they are in Lytics. This can lead to a high field count since each distinct key will count as a new field in Iterable.
13.  (Optional) From the **Fields to Trigger** input, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be updated in Iterable.
14.  (Optional) From the **Include Lytics Audience Membership** checkbox, select to include the user's audience membership as a data field called LyticsAudiences.
15.  Click the **Start Export** button.

![Iterable Export Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc4604b6ddd5ee227/1183c1b1ad757b145fa0fc16/image-0bfe4b97.png)

Users should be available in the Iterable list within a few minutes of starting the export. Larger audiences may take a few hours to be completely added to the list. You can find the new list in Iterable under **Users** > **Lists**.

## Experiences

Lytics [Experiences](/docs/lytics/experiences)support Iterable email, SMS, push, and in-app campaigns. These Experiences may be run as stand-alone campaigns such as newsletters or blast emails. Using the Lytics Canvas, you can manage the cross-channel customer lifecycle and use Iterable campaigns as your email and mobile touchpoints.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/experiences#out-of-the-box-integration-experiences) from Iterable to Lytics. During the import process, you will be asked to select an authorization. Read the [Iterable authorization documentation](#authorization) for more information.

![Import Experiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame9ef29ea84607a22/f0ec834f22c6eef5c1aea89f/Screenshot_from_2019-11-08_15-05-06.png)

### Tactics

During the Experience import process, tactics are determined by the **Campaign Type** and **Message Medium** set during the creation of your campaign in Iterable.

![Campaign Type and Message Medium](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am919b1a2aefbf9629/7a4659aa9a9e174cdb9144d1/Screen_Shot_2019-10-25_at_12.09.25_PM.png)

Iterable Experiences in Lytics support the following tactics:

-   **Blast Email** - Send an email to a list of users at one time (e.g., a weekly newsletter).
-   **Blast Push** - Send a mobile push notification to a list of users at one time.
-   **Blast SMS** - Send a mobile text message to a list of users at one time.
-   **Blast In-App** - Send a customized notification to a list of users when they open your mobile application.
-   **Triggered Email** - Send an email after a triggering event has occurred (e.g. an order confirmation).
-   **Triggered Push** - Send a mobile push notification after a triggering event has occurred.
-   **Triggered SMS** - Send a mobile text message after a triggering event has occurred.
-   **Triggered In-App** - Send a customized notification to users in your mobile application after a triggering event has occurred.

**Note:** The "triggered" Experiences tactics will only work properly if they are set up with a [workflow](https://support.iterable.com/hc/en-us/articles/205480265-Workflow-Overview) through the Iterable UI. See the [activation details](#triggered-tactics) for more information.

### Configuration

After importing an Iterable Experience you can configure it for activation. All tactics for Iterable Experiences have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences#experience-editor):

1.  **Target** - select the target audience for your Experience.
2.  **Configure Iterable** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the [Export Audiences workflow](#configuration) and will generally function the same, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.
3.  **Configure Delivery** - choose to turn the Delivery Optimization feature on or off. For Iterable Experiences, Delivery Optimization is most useful for the ["triggered" Experience tactics](#tactics) as you will likely want to send a blast campaign at a specified time to a static list of users.

Once you've finished configuring the Experience you can save and activate it.

### Activation

For all Iterable Experiences, activating simply pushes users to a list within Iterable. As mentioned in the configuration step, an Iterable Experience functions similarly to the [Export Audiences workflow](#export-audiences). However, the steps necessary to successfully deploy your campaign vary by the tactic.

#### Blast Tactics

For blast Experiences, simply assign the list exported to the associated Iterable Campaign once the list has populated. This should occur within a few minutes of activation if you do not have Delivery Optimization enabled.

1.  Open up the campaign in Iterable, and navigate to the **Setup step**.
2.  Under **Send Lists**, select the list you configured your Experience to sync to.\\

![Send Lists](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambcc56f73a0f5dd3a/6ec640efcb927d7fd2658835/Screen_Shot_2019-10-25_at_4.59.17_PM.png)

1.  Save your changes and proceed to the **Launch step**.
2.  Once you're ready to deploy, opt to **Send Campaign Right Now** or **Schedule Campaign for Later**.\\

![Iterable Buttons](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame08d8ce2ad494071/da9a584dc79cd192d01ab5de/Screenshot_from_2019-11-08_14-50-12.png)

#### Triggered Tactics

For triggered Experiences, you will utilize an [Iterable workflow](https://support.iterable.com/hc/en-us/articles/205480265-Workflow-Overview) to deliver your Experience as users enter or exit the list. You will need to create and configure the workflow before importing the Experience to Lytics, and enable the workflow after the Experience has been activated in Lytics.

1.  Open up the workflow associated with your Experience in Iterable.
2.  Make sure your workflow **Start When** condition is set to **Subscribed to List**, and choose the list you configured for your Experience in Lytics.\\

![Workflow Node](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amece609d7c5466399/af1480e01979e8240e11d9e1/Screen_Shot_2019-10-25_at_5.03.49_PM.png)

1.  For your second node, in your workflow select the execution (send email, send in-app, send SMS, or send push) and make sure your campaign is selected.
2.  Connect the nodes in your workflow, or add additional nodes for delay or additional logic.\\

![Complete Workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfd454627cc297e7c/d6ae718f143f45f9f504a546/Screenshot_from_2019-11-08_14-25-31.png)

1.  Save your workflow.
2.  Once you're ready to deploy, toggle the switch to enable users to begin receiving their Experience.\\

![Enabled Workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf91c2c2794a5c207/de2a8be2c659a0a9e397a441/Screenshot_from_2019-11-08_15-02-30.png)

### Metrics

Iterable metrics are collected through [webhooks](#configure-webhooks). You must enable webhooks as described in that doc for Lytics to populate the reach and conversion metrics for Iterable Experiences.

![Iterable Experience With Metrics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf97036b0bf9ac945/59dd9e9a268be130801110b0/iterable-experience.png)

Metrics from the webhooks are mapped to Lytics user fields as follows:

-   **Reach** - The following [event types from Iterable](https://support.iterable.com/hc/en-us/articles/208013936-System-Webhooks#webhook-examples) count as impressions for Iterable campaigns of the appropriate tactic:
    -   Email tactics: emailOpen
    -   Push tactics: pushSend
    -   SMS tactics: smsSend
    -   In-app tactics: inAppOpen
-   **Converted** - The following [event types from Iterable](https://support.iterable.com/hc/en-us/articles/208013936-System-Webhooks#webhook-examples) count as conversions for Iterable campaigns of the appropriate tactic:
    -   Email tactics: emailClick
    -   Push tactics: pushOpen
    -   SMS tactics: smsReceived
    -   In-app tactics: inAppClick

These events are also mapped to the Lytics user fields **Reached with Iterable Experience** and **Converted on Iterable Experience**, which are available in the audience builder so that you can create audiences of users who have been reached by or converted on your Iterable Experiences.

![User Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am81d15f45e51edbca/6ff86fb29e9c6e3b9056ac26/Screenshot_from_2019-11-08_16-10-35.png)

## Configure Webhooks

Lytics highly recommends setting up Iterable [system webhooks](https://support.iterable.com/hc/en-us/articles/208013936-System-Webhooks) for real time event capture of your events. This will allow Lytics to get real-time activity data such as clicks, opens, bounces etc. on your Iterable campaigns.

Lytics requires that webhooks are enabled to use Iterable Experiences as part of Lytics Orchestrate because it allows for the collection of reporting metrics for your Iterable Experiences.

**Note:** If you are running a continous [import from Iterable](#import-audiences--activity-data) and using webhooks, some user activity data may be captured twice.

To set up system webhooks to go to Lytics, you will need to have a Lytics API token ready, you can read how to [generate a new API token](/docs/lytics/account-settings#api-tokens) if you do not already have one. Then follow these steps:

1.  Log into your [Iterable account](https://app.iterable.com/login).
2.  Navigate to **Integrations** > **System Webhooks**.
3.  Click **+CREATE WEBHOOK**.

![iterable integration webhook create](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am28e96bece74a4b84/f9a7e5a3ef0d46e6f03a416c/iterable_integration_webhook_create.png)

1.  In the **Endpoint URL** box, enter: https://api.lytics.io/collect/json/iterable?access\_token=YOUR\_API\_TOKEN where YOUR\_API\_TOKEN is your Lytics API token which can be [generated](/docs/lytics/account-settings#api-tokens) in your account settings.

![iterable integration webhook create2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd0780c08004ab9e3/30d79f8e497b8eedda2240af/iterable_integration_webhook_create2.png)

1.  Set the **Auth Type** to **NoAuth** by clicking the **NoAuth** radio button.
2.  Click **CREATE WEBHOOK**.
3.  Then scroll to the far right edge and click the **EDIT** button.

![iterable integration webhook edit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame5f4b8081fcfda2a/996edc5d89f904d43e144669/iterable_integration_webhook_edit.png)

1.  Click the **Enabled** checkbox.
2.  Select the events you'd like to send data to Lytics by clicking on their respective checkboxs. The available options for Webhook events are:
    -   **Triggered Send**
    -   **Blast Send**
    -   **Push Send**
    -   **SMS Send**
    -   **Email Open**
    -   **Push Open**
    -   **Email Click**
    -   **Hosted Unsubscribe Click**
    -   **Email Complaint** (i.e. Spam)
    -   **Push Uninstall**
    -   **SMS Received**
    -   **Email Bounce**
    -   **Push Bounce**
    -   **SMS Bounce**
    -   **Email Subscribe**
    -   **Email UnSubscribe**
3.  Click **SAVE**.

![iterable integration webhook save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6945f6635a96076c/9974a98749f7e84e1668edb0/iterable_integration_webhook_save.png)

After saving the changes to the webhook, the selected events will be sent to your Lytics account in real-time. Events collected via the webhook are processed and mapped in the same way that activity data via the import workflow is mapped, reference the [fields table](/understanding/integrations/iterable/import-users-and-activity#fields) for a full list of user fields.

## Including Identifiers in Links

You may want to pass a unique Iterable identifier from links within your email to allow cross-channel identity resolution. This will help Lytics identify users across data streams and merge their email with web activity. For more information about dynamically passing this parameter, see [Iterable's documentation on creating unique URLs for emails](https://support.iterable.com/hc/en-us/articles/209530726-Creating-Custom-Link-Parameters).

The easiest and safest way to pass a unique identifier from Iterable click-through links to Lytics is to encode the user's email with Base64, in Iterable, via the custom link parameters.

#### Requirements

The Lytics JavaScript tag must be installed on your site, and the Lytics [Import Audiences and Activity](#import-audiences--activity-data) will need to be active with email set for import (default state). In addition, a line of LQL ([Lytics Query Language](/reference/query)) will need to be added to the Iterable data mapping file in order to decode and map the email field to the user's profile. For assistance contact your Lytics representative or [Lytics support](https://support.lytics.com).

#### Adding an encoded email to Iterable Links

Follow these steps to add a Base64 encoded email as an identifier to your email links in Iterable.

1.  Ensure that the Iterable integration is [importing audiences and activity data](#import-audiences--activity-data) (default).
2.  Log in to [Iterable](https://app.iterable.com/login) and navigate to **Templates > Templates** and select your email template.
3.  Select **Advanced Option** tab.
4.  Select **Enable Custom Link Parameters**.
5.  Set the following in the custom parameters:
    -   Key = encoded\_email
    -   Value = undefinedundefinedundefined

Now all email clicks will pass the encoded\_email to your website when users click the links, and Lytics will automatically grab the encoded\\\_email, decode it and stitch it to the user's web behavior via our JavaScript web tag.

```
https://www.yourcompanyURL.com/email-campaign-page?encoded_email=amltYmVhbUBkZmRzZmRzLmNvbQ==
```
