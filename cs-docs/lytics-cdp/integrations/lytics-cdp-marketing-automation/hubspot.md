---
title: "HubSpot"
description: "HubSpot is a CRM platform that provides tools for social media marketing, content management, web analytics, landing pages, customer support, and search…"
url: /lytics/hubspot
---

# HubSpot

## HubSpot

## Overview

[HubSpot](https://www.hubspot.com) is a CRM platform that provides tools for social media marketing, content management, web analytics, landing pages, customer support, and search engine optimization. It features integrations with many other MarTech platforms.

Integrating Lytics with HubSpot enables you to use your Lytics powered audiences in HubSpot.

## Authorization

If you haven't already done so, you will need to set up a [HubSpot account](https://www.hubspot.com/products/get-started) before you begin the process described below.

**HubSpot Account Permissions**

The HubSpot account will need the following permissions

```
crm.schemas.companies.write
crm.schemas.contacts.write
crm.schemas.deals.read
crm.schemas.deals.write
crm.objects.contacts.write
crm.lists.write
crm.lists.read
crm.schemas.contacts.read
crm.objects.contacts.read
crm.schemas.companies.read
content
```

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **HubSpot** from the list of providers.
2.  Select the **HubSpot Sign-In** method for authorization.
3.  Login to HubSpot in the login popup.
4.  Select the HubSpot account you want to connect within the login popup.
5.  Grant the Lytics app permission to access your account in the login popup.
6.  In the **Label** text box, enter a name for the authorization in Lytics.
7.  (optional) In the **Description** text box, enter a description for this authorization in Lytics.
8.  Click **Save Authorization**.

## Export Audiences

Keep your HubSpot email lists up to date with your Lytics audiences. Update and add properties from Lytics to HubSpot.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Contacts will be created or updated when they enter or exit the audience. User properties may be created if they are selected for export but do not exist in HubSpot.

This integration utilizes the [Hubspot APIs](https://legacydocs.hubspot.com/docs/overview) to send user data. Once the export is started the job will:

1.  [Check if the Lytics property group exists](https://legacydocs.hubspot.com/docs/methods/contacts/v2/get_contact_property_group), and [create the Lytics property group](https://legacydocs.hubspot.com/docs/methods/contacts/v2/create_contacts_property_group) if it does not exist.
2.  Check if the selected [properties exists](https://legacydocs.hubspot.com/docs/methods/contacts/get_contact_property) in HubSpot. For the properties that do not exist, they will be [created](https://legacydocs.hubspot.com/docs/methods/contacts/v2/create_contacts_property) under the Lytics property group.
3.  Check if the [selected list exists](https://legacydocs.hubspot.com/docs/methods/lists/get_list) in HubSpot, if not [create it](https://legacydocs.hubspot.com/docs/methods/lists/create_list). For dynamic lists, the filter will be ly\_audiences CONTAINS the exported audience's slug.
4.  Create Batches of up to 100 users.
5.  [Create/update the batch of contacts in HubSpot](https://legacydocs.hubspot.com/docs/methods/contacts/batch_create_or_update).
6.  If the list is static, [add the batch of contacts to the List](https://legacydocs.hubspot.com/docs/methods/lists/add_contact_to_list).
7.  As users enter the audience steps 3-5 will be repeated for them. The batch will fill for 5 min or until it reaches 100 users, whichever happens first.
8.  If users exit the audience they will also be added to a batch and updated in HubSpot like users entering the audience (steps 3-4). If the list is static, they will [be removed from the list](https://legacydocs.hubspot.com/docs/methods/lists/remove_contact_from_list) after being updated.

### Fields

By default, Lytics exports the following fields to HubSpot:

| Lytics User Field | Description | HubSpot Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| - | comma separated list of audience slugs | ly\\\_audiences | string |

### Configuration

Follow these steps to set up and configure an export job for HubSpot in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **HubSpot** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  (optional) From the **List** input, select the list to export to. If left blank or Create new list is selected, a new list will be created using the audience's slug as the name. The list's name can be changed while the export job is running.
9.  (optional) Select the **Dynamic** checkbox, to set if the list is/should be Dynamic (active). **Note**: if you have selected an existing dynamic list, exported users will only enter the list if they match the list's filter, Lytics will not force users to match the list's filter.
10.  (optional) From the **Email Field** input, select the Lytics field that contains an email. Either Email or Vid field must be set.
11.  (optional) From the **Vid Field** input, select the lytics field that contains a vid. Either Email or Vid field must be set.
12.  (optional) From the **Map Fields** input, select the Lytics field on the left, and its HubSpot destination on the right.
13.  (optional) From the **Fields to Create** input, select a list of user fields to create in HubSpot. All properties will be created under the Lytics property group.
14.  (optional) Select the **Include Lytics Audience Membership** checkbox, to include the user's audience membership as a property called ly\_audiences. All properties will be created under the Lytics property group. Dynamic lists will do this regardless of this field.
15.  Click **Start Export**.

## Import Contacts and Activity

Import contacts and email activity from HubSpot to drive better engagement through Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Profiles, Raw Event Data.

If contacts are selected to be imported the following will be repeated until all contacts have been processed:

1.  [A page of contacts will be requested from hubspot](https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts)
2.  Any contacts that haven't been modified since **Import Contacts Since** date will be filtered out.
3.  The contacts will be ingested into Lytics profiles

If events are selected to be imported the following will be repeated until all email events have been processed:

1.  [A page of email events will be requested from hubspot](https://legacydocs.hubspot.com/docs/methods/email/get_events) that have occurred after **Import Email Events Since**.
2.  The email events will be ingested into activity on Lytics profiles

### Fields

The following fields are included in the default mapping of the hubspot\_contacts stream:

| Source Field |  | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| email(identity-profiles\[0\].identities\[1\].value) | IF eq(identity-profiles\[0\].identities\[0\].type, "EMAIL") | email unique id | Email Address | string |
| properties.firstname.value |  | first\\\_name | First Name | string |
| properties.lastname.value |  | last\\\_name | Last Name | string |
| vid |  | hs\\\_vid unique id | hubspot Vid | string |

The following fields are included in the default mapping of the hubspot\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(type) | IF eq(type, "BOUNCE") | hs\\\_bounce\\\_ct | Hubspot Hard Bounce Count | int |
| count(type) | IF eq(type, "CLICK") | hs\\\_click\\\_ct | Hubspot Click Count | int |
| count(type) | IF eq(type, "OPEN") | hs\\\_open\\\_ct | Hubspot OPEN Count | int |
| count(type) | IF eq(type, "SENT") | hs\\\_send\\\_ct | Hubspot Send Count | int |
| count(type) | IF eq(type, "SPAMREPORT") | hs\\\_spam\\\_report\\\_ct | Hubspot Soft Bounce Count | int |
| duration | IF eq(type, "OPEN") | hs\\\_open\\\_duration | Hubspot OPENs Duration | string |
| email(recipient) |  | email unique id | Email Address | string |
| epochms() | IF eq(type, "SENT") | hs\\\_send\\\_ts | Hubspot Last Send Time | date |
| max(epochms()) | IF eq(type, "BOUNCE") | hs\\\_last\\\_bounce\\\_ts | Hubspot Last Hard Bounce | date |
| max(epochms()) | IF eq(type, "CLICK") | hs\\\_last\\\_click\\\_ts | Hubspot Last Click | date |
| max(epochms()) | IF eq(type, "OPEN") | hs\\\_last\\\_open\\\_ts | Hubspot Last OPEN | date |
| max(epochms()) | IF eq(type, "SPAMREPORT") | hs\\\_last\\\_spam\\\_report\\\_ts | Hubspot Last Soft Bounce | date |
| max(epochms()) | IF eq(type, "OPEN") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(type, "BOUNCE") | hs\\\_first\\\_bounce\\\_ts | Hubspot First Hard Bounce | date |
| min(epochms()) | IF eq(type, "CLICK") | hs\\\_first\\\_click\\\_ts | Hubspot First Click | date |
| min(epochms()) | IF eq(type, "OPEN") | hs\\\_first\\\_open\\\_ts | Hubspot First OPEN | date |
| min(epochms()) | IF eq(type, "SPAMREPORT") | hs\\\_first\\\_spam\\\_report\\\_ts | Hubspot First Soft Bounce | date |
| urlmain(url) | IF eq(type, "CLICK") | hs\\\_email\\\_url | Hubspot URL | string |
| valuect(hash(urlmain(url))) | IF eq(type, "CLICK") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(type, "OPEN") | hs\\\_hourly\\\_open | Hubspot Hourly types | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(type, "OPEN") | hs\\\_hour\\\_of\\\_week | Hubspot Hour of Week types | map\\\[string\]intsum |
| valuect(type) |  | hs\\\_email\\\_type | Hubspot Email types | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(type, "OPEN") | hs\\\_monthly | Hubspot OPENs By Month | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for HubSpot in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **HubSpot** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![import-config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6520c395b7db9035/2e04493764cc7537af01148c/import-config.png)

1.  (optional) Select the **Import Contacts** checkbox, to import contacts from Hubspot into Lytics.
2.  (optional) In the **Import Contacts Since** text box, enter the date to import contacts from Hubspot that have been modified after this date; yyyy-mm-dd HH:MM:SS format. If left blank, all contacts will be imported.
3.  (optional) Select the **Import Email Events** checkbox, to import email events from Hubspot into Lytics.
4.  (optional) In the **Import Email Events Since** text box, enter the date to import email events from Hubspot that have occurred after this date; yyyy-mm-dd HH:MM:SS format. If left blank, all email events will be imported.
5.  (optional) From the **Properties** multi-select, select the contact properties to import. If left blank, only basic properties will be imported.
6.  (optional) Select the **Keep Updated** checkbox, to continuously import from Hubspot.
7.  (Optional) Toggle **Show Advanced Options**.
8.  (optional) From the **Import Frequency** input, select how often a repeated import should run.
9.  (optional) From the **Time of Day** input, select the time of day to start the import, ignore for hourly imports.
10.  (optional) From the **Timezone** input, select the timezone for time of day.
11.  Click the **Start job** button to start the job
