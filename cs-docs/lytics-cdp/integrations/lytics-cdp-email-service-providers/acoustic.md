---
title: "Acoustic"
description: "Acoustic (previously known as Silverpop) is a marketing platform that enables email, SMS, and mobile campaigns, among other marketing analytics and…"
url: /lytics/acoustic
---

# Acoustic

## Acoustic

## Overview

[Acoustic](https://acoustic.com/) (previously known as Silverpop) is a marketing platform that enables email, SMS, and mobile campaigns, among other marketing analytics and automation solutions.

Integrating Lytics with Acoustic allows you to import users and their activity data to build behavioral audiences and gain Insights in Lytics. You can then export Lytics audiences back to Acoustic to refine your targeting and deliver personalized messaging.

## Authorization

If you have not done so already, you will need to set up an Acoustic account before you begin the process described below. Your Acoustic account user must have permission to create [Application Access](https://help.goacoustic.com/hc/en-us/articles/360043157333-Application-account-access) via the API.

1.  Select **Acoustic** from the list of providers.
2.  Select the **Full Auth** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Client ID** for the application that you have created in your Acoustic account. For more information, please refer to [Acoustic Documentation](https://help.goacoustic.com/hc/en-us/articles/360043157333-Application-account-access).
6.  Enter the **Client Secret** for your entered Client ID.
7.  Enter the **Pod** number of your Acoustic Campaign. You can find the Pod information in Account Setting page of your **Acoustic** account. For example, if it is **Pod 2** then just enter **2**.
8.  Enter **Refresh Token** that you have created to grant Lytics access. For more information, please refer to [Acoustic Documentation](https://help.goacoustic.com/hc/en-us/articles/360043157333-Application-account-access).
9.  Enter your **SFTP Username** for the Acoustic Account.
10.  Enter your **SFTP Password** for the above SFTP User. You can use your own credentials here, or create a new user for this integration.
11.  Click **Save Authorization**.

**Note:** For this integration, it is recommended to create a new Acoustic User specific for Lytics with the option Do not enforce password expiration policies for this user selected so the authentication is long lasting, and can be revoked on an account by account basis.

## Import Audiences & Activity

Import Acoustic users and their activity information into Lytics so you can leverage that data to build behavioral audiences and gain Insights powered by Lytics data science.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: XML API Integration to download CSV formatted data.
-   **Frequency**: Data is imported as a Batch Integration; imported once, or every 8 hours on a continuous basis.
-   **Resulting Data**: Full Lytics user profiles for all Acoustic users complete with activity data.

This integration utilizes the [Acoustic XML API](https://developer.goacoustic.com/acoustic-campaign/reference/xml-api-overview-1) to import Acoustic users and their activity to Lytics. Each run of the job will proceed as follows:

1.  [Exports](https://developer.goacoustic.com/acoustic-campaign/reference/export-from-a-database) users from the selected Acoustic Database as a CSV file to an Acoustic-manged SFTP server. The CSV files are then read and imported to the silverpop\_users stream in Lytics.
2.  [Exports](https://developer.goacoustic.com/acoustic-campaign/reference/rawrecipientdataexport) email activity from users in the selected Acoustic Database as a CSV file to an Acoustic-manged SFTP server. The CSV files are then read and imported to the silverpop\_activity stream in Lytics.
3.  After successful completion, the job will import new/updated users with their updated activity every 8 hours if [configured](#configuration) to run continuously.

### Fields

The following fields are included in the default mapping for the silverpop\_users stream. Note this integration was formerly named Silverpop, hence the data stream name, but this job will receive your current Acoustic data.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique\_id | Email Address | string |
| First Name | first\\\_name | First Name | string |
| Last Name | last\\\_name | Last Name | string |
| Email Type | sp\\\_email\\\_type | Acoustic Email Type | string |
| map(list, Opted Out) | sp\\\_list\\\_optout\\\_status | Acoustic Optout Status by List | map\\\[string\]string |
| map(list, todate(Opted Out Date)) | sp\\\_list\\\_opt\\\_out\\\_date | Acoustic Opt Out Date by List | map\\\[string\]time |
| map(list, todate(Opt In Date)) | sp\\\_list\\\_opt\\\_in\\\_date | Acoustic Opt In Date by List | map\\\[string\]time |
| map(list, Opt In Details) | sp\\\_list\\\_opt\\\_in\\\_details | Acoustic Opt In Details | map\\\[string\]string |
| emaildomain(email) | emaildomain | Email Domain | string |



Similarly, the following fields are included in the default mapping for the silverpop\_activity stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| Email | email unique id |  | string |
| email | emaildomain | Email Domain | string |
| Url | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| max([epochms()](/reference/query)) | last\\\_active\\\_ts | Last Active on Any Channel | date |
| Campaign Id | sv\\\_campaign\\\_ids | Acoustic Campaign the send originated from | \\\[\]string |
| event | sv\\\_clickct | Acoustic Click count | int |
| Event Type | sv\\\_email\\\_event | Acoustic Events | map\\\[string\]intsum |
| Url | sv\\\_email\\\_urls | Acoustic URLs | \\\[\]string |
| min([epochms()](/reference/query)) | sv\\\_firstclick\\\_ts | Acoustic First Click | date |
| min([epochms()](/reference/query)) | sv\\\_firstopen\\\_ts | Acoustic First Open | date |
| min([epochms()](/reference/query)) | sv\\\_firstsent\\\_ts | Acoustic First Sent | number |
| [hourofday()](/reference/query) | sv\\\_hourlyopen | Acoustic Hourly Events | map\\\[string\]intsum |
| [hourofweek()](/reference/query) | sv\\\_hourofweek | Acoustic Hour of Week Events | map\\\[string\]intsum |
| max([epochms()](/reference/query)) | sv\\\_lastclick\\\_ts | Acoustic Last Click | date |
| max([epochms()](/reference/query)) | sv\\\_lastopen\\\_ts | Acoustic Last Open | date |
| max([epochms()](/reference/query)) | sv\\\_lastsent\\\_ts | Acoustic Last Sent | date |
| list\\\_id | sv\\\_list\\\_ids | Acoustic List the send originated from | \\\[\]string |
| Mailing Id | sv\\\_mailing\\\_ids | Acoustic Mailing the send originated from | \\\[\]string |
| Mailing Name | sv\\\_mailing\\\_names | Acoustic Mailing Names | \\\[\]string |
| Mailing Name | sv\\\_mailing\\\_names\\\_click\\\_count | Acoustic Mailing Names Click Count | map\\\[string\]intsum |
| Mailing Name | sv\\\_mailing\\\_names\\\_clicked | Acoustic Mailing Names Clicked | \\\[\]string |
| Mailing Name | sv\\\_mailing\\\_names\\\_open\\\_count | Acoustic Mailing Names Open Count | map\\\[string\]intsum |
| Mailing Name | sv\\\_mailing\\\_names\\\_opened | Acoustic Mailing Names Opened | \\\[\]string |
| Mailing Name | sv\\\_mailing\\\_names\\\_sent | Acoustic Mailing Names Sent | \\\[\]string |
| Mailing Name | sv\\\_mailing\\\_names\\\_sent\\\_count | Acoustic Mailing Name Sent Count | map\\\[string\]intsum |
| [yymm()](/reference/query) | sv\\\_monthly | Acoustic Opens By Month | map\\\[string\]intsum |
| event | sv\\\_openct | Acoustic Open count | int |
| Program Id | sv\\\_program\\\_ids | Acoustic Program Ids | \\\[\]string |
| min([epochms()](/reference/query)) | sv\\\_subscribe\\\_ts | Acoustic Subscribe Time | date |
| min([epochms()](/reference/query)) | sv\\\_unsubscribe\\\_ts | Acoustic Unsubscribe Time | date |

### Configuration

Follow these steps to set up an Import Audiences and Activity Data job for Acoustic.

1.  Select **Acoustic** from the list of providers.
2.  Select the **Import Audiences and Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Type** dropdown, select the Acoustic source type: database, list, or query.
7.  From the **Source** dropdown, select the Acoustic source to import user data from. ![acoustic-import-pt1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ameda866e1b4544e13/b584da4b1a3a648bbf67a5c5/acoustic-import-pt1.png)
8.  Click on the **Show Advanced Options** tab to expand the advanced configuration.
9.  Check the **Keep Updated** checkbox to update the list every 8 hours.
10.  In the **Activity Start** field, enter the date to import activity from. The default is to retrieve one year of activity.
11.  Click **Start Import**.\\

![acoustic-import-pt2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdf46885911d5fd3d/0498ceb41a69f42106c3bca2/acoustic-import-pt2.png)

## Export Audiences

Send Lytics user profiles and audience membership to your Acoustic Database to refine your targeting and deliver personalized messaging across channels. All existing users and new users of the selected Lytics audiences are exported.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: API Integration , Audience Trigger Integration .
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Lytics users are exported to [Acoustic Database](https://developer.goacoustic.com/acoustic-campaign/reference/database-management).

This integration utilizes the Acoustic [Import List API](https://developer.goacoustic.com/acoustic-campaign/reference/importlist) to export user data from Lytics to the Acoustic Database. Once the export is started, the job:

1.  Creates the column mapping file according to the fields selected during [configuration](#configuration-1) and uploads to the Acoustic Campaign SFTP server.
2.  Writes the users that are part of selected Lytics audiences to the CSV file and initiates the CSV Import job in Acoustic.
3.  The updates will be sent to Acoustic every 8 minute or a batch of 10000 users, whichever occurs first.

### Fields

You can export any Lytics user fields to Acoustic Database columns that are present in the selected Acoustic Database. Lytics allows you to map user fields with the corresponding Acoustic Database columns as part of the job configuration described below.

**Note:** To export using the Acoustic Recipient ID as the sync field use the [Acoustic Export Audience with Recipient ID export](/documentation/product/integrations/acoustic/export-audiences-with-recipient-id) .

### Configuration

Follow these steps to set up an Export Audiences job for Acoustic.

1.  Select **Acoustic** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or create a new one [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Acoustic Database** dropdown, select the Acoustic database to populate with Lytics users.
7.  Using the **Audience** list, select the Lytics audiences to export. As users enter or exit the selected audience(s) their record will be sent to Acoustic.
8.  From the **Sync Fields** mapping, choose the sync fields that are used to match and identify users like unique ID or email. At least one sync field must be specified.
9.  From the **Additional Map Fields**, map additional fields that you would like to send from Lytics to Acoustic by selecting the Lytics field on the left, and its Acoustic destination on the right.
10.  From **Fields to Trigger**, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be updated in Acoustic.
11.  Check the **Create New Contacts** checkbox to create new contacts in Acoustic if they do not already exist.
12.  Check the **Update Contacts** checkbox to update fields of existing contacts in Acoustic.
13.  In the **Single Audience Field** text field, select a field or enter a name to create a field to write the additional Lytics audiences to. If the field is left empty, a Yes/No field is created for each selected Lytics audience.
14.  (Optional) In the **Single Audience File Empty String** text field, specify this to a value like "null" to represent an empty audience. Otherwise, an empty string is sent by default.
15.  Check the **Keep Updated** checkbox to continuously export users as they enter the audience.
16.  From the **Time of Day** dropdown, select a time of day to complete export each day. Export will sync every hour if left empty.
17.  From the **Timezone** dropdown, select the timezone for time of day specified above.
18.  Click **Start Export**.

## Export Audiences with Recipient ID

Send Lytics user profiles and audience membership to your Acoustic Database to refine your targeting and deliver personalized messaging across channels. All existing users and new users of the selected Lytics audiences are exported.

**Note:** This export is specifically used for exporting using the Acoustic Recipient ID as the sync field. It will only update users already in Acoustic with a Recipient ID. In order to add users to Acoustic or if you would like to use other sync fields use the standard [Acoustic Export Audience export](#export-users).

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: API Integration , Audience Trigger Integration .
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Lytics users are exported to [Acoustic Database](https://developer.goacoustic.com/acoustic-campaign/reference/database-management).

This integration utilizes the Acoustic [Import List API](https://developer.goacoustic.com/acoustic-campaign/reference/importlist) to export user data from Lytics to the Acoustic Database. Once the export is started, the job:

1.  Creates the column mapping file according to the fields selected during [configuration](#configuration-2) and uploads to the Acoustic Campaign SFTP server.
2.  Writes the users that are part of selected Lytics audiences to the CSV file and initiates the CSV Import job in Acoustic.
3.  The updates will be sent to Acoustic every 5 minutes or a batch of 10000 users, whichever occurs first.

### Fields

You can export any Lytics user fields to Acoustic Database columns that are present in the selected Acoustic Database. Lytics allows you to map user fields with the corresponding Acoustic Database columns as part of the job configuration described below.

### Configuration

Follow these steps to set up an Export Audiences job for Acoustic.

1.  Select **Acoustic** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Acoustic Database** dropdown, select the Acoustic database to populate with Lytics users.
7.  Using the **Audience** list, select the Lytics audiences to export. As users enter or exit the selected audience(s) their record will be sent to Acoustic.
8.  From the **Recipient ID** field, choose the field that contains the Acoustic Recipient ID in Lytics.
9.  From the **Additional Map Fields**, map additional fields that you would like to send from Lytics to Acoustic by selecting the Lytics field on the left, and its Acoustic destination on the right.
10.  From **Fields to Trigger**, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be updated in Acoustic.
11.  In the **Single Audience Field** text field, select a field or enter a name to create a field to write the additional Lytics audiences to. If the field is left empty, a Yes/No field is created for each selected Lytics audience.
12.  (Optional) In the **Single Audience File Empty String** text field, specify this to a value like "null" to represent an empty audience. Otherwise, an empty string is sent by default.
13.  Check the **Keep Updated** checkbox to continuously export users as they enter the audience.
14.  From the **Time of Day** dropdown, select a time of day to complete export each day. Export will sync every hour if left empty.
15.  From the **Timezone** dropdown, select the timezone for time of day specified above.
16.  Click **Start Export**.

## Export Audiences to Relational Tables

Send Lytics user profile data and audience membership to your Acoustic Relational tables. All existing and new users of the selected audience are exported in real-time.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: API Integration , Audience Trigger Integration .
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Lytics users are exported to [Acoustic Relational Table](https://developer.goacoustic.com/acoustic-campaign/reference/relational-table-management).

This integration utilizes the Acoustic [Relational Table Management api](https://developer.goacoustic.com/acoustic-campaign/reference/relational-table-management) to export user data from Lytics to the Acoustic Relational Table. Once the export is started, the job:

1.  Creates or writes to the following tables depending on the configuration of the job (see the [example](#Example) below for a visual example),
    1.  User table - the user identifier plus all scalar fields will be written to this table.
    2.  Audience table - the user identifier plus a boolean (Yes/No) column for each Lytics audience exported. Users that belong to the audience will have true as value in the respective audience column, and similarly, will have false if the user does not belong to the audience.
    3.  Non-scalar tables - for each non-scalar field exported a separate table will be created.
        1.  For sets, the table will have a column for the user identifier plus a column called lytics\_value with a row written for each value in the set.
        2.  For maps, the table will have a column for the user identifier plus two columns, lytics\_key and lytics\_value with a row written for each key/value pair in the map.
2.  As users enter or exit the audience, rows will added or updated in the tables above
3.  The updates will be sent to Acoustic every 5 minutes or a batch of 1000 users, whichever occurs first.

### Fields

You can export any Lytics user fields to Acoustic Relational Table. Lytics allows you to map user fields with the corresponding table columns as part of job configuration. The job also has option to create column in Acoustic table for Lytics user field.

### Configuration

Follow these steps to set up an Export Audiences job for Acoustic.

1.  Select **Acoustic** from the list of providers.
2.  Select the **Export Audience to Acoustic Relational Table** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Using the **Audiences** list, select the Lytics audiences to export. As users enter or exit the selected audience(s) their record will be sent to Acoustic.
7.  From the **Acoustic User Table** dropdown, select the Acoustic relational table to populate with user profile data. Select Create New Table to create new user table with name lytics\_user\_table\_{timestamp}. {timestamp} is replaced with current timestamp in format YYYYMMDDHHmmss.
8.  If Create New Table is selected, from the **User Table Key Field** dropdown, select the Lytics user field to be used as primary key for new user table. Should be left blank if writing to an existing table.
9.  If writing to an existing table, from the **Acoustic User Table Mapping**, map Lytics user fields that you would like to send from Lytics to corresponding Acoustic field. **NOTE:** All the key column for the selected Acoustic user table must be mapped.
10.  For either exporting to a new table or writing an existing table, from the **Extra Fields** list, select the additional Lytics user fields to export. These are extra scalar fields to be sent to Acoustic user table. Each field will be added as a separate column in the table.
11.  From the **Acoustic Audience Membership Table** dropdown, either select the Acoustic relational table to populate with audience information or select Create New Table. If the creation of a new audience table is selected, a table will be created with the name lytics\_audiences\_table\_{timestamp}. {timestamp} is replaced with current timestamp in format YYYYMMDDHHmmss.
12.  If Create New Table is selected for the Acoustic audience membership table, in the **Audience Membership Table Key Field** dropdown, select the Lytics user field to be used as primary key for new audience membership table. Should be left blank if writing to an existing table.
13.  If writing to an existing audience table, from the **Acoustic Audience Membership Table Key Mapping**, map the keys from Lytics to the key columns in Acoustic. The primary key in Acoustic must be mapped.
14.  Using the **Non-Scalar User Fields** list, select any Lytics non-scalar user field to export. An Acoustic relational table with name lytics\_{field-name}\_table\_{timestamp} will be created for each selected non-scalar field.
15.  If exporting non-scalar fields, from the **Non-Scalar Field Table Key Field** dropdown, select Lytics user field to be used as primary key for all new non-scalar field table.
16.  Select **Existing Users** to send users currently in the Lytics audience to Acoustic.
17.  Click **Complete** to create the job.



### Example

Below is an example of a user exported and how they may look in Acoustic.

```
Sample User
{
  "email": "james@lytics.com",
  "first_name": "James",
  "last_name": "McDermott",
  "channels": [ "web", "email" ],
  "hourly": {
    "17": 1,
    "21": 1,
    "23": 2
  },
  "segments": {
    "all",
    "highly_engaged"
  }
}
```

**User Table**: lytics\\\_user\\\_table\\\_20240408220715

| email | first\\\_name | last\\\_name |
| --- | --- | --- |
|  | James | McDermott |

**Audience Table**: lytics\\\_audiences\\\_table\\\_20240408220715

| email | all | highly\\\_engaged | low\\\_engagement |
| --- | --- | --- | --- |
|  | true | true | false |

**Non-scalar table for channels**: lytics\\\_channels\\\_table\\\_20240408220715

| email | lytics\\\_value |
| --- | --- |
|  | web |
|  | email |

**Non-scalar table for hourly**: lytics\\\_hourly\\\_table\\\_20240408220715

| email | lytics\\\_key | lytics\\\_value |
| --- | --- | --- |
|  | 17 | 1 |
|  | 21 | 1 |
|  | 23 | 2 |
