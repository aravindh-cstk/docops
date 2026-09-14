---
title: "Selligent"
description: "Selligent"
url: /lytics/selligent
---

# Selligent

## Selligent

## Selligent

The Selligent integration provides the ability to export files to Selligent via sftp. Instructions are based on Message Studio 10.

## Authentication

Before continuing, make sure that you have already created a [Selligent](http://www.Selligent.com) account.

1.  When you are ready to create a Selligent authorization, navigate to the [Integrations](https://activate.getlytics.com/data/integrations) section of Lytics and select the Selligent integration. ![app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am962c45026c17209e/09ed75b9b9b1f4a42f41f585/img-0280.png)

1.  Select an action you would like to complete.
2.  Any option will work for creating an auth

1.  Create an authentication for Selligent: ![createauth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amebc3c409565fed18/1887be8c544783868d094671/img-0281.png)
2.  Select the Add New Authorization button. Note: You will only need to do this once for each SFTP location.

1.  Enter authorization details: ![authconfig](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1a642a41bfed17f2/f4bd12f4421aad9504177943/img-0282.png) These settings will come from Selligent.
2.  **Host:** The hostname of the SFTP account to use.
3.  **Port:** The port number for SFTP account to use.
4.  **Username:** The username for the SFTP account to use.
5.  **Password:** The password for the SFTP account to use.
6.  **Folder:** The folder files will be uploaded to.
7.  **Description:** Use this description to tell different Selligent auths apart.

## Export to Selligent

Initiating this workflow exports a Lytics Audience to Selligent via SFTP

| Summary |  |
| --- | --- |
| Frequency | Daily |
| Exports to | SFTP |
| Name | export-lytics-segment\\\_slug-timestamp.csv Timestamp format: YYYY-MM-DDTHH:MM:SS |
| Mapped Fields | no |
| Segment Exports | none |
| Type | add, no removal |

1.  Connect Lytics to Selligent if you have not previously done so. See [Authentication](#authentication) above.
2.  Select SFTP Export ![choose](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdf79267424bb0392/9b8bfd8dce62e2cf9a73af4f/img-0283.png)
3.  Select authorization to use. ![authorize](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amebc3c409565fed18/1887be8c544783868d094671/img-0281.png)
4.  **Choose an authorization:** If you have multiple Selligent accounts authorized in Lytics, then select the one that you would like to use.
5.  Configure the work: ![basic config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am84458a9f22901baf/5debf186ff97a3da64dadd9e/img-0284.png)
6.  **Segment Name:** Select the segment that you would like to export to Selligent.
7.  **Show Advanced Options:** expands more configuration options. ![advanced config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3725b2f539e9ad15/32f613a58657bd8df972b276/img-0285.png)
8.  **Keep Updated** Run this export daily.
9.  **Fields to Export**: Use this to choose only specific fields to export. If it is left blank, then all user fields will be exported.
10.  **Append Segment Name:** Adds a column with the name of the segment to each row.
11.  **Append Segment Slug:** Adds a column with the slug of the segment to each row.
12.  **Time of Day:** Set when this export will run each day if Keep Updated is set.
13.  **Time Zone:** Set what timezone to use for Time of Day.
14.  Click “Start Export” to begin the export.
15.  The file should appear in the sftp folder in a few minutes.

### Setup Reoccurring FTP Import in Message Studio

You can configure Internal Profile Data Sources and Profile, Supplemental and Local Interaction Extensions with recurring imports of data via FTP. To set up a recurring import from an FTP source or an External Data Source into your Internal Data Source, or to an Extension that is of type Profile, Supplemental, or Interactions > Internal (also known as Local), perform the following actions:

1.  In the Message Studio navigation panel, click Data Management, then expand Data Sources.
2.  Click either Internal Profile or Extensions.
3.  On the summary tab, choose the data source you want to modify and click Edit.
4.  Click the Recurring Imports tab or click Next to go to the Recurring Imports step.
5.  Click Add Import to open the configuration screen. ![add import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5df1cac9166c684b/b90f484797c3f99459fe6151/img-0286.png)
6.  On the Step 1. Information screen, specify the following parameters: ![basic import information](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4d8a19bd96530c0e/9d6ce18630d9d599d207515f/img-0287.png)
7.  Import type—Choose FTP:
8.  Recurring updates will come from the FTP server at the IP address shown when you mouse-over the Information icon. If you choose this option, enter a common File name prefix (export-lytics-segment\\\_slug) for the file, and enter the File name suffix (.csv). Other characters within the name are wild-carded.
9.  Import mode—Choose one of the following import modes:
10.  Merge—Adds new records that don't have a matching primary key; updates records that do have a matching primary key.
11.  Update—Updates existing records that have a matching primary key; ignores new records that don't have a matching primary key.
12.  Replace—Drops all records and imports all new data from the file.
13.  Append—Adds new records that don't have a matching primary key; ignores records that do have a matching primary key.
14.  Refresh Mode—Select one of the following:
15.  Partial refresh using "last modified" column—Only imports the data records that indicate they have been modified since the last import.
16.  Complete refresh, get all records—Imports all data source records.
17.  Click Next. The Schedule screen appears. ![schedule](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am17dc924f1ebd81f5/9d6d7d7ceac49ae8e1bda624/img-0288.png)
18.  On the Schedule screen, specify the following parameters:
19.  Choose when you want the import run (Manually, Hourly, Daily, Weekly), and the Start Time.
20.  the lytics export runs daily, so select Daily, Weekly, or Manually
21.  be sure to set the start time after the lytics export is set to run.
22.  Click the information icon to see the current date and time.
23.  Note: If you select Manually, you must go and edit the database then return to this step, highlight the import in the Summary Page and click Run Now.
24.  Click Next. The Column Mapping screen should appear, specify the following parameter: ![column mapping](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6b6bd412922d82ec/dea114e4ae90e5b6c982bf6e/img-0289.png)
25.  Primary Key—Select the column in the data source to use as the Primary Key.
26.  Last Modified—Select the column that contains the last modification date of the records.
27.  Map Columns—Use the drop-down lists to select the columns in the Internal Data Source (on the left) that map to the External Data Source (on the right) that is providing the updated data.
28.  Click Add to complete the setup.
