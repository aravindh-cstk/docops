---
title: "Mailchimp"
description: "Mailchimp is a marketing platform for email campaigns including audience segmentation, content templates, reporting and more."
url: /lytics/mailchimp
uid: blta283125afa37b144
---

# Mailchimp

## Mailchimp

## Overview

[Mailchimp](https://mailchimp.com/) is a marketing platform for email campaigns including audience segmentation, content templates, reporting and more.

Integrating Lytics with Mailchimp allows you to import email and other user activity data (such as opens and clicks) or export Lytics' cross-channel, behavioral-driven audiences to build and send personalized marketing campaigns from Mailchimp.

The Lytics Canvas supports Mailchimp Experiences. Use Lytics to enrich your Mailchimp user lists with cross-channel data, behavioral scores, and content affinities to improve campaign engagement and performance.

## Authorization

If you haven't already done so, you will need to set up a [Mailchimp account](https://mailchimp.com/help/create-an-account/) before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Mailchimp** from the list of providers.
2.  Select the Mailchimp Sign In method for authorization.
3.  Enter your Mailchimp login credentials in the login popup.
4.  In the **Label** text box, enter a name for the authorization
5.  (optional) In the **Description** text box, enter a description for this authorization
6.  Click **Save Authorization**.

## Import Audiences and Activity Data

Importing user and activity data from Mailchimp results in new users or existing user profiles supplemented with Mailchimp campaign data. You can use this data to build and refine your existing Lytics audiences to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Webhook Integration.
-   **Frequency**: Batch Integration every 12 hours.
-   **Resulting data**: User Profiles and Raw Event Data.

This integration utilizes [Mailchimp APIs](https://mailchimp.com/developer/reference/) to receive user and activity data. On each run of the job, it will:

1.  Check if webhooks are set up in the Mailchimp account.
2.  If any webhooks are found, user events such as subscription changes and profile updates will be received in Lytics via webhooks, reformatted on ingestion, and available in the mailchimp\_subscribers stream.
3.  Query for campaigns tied to the lists that you've configured.
4.  For each campaign found, the job will:
    1.  Reflect all subscription changes on the mailchimp\_subscribers stream.
    2.  Add new activity data to the mailchimp\_activity stream.

### Fields

The following fields are included in the default mapping of the mailchimp\_subscribers stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| cc | country\\\_code | Country Code | string |
| email(email\\\_address) | email unique id | Email Address | string |
| emaildomain(email\\\_address) | email\\\_domain | Email Domain | string |
| euid | mc\\\_euid unique id | MailChimp User ID | string |
| first\\\_name | mc\\\_first\\\_name | Mailchimp First Name | string |
| last\\\_name | mc\\\_last\\\_name | Mailchimp Last Name | string |
| latitude | mc\\\_latitude | Mailchimp Latitude | string |
| longitude | mc\\\_longitude | Mailchimp Longitude | string |
| map(listid, liststatus) | mc\\\_subscriber\\\_statuses | Mailchimp Subscriber Statuses | map\\\[string\]value |
| map(listid, tags) | mc\\\_tags | Mailchimp Tags | map\\\[string\]value |
| match("marketing\\\_permissions.") | mc\\\_marketing\\\_permissions | Mailchimp Marketing Permissions | map\\\[string\]bool |
| match("mc\\\_group.") | mc\\\_groups | Mailchimp Groups | map\\\[string\]bool |
| member\\\_rating | mc\\\_rating | Mailchimp Rating | string |
| region | mc\\\_region | Mailchimp Last Region | string |
| set(cc) | country\\\_codes | Country Codes | \\\[\]string |
| set(leid) | mc\\\_leids | Mailchimp Email ID (LEID) | \\\[\]string |
| set(listid) | mc\\\_listids | Mailchimp Lists | \\\[\]string |
| set(region) | mc\\\_regions | Mailchimp Regions | \\\[\]string |
| timezone | timezone | Time Zone | string |

The following fields are included in the default mapping of the mailchimp\_activity stream:

| Source Field | Conditional (IF) | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| action |  | mc\\\_action | Mailchimp Action | string |
| count(action) | eq(action, "click") | mc\\\_clickct | Mailchimp Click Count | int |
| count(action) | eq(action, "cleaned") | mc\\\_hardbouncect | Mailchimp Hard Bounce Count | int |
| count(action) | eq(action, "open") | mc\\\_openct | Mailchimp Open Count | int |
| count(action) | eq(action, "sent") | mc\\\_sendct | Mailchimp Send Count | int |
| count(action) | eq(action, "subscribe") | mc\\\_subct | Mailchimp Subscribe Count | int |
| count(action) | eq(action, "unsubscribe") | mc\\\_unsubct | Mailchimp Unsubscribe Count | int |
| email(email) |  | email unique id | Email Address | string |
| email\\\_type | eq(action, "subscribe") | mc\\\_emailtype | Mailchimp Email Type | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| epochms() | eq(action, "cleaned") | mc\\\_hardbounce\\\_ts | Mailchimp Hard Bounce Time | date |
| epochms() | eq(action, "subscribe") | mc\\\_sub\\\_ts | Mailchimp Subscribe Time | date |
| epochms() | eq(action, "unsubscribe") | mc\\\_unsub\\\_ts | Mailchimp Unsubscribe Time | date |
| last\\\_status |  | mc\\\_laststatus | Mailchimp Last Status | string |
| map("email", epochms()) | action IN ("open","click","unsubscribe","subscribe") | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| map(experience\\\_id, 1) | eq(action, "click") | mc\\\_conversions | Converted on Mailchimp Experience | map\\\[string\]int |
| map(experience\\\_id, 1) | eq(action, "open") | mc\\\_impressions | Reached with Mailchimp Experience | map\\\[string\]int |
| max(epochms()) | action IN ("open","click","unsubscribe","subscribe") | last\\\_active\\\_ts | Last Active | date |
| max(epochms()) | eq(action, "click") | mc\\\_lastclick\\\_ts | Mailchimp Last click | date |
| max(epochms()) | eq(action, "open") | mc\\\_lastopen\\\_ts | Mailchimp Last Open | date |
| min(epochms()) | eq(action, "click") | mc\\\_firstclick\\\_ts | Mailchimp First click | date |
| min(epochms()) | eq(action, "open") | mc\\\_firstopen\\\_ts | Mailchimp First Open | date |
| set("email") | action IN ("open","click","unsubscribe","subscribe") | channels | All Channels Used | \\\[\]string |
| set(bounce\\\_reason) | eq(action, "cleaned") | mc\\\_bouncereason | Mailchimp Hard Bounce Reason | \\\[\]string |
| set(campaign\\\_title) |  | mc\\\_campaigntitles | Mailchimp Campaign Names | \\\[\]string |
| set(campaignid) |  | mc\\\_campaignids | Mailchimp Campaign Ids | \\\[\]string |
| set(listid) |  | mc\\\_listids | Mailchimp Lists | \\\[\]string |
| set(unsub\\\_action) | eq(action, "unsubscribe") | mc\\\_unsubaction | Mailchimp Unsubscribe Action | \\\[\]string |
| set(unsub\\\_reason) | eq(action, "unsubscribe") | mc\\\_unsubreason | Mailchimp Unsubscribe Reason | \\\[\]string |
| set(utm\\\_campaign) |  | utm\\\_campaigns | List Of Campaigns Referred From | \\\[\]string |
| set(utm\\\_content) |  | utm\\\_contents | List Of Contents Referred From | \\\[\]string |
| set(utm\\\_medium) |  | utm\\\_mediums | List Of Mediums Referred From | \\\[\]string |
| set(utm\\\_source) |  | utm\\\_sources | List Of Sources Referred From | \\\[\]string |
| set(utm\\\_term) |  | utm\\\_terms | List Of Terms Referred From | \\\[\]string |
| set(variant\\\_title) |  | mc\\\_variant\\\_titles | Mailchimp Variant Titles | \\\[\]string |
| set(variantid) |  | mc\\\_variantids | Mailchimp Variant Ids | \\\[\]string |
| todate(timestamp) | eq(action, "sent") | mc\\\_send\\\_ts | Mailchimp Send Time | date |
| url |  | mc\\\_email\\\_url | Mailchimp Url | string |
| valuect(action) |  | mc\\\_actionct | Mailchimp Action Count | map\\\[string\]intsum |
| valuect(campaignid) | eq(action, "click") | total\\\_clicks\\\_by\\\_campaign | The number of clicks for a campaign | map\\\[string\]intsum |
| valuect(campaignid) | eq(action, "open") | total\\\_opens\\\_by\\\_campaign | The number of opens for a campaign | map\\\[string\]intsum |
| valuect(hash(urlmain(url))) | eq(action, "open") OR eq(action, "click") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | eq(action, "click") | mc\\\_hourlyclick | Mailchimp Clicks By Hour | map\\\[string\]intsum |
| valuect(hourofday()) | eq(action, "open") | mc\\\_hourlyopen | Mailchimp Opens By Hour | map\\\[string\]intsum |

**Note:** Lytics can import any and all custom fields from Mailchimp, but this stream does not automatically map these fields, so all custom fields must first be mapped.

### Configuration

Follow these steps to set up and configure an import job for Mailchimp in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Mailchimp** from the list of providers.
2.  Select the **Import Audiences** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![mc-import-job.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf2c19f06faa699b/a4f9ebe70d8b2f8e2dc41c70/mc-import-job.png)

1.  From the **Lists to Import** input, select lists available to be imported from Mailchimp are located in the left column. Lists added to the right column will be imported to Lytics.
2.  (Optional) Toggle **Show Advanced Options**.
3.  (Optional) Select the **One Time Subscriber/Unsubscriber Sync** checkbox, to set to true to re-import a list's subscriber and unsubscriber data only. This will not pull activity data and will not keep your subs/unsubs synced.
4.  (Optional) In the **Import List Members Data Since this Date** text box, enter members whose data has changed from this date onwards will be imported. Leaving blank will import all the members. Use yyyy-mm-ddformat (ex: 2015-08-13).
5.  (Optional) Select the **Check to import activity data** checkbox, to set to true to import activity data.
6.  (Optional) In the **Import Email Activity Data Since this Date** text box, enter activities from this date onwards will be imported. Leaving blank will import 30 days old email activities from today. Use yyyy-mm-dd format (ex: 2015-08-13).
7.  Click **Start Import**.

## Export Audiences

Exporting a Lytics audience to Mailchimp allows you to send a marketing campaign email to users based on your own, relevant targeting criteria, such as cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration every 10 minutes, or when the number of audience members to export exceeds 10,000.
-   **Resulting data**: Lytics audience(s) in Mailchimp.

This integration utilizes [Mailchimp APIs](https://mailchimp.com/developer/reference/) to export Lytics Audiences into Mailchimp. On each run of the job, it will sync your selected Lytics Audiences with your selected Mailchimp List.

### Fields

The following fields are included in the default mapping. Custom fields are not exported to Mailchimp.

| Lytics User Field | Description | Mailchimp Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| interests | Mailchimp Interest Groups | Interests | \\\[\]string |
| status | Subscription Status | Status | string |
| merger\\\_fields | Fields for Email Personalization | Merger Fields | map\\\[string\]string |

### Configuration

Follow these steps to set up and configure an export job for Mailchimp in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Mailchimp** from the list of providers.
2.  Select the **Export Audiences** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export. These will appear as intrests in your Mailchimp list named "Lytics" + the audience name.
7.  Complete the configuration steps for your job.\\

![image-20e495df.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am723d7408816ca1ee/9d3bf9f5b5c22f0d8feba3d2/image-20e495df.png)

1.  From the **MailChimp List** input, select MailChimp list to send this audience to. Note that we will clear any pre-existing audience and replace it with an up-to-date snapshot of its members.
2.  (optional) Select the **Add Subscribers to List** checkbox, to add new users from Lytics who do not already exist in Mailchimp. (WARNING: This could increase your Mailchimp billing).
3.  (optional) Select the **Add Audience Tags** checkbox, to tag Mailchimp users with Lytics Audience.
4.  (optional) Select the **Leave Subscription Statuses Unmodified** checkbox, to uncheck this box to force updated Mailchimp contacts to be subscribed.
5.  From the **Email Field** input, select the field name that contains the user's email.
6.  (optional) From the **First Name Field** input, select the field name that contains the user's first name.
7.  (optional) From the **First Name Merge Var** input, select merge var on MailChimp that should receive recipient's first name.
8.  (optional) From the **Last Name Field** input, select the field name that contains the user's last name.
9.  (optional) From the **Last Name Merge Var** input, select merge var on MailChimp that should receive recipient's last name.
10.  Click **Start Export**.

## Experiences

[Lytics Experiences](/docs/lytics/experiences#out-of-the-box-integration-experiences) support Mailchimp campaigns and automations. These Experiences can be run as stand-alone campaigns or, using the Lytics Canvas, you can manage the cross-channel customer lifecycle utilizing Mailchimp campaigns as the email touchpoint.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/experiences#out-of-the-box-integration-experiences) from Mailchimp. During the import process, you will be asked to select an authorization. Read the [Mailchimp authorization documentation](#authorization) for more information.

![Import Experiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am555ca7efdb2b50ad/e8c9b04e533ac1966e9a9eba/Screenshot_2020-01-06_Lytics_Admin.png)

If you're not seeing the emails you would like to import on this list make sure that it is a Campaign or Automation created of one of the [eligible types](#tactics). If you would like to [activate](#activate) your Experience with Lytics, you may want to create a new Campaign or Automation and save it in a draft state before selecting targeting details.

### Tactics

Tactics are determined by whether or not the email in Mailchimp is a **Campaign** or **Automation** and further by the type of automation. Mailchimp Experiences in Lytics support the following tactics:

-   **Campaign** - Send an email to a list of users at one time (e.g., a weekly newsletter).
-   **Email on List Add** - Send an email when a new subscriber is added to your list.
-   **Email on Tag Add** - Send an email when a user is tagged with a particular tag.

**Note:** The **Email on List Add** tactic applies to Mailchimp automations of the [Welcome new subscribers](https://mailchimp.com/help/automation-types/#Subscriber_activity) type, and the **Email on Tag Add** tactic applies to automations of the [Email subscribers when they're tagged](https://mailchimp.com/help/automation-types/#Tags) type.

### Configuration

After importing a Mailchimp Experience you can configure it for activation. All Mailchimp Experiences have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences#out-of-the-box-integration-experiences):

1.  **Target** - select the target audience for your Experience.
2.  **Configure Mailchimp** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the [export workflow](#configuration-1) and will generally function the same, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.
3.  **Configure Delivery** - choose to turn the Delivery Optimization feature on or off. For Mailchimp Experiences, Delivery Optimization is most useful for the [Email on List Add](#tactics) or the [Email on Tag Add](#tactics) so your email is delivered at an optimal time for each user.

Once you've finished configuring the Experience you can save and activate it.

### Activation

Activating a Mailchimp Experience exports Lytics users to the associated Mailchimp list. Once the export from Lytics has populated in Mailchimp, it can be used for targeting in your Campaign. The export should complete within a few minutes of activation. If you have [Delivery Optimization](/docs/lytics/experiences#configure-delivery) enabled, users will export at the optimal delivery time at which point the list will be created in Mailchimp.

#### Campaign Tactic

Once an Experience with the Campaign tactic has been activated in Lytics, follow these steps to finalize your email in Mailchimp:

1.  In Mailchimp, find your campaign and edit it.
2.  Under the **To** step, select **Add Recipients**.
3.  From the **Audience** dropdown select the Mailchimp audience you selected during the configuration of the Experience in Lytics.
4.  Under **Segment or Tag** select the tag that matches the name of your Experience.\\

![mailchimp-list-campaign.jpg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am621e89939eea6d32/33b8a4d1710789a352a4cdfb/mailchimp-list-campaign.jpg)

1.  Click **Save** to save these changes, and proceed with the setup process of your campaign, see [Mailchimp's documentation](https://mailchimp.com/help/create-a-regular-email-campaign/) for detailed instructions on these steps.
2.  Once you're ready to deploy, click **Send** to send immediately or **Schedule** to send the campaign later.

#### Email on Tag or List Add Tactics

For **Email on Tag Add** and **Email on List Add** Experiences, you must have [created an automation](https://mailchimp.com/help/create-an-automation/) before importing your Experience. You need to select a list for the automation before you can save it as a draft. Ensure that when you [configure](#configuration-2) you select the same list you choose when creating the automation in Mailchimp. The dropdown should be pre-populated with the list you chose to make this easy.

Once you activate the Experience, use the following steps to finalize your email in Mailchimp:

1.  Locate the automation in Mailchimp under the **Campaigns** list.
2.  Click the **Edit** button to edit the automation.
3.  If the Experience has the **Email on Tag Add** tactic you will need to select the tag to trigger the email.
    1.  Under the **Design Email** section there should be a statement about the trigger of your automation. Select to **Edit** the trigger.\\

![mailchimp-trigger-edit.jpg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am61d8addaf8055de7/af6eb303427e79c14758fceb/mailchimp-trigger-edit.jpg)

1.  Select a delay for triggering the email if you would like one, and under **Settings** select the tag with the same name as your Experience.
2.  Click on **Update Trigger** to save the changes.

1.  Finish configuring your email refer to [Mailchimp's documentation](https://mailchimp.com/help/create-an-automation/) for assistance.
2.  Click **Next** to continue to the review step. Confirm your configuration looks correct and click **Start Sending** to finish the activation of your Mailchimp automation.

### Metrics

Mailchimp metrics are collected through Mailchimp's [Email Activity API](https://mailchimp.com/developer/reference/reports/email-activity-reports/).

-   **Reach** - Open events from Mailchimp count as impressions for Mailchimp campaigns and automations.
-   **Converted** - Click events from Mailchimp count as conversions for Mailchimp campaigns and automations.

These events are also mapped to the Lytics user fields **Reached with Mailchimp Experience** and **Converted on Mailchimp Experience**, which are available in the audience builder so that you can create new audiences using these metrics.
