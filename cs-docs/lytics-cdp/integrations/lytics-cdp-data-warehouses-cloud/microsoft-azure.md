---
title: "Microsoft Azure"
description: "Microsoft Azure is a Cloud Computing Platform that provides a range of services such as Databases, Mobile, Networking, Security, Storage, Web, Windows…"
url: /lytics/microsoft-azure
---

# Microsoft Azure

## Microsoft Azure

## Overview

Microsoft [Azure](https://azure.microsoft.com/en-us/) is a Cloud Computing Platform that provides a range of services such as Databases, Mobile, Networking, Security, Storage, Web, Windows Virtual Desktop and more.

Connect Lytics to Microsoft Azure Storage, Event Hub, and Azure SQL to import and export data from Lytics. This allows you to leverage Lytics behavioral scores, content affinities, and insights to drive your marketing efforts through Azure.

## Authorization

If you haven’t already done so, you will need to setup a [Microsoft Azure account](https://azure.microsoft.com/en-us/overview/) before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the method for authorization. Note that different methods support different job types:
    -   [Azure Storage Connection String](#azure-storage-connection-string)
    -   [Azure Event Hub](#azure-event-hub)
    -   [Azure SQL Database](#azure-sql-database)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Azure Storage Connection String

Use the Microsoft Azure Storage Connection String to import or export files to and from Azure Blob storage. Please refer to [Azure's documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string) to setup the connection string for the Blob storage, and then follow the steps below to connect Lytics with Azure:

1.  In the **Connection String** box, enter the connection string for the Blob storage.
2.  (Optional) In the **PGP Key** box, enter a PGP public key to encrypt Azure Blob files.

### Azure Event Hub

Use the Microsoft Azure Event Hub authorization method to export Lytics Audiences to Azure Event Hub. You will need the [Event Hub Connection String](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string). Once obtained, enter the connection string in the **Event Hub Connection String** box.

### Azure SQL Database

For Azure SQL Database you will need the following credentials. Note that if your Azure SQL server enforces IP firewall rules, you will need to add Lytics production IPs to the allowlist. Please contact your Lytics account manager for a range of IPs.

1.  In the **Server** text box, enter your Azure SQL server.
2.  In the **Port** text box, enter your Azure SQL server port.
3.  In the **Database** text box, enter your Azure SQL database.
4.  In the **User** text box, enter your username.
5.  In the **Password** password box, enter your password.

## Import Data

Importing custom data stored in Azure Blob Storage to Lytics allows you to leverage Insights provided by Lytics data science to drive your marketing efforts.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Type**: REST API Integration.
-   **Frequency**: One-time or scheduled Batch Integration (can be hourly, daily, weekly, or monthly depending on configuration).
-   **Resulting Data**: Raw Event Data or, if custom mapping is applied, new User Profiles or existing profiles with new User Fields.

This integration uses the [Storage Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/) to read the CSV file stored in Azure Container. Each run of the job will proceed as follows:

1.  Finds the file selected during [configuration](#configuration) using [Blob Storage service](https://docs.microsoft.com/en-us/rest/api/storageservices/get-blob) of Azure.
2.  If found, reads the contents of the file.
3.  If configured to diff the files, it will compare the file to the data imported from the previous run.
4.  Filters fields based on what was selected during [configuration](#configuration).
5.  Sends event fields to the configured stream.
6.  Schedule the next run of the import if it is a scheduled batch.

### Fields

Fields imported via CSV through Azure Storage Service will require custom data mapping.

### Configuration

Follow these steps to set up and configure a CSV Import from Azure Storage in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the **Import Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Stream** box, enter or select the data stream you want to import the file(s) into.
7.  From the **Container** drop-down, select the Azure container with the file you want to import.
8.  In the **File** drop-down, select the file to import. Listing files may take up to a couple minutes after the bucket is chosen.
9.  (Optional) In the **Custom Delimiter** box, enter the delimiter used. For tab delimited files enter "t". Only the first character is used (e.g. if "abcd" was entered, only "a" would be used as a delimiter).
10.  (Optional) From the **Timestamp Field** drop-down, select the name of the column in the CSV that contains the timestamp of an event. If no field is specified, the event will be time stamped with the time of the import.
11.  (Optional) Use the **Fields** input to select the fields to import. Leave empty to import all fields. If no field names appear, the **Custom Delimiter** may need to be adjusted. Also check to ensure the CSV file has an appropriate header row.
12.  (Optional) Select the **Keep Updated** checkbox to run the import on a regular basis.
13.  (Optional) Select the **Diff** checkbox on repeating imports to compare file contents to the previous file contents and import only rows that have changed. This is useful when full data dumps are provided.
14.  Click on the **Show Advanced Options** tab to view additional Configuration options.
15.  (Optional) In the **Prefix** text box, enter the file name prefix. You may use regular expressions for pattern matching. The prefix must match the file name up to the timestamp. A precalculated prefix derived from the selected file will be available as a dropdown.
16.  (Optional) From the **Time of Day** drop-down, select the time of day for the import to be scheduled after the first import. This only applies to the daily, weekly, and monthly import frequencies. If no option is selected the import will be scheduled based on the completion time of the last import.
17.  (Optional) From the **Timezone** drop-down, select the time zone for the **Time of Day**.
18.  (Optional) From the **File Upload Frequency** drop-down, select the frequency to run the import.
19.  Click **Complete** to create the job.

**NOTE:** For continuous imports, files should be in the following format: timestamp.csv. The job will understand the sequence of files based on the timestamp. If no next file is received, the continuous import will stop and a new export will need to be configured.

## Import SQL Table

[Azure SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database/#overview) is an intelligent, scalable, relational database service built for the cloud. By connecting Lytics directly to your Azure SQL instance, you can easily import full tables of audience and activity data to leverage Lytics' segmentation and insights.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: Lytics SQL driver
-   **Frequency**: Batch Integration
-   **Resulting data**: User Profiles, User Fields, Raw Event Data.

This integration ingests data from your Azure SQL Database by directly querying the table selected during configuration. Once started, the job will:

1.  Run a query to select and order the rows that have yet to be imported. If the import is continuous, the job will save the timestamp of the last row seen, and only the most recent data will be imported during future runs. To ensure consistent ordering of records and to improve performance for batch ingestion, the result of this query will be written to a Local Temporary Table of the format #TMP\_{UUID}\_{TIMESTAMP}, where UUID is a unique identifier associated with the job and TIMESTAMP is the unix timestamp marking the start of the current run, in nanoseconds. This table is only visible in the current session, and is automatically dropped when the batch ingestion completes. For more information, see the **Temporary Tables** section [here](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver15).
2.  Once the initial query completes, the result set will be imported from the temporary table in batches, starting from the oldest row.
3.  Once the last row is imported, if the job is configured to run continuously, it will sleep until the next run. The time between runs can be selected during configuration.

### Fields

Fields imported through Azure SQL will require custom data mapping.

### Configuration

Follow these steps to set up and configure an Azure SQL import job for Microsoft Azure in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select **Azure SQL Import** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Table** input, select the table to import data from.
7.  From the **Timestamp Column** input, select the timestamp column to order the events. This column is also used to determine updated rows when running continuously.
8.  (Optional) From the **Record Timestamp Column** input, select the timestamp column to use as event timestamps, if left blank the Timestamp Column will be used.
9.  (Optional) In the **Since Timestamp** text box, enter the earliest timestamp to import records from; only records with a Timestamp Column after this date will be imported. Use yyyy-mm-dd HH:MM:SS UTC format.
10.  (Optional) In the **Stream Override** text box, enter the data stream name you want to add data to. If the data stream does not exist, it will be created. If left blank the data will go to the azuresql\_activity stream.
11.  (Optional) Select the **Keep Updated** checkbox to repeatedly run this import on a schedule.
12.  (Optional) From the **Import Frequency** input, choose how often a repeated import should run.
13.  (Optional) From the **Time of Day** input, select time of day to start import.
14.  (Optional) From the **Timezone** input, select timezone for time of day.
15.  (Optional) In the **Query Timeout** numeric field, enter the maximum time a query is allowed to run in minutes.
16.  Click **Complete** to create the job.

## Export Audiences (Blob Storage) JSON

Export your Lytics audiences to Azure Blob Storage as newline JSON files, which can then be imported into other systems for improved segmentation and targeting.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Type**: REST API Integration.
-   **Frequency**: Batch Integration one-time or continuous update.
-   **Resulting Data**: User Profile data written to a JSON format.

This integration uses the [Azure Blob Service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api) to upload data to Azure Blob Storage. Each run of the job will proceed as follows:

1.  Create Blob in the Container selected during [configuration](#configuration).
2.  Scan through the users in the selected audience. Filter user fields based on the export configuration and write to the created Blob.
3.  If the job is configured to be continuously updated, any users that enter the audience will be exported. Select the One-time Export checkbox if you want to run it only once.

### Fields

The fields exported to the Blob will depend on the **User Fields** option in the job configuration described below. Any user field in your Lytics account may be available for export.

### Configuration

Follow these steps to set up and configure an export of user profiles to Azure Blob Storage in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  From the **Container** input, select the Azure container that will hold the Blob.
9.  (optional) From the **User Fields** input, select the user fields to export.
10.  (optional) In the **File Prefix** text box, enter a prefix for the exported Blob name.
11.  (optional) Select the **Existing Users** checkbox, to immediately push users who currently exist in the selected Lytics audience. De-selecting will only push users as they leave or enter the audience.
12.  (optional) Select the **One-time Export** checkbox, to make this a one-time export that will complete once the current audience is exported.
13.  (optional) **Maximum File Size** Input the maximum size of each exported file in bytes. If left blank, the default is 5368709120 (5GB).
14.  Click **Complete** to create the job.

## Export Audiences (Blob Storage) CSV

Export your Lytics audiences to Azure Blob Storage as CSV files, which can then be imported into other systems for improved segmentation and targeting.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Type**: REST API Integration
-   **Frequency**: Batch Integration one-time or continuous update.
-   **Resulting Data**: User Profile data written to a CSV file.

This integration uses the [Azure Blob Service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api) to upload data to Azure Blob Storage. Each job run will proceed as follows:

1.  Create Blob in the Container selected during [configuration](#configuration).
2.  Scan through the users in the selected audience. Filter user fields based on the export configuration and write to the created Blob.
3.  If the job is configured to be continuously updated, any users that enter the audience will be exported. Select the One-time Export checkbox if you want to run it only once.

### Fields

The fields exported to the Blob will depend on the **User Fields** option in the job configuration described below. Any user field in your Lytics account may be available for export.

### Configuration

Follow these steps to set up and configure an export job for Microsoft Azure in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  From the **Container** input, select the Azure container that will hold the Blob.
8.  (optional) From the **User Fields** input, select the user fields to export.
9.  (optional) In the **File Prefix** text box, enter a prefix for the exported Blob name.
10.  (optional) In the **Delimiter** text box, enter the delimiter for csv files.
11.  (optional) In the **Join** text box, enter the delimiter to use for array fields in csv files. Map fields will be url encoded.
12.  (optional) Select the **Existing Users** checkbox, to immediately push users who currently exist in the selected Lytics audience. De-selecting will only push users as they leave or enter the audience.
13.  (optional) Select the **One-time Export** checkbox, to make this a one-time export that will complete once the current audience is exported.
14.  Click **Complete** to create the job.

## Export Audiences (Event Hub)

The export job to Azure Event Hub allows you to send audience triggers when users enter or exit your Lytics audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Type**: REST API Integration.
-   **Frequency**: Batch Integration continuous update.
-   **Resulting Data**: User enter/exit event of Lytics audience sent to Event Hub.

This integration uses the [Azure Event Hubs REST API](https://docs.microsoft.com/en-us/rest/api/eventhub/) to send enter/exit event of Lytics audiences to Event Hub. Each run of the job will proceed as follows:

1.  Scan through the users in the selected audience and send to the Event Hub.
2.  Keep the job active to export any users that enter or exit the audience.

### Fields

Lytics sends enter/exit event information about the user to Event Hub. An event might get triggered due to the following:

-   A new data event.
-   User Profile scoring gets updated occasionally.
-   A scheduled trigger evaluation.

A trigger of "has done X of Y in last 7 days" may get scheduled to be evaluated 7 days after last X event. When the user gets updated, audience membership is re-evaluated and a trigger is sent if the user has moved in or out of the audience. Below is an example of the message sent to Event Hub:

```
{
  "data": {
    "_created": "2016-06-29T18:50:16.902758229Z",
    "_modified": "2017-03-18T06:12:36.829070108Z",
    "email": "testwebhook@lytics.io",
    "user_id": "user123",
    "segment_events":[
        {
            "id": "d3d8f15855b6b067709577342fe72db9",
            "event": "exit",
            "enter": "2017-03-02T06:12:36.829070108Z",
            "exit": "2017-03-18T06:12:36.829070108Z",
            "slug": "demo_segment"
        },
        {
            "id": "abc678asdf",
            "event": "enter",
            "enter": "2017-03-02T06:12:36.829070108Z",
            "exit": "2099-03-18T06:12:36.829070108Z",
            "slug": "another_segment"
        }
    ]
  },
  "meta":{
     "object":"user",
     "subscription_id": "7e2b8804bbe162cd3f9c0c5991bf3078",
     "timestamp": "2017-03-18T06:12:36.829070108Z"
  }
}
```

### Configuration

Follow these steps to set up and configure an export of user event to Azure Event Hub in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the **Export Audiences (Event Hub)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** list, select the Lytics audience you want to export. The event from the **Audience** list on the right side will be exported.
7.  (Optional) Select the **Existing Users** checkbox to enable a backfill of the current members of the audience(s) to Event Hub immediately.
8.  Click **Complete** to create the job.

## Export Events (Blob Storage)

Export events into Azure Blob Storage so you can access, archive, or run analysis on Lytics events in the Azure ecosystem.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: One-time or scheduled Batch Integration which may be hourly, daily, weekly, or monthly depending on configuration.
-   **Resulting data**: Raw Event Data exported to a CSV file format.

This integration uses the [Azure Blob Service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api) to write CSVs to the configured container in Azure Blob Storage. Each run of the job will proceed as follows:

1.  Create a blob with the configured file name.
2.  Read events from the configured Lytics data streams. If the export is configured to run periodically, only the events since the last run of the export will be included.
3.  PGP encrypt the CSV if a PGP key is provided in the Azure authorization.
4.  Compress the CSV, if selected in the export's configuration.
5.  Write the event data to Azure Blob Storage by [PUTing blocks of data](https://docs.microsoft.com/en-us/rest/api/storageservices/put-block).

### Fields

The fields included depend on the raw event in Lytics data. All fields in the selected stream will be included in the exported CSV.

### Configuration

Follow these steps to set up and configure an export job for Microsoft Azure in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Microsoft Azure** from the list of providers.
2.  Select the **Export Events (Blob Storage)** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify the job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Container** input, select the Azure container that will hold the Blob.
7.  From the **Data Streams to Export** input, select the event data streams to export, a stream is a single source/type of data (you may choose more than one). If none are selected, all streams are exported.
8.  (optional) In the **Start Date** text box, enter events from this date onwards will be exported. Use yyyy-mm-dd format (2015-08-13).
9.  (optional) In the **End Date** text box, enter events before, but NOT including this date will be exported. Use yyyy-mm-dd format (2015-08-13).
10.  (optional) From the **Compress** input, select the compression type (gzip, zip, or none) of the file.
11.  In the **Filename** input, enter the naming convention for the files. {TIMESTAMP} will be replaced with the current time of the export. The filename may include folder e.g.: /myfolder/myfile-{TIMESTAMP}. File extension e.g., .csv, .csv.gz will automatically be added.
12.  (optional) From the **Timestamp Format** input, select the format for the \\{TIMESTAMP} in the filename. MM = month, mm = minute.
13.  (optional) Select the **Include Headers** checkbox to include the field names as the first row of the exported file.
14.  (optional) Select the **Keep Updated** checkbox to run this export continuously.
15.  (optional) From the **File Export Frequency** input, select how often a continuous export should export a new file. Default is daily.
16.  (optional) From the **Time of Day** input, select the time of day to run a Daily or Weekly export.
17.  (optional) From the **Timezone** input, select the timezone for the time of day specified above.
18.  Click **Complete** to create the job.
