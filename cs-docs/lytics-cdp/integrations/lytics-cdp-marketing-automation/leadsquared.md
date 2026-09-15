---
title: "Leadsquared"
description: "LeadSquared helps businesses design, organize and analyze their daily marketing activities in one place."
url: /lytics/leadsquared
uid: blt93d9171468e3a102
---

# Leadsquared

## Leadsquared

## Overview

[LeadSquared](https://www.leadsquared.com/) helps businesses design, organize and analyze their daily marketing activities in one place.

Integrating Lytics with LeadSquared can enable cross-channel profile resolution, expedited marketing activation for your Leads. Lytics can import the Leads stored in LeadSquared. Using your Lead data from LeadSquared with the Lytics Canvas can allow you to create orchestrated, cross-channel touchpoints for each part of your Lead funnel.

## Authorization

If you haven't already done so, you will need to setup an LeadSquared account before you begin the process described below. Each account has its own [unique API access key and access secret](https://help.leadsquared.com/how-do-i-obtain-api-access-keys-in-leadsquared/), which you will need to have available to authorize this integration.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **LeadSquared** from the list of providers.
2.  Select the LeadSquared method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Access Key**. This should be your LeadSquared API username.
6.  Enter your **Secret Key**. This should be your LeadSquared API password.
7.  Select the **Account Region** your LeadSquare account was created in. This determines which API host Lytics will connect with.
8.  Click **Save Authorization**.

![LeadSquared Authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am120c009aac690b80/4fd2069a194dbec26379b504/Screenshot_from_2019-06-11_11-41-41.png)

## Import Leads

Import your Leads from LeadSquared to Lytics for a richer full-picture profile of your Leads. You can utilize this data to power your communications with your Leads in different channels, or to gain powerful insights on how your Leads are likely to behave.

**Note:** You are required to run this import job before you can update existing Leads via the [lead export](#export-leads) job.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: One time Batch Integration, or hourly continuous updates.
-   **Data imported**: New User Profiles with Lead data stored in User Fields.

This integration utilizes the [LeadSquared API](https://apidocs.leadsquared.com/) to retrieve Lead user data. On each run of the job, it will:

1.  [Get leads and lead data](https://apidocs.leadsquared.com/get-leads-by-date-range/) from the user-configurable number of days in the past until now.
2.  Lead data is ingested into the leadsquared\_leads data stream. The data that is imported depends on the fields selected in the user configuration.
3.  The job will continue to [get leads](https://apidocs.leadsquared.com/get-leads-by-date-range/) every hour if the **Keep Updated** configuration is selected.

### Fields

The following are the default fields that if selected are imported and mapped:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| CanUpdate | leadsquared\\\_can\\\_update | LeadSquared can update | bool |
| Company | company | Company | string |
| ConversionReferrerURL | leadsquared\\\_conversion\\\_referrer\\\_url | LeadSquared conversion referrer url | string |
| CreatedBy | leadsquared\\\_created\\\_by | LeadSquared created by | string |
| CreatedByName | leadsquared\\\_created\\\_by\\\_name | LeadSquared created by name | string |
| CreatedOn | leadsquared\\\_created\\\_on | LeadSquared created on | string |
| EmailAddress | email unique id | Email Address | string |
| EngagementScore | leadsquared\\\_engagement\\\_score | LeadSquared engagement score | int |
| FirstName | first\\\_name | First name | string |
| JobTitle | job\\\_title | Job title | string |
| LastName | last\\\_name | Last name | string |
| LastVisitDate | leadsquared\\\_last\\\_visit\\\_date | LeadSquared last visit date | date |
| LeadAge | leadsquared\\\_lead\\\_age | LeadSquared lead age | int |
| LeadConversionDate | leadsquared\\\_lead\\\_conversion\\\_date | LeadSquared lead conversion date | date |
| Mobile | mobile\\\_phone | Mobile Phone | string |
| ModifiedBy | leadsquared\\\_modified\\\_by | LeadSquared modified by | string |
| ModifiedByName | leadsquared\\\_modified\\\_by\\\_name | LeadSquared modified by name | string |
| ModifiedOn | leadsquared\\\_modified\\\_on | LeadSquared modified on | string |
| Notes | leadsquared\\\_notes | LeadSquared notes | string |
| Origin | leadsquared\\\_origin | LeadSquared origin | string |
| OwnerId | leadsquared\\\_owner\\\_id | LeadSquared owner id | string |
| OwnerIdEmailAddress | leadsquared\\\_ownder\\\_id\\\_email\\\_address | LeadSquared owner id email address | string |
| OwnerIdName | leadsquared\\\_owner\\\_id\\\_name | LeadSquared owner id name | string |
| Phone | phone | Phone | string |
| ProspectID | leadsquared\\\_prospect\\\_id unique id | LeadSquared prospect ID | string |
| ProspectStage | leadsquared\\\_prospect\\\_stage | LeadSquared prospect stage | string |
| Score | leadsquared\\\_score | LeadSquared score | int |
| Source | leadsquared\\\_source | LeadSquared source | string |
| SourceCampaign | leadsquared\\\_source\\\_campaign | LeadSquared source campaign | string |
| SourceReferrer | leadsquared\\\_source\\\_referrer | LeadSquared source referrer | string |
| SourceReferrerURL | leadsquared\\\_source\\\_referrer\\\_url | LeadSquared source referrer url | string |
| TimeZone | timezone | Timezone | string |
| Website | leadsquared\\\_website | LeadSquared website | string |

#### Additional Fields

Based on your [configuration](#configuration) of the **Lead Fields** option, you may want additional fields mapped beyond the defaults listed above, contact [customer support](https://support.lytics.com/) for assistance.

### Configuration

Follow these steps to set up an import leads job for LeadSquare. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **LeadSquared** from the list of providers.
2.  Select the **Import Leads** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Lead Fields** to configure the fields to import. To ensure every field gets mapped you will need to contact your Lytics account manager about getting non-default fields mapped.

**Note**: LeadSquared currently has issues parsing or otherwise processing requests that include too many fields (these fields are received from the Meta Data [Endpoint](https://apidocs.leadsquared.com/meta-data/)), so including every field in the import may make the worfklow fail. You could choose to import half the fields and then the other half if you would like all the fields to be included.

1.  Enter the **Backfill Days** to configure the number of days in the past that you want to start importing LeadSquared Leads. Default is 90 days in the past.
2.  (Optional) Select **Keep Updated** to run the import hourly.
3.  Click **Start Job**.

![leadsquared-import-config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd81ebd3297363103/238fc6d9c7886df794fc7d40/leadsquared-import-config.jpg)

## Export Leads

Enrich your Leads in LeadSquared with cross-channel data from your Lytics user profiles. Data from Lytics is updated in real-time, and can help power unique [lead automations](https://help.leadsquared.com/how-to-create-an-automation/) to personalize interactions with your Leads based on their activity with your brand.

**Note:** You are required to run the [import leads](#import-leads) job before you can update existing Leads via this job.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Techinique**: REST API Integration - Audience Trigger Integration .
-   **Frequency**: Real-time Integration with an optional one-time Backfill of existing users.
-   **Resulting Data**: Updates to existing Leads within LeadSquared with Lytics user field data. This job does not create new records for users that are not already Leads within LeadSquared.

This integration utilizes the [LeadSquared API](https://apidocs.leadsquared.com/) to update a Leads fields. Once the user initiates an export, the job will receive real-time updates when a user enters or exits the audience selected. For each user to export, regardless if the user is being added as part of the backfill, or they're entering/exiting the audience in realtime, it will:

1.  Check if the user has the LeadSquared prospect ID user field.
2.  If the LeadSquared prospect ID field exists, it will [update the Lead](https://apidocs.leadsquared.com/update-a-lead/) using the prospect ID with the mapped fields you selected in the [configuration step](#configuration-1).
3.  Users without a LeadSquared prospect ID will be dropped by the job. As such, you should define your audience with a filter to only include users with the LeadSquared prospect ID field from the [LeadSquared Import](/documentation/product/integrations/leadsquared/import-leads).

### Fields

Fields that are exported for this integration are entirely defined by the **Mapped Fields** step in the [configuration](#configuration).

### Configuration

Follow these steps to set up an export leads job for LeadSquare. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **LeadSquared** from the list of providers.
2.  Select the **Export Leads** from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/leadsquared/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audience** to export. The Audience must only includes users with a LeadSquared prospect ID.
7.  Select the **Mapped Fields** to update. Currently only scalar fields in Lytics (strings, integers, floats, booleans) are supported.
8.  Select **Post Updated Lead** to trigger automation, webhooks, or rules and notifications based on updating a lead in LeadSquared. By default, these will not be triggered when a lead is updated.
9.  Select **Existing Users** to configure a Backfill. This will update all existing users in the audience instead of only updating users who enter the audience after the workflow begins.
10.  Click **Start Job**.

![Configure Export LeadSquared](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8539130ad79f5d02/8997df8559a4c52d8e7603b8/configure-export-leadsquared.jpg)
