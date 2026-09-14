---
title: "Amazon Ads"
description: "Amazon Ads is a demand-side platform that allows advertisers to programmatically buy display and video ads at scale. Connect Lytics with Amazon Ads to…"
url: /lytics/amazon-ads
---

# Amazon Ads

## Amazon Ads

## Overview

[Amazon Ads](https://advertising.amazon.com/products/amazon-dsp) is a demand-side platform that allows advertisers to programmatically buy display and video ads at scale. Connect Lytics with Amazon Ads to leverage the behavioral scoring, content affinities, and Insights from Lytics to improve your targeting for Amazon ads.

## Authorization

If you have not already done so, you will need to set up an Amazon Advertising account before you begin the process described below. Authorizing as an Amazon Advertising user will guide you through an OAuth process to authorize access to ad accounts tied to that particular Amazon Advertising user.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Amazon Ads from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Amazon DSP supports the following authorization methods depending on your Amazon region:
    -   Login with Amazon - US
    -   Login with Amazon - EU
    -   Login with Amazon - FE
3.  Enter your Amazon DSP login credentials in the login popup.
4.  Enter a **Label** to identify your authorization.
5.  (Optional) Enter a **Description** for further context on your authorization.
6.  Complete the configuration steps needed for your authorization. These steps will vary by method.
7.  Click **Save Authorization**.

## Amazon Ads: Export Audience

Send Lytics user profiles to [Amazon Ads](https://advertising.amazon.com/?ref_=logo) to reach and connect with your customers.

### Integration Details

-   **Implementation Type**: Client-side Integrations and Server-side Integration
-   **Implementation Technique**: JavaScript Tag Integration, REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: A Lytics audience is exported to Amazon Ads Audience.

This workflow uses the [Amazon Ads API](https://advertising.amazon.com/API/docs/en-us/amc-advertiser-audience#tag/Audience-Metadata/operation/CreateAudienceMetadataV2) to create an audience in the Amazon Ads platform and uploads the Lytics user profiles for matching.

Once the job is created, the job will:

1.  Create an Amazon ads audience for the configured Lytics audience with name format: lytics\_{audience\_slug}\_{current\_timestamp}.
2.  Runs the backfill of the audience (if configured) and adds the users in Amazon ads audience.
3.  For each user entering the audience, it will add them in the queue to add them in the Amazon ads audience.
4.  For each user exiting the audience, it will add them in the queue to remove them from the Amazon ads audience.
5.  The queue will be sent to [Amazon ads records api](https://advertising.amazon.com/API/docs/en-us/amc-advertiser-audience#tag/Audience-Records/operation/ManageAudienceV2) every minute or when the queue reaches 10,000 users.
6.  The job will run continuously repeating steps (3)-(5).

### Fields

The export job gives you an option to send following fields to Amazon Ads:

| Lytics User Field (configurable) | Description | Amazon Ads PII Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| first\\\_name | First Name | firstname | string |
| last\\\_name | Last Name | lastname | string |
| address | Address | address | string |
| phone | Phone Number | phone | string |
| city | City | city | string |
| postal\\\_code | Postal Code | postal | string |
| state | State | state | string |

### Configuration

Follow these steps to set up and configure an export to Amazon DSP from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Amazon DSP** from the list of providers.
2.  Select **Amazon Ads: Export Audience** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audience to export.
7.  From the **Profile ID** input, select the Amazon DSP Profile/region you wish to export to.
8.  In the **Advertiser ID** text box, enter your Amazon Ads Advertiser ID.
9.  From the **Identifier Mappings** input, map the value from Lytics field to Amazon Ads PII field. At least one PII field must be mapped. We will hash the field if required according to [Amazon's requirements](https://advertising.amazon.com/dsp/help/ss/en/audiences#GCCXMZYCK4RXWS6C).
10.  From the **Country Code** input, select the 2 letter country code where the users live. This is used for phone number and address normalization, and is now required by Amazon for Digital Markets Act compliance. For more information, see
11.  From the **External User ID** input, select the Lytics user field that contains the external user id. If left empty, the email or phone number identifier that is mapped in the above identifier mapping will be used as the external user id.
12.  From the **User Data Consent** input, select the Amazon user data consent status for Digital Markets Act compliance.
13.  From the **Ad Storage Consent** input, select the Amazon ad storage consent status.
14.  (Optional) Check the **Existing Users** to immediately send users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or leave the audience.
15.  Click the **Complete** button to start the job.

## Amazon DSP: Sync Cookies/Email

Send Lytics user profiles to [Amazon DSP](https://advertising.amazon.com/?ref_=logo) to reach and connect with your customers.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: Client-side Integrations and Server-side Integration
-   **Implementation Technique**: JavaScript Tag Integration, REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: A Lytics audience is exported to Amazon DSP

This workflow uses the Amazon DSP API to create an audience in the Amazon Ads platform and uploads the Lytics user profiles for matching.

Once the job is created, the job will:

-   Create an Amazon ads audience for the configured Lytics audience with name format: lytics\\\_\\{audience\\\_slug}\\\_\\{current\\\_timestamp}.

### Fields

### Configuration

Follow these steps to set up and configure an export job for Amazon DSP in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Amazon DSP** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audience to export.
7.  From the **Profile ID** input, select the Amazon DSP Profile/region you wish to export to.
8.  (optional) In the **Advertiser ID** text box, enter your Amazon DSP Advertiser ID.
9.  (optional) From the **Match Method** input, select the match method that was used for this audience. Select Cookie for audiences that have been synced via the JSTAG cookie sync, or Hashed Emails for audiences that have been synced via the Upload Hashed Identifers workflow.
10.  (optional) From the **Email Field** input, select the field name that contains the user's email — plain or already SHA256-hashed. Plain emails are hashed before being sent to Amazon (Lytics trims and lowercases them first). Required if Match Method is set to Hashed Emails, and should match the field used in the Upload Hashed Identifiers job.
11.  (optional) From the **Country Codes** input, select the 2 letter country codes where users in the audience live. This is used for Digital Markets Act compliance. If no country codes are selected, the users will be assumed to be in-scope for DMA, and match rates will be severely impacted. For mor information, see
12.  (optional) Select the **Existing Users** checkbox, to select this to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they leave or enter the audience.
13.  Click the **Complete** button to start the job.

## Amazon DSP: Conversion API Export

Send Lytics user profiles to [Amazon DSP Conversion API](https://advertising.amazon.com/API/docs/en-us/dsp-conversion-builder#tag/Conversion-Event-Data) to improve your ad campaign performance.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**:Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: A Lytics audience is exported to Amazon DSP conversion api.

This workflow uses the [Amazon DSP events api](https://advertising.amazon.com/API/docs/en-us/guides/events/events) to send the Lytics audiences events.

Once the job is created, the job will:

-   Scan the Lytics audiences. Adds user's pii data like ("EMAIL" "PHONE" "FIRST\_NAME" "LAST\_NAME" "ADDRESS" "CITY" "STATE" "POSTAL" "MAID" "RAMP\_ID" or "MATCH\_ID") and other data per configuration in a queue.
-   The export will run continuously. As users enter or exit the Lytics audiences, they will be added to the queue. The queue will be sent to Amazon every minute or until the queue reaches 100 users, whichever happens first.

### Fields

You can send Lytics user fields to Amazon events api. The job constructs the payload according to the configuration. But below is the sample of payload:

```
{
  "events": [
    {
      "eventDescription": {
        "name": "Lytics Audiences",
        "conversionType": "LEAD",
        "eventSource": "WEBSITE",
        "eventIngestionMethod": "SERVER_TO_SERVER",
        "dataSetName": "hello_world_dataset"
      },
      "countryCode": "US",
      "eventTime": "2025-08-05T11:42:09-07:00",
      "matchKeys": [
        {
          "type": "EMAIL",
          "values": ["979e0b2b1c9400d6ed429e008ae41c1d6662fc0310e6ebac3e59a73da141cd7a"]
        },
        {
          "type": "FIRST_NAME",
          "values": ["4906fbbadc0e9ef34db9e378da4086c17ddbc0ed76eacfc72870c0b99085e753"]
        },
        {
          "type": "LAST_NAME",
          "values": ["5014438bc08e5a2261c9ab3b5c5b3876d8a9cd67830cdba61862c76e0f0d64cc"]
        },
        {
          "type": "PHONE",
          "values": ["a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2"]
        },
        {
          "type": "ADDRESS",
          "values": ["051098eb5e73408f7583204c0ccaef7c885f89c271317cd919bee65980a9a84b"]
        },
        {
          "type": "CITY",
          "values": ["d8e3ee0e3af6b79059d69fab6d0a5567930fb10cc91f61b16c0ec58412770fea"]
        },
        {
          "type": "STATE",
          "values": ["7175517a370b5cd2e664e3fd29c4ea9db5ce17058eb9772fe090a5485e49dad6"]
        },
        {
          "type": "POSTAL",
          "values": ["1da798654fe99888c85d2a6d730909e10bebcf5d640d8d19d27545cf9e4a1d4c"]
        }
      ],
      "eventId": "event-123",
      "value": 99.99,
      "currencyCode": "USD",
      "unitsSold": 1,
      "consent": {
        "amazonConsent": {
          "amznAdStorage": "GRANTED",
          "amznUserData": "GRANTED"
        }
      }
    }
  ]
}
```

### Configuration

Follow these steps to set up and configure a Amazon DSP capi export job in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Amazon Ads** from the list of providers.
2.  Select the export **Amazon DSP: Conversion API Export** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audiences** to export to Amazon DSP Conversion API.
7.  In the **Advertiser ID** text box, enter/select your Amazon Ads Advertiser ID (DSP Advertiser ID).
8.  (Optional) In the **Event Name** text box, enter the name for the event. This is used as part of the conversion definition in Amazon. If not provided, events will be sent with **Lytics Audiences** name
9.  From the **Conversion Type** input, select the Amazon conversion type associated with this event
10.  From the **Event Name** input, select the platform from which the event was sourced.
11.  (Optional) In the **Dataset Name** text box, enter the event dataset name to which this events will be added to in Amazon DSP. Must be lowercase alphanumeric with underscores only (e.g. my\\\_dataset\\\_1). If not provided, the default\\\_events dataset will be used.
12.  (Optional) From the **Event Timestamp** input, select the Lytics user field that contains the timestamp for the event. The timestamp must not be older than 21 days. If left empty, current timestamp will be used.
13.  From the **Identifier Mappings** input, map the value from Lytics field to Amazon's user identifier parameters. At least one user identifier field must be mapped.
14.  (Optional) From the **Country Code** input, select the 2 letter country code where the users live. This is used for phone number and address normalization, and is now required by Amazon for Digital Markets Act compliance. For more information, see . If not provided, **US** will be used as default.
15.  (Optional) From the **User Data Consent** input, select the Amazon user data consent status. Required for EU countries (e.g. DE, FR, IT, ES). Can be left empty for non-EU regions.
16.  (Optional) From the **Ad Storage Consent** input, select the Amazon ad storage consent status. Required for EU countries (e.g. DE, FR, IT, ES). Can be left empty for non-EU regions.
17.  (Optional) From the **Event ID** input, select the Lytics user field that contains a unique event ID. Used for deduplication: events with the same eventId will be deduplicated, keeping only the first.
18.  (Optional) From the **Currency Code** input, select the three letter currency code in ISO-4217 format. If not provided, **USD** will be used as default.
19.  (Optional) From the **Value** input, select the Lytics user field that contains monetary value of the event.
20.  (Optional) From the **Client DeDupe ID** input, select the Lytics user field that contains the client dedupe ID that will be used for deduplication in Amazon.
21.  (Optional) From the **Units Sold** input, select the Lytics user field that contains the number of units sold.
22.  (Optional) From the **Fields To Trigger** input, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be sent to the Amazon Ads API.
23.  (Optional) From the **Audience Trigger Events** input, select which type of audience trigger events to send to the Events API.
24.  Select the **Existing Users** checkbox to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or leave the audience.
25.  Click the **Complete** button to start the job.

## Amazon Marketing Cloud: Advertiser Data Upload

​The Amazon Marketing Cloud export Uploads an audience of users to an Amazon Marketing Cloud dataset. This dataset can then generate insight reports based on your Lytics audience.

### Authorization

**Note:** In addition to the Amazon Ads authorization, to use the Amazon Marketing Cloud: Advertiser Data Upload workflow, you must delegate access to Lytics to your Amazon Marketing Cloud instance S3 bucket. Follow these directions to add the delegated authorization: [docs](/docs/lytics/aws-s3-overview#delegating-access-via-aws-iam).

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: A DataSet will be created with the selected profile identifiers and fields.

#### Steps/Pattern:

1.  The AMC Instance is checked to see if the dataset exists. If it does not, a new one is created. If it exists, the columns are validated to contain the selected fields.
2.  The Audience is scanned. For each profile:\\

a. The identifiers are normalized and hashed.\\ b. The hashed identifiers and selected fields are written to a CSV file in the AMC instance's upload bucket.

1.  A load job is started in AMC to load the file into the configured dataset.
2.  If the export is configured to **Keep Updated**, it will wait until the next export cycle, where it will start at step 1.

**Note:** The export will only send users currently in the audience. As profiles fall out of the audience in Lytics they will be removed from the audience being exported to Amazon.

### Fields

The identifier fields (listed below in the table) will match the profiles of Amazon users. You must select at least one identifier. The identifier(s) will be normalized based on the chosen country and hashed before being sent to Amazon. The listed Lytics user fields are the default fields in Lytics. Your account may use different fields for storing identifiers.\\ ​\\ Identifiers:

| Lytics User Field (configurable) | Description | Amazon Ads PII Field | Type |
| --- | --- | --- | --- |
| email | Email Address | EMAIL | string |
| first\\\_name | First Name | FIRST\\\_NAME | string |
| last\\\_name | Last Name | LAST\\\_NAME | string |
| address | Full address, e.g., "123 Main Street" | ADDRESS | string |
| phone | Phone Number , requires country code prefix. E.g., "1-302-555-1212“ | PHONE | string |
| city | City, e,g., "Denver" | CITY | string |
| zip | Zip code or postal code. E.g, US: "98103", CA: "M4Y 1R6" | ZIP | string |
| state | State or Province. E.g. US: Colorado, CA: Ontario | STATE | string |

​

### Configuration

Follow these steps to set up and configure an export job for Amazon Marketing Cloud (AMC) in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.\\ ​

1.  Select **Amazon Ads** from the list of providers.
2.  Select the export **Amazon Marketing Cloud: Advertiser Data Upload** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#aws-keys).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audience to export.
7.  From the **Marketing Cloud Account** input, select your Amazon Marketing Cloud account.
8.  From the **"Marketing Cloud Instance** input, select your Amazon Marketing Cloud instance.
9.  (optional) In the **DataSet** text box, enter or select the DataSet to upload to. If left blank, the audience's slug will be used.
10.  From the **Region** input, select the AWS region that the S3 bucket resides in (e.g., us-east-2).
11.  In the **S3 Bucket Name** text box, enter the bucket that you would like to save your files in. You must give Lytics delegated access to the S3 bucket
12.  (optional) In the **Directory** text box, enter select or enter the directory that you would like to save your files in. The directory suggestions can be slow on large S3 buckets.
13.  In the **Filename** text box, enter the filename of the upload.
14.  (optional) From the **Fields to Export** input, select a list of user fields to export.
15.  (optional) From the **Timestamp format** input, select the format for the timestamp at the end of the filename.
16.  From the **Identifiers Mappings** input, select map Lytics user fields to Amazon Marketing Cloud identifiers.
17.  From the **Country Code** input, select the 2-letter country code for users in this audience. All users will be assumed to be from this country. Based on this selection, addresses, phone numbers, and postal codes will be normalized.
18.  (optional) Select the **Keep Updated** checkbox to run this export continuously.
19.  (optional) From the **File Export Frequency** input, select how often a continuous export should export a new file. The default is daily.
20.  (optional) Select the time to run a continuous export from the **Time of Day** input if the frequency is daily or longer.
21.  (optional) From the **Timezone** input, select the timezone **Time of Day** is in.
22.  Click the **Complete** button to start the job.

**Note:** If using the **Address**, **Phone**, or **Postal Code identifiers**, the audience should contain users from only one country. If you want to export an audience containing profiles from multiple countries, you can create audiences for each country based on the full audience. You can then export multiple audiences to the same AMC dataset.
