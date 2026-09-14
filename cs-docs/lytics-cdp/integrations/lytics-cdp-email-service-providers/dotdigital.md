---
title: "Dotdigital"
description: "Dotdigital provides multichannel marketing and automation solutions including managed campaigns, email design and build, and other related services."
url: /lytics/dotdigital
---

# Dotdigital

## Dotdigital

## Overview

[Dotdigital](https://dotdigital.com) provides multichannel marketing and automation solutions including managed campaigns, email design and build, and other related services.

Integrating Lytics with Dotdigital's Engagement Cloud allows you to use Lytics' powerful identity resolution and audience insights to power Dotdigital's multichannel campaigns.

## Authorization

If you haven't already done so, you will need to setup a Dotdigital Engagement Cloud account before you begin the process described below. You can create a [trial account](https://dotdigital.com/trial/) to test it out. You will also need to create an API user to connect Lytics to your Dotdigital Engagement Cloud. Instructions can be found in Dotdigital's [API documentation](https://developer.dotdigital.com/docs/getting-started-with-the-api#section-setting-up-your-api-user).

If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Dotdigital** from the list of providers.
2.  Select the Dotdigital method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **API Username**.
6.  Enter your **API Password**.
7.  Click **Save Authorization**.

![Dotdigital Auth Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambbdc6d869c59262e/5c098f10f42caf02c9760382/Screen_Shot_2021-02-26_at_8.58.28_AM.png)

## Import Contacts & Activity

By importing your Dotdigital contacts and their activity into Lytics, you'll be able to apply Lytics powerful insights to your email and multichannel campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Profiles, User Fields, Metrics.

This integration uses the [Dotdigital APIs](https://developer.dotdigital.com/docs/getting-started-with-the-api) to import user data. Once the import is started the job will:

1.  [Request all address books](https://developer.dotdigital.com/docs/get-address-books) in the Dotdigital account.
2.  Iterate through the address books and for each:
    1.  [Get all subscribed contacts](https://developer.dotdigital.com/docs/get-modified-contacts-in-address-book-since-date) in that address book since the last import.
    2.  [Get all unsubscribed contacts](https://developer.dotdigital.com/docs/get-unsubscribed-contacts-from-address-book-since-date) from that address book since the last import.
3.  [Get all suppressed contacts](https://developer.dotdigital.com/docs/get-suppressed-contacts-since-date) from the account since the last import.
4.  [Get all campaigns](https://developer.dotdigital.com/docs/get-campaigns-with-activity-since-date) with activity since the last import.
5.  Iterate through the campaigns and for each:
    1.  If we haven't received send information on the campaign before, [get the campaign's activity](https://developer.dotdigital.com/docs/get-campaign-activity).
    2.  [Get campaign's open activity](https://developer.dotdigital.com/docs/get-campaign-opens-since-date) since last import.
    3.  [Get campaign's click activity](https://developer.dotdigital.com/docs/get-campaign-clicks-since-date) since last import.
    4.  [Get campaign's bounces and unsubscribes](https://developer.dotdigital.com/docs/get-campaign-activity-since-date) since last import.
6.  Schedule next import.

Data will be imported to the dotmailer\_contacts and dotmailer\_activity streams.

### Fields

The following fields are included in the default mapping of the dotmailer\_contacts stream:

**NOTE:** Dotmailer rebranded to Dotdigital in January 2019. Due to backwards compatiblity issues old field and stream names still use dotmailer.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| BIRTHDAY | birthdate | Birthdate | date |
| FIRSTNAME | first\\\_name | First Name | string |
| GENDER | gender | Gender | string |
| LASTNAME | last\\\_name | Last Name | string |
| address\\\_books | dm\\\_address\\\_books | Dotmailer address-book membership | \\\[\]string |
| email(email) | email unique id | Email Address | string |
| emailType | dm\\\_email\\\_type | Dotmailer Email Type | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| epochms() | dm\\\_addressbook\\\_status\\\_ts | Date of Last Addressbook Status Update | date |
| id | dm\\\_contact\\\_id unique id | Dotmailer Contact ID | string |
| map(join(account\\\_id, address\\\_book\\\_id, "\\\_"), address\\\_book\\\_status) | dm\\\_addressbook\\\_status | Status by Dotmailer Addressbook ID | map\\\[string\]string |
| optInType | dm\\\_opt\\\_in\\\_type | Dotmailer Opt-In Type | string |
| set(account\\\_id) | dm\\\_account\\\_ids | Dotmailer Account IDs | \\\[\]string |
| status | dm\\\_status | Dotmailer Status | string |
| unsubscribed\\\_address\\\_books | dm\\\_unsubscribed\\\_address\\\_books | Dotmailer unsubscribed address-books | \\\[\]string |



The following fields are included in the default mapping of the dotmailer\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| contactId |  | dm\\\_contact\\\_id unique id | Dotmailer Contact ID | string |
| count(event) | IF eq(event, "click") | dm\\\_clickct | Dotmailer Click Count | int |
| count(event) | IF eq(hardBounced, "true") | dm\\\_hardbounce\\\_ct | Dotmailer Hard Bounce Count | int |
| count(event) | IF eq(event, "open") | dm\\\_openct | Dotmailer Open Count | int |
| count(event) | IF eq(event, "sent") | dm\\\_sendct | Dotmailer Send Count | int |
| count(event) | IF eq(softBounced, "true") | dm\\\_softbounce\\\_ct | Dotmailer Soft Bounce Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| epochms() | IF eq(event, "sent") | dm\\\_send\\\_ts | Dotmailer Last Send Time | date |
| ipAddress |  | ip\\\_address | IP Address | string |
| mailClient |  | mail\\\_client | Mail Client | string |
| mailClientVersion |  | mail\\\_client\\\_version | Mail Client Version | string |
| max(epochms()) | IF eq(hardBounced, "true") | dm\\\_last\\\_hardbounce\\\_ts | Dotmailer Last Hard Bounce | date |
| max(epochms()) | IF eq(softBounced, "true") | dm\\\_last\\\_softbounce\\\_ts | Dotmailer Last Soft Bounce | date |
| max(epochms()) | IF eq(event, "click") | dm\\\_lastclick\\\_ts | Dotmailer Last Click | date |
| max(epochms()) | IF eq(event, "open") | dm\\\_lastopen\\\_ts | Dotmailer Last Open | date |
| max(epochms()) | IF eq(unsubscribed, "true") | dm\\\_unsub\\\_ts | Dotmailer Unsubscribe Date | date |
| max(epochms()) | IF eq(event, "open") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(hardBounced, "true") | dm\\\_first\\\_hardbounce\\\_ts | Dotmailer First Hard Bounce | date |
| min(epochms()) | IF eq(softBounced, "true") | dm\\\_first\\\_softbounce\\\_ts | Dotmailer First Soft Bounce | date |
| min(epochms()) | IF eq(event, "click") | dm\\\_firstclick\\\_ts | Dotmailer First Click | date |
| min(epochms()) | IF eq(event, "open") | dm\\\_firstopen\\\_ts | Dotmailer First Open | date |
| set(campaign\\\_id) |  | dm\\\_campaign\\\_ids | Dotmailer Campaign IDs | \\\[\]string |
| set(campaign\\\_name) |  | dm\\\_campaign\\\_names | Dotmailer Campaigns | \\\[\]string |
| set(campaign\\\_name) | IF eq(event, "click") | dm\\\_campaigns\\\_clicked | Dotmailer Campaigns Clicked | \\\[\]string |
| set(campaign\\\_name) | IF eq(event, "open") | dm\\\_campaigns\\\_opended | Dotmailer Campaigns Opened | \\\[\]string |
| set(campaign\\\_name) | IF eq(event, "sent") | dm\\\_campaigns\\\_sent | Dotmailer Campaigns Recieved | \\\[\]string |
| set(keyword) |  | dm\\\_keyword | Dotmailer Email Keyword | \\\[\]string |
| url |  | dm\\\_email\\\_url | Dotmailer URL | string |
| valuect(event) |  | dm\\\_email\\\_event | Dotmailer Email Events | map\\\[string\]intsum |
| valuect(hash(urlmain(url))) | IF eq(event, "click") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(event, "open") | dm\\\_hourlyopen | Dotmailer Hourly Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event, "open") | dm\\\_hourofweek | Dotmailer Hour of Week Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event, "open") | dm\\\_monthly | Dotmailer Opens By Month | map\\\[string\]intsum |

### Configuration

Follow these steps to set up an import of contacts and activity job for Dotdigital. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Dotdigital** from the list of providers.
2.  Select the **Import Audiences and Activity Data** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select **Keep Updated** to continuously import audiences and activity data.
7.  (Optional) Toggle **Show Advanced Options**.
    1.  Select **Email Field** to configure the field that contains the contact's email.
    2.  Select **Address Book Status Field** to configure the field that contains the address book status. This is used to mark users that have unsubscribed from the account as unsubscribed from their address books. This field must be a map\[string\]string in the format of \[accountID\]\_\[addressBookId\]:\[status\].
    3.  Select **Fields to Import** to configure the fields to import for each contact from dotdigital.
    4.  Enter **Work Tracking Slug** to track the work. This should be a unique value.
    5.  Enter **Activity Backfill Start Date** to pull in a set of activity by date. This is set in conjunction with **Activity Backfill End Date**. If this is left empty, a default of 90 days of activity data will be imported. If this is set, the import will only pull in activity data; no contacts will be imported
    6.  Enter **Activity Backfill End Date** to pull in a set of activity by date. This is set in conjunction with **Activity Backfill Start Date**.
8.  Click **Start Import**.\\

![Screen_Shot_2021-02-26_at_9.30.01_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am526e171abd694abc/c14574ed8f82058c39fa7a3d/Screen_Shot_2021-02-26_at_9.30.01_AM.png)

## Export Contacts

Export Lytics audiences to a Dotdigital Engagement Cloud address book, which can then be used for campaigns using any of Dotdigital's supported channels.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Metrics, [Dotdigital contacts](https://support.dotdigital.com/hc/en-gb/articles/115001443764-Contacts-an-overview).

This integration utilizes the [Dotdigital APIs](https://developer.dotdigital.com/docs/getting-started-with-the-api) to send user data. Once the export is started the job will:

1.  Request the Dotdigital [account information](https://developer.dotdigital.com/docs/get-account-information).
2.  Get all [address books in the account](https://developer.dotdigital.com/docs/get-address-books).
3.  Verify the selected address book exists, or [create a new address book](https://developer.dotdigital.com/docs/create-address-book) if configured to do so.
4.  For each user entering the Lytics audience, or existing member of the audience, (depending on **Trigger Join Actions setting**) either:
    -   Add user to be [uploaded in bulk to Dotdigital](https://developer.dotdigital.com/docs/bulk-create-contacts-in-address-book).
    -   Add user [directly to the address book](https://developer.dotdigital.com/docs/add-contact-to-address-book).
5.  If the user is unsubscribed, try to [resubscribe them to the address book](https://developer.dotdigital.com/docs/unsubscribe-contact-from-address-book), or [resubscribe with no challenge](https://developer.dotdigital.com/docs/resubscribe-contact-with-no-challenge), if configured to resubscribe.
6.  For each user exiting the Lytics audience, one of three actions can be selected:
    -   **Ignore**: do nothing.
    -   **Unsubscribe**: [unsubscribe the user from the Dotdigital address book](https://developer.dotdigital.com/docs/unsubscribe-contact-from-address-book).
    -   **Remove**: [remove the user from the address book](https://developer.dotdigital.com/docs/delete-contact-from-address-book).
7.  Update the user's Dotdigital status via the dotmailer\_export\_status stream if **Sync Status** is selected.

### Fields

The following fields are included in the default mapping of the dotmailer\_export\_status stream:

**NOTE:** Dotmailer rebranded to Dotdigital in January 2019. Due to backwards compatiblity issues old field and stream names still use dotmailer.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique id | Email | string |
| account\\\_id, account\\\_status | dm\\\_account\\\_status | Status by Dotmailer Account ID | map\\\[string\]string |
| account\\\_id, address\\\_book\\\_id, address\\\_book\\\_status | dm\\\_addressbook\\\_status | Status by Dotmailer Addressbook ID | map\\\[string\]string |
| epochms() | dm\\\_addressbook\\\_status\\\_ts | Date of Last Dotmailer Addressbook Status Update | date |

### Configuration

Follow these steps to set up an export of contacts for Dotdigital. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Dotdigital** from the list of providers.
2.  Select the **Export Audiences** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Select the **Exisiting Address Book** to configure the address book to add contacts to. If you want to create a new address book, enter the name in the **New Address Book Name** field.
8.  Enter **New Address Book Name** to create a new address book in dotdigital. If left blank, a new address book name will be created by default following this format: Lytics+audience name. A new address book will only be created if the **Exisiting Address Book** is not configured.
9.  Select the **Email Field** that contains the contact's email.
10.  Select the **ID Field** that contains the contact's dotdigital ID. This may be a map field if importing users from multiple accounts.
11.  Select **One Time** to do a one time export of the audience.
12.  (Optional) Toggle **Show Advanced Options**.
     1.  Select the **Address Book Status Field** to configure the field that contains the address book status. This will also sync address book status in Lytics. Any address books with a status of 'syncing' will be added to dotdigital. This will ignore both the **New Address Book Name** and the **Existing Address Book' fields**.
     2.  Select the **Opt-in Type** for the contacts that will be created. See [Dotdigital's documentation](https://support.dotdigital.com/hc/en-gb/articles/212212098-Explaining-contact-opt-in-types) for details.
     3.  Select the **Email Type** of emails these contacts can receive.
     4.  Select the **Map Fields** to map all the fields from Lytics to dotdigital by selecting the Lytics field on the left, and its dotdigital destination on the right. NOTE: non-scalar fields such as arrays and maps are not supported by Dotdigital.
     5.  Select the **Exit Action** to configure the action to take when an entity exits the segment. Note: unsubscribing will significantly increase API usage.
     6.  Select **Trigger Join Actions** for contacts to trigger join actions when added to the address book. Note: this will significantly increase API usage.
     7.  Select **Resubscribe** for contacts to be resubscribed to address books. Address-book level resubscribes are only supported for exports triggering join actions. Bulk exports will only resubscribe contacts if they have been suppressed at the account level.
     8.  Select **Resubscribe With No Challenge** for contacts to be resubscribed to address books without triggering a confirmation email. Address-book level resubscribes are only supported for exports triggering join actions. Bulk exports will only resubscribe contacts if they have been suppressed at the account level.
     9.  Select **Sync Status** for the contact's address book status to be updated in Lytics.
     10.  Select **Disable Deduplication** to disable deduplication of events.
     11.  Select the **Content Collection** to include recommendations from Lytics. If not selected, no recommendations are sent to dotdigital.
     12.  Select the **Map Recommendation Fields** to map all the recommender fields from Lytics to dotdigital by selecting the Lytics field on the left, and its dotdigital destination on the right. NOTE: Complex fields such as arrays and maps are not supported by dotdigital.
     13.  Enter a **Work Tracking Slug** to track the work. This slug should be a unique value.
13.  Click **Start Job**.

![Dotdigital export contacts workflow config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama92ee907eb69d90e/677824ead1d1d961e808860d/Screen_Shot_2021-02-26_at_10.05.29_AM.png)

## Export Multiple Audiences

Export multiple Lytics audiences to existing Dotdigital address books, which can then be used for campaigns using any of Dotdigital's supported channels.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration, Real-time Integration.
-   **Resulting data**: [Contacts](https://support.dotdigital.com/hc/en-gb/articles/115001443764-Contacts-an-overview), User Fields.

This integration utilizes the [Dotdigital APIs](https://developer.dotdigital.com/docs/getting-started-with-the-api) to send user data. Once the export is started the job will:

1.  Request the Dotdigital [account information](https://developer.dotdigital.com/docs/get-account-information).
2.  Get all [address books in the account](https://developer.dotdigital.com/docs/get-address-books).
3.  Verify the selected address book exists, or [create a new address book](https://developer.dotdigital.com/docs/create-address-book) if configured to do so.
4.  For each user entering the Lytics audience, or existing member of the audience, (depending on **Trigger Join Actions setting**) either:
    -   Add user to be [uploaded in bulk to Dotdigital](https://developer.dotdigital.com/docs/bulk-create-contacts-in-address-book).
    -   Add user [directly to the address book](https://developer.dotdigital.com/docs/add-contact-to-address-book).
5.  If the user is unsubscribed, try to [resubscribe them to the address book](https://developer.dotdigital.com/docs/unsubscribe-contact-from-address-book), or [resubscribe with no challenge](https://developer.dotdigital.com/docs/resubscribe-contact-with-no-challenge), if configured to resubscribe.
6.  For each user exiting the Lytics audience, one of three actions can be selected:
    -   **Ignore**: do nothing.
    -   **Unsubscribe**: [unsubscribe the user from the Dotdigital address book](https://developer.dotdigital.com/docs/unsubscribe-contact-from-address-book).
    -   **Remove**: [remove the user from the address book](https://developer.dotdigital.com/docs/delete-contact-from-address-book).
7.  Update the user's Dotdigital status via the dotmailer\_export\_status stream if **Sync Status** is selected.

### Fields

The following fields are included in the default mapping of the dotmailer\_export\_status stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique id | Email | string |
| account\\\_id, account\\\_status | dm\\\_account\\\_status | Status by Dotmailer Account ID | map\\\[string\]string |
| account\\\_id, address\\\_book\\\_id, address\\\_book\\\_status | dm\\\_addressbook\\\_status | Status by Dotmailer Addressbook ID | map\\\[string\]string |
| epochms() | dm\\\_addressbook\\\_status\\\_ts | Date of Last Dotmailer Addressbook Status Update | date |

### Configuration

Follow these steps to set up an export of contacts in multiple segments job for dotdigital. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

**NOTE:** Dotmailer rebranded to Dotdigital in January 2019. Due to backwards compatiblity issues old field and stream names still use dotmailer.

1.  Select **Dotdigital** from the list of providers.
2.  Select the **Export Multiple Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audience** to export.
7.  Select **Map Audiences** to map all the fields from Lytics to Dotdigital by selecting the Lytics field on the left, and its Dotdigital destination on the right. NOTE: Non-scalar fields such as arrays and maps are not supported by Dotdigital.
8.  Select the **Email Field** to configure the field that contains the contact's email.
9.  Select the **ID Field** to configure the field that contains the contact's Dotdigital ID. This may be a map field if importing users from multiple accounts.
10.  Select **One Time** to perform a one time export of the selected audiences.
11.  Select **Content Collection** to to include recommendations from Lytics. If not selected, no recommendations are sent to Dotdigital.
12.  (Optional) Toggle **Show Advanced Options** (if applicable).
     1.  Select **Trigger Join Actions** for contacts to trigger actions when added to the address book. Note: this will significantly increase API usage.
     2.  Select **Resubscribe** for contacts to be resubscribed to address books. Address-book level resubscribes are only supported for exports triggering join actions. Bulk exports will only resubscribe contacts if they have been suppressed at the account level.
     3.  Select **Resubscribe With No Challenge** for contacts to be resubscribed to address books without triggering a confirmation email. Address-book level resubscribes are only supported for exports triggering join actions. Bulk exports will only resubscribe contacts if they have been suppressed at the account level.\\\\
     4.  Select **Sync Status** for contact's address book status to be updated in Lytics.
     5.  Select **Map Recommendation Fields** to map all the recommender fields from Lytics to Dotdigital by selecting the Lytics field on the left, and its Dotdigital destination on the right. NOTE: Complex fields such as sets and maps are not supported by Dotdigital. This field is required if a Content Collection is set.
     6.  Enter **Work Tracking Slug** to track the work. This slug should be a unique value.
13.  Click **Start Export**.

![Dotdigital Export Multi Segment Workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am940ff4b27f881e73/612222e5eac81b91b0c440dd/dotdigital_export_multi_segment.png)

## Export Modified Contacts

Use the Export Modified Contacts job type to keep your contacts' data fields up to date in Dotdigital.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: RESTAPI Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: [Contacts](https://support.dotdigital.com/hc/en-gb/articles/115001443764-Contacts-an-overview), User Fields.

This integration utilizes the [Dotdigital APIs](https://developer.dotdigital.com/docs/getting-started-with-the-api) to send user data. Once the export is started the job will:

1.  Scan user profiles in the selected audience.
2.  Convert user profiles to Dotdigital contacts.
3.  [Upload batches of contacts](https://developer.dotdigital.com/docs/bulk-create-contacts) (up to 5000 contacts per batch) to Dotdigital.
4.  Sleep until the next scheduled export.

### Fields

The following fields are included in the default mapping of the dotmailer\_export\_status stream:

**NOTE:** Dotmailer rebranded to Dotdigital in January 2019. Due to backwards compatiblity issues old field and stream names still use dotmailer.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique id | Email | string |
| account\\\_id, account\\\_status | dm\\\_account\\\_status | Status by Dotmailer Account ID | map\\\[string\]string |
| account\\\_id, address\\\_book\\\_id, address\\\_book\\\_status | dm\\\_addressbook\\\_status | Status by Dotmailer Addressbook ID | map\\\[string\]string |
| epochms() | dm\\\_addressbook\\\_status\\\_ts | Date of Last Dotmailer Addressbook Status Update | date |

### Configuration

Follow these steps to set up an export of modified contacts job for Dotdigital. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Dotdigital** from the list of providers.
2.  Select the **Export Modified Contacts** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Select the **Email Field** that contains the contact's email.
8.  Select the **ID Field** that contains the contact's Dotdigital ID.
9.  Select the **Modified Field** that contains the last modified time.
10.  Select the **Content Collection** to include recommendations from Lytics. If not selected, no recommendations are sent to Dotdigital.
11.  (Optional) Toggle **Show Advanced Options**.
     1.  Select the **Opt-in Type** to configure the opt-in type for the contacts that will be created. See [Dotdigital's documentation](https://support.dotdigital.com/hc/en-gb/articles/212212098-Explaining-contact-opt-in-types) for details.
     2.  Select the **Email Type** to configure the type of emails these contacts can receive.
     3.  Select the **Map Fields** to map all the fields from Lytics to Dotdigital by selecting the Lytics field on the left, and its Dotdigital destination on the right. NOTE: Non scalar fields such as arrays and maps are not supported by Dotdigital.
     4.  Select the **Map Recommendation Fields** to map all the recommender fields from Lytics to Dotdigital by selecting the Lytics field on the left, and its Dotdigital destination on the right. NOTE: Complex fields such as sets and maps are not supported by Dotdigital. This field is required if a Content Collection is set.
     5.  Select **Keep Updated** to run this export continuously.
     6.  Select the **File Export Frequency** to configure how often a continuous export should export a new file. The default is daily.
     7.  Select the **Time of Day** to configure what time of day a daily, weekly, or monthly export should export. The default is midnight.
     8.  Select the **Timezone** to configure the timezone for the **Time of Day**.
     9.  Enter a **Work Tracking Slug** to track the work. This slug should be a unique value.
12.  Click **Start Export**.

![Dotdigital Export Modified Contacts Workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am36ff05bf309a1ae6/93865d8282e3409b6a55dc0f/dotdigital_export_modified_contacts.png)

## Remove Contacts

Remove or unsubscribe users that enter the configured audience in your Dotdigital account. Optionally you can resubscribe users when they exit the audience, which can be useful for building an audience that has opted out of communications.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration -\\ Audience Trigger Integration.
-   **Frequency**: Real-time Integration.

This integration utilizes the [Dotdigital APIs](https://developer.dotdigital.com/docs/getting-started-with-the-api) to send user data. Once the export is started the job will:

1.  Request the Dotdigital [account information](https://developer.dotdigital.com/docs/get-account-information).
2.  For each user entering the Lytics audience, one of three actions can be selected:
    -   **Unsubscribe**: [unsubscribe the user from the Dotdigital address book](https://developer.dotdigital.com/docs/unsubscribe-contact).
    -   **Remove**: [remove the user from the account](https://developer.dotdigital.com/docs/delete-contact).
3.  For each user exiting the Lytics audience:
    -   **Ignore**: do nothing.
    -   **Resubscribe**: resubscribe users to their previous subscriptions, [resubscribe them to the address book](https://developer.dotdigital.com/docs/unsubscribe-contact-from-address-book), or [resubscribe with no challenge](https://developer.dotdigital.com/docs/resubscribe-contact-with-no-challenge).
4.  Update the user's Dotdigital status via the dotmailer\_export\_status stream if **Sync Status** is selected.

### Fields

The following fields are included in the default mapping of the dotmailer\_export\_status stream:

**NOTE:** Dotmailer rebranded to Dotdigital in January 2019. Due to backwards compatiblity issues old field and stream names still use dotmailer.

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique id | Email | string |
| map(account\\\_id, account\\\_status) | dm\\\_account\\\_status | Status by Dotmailer Account ID | map\\\[string\]string |
| map(join(account\\\_id, address\\\_book\\\_id), address\\\_book\\\_status | dm\\\_addressbook\\\_status | Status by Dotmailer Addressbook ID | map\\\[string\]string |
| epochms() | dm\\\_addressbook\\\_status\\\_ts | Date of Last Dotmailer Addressbook Status Update | date |

### Configuration

Follow these steps to set up an export Remove Contacts job for dotdigital. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Dotdigital** from the list of providers.
2.  Select the **Remove Contacts** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export (if applicable).
7.  Select the **Email Field** that contains the contact's email.
8.  Select the **ID Field** that contains the contact's Dotdigital ID.
9.  Select the **Address-book Status Field** that contains the contact's address-book statuses.
10.  Select **One Time** to do a one-time removal of the users in the audience.
11.  Select the **Enter Action** to take when a contact enters the audience. Note: removing may significantly increase API usage.
12.  Select the **Exit Action** to take when a contact exits the audience.
13.  (Optional) Toggle **Show Advanced Options**.
     1.  Select **Resubscribe With No Challenge** to suppress Dotdigital's challenge email when the user is resubscribed, if possible.
     2.  Select **Sync Status** to update the contact's address book status in Lytics.
     3.  Select the **Opt-in Type** for the contacts that will be created. See the [Dotdigital documentation](https://support.dotmailer.com/hc/en-gb/articles/212212098-Explaining-contact-opt-in-types) for details.
     4.  Select the **Email Type** of emails these contacts can receive.
     5.  Select the **Map Fields** to map all the fields from Lytics to Dotdigital by selecting the Lytics field on the left, and its Dotdigital destination on the right. NOTE: Complex fields such as arrays and maps are not supported by Dotdigital.
     6.  Enter a **Work Tracking Slug** to track the work. This slug should be a unique value.
14.  Click **Start Job**.

![Dotdigital Remove Contacts Workflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4075df8733641803/499c7a4bc1b178ea1408237f/dotdigital_remove_contacts.png)
