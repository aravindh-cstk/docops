---
title: "Google Cloud Storage"
description: "Google Cloud Storage is a secure, scalable, and durable object storage service provided as part of the Google Cloud Platform."
url: /lytics/google-cloud-storage-overview
uid: blt1f0ffbcf09919aac
---

# Google Cloud Storage

## Google Cloud Storage

## Overview

[Google Cloud Storage](https://cloud.google.com/storage) is a secure, scalable, and durable object storage service provided as part of the Google Cloud Platform.

Integrating Lytics with Google Cloud Storage enables you to export Lytics audiences and user fields to CSV files that are stored in a Google Cloud Storage bucket.

## Authorization

If you haven't already done so, you will need to set up a Google account that has access to Google Cloud Platform before you begin the process described below. You can follow the [Google quickstart guide](https://cloud.google.com/gcp/getting-started) to help you get started with Google Cloud Storage.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Google Cloud Storage OAuth** method for authorization.
3.  From the user selection window, select the Google account you want to use from the list of accounts.
4.  Click **Allow**.
5.  Enter a **Label** to identify your authorization.
6.  (Optional) Enter a **Description** for further context on your authorization.
7.  (Optional) In the **PGP Private Key** text box, enter your PGP Private Key if you will be importing PGP encrypted files.
8.  (Optional) In the **PGP Passphrase** text box, enter the passphrase for the **PGP Privte Key**.
9.  Click **Save Authorization**.

## Import Files

Import user activity and profile files from Google Cloud Storage into Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: File Based Transfer Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Raw Event Data.

Once initiated, the import job will:

1.  [Retrieve a list of objects in the bucket](https://cloud.google.com/storage/docs/json_api/v1/objects/list) that match the prefix.
2.  Sort the files by date, and ignore any files older than the last file.
3.  Iterate through the files.
4.  Convert each row/JSON object into an event.

### Fields

Due to the nature of the files that can be imported by the File import, no default LQL is available. All fields available will be added to the data stream.

### Configuration

Follow these steps to set up and configure an import job for Google Cloud in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Import Files** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  In the **Project** text box, enter the Google Project ID you want to import data from.
7.  In the **Bucket** text box, enter the Google Cloud Storage bucket you want to import data from.
8.  (Optional) In the **Starting File** text box, select the file you would like to import first. Only newer files will be imported.
9.  (Optional) In the **Prefix** text box, enter the file name prefix to filter files by. Example: **new-users-**
10.  (Optional) In the **Since** text box, enter the oldest date to import files since. Only files newer than this date will be imported. Use yyyy/mm/dd HH:MM/SS format. If left blank all files created after **Starting File** will be imported.
11.  From the **File Type** input, select the type of file. Select CSV if data is formatted as a CSV with header row (CSV without a header row is unsupported). Select JSON if the file is formatted as a [JSON lines file](https://jsonlines.org/).
12.  (Optional) In the **Timestamp Field** text box, enter the field containing the event timestamp.
13.  (optional) Select the **GZipped** checkbox if the file is gzip compressed.
14.  (Optional) Select the **PGP Encrypted** checkbox if the file is [PGP encrypted](/docs/lytics/integrated-marketing-tools#pgp-encryption).
15.  (Optional) In the **Stream** text box, enter the data stream to add events to. If left blank, events will be added to the gcs\_files data stream.
16.  (Optional) Select the **Continuous Import** checkbox to import continuously.
17.  (Optional) From the **File Import Frequency** input, select how often the import should look for new files.
18.  (Optional) From the **Time of Day** input, select time of day to start the import each day.
19.  (Optional) From the **Timezone** input, select timezone for time of day.
20.  (Optiona) Select the **Delete File** checkbox to allow the import job to delete the file after successful import. **Caution**: This will delete the file from the source bucket.
21.  Click **Start Import**.

## CSV Export

This job allows you to export Lytics audiences and user fields to a CSV file stored in a Google Cloud Storage (GCS) bucket.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: File Based Transfer Integration.
-   **Frequency**: Batch Integration, frequency can be configured.
-   **Resulting data**: User Fields in a file.

### Fields

The fields exported to the CSV file will depend on the **Fields to Export** option in the job [configuration](#configuration-1). Any user field in your Lytics account is available for export.

### Configuration

Follow these steps to set up and configure an export of a Lytics Audience to GCS. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Export Audiences (Google Cloud)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience Name** drop-down, select the Lytics audience that contains the users to export.
7.  In the **Project** text field, enter the Google Cloud Platform Project ID that contains the GCS bucket where you would like to save the CSV file.
8.  In the **Bucket** text field, enter the GCS bucket name where you would like to save the CSV file.
9.  Using the **Compress** drop-down, select the compression type for the file to be exported.
10.  Select the **Include Headers** checkbox to include the field names as the first row of the exported file.
11.  Select the **Append Audience Name** checkbox to add a field with the Lytics audience name.
12.  Select the **Append Audience Slug** checkbox to add a field with the Lytics audience slug.
13.  Select the **Additional Audiences** checkbox to add a column containing all the Lytics audiences a user is a member of. Selecting this option may affect the performance of this work.
14.  Using the **Fields to Export** list, select the list of user fields to export.
15.  In the **User Limit** numeric field, enter the maximum number of users to export. Leave it blank to export all users.
16.  In the **Custom Delimiter** text field, enter the custom delimiter for your file. The default delimiter is a comma.
17.  Using the **Custom Join** drop-down, select a custom join character for fields that have multiple values. Default is to join multi-value fields with &, for example, emails=test@gmail.com&test2@gmail.com.
18.  Select the **Continuous Export** checkbox to export the file once a day.
19.  From the **File Export Frequency** drop-down, choose how often a continuous export should export a new file.
20.  Using the **Time of Day** drop-down, select the time of day to start export each day.
21.  Using the **Timezone** drop-down, select the timezone for time of day.
22.  Using the **Timestamp format** drop-down, select the format for the timestamp that will be added at the end of the filename.
23.  Click **Start Export**.\\

![gcs-sftp-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfd62a60f813f3be9/4d041c616f148192de4a62f4/gcs-sftp-export.png)

## Export Activity Data

Export events into Google Cloud Storage so you can access, archive, or run analysis on Lytics events from any tool that consumes GCS objects.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: File Based Transfer Integration.
-   **Frequency**: One-time or scheduled Batch Integration which may be daily, weekly, or monthly depending on configuration.
-   **Resulting data**: Raw Event data exported to a CSV file.

Each run of the job will:

1.  Build a destination object name from the configured filename, timestamp format, and optional directory.
2.  Open a streaming writer to the configured GCS bucket.
3.  Read events from the selected data streams. If the export is configured to keep updated, only events since the last run are included.
4.  Compress the event data, if a compression option is selected.
5.  Write the events to the GCS object and close the upload.

### Fields

The fields included depend on the raw event data in Lytics. All fields in the selected stream(s) will be included in the exported file.

### Configuration

Follow these steps to set up and configure an export of event data to Google Cloud Storage. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Cloud Storage: Export Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Project** drop-down, select the Google Cloud project that owns the destination bucket.
7.  From the **Bucket** drop-down, select the Google Cloud Storage bucket you want to export data to.
8.  (Optional) In the **Directory** text field, enter a directory inside the bucket to save files in.
9.  Use the **Data Streams to Export** input to select the data streams to export. A stream is a single source/type of data (you may choose more than one). If none are selected, all streams are exported.
10.  (Optional) In the **Start Date** text field, enter the date to begin exporting events from. Use yyyy-mm-dd format (for example, 2015-08-13).
11.  (Optional) In the **End Date** text field, enter the date before which (but not including) events will be exported. Use yyyy-mm-dd format.
12.  (Optional) From the **Compress** drop-down, select a compression method for the file. Options are none, gzip (default), or zip.
13.  In the **Filename** text field, enter the name of the destination file. You can include {TIMESTAMP} and it will be replaced with the time interval at the time of the export. The filename may include a folder, for example /myfolder/myfile-{TIMESTAMP}. The file extension (such as .csv or .csv.gz) is added automatically. By default, the file is exported with the name lytics-events-{TIMESTAMP}.
14.  (Optional) From the **Timestamp Format** drop-down, select the format for the {TIMESTAMP} in the filename. MM = month, mm = minute.
15.  Select the **Include Headers** checkbox to include field names as the first row of the exported file (selected by default).
16.  (Optional) Select the **Keep Updated** checkbox to run the export repeatedly.
17.  (Optional) From the **File Export Frequency** drop-down, select how often a continuous export should write a new file, if **Keep Updated** is selected. Default is daily.
18.  (Optional) From the **Day of Week** drop-down, select the day of the week to run the export, if **File Export Frequency** is set to weekly.
19.  (Optional) From the **Time of Day** drop-down, select the time of day to start the export, if **Keep Updated** is selected.
20.  (Optional) From the **Time Zone** drop-down, select the time zone for **Time of Day**.
21.  Click **Start Export**.
