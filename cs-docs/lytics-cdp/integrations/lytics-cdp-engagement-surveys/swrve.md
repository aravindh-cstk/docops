---
title: "Swrve"
description: "Swrve"
url: /lytics/swrve
---

# Swrve

## Swrve

## Overview

[Swrve](https://www.swrve.com/) is a mobile marketing automation platform.

Integrating Lytics with Swrve can improve the personalization and precision of your mobile marketing by leveraging Lytics' powerful data science driven segments for targeting.

## Authorization

If you haven't already done so, you will need to set up a Swrve account before you begin the process described below. There are two types of Swrve imports that require different types of authorizations.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Swrve from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Swrve supports the following authorization methods:
3.  [Swrve API](#swrve-api) - Import Audiences
4.  [Swrve S3](#swrve-s3) - Import Activity Data
5.  Enter a **Label** to identify your authorization.
6.  (Optional) Enter a **Description** for further context on your authorization.
7.  Complete the configuration steps needed for your authorization. These steps will vary by method.
8.  Click **Save Authorization**.

### Swrve API

To import audiences, Lytics uses the standard Swrve API authentication, requiring the following credentials: **API Key** and **Personal Key**. You can find more information on creating a Swrve API keys [here](https://docs.swrve.com/faqs/app-management/find-api-key-and-personal-key/).

1.  In the **Label** text box, enter a name for the authorization.
2.  (Optional) In the **Description** text box, enter a description for this authorization.
3.  Enter your **API Key** credential.
4.  Enter your **Personal Key** credential.

### Swrve S3

To import user activity data, you must first [set up a raw data export](https://docs.swrve.com/data-mining/raw-events/setting-up-raw-data-export/) in Swrve, which exports to a S3 bucket. You will need the following credentials: AWS S3 **Access Token**, **Secret Token**, and **Bucket**.

1.  In the **Label** text box, enter a name for the authorization.
2.  (Optional) In the **Description** text box, enter a description for this authorization.
3.  Enter your **Access Token** credential.
4.  Enter your **Secret Token** credential.
5.  Enter your **Bucket** credential.

## Import Activity Data

Importing Swrve user activity data allows you to enrich your Lytics profiles and give you a more accurate view of your users' engagement.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: Raw Event Data

This integration utilizes the [Amazon S3 API](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) to import user data. Once the import is started the workflow will:

1.  Fetch the file selected in the configuration step from S3.
2.  Send data to the `swrve_activity` stream.
3.  Schedule the next run of the import if the **Keep Updated** options is selected.

### Fields

The following fields are included in the default mapping of the `swrve_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| count(type) | swrve\\\_currency\\\_given\\\_ct | Swrve Currency Given Count | int |
| count(type) | swrve\\\_event\\\_ct | Swrve Event Count | int |
| count(type) | swrve\\\_iap\\\_ct | Swrve IAP Count | int |
| count(type) | swrve\\\_purchase\\\_ct | Swrve Purchase Count | int |
| count(type) | swrve\\\_session\\\_end\\\_ct | Swrve Session End Count | int |
| count(type) | swrve\\\_session\\\_start\\\_ct | Swrve Session Start Count | int |
| device\\\_id | swrve\\\_device\\\_id | Swrve Device ID | string |
| device\\\_name | swrve\\\_device\\\_name | Swrve Device Name | string |
| game | swrve\\\_game | Swrve Game | string |
| max(epochms()) | swrve\\\_last\\\_purchase\\\_ts | Swrve Last Purchase | date |
| min(epochms()) | swrve\\\_first\\\_purchase\\\_ts | Swrve First Purchase | date |
| name | swrve\\\_activity\\\_name | Swrve Activity Name | string |
| os | swrve\\\_os | Swrve OS | string |
| os\\\_version | swrve\\\_os\\\_version | Swrve OS Version | string |
| product\\\_id | swrve\\\_product\\\_id | Swrve Product ID | string |
| type | swrve\\\_activity\\\_type | Swrve Activity Type | string |
| user | swrve\\\_user\\\_id `unique id` | Swrve User ID | string |
| valuect(type) | swrve\\\_activty\\\_ct | Swrve Events | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Swrve in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Swrve** from the list of providers.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  From the **File** input, select choose the file, or if this is a continuous import, choose the first file in a dated sequence to import. Listing files may take up to a couple minutes.
8.  (Optional) Select the **Keep Updated** checkbox to continuously run this import.
9.  (Optional) Toggle **Show Advanced Options**.
10.  (Optional) In the **File Prefix** text box, enter enter the file name prefix. You may use regular expressions.
11.  (Optional) From the **Time of Day** input, select time of day to complete the import each day.
12.  (Optional) From the **Timezone** input, select.
13.  Click **Start Import**.

## Import Audiences

Integrating Swrve and Lytics allows you to unite user data across channels and leverage Lytics' powerful data science driven segments for targeting.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: User Profiles

This integration utilizes the [Swrve APIs](https://docs.swrve.com/swrves-apis) import user data. Once the import is started the workflow will:

1.  Import all user data into the `swrve_users` stream.
2.  Schedule the next run of the import if the **Keep Updated** options is selected.

### Fields

The following fields are included in the default mapping of the `swrve_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| epochms() | swrve\\\_last\\\_user\\\_imported | Last User Imported | date |
| max(totimestamp(last\\\_active)) | last\\\_active\\\_ts | Last Active on Any Channel | date |
| max(totimestamp(last\\\_active)) | swrve\\\_last\\\_active | Swrve Last Active | date |
| milliseconds\\\_played | swrve\\\_milliseconds\\\_played | Swrve Milliseconds Played | int |
| min(totimestamp(date\\\_joined)) | swrve\\\_date\\\_joined | Swrve Date Joined | date |
| min(totimestamp(swrve\\\_install\\\_date)) | swrve\\\_install\\\_date | Swrve Install Date | date |
| spend | swrve\\\_spend | Swrve Spend | number |
| swrve\\\_all\\\_events | swrve\\\_all\\\_events | Swrve All Events | int |
| swrve\\\_app\\\_store | swrve\\\_app\\\_store | Swrve App Store | string |
| swrve\\\_app\\\_version | swrve\\\_app\\\_version | Swrve App Version | string |
| swrve\\\_conversation\\\_version | swrve\\\_conversation\\\_version | Swrve Conversation Version | string |
| swrve\\\_data\\\_id | swrve\\\_data\\\_id `unique id` | Swrve Data ID | string |
| swrve\\\_device\\\_dpi | swrve\\\_device\\\_dpi | Swrve Device DPI | int |
| swrve\\\_device\\\_height | swrve\\\_device\\\_height | Swrve Device Height | int |
| swrve\\\_device\\\_name | swrve\\\_device\\\_name | Swrve Device Name | string |
| swrve\\\_device\\\_region | swrve\\\_device\\\_region | Swrve Device Region | string |
| swrve\\\_device\\\_width | swrve\\\_device\\\_width | Swrve Device Width | int |
| swrve\\\_error\\\_invalid\\\_currency | swrve\\\_invalid\\\_currency | Swrve Invalid Currency Errors | int |
| swrve\\\_first\\\_session | swrve\\\_first\\\_session | Swrve First Session | int |
| swrve\\\_ios\\\_min\\\_version | swrve\\\_ios\\\_min\\\_version | Swrve iOS Minimum Version | string |
| swrve\\\_language | swrve\\\_language | Swrve Language | string |
| swrve\\\_location\\\_version | swrve\\\_location\\\_version | Swrve Location Version | string |
| swrve\\\_messages\\\_campaigns\\\_downloaded | swrve\\\_cmpgns\\\_downloaded | Swrve Messages Campaigns Downloaded | int |
| swrve\\\_os | swrve\\\_os | Swrve OS | string |
| swrve\\\_os\\\_version | swrve\\\_os\\\_version | Swrve OS Version | string |
| swrve\\\_permission\\\_ios\\\_camera | swrve\\\_permission\\\_ios\\\_camera | Swrve iOS Camera Permission | string |
| swrve\\\_permission\\\_ios\\\_contacts | swrve\\\_permission\\\_ios\\\_contacts | Swrve iOS Contacts Permission | string |
| swrve\\\_permission\\\_ios\\\_location\\\_always | swrve\\\_permission\\\_ios\\\_location\\\_always | Swrve iOS Location Always Permission | string |
| swrve\\\_permission\\\_ios\\\_location\\\_when\\\_in\\\_use | swrve\\\_permission\\\_ios\\\_location\\\_when\\\_in\\\_use | Swrve iOS Location In Use Permission | string |
| swrve\\\_permission\\\_ios\\\_photos | swrve\\\_permission\\\_ios\\\_photos | Swrve iOS Photos Permission | string |
| swrve\\\_permission\\\_ios\\\_push\\\_notifications | swrve\\\_permission\\\_ios\\\_push\\\_notifications | Swrve iOS Push Permission | string |
| swrve\\\_sdk\\\_version | swrve\\\_sdk\\\_version | Swrve SDK Version | string |
| swrve\\\_segments | swrve\\\_segments | Swrve Segments | string |
| swrve\\\_session\\\_start | swrve\\\_session\\\_start | Swrve Session Start | int |
| swrve\\\_sim\\\_operator\\\_code | swrve\\\_sim\\\_operator\\\_code | Swrve SIM Operator Code | string |
| swrve\\\_sim\\\_operator\\\_iso\\\_country\\\_code | swrve\\\_sim\\\_operator\\\_iso\\\_country\\\_code | Swrve SIM Operator Country | string |
| swrve\\\_sim\\\_operator\\\_name | swrve\\\_sim\\\_operator\\\_name | Swrve SIM Operator Name | string |
| swrve\\\_timezone\\\_name | swrve\\\_timezone\\\_name | Swrve Timezone Name | string |
| swrve\\\_user\\\_id | swrve\\\_user\\\_id `unique id` | Swrve User ID | string |
| swrve\\\_user\\\_properties\\\_changed | swrve\\\_user\\\_properties\\\_changed | Swrve User Properties Changed | int |
| swrve\\\_utc\\\_offset\\\_seconds | swrve\\\_utc\\\_offset\\\_seconds | Swrve UTC Offset Seconds | int |

### Configuration

Follow these steps to set up and configure an import job for Swrve in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Swrve** from the list of providers.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  (optional) Select the **Keep Updated** checkbox, to continuously run this import.
8.  (Optional) Toggle **Show Advanced Options**.
9.  (Optional) From the **Time of Day** input, select time of day to complete the import each day.
10.  (Optional) From the **Timezone** input, select timezone for time of day.
11.  Click **Start Import**.
