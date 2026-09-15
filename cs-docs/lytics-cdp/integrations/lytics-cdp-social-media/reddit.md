---
title: "Reddit"
description: "Reddit is a social network platform that allows users to discuss, vote, and share content. The platform is known for its engaged community and is often…"
url: /lytics/reddit
uid: blt06ef20af5674dfd4
---

# Reddit

## Reddit

## Overview

Reddit is a social network platform that allows users to discuss, vote, and share content. The platform is known for its engaged community and is often used for news aggregation, content rating, and public discussion.

## Authorization

If you haven't already done so, you will need to set up a Reddit account before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Reddit from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Reddit supports the following authorization methods:
    -   [Reddit Ads User](#reddit-ads-user)
    -   [Reddit Conversion API Access Token](#reddit-conversion-api-access-token)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Reddit Ads User

Reddit Ads User authorization method is an Oauth2 based authorization for the Reddit Ads platform.

1.  Enter your Reddit login credentials in the login popup.
2.  In the **Label** text box, enter a name for the authorization
3.  (optional) In the **Description** text box, enter a description for this authorization

### Reddit Conversion API Access Token

This authorization required access token for conversion events. The access token can be generated in **Events Manager** in Reddit Ads dashboard.

1.  In the **Label** text box, enter a name for the authorization
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **Access Token** text box, enter your conversion api access token.

![00b1a443abd48332f2e79663078e35c2ce538a4becaa170ecae0efc0fd5e947c-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am47778740e2b34642/e3f60def5f06c3241d1d6788/00b1a443abd48332f2e79663078e35c2ce538a4becaa170ecae0efc0fd5e947c-image.png)

## Reddit: Conversion API Export

Send Lytics user profiles to Reddit using their conversion api. Use these conversion events to improve performance of your ad campaign.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**:Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: A Lytics audience is exported to Reddit conversion api.

This workflow uses the Reddit conversion api to send the Lytics audiences events.

Once the job is created, the job will:

1.  Optionally Scan existing audience, and for each user it will extract the conversion information as events based on the job's configuration.
2.  Add each conversion events in a queue. The queue will be sent to Reddit every minute or until the queue reaches 1,000 users, whichever happens first.
3.  The export job will run continuously. As users enter or exit the Lytics audience, the updates are sent to Reddit conversion api.

### Fields

You can send Lytics user fields to Reddit conversion api. The job constructs the payload according to the configuration. But below is the sample of payload:

```
{
    "events":
    [
        {
            "click_id": "1234567890",
            "event_at": "2024-10-07T23:32:58-07:00",
            "event_at_ms": 1728369178392,
            "event_metadata":
            {
                "conversion_id": "test-conversion-id",
                "currency": "USD",
                "item_count": 5,
                "value": 1099
            },
            "event_type":
            {
                "custom_event_name": "lytics_audiences",
                "tracking_type": "Custom"
            },
            "user":
            {
                "aaid": "cdda802e-fb9c-47ad-9866-0794d394c912",
                "data_processing_options":
                {
                    "country": "US"
                },
                "email": "5aaf4e4a4d5fce68feac226a5160bd1ae12d03eeb64dee7e674d48209cdccee7",
                "external_id": "7c73f2ae-a433-4d7b-9838-abcdefghijkl",
                "idfa": "el123ghi-ayyu-48bc-b806-asdfghjklqwe",
                "ip_address": "192.192.1.1",
                "user_agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
                "uuid": "1684189007728.7c73f2ae-a433-4d7b-9838-f467da98f48e"
            }
        }
    ],
    "test_mode": false
}
```

### Configuration

Follow these steps to set up and configure a Reddit Conversion API export job in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Reddit** from the list of providers.
2.  Select the export **Reddit: Conversion API Export** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.

![146c1fe0bae71a590c446052f212487d6292f518bd1a9441a36056245ff5b70a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6a13569827d5781c/273b2f15994efb6908871bfc/146c1fe0bae71a590c446052f212487d6292f518bd1a9441a36056245ff5b70a-image.png)

1.  Select the **Audiences** that contains the users to export.
2.  In the **Ad Account** text box, enter your Reddit Ad Account ID.
3.  From the **Event Type** input, select the type of the conversion event. If not selected, the event will be sent with **lytics\\\_audiences** custom name. You can also enter any other custom event name.
4.  (Optional) From the **Event Timestamp** input, select the Lytics user field that contains the timestamp for the event. The timestamp must not be older than 7 days. If left empty, current timestamp will be used.
5.  From the **Click ID** input, select the Lytics user field that contains the Reddit click ID.
6.  From the **User Data Mappings** input, map Lytics user fields to Reddit User Data. At least one user data or click id must be provided. Note that all user data fields except UUID and User Agent can be provided as plain text or SHA256 hashed. If providing plain text, all fields except UUID and User Agent will be hashed before sending to Reddit.
7.  (Optional) From the **Conversion ID** input, select the Lytics user field that contains the conversion ID that will be used for de-duplication in Reddit.
8.  (Optional) From the **Country Code** input, select the 2 letter country code where the users are located. If not provided, **US** will be used as default.
9.  (Optional) From the **Currency Code** input, select the currency code, three letter code in ISO-4217 format. If not provided, **USD** will be used as default.
10.  (Optional) From the **Value** input, select the Lytics user field that contains monetary value of the event.
11.  (Optional) From the **Units Sold** input, select the Lytics user field that contains the number of items sold.
12.  Select the **Existing Users** checkbox to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or leave the audience.
13.  Click the **Complete** button to start the job.

## Reddit: Custom Audience Export

Export your Lytics audiences to a Reddit Custom Audience to target specific customers in Reddit. Refine your targeting efforts using Lytics audiences containing rich information on user behavior and content affinities across channels.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)
-   **Frequency**:[Batch](/docs/lytics/integrated-marketing-tools#batch)
-   **Resulting data**:[User profiles](/docs/lytics/integrated-marketing-tools#user-profiles)

Steps/Pattern:

1.  Creates a new Reddit custom audience if one isn't specified.
2.  As users enter the exported Lytics audience, the identifiers are added to a batch to add to the Reddit custom audience, as users exit the exported audience, the identifiers will be added to a removal batch. All identifiers that are not already in SHA256 format are hashed before being added to the batch.
3.  Every 10,000 users or every 8 minutes, whichever is first, Lytics will send the batches of adds and removals from the custom audience.

### Fields

Lytics exports the following fields to Reddit.

| Lytics User Field | Description | Reddit Field | Type |
| --- | --- | --- | --- |
| email | Email Address | email | string |
| mobile\\\_id | Mobile ID | mobile\\\_id | string |

### Configuration

Follow these steps to set up and configure an export job for Reddit in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Reddit** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.\\

reddit6. Select the audiences to export.

1.  In the **Audiences** inputs, select the Lytics audiences to export.
2.  In the **Reddit Business** text box, enter select your Reddit Business Account.
3.  In the **Reddit Ad Account** text box, enter select your Reddit Ad Account.
4.  (optional) In the **Reddit Audience Name** text box, enter enter a name for your new custom audience in Reddit. Or select an existing Reddit custom audience to add to below.
5.  (optional) In the **Reddit Custom Audience** text box, enter optionally, select a Reddit custom audience to add to, instead of creating a new audience.
6.  (optional) From the **Email Field** input, select the field that contains the user's email. This can be a plain text email or SHA256 hashed email, and can be scalar or a set. Emails will be sent as SHA256 hashes to Reddit.
7.  (optional) From the **Mobile ID** input, select the field that contains the user's Mobile ID. This can be a plain text mobile ID or SHA256 hashed mobile ID, and can be scalar or a set. Mobile IDs will be sent as SHA256 hashes to Reddit.
8.  Click the **Complete** button to start the job.
