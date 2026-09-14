---
title: "Braze"
description: "Braze is a customer engagement platform that delivers messaging experiences across push, email, in-app."
url: /lytics/braze
---

# Braze

## Braze

## Overview

[Braze](https://www.braze.com) is a customer engagement platform that delivers messaging experiences across push, email, in-app.

Integrating Lytics to Braze helps you import email, SMS, and push activity from Braze and then export Lytics' cross-channel, behavioral-driven audiences to build and send personalized marketing campaigns.

## Authorization

If you haven't already done so, you will need to set up a Braze account before you begin the process described below. The Braze credentials necessary to integrate with Lytics are **Rest API Key** and **Braze Instance**.\\ Follow these steps to get your Braze credentials: [Create Braze REST API Key](https://www.braze.com/docs/api/basics/#app-group-rest-api-keys). When creating the Braze REST API Key, you must grant permissions for each App Group you would like to use with Lytics.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Braze** from the list of providers.
2.  Select the Braze method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **Rest API Key** text box, enter your Rest API Key credential.
6.  From the **Braze Instance** input, select the instance of Braze your account uses (e.g. US-01 or EU-01). See the instructions above if you do not know your Braze instance.
7.  Click **Save Authorization**.

## Import Activity

Connect Braze to Lytics to import email, SMS, and push activity to enrich Lytics user profiles.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration or Webhook Integration.
-   **Frequency**: Batch Integration or Real-time Integration.
-   **Resulting data**: User profiles.

### Fields

The following fields are included in the default mapping of the braze\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| braze\\\_id | br\\\_user\\\_id unique id | Braze User ID | string |
| city | city | City | string |
| country | country | Country | string |
| email(email) | email unique id | Email Address | string |
| first\\\_name | first\\\_name | First Name | string |
| gender | gender | Gender | string |
| language | language | Language | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone\\\_number | phone | Phone Number | string |
| time\\\_zone | time\\\_zone | Time Zone | string |
| todate(date\\\_of\\\_birth) | birth\\\_date | Birth Date | date |
| twitter\\\_handle | tw\\\_uid unique id | Twitter User ID | string |

### Configuration

Braze has three ways to export data to other services:

-   Via **Braze's Dashboard**, you can export a CSV with up to 500,000 rows. To export a segment with over 500,000 users, you’ll need to use the export API, which places no limit on how much data you can export. You can import CSV files to Lytics via a[Lytics File Service](/docs/lytics/lytics-file-service).
-   **Export API** allows large dataset to be exported to S3 buckets, which requires your S3 credentials to be added to Braze. More information can be found at [Users by Segment Endpoint](https://www.braze.com/docs/developer_guide/rest_api/export/#users-by-segment-endpoint). This can then be imported into Lytics via [Amazon S3 Import](/docs/lytics/aws-s3-overview).
-   **Webhooks** triggered by events in Braze can be sent to Lytics representing real-time events within campaigns across multiple channels as email, push notification, and more. See Braze's documentation for [Creating a Webhook](https://www.braze.com/docs/user_guide/message_building_by_channel/webhooks/creating_a_webhook/).
    -   To create a webhook in Braze you must first create an API token with the **Data Manager** role as described in our [Managing API Tokens](/docs/lytics/account-settings#api-tokens) documentation.
    -   Your webhook URL will contain your **Account Number** and **API Token** which can be found in your [Account Settings](/docs/lytics/account-settings).

```
https://api.lytics.io/c/<ACCOUNT-NUMBER>/braze_users?key=<LYTICS-API-TOKEN>
```

The webhook template is expected to include the following fields:

-   city
-   country
-   first\_name
-   gender
-   language
-   last\_name
-   date\_of\_birth
-   phone\_number
-   time\_zone
-   twitter\_handle
-   email
-   braze\_id

If other fields need to be included, please speak to your Lytics account manager.

## Export Audiences

Export cross-channel, behavioral-driven audiences from Lytics to Braze to power personalized marketing campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Lytics audience slugs are added or removed from a user attribute in Braze called lytics\_segments.

This integration utilizes the [Braze User Track API](https://www.braze.com/docs/api/endpoints/user_data/post_user_track/) to attach Lytics audience membership data to Braze as a user attribute. Once the export is started the job will:

1.  As users enter or exit the exported audience in Lytics they are batched.
2.  Once the batch size contains 75 updates or if 5 minutes have elapsed, the batch of updates is sent to Braze through the user track endpoint.

### Fields

One of the following following fields must be sent to Braze as an identifier:

| Lytics User Field | Description | Braze Field | Type |
| --- | --- | --- | --- |
| Braze External User ID | Braze External User ID | external\\\_id | string |
| Braze ID | Braze ID | braze\\\_id | string |
| Email | Email Address | email | string |
| Phone | Phone Number | phone | string |
| Braze User Alias Label & Name | Braze User Alias Label & Name | alias\\\_label, alias\\\_name | string |

### Configuration

Follow these steps to set up and configure an export job for Braze in the Lytics platform.

**At least one of External User ID, Braze ID, Email, Phone, or the combination of User Alias Label and User Alias Field must be set in the configuration below to be used as the identifier for the user in Braze.**

1.  Select **Braze** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  From the **Braze External User ID** input, select the field in Lytics that contains the Braze External User ID.
8.  From the **Braze ID** input, select the field in Lytics that contains the Braze ID.
9.  From the **Email** input, select the field in Lytics that contains the user's email address.
10.  From the **Phone** input, select the field in Lytics that contains the user's phone number.
11.  In the **Braze User Alias Label** input, enter the label for a User Alias to send to Braze.
12.  From the **Braze User Alias Field** input, select the field in Lytics that contains the value to send with the User Alias Label specified above.
13.  Click **Complete** to start job.

## Export to Braze Events

This job allows you to export audience data and event information from Lytics to Braze. By running this job, you can seamlessly integrate your user data into Braze for personalized messaging, audience segmentation, and event tracking.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting Data**: [Braze Event Object](https://www.braze.com/docs/api/objects_filters/event_object#what-is-an-event-object)

This integration utilizes the [Braze User Track API](https://www.braze.com/docs/api/endpoints/user_data/post_user_track/) to send a Braze event when a user enters (or exits) the selected Lytics audiences. Once the export is started the job will:

Steps/Pattern:

1.  As users enter or exit the exported audience in Lytics they are batched.
2.  Once the batch size contains 75 updates or if 5 minutes have elapsed, the batch of updates is sent to Braze through the user track endpoint.

For more details on the API endpoints used, refer to the [Braze API documentation](https://www.braze.com/docs/api/).

### Fields

By default, Lytics exports the following fields to Braze:

| Lytics User Field | Description | Braze Field | Type |
| --- | --- | --- | --- |
| Braze External User ID | Braze External User ID | external\\\_id | string |
| Braze ID | Braze ID | braze\\\_id | string |
| Email | Email Address | email | string |
| Phone | Phone Number | phone | string |
| Braze User Alias Label & Name | Braze User Alias Label & Name | alias\\\_label, alias\\\_name | string |

### Configuration

Follow these steps to set up and configure an export job for Braze in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Braze** from the list of providers.
2.  Select the export **Export to Braze Events** from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/braze/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job.
8.  (Optional) From the **Braze External User ID** input, select the field that contains the Braze External User ID (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
9.  (Optional) From the **Braze ID** input, select the field that contains the Braze ID (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
10.  (Optional) From the **Email** input, select the field that contains the user's email address (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
11.  (Optional) From the **Phone** input, select the field that contains the user's phone number (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
12.  (Optional) In the **Braze User Alias Label** text box, enter the label of the Braze User alias field to send.
13.  (Optional) From the **Braze User Alias Field** input, select the field that contains the Braze alias value for the field specified in the Alias Label.
14.  In the **Braze Event Name** text box, enter the Braze event name.
15.  (Optional) From the **Event Timestamp** input, select the field that contains the event timestamp.
16.  (Optional) From the **Audience Trigger Events** input, select which type of audience trigger events to send to Braze.
17.  Click the **Start job** button to start the job.



## Export to Braze Purchase Events

This job allows you to purchase event data from Lytics to Braze. By running this job, you can seamlessly integrate your user data into Braze for personalized messaging, audience segmentation, and event tracking.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting Data**: [Braze Pruchase Object](https://www.braze.com/docs/api/objects_filters/purchase_object)

This integration utilizes the [Braze User Track API](https://www.braze.com/docs/api/endpoints/user_data/post_user_track/) to send a Braze purchase event when a user enters (or exits) the selected Lytics audiences. Once the export is started the job will:

Steps/Pattern:

1.  As users enter or exit the exported audience in Lytics they are batched.
2.  Once the batch size contains 75 updates or if 5 minutes have elapsed, the batch of updates is sent to Braze through the user track endpoint.

For more details on the API endpoints used, refer to the [Braze API documentation](https://www.braze.com/docs/api/).

### Fields

By default, Lytics exports the following fields to Braze:

| Lytics User Field | Description | Braze Field | Type |
| --- | --- | --- | --- |
| Braze External User ID | Braze External User ID | external\\\_id | string |
| Braze ID | Braze ID | braze\\\_id | string |
| Email | Email Address | email | string |
| Phone | Phone Number | phone | string |
| Braze User Alias Label & Name | Braze User Alias Label & Name | alias\\\_label, alias\\\_name | string |

### Configuration

Follow these steps to set up and configure an export job for Braze in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Braze** from the list of providers.
2.  Select the export **Export to Braze Purchase Events** from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/braze/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job.
8.  (Optional) From the **Braze External User ID** input, select the field that contains the Braze External User ID (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
9.  (Optional) From the **Braze ID** input, select the field that contains the Braze ID (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
10.  (Optional) From the **Email** input, select the field that contains the user's email address (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
11.  (Optional) From the **Phone** input, select the field that contains the user's phone number (at least one of External User ID, Braze ID, Email, Phone, or User Alias Label and Field must be set).
12.  (Optional) In the **Braze User Alias Label** text box, enter the label of the Braze User alias field to send.
13.  (Optional) From the **Braze User Alias Field** input, select the field that contains the Braze alias value for the field specified in the Alias Label.
14.  From the **Braze Product ID** input, select the field that contains the Braze purchased product ID.
15.  From the **Product Currency Code** input, specify a currency code if not already mapped above. This is required if the **Purchase** event type was selected.
16.  From the **Product Purchase Price** input, select the field that contains the Braze purchase price of the product.
17.  (Optional) From the **Event Timestamp** input, select the Lytics user field that contains the time when the actual purchase occurred.
18.  (Optional) From the **Quantity** input, select the Lytics user field that represents the quantity of the product.
19.  (Optional) From the **Audience Trigger Events** input, select which type of audience trigger events to send to Braze.
20.  Click the **Complete** button to start the job.
