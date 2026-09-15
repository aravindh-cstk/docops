---
title: "Snowflake"
description: "Snowflake is a cloud-based data platform that allows for easy and reliable access to your data. Integrating Lytics with Snowflake allows you to seamlessly…"
url: /lytics/snowflake
uid: blt579102c4c13b3e1b
---

# Snowflake

## Snowflake

## Overview

[Snowflake](https://www.snowflake.com/) is a cloud-based data platform that allows for easy and reliable access to your data. Integrating Lytics with Snowflake allows you to seamlessly import your Snowflake data into Lytics to leverage Lytics' segmenting and insights capabilities. Lytics audiences can also be exported in bulk to Snowflake for auditing, querying, and reporting.

## Authorization

**Snowflake authorization update**

Snowflake will block single-factor password auth in Nov 2025 . In order to comply, Lytics now takes key-pair login credentials instead of password.

In order for continued use of the Snowflake workflows, new authorizations will need to be created, and works updated with the new authorization before Nov 2025.

If you haven't already done so, you will need to set up a Snowflake account before you begin the process described below. For imports, you will need to provide the credentials and role for a user who has access to the data you wish to import. For exports, you will need to provide the credentials and role for a user who has access to the database and schema you wish to export to.

You will need to create a user in Snowflake with [Type=SERVICE](https://docs.snowflake.com/en/sql-reference/sql/create-user) for the Lytics connection and create a new private/public key pair as described here: .

**Note:**

Lytics only supports unencrypted private keys.

For this reason, once the private key is created, it should only be used in setting up the Lytics authorization, and should not be saved anywhere else.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Snowflake from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Snowflake supports the following authorization methods:
    -   [Snowflake Direct Authorization](#snowflake-direct-authorization)
    -   [Snowflake Direct Authorization for Bulk Export](#snowflake-direct-authorization-for-bulk-export)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Snowflake Direct Authorization

1.  Enter the Snowflake **Account** that contains the data you want to import. See [Snowflake's Account Identifier documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#locator-formats-by-cloud-platform-and-region) for details on account name format.
2.  Enter the Snowflake **Warehouse** you will run the extraction queries against. For more information, see [Snowflake's Warehouse documentation](https://docs.snowflake.com/en/user-guide/warehouses-overview.html).
3.  Enter the Snowflake **Database** that contains the data you want to import.
4.  Enter the Snowflake **Username** of a Snowflake user who has access to the data you want to import.
5.  Enter your Snowflake **Private Key** for the Snowflake user.
6.  Enter the Snowflake **Role** you will run extraction queries with. Make sure this role has access to the data you want to import.\\

For import, the role will need

-   usage on the database
-   usage on the schema
-   operate and usage on the warehouse

For more information, see [Snowflake's Roles documentation](https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles).

1.  Enter your user's Snowflake **Password**.

### Snowflake Direct Authorization for Bulk Export

1.  Enter your Snowflake **Account** account locator, ex. xy12345.us-east-aws. Be sure to format the locator according to your cloud platform and region, as described here:
2.  Enter the Snowflake **Warehouse** you will run the load queries against. For more information, see [Snowflake's Warehouse documentation](https://docs.snowflake.com/en/user-guide/warehouses-overview.html).
3.  Enter the Snowflake **Database** you wish to export to.
4.  Enter the **Username** of a Snowflake user who has access to the schema you wish to export to.
5.  Enter the Snowflake **Role** you will run load queries with. Make sure this role has write permissions on the database and schema you wish to export to.\\

For export, the role will need

-   usage on the database
-   usage and create table on the schema
-   operate and usage on the warehouse

For more information, see [Snowflake's Roles documentation](https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles).

1.  Enter your Snowflake **Private Key** for the Snowflake user.
2.  In the **GCS Stage Service Account** text box, enter your GCS Stage Service Account. To set up a GCS Stage Service Account please see [Required Snowflake Setup](#required-snowflake-setup) below, this is a one time set up process.
3.  Optionally, enter the **Storage Integration Name** to use when connecting. If this is not set GCS\_INT\_LYTICS will be used.

## Import Data

Import data from a Snowflake table or view into Lytics, resulting in new user profiles or updates to fields on existing profiles.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration
-   **Resulting Data**: User Profiles and User Fields and Raw Event Data

This integration ingests data from your Snowflake account by directly querying the table or view selected during configuration. Once started, the job will:

1.  Run a query to select and order the rows that have yet to be imported. If the import is continuous, the job will save the timestamp of the last row seen, only the most recent data will be imported during future importa.
2.  Once the query completes, the result set will be imported in batches, starting from the oldest row.
3.  Once the last row is imported, if the job is configured to run continuously, it will sleep until the next run. The time between runs can be selected during configuration.

### Fields

Fields imported through Snowflake will require custom data mapping. For assistance mapping your custom data to Lytics user fields, please contact [Lytics Support](https://support.lytics.com/hc/en-us).

### Configuration

Follow these steps to set up and configure an import of Snowflake data in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Snowflake** from the list of providers.
2.  Select the **Import Audiences and Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Using the **Database** dropdown menu, select the database you would like to import data from.
7.  Using the **Source Type** dropdown menu, select whether to import from a Snowflake table or view.
8.  Using the **Source** dropdown menu, select the table or view you want to import.
9.  In the **Modified Timestamp Field** text input, enter the name of the field containing the event timestamp. On continuous imports, the most recent time in this field will be saved. On the next import, only rows with a timestamp later than that value will be imported.
10.  Enter name of the Lytics **Stream** where the data will be imported.
11.  (optional) Select the **Keep Updated** checkbox to import table or view continuously.
12.  (optional) From the **Frequency** input, select the frequency at which to run the import.
13.  (Optional) Toggle **Show Advanced Options**.
14.  (optional) From the **Event Timestamp Field** input, select enter a timestamp field to use as the event timestamp in Lytics. If none is entered, Modified Timestamp Field will be used.
15.  (optional) In the **Events Since** text box, enter enter the earliest date from which to import events. Only events that occurred after this date will be imported. RFC3339 formatted (i.e. YYYY-MM-DDThh:mm:ss+00:00).
16.  Click **Complete** to start the import.

## Export Event Data

Export event data from any Lytics data stream to Snowflake. **NOTE**: Unlike user fields, events are not represented within the Lytics dashboard. Events are the raw data received from integrations as seen in your [Data Streams](/docs/lytics/data-streams-1).

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: Raw Event Data is stored in the resulting Snowflake table.

Once the export is started the job will:

1.  Scan through events on the selected data stream(s).
2.  Generate CSV row(s) for each scanned event and write them to the Lytics-managed [GCS storage integration](https://docs.snowflake.com/en/user-guide/data-load-gcs.html) for your account (see setup instructions in [Required Snowflake Setup](#required-snowflake-setup)).
3.  Load the data from GCS to your Snowflake account via [COPY INTO](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table.html).

There are a few things to know when running an event export:

-   The event export scans the complete data stream from the first collected event to the current event, unless otherwise specified by the export configuration.
-   The export will run according to the schedule you configure (for example, hourly, daily, weekly, or monthly).

### Fields

The fields included will depend on the raw event data in Lytics. All fields in the selected stream will be included in the exported table. To see a list of fields in a stream, select the stream name from **Data Pipeline** > **Streams** in the Lytics platform.

### Configuration

Follow these steps to set up and configure an export of events from Lytics to Snowflake. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Snowflake** from the list of providers.
2.  Select the **Export Event Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Data Streams to Export** input, select data streams to export. A stream is a single source/type of data. You may choose more than one. If none are selected, all streams will be exported.
7.  (Optional) From the **Data Streams Fields to Export** input, select data stream fields to export. If none are selected, all fields for the selected stream(s) will be exported.
8.  From the **Database** dropdown menu, select the Snowflake database you would like to export event data to.
9.  From the **Schema** input, select the name of the Snowflake schema to export to.
10.  (Optional) In the **Maximum** field, enter the number of events to be exported. If left blank, all events will be exported.
11.  (Optional) In the **Start Date** field, enter the date of the oldest event you want to export. Events from this date onwards will be exported. Use yyyy-mm-dd format (e.g. 2015-08-13).
12.  (Optional) In the **End Date** field, enter the most recent date you want to export. Events before, but NOT including this date will be exported. Use yyyy-mm-dd format (e.g. 2015-08-13).
13.  (Optional) Select the **Keep Updated** checkbox to continuously run this export.
14.  (Optional) From the **Frequency** input, select how often to run the export: **Hourly**, **Daily**, **Weekly**, or **Monthly**. Applies when **Keep Updated** is enabled. If not set, the export will run approximately every 15 minutes.
15.  (Optional) From the **Day of Week** input, select the day of the week to run the export. Applies when **Frequency** is set to **Weekly**.
16.  (Optional) From the **Time of Day** input, select the time of day to start the export.
17.  (Optional) From the **Timezone** input, select the timezone for the time of day.
18.  (Optional) Select the **Start Export From Now Onwards** checkbox to only export events collected from now onwards. This will override any start or end date configuration.
19.  (Optional) Select the **Single Table Destination** checkbox to export all streams to a single Snowflake table.
20.  Click **Complete** to start the export.

## Bulk Audience Export

Export user profiles including user fields and audience memberships from Lytics to Snowflake.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration
-   **Frequency**: Batch Integration on a configurable schedule (as often as hourly; daily by default). Each batch contains the entire audience, and replaces the previous table.
-   **Resulting data**: User Fields will be exported to Snowflake as rows in a Snowflake table.

The resulting Snowflake schema is determined automatically by the workflow and will consist of the following Snowflake types according to the field's type in Lytics:

-   [BOOLEAN](https://docs.snowflake.com/en/sql-reference/data-types-logical.html#boolean)
-   [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar)
-   [NUMBER(38,0)](https://docs.snowflake.com/en/sql-reference/data-types-numeric.html#number)
-   [FLOAT](https://docs.snowflake.com/en/sql-reference/data-types-numeric.html#float-float4-float8)
-   [TIMESTAMP\\\_TZ(9)](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#timestamp-ltz-timestamp-ntz-timestamp-tz)
-   [VARIANT](https://docs.snowflake.com/en/sql-reference/data-types-semistructured.html#variant) (used for non-scalar fields)

When a job is started, the workflow will:

1.  Create a temporary table in Snowflake with the appropriate schema of the form USERS\_{audience\_slug}\_{unix\_timestamp}.
2.  Scan the audience for export, and load in CSV format to the Lytics-managed [GCS storage integration](https://docs.snowflake.com/en/user-guide/data-load-gcs.html) for your account (see setup instructions [below](#required-snowflake-setup)).
3.  Load the data from GCS to your Snowflake account via [COPY INTO](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table.html).
4.  Once the load is complete, the temporary table will be renamed to a permanent table of the form USERS\_{audience\_slug}. **NOTE**: if a table of this name already exists in the target Snowflake schema with an identical schema to the temporary table, it will be dropped and replaced. If the schemas differ, the permanent table name will include an incremental suffix i.e. USERS\_{audience\_slug}1.
5.  If the export is configured to run continuously, the workflow will sleep until the next scheduled run (based on the configured frequency) before repeating steps 1 through 4.

### Fields

If fields are selected during job configuration, only those fields will be included in the resulting Snowflake table. If no fields are selected, all fields on the profile will be exported.

### Required Snowflake Setup

Exporting to Snowflake requires additional configuration in your Snowflake account. You will need to create a storage integration in your Snowflake account that references a Lytics-owned GCS bucket. You will then need to retrieve the GCS service account associated with your storage integration in order to authorize in Lytics. More information about creating GCS storage integrations can be found [here](https://docs.snowflake.com/en/user-guide/data-load-gcs-config.html#step-1-create-a-cloud-storage-integration-in-snowflake). Note that step 3 in the Snowflake docs linked is not necessary, as the GCS bucket is owned and managed by Lytics.

In your Snowflake account, run the following queries to set up a storage integration for Lytics. **Note**: you will need ACCOUNTADMIN permissions to run the following queries.

First, create your storage integration:

```
create storage integration GCS_INT_LYTICS
  type = external_stage
  storage_provider = gcs
  enabled = true
  storage_allowed_locations = ('gcs://aid-{your-aid}-snowflake-exports-lyticsio/')
```

Note that you will need to replace {your-aid} with the four digit AID for your Lytics account in the query above. If you don't know your AID, contact your account manager for assistance. You can also find the AID in the URL bar when signed into the account you are setting up. For example, in http://app.lytics.com/dashboard?aid=xxxx "xxxx" would be the AID for the account.

Second, retrieve your storage integration service account, you will need this to authorize the workflow:

```
desc storage integration GCS_INT_LYTICS
```

Finally, you will need to grant the role you authorized with permissions to use the newly created storage integration:

```
grant usage on integration GCS_INT_LYTICS to role {your-role}
```

### Configuration

Follow these steps to set up and configure an export job for Snowflake in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Snowflake** from the list of providers.
2.  Select the **Bulk Export** job type from the list.
3.  Select the authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Using the **Database** dropdown menu, select the database you would like to import data from.
8.  From the **Schema** input, select the name of the schema to export to.
9.  (Optional) From the **Export Fields** input, choose a list of fields to export. If none are selected, all fields on the profile will be included.
10.  (Optional) Select the **Keep Updated** checkbox to export the audience continuously.
11.  (Optional) From the **Export Frequency** input, select how often to run the export: **Hourly**, **Daily**, **Weekly**, or **Monthly**. Applies when **Keep Updated** is enabled. Defaults to **Daily**.
12.  (Optional) From the **Time of Day** input, select the time of day to start continuous exports.
13.  (Optional) From the **Timezone** input, select a timezone for time of day.
14.  Click **Complete** to start the export.



## Export Audience Changes

Export audience membership change events from Lytics to Snowflake, tracking when users entered or exited the selected audience segments.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: Audience Trigger Integration File Based Transfer Integration
-   **Frequency**: Near Real-time Integration with an optional one-time Backfill of the audience after setup.
-   **Resulting data**: Audience membership change events exported to Snowflake as rows in a table

The job monitors selected Lytics audiences for membership changes. Whenever the users enter/exit the audience, it will send the information to the Snowflake table.

When the job is started, it will:

1.  Create a Snowflake table with name LYTICS\_SEG\_CHANGES with four columns (IDField, segment\_slug, timestamp, exit).
2.  Run a one-time backfill (if configured to do so).
3.  Load the enter/exit data into the file in JSON format to the Lytics-managed [GCS storage integration](https://docs.snowflake.com/en/user-guide/data-load-gcs.html) for your account (see setup instructions [above, required step](#required-snowflake-setup))
4.  Once the file is ready, it loads the data in the temporary table first using the [COPY INTO](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table.html) command and then uses [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge.html) command to upsert the records to the actual table. The file is sent in a batch of 100,000 events or every 5 minutes, whichever occurs first.
5.  Receive real-time updates when a user enters or exits the selected audience(s) and repeats the step 3 and 4.

### Fields

The exported events will include the following fields in your Snowflake table:

| Field | Snowflake Type | Description |
| --- | --- | --- |
| IDFIELD | [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar) | The selected ID field value for the user |
| SEGMENT\\\_SLUG | [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar) | Lytics audience slug |
| TIMESTAMP | [TIMESTAMP\\\_TZ(9)](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#timestamp-ltz-timestamp-ntz-timestamp-tz) | When the membership change occurred |
| EXIT | [BOOLEAN](https://docs.snowflake.com/en/sql-reference/data-types-logical#boolean) | Whether this event is exit or enter. |

### Configuration

Follow these steps to set up and configure an export of audience change events to Snowflake in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

-   Select **Snowflake** from the list of providers.
-   Select the **Export Audience Changes** job type from the list.
-   Select the Authorization you would like to use or [create a new one](#authorization).
-   Enter a **Label** to identify this job you are creating in Lytics.
-   (Optional) Enter a **Description** for further context on your job.

![bd27ed55375066250a3da8ce331781f212e3428524c4bde21e63611d4fd25156-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdd12577fb4a2a35e/3b0409b5c7bdf23fa38c5589/bd27ed55375066250a3da8ce331781f212e3428524c4bde21e63611d4fd25156-image.png)

-   Using the **Snowflake Database** dropdown menu, select the Snowflake database you would like to export event data to.
-   From the **Snowlfake Schema** input, select the name of the Snowflake schema to export events to.
-   From the **Audiences** input, select up to 10 audiences you would like to track for membership changes.
-   From the **ID Field** dropdown menu, select the user field that will be used as the unique identifier in Snowflake.
-   (Optional) Select the **Existing Users** checkbox to export existing users as an enter event.
-   Click **Complete** to start the export.

## Export Metrics

Export Lytics platform metrics to Snowflake. This workflow allows you to export raw time-series metric data — such as segment sizes, stream volumes, job activity, and more — into a Snowflake table for analysis and reporting.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: Time-series metric data stored in a Snowflake table. The workflow is append-only — each run loads only new rows since the last successful export.

This integration requires the same [Snowflake Direct Authorization for Bulk Export](#snowflake-direct-authorization-for-bulk-export) used by the Bulk Audience Export. The destination Snowflake account must have a GCS storage integration configured — see [Required Snowflake Setup](#required-snowflake-setup).

Once the export is started the job will:

1.  Query raw time-series metric data from the Lytics platform for the configured dimension, type, and time range.
2.  Write the metric data as gzipped NDJSON to the Lytics-managed [GCS storage integration](https://docs.snowflake.com/en/user-guide/data-load-gcs.html) for your account.
3.  If the target table does not yet exist, create it with the schema below.
4.  Load the data from GCS into your Snowflake table via [COPY INTO](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table.html).
5.  On subsequent runs (if **Keep Updated** is enabled), only new rows since the last successful export are loaded — existing rows are never modified or deleted.

### Fields

By default, Lytics exports the following fields to Snowflake:

| Field | Description | Snowflake Type |
| --- | --- | --- |
| dimension | The metric dimension (e.g. segment, stream, works) | [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar) |
| dimension\\\_id | The specific ID within the dimension (e.g. a segment ID) | [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar) |
| dimension\\\_type | The metric type (e.g. size, added, removed) | [VARCHAR(16777216)](https://docs.snowflake.com/en/sql-reference/data-types-text.html#varchar) |
| ts | The timestamp of the metric data point | [TIMESTAMP\\\_TZ(9)](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#timestamp-ltz-timestamp-ntz-timestamp-tz) |
| value | The metric value | [FLOAT](https://docs.snowflake.com/en/sql-reference/data-types-numeric.html#float-float4-float8) |
| ly\\\_exported\\\_ts | The timestamp when the data was exported | [TIMESTAMP\\\_TZ(9)](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#timestamp-ltz-timestamp-ntz-timestamp-tz) |

### Available Dimensions and Metric Types

The available metric types depend on the dimension you select. See the [Available Dimensions and Metric Types](/docs/lytics/google-bigquery-overview#available-dimensions-and-metric-types) table in the Google BigQuery documentation for the full list — the same dimensions and types are supported across all warehouse destinations.

### Configuration

Follow these steps to set up and configure an export of metrics from Lytics to Snowflake. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Snowflake** from the list of providers.
2.  Select the **Snowflake: Export Metrics** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization). This workflow requires a [Snowflake Direct Authorization for Bulk Export](#snowflake-direct-authorization-for-bulk-export) (with GCS storage integration).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) From the **Database** dropdown menu, select the Snowflake database you want to export metric data to. If not selected, the default database from the authorization will be used.
7.  From the **Schema** input, select the name of the Snowflake schema to export metric data to.
8.  (Optional) In the **Snowflake Table** text box, enter the table name. If left blank, LYTICS\_{AID}\_METRICS will be used.
9.  From the **Metric Dimension** input, select the dimension of the metric you want to export (e.g. segment, stream, works). See the [Available Dimensions and Metric Types](#available-dimensions-and-metric-types) section above for the full list.
10.  (Optional) In the **Dimension ID** text box, enter the specific ID for the dimension (e.g. a segment ID or stream name). If left blank, metrics for all IDs within the selected dimension will be exported.
11.  From the **Metric Type** input, select the metric type to export. The available options will depend on the dimension selected in step 9.
12.  (Optional) From the **Lookback Range** input, select the time range of historical data to include in the initial export. Options are: **0d** (no lookback), **7d**, **14d**, **30d** (default), **60d**, and **90d**.
13.  (Optional) Select the **Keep Updated** checkbox to continuously run this export on a daily basis. When enabled, subsequent runs will incrementally append only new rows since the last successful export.
14.  (Optional) From the **Time of Day** input, select the time of day to start the export.
15.  (Optional) From the **Time Zone** input, select the time zone for the time of day.
16.  Click **Complete** to start the export.
