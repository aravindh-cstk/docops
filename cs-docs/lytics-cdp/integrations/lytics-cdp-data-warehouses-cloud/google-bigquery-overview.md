---
title: "Google BigQuery"
description: "Google BigQuery is a fully managed, analytics data warehouse that is part of the Google Cloud Platform."
url: /lytics/google-bigquery-overview
---

# Google BigQuery

## Google BigQuery

## Overview

[Google BigQuery](https://cloud.google.com/bigquery/) is a fully managed, analytics data warehouse that is part of the Google Cloud Platform.

Using the Lytics integration with Google BigQuery, you can import and export events, export user profiles, audience changes, and platform metrics to BigQuery. Granular event and metric data in BigQuery will allow for ease of auditing, querying, and reporting through other data visualization tools.

## Authorization

If you haven't already done so, you will need to set up a Google BigQuery account before you begin the process described below. You can follow the [Google quickstart guide](https://cloud.google.com/bigquery/docs/bigquery-web-ui) and may also want to read the [Google BigQuery documentation](https://cloud.google.com/bigquery/docs/).

**Warning:** If you are using an IP allowlist for your Google BigQuery account, contact your account administrator to add Lytics' IP addresses to your allowlist. Reach out to your Lytics Account Manager for the current list of IP addresses.

There are two different options for authorization with Google BigQuery:\\ **User Account** and **Service Account**. See [Google's authentication documentation](https://cloud.google.com/bigquery/docs/authentication/) for details on the differences between user and service accounts. See the end of this document for information on how to [give 3rd parties access to export data in BigQuery](#give-3rd-parties-access-to-export-data-in-bigquery).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the authorization method. Note that different methods may support different job types. Google BigQuery supports the following authorization methods:
    -   [User Account](#user-account)
    -   [Service Account](#service-account)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### User account

This option uses your Google user account to access your BigQuery data. Note that you must have projectEditor permissions on the project you are importing from in order for BigQuery exports and imports to run properly with User Account authorization.

1.  Select **Big Query OAuth**.
2.  From the user selection window, select the Google account you want to use from the list of accounts.
3.  Click **Allow**.

### Service account

This option uses a service account to access your Google BigQuery data.

1.  You will need a service account credential file to use this authorization type. If you do not have one, follow the instructions in [Google's documentation](https://cloud.google.com/docs/authentication/getting-started) to create one.
    -   For imports and exports, the service account must be able to list projects, create and write to tables, and create jobs. The combination of BigQuery Data Editor and BigQuery Job User permissions will satisfy the requirements. Learn more about the BigQuery permissions [here](https://cloud.google.com/bigquery/docs/access-control).
2.  In your Lytics account, select **Big Query Service Account JWT**. Note there are different options for **Import** and **Export**.
3.  In **Cert JSON** textbox, copy the contents of the service account's credential file.

#### Give 3rd Parties Access to Export Data in BigQuery

When exporting data from Lytics to BigQuery, you can specify email addresses that you would like to give access to. However, if you later decide that you would like to give access to another person, you can do this from within BigQuery. See Google's documentation regarding [access controls for datasets](https://cloud.google.com/bigquery/docs/datasets#dataset-acl).

## Import Activity Data

Many applications let you write to tables in Google BigQuery and you can easily import this custom data into Lytics. Once imported, you can leverage powerful insights on this custom data provided by Lytics data science to drive your marketing efforts.

### Integration Details

-   **Implementation Type**:Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Profiles, User Fields, Raw Event Data.

This integration utilizes the [Google BigQuery APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to import user data. Once the import is started the job will:

1.  [Start a query job](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationQuery) for data in Google BigQuery.
2.  [Export the result to Google Cloud Storage](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationextract).
3.  [Import file from Google Cloud Storage](https://cloud.google.com/storage/docs/json_api/v1/objects/get) into the selected Lytics data stream.

### Fields

Fields imported through Google BigQuery may require custom data mapping. Fields and Mappings can be configured under **Building Profiles** > **Schema**.

### Configuration

Follow these steps to set up and configure an import of Google BigQuery events into the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  In the **Stream** text input, enter the stream where imported data will go.
7.  From the **BigQuery Project** input, select the Google BigQuery Project you want to import data from.
8.  From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data from.
9.  From the **BigQuery Table** input, select the Google BigQuery table you would like to import. **NOTE**: "nested tables" are not supported by this import process.
10.  From the **Timestamp Field** input, select the name of the field that contains the event timestamp. On continuous imports, the most recent time in this field will be saved. On the next import, only rows with a timestamp greater than that value will be imported. The field must be of type Datetime or Timestamp in BigQuery.
11.  (Optional) From the **Event Timestamp Field** input, select a timestamp field to use as the event timestamp in Lytics. If none is selected, Timestamp Field will be used.
12.  Select the **Keep Updated** checkbox to continuously run this import. If this option is selected, the Timestamp Field must be provided.
13.  From the **Frequency** input, select how often do you want to run the import job. By default, the import job will run every 4 hours.
14.  (Optional) From the **Time of Day**input, select the time of day to start importing.
15.  (Optional) From the **Time Zone** input, select the time zone of the time of day above.
16.  (Optional) From the **Encode Bytes** input, select to either encode as a hex string or a base64 string.
17.  Click **Complete** to start import.

The time necessary to import a table depends on the table size. It can take from 30 minutes to several hours to complete the import.

**Warning:** It's important to be aware that big imports can make your entire Lytics account slower as data is processed and audience memberships are updated.

## Export Activity Data

Export event data from any Lytics data stream to Google BigQuery. **NOTE**: Unlike user fields, events are not represented within the Lytics dashboard. Events are the raw data received from integrations as seen in your [Data Streams](/docs/lytics/data-streams-1).

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Raw Event Data is stored in the resulting table.

This integration utilizes the [Google BigQuery APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send user data. Once the export is started the job will:

1.  Check if [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get), if not [create it](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert) in Google BigQuery.
2.  Check if a [table exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/get), if not [create one](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/insert).
3.  [Generate a CSV](https://cloud.google.com/storage/docs/json_api/v1/objects/insert) for each table to be created or updated in BigQuery by:
    1.  Scan through events on the data stream.
    2.  Generate CSV row(s) for each scanned event.
    3.  Write CSV row to Google Cloud Storage.
4.  [Upload the CSV(s) to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table).

There are a few things to know when running an event export:

-   The event export scans the complete data stream from the first collected event to the current event, unless otherwise specified by the export configuration.
-   The export will run continuously throughout the day.
-   Field names in BigQuery will not be an exact match of field names in Lytics. Names will be formatted to fit BigQuery's field naming [schema](https://cloud.google.com/bigquery/docs/schemas#column_names).
-   If two field names are transformed to BigQuery format and conflict, one will get an integer appended to the end of the field name. For example, if both first\_name and First Name exist in Lytics and are exported, they'll be written to first\_name and first\_name1 in BigQuery.
-   Low usage fields (fields populated on <0.1% of total volume for the exported stream) will not be included within the event export.

### Fields

The fields included will depend on the raw event in Lytics data. All fields in the selected stream will be included in the exported table. To see a list of fields in a stream, select the stream name from **Data Pipeline** > **Streams** in the Lytics platform.

### Configuration

Follow these steps to set up and configure an export of events from Lytics to Google BigQuery. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Export Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
7.  From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to.
8.  From the **Data Streams to Export** input, select data streams to export. A stream is a single source/type of data. You may choose more than one. If none are selected, all streams will be exported.
9.  In the **Maximum** numeric field, enter the number of events to be exported. If left blank, all events will be exported.
10.  In the **Start Date** text input, enter the date of the oldest event you want to export. Events from this date onwards will be exported. Use yyyy-mm-dd format (e.g. 2015-08-13).
11.  In the **End Date** text input, enter the most recent date you want to export. Events before, but NOT including this date will be exported. Use yyyy-mm-dd format (e.g. 2015-08-13).
12.  Click on the **Show Advanced Options** tab to expand the advanced configuration.
13.  Select the **Partitioned Table** checkbox to use partitioned tables that can help lower query costs by allowing you to target a specific date range of data instead of the whole data set. Tables will be partitioned by the event date.
14.  From the **Partition Duration** dropdown, select the duration of the table's partitions. This is ignored if Partitioned Table is not selected.
15.  Select the **Flatten Streams** checkbox to export all streams to one BigQuery table.
16.  Select the **Keep Updated** checkbox to continuously run this export.
17.  Select the **Start Export From Now Onwards** checkbox to only export events collected from now onwards. This will override any start or end date configuration made.
18.  Click **Start Export**.

## Export Audience Changes

Export audience changes from Lytics to Google BigQuery.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Audience segment change events.

This integration utilizes the [Google BigQuery APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send user data. Once the export is started the job will:

1.  Check if [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get), if not [create it](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert) in Google BigQuery.
2.  Check if a [table exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/get), if not [create one](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/insert).
3.  [Generate a CSV](https://cloud.google.com/storage/docs/json_api/v1/objects/insert) in BigQuery by:
    1.  Receive segment change events.
    2.  Write change event to Google Cloud Storage as a CSV row.
4.  Every 10 minutes [Upload the CSV to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table) and start writing events to a new CSV.

### Fields

By default, Lytics exports the following fields to Google BigQuery:

| Lytics User Field | Description | Google BigQuery Field | Type |
| --- | --- | --- | --- |
| email | Email Address | email | string |
| - | Audience Slug | segment\\\_slug | string |
| - | Event Time | timestamp | TIMESTAMP |
| - | was this an audience Exit | exit | boolean |

### Configuration

Follow these steps to set up and configure an export of audience change events from Lytics to Google BigQuery. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Export Audience Changes** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
7.  From the **Audiences** input, select the Lytics audience(s) you'd like to track. Leave empty to track all segment changes.
8.  From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to.
9.  From the **ID Field** input, select the ID field in Lytics that'll get mapped to an identifying field in BigQuery.
10.  Click **Start Export**.

## Export Audience Definitions

Use the **Export Audience Definitions** to export your Lytics audience definitions to Google BigQuery. You can use the exported audiences to do segmentation of users in other tools.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration, File Based Transfer Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Audience Definitions

The selected audience definitions are retrieved, if they use any **INCLUDE** statements the included audience is inlined into the exported audience's definition replacing the **INCLUDE** statement.

Steps/Pattern:

1.  Check if the dataset exists in BigQuery, create it if it doesn't exist
2.  Check if the table exists in BigQuery, if it does, check that schema match, if it does not, create a new table
3.  For each selected audience:
    1.  Retrieve the FilterQL for the audience
    2.  Inline any **INCLUDE** statements
    3.  Add row to CSV file
4.  Start [Load Job in BigQuery](https://cloud.google.com/bigquery/docs/batch-loading-data#gcs-uri)

### Fields

By default, Lytics exports the following fields to Google BigQuery:

| Lytics Audience Field | Description | Google BigQuery Field | Type |
| --- | --- | --- | --- |
| ID | Audience ID (configurable) | id | string |
| Name | Audience name (configurable) | name | string |
| Slug | Audience slug (configurable) | slug | string |
| FilterQL | Filter statement | filter | string |
| ly\\\_exported\\\_ts | Time of export | ly\\\_exported\\\_ts | date |
| ly\\\_created\\\_ts | Time audience was created | ly\\\_created\\\_ts | date |
| ly\\\_updated\\\_ts | Time audience was updated | ly\\\_updated\\\_ts | date |

### Configuration

Follow these steps to set up and configure an export job for Google BigQuery in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Export Audience Definitions** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
7.  (optional) From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to. If no dataset is selected, the lytics\\\_(AID) dataset will be used. If the selected Dataset does not exist it will be created.
8.  (optional) In the **BigQuery Table** text box, enter the Google BigQuery table you want to export data to. If an existing table is not selected then one will be created. If no table name is entered lytics\_(AID)\_audience\_definition\_export will be used.
9.  (optional) Select the **Include Audience ID** checkbox, to include the Audience's ID in the row.
10.  (optional) Select the **Include Audience Name** checkbox, to include the Audience's Name in the row.
11.  (optional) Select the **Include Audience slug** checkbox, to include the Audience's slug in the row.
12.  Click **Start Export**.

## Export Audiences

Export user profiles including user fields and audience memberships from Lytics to Google BigQuery.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Fields will be exported to Google BigQuery as either a flat table or multiple tables with join keys for non scalar fields (maps and sets).
    -   Field names in BigQuery will not be an exact match of field names in Lytics. Names will be formatted to fit BigQuery's field naming [schema](https://cloud.google.com/bigquery/docs/schemas#column_names).
    -   If two field names are transformed to BigQuery format and conflict, one will get an integer appended to the end of the field name, e.g. if both first\_name and First Name exist in Lytics and are exported, they'll be written to first\_name and first\_name1 in BigQuery.
    -   If non-scalar fields are exported, each field will be written to a separate table, with a unique identifier id field that can be used to join the main user table to the fields tables.
    -   This id is not an identifier that exists in Lytics, but rather it's a hash of all the user unique identifier fields. This is calculated for the express purpose of providing a way to join the non-scalar field tables to the main user table. This field's value may change between exports.

This integration utilizes the [Google BigQuery's APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send user data. Once the export is started the job will:

1.  Check if [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get), if not [create it](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert) in Google BigQuery.
2.  [Generate a CSV](https://cloud.google.com/storage/docs/json_api/v1/objects/insert) for each table to be created or updated in BigQuery by:
    1.  Scan the selected Audience.
    2.  Generate CSV row(s) for each scanned user.
    3.  Write CSV row to Google Cloud Storage.
3.  [Upload the CSV(s) to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table).

There are a few things to know when running a BigQuery user export:

-   The user export scans the complete Lytics audience and exports all entries into a BigQuery table.
-   The export will run at most once a day, but large audiences may take more than a day to complete.
-   For large audiences (bigger than a million users), users will first be written into a dated user table _user_ + audience slug + _\+ date_ as the table builds in BigQuery. As more batches of users are exported, they will be appended to the dated table. Once the complete audience has been sent to BigQuery, the table will be renamed with the date removed.
-   If continuous export is selected, the work will start running again on the next day at the time specified. A new temporary dated audience table will be created in BigQuery alongside the completed non-dated table.
-   If an audience is large enough to take over a day to export and continuous export is selected, the work will not run again until after the previous export completes.

### Fields

The fields exported to the Google BigQuery will depend on the **Export Non-Scalar Fields** and the **Export Scalar Fields** options in the workflow's configuration. Any user field in your Lytics account may be available for export.

### Configuration

Follow these steps to set up and configure an export of users from Lytics to Google BigQuery. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
7.  From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to.
8.  From the **Audience** input, select the audience you would like to export to BigQuery.
9.  From the **Maximum** numeric field, enter a limit to the number of users to be exported. If left blank, all users in the selected audiences will be exported.
10.  Select the **Audience Membership** checkbox to export the audiences each user is a member of. See **Export Non-Scalars as JSON** below to select how this field is exported to BigQuery.
11.  From the **Export Scalar Fields** input, select a list of scalar fields to export. NOTE: these will be created in the same table. If none are selected, all fields are exported.
12.  From the **Export Non-Scalar Fields** input, select a list of non-scalar fields to export. See **Export Non-Scalars as JSON** below to select how this field is exported to BigQuery.
13.  By default the **Export Non-Scalars as JSON** is selected and non-scalar fields, including the audience membership, are exported to a single column of type JSON. See the Google Bigquery documentation for more information: . Uncheck this field to export non-scalar fields to separate tables.
14.  Select the **Keep Updated** checkbox to continuously run this export.
15.  Select the **Keep Old** checkbox to keep daily exports in dated tables.
16.  From the **Time of Day** input, select the time of day to start export each day.
17.  From the **Timezone** input, select the timezone for the time of day.
18.  Click **Complete** to start the BigQuery job.

#### Exporting table data to BigQuery

Please see the Google BigQuery documentation on [Exporting Table Data](https://cloud.google.com/bigquery/docs/exporting-data) for options and instructions for exporting data to BigQuery.

## Export Metrics

Export Lytics platform metrics to Google BigQuery. This workflow allows you to export raw time-series metric data — such as segment sizes, stream volumes, job activity, and more — into a BigQuery table for analysis and reporting.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Time-series metric data stored in a BigQuery table.

This integration utilizes the [Google BigQuery APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send metric data. Once the export is started the job will:

1.  Check if [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get), if not [create it](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert) in Google BigQuery.
2.  Check if a [table exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/get), if not [create one](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/insert).
3.  Query raw time-series metric data from the Lytics platform for the configured dimension, type, and time range.
4.  Write the metric data as a CSV to Google Cloud Storage.
5.  [Upload the CSV to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table).

### Fields

By default, Lytics exports the following fields to Google BigQuery:

| Field | Description | BigQuery Type |
| --- | --- | --- |
| dimension | The metric dimension (e.g. segment, stream, works) | STRING |
| dimension\\\_id | The specific ID within the dimension (e.g. a segment ID) | STRING |
| dimension\\\_type | The metric type (e.g. size, added, removed) | STRING |
| ts | The timestamp of the metric data point | TIMESTAMP |
| value | The metric value | FLOAT |
| ly\\\_exported\\\_ts | The timestamp when the data was exported | TIMESTAMP |

### Available Dimensions and Metric Types

The available metric types depend on the dimension you select. Below is a summary of the dimensions and their available types:

| Dimension | Available Metric Types |
| --- | --- |
| segment | size |
| stream | size |
| flow | size |
| inflight | size |
| works | added, removed, omitted, api\\\_requests |
| auths | size |
| segment\\\_movement | size, added, removed |
| bandit | bandit\\\_a, bandit\\\_b, bandit\\\_mean, bandit\\\_lower, bandit\\\_upper |
| attribution | attributed\\\_success, attributed\\\_total, attributed\\\_conversionrate |
| content\\\_enrich | total, configuration, validation, allowed, http\\\_success, has\\\_content, enriched, domain\\\_blocklist, not\\\_in\\\_domain\\\_allowlist, path\\\_blocklist, not\\\_in\\\_path\\\_allowlist, created\\\_before, enriched\\\_before, invalid\\\_url, disallowed, http\\\_404, http\\\_401, other\\\_http\\\_failure, no\\\_content, vendor\\\_error |
| acct\\\_quotas | size |
| cc\\\_connections | rows\\\_queried, connection\\\_succeeded, connection\\\_failed, queries\\\_succeeded, queries\\\_failed, connection\\\_history |
| cc\\\_table\\\_sync | source\\\_scanned, target\\\_scanned, target\\\_created, target\\\_updated, target\\\_deleted, job\\\_completed, job\\\_failed, row\\\_failed, table\\\_size |
| cc\\\_segment\\\_sync | data\\\_model\\\_health\\\_history |

### Configuration

Follow these steps to set up and configure an export of metrics from Lytics to Google BigQuery. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Export Metrics** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
7.  (Optional) From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to. If no dataset is selected, lytics\_{AID} will be used.
8.  (Optional) In the **BigQuery Table** text box, enter the table name. If no table name is entered, lytics\_{AID}\_metrics will be used.
9.  From the **Metric Dimension** input, select the dimension of the metric you want to export (e.g. segment, stream, works). See the [Available Dimensions and Metric Types](#available-dimensions-and-metric-types) table above for the full list.
10.  (Optional) In the **Dimension ID** text box, enter the specific ID for the dimension (e.g. a segment ID or stream name). If left blank, metrics for all IDs within the selected dimension will be exported.
11.  From the **Metric Type** input, select the metric type to export. The available options will depend on the dimension selected in step 9.
12.  (Optional) From the **Lookback Range** input, select the time range of historical data to include in the initial export. Options are: **0d** (no lookback), **7d**, **14d**, **30d** (default), **60d**, and **90d**.
13.  (Optional) Select the **Keep Updated** checkbox to continuously run this export on a daily basis. When enabled, subsequent runs will incrementally export only new data since the last successful export.
14.  (Optional) From the **Time of Day** input, select the time of day to start the export.
15.  (Optional) From the **Timezone** input, select the timezone for the time of day.
16.  Click **Complete** to start the export.

## Google Cloud: Export All Users

Lytics users can export all profiles in their Lytics Account to BigQuery via the **Google Cloud: Export All Users** workflow. This workflow is optimized for scanning the Lytics user table without the need for considering audience membership, and offers superior performance to the audience export workflows as a result. This makes it a great option for Lytics users who wish to maintain a daily sync of all their Lytics profiles to a BigQuery data warehouse of their choice.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)
-   **Frequency**: [Batch](/docs/lytics/integrated-marketing-tools#batch)
-   **Resulting data**: User Fields will be exported to Google BigQuery a flat table by default. To export non-scalars to separate join tables, deselect **Export Non-Scalars as JSON** and see the **Export Audiences** [workflow](/docs/lytics/google-bigquery-overview#export-audiences) documentation for information on how the target export tables are formatted in this mode.
    -   Field names in BigQuery will not be an exact match of field names in Lytics. Names will be formatted to fit BigQuery's field naming [schema](https://cloud.google.com/bigquery/docs/schemas#column_names).
    -   If two field names are transformed to BigQuery format and conflict, one will get an integer appended to the end of the field name, e.g. if both first\_name and First Name exist in Lytics and are exported, they'll be written to first\_name and first\_name1 in BigQuery.
    -   If non-scalar fields are exported, they will be written to BigQuery columns of type **JSON** by default. See the [BigQuery documentation](https://cloud.google.com/bigquery/docs/json-data) for more information on working with JSON data

This integration utilizes the [Google BigQuery's APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send user data. Once the export is started the job will:

1.  Check if [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get), if not [create it](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert) in Google BigQuery.
2.  [Generate a CSV](https://cloud.google.com/storage/docs/json_api/v1/objects/insert) for each table to be created or updated in BigQuery by:
    1.  Scan the Lytics user table.
    2.  Generate a CSV row for each scanned profile.
    3.  Write the CSV row to Lytics-owned Google Cloud Storage.
3.  [Upload the CSV(s) to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table).

There are a few things to know when running a BigQuery user export:

-   The user export scans the complete Lytics user table and exports all entries into a BigQuery table.
-   The export will run at most once a day, but large accounts may take more than a day to complete.
-   For large accounts (with more than a million profiles), users will first be written into a dated user table _user_ + audience slug + _\+ date_ as the table builds in BigQuery. As more batches of users are exported, they will be appended to the dated table. Once the complete audience has been sent to BigQuery, the table will be renamed with the date removed.
-   If **Keep Updated** is selected, the work will start running again on the next day at the time specified. A new temporary dated audience table will be created in BigQuery alongside the completed non-dated table.
-   If an account is large enough to take over a day to export and continuous export is selected, the work will not run again until after the previous export completes.

### Fields

The fields exported to the Google BigQuery will depend on the **Export Non-Scalar Fields** and the **Export Scalar Fields** options in the workflow's configuration. Any user field in your Lytics account may be available for export.

### Configuration

Follow these steps to set up and configure an export job for Google Cloud in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Export All Users** from the job list.
3.  Select the authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.\\

google

1.  Complete the configuration steps for your job.
2.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export data to.
3.  (optional) From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export data to.
4.  (optional) From the **Export Non-Scalar Fields** input, select a list of non-scalar fields to export.
5.  (optional) Select the **Export Non-Scalars as JSON** checkbox, to by default, non-scalar fields JSON columns. Deselect this to export non-scalar fields to separate join tables.
6.  (optional) From the **Export Scalar Fields** input, select a list of scalar fields to export (note: these will be created in the same table. If none are selected, all fields are exported).
7.  (optional) Select the **Keep Updated** checkbox, to continuously run this export.
8.  (optional) Select the **Keep Old** checkbox, to select to keep daily exports in dated tables.
9.  (optional) From the **Time of Day** input, select time of day to start export each day.
10.  (optional) From the **Timezone** input, select timezone for time of day.
11.  Click **Complete** to start the job

## Google Cloud: Export System Events

Export Lytics system events to the BigQuery table and monitor jobs, authorizations, audiences, and queries in your Lytics instance.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Lytics system events will be stored as a record in a BigQuery table.

This integration utilizes the [Google BigQuery APIs](https://cloud.google.com/bigquery/docs/reference/rest/) to send system events. Once the export is started the job will:

1.  Check if given [dataset exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get) in Google BigQuery.
2.  Check if given [table exists](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/get), if not, then it will [create one](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables/insert). If the name is given, it will use that name to create the table, otherwise the new table name will be of this lytics\_system\_event\_export\_{AID} format.
3.  Stores the system events in a csv file.
4.  The csv file is uploaded to BigQuery via [Upload the CSV to BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table). The file is uploaded for every 100,000 events or when file size reaches 1GB. Once the file is uploaded, the export job will go to sleep for 15 minutes to let BigQuery process the file.
5.  The job will repeat the step from 1-4 until it sends all the events. Once it sends all the events, the job will sleep for 24 hours and will run again if the job is continuous.

### Fields

By default, Lytics exports the following fields to Google BigQuery:

| ID | Date | AID | User ID | Subject Type | Subject ID | Verb | Notes | Related |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID of the event | Date when the event occurred | Account AID | User associated with the event | What the event is about | ID associated with the subject | Action described by the event | Extra information about the event | Any related information associated with the event |

### Configuration

Follow these steps to set up and configure an export of Lytics system events to Google BigQuery. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **BigQuery: Export System Events** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **BigQuery Project** input, select the Google BigQuery Project you want to export system events to.
7.  From the **BigQuery Dataset** input, select the Google BigQuery Dataset you want to export system events to.
8.  (Optional) From the **BigQuery Table** input, select the Google BigQuery table you want to export system events to. If an existing table is not selected then one will be created. If no table name is entered lytics\_system\_event\_export\_{AID} will be used.
9.  (Optional) Using the **Start Date** textbox, enter the date to export system events after this date (ex: 2020-01-01). If no start date is given then system events for last 30 days will be exported.
10.  (Optional) Using the **End Date** textbox, enter the date to export system events up to this date (ex: 2020-01-01). If no end date is given then system events up to the current date will be exported.
11.  (Optional) Using the **Subject Type** textbox, enter the Subject Type of system events you would like to export (work, segment, account). Only events specific to this Subject Type will be exported.
12.  (Optional) Using the **Subject ID** textbox, enter the Subject ID for above system event subject type you would like to export (work\\\_id, segment\\\_id, account\\\_id). Only events specific to this Subject ID will be exported.
13.  Select the **Keep Updated** checkbox to continuously run this export. The export will run daily once it sends all the data.
14.  From the **Time of Day** input, select the time of day to start export each day.
15.  From the **Timezone** input, select the timezone for the time of day.
16.  Click **Start Export**.
