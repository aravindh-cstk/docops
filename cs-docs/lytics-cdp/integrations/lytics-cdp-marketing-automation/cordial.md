---
title: "Cordial"
description: "Cordial is a real-time platform that helps you connect with your customers by delivering relevant messages across multiple channels."
url: /lytics/cordial
uid: blt268fc221168ab64c
---

# Cordial

## Cordial

## Overview

[Cordial](https://cordial.com/) is a real-time platform that helps you connect with your customers by delivering relevant messages across multiple channels.

Integrating Cordial with Lytics allows you to import user activity from Cordial and use Lytics' powerful insights to build behavioral audiences and improve your targeting. You can export Lytics audiences in real time or in bulk to Cordial for use in your marketing campaigns.

## Authorization

If you haven't already done so, you will need to set up a Cordial account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

You will also need to create an [Account Settings](/docs/lytics/account-settings#api-tokens) that Lytics will use to import/export data. If you need use IP addresses to create an API key, contact your Account Manager for the current list of Lytics' IP addresses.

1.  Select **Cordial** from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Cordial supports the following authorization methods:
    -   [Cordial Real Time authorization](#cordial-real-time-authorization)
    -   [Cordial Bulk authorization](#cordial-bulk-authorization)
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Cordial Real Time Authorization

1.  In the **Cordial API Key** field, enter your Cordial API key.
2.  Click **Save Authorization**. ![cordial-real-time-auth.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6f4d9b332086d682/ad1aca59181d16d7e5807f14/cordial-real-time-auth.png)

### Cordial Bulk Authorization

During the configuration process for authorizations of type **Cordial Bulk**, in addition to Cordial API key, you will also need the SFTP server credentials like hostname, port, username and password.

1.  In the **Cordial API Key** field, enter your Cordial API key.
2.  In the **Host** text field, enter the host name or IP address of the SFTP server you want to store files before importing to Cordial.
3.  In the **Port** text field, enter the port number for the SFTP server.
4.  In the **Username** text field, enter the username for the SFTP server.
5.  In the **Password** text field, enter the password for the SFTP server.
6.  In the **Folder** text field, enter path to the folder to save the file. If the path is not given, Lytics will export the file to the user's home directory.
7.  Click **Save Authorization**.\\

![cordial-bulk-auth.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd716c34441482e10/0c86e71f76af239cb3f4df91/cordial-bulk-auth.png)

## Import Activity

Import contact activity data from Cordial to build targeted audiences in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration and File Based Transfer Integration.
-   **Frequency**: Activity data is received every 6 hours in a Batch Integration
-   **Resulting Data**: Activity data for Cordial contacts will be collected as User Fields

This integration utilizes the [Cordial Activity Export](https://support.cordial.com/hc/en-us/articles/115002878411-Contact-Activity-Export) API to import contact activity data to Lytics. On each run of the job, it will:

1.  Create the Contact Activity export job in Cordial to export activity (message-, open, click, opt-out, bounce, complaint, custom) data to a file in SFTP server.
2.  Import the data from the exported file to Lytics in the cordial\_activity stream.
3.  Repeats step 1 and 2 every 6 hours.

### Fields

The following fields are included in the default mapping of the cordial\_activity stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| \\\_id | cr\\\_system\\\_event\\\_id | Cordial System Event ID | string |
| action | cr\\\_event\\\_action | Cordial Event Action | string |
| cID | cr\\\_contact\\\_id unique id |  | string |
| first | cr\\\_first | Cordial Unique Event | bool |
| mcID | cr\\\_message\\\_contact\\\_id | Cordial Message Contact ID | string |
| message\\\_name | cr\\\_message\\\_name | Cordial Message Name | string |
| message\\\_sent | cr\\\_message\\\_sent\\\_timestamp | Cordial Message Sent Timestamp | date |
| time | cr\\\_event\\\_timestamp | Cordial Event Timestamp | date |

### Configuration

Follow these steps to set up and configure an import of contact activity from Cordial in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Cordial** from the list of providers.
2.  Select **Import Activity** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) In the **Import Since** text box, enter events after this date will be imported. The date format should be yyyy-mm-dd, for example, 2019-03-27. If left empty, activity data from the last 7 days will be imported.
7.  Click **Start Import**.\\

![cordial-import.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2212a3b519b25d93/1a527176553e8ecc1256ee15/cordial-import.png)

## Export Audiences (Real Time)

Export Lytics audiences in real time to refine the targeting of your Cordial campaigns with behavioral insights from Lytics. For this job, all existing members of the selected Lytics audience are exported to the chosen list in Cordial and new members are exported in real time.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration, with a one-time configurable Backfill of the audience.
-   **Resulting Data**: Lytics users that are members of the selected audience are exported to the selected Cordial list.

This integration utilizes the [Cordial Contacts API](https://support.cordial.com/hc/en-us/articles/203885958-Contacts) to create a Cordial contact if it doesn't already exist. Then the contact is put in the selected Cordial list. On each run of the job, it will:

1.  Run a backfill of the selected Lytics audience, and create or add contacts in the selected Cordial list.
2.  After a backfill, the job will receive real-time updates when a user enters or exits the audience.
3.  For each user entering the audience, it will [create and add the contact](https://support.cordial.com/hc/en-us/articles/203885958-Contacts#postContacts) in the Cordial list. It will also export the attributes that are mapped during work [configuration](#configuration-1).
4.  For each user exiting the selected audience, the job will remove the contact from the Cordial list.

### Fields

You can export any Lytics user fields to [Cordial Account Contact Attributes](https://support.cordial.com/hc/en-us/articles/204570347-Account-Contact-Attributes). Lytics allows you to map user profile fields with the corresponding contact attributes as part of the job [configuration](#configuration-1).

### Configuration

Follow these steps to set up and configure an export job for Cordial in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Cordial** from the list of providers.
2.  Select the export **Export Audiences (Real-time)** from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/cordial/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** drop-down list, select the Lytics audience you would like to export to Cordial.
7.  From the **Email Field** input, select name of email field in the Lytics profiles.
8.  (Optional) From the **List** input, select the Cordial list you want to export your audience to. If no list is selected, a new Cordial list will be created named Lytics\_{lytics\_audience\_name}.
9.  (Optional) From the **Field Mapping** input, select Lytics data fields from the left drop-down list and Cordial contact attributes from the right drop-down list.
10.  (Optional) Select the **Existing Users** checkbox, to add users who already exist in the selected Lytics audience.
11.  Click **Start Export**. ![cordial-real-time-export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9f5e835c2327512a/59b1a25b36c096a0b0ec1c92/cordial-real-time-export.png)

## Export Audiences (Bulk)

Export Lytics audiences in bulk for use in your Cordial campaigns, leveraging rich, behavioral audiences powered by Lytics data science.\\ For this job, all existing members of the selected Lytics audience are exported to the chosen list in Cordial and new members are exported in batch.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: File Based Transfer Integration, Audience Trigger Integration.
-   **Frequency**: Batch Integration, with a one-time configurable Backfill of the audience.
-   **Resulting Data**: Lytics users that are members of the selected audience are exported to Cordial and added to the selected Cordial list.

This integration utilizes the [Cordial Contacts Import API](https://support.cordial.com/hc/en-us/articles/203886058-Contact-Imports) to export a batch of users to Cordial. The job exports users to Cordial in batches of 30,000. On each run of the job, it will:

1.  Run an one-time backfill of the selected Lytics audience, writes the user in the CSV file and registers the import job in Cordial using [Cordial Import API](https://support.cordial.com/hc/en-us/articles/203886058-Contact-Imports#postContactImports)
2.  After a backfill, the job will receive real-time updates when a user enters or exits the audience.
3.  For each user entering/exiting the audience, it will create a batch of 30,000 users and export them to a file so that it can be imported into Cordial.

### Fields

You can export any Lytics user fields to [Cordial Account Contact Attributes](https://support.cordial.com/hc/en-us/articles/204570347-Account-Contact-Attributes). Lytics allows you to map user profile fields with the corresponding contact attributes as part of the job [configuration](#configuration-2).

### Configuration

Follow these steps to set up and configure an export job for Cordial in the Lytics platform.

1.  Select **Cordial** from the list of providers.
2.  Select the export **Export Bulk** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Lytics Audience** to export.
7.  Using the **Email Field** drop-down list, select the Lytics user field that contains the user's email address.
8.  Using the **List** drop-down list, select the Cordial list you want to export your audience to. If no list is selected, a new Cordial list will be created named Lytics\_{lytics\_audience\_name}.
9.  (Optional) Use the **Fields Mapping** input to map Lytics fields to the existing Cordial account contact attributes. Select Lytics data fields from the left drop-down list and Cordial contact attributes from the right drop-down list.
10.  (Optional) Use the **Frequency** drop-down list to specify how often the job should run. If nothing is selected, it will run **daily** by default.
11.  (Optional) Check the **Existing Users** checkbox to immediately export users who currently exist in the selected Lytics audience. Deselecting it will only export users as they enter or exit the audience.
12.  Click **Start Export**.\\

![cordial-bulk-export.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ad97acf7674dae8/ba9fa972e14bce95fd1f8aad/cordial-bulk-export.png)
