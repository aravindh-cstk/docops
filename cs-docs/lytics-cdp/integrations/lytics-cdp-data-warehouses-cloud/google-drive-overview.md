---
title: "Google Drive"
description: "Google Drive"
url: /lytics/google-drive-overview
---

# Google Drive

## Google Drive

## Overview

[Google Drive](https://www.google.com/drive/) is a file storage service that allows one to store and share files. Integrating Lytics with Google Drive allows you to export Lytics user profiles and user fields to files in the drive.

## Authorization

If you haven't already done so, you will need to set up a [Google Drive](https://www.google.com/drive/#overview) account before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Google Cloud from the list of providers.
2.  Select the authorization method. Note that different methods may support different job types. Google Drive supports the following authorization methods:
3.  [Google Sheets OAuth](#google-sheets-oauth)
4.  Enter a **Label** to identify your authorization.
5.  (Optional) Enter a **Description** for further context on your authorization.
6.  Complete the configuration steps needed for your authorization. These steps will vary by method.
7.  Click **Save Authorization**.

### Google Sheets OAuth

This authorization allows us to access the Google Sheet service for your Google drive account.

1.  Select **Google Sheets Oauth** authorization method.
2.  From the user selection window, select the Google account you want to use from the list of accounts.
3.  Click **Allow**.

## Export Audience

Use this export job to populate Google Sheets with Lytics user profile and user fields.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration, configurable.
-   **Resulting data**: User Fields will be exported to Google Sheets.

This job utilizes [Google Sheets API](https://developers.google.com/sheets/api/reference/rest) to create Google Sheet and write user profile fields. Once started, the job will:

1.  Create a new Spreadsheet with the name `Lytics {segment slug} {date}`.
2.  If configured, a header row with each field being exported is written.
3.  For each user in to the Lytics audience, the values for the field being exported are written in the sheet row by row.
4.  Once all the users are exported, the job will go to sleep for the configured amount of time.
5.  On the next run, the job will create a new internal sheet in the main spreadsheet and repeat the export from step 2.

### Fields

You can select any Lytics user fields to export to Google Sheets. Lytics allows you to select user fields as part of the workflow configuration described below.

### Configuration

Follow these steps to set up and configure an export job for Google Cloud in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Drive** from the list of providers.
2.  Select the export **Google Sheets Export Audience** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![sheets export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amba5fdd0a327b44b5/3cca57b9043d6824d5c91e22/img-0129.png)
8.  (Optional) From the **Fields to Export** input, select the list of user fields to export. If none are selected then every user field will be included.
9.  (Optional) Select the **Include Headers** checkbox to include the field names as the first row in the Google Sheets.
10.  (Optional) Select the **Audience Slug** checkbox to add a column with the slug of the exported Lytics audience.
11.  (Optional) Select the **Continuous Export** checkbox to continuously run the export job at the specified frequency.
12.  (Optional) From the **File Export Frequency** input, select how often to export the new file.
13.  (Optional) From the **Time of Day** input, select time of day to start export job each day.
14.  (Optional) From the **Timezone** input, select timezone for time of the day for running the export job.
15.  Click the **Start job** button to start the job.

## Import Data

Import custom data directly from Google Sheets.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Raw Event Data.

The Google Sheets Import retrieves raw data from a single spreadsheet and maps it to its header values.

Steps/Pattern:

1.  [Reads](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet) all of the data from the start row indicated, as well as the header row
2.  Maps data to the header values for each row
3.  Emits all row data to the selected data stream
4.  If set to run continuously, job sleeps until the next run and then reads values starting from the last row imported

### Fields

Fields imported through Google Sheets will need custom data mappings.

### Configuration

Follow these steps to set up and configure an import job for Google Drive in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Drive** from the list of providers.
2.  Select the import **Google Sheets Import** from the list.
3.  Select the authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job. ![Google Sheets Import Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am07fe11da73a8bb2b/093948667acaa6d276876cf6/img-0130.png)
7.  In the **Spreadsheet ID** text box, enter the spreadsheet ID.
8.  In the **Sheet** drop-down, select the specific sheet you'd like to import from. If nothing is selected, the first sheet in the spreadsheet is selected.
9.  In the **Header Row** text box, enter the header row (ex: A1:D1).
10.  In the **Start Row** text box, enter the start row (ex: A2).
11.  (optional) Select the **Continuous Import** checkbox, to select to import continuously.
12.  (optional) From the **Sheet Import Frequency** input, select how often to import data from the specified sheet (if continuous).
13.  (Optional) Toggle **Show Advanced Options**.
14.  (optional) From the **Time of Day** input, select time of day to start the import, ignore for hourly imports.
15.  (optional) From the **Timezone** input, select timezone for time of day.
16.  Click the **Start job** button to start the job.
