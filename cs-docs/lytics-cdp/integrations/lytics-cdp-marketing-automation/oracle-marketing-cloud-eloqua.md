---
title: "Oracle Marketing Cloud: Eloqua"
description: "Oracle Marketing Cloud: Eloqua is a business-to-business (B2B) marketing automation tool that supports lead scoring and email marketing campaigns."
url: /lytics/oracle-marketing-cloud-eloqua
uid: blt2347993424b454f7
---

# Oracle Marketing Cloud: Eloqua

## Oracle Marketing Cloud: Eloqua

## Overview

[Oracle Marketing Cloud: Eloqua](https://www.oracle.com/cx/marketing/automation/) is a business-to-business (B2B) marketing automation tool that supports lead scoring and email marketing campaigns.

Integrating Lytics with Oracle Eloqua allows you to import your Oracle Eloqua contacts and activity data into Lytics to build rich, cross-channel audiences. You can also export audiences of users to Eloqua for more precise targeting on your email marketing campaigns, or export Lytics profile data and audience membership to an Eloqua Custom Data Object.

## Authorization

If you haven't already done so, you will need to set up an Oracle Eloqua account before you begin the process described below. Oracle Eloqua supports OAuth2, which allows you to simply enter your username and password to connect Lytics with Oracle Eloqua.

If IP restrictions are enabled for your Oracle Eloqua account, you will need to have an administrator add Lytics' IP addresses to the approved list. Contact your Account Manager for the current list of Lytics' IP addresses. You can read more on [Oracle Eloqua customizing access to an IP allowlist](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/ClientSecurityConfiguration/Tasks/IPAllowlistConfiguration.htm).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Oracle Marketing Cloud** from the list of providers.
2.  Select the **Eloqua OAuth2** method for authorization.
3.  Enter your Oracle Eloqua username and password into the login screen.
4.  Enter a **Label** to identify your authorization.
5.  (Optional) Enter a **Description** for further context on your authorization.
6.  Click **Save Authorization**.

You are now ready to start an import or export job with Oracle Eloqua.

## Import Audiences & Activity Data

By importing your Oracle Eloqua contacts and activity into Lytics, you'll be able to apply Lytics' powerful insights to your email campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Data is imported once as a Batch Integration, or continuously on an hourly basis.
-   **Resulting data**: User Profiles and User Fields.

This integration uses the [Oracle Marketing Cloud REST APIs](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/index.html) to import user contact and activity data. Once the import is started the job will:

1.  Create a [contact export definition](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-contacts-exports-post.html) to initiate a contact data export.
2.  For each activity type, create an [activity export definition](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-activities-exports-post.html) to initiate an activity data export.
3.  Create a contact [import sync](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-syncs-post.html) to synchronize the outgoing contact data into a temporary staging area.
4.  Iterate over contact data and reflect all contact changes on the eloqua\_contacts stream.
5.  For each activity type, create an activity [import sync](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-syncs-post.html) to synchronize the outgoing activity data into a temporary staging area.
6.  Iterate over activity data and reflect all activity changes on the eloqua\_activity stream.
7.  If configured to import Eloqua visitor data, [get visitor data](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-rest-2.0-data-visitors-get.html) since last import and add new visitor data to eloqua\_visitors stream.
8.  Schedule next import.

### Fields

The following fields are included in the default mapping of the eloqua\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| AssetId | IF eq(AssetType, "Email") | eloqua\\\_email\\\_id | Eloqua: Last Email ID | string |
| ContactIdExt |  | eloqua\\\_contact\\\_id unique id | Eloqua: Contact ID | string |
| EmailSendType |  | eloqua\\\_email\\\_send\\\_type | Eloqua: Last Email Sent Type | string |
| IpAddress |  | ip\\\_address | IP Address | string |
| count(ActivityType) | IF eq(ActivityType, "EmailClickthrough") | eloqua\\\_clickct | Eloqua: Click Count | int |
| count(ActivityType) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_openct | Eloqua: Open Count | int |
| count(ActivityType) | IF eq(ActivityType, "EmailSend") | eloqua\\\_sendct | Eloqua: Send Count | int |
| email(EmailAddress) |  | email unique id | Email Address | string |
| emaildomain(EmailAddress) |  | email\\\_domain | Email Domain | string |
| max(epochms()) | IF eq(ActivityType, "EmailClickthrough") | eloqua\\\_lastclick\\\_ts | Eloqua: Last Click | date |
| max(epochms()) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_lastopen\\\_ts | Eloqua: Last Open | date |
| max(epochms()) | IF eq(ActivityType, "Unsubscribe") | eloqua\\\_unsub\\\_ts | Eloqua: Unsub Date | number |
| max(epochms()) | IF ActivityType IN ("EmailOpen", "EmailClickthrough") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(ActivityType, "EmailClickthrough") | eloqua\\\_firstclick\\\_ts | Eloqua: First Click | date |
| min(epochms()) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_firstopen\\\_ts | Eloqua: First Open | date |
| set("email") | IF ActivityType IN ("EmailOpen", "EmailClickthrough") | channels | All Channels Used | \\\[\]string |
| set(CampaignId) |  | eloqua\\\_campaign\\\_ids | Eloqua: Campaign the send was a part of | \\\[\]string |
| set(EmailWebLink) |  | eloqua\\\_email\\\_urls | Eloqua Email URLs | \\\[\]string |
| valuect(ActivityType) |  | eloqua\\\_events | Eloqua Events | map\\\[string\]intsum |
| valuect(hash(urlmain(EmailWebLink))) | IF ActivityType IN ("EmailOpen", "EmailClickthrough") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_hourlyopen | Eloqua: Hourly Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_hourofweek | Eloqua: Hour of Week Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(ActivityType, "EmailOpen") | eloqua\\\_monthly | Eloqua: Opens By Month | map\\\[string\]intsum |

The following fields are included in the default mapping of the eloqua\_contacts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| business\\\_phone | business\\\_phone | Business Phone Number | string |
| city | city | City | string |
| company | company | Company | string |
| company\\\_revenue | company\\\_revenue | Company Annual Revenue | number |
| company\\\_size | company\\\_size | Company Size | string |
| country | country | Country | string |
| date\\\_created | eloqua\\\_date\\\_created | Eloqua: Contact Created Date | date |
| date\\\_modified | eloqua\\\_date\\\_updated | Eloqua: Contact Last Update Date | date |
| eloqua\\\_contact\\\_id | eloqua\\\_contact\\\_id unique id | Eloqua: Contact ID | string |
| email(email\\\_address) | email unique id | Email Address | string |
| emaildomain(email\\\_address) | email\\\_domain | Email Domain | string |
| fax | fax | Fax Number | string |
| first\\\_and\\\_last\\\_name | name | Full Name | string |
| first\\\_name | first\\\_name | First Name | string |
| industry | industry | Industry | string |
| isbounced | eloqua\\\_bounced | Eloqua: Contact Bounced | string |
| issubscribed | eloqua\\\_subscribed | Eloqua: Contact Subscribed | string |
| job\\\_role | employment\\\_role | Work Role | string |
| last\\\_name | last\\\_name | Last Name | string |
| mobile\\\_phone | mobile\\\_phone | Mobile Phone Number | string |
| set(lead\\\_id) | salesforce\\\_lead\\\_ids unique id | Salesforce: Lead Ids | \\\[\]string |
| set(sfdc\\\_contact\\\_id) | salesforce\\\_contact\\\_ids unique id | Salesforce: Contact Ids | \\\[\]string |
| state\\\_or\\\_province | state | State | string |
| title | job\\\_title | Job Title | string |
| zip\\\_or\\\_postal\\\_code | postal\\\_code | Postal Code | string |

The following fields are included in the default mapping of the eloqua\_visitors stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| contactId | eloqua\\\_contact\\\_id unique id | Eloqua: Contact ID | string |
| epochms() | lastvisit\\\_ts | Last Visit | date |
| max(epochms()) | last\\\_active\\\_ts | Last Active | date |
| set(externalId) | eloqua\\\_external\\\_ids unique id | Eloqua: External IDs | \\\[\]string |
| set(visitorId) | eloqua\\\_visitor\\\_ids unique id | Eloqua: Visitor IDs | \\\[\]string |
| type | eloqua\\\_visit\\\_type | Last Eloqua Web Visit Type | string |

### Configuration

Follow these steps to set up and configure an import job for Oracle Marketing Cloud: Eloqua in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Oracle Marketing Cloud** from the list of providers.
2.  Select the **Import Audiences and Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Select the **Activity** checkbox to import Eloqua user activity.
5.  (Optional) In the **Activity Since** text box, specify the date to import activity from. Please use the format yyyy-mm-dd, e.g. 2023-01-17
6.  Select the **Contacts** checkbox to import Eloqua contact data.
7.  From the **Contact Fields** input, select the Contact fields to import. Leave empty to import all fields. If contacts have more than 250 fields, a set of fields must be specified. An identifier must be included in the selection of fields to ensure that data is properly stitched onto a user profile in Lytics.
8.  Using the **Contacts Import Interval** dropdown, specify how often to import contacts. Default is Hourly.
9.  (Optional) In the **Contacts Since** text box, specify the date to import contacts from. Please use the format yyyy-mm-dd, e.g. 2023-01-17
10.  Select the **Visitors** checkbox to import Eloqua visitor data.
11.  Using the **Visitors Import Interval** dropdown, specify how often to import visitors data. Default is Hourly.
12.  (Optional) In the **Visitors Since** text box, specify the date to import visitors data from. Please use the format yyyy-mm-dd, e.g. 2023-01-17
13.  Select the **Keep Updated** checkbox to continuously import contact and activity data.
14.  Click **Start Import**.

**Note:** This job configuration must include a Since date associated to the object(s) you wish to import to avoid causing errors in the job.

![eloqua-import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd4394f9280d1e6fb/6ef8e4966cf2e6046abd6170/eloqua-import.png)

## Export Audiences

Export Lytics Audiences to Oracle Eloqua to deliver marketing campaigns based on your targeting criteria defined in Lytics such as cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration every 5 minutes, or when the number of audience members to export exceeds 1,000.
-   **Resulting data**: Lytics audience(s) in Oracle Eloqua.

This integration utilizes [Oracle Eloqua APIs](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-contacts-imports-id-data-post.html) to export Lytics Audiences into Oracle Elqoua. On each run of the job, it will sync your selected Lytics Audiences with your Eloqua account.

### Fields

The following fields are included in the default mapping to Oracle Eloqua.

| Lytics User Field | Description | Oracle Marketing Cloud: Eloqua Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

### Configuration

Follow these steps to set up and configure an export job for Oracle Marketing Cloud: Eloqua in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Oracle Marketing Cloud** from the list of providers.
2.  Select the **Export to Eloqua** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Select the audiences to export.
5.  From the **ID Field** input, select the ID field in Lytics that will get mapped to an identifying field in Eloqua.
6.  From the **Map Fields** input, map all the fields from Lytics to Eloqua by selecting the Lytics field on the left and its Eloqua destination on the right.
7.  Click **Start Export**.

![oracle-eloqua-export-configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ec54d5c8bc8f493/8ef332b697401164eaff2729/oracle-eloqua-export-configuration.png)

## Export to Custom Data Object

Export Lytics profile data and audience membership to an Oracle Eloqua [Custom Data Object](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/CustomObjects/CustomObjects.htm) (CDO). Unlike the audience export, which writes to a contact list, this job populates a dedicated object — keeping Lytics-computed data such as scores, attributes, and audience flags off the master contact record while remaining usable in Eloqua's campaign canvas, dynamic content, and reporting.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration every 5 minutes, or when the number of records to export exceeds 1,000.
-   **Resulting data**: Lytics profile data and audience membership in an Oracle Eloqua Custom Data Object.

This integration uses the [Oracle Eloqua REST APIs](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/index.html) to populate a Custom Data Object. One record is written per contact, identified by the field you select, and upserted so each contact keeps a single, current record. As audience membership changes, the job will:

1.  Look up the account's [Custom Data Objects](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-customobjects-get.html) and their [fields](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-customobjects-parentid-fields-get.html) to resolve the configured object and mappings.
2.  For each selected audience, ensure a membership field named lytics\_{audience\_slug} exists on the object, creating any that are missing by [updating the Custom Data Object](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-rest-2.0-assets-customobject-id-put.html).
3.  Create an [import definition](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/op-api-bulk-2.0-customobjects-parentid-imports-post.html) on the Custom Data Object for the mapped profile fields, and one per audience for its membership field.
4.  Upload records to each import definition, which Eloqua syncs into the Custom Data Object.

**Note:** Create the Custom Data Object in Eloqua before configuring this job. Lytics populates the object and adds the lytics\_{audience\_slug} membership fields automatically, but does not create the object itself.

### Fields

In addition to any profile fields you map, the following are always written to the Custom Data Object:

| Lytics User Field | Custom Data Object Field | Description | Type |
| --- | --- | --- | --- |
| ID field (e.g. email) | Identifier field you select | Uniquely identifies each record; the same value upserts one record | string |
| audience membership | lytics\_{audience\_slug} (auto-created) | true while the contact is in the audience, false when they exit | string |

### Configuration

Follow these steps to set up and configure an export job for Oracle Marketing Cloud: Eloqua in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Oracle Marketing Cloud** from the list of providers.
2.  Select the **Export to Custom Data Object** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Select the audiences to export.
5.  From the **Custom Data Object** input, select the object to populate.
6.  From the **ID Field** input, select the Lytics field whose value identifies each record (for example, email).
7.  From the **CDO Identifier Field** input, select the Custom Data Object field that the ID Field is written to; Eloqua uses it as the unique record identifier.
8.  (Optional) From the **Map Fields** input, map additional Lytics fields to Custom Data Object fields by selecting the Lytics field on the left and its destination on the right.
9.  Click **Start Export**.
