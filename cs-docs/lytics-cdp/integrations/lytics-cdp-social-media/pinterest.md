---
title: "Pinterest"
description: "Pinterest is an image sharing and social media service designed to enable saving and discovery of information. Integrating Lytics with Pinterest enables…"
url: /lytics/pinterest
uid: blt3603d867f1a2996f
---

# Pinterest

## Pinterest

## Overview

Pinterest is an image sharing and social media service designed to enable saving and discovery of information. Integrating Lytics with Pinterest enables you to send Lytics audiences to target Pinterest users via ad exchange.

## Authorization

If you haven't already done so, you will need to set up a [Pinterest Business account](https://business.pinterest.com/) before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Pinterest** from the the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Pinterest supports the following authorization methods:
    -   [Pinterest Sign-In](#pinterest-signin)
    -   [Pinterest Conversion Token](#pinterest-conversion-token)

### Pinterest Sign-In

If you haven't already done so, you will need to set up a [Pinterest Business account](https://business.pinterest.com/) before you begin the process described below.

**Note:** The Pinterest account used for authorization must have **Admin** or **Audience** level permissions to enable the Pinterest Audience Export. More details on Pinterest Account permissions can be found [here](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Pinterest** from the list of providers.
2.  Select the **Pinterest Sign-In** method for authorization.
3.  Enter your Pinterest login credentials in the login popup.
4.  In the **Label** text box, enter a name for the authorization
5.  (optional) In the **Description** text box, enter a description for this authorization
6.  Click **Save Authorization**.

### Pinterest Conversion Token

If you haven't already done so, you will need to set up a [Pinterest Business account](https://business.pinterest.com/) before you begin the process described below. Pinterest Conversion Token you will need to generate a conversion token, follow [these instructions](https://developers.pinterest.com/docs/conversions/updated/) to generate a token.

1.  Select the **Pinterest Conversion Token** method for authorization
2.  In the **Label** text box, enter a name for the authorization
3.  (optional) In the **Description** text box, enter a description for this authorization
4.  In the **Token** text box, enter your Pinterest Conversion Token credential.
5.  In the **Account ID** text box, enter your Pinterest account ID.

## Pinterest: Conversions Export

Push your conversions to Pinterest. These conversions can then be used for re-targeting in campaigns and can be reviewed in conversion reporting for improved conversion visibility.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Pinterest conversions export supports the following authorization type:

-   [Pinterest Conversion Token](#pinterest-conversion-token)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis), [Audience triggers](/docs/lytics/integrated-marketing-tools#audience-triggers)
-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time)
-   **Resulting data**: Conversions in Pinterest.

This integration uses the Pinterest [Marketing API](https://developers.pinterest.com/docs/api/v5/) to send the Lytics audience users as conversion events. Once the job is started, it will:

1.  Optionally Scan existing audience, and for each user it will extract the conversion information based on the job's configuration.
2.  Send each user to Pinterest as a conversion using the [Conversion Events API](https://developers.pinterest.com/docs/api/v5/#tag/conversion_events)
3.  The export job will run continuously. Lytics audience membership (enters and exits) will be sent to the Pinterest Conversion Events API as they occur.

### Fields

The export job lets you map user fields to Pinterest conversion fields. There are three types of mapping: identifiers, event, and details.

-   The **Identity Mapping** lets you map user fields to identifiers in Pinterest. At least one [set of identifiers](https://developers.pinterest.com/docs/conversions/best/#User_data%2C%20object) must be mapped. If Pinterest requires an identifier to be hashed, the export will check if it is already a valid SHA256 hash, or if not will hash the identifier before sending it. The export will handle conversions between arrays and single values.
-   The **Event Mapping** config lets you map information from user fields to the [required event information fields](https://developers.pinterest.com/docs/conversions/best/#Required), you can map the Event Name, Action Source, Event Time, and Event ID. The Event Time and Event ID must be mapped; Event Name and Action Source can have default values configured.
-   **Details Mapping** allows mapping of [optional fields](https://developers.pinterest.com/docs/conversions/best/#Optional%2C%20) to the conversion, such as Click ID, Conversion Value, Content IDs etc. These fields should be mapped if available to give betting insights into your conversions.

### Configuration

Follow these steps to set up and configure an export job for Pinterest in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Pinterest** from the list of providers.
2.  Select the export **Conversion Export** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  From the **Identifier Mapping** input, map all the Identifier fields from Lytics to Pinterest by selecting the Lytics field on the left, and its Pinterest destination on the right.
8.  From the **Event Mapping** input, map all the required event fields from Lytics to Pinterest by selecting the Lytics field on the left, and its Pinterest destination on the right. Event Time and Event ID must always be mapped, the other fields can be left blank if their defaults are set below. If the Event Time user field is empty, then the current time will be used. **Note**: we recommend mapping a Lytics field of type DATE for Event Time. If a string or integer field is mapped, the integration will make a best-effort attempt to parse the date, which can produce unexpected results for ambiguous formats.
9.  (optional) In the **Action Source Default** drop down, select the action source for this conversion. If Action Source is not mapped or the field is empty, this value will be used.
10.  (optional) In the **Event Name Default** drop down, select the Event Name associated with this conversion.
11.  (optional) From the **Details Mapping** input, select map all the conversion event fields from Lytics to Pinterest by selecting the Lytics field on the left, and its Pinterest destination on the right.
12.  (optional) In the **Partner Name Default** text box, enter the partner name associated with these conversions. If Partner Name is not mapped, or the user field is empty, this value will be used. This may be left blank if no partner is associated with these conversions.
13.  (optional) Select the **Existing Users** checkbox to send users already in the audience to Pinterest.

**Note:** If the value of Event Time is older than an hour, the event will be treated as an offline event and will not be used for conversion targeting. Offline events in Pinterest are available for reporting use-cases.

![606b186-capi-config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amde966192cfda7eb6/5d4cf2c9eef22a66d5d87ba5/606b186-capi-config.png)

1.  Click the **Start job** button to start the job

## Export Audience

Sync Lytics audiences with [Pinterest](https://help.pinterest.com/en/business/article/audience-targeting) to identify and target the right users to improve the performance of your campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**:\\

[Pinterest Customer Lists](https://help.pinterest.com/en/business/article/audience-targeting) populated with users from the selected Lytics audience.

This integration uses the Pinterest [Marketing API](https://developers.pinterest.com/docs/api/v5/) to send the Lytics audience users. Once the job is started, it will:

1.  Scan the selected Lytics audience and get each user's configured identifier. The job will then use Pinterest's [Update Customer List](https://developers.pinterest.com/docs/api/v5/#operation/customer_lists/update) endpoint to send users to your Pinterest Customer List.
2.  The export job will run continuously. As users enter or exit the Lytics audience, they will be added to the queue. The queue will be sent to Pinterest every 5 minutes or or when the queue reaches 10,000 users, whichever comes first. For the users that enter the Lytics audience, the job will add the user in the Pinterest Customer List and will remove the user from it as the users exit the Lytics audience.

**Note:** Your Pinterest customer list will not appear in your Pinterest account dashboard until it is done processing and can be matched with at least 100 Pinterest accounts.

### Fields

The export job gives you an option to send Email, SHA256 Email, or Mobile Ad ID (MAID) to Pinterest to use as the identifier to match users. You can send Email, SHA256 Email, or Mobile Ad ID (MAID) as part of job [configuration](#configuration). **A list can only contain one identifier type.** All identifiers will be cryptographically hashed with SHA-256 algorithm, if not already SHA-256 hashed.

### Configuration

Follow these steps to set up and configure an export job for Pinterest in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Pinterest** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export to Pinterest.
7.  From the **Pinterest Ad Account** input, select which Pinterest Ad account to create or select the customer list.
8.  (optional) From the **Customer List** input, select which Pinterest Customer List to append to. If no list is selected, a new Customer List will be created with name formatted as Lytics audience-name unix-ts
9.  (optional) From the **Email** input, select which field contains the user's email. If selected, customer list must by type EMAIL.
10.  (optional) From the **SHA256 Email** input, if email addresses are already hashed in Lytics, select which field contains the SHA256 hashed email. If selected, customer list must by type EMAIL.
11.  (optional) From the **Mobile ID** input, select which field contains the user's mobile ID. A list can only contain one identifier type. If selected, customer list must by type MAID.

![Pinterest Export Config 1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd10a5b2b58e0871e/b50d889d873725d259a4e3ff/Screen_Shot_2022-09-14_at_12.53.18_PM.png)

1.  Click the **Start job** button to start the job
