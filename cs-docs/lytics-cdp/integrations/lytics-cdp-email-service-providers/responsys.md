---
title: "Responsys"
description: "Responsys, also known as Oracle Responsys, is a platform to manage interactions with your customers across email, mobile, social, display, and the web."
url: /lytics/responsys
---

# Responsys

## Responsys

## Overview

Responsys, also known as Oracle Responsys, is a platform to manage interactions with your customers across email, mobile, social, display, and the web.

Integrating Lytics with Responsys allows you to import users and their activity data to build behavioral audiences and gain Insights in Lytics. You can then export Lytics audiences back to Responsys to refine your targeting and deliver personalized messaging.

Responsys has the following job type(s):

-   [Export Audience](#export-audience)
-   [Import Activity Data](#import-activity-data)

## Authorization

If you haven't already done so, you will need to set up a Responsys account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Responsys** from the the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Responsys supports the following authorization methods:
    -   [Responsys Interact](#responsys-interact)
    -   [Responsys SFTP Server](#responsys-sftp-server)
    -   [Responsys SFTP Server with PGP](#responsys-sftp-server-with-pgp)

### Responsys Interact

Responsys Interact you will need the following credentials, username, password and endpoint URI .

1.  In the **Label** text box, enter a name for the authorization
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **Username** text box, enter your Username credential.
4.  In the **Password** password box, enter your Password credential.
5.  In the **Endpoint URI** text box, enter Endpoint URI should look like either, login2.responsys.net, login.rsys8.net, or AccountToken-api.responsys.ocs.oraclecloud.com.

### Responsys SFTP Server

Responsys SFTP Server you will need the following credentials.

1.  In the **Label** text box, enter a name for the authorization
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **Host** text box, enter your Host credential.
4.  In the **Port** numeric field, enter your Port credential.
5.  In the **Username** text box, enter your Username credential.
6.  In the **Private Key** text box, enter your Private Key credential.
7.  (optional) In the **Folder** text box, enter Folder path to place files.

### Responsys SFTP Server with PGP

Responsys SFTP Server with PGP you will need the following credentials.

1.  In the **Label** text box, enter a name for the authorization
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **Host** text box, enter your Host credential.
4.  In the **Port** numeric field, enter your Port credential.
5.  In the **Username** text box, enter your Username credential.
6.  In the **SFTP Private Key** text box, enter your SFTP Private Key credential.
7.  (optional) In the **Folder** text box, enter Folder path to place files.
8.  In the **PGP Private Key** text box, enter your PGP Private Key credential.
9.  In the **PGP Private Key Passphrase** text box, enter your PGP Private Key Passphrase credential.

## Responsys: Export Audience

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Export Audience supports the following authorization types:

-   [Responsys Interact](#responsys-interact)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)
-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time)
-   **Resulting data**:[User profiles](/docs/lytics/integrated-marketing-tools#user-profiles)

Steps/Pattern:

This integration utilizes the [Oracle Response Marketing Cloud APIs](https://docs.oracle.com/en/cloud/saas/marketing/responsys-rest-api/op-rest-api-v1.3-lists-listname-members-post.html) to send user data. Once the export is started the job will:

1.  Scan the Lytics audience and hash the selected user identifiers, i.e. email or Responsys ID, etc and create a batch of IDs
2.  Every 200 users or 10 minutes, whichever is first, the batch is sent to Responsys.
3.  The export will run continuously. As users enter or exit the Lytics audience, they will be added to a queue.

### Configuration

Follow these steps to set up and configure an export job for Responsys in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Responsys** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Lytics Audiences** input, select the Lytics audiences you'd like to export to Responsys.
7.  From the **List** input, select the list in Responsys that you'd like to export data to.
8.  From the **ID Mappings** input, map the Lytics user field to a Responsys Identifier field. At least one identifier must be mapped.
9.  From the **Match Column 1** input, select the Responsys identifier to be used as the main identifier. This identifier must be mapped above.
10.  From the **Match Column 2** input, optionally select a Responsys identifier to be used as a secondary identifier. If selected, the identifier must be mapped above.
11.  (Optional) From the **Fields Table** input, select a fields extension table to write to. You must select **List** field above in order to populate this list.
12.  (Optional) From the **Additional Fields** input, map the Lytics fields to fields from the Responsys extension table selected above.
13.  (Optional) From the **Segment Membership Table** input, select additional Lytics audiences to send to a supplemental table called LyticsSegments in Responsys that contains Lytics audience membership. The supplemental table will set up as show below, with the match IDs selected above, and SEGMENT\\\_SLUG as the primary keys of the talbe.

| \\{name\\\_of\\\_id\\\_1} (string) | \\{name\\\_of\\\_id\\\_2} (optional) | SEGMENT\\\_SLUG (string) | IS MEMBER (int) |
| --- | --- | --- | --- |
| 1234 | - | ly\\\_recent | 0 |
| 1234 | - | ly\\\_known | 1 |
| 879 | - | ly\\\_recent | 1 |

1.  (Optional) From the **Fields to Trigger** input, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be updated in Responsys.
2.  Click the **Complete** button to start the job.



## Responsys: Import Activity Data

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Import Activity Data supports the following authorization types:

-   [Responsys SFTP Server](#responsys-sftp-server)
-   [Responsys SFTP Server with PGP](#responsys-sftp-server-with-pgp)

### Integration Details

-   **Implementation Type**:[Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)
-   **Frequency**:[Batch](/docs/lytics/integrated-marketing-tools#batch)
-   **Resulting data**: [User profiles](/docs/lytics/integrated-marketing-tools#user-profiles)

Steps/Pattern:

1.  Request a single event for download.
2.  Ingest the data from the JSON files into the stream.

### Fields

The following fields are included in the default mapping of the responsys\_events stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| campaign\\\_id | rs\\\_campaign\\\_id | Responsys Campaign ID | string |
| count(event) | email\\\_bounce\\\_ct | Email Bounced | int |
| count(event) | email\\\_click\\\_ct | Email Clicked | int |
| count(event) | email\\\_complaint\\\_ct | Email Complaint | int |
| count(event) | email\\\_open\\\_ct | Email Opened | int |
| count(event) | email\\\_opt\\\_in\\\_ct | Email Opted-In | int |
| count(event) | email\\\_opt\\\_out\\\_ct | Email Opted-Out | int |
| count(event) | email\\\_sent\\\_ct | Email Sent | int |
| count(event) | sms\\\_bounce\\\_ct | SMS Failed | int |
| count(event) | sms\\\_open\\\_ct | SMS Delivered | int |
| count(event) | sms\\\_opt\\\_in\\\_ct | SMS Opted-In | int |
| count(event) | sms\\\_opt\\\_out\\\_ct | SMS Opted-Out | int |
| count(event) | sms\\\_sent\\\_ct | SMS Sent | int |
| email(email) | email unique id |  | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| map("email", epochms()) | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| max(epochms()) | email\\\_last\\\_bounce\\\_ts | Last Email Bounced | date |
| max(epochms()) | email\\\_last\\\_click\\\_ts | Email Last click | date |
| max(epochms()) | email\\\_last\\\_complaint\\\_ts | Last Email Complaint | date |
| max(epochms()) | email\\\_last\\\_open\\\_ts | Email Last open | date |
| max(epochms()) | email\\\_last\\\_opt\\\_in\\\_ts | Last Email Opted-In | date |
| max(epochms()) | email\\\_last\\\_opt\\\_out\\\_ts | Last Email Opted-Out | date |
| max(epochms()) | email\\\_last\\\_sent\\\_ts | Last Email Sent | date |
| max(epochms()) | last\\\_active\\\_ts | Last Active | date |
| max(epochms()) | sms\\\_last\\\_bounce\\\_ts | Last SMS Failed | date |
| max(epochms()) | sms\\\_last\\\_open\\\_ts | Last SMS Delivered | date |
| max(epochms()) | sms\\\_last\\\_opt\\\_in\\\_ts | Last SMS Opted-In | date |
| max(epochms()) | sms\\\_last\\\_opt\\\_out\\\_ts | Last SMS Opted-Out | date |
| max(epochms()) | sms\\\_last\\\_sent\\\_ts | Last SMS Sent | date |
| min(epochms()) | email\\\_first\\\_bounce\\\_ts | First Email Bounced | date |
| min(epochms()) | email\\\_first\\\_click\\\_ts | Email First click | date |
| min(epochms()) | email\\\_first\\\_complaint\\\_ts | First Email Complaint | date |
| min(epochms()) | email\\\_first\\\_open\\\_ts | First Email Opened | date |
| min(epochms()) | email\\\_first\\\_opt\\\_in\\\_ts | First Email Opted-In | date |
| min(epochms()) | email\\\_first\\\_opt\\\_out\\\_ts | First Email Opted-Out | date |
| min(epochms()) | email\\\_first\\\_sent\\\_ts | First Email Sent | date |
| min(epochms()) | sms\\\_first\\\_bounce\\\_ts | First SMS Failed | date |
| min(epochms()) | sms\\\_first\\\_open\\\_ts | First SMS Delivered | date |
| min(epochms()) | sms\\\_first\\\_opt\\\_in\\\_ts | First SMS Opted-In | date |
| min(epochms()) | sms\\\_first\\\_opt\\\_out\\\_ts | First SMS Opted-Out | date |
| min(epochms()) | sms\\\_first\\\_sent\\\_ts | First SMS Sent | date |
| mobile\\\_number | phone | Phone Number | string |
| riid | rs\\\_user\\\_id unique id | Responsys Id | string |
| set("email") | channels | All Channels Used | \\\[\]string |
| set(list\\\_id) | rs\\\_list\\\_id | Responsys List ID | \\\[\]string |
| set(offer\\\_category) | rs\\\_categories | Responsys Offer Categories | \\\[\]string |
| set(offer\\\_name) | rs\\\_offers | Responsys Offer Names | \\\[\]string |
| set(offer\\\_url) | email\\\_urls | Email Urls | \\\[\]string |
| set(segment\\\_info) | rs\\\_segments | Responsys Segments | \\\[\]string |
| valuect(hash(urlmain(offer\\\_url))) | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | hourly | Events By Hour | map\\\[string\]intsum |
| valuect(hourofweek()) | hour\\\_of\\\_week | Hour of Week Events | map\\\[string\]intsum |
| valuect(monthofyear()) | month\\\_of\\\_year | Month of Year Events | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Responsys in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Responsys** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  From the **Folder** input, select .
8.  From the **Account Ids** input, select account Ids are detected from the files in the folder.
9.  (Optional) In the **Custom Delimiter** text box, enter designate a custom delimiter for your file. Default delimiter is ",". A recommended custom delimiter is "|" (pipe).
10.  Click the **Start job** button to start the job.
