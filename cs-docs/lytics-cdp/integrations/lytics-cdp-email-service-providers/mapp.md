---
title: "Mapp"
description: "Mapp"
url: /lytics/mapp
---

# Mapp

## Mapp

## Overview

[Mapp](https://mapp.com/mapp-cloud/) is an omni-channel marketing tool for automated messaging via email, social, web, and mobile.

Integrating Lytics audiences with Mapp allows you to leverage the advanced segmentation features on Lytics to keep your Mapp audiences up to date in real-time. Push custom data fields and audience membership from Lytics to Mapp to improve your multi-channel marketing campaigns.

## Authorization

If you haven't already done so, you will need to set up a Mapp account before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Mapp** from the list of providers.

1.  Select the method for authorization. Note that different methods may support different job types. Mapp supports the following authorization methods:
2.  [SFTP Server Username and Password](#sftp-server-username-and-password): for SFTP Exports
3.  [API Integration Username and Password](#api-username/password): for only importing Experience metrics
4.  [API Integration ID and Secret](#api-integration-id-and-secret): for Audience Exports
5.  [API Username/Password, Integration ID, and Secret](#api-username/password,-integration-id,-and-secret): for importing and activating Experiences

1.  Enter a **Label** to identify your authorization.

1.  (Optional) Enter a **Description** for further context on your authorization.

1.  Complete the configuration steps needed for your authorization. These steps will vary by method.

1.  Click **Save Authorization**.

### SFTP Server Username and Password

1.  Enter the following:
2.  **Host**: address of SFTP server for external access.
3.  **Username**: user name used to log into server.
4.  **Password**: password used to log into server.
5.  **Folder**: path in the SFTP server where files will be placed. ![Mapp authorization details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am72065bd1b3673441/13514d0ef595fb4540cda01c/img-0190.png)

You are now ready to start a [SFTP Export](#export-audiences-sftp) job.

### API Username/Password

1.  Enter the following:
2.  **REST API URL**: REST API URL of the Mapp instance to which you want to export. This is the [host component](https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.1.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html) of the Mapp instance URL and the path to your Mapp instance (i.e. `https://staging11.shortest-route.com/qatest`).
3.  **Username**: user name used to log into your Mapp instance.
4.  **Password**: password used to log into your Mapp instance.

![Mapp Username Password Auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6b2217fa52b85146/9e672a7fcd19b29adc4b29ad/img-0191.png)

You are now ready to start an [Experience](#experiences) job. Use this authorization to only import Experience metrics.

### API Integration ID and Secret

1.  Enter the following:
2.  **Async API URL**: Async API URL of the Mapp instance to which you want to export. This is the [host component](https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.1.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html) of the Mapp instance URL and the path to your Mapp instance (i.e. `https://charon-test.shortest-route.com`).
3.  **Integration ID**: your Mapp Connect Integration ID.
4.  **Secret**: your Mapp Connect Integration Secret.

![mapp integration secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25a5cb2f7e7de486/4fca273472db6f81d4476d94/img-0192.png)

You are now ready to start an [Audience Export](#export-audiences) job.

### API Username/Password, Integration ID, and Secret

1.  Enter the following:
2.  **Async API URL**: Async API URL of the Mapp instance to which you want to export. This is the [host component](https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.1.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html) of the Mapp instance URL and the path to your Mapp instance (i.e. `https://charon-test.shortest-route.com`).
3.  **Integration ID**: your Mapp Connect Integration ID.
4.  **Secret**: your Mapp Connect Integration Secret.
5.  **REST API URL**: REST API URL of the Mapp instance to which you want to export. This is the [host component](https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.1.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html) of the Mapp instance URL and the path to your Mapp instance (i.e. `https://staging11.shortest-route.com/qatest`).
6.  **Username**: user name used to log into your Mapp instance.
7.  **Password**: password used to log into your Mapp instance.

![mapp auth id, secret, user, pass](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am706bdca016d50138/a413a49c2845eaff1f80bbd3/img-0193.png)

You are now ready to start an [Experience](/docs/lytics/experiences) job. Use this authorization to import Experience metrics and activate your Experiences.

## Export Audiences

Export Lytics audiences to Mapp to add behavior-rich attributes to your Mapp user base including Lytics behavioral scores, content affinities, and cross-channel data.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration with option to run an initial Backfill.
-   **Resulting data**: A [group-level attribute](https://developers.mapp.com/#attribute) is added to each user in Mapp. The name of the attribute is equal to the **Mapp Attribute Name** or the name of the Lytics audience if left empty. The attribute value is "true" if the user is in the audience or "false" if the user has exited the audience. The attribute name must be a pre-existing attribute in your Mapp account that is mapped for use with Mapp Connect.

This integration utilizes the [Mapp Rest API](https://developers.mapp.com/#rest-api) to export users. Once the export is started the job will:

1.  As users enter or exit the Lytics audience, the users' group-level audience attribute will be added or updated to "true" or "false."
2.  If you select the **Existing Users** option during the [Configuration](#configuration), users who currently exist in the selected Lytics audience will be immediately exported to Mapp.
3.  If you opt for a one-time export by selecting the **Backfill Only** option during the [Configuration](#configuration), the job will stop after sending the existing users in the audience.
4.  Otherwise, these updates occur continuously as the Lytics audience membership changes.

### Fields

By default, Lytics exports the following fields to Mapp.

| Lytics User Field | Description | Mapp Field | Type |
| --- | --- | --- | --- |
| Audience | Audience Membership Status | [User Attribute](https://developers.mapp.com/#attribute) | string |

### Configuration

Follow these steps to set up an export job for Mapp. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Mapp**.
2.  Select the **Audience Export** job type from the list.
3.  Select the authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![mapp\_export\_configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6a2c28579f47c922/92284b954e8fe392dd6c4fea/img-0194.png)
8.  From the **Identifier Field** input, select the field that contains a user's identifier.
9.  In the **Group ID** text box, enter the Mapp Group ID you wish to export to.
10.  (optional) Select the **Enable Dynamic Attributes** checkbox to select to create member attributes dynamically in Mapp.
11.  (optional) In the **Dynamic Attribute Prefix** text box, enter enter the custom dynamic attribute prefix associated with your Group ID. Value must end with '\\\_'. If Enable Dynamic Attributes is selected and this is left blank, the Group ID will be used as the prefix.
12.  (optional) In the **Mapp Attribute Name** text box, enter enter the name of the Mapp user attribute to update profiles with. If this is empty, the workflow will attempt to use the Lytics audience slug as the attribute name. Note that unless Enable Dynamic Attributes is selected, this attribute name must be mapped to an existing member attribute in Mapp Connect.
13.  Select the **Existing Users** checkbox to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they leave or enter the audience.
14.  (optional) Select the **Backfill Only** checkbox, to do a one-time export of the selected audience. Note that if this option is selected, Existing Users must also be selected.
15.  Click **Start Export**.

## Export Audiences (SFTP)

The SFTP Export allows you to export your Lytics audiences to an SFTP server in a CSV format, which can then be consumed by Mapp and used to create lists.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: File Based Transfer Integration.
-   **Frequency**: Batch Integration daily at a specified time, or once only.
-   **Resulting data**: User Fields are written to a file. New users are added to subsequent file uploads, and no users are removed.

This integration utilizes the [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) to send user data. The file name needs to be formatted as follows: `export-lytics-{audience name}-{timestamp}.csv`. This will be transferred to the SFTP server and the file needs to contain headers in a format readable by Mapp. Once the export is started the job will:

1.  Scan the audience for all currently existing members.
2.  Write the users and any mapped fields to a CSV file.
3.  Upload the CSV file to the user-specified SFTP server.
4.  If **Keep Updated** is selected in the [configuration](#configuration-1) process, steps 1-3 will occur daily at the defined time.

### Fields

By default, Lytics exports the following fields to Mapp.

| Lytics User Field | Description | Mapp Field | Type |
| --- | --- | --- | --- |
| email/ID | Email Address or other identifier | Email | string |
| Audiences | Audiences the user is a member of | `user.CustomAttribute.SegmentMembership` | comma separated list |

### Configuration

Follow these steps to set up and configure an export of Mapp in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Mapp**.
2.  Select the **Mapp SFTP Export** job type.
3.  Select the [authorization](#authorization) you would like to use.
4.  From the **Audience** input, select the Lytics audience that contains the users to export.
5.  From the **Fields Mapping**, select the Lytics fields you want to map to Mapp fields.
6.  (Optional) Toggle **Show Advanced Options** to expand the following options.
7.  Select the **Keep Updated** checkbox to continuously run this export.
8.  From the **Time of Day** input, select the time of day to run the export. Note this is only available if **Keep Updated** is selected.
9.  From the **Timezone** input, select the timezone for time of day.
10.  Click **Start Export**. ![export setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8e6f296ec59b87f0/774520f9316d9f08f84b6d4b/img-0195.png)

## Experiences

[Lytics Experiences](/docs/lytics/experiences) supports Mapp marketing campaign single sends. This Experience can be run as stand-alone campaigns such as group emails.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/experiences) from Mapp to Lytics. During the import process, you will be asked to select an authorization. Read the [Mapp authorization documentation](#authorization) for more information.

Before you can import, you will need to provide the Group ID of the messages you wish to import. ![Map experience group ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf63d49f246f9ed2f/0b9163e410321111fbd03158/img-0196.png)

Once you've entered a Group ID, you can import eligible messages as Lytics Experiences.

Only messages prepared or sent within the last 31 days are available via [Mapp's API](https://documentation.mapp.com/display/RESTAPI/message+find). ![Mapp Experience List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd13b73ac95e687a8/ef26dee0cbd0f58876521573/img-0197.png)

### Tactics

Mapp Experiences in Lytics support the following tactic:

-   **Single Send** - Sync a Lytics audience for a one-time email blast.

The tactic for an Experience is determined by the type of email created in Mapp, [single send](https://documentation.mapp.com/display/RESTAPI/MessageType). The [import list](#experience-import) only contains NORMAL, SPLIT\\\_MAIN and SPLIT\\\_TEST messages from Mapp.

### Configuration

After importing a Mapp Experience you can configure it for activation. This tactic for Mapp Experiences has two configuration steps within the [Experience Editor](/docs/lytics/experiences):

1.  **Target** - select the target audience for your Experience.
2.  **Configure Mapp** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the following jobs based on tactic:
3.  [Export Audiences](#export-audiences) for Single Send tactics. The activation will generally function the same as the corresponding job, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.

Once you've finished configuring the Experience you can save and activate it.

### Activation

**Single Send** activation pushes users to a Mapp Group and functions similarly to the [Export Audiences](#export-audiences). Once exported, the experience audience can be assigned to your message in Mapp.

#### Single Send Tactics

When you activate this Experience, users will be pushed to a Mapp Group.

1.  Ensure that that your selected Group was populated in your Mapp account. Navigate to **Groups**.
2.  Next it's expected that you will assign this Group to your Email Message. This is the message that metrics will be collected on.
3.  Proceed with the sending process once your email message is ready.

### Metrics

Experience Metrics are collected for Mapp Experiences by launching an Experience Metrics collection workflow. Metrics are collected every hour for Mapp Messages via the [Message getStatistics API](https://documentation.mapp.com/display/RESTAPI/message+getStatistics).

Lytics metrics are recorded using the following fields provided by the [Message getStatistics API](https://documentation.mapp.com/display/RESTAPI/message+getStatistics):

-   **Reach**: `confirmedOpener` The number of confirmed people who opened your email message.
-   **Converted**: `uniqueClickers` The number of people who performed a click.
-   **Conversion Rate**: `clickToOpenRate` The percentage of people who open your email message and performed a unique click.

These events are also mapped to the Lytics user fields **Reached with Mapp Experience** and **Converted on Mapp Experience**, which are available in the audience builder so that you can create audiences of users who have been reached by or converted on your Mapp Experiences.
