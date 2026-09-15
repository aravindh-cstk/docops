---
title: "Marketo"
description: "Marketo"
url: /lytics/marketo
uid: blt83468156101758e7
---

# Marketo

## Marketo

## Overview

[Marketo](http://www.marketo.com/) is a marketing automation software that provides inbound marketing, social marketing, CRM, and other related services.

Connect Marketo and Lytics to import Marketo's robust lead information, including profile and activity data, into Lytics. You can also export Lytics audiences enriched with cross-channel data and behavioral scoring to Marketo.

This integration allows you to give high-value prospects a more targeted experience, follow up on unresponsive leads with a Facebook ad, or make your media spend more efficient by removing leads that you already have from lead generation activities.

## Authorization

If you haven't already done so, you will need to set up a Marketo account before you begin the process described below. Create a new [API user](https://docs.marketo.com/display/public/DOCS/Create+an+API+Only+User+Role) in Marketo. You will need your Client ID, Client Secret, and the portion of Marketo's Endpoint after `://` and before `/rest` for the REST URL. ![Marketo REST API URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf7fe6b367f89ec9c/ff806f52a1d42ef27fc1cf15/img-0204.png)

If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Marketo** from the list of providers.
2.  Select the Marketo Client Credentials method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Client ID**.
6.  Enter your **Client Secret**.
7.  Enter your **REST URL**.
8.  Click **Save Authorization**.

## Import Audiences & Activity Data

Import leads and activity data from Marketo for use in Lytics audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration and File Based Transfer Integration
-   **Frequency**: Batch Integration daily or one time only.
-   **Resulting data**: User Profiles and User Fields.

This integration utilizes [Marketo's REST API](https://developers.marketo.com/rest-api/) to import user data. Once the import is started the job will:

1.  Create a Lead Import Job via Marketo's `/bulk/v1/leads/export/create.json` [endpoint](https://developers.marketo.com/rest-api/bulk-extract/).
2.  If email and web activity are configured in the import, it will create separate jobs for each.
3.  Check the status of the job(s) periodically via the `/bulk/v1/leads/export/{exportId}/status.json` endpoint.
4.  When a job's status is returned as "Completed", retrieve the data via the `/bulk/v1/leads/export/{exportId}/file.json` endpoint and import the data into the appropriate stream.

### Fields

The following fields are included in the default mapping of the `mo_user` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| facebookId | fbuid `unique id` | Facebook Id | string |
| email | email `unique id` | Email | string |
| id | mo\\\_user\\\_id `unique id` | Marketo: User Id | string |
| address | address | Address | string |
| billingCity | billing\\\_city | Billing City | string |
| billingCountry | billing\\\_country | Billing Country | string |
| billingPostalCode | billing\\\_postal\\\_code | Billing Postal Code | string |
| billingState | billing\\\_state | Billing State | string |
| billingStreet | billing\\\_street | Billing Street | string |
| dateOfBirth | birthdate | Birthdate | date |
| city | city | City | string |
| numberOfEmployees | company\\\_employees | Company Employees | int |
| industry | company\\\_industry | Company Industry | string |
| company | company\\\_name | Company Name | string |
| annualRevenue | company\\\_revenue | Company Annual Revenue | number |
| sicCode | company\\\_sic | Company SIC Code | string |
| website | company\\\_url | Company URL | string |
| country | country | Country | string |
| department | department | Department in Company | string |
| doNotCall | do\\\_not\\\_call | Do Not Call Status | string |
| doNotCallReason | do\\\_not\\\_call\\\_reason | Do Not Call Reason | string |
| email | emaildomain | Email Domain | string |
| fax | fax | Fax Number | string |
| facebookDisplayName | fb\\\_name | Facebook Name | string |
| facebookProfileURL | fb\\\_photo | Facebook Profile Photo | string |
| firstName | first\\\_name | First Name | string |
| title | job\\\_title | Job Title | string |
| lastName | last\\\_name | Last Name | string |
| linkedInId | li\\\_id | LinkedIn Id | string |
| linkedInDisplayName | li\\\_name | LinkedIn Name | string |
| linkedInPhotoURL | li\\\_photo | LinkedIn Photo | string |
| anonymousIP | mo\\\_anonymous\\\_ip | Marketo: Anonymous IP | \\\[\]string |
| createdAt | mo\\\_created\\\_at | Marketo: Created Date | date |
| leadRevenueCycleModelId | mo\\\_cycle\\\_model | Marketo: Cycle Model | string |
| leadScore | mo\\\_lead\\\_score | Marketo: Lead Score | string |
| leadSource | mo\\\_lead\\\_source | Marketo: Lead Source | string |
| leadStatus | mo\\\_lead\\\_status | Marketo: Lead Status | string |
| leadPartitionId | mo\\\_partition\\\_id | Marketo: Partition ID | string |
| priority | mo\\\_priority | Marketo: Priority | string |
| acquisitionProgramId | mo\\\_program\\\_id | Marketo: Program Id | string |
| originalReferrer | mo\\\_referrer | Marketo: Referrer | string |
| relativeScore | mo\\\_relative\\\_score | Marketo: Relative Score | string |
| sfdcType | mo\\\_sfdc\\\_type | Marketo: SFDC Type | string |
| leadRevenueStageId | mo\\\_stage\\\_id | Marketo: Stage Id | string |
| updatedAt | mo\\\_updated\\\_at | Marketo: Updated Date | date |
| urgency | mo\\\_urgency | Marketo: Urgency | string |
| mobilePhone | mobile\\\_phone | Mobile Phone Number | string |
| phone | phone | Phone Number | string |
| postalCode | postal\\\_code | Zip | string |
| salutation | salutation | Salutation | string |
| state | state | State | string |
| twitterDisplayName | tw\\\_name | Twitter Name | string |
| twitterPhotoURL | tw\\\_photo | Twitter Photo | string |
| twitterId | twuser\\\_id | Twitter Id | string |



The following fields are included in the default mapping of the `mo_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| leadId | mo\\\_user\\\_id `unique id` | Marketo: User Id | string |
|  | channels | All Channels Used | \\\[\]string |
| activityDate | created\\\_ts | Global: First Active | date |
| activityDate | email\\\_firstbounced\\\_ts | Marketo: First Time Email Bounced | date |
| activityDate | email\\\_firstclick\\\_ts | Email: First Time Email Clicked | date |
| activityDate | email\\\_firstdelivered\\\_ts | Marketo: First Time Email Delivered | date |
| activityDate | email\\\_firstopen\\\_ts | Email: First Time Email Opened | date |
| activityDate | email\\\_firstsent\\\_ts | Marketo: First Time Email Sent | date |
| activityDate | email\\\_firstsoftbounce\\\_ts | Marketo: First Time Email Bounced (soft) | date |
| activityDate | email\\\_firstunsub\\\_ts | Marketo: First Time Email Unsubscribed | date |
| activityDate | email\\\_lastbounced\\\_ts | Marketo: Last Time Email Bounced | date |
| activityDate | email\\\_lastclick\\\_ts | Email: Last Time Email Clicked | date |
| activityDate | email\\\_lastdelivered\\\_ts | Marketo: Last Time Email Delivered | date |
| activityDate | email\\\_lastopen\\\_ts | Email: Last Time Email Opened | date |
| activityDate | email\\\_lastsent\\\_ts | Marketo: Last Time Email Sent | date |
| activityDate | email\\\_lastsoftbounce\\\_ts | Marketo: Last Time Email Bounced (soft) | date |
| activityDate | email\\\_lastunsub\\\_ts | Marketo: Last Time Email Unsubscribed | date |
| activityDate | hourly | Global: Hourly Events | map\\\[string\]intsum |
| activityDate | hourofweek | Global: Hour of Week Events | map\\\[string\]intsum |
| activityDate | last\\\_active\\\_ts | Last Active on Any Channel | date |
|  | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| activityDate | mo\\\_created\\\_ts | Marketo: First Active | date |
| primaryAttributeValue | mo\\\_email\\\_bounced | Marketo: Emails Bounced | \\\[\]string |
| activityTypeId | mo\\\_email\\\_bounced\\\_count | Marketo: Count of Email Bounced | int |
| activityTypeId | mo\\\_email\\\_click\\\_count | Marketo: Count of Emails Clicked | int |
| primaryAttributeValue | mo\\\_email\\\_clicked | Marketo: Emails Clicked | \\\[\]string |
| primaryAttributeValue | mo\\\_email\\\_delivered | Marketo: Emails Delivered | \\\[\]string |
| activityTypeId | mo\\\_email\\\_delivered\\\_count | Marketo: Count of Emails Delivered | int |
| primaryAttributeValue | mo\\\_email\\\_opened | Marketo: Emails Opened | \\\[\]string |
| activityTypeId | mo\\\_email\\\_opened\\\_count | Marketo: Count of Emails Opened | int |
| primaryAttributeValue | mo\\\_email\\\_sent | Marketo: Emails Sent | \\\[\]string |
| activityTypeId | mo\\\_email\\\_sent\\\_count | Marketo: Count of Emails Sent | int |
| activityTypeId | mo\\\_email\\\_soft\\\_bounce\\\_count | Marketo: Count of Email Bounced (soft) | int |
| primaryAttributeValue | mo\\\_email\\\_soft\\\_bounced | Marketo: Emails Bounced (soft) | \\\[\]string |
| primaryAttributeValue | mo\\\_email\\\_unsub | Marketo: Emails Unsubscribed | \\\[\]string |
| activityTypeId | mo\\\_email\\\_unsub\\\_count | Marketo: Count of Unsubscribes | int |
| activityDate | mo\\\_first\\\_web\\\_click\\\_ts | Marketo: First Time Clicked Web | date |
| activityDate | mo\\\_first\\\_web\\\_submit\\\_ts | Marketo: First Time of Web Form Submit | date |
| activityDate | mo\\\_first\\\_web\\\_visit\\\_ts | Marketo: First Time Visited Web | date |
| activityDate | mo\\\_firstclick\\\_ts | Marketo: First Time Email Clicked | date |
| activityDate | mo\\\_firstopen\\\_ts | Marketo: First Time Email Opened | date |
| activityDate | mo\\\_last\\\_active\\\_ts | Marketo: Last Active | date |
| activityDate | mo\\\_last\\\_web\\\_click\\\_ts | Marketo: Last Time Clicked Web | date |
| activityDate | mo\\\_last\\\_web\\\_submit\\\_ts | Marketo: Last Time of Web Form Submit | date |
| activityDate | mo\\\_last\\\_web\\\_visit\\\_ts | Marketo: Last Time Visited Web | date |
| activityDate | mo\\\_lastclick\\\_ts | Marketo: Last Time Email Clicked | date |
| activityDate | mo\\\_lastopen\\\_ts | Marketo: Last Time Email Opened | date |
| primaryAttributeValue | mo\\\_web\\\_click | Marketo: Web Pages Clicked | \\\[\]string |
| activityTypeId | mo\\\_web\\\_click\\\_count | Marketo: Count of Web Clicks | int |
| primaryAttributeValue | mo\\\_web\\\_form\\\_submit | Marketo: Web Forms Submitted | \\\[\]string |
| activityTypeId | mo\\\_web\\\_form\\\_submit\\\_count | Marketo: Count of Web Form Submit | int |
| primaryAttributeValue | mo\\\_web\\\_visit | Marketo: Web Pages Visited | \\\[\]string |
| activityTypeId | mo\\\_web\\\_visit\\\_count | Marketo: Count of Web Visits | int |
| activityDate | yymm | Global: Events By Year/Month | map\\\[string\]intsum |

### Configuration

Follow these steps to set up an import leads and activities job for Marketo. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Marketo** from the list of providers.
2.  Select the **Import Audiences & Activity Data** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) Toggle **Show Advanced Options**.
7.  Select **Keep Updated** to continuously import leads and activity from Marketo.
8.  Select the **Activity Types** to configure the acticity types to import.
9.  Select the **Partition IDs to Import** to configure Marketo partition IDs to import by adding them to the left column. If no partition IDs are selected, data from all partitions will be imported.
10.  Enter the **Import Fields with Prefix** to import all user fields that start with this value. **NOTE**: This will be in addition to all the default user fields and is a case-sensitive value.
11.  Enter the **Maximum Number of Calls** to make to Marketo per day. By default, accounts have 10,000 calls available per day so Lytics sets this at 9,500. For more information see [Marketo Integration Best Practices](http://developers.marketo.com/rest-api/marketo-integration-best-practices/).
12.  Click **Start Import**. ![marketo-import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9615d913d227ad8b/9fb6de5fbb17ff298e935cba/img-0205.png)

### Import Limitations

#### File Size

Lytics uses the [Marketo Bulk API](http://developers.marketo.com/rest-api/bulk-extract/), which allows an import of activity and leads data via large CSV files. However, Marketo restricts the amount of data Lytics can import daily. The default value of this limit is 500 MB per day.

For example, if your Marketo account generates a 700 MB file while importing leads and activities, the first 500 MB will be imported the first day and the remaining 200 MB will be imported when the daily limit resets on the following day.

If daily updates are critical for your use cases, spikes in activity volume may affect how timely Lytics can import data. In such scenarios, you can increase the daily limits for your Marketo account by contacting your [Marketo customer success manager](https://nation.marketo.com/community/product_and_support/blog/2019/03/23/api-limits-vs-bulk-extract-limits).

#### Filter Field

When data is imported from Marketo, it is queried with one of the fields:

-   `createdAt`: Only new leads will be received. Leads with updated fields will be ignored.
-   `updatedAt`: Each time the import runs it will receive leads based on the time they were updated.

**NOTE**: Importing based on `updateAt` is preferred so that any new changes are received. However, `updatedAt` is not available as a filtering field for all Marketo accounts. If `createdAt` is the only filter field available, this means that any updates made to existing leads _**will not**_ be reflected in Lytics. See Marketo's documentation regarding [Bulk Lead Extract Filters](http://developers.marketo.com/rest-api/bulk-extract/bulk-lead-extract/#filters) and contact their support to discuss gaining access to the `updateAt` filter.

## Export Audiences

Export Lytics audiences to Marketo to refine your targeting and personalization efforts for high-value prospects.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration and Batch Integration (every 10 minutes).
-   **Resulting data**:

Lytics users that are members of the selected audiences are converted into [Marketo leads](https://developers.marketo.com/rest-api/lead-database/) in your Marketo account.

This integration utilizes the [Marketo REST API](https://developers.marketo.com/rest-api/) to send user data. Once the export is started the job will:

1.  Scan the selected Lytics audience.
2.  For each user in the audience, it writes that user's identifier and any mapped fields to a CSV file.
3.  Upload the CSV file using Marketo's [Bulk Import api](https://developers.marketo.com/rest-api/bulk-import/bulk-lead-import/) and will create the bulk import job in Marketo. The export job will then go to sleep for 10 minutes to let Marketo finish the bulk import job.
4.  The export job continues to monitor bulk import job using Marketo's [job status api](https://developers.marketo.com/rest-api/bulk-import/bulk-lead-import/#polling_job_status). The export does not send any user unless the previous Marketo bulk import job is finished.
5.  The export job will run continuously. As users enter/exit the Lytics audience, they will be written to a file. The file will be sent to Marketo every 10 minutes or when the file reaches 10 MB in size.

### Fields

You can export any Lytics user fields to [Marketo Lead Fields](https://developers.marketo.com/rest-api/lead-database/fields/). Lytics allows you to select user fields as part of the workflow configuration described below.

### Configuration

Follow these steps to set up an export job for Marketo. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Marketo** from the list of providers.
2.  Select the **Export Audiences** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audience** to export.
7.  Select the **Identifier Field** to identify users in Marketo.
8.  Select the **Field Mappings** to map fields from Lytics to Marketo by selecting the Lytics field on the left, and Marketo Leads field on the right.
9.  (Optional) Select the **Destination List** to configure where Marketo fields will be exported.
10.  (Optional) Select **Existing Users** checkbox to send users who already exist in the selected Lytics audience.
11.  (Optional) Select the **Audience Membership Field** to configure the field name where audience membership information will be stored in Marketo.
12.  Click **Start Export**. ![marketo-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2b690866dc26f931/5dbe06f455631d2d601415fd/img-0206.png)
