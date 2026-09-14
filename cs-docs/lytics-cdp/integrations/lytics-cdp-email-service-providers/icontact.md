---
title: "iContact"
description: "iContact develops an award winning email marketing solution. Connecting your iContact account to Lytics gives you the ability to import your user and…"
url: /lytics/icontact
---

# iContact

## iContact

## Overview

[iContact](https://www.icontact.com/) develops an award winning email marketing solution. Connecting your iContact account to Lytics gives you the ability to import your user and activity data from iContact, combine it with information from other sources, and use it to precisely segment and target users across platforms.

## Authorization

If you haven't already done so, you will need to set up a iContact account before you begin the process described below. To connect to iContact, you will need to enable Lytics on your iContact account:

1.  Navigate to the [external login](https://app.icontact.com/icp/core/externallogin) section of iContact
2.  Enter the Lytics Application ID lqx6zVy4N9ElnUQ10SEOHGnrsiKUMaYI
3.  Enter a unique password in the appropriate field.
4.  Click **save**.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select iContact from the list of providers.
2.  Select the iContact API Credentials method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (optional) In the **Description** text box, enter a description for this authorization.
5.  In the **API Username** text box, enter your email address. this will be the email you use to login to iContact
6.  In the **API Password** password box, enter your API Password credential. This will be the password you created above.
7.  Click **Save Authorization**.\\

![icontact-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9fc7f1890a666b89/ceab9cde67bee33fd60caf20/auth.png)

## Import User and Activity Data

Importing your iContact contacts into Lytics is the first step to using Lytics powerful insights to market to your users smarter. Pull in your user's activity and profile data from iContact to get a complete picture of how your users engauge with your email campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration every 24 hours
-   **Resulting data**: User Fields, User Profiles

Steps/Pattern:\\ \\\[REPLACE ME\]

1.  [Request Contacts](https://www2.icontact.com/developerportal/documentation/contacts) in account
2.  Add those contacts to the **icontact\\\_users** stream
3.  [Request messages](https://www2.icontact.com/developerportal/documentation/messages) for the account.
4.  for each message request activity data:
    1.  [Request bounces](https://www2.icontact.com/developerportal/documentation/message-bounces) for the message
    2.  [Request opens](https://www2.icontact.com/developerportal/documentation/message-opens) for the message
    3.  [Request clicks](https://www2.icontact.com/developerportal/documentation/message-clicks) for the message
    4.  [Request unsubscribes](https://www2.icontact.com/developerportal/documentation/unsubscribes) for the message
    5.  Add the activity to the **icontact\\\_activity** stream

### Fields

The following fields are included in the default mapping of the icontact\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| bounce\\\_count | ic\\\_bounce\\\_count | iContact Bounce Count | string |
| business | ic\\\_business | iContact Business | string |
| city | city | City | string |
| create\\\_date | ic\\\_user\\\_created | iContact User Created | date |
| email(email) | email unique id | Email Address | string |
| emaildomain(email) | email\\\_domain | Email Domain | string |
| fax | fax | Fax Number | string |
| first\\\_name | first\\\_name | First Name | string |
| id | ic\\\_contact\\\_id unique id | iContact Distinct ID | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone | phone | Phone Number | string |
| postal\\\_code | postal\\\_code | Postal Code | string |
| prefix | prefix | Prefix | string |
| state | region | State/Province | string |
| status | ic\\\_status | iContact Status | string |
| street | street\\\_address | Street Address | string |
| street\\\_line\\\_2 | address\\\_2 | Address Line 2 | string |
| suffix | suffix | Suffix | string |

The following fields are included in the default mapping of the icontact\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| contact\\\_id |  | ic\\\_contact\\\_id unique id | iContact Distinct ID | string |
| count(event\\\_type) | IF eq(event\\\_type, "bounce") | email\\\_bouncect | Email Bounce Count | int |
| count(event\\\_type) | IF eq(event\\\_type, "click") | email\\\_click\\\_ct | Email Click Count | int |
| count(event\\\_type) | IF eq(event\\\_type, "open") | email\\\_open\\\_ct | Email Open Count | int |
| count(event\\\_type) | IF eq(event\\\_type, "unsubscribe") | email\\\_unsubscribect | Email Unsubscribe Count | int |
| map("email", epochms()) | IF event\\\_type IN ("open", "click", "unsubscribe") | last\\\_channel\\\_activities | Last Activity By Channel | map\\\[string\]time |
| max(epochms()) | IF eq(event\\\_type, "click") | email\\\_last\\\_click\\\_ts | Email Last click | date |
| max(epochms()) | IF eq(event\\\_type, "open") | email\\\_last\\\_open\\\_ts | Email Last open | date |
| max(epochms()) | IF eq(event\\\_type, "bounce") | email\\\_lastbounce\\\_ts | Email Last bounce | date |
| max(epochms()) | IF eq(event\\\_type, "unsubscribe") | email\\\_lastunsubscribe\\\_ts | Email Last unsubscribe | date |
| max(epochms()) | IF event\\\_type IN ("open", "click", "unsubscribe") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event\\\_type, "click") | email\\\_first\\\_click\\\_ts | Email First click | date |
| min(epochms()) | IF eq(event\\\_type, "open") | email\\\_first\\\_open\\\_ts | First Email Opened | date |
| min(epochms()) | IF eq(event\\\_type, "bounce") | email\\\_firstbounce\\\_ts | Email First bounce | date |
| min(epochms()) | IF eq(event\\\_type, "unsubscribe") | email\\\_firstunsubscribe\\\_ts | Email First unsubscribe | date |
| set("email") | IF event\\\_type IN ("open", "click", "unsubscribe") | channels | All Channels Used | \\\[\]string |
| valuect(hash(urlmain(event\\\_url))) |  | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for iContact in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **iContact** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  From the **Source Account** input, select the account that you would like to import from.
8.  From the **Source Client Folder** input, select the client folder that you would like imported into Lytics.
9.  (Optional) Toggle **Show Advanced Options**.
    1.  (optional) Select the **Keep Updated** checkbox, to run this import every hour.
    2.  (optional) Select the **Filter by AID** checkbox, to only process users and messages that are tagged with the AID for this account. The tag <!-- lytics-aid:AID --> must be included in the email's HTML body, where AID is your account's AID. Please contact customer success for more information about this option.
10.  Click the **Start job** button to start the job

## Export Audience to List

Export a Lytics audience to an iContact list to make use of your Lytics powered audiences in iContact.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration
-   **Resulting data**: iContact users that are in the selected Audience will be pushed to the selected list.

The export will scan the selected audience and push the users to iContact.

Steps/Pattern:

1.  Scan the audience
2.  For each user in the audience, add it to the batch.
3.  [Subscribe](https://www.icontact.com/developerportal/documentation/subscriptions) the batch to the selected iContact list.

### Fields

By default, Lytics exports the following fields to iContact:

| Lytics User Field | Description | iContact Field | Type |
| --- | --- | --- | --- |
| iContact Distinct ID | Distinct ID from iContact | contactId | string |

### Configuration

Follow these steps to set up and configure an export job for iContact in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **iContact** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  From the **Destination Account** input, select the account that you would like to export to.
9.  From the **Destination Client Folder** input, select the client folder that you would like to export to.
10.  From the **Destination List** input, select the list that you would like to export to.
11.  Click the **Start job** button to start the job
