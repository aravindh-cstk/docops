---
title: "TikTok"
description: "TikTok is a social network platform that allows users to share short-form videos. Integrating Lytics with TikTok enables you to leverage Lytics audiences…"
url: /lytics/tiktok
---

# TikTok

## TikTok

## Overview

[TikTok](https://www.tiktok.com/) is a social network platform that allows users to share short-form videos. Integrating Lytics with TikTok enables you to leverage Lytics audiences enriched with behavioral scores, affinities, and cross-channel data to more effectively target users via TikTok ad exchange.

## Authorization

If you haven't already done so, you will need to set up a TikTok account before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

Select the method for authorization. Note that different methods may support different job types. TikTok supports the following authorization methods:

-   [TikTok Sign-In](#tiktok-signin)
-   [TikTok Event Access Token](#tiktok-events-manager-access-token)

### TikTok Sign-In

TikTok Sign-In is used to export audiences to TikTok. In order to export Lytics audiences to TikTok, please make sure the TikTok user being authenticated has access to manage TikTok Custom Audiences. Please refer to TikTok's [authorization](https://ads.tiktok.com/marketing_api/docs?id=1701890912382977) documentation for more on how TikTok manages access to their API.

1.  Select **TikTok** from the list of providers.
2.  Select the **TikTok Sign-In** method for authorization.
3.  Enter your TikTok login credentials in the login popup and confirm the authorization.
4.  In the **Label** text box, enter a name for the authorization.
5.  (Optional) In the **Description** text box, enter a description for this authorization.
6.  Click **Save Authorization**.

### TikTok Event Access Token

TikTok Event Access Token is used to send events to a data source in TikTok. Depending on the type of event, you will need to follow the specific instructions to set up an access token:

-   [TikTok Events Setup For Web](https://business-api.tiktok.com/portal/docs?id=1771100865818625)
-   [TikTok Events Setup for Apps](https://business-api.tiktok.com/portal/docs?id=1771101111730178)
-   [TikTok Events Setup for Offline Events](https://business-api.tiktok.com/portal/docs?id=1771101027431425)

After setting up the Pixel/App/Offline Data Set and generating a corresponding access token, set up the authorization.

1.  In the **Label** text box, enter a name for the authorization. It is best practice to include the type of TikTok event in the label.
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **Token** box, enter your TikTok Event access token.

## Export Audiences

Sync Lytics audiences with [TikTok](https://ads.tiktok.com/marketing_api/docs?id=1701890955596801) to identify and target users to improve the performance of your ad campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: \\\[REST\] API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration and Batch Integration (every hour).
-   **Resulting data**: [TikTok Custom Audience](https://ads.tiktok.com/marketing_api/docs?id=1701890955596801) matched with users from the selected Lytics audience.

This integration uses the TikTok's [Audience API](https://ads.tiktok.com/marketing_api/docs?id=1708578286257154) to send the Lytics audience users. Once the job is started, it will:

1.  Create a new TikTok [Custom Audience](https://ads.tiktok.com/marketing_api/docs?id=1708580263780354) with the name format Lytics {audience\_slug} {current\_time} if it does not already exist.
2.  Scan the selected Lytics audience getting the selected TikTok user ID and writing it to a file. It will then use TikToks's [Upload File](https://ads.tiktok.com/marketing_api/docs?id=1708578546880513) endpoint to upload the file. TikTok will return the file path for the uploaded file.
3.  Everytime the file is uploaded in TikTok, the job will [modify](https://ads.tiktok.com/marketing_api/docs?id=1708580518247426) the TikTok custom audience to append/remove the returned TikTok file path.
4.  The export job will run continuously. As users enter the Lytics audience, their TikTok user UID will be written in the file. The file will be sent to TikTok every hour or when the file reaches 250 MB in size or the batch reaches 500,000 users.  
    \\

Similarly, as users exits the Lytics audience, their UID will be written in the file and then will be sent to TikTok to remove them from TikTok segment.

**TikTok Custom Audience requirements**

It might take a few hours for the audience matching to be completed in TikTok. After the initial file upload in a TikTok custom audience, a new file will not be appended until the custom audience is available to do so.

The resulting TikTok custom audience must have a minimum of 1,000 matched and opted-in users in order to be available for use. If this minimum has not been met the custom audience will be marked as **Unavailable** within TikTok.

We recommend sending at least 5,000 phone numbers or 10,000 emails, as phone numbers tend to have a higher match rate in TikTok. This suggestions is based on TikTok's requirement for 1000 matched trackable users within their platform.

### Fields

The export job gives you an option to send Users ID to TikTok. You can send Apple IDFA (Identifier for Advertisers), GAID (Google Advertising ID), Email or Phone Number as part of job configuration. You may send multiple ID types in a single file. Please refer to TikTok's [file requirement](https://ads.tiktok.com/help/article?aid=9609) documentation for more information on what can be sent to TikTok in a file.

**Note:** Be sure to review [TikTok's guidance](https://ads.tiktok.com/marketing_api/docs?id=1739940585975809) on ID format for all ID types. These formats must be followed for data flowing into Lytics from your data sources. Lytics performs all hashing of raw data before exporting to TikTok.

### Configuration

Follow these steps to set up and configure an export job for TikTok in the Lytics platform.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **TikTok** from the list of providers.
2.  Select the **Export Audience** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audience to export.
7.  From the **TikTok Advertiser** input, select the TikTok Advertiser where you would like to create TikTok Custom Audience.
8.  In **Field Encryption Mapping**, map the Lytics fields its encryption type. You may select more than one field to map. If the user ID is unhashed, we will hash it based on the chosen encryption type. For email and phone number, please contact your TikTok account manager as it is still in testing phase as per TikTok's API documentation on [file requirements](https://ads.tiktok.com/help/article?aid=9609).
9.  (Optional) Select the **Existing Users** checkbox to send users who already exist in the selected Lytics audience.
10.  (Optional) From the **Duplicate Exports** input, select up to 50 additional audiences to send to TikTok with the same configuration. Each additional audience will be sent as its own job in Lytics.
11.  Click **Complete**.

## Export App Events

Exporting App Events to TikTok allows you to track and measure user interactions within your mobile application. This job helps you understand user behavior, optimize ad targeting, and improve campaign performance by providing detailed insights into how users engage with your app. By running this job, you can ensure that your marketing efforts are accurately attributed and that you are making data-driven decisions to enhance user experience and increase ROI.

### Authorization

Export App Events supports the following authorization types:

-   [TikTok Events Access Token](#tiktok-events-access-token)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: [TikTok Event](https://business-api.tiktok.com/portal/docs?id=1771100779668482)

This integration utilizes the [TikTok Events 2.0 API](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to send Lytics audience trigger events to TikTok.

Steps/Pattern:

1.  When a user enters or exits (configurable) one of the audiences selected in the job configuration, an event is produced following the mapping configuration and sent to TikTok.

### Fields

Lytics user fields can be mapped to a various fields in a TikTok event. Please see the [TikTok Events Guide](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to learn more about the fields in a TikTok event before mapping.

### Configuration

Follow these steps to set up and configure an export job for TikTok in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **TikTok** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From **Audiences**, select all the Lytics audiences to trigger off of.
7.  From the **Audience Trigger Events** input, select which type of audience trigger events to send got conversion.
8.  In the **App ID** text box, enter enter your TikTok App ID.
9.  From the **Event Name** input, select the TikTok event name, or enter custom event name.
10.  From the **Event Time Field** input, select the user field that contains the event time.
11.  From the **App Version Field** input, select the user field that contains the app version number.
12.  In the **App Name** text box, enter the application name.
13.  From the **Identifier Mapping** input, map all the Identifier fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
14.  From the **Property Mapping** input, map all the property fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
15.  Click the **Complete** button to start the job.

## Export Offline Events

Exporting Offline Events to TikTok allows you to track and measure offline conversions, such as in-store purchases or phone orders, and attribute them to your TikTok ad campaigns. This helps you gain a comprehensive understanding of your marketing performance by bridging the gap between online ad interactions and offline sales. By running this job, you can optimize your ad spend, improve targeting, and enhance overall campaign effectiveness.

### Authorization

Export Offline Events supports the following authorization types:

-   [TikTok Events Access Token](#tiktok-events-access-token)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: [TikTok Event](https://business-api.tiktok.com/portal/docs?id=1771100779668482)

This integration utilizes the [TikTok Events 2.0 API](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to send Lytics audience trigger events to TikTok.

Steps/Pattern:

1.  When a user enters or exits (configurable) one of the audiences selected in the job configuration, an event is produced following the mapping configuration and sent to TikTok.

### Fields

Lytics user fields can be mapped to a various fields in a TikTok event. Please see the [TikTok Events Guide](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to learn more about the fields in a TikTok event before mapping.

### Configuration

Follow these steps to set up and configure an export job for TikTok in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **TikTok** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From **Audiences**, select all the Lytics audiences to trigger off of.
7.  From the **Audience Trigger Events** input, select which type of audience trigger events to send got conversion.
8.  In the **Offline Event Set ID** text box, enter your TikTok Offline Event Set ID.
9.  From the **Event Name** input, select the TikTok event name, or enter custom event name.
10.  From the **Event Time** input, select the user field that contains the event time.
11.  From the **Identifier Mapping** input, map all the Identifier fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
12.  From the **Property Mapping** input, map all the property fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
13.  Click the **Complete** button to start the job.

## Export Web Events

Exporting Web Events to TikTok allows you to capture and analyze user interactions on your website, providing valuable insights into user behavior and engagement. This job helps you optimize your ad targeting and improve campaign performance by ensuring that your marketing efforts are accurately attributed. By running this job, you can make data-driven decisions to enhance user experience and increase ROI.

### Authorization

Export Web Events supports the following authorization types:

-   [TikTok Events Access Token](#tiktok-events-access-token)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: [TikTok Event](https://business-api.tiktok.com/portal/docs?id=1771100779668482)

This integration utilizes the [TikTok Events 2.0 API](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to send Lytics audience trigger events to TikTok.

Steps/Pattern:

1.  When a user enters or exits (configurable) one of the audiences selected in the job configuration, an event is produced following the mapping configuration and sent to TikTok.

### Fields

Lytics user fields can be mapped to a various fields in a TikTok event. Please see the [TikTok Events Guide](https://business-api.tiktok.com/portal/docs?rid=oyn7lhbo6ar\&id=1771100779668482) to learn more about the fields in a TikTok event before mapping.

### Configuration

Follow these steps to set up and configure an export job for TikTok in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **TikTok** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From **Audiences**, select all the Lytics audiences to trigger off of.
7.  From the **Audience Trigger Events** input, select which type of audience trigger events to send got conversion.
8.  In the **Pixel Code** text box, enter your TikTok Pixel Code.
9.  From the **Event Name** input, select the TikTok event name, or enter custom event name.
10.  From the **Event Time Field** input, select the user field that contains the event time.
11.  From the **Page URL** input, select the user field that contains the browser URL where the event happened.
12.  (optional) From the **Page Referrer** input, select the user field that contains the referrer URL.
13.  From the **Identifier Mapping** input, map all the Identifier fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
14.  From the **Property Mapping** input, map all the property fields from Lytics to TikTok by selecting the Lytics field on the left, and its TikTok destination on the right.
15.  Click the **Complete** button to start the job.
