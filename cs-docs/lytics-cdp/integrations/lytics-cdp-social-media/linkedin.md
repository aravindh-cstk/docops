---
title: "LinkedIn"
description: "LinkedIn is a professional network platform that allows businesses and marketers to reach their customers. Integrating Lytics with LinkedIn enables you to…"
url: /lytics/linkedin
---

# LinkedIn

## LinkedIn

## Overview

[LinkedIn](https://www.linkedin.com) is a professional network platform that allows businesses and marketers to reach their customers. Integrating Lytics with LinkedIn enables you to send Lytics audiences to target LinkedIn users via ad exchange.

## Authorization

If you haven't already done so, you must set up a LinkedIn account before you begin the process described below.

**Warning:** With the release of the LinkedIn Conversion Rule export on 10/30/2023 all LinkedIn users will be required to create a new authorization in Lytics before they create any new LinkedIn export due to a change in scope required by LinkedIn.

To export Lytics audiences to LinkedIn, please ensure the LinkedIn user being authenticated has access to manage [DMP segments](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http). Please refer to LinkedIn's [authorization](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fmarketing%2Fcontext\&tabs=HTTPS) documentation for more on how LinkedIn manages access to its API.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **LinkedIn** from the list of providers.
2.  Select the **LinkedIn Sign-In** method for authorization.
3.  Enter your LinkedIn login credentials in the login popup and confirm the authorization.\\

![auth-linkedin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amea984213bf9dfaa3/8111353cde10de69df29cff1/auth-linkedin.png)

1.  In the **Label** text box, enter a name for the authorization.
2.  (Optional) In the **Description** text box, enter a description for this authorization.
3.  Click **Save Authorization**.

## LinkedIn: Export Audiences to New Conversion Rule

Connect to LinkedIn's Conversion API using a new conversion rule to measure the performance of your LinkedIn campaigns.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Export Audiences to New Conversion Rule supports the following authorization types:

-   [LinkedIn Sign-In](#linkedin-signin)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Batch Integration
-   **Resulting data**: User and conversion data in LinkedIn

This integration sends user data to the [LinkedIn Conversion API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http).

Steps/Pattern:

1.  Creates a new conversion rule
2.  Retrieves a list of campaigns associated with the sponsored ad account
3.  Associates the campaigns to the conversion rule that was created
4.  Streams the conversion events and user attributes to the Conversion API

### Fields

One or more user [identifiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http#userinfo) will be sent along with the conversion data. You can also send optional [user fields](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http#userinfo) to the Conversion API for additional matching.

### Configuration

Follow these steps to set up and configure an export job for LinkedIn in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **LinkedIn** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  From the **LinkedIn Sponsored Ad Account ID** input, select the LinkedIn Sponsored Ad Account to use
8.  (optional) In the **Rule Name** text box, enter the name of the new conversion rule that will be created..
9.  (optional) From the **Conversion Type** input, select the conversion type.
10.  (optional) From the **Attribution Type** input, select the attribution type..
11.  (optional) From the **Post Click Attribution Window Size** input, select the post click attribution window size. The default is 30 days.
12.  (optional) From the **View Through Attribution Window Size** input, select view through attribution window size. The default is 7 days.
13.  (optional) From the **Event Timestamp** input, select the Lytics user profile field that contains the time when the actual event occurred.
14.  (optional) From the **Event ID** input, select the Lytics user profile field that contains the LinkedIn Event ID to be used for the de-duplication process.
15.  From the **User Id Mapping** input, map the Lytics fields to LinkedIn's Identifier fields. At least one identifier must be mapped. If first name or last name is selected, both must be supplied. Both plain text and SHA256 encoded emails can be mapped to Email Address. Plain text emails will be lower-cased and hashed before sending to LinkedIn.
16.  (optional) From the **User Data Mapping** input, map the value from Lytics field to LinkedIn's user data parameters.
17.  (optional) From the **Currency Code** input, select the three letter currency code for the conversion value.
18.  (optional) From the **Currency Value** input, select the Lytics field that has the conversion value.
19.  (optional) From the **Lead Gen Form Response ID** input, select the Lytics user profile field that contains the LinkedIn leadGenFormResponse ID.
20.  (optional) Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audience.
21.  (optional) From the **Audience Trigger Events** input, select which type of audience trigger events to send to the conversions API.
22.  Click the **Complete** button to start the job.

## LinkedIn: Export Audiences to Existing Conversion Rule

Connect to LinkedIn's Conversion API using an existing conversion rule to measure the performance of your LinkedIn campaigns.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Export Audiences to Existing Conversion Rule supports the following authorization types:

-   [LinkedIn Sign-In](#linkedin-signin)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Batch Integration
-   **Resulting data**: User and conversion data in LinkedIn

This integration sends user data to the [LinkedIn Conversion API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http).

Steps/Pattern:

1.  Retrieves a list of campaigns associated with the sponsored ad account
2.  Associates the campaigns to the existing conversion rule selected during configuration
3.  Streams the conversion events and user attributes to the Conversion API

### Fields

One or more user [identifiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http#userinfo) will be sent along with the conversion data. You can also send optional [user fields](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api?view=li-lms-2023-09\&tabs=http#userinfo) to the Conversion API for additional matching.

### Configuration

Follow these steps to set up and configure an export job for LinkedIn in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **LinkedIn** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  From the **LinkedIn Sponsored Ad Account ID** input, select the LinkedIn Sponsored Ad Account to use.
8.  From the **Existing Conversion Rule** input, select an existing conversion rule to map conversions to.
9.  (optional) From the **Event Timestamp** input, select the Lytics user profile field that contains the time when the actual event occurred.
10.  (optional) From the **Event ID** input, select the Lytics user profile field that contains the LinkedIn Event ID to be used for the de-duplication process.
11.  From the **User Id Mapping** input, map the Lytics fields to LinkedIn's Identifier fields. At least one identifier must be mapped. If first name or last name is selected, both must be supplied. Both plain text and SHA256 encoded emails can be mapped to Email Address. Plain text emails will be lower-cased and hashed before sending to LinkedIn.
12.  (optional) From the **User Data Mapping** input, map the value from Lytics field to LinkedIn's user data parameters.
13.  (optional) From the **Currency Code** input, select the three letter currency code for the conversion value.
14.  (optional) From the **Currency Value** input, select the Lytics field that has the conversion value.
15.  (optional) From the **Lead Gen Form Response ID** input, select the Lytics user profile field that contains the LinkedIn leadGenFormResponse ID.
16.  (optional) Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audience.
17.  (optional) From the **Audience Trigger Events** input, select which type of audience trigger events to send to the conversions API..
18.  Click the **Complete** button to start the job

## Export Audiences

Sync Lytics audiences with [LinkedIn](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/matched-audiences) to identify and target the right users to improve the performance of your campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: [LinkedIn Segments](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http) populated with users from the selected Lytics audience.

This integration uses the LinkedIn [Dynamic Segments API](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/matched-audiences#dmp-segments-apis) to send the Lytics audience users. Once the job is started, it will:

1.  Scan the selected Lytics audience. Get the information for the user like their IDs and other fields as per [configuration](#configuration). It will then use LinkedIn's [DMP Segment Users](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-users?tabs=http#add-or-remove-multiple-users) endpoint to send the data.
2.  The export job will run continuously. As users enter or exit the Lytics audience, they will be added to the queue. The queue will be sent to LinkedIn every 5 minutes or or when the queue reaches 1,000 users. For the users that enter the Lytics audience, the job will add the user in the LinkedIn segment and will remove the user from it as the users exit the Lytics audience.

### Fields

The export job gives you an option to send Users ID to LinkedIn. You can map these IDs (Email, SHA256 Email, SHA512 Email, Google AID, and Apple IDFA) to corresponding Lytics user fields as part of job [configuration](#configuration).\\ In addition to IDs, you can also send user information like (First and last name, Title, Company name and Country) to LinkedIn.

### Configuration

Follow these steps to set up and configure an export job for LinkedIn in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **LinkedIn** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audience to export to LinkedIn.
7.  From the **LinkedIn Ad Account** input, select LinkedIn Ad Account where the LinkedIn matched audience exists.
8.  (Optional) From the **LinkedIn Audience** input, select an existing LinkedIn audience to export Lytics users to. If no audience is selected, a new LinkedIn audience will be created with the name format Lytics {audience\_slug} {unix-timestamp}.
9.  From the **Identifier Fields Mapping** input, map the value from Lytics user field to LinkedIn's Identifier field. At least one identifier must be mapped. If you select email, then we will convert the email to SHA 256 hash and then send it to LinkedIn.
10.  (Optional) From the **Extra Field Mapping** input, map the extra fields that you would like to send from Lytics to LinkedIn.
11.  (Optional) Select the **Existing Users** checkbox to send users who already exist in the selected Lytics audience.
12.  Click **Start Export**.\\

![linkedin-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e4ec16db8063188/122c46da004e9f9e97956fc4/linkedin-export.png)

**Note:** When all the users in the audience at the time of export are added to a LinkedIn segment, the work will sleep for 12 hours so that the initial matching process can finish to resolve the IDs into a destination segment. The work will not send any new updates until the destination segment is built and ready.
