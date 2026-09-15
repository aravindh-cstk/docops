---
title: "GIGYA"
description: "GIGYA was purchased by SAP and is now SAP Customer Data Cloud."
url: /lytics/gigya
uid: blt60992c3cc0a6b7da
---

# GIGYA

## GIGYA

## Overview

GIGYA was purchased by SAP and is now SAP Customer Data Cloud.

[GIGYA](https://www.sap.com/products/crm/customer-data-management.html) offers a suite of social plugins including social login, sharing, identity management, mobile website integration, and subscriptions.

Integrating Lytics with GIGYA allows you to pull insights from your users' login patterns, subscriptions, and GIGYA ID which is often used as an identifier across platforms. You can also export Lytics audience membership containing behavioral scores and content affinities to personalize your brand experiences delivered to existing GIGYA users.

## Authorization

If you haven't already done so, you will need to set up a GIGYA account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Gigya** fraom the list of providers.
2.  Select the Gigya method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  from the **Datacenter** input, select the GIGYA datacenter your account uses. See [GIGYA's documentation](https://developers.gigya.com/display/GD/Finding+Your+Data+Center) for more information.\\

6.In the **API Key** text box, enter your Api Key from your GIGYA [account dashboard](https://console.gigya.com/site/partners/Dashboard.aspx).

1.  In the **User Key** text box, enter User Key from your GIGYA [account settings](https://console.gigya.com/site/account.aspx/Settings) by navigating to **Your name** > **Account**.
2.  In the **Secret Key** text box, enter your Secret Key from your GIGYA [account settings](https://console.gigya.com/site/account.aspx/Settings)
3.  Click **Save Authorization**.

![gigya-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame78285387b768eab/82bc7dc97781279184929454/gigya-auth.png)

## Import Users

Import GIGYA contacts and email subscriptions into Lytics to build a more complete view of your customers. You can import from full accounts and lite GIGYA (SAP Customer Data Cloud) accounts.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration with option for continuous, hourly updates.
-   **Resulting data**: User Profiles and User Fields.

This integration utilizes the [GIGYA APIs](https://developers.gigya.com/display/GD/REST+API) to import user data. Once the import is started the job will:

1.  Validate credentials by getting the [user schema](https://developers.gigya.com/display/GD/ids.getSchema+REST).
2.  [Search for users](https://developers.gigya.com/display/GD/ids.search+REST) that have been updated since the last import.
    1.  Initial search request: SELECT \* FROM accounts WHERE lastUpdatedTimestamp >= <last import date> ORDER BY lastUpdatedTimestamp LIMIT 10000, and openCursor = true.
    2.  Page through results.
3.  [Search for lite users](https://developers.gigya.com/display/GD/accounts.search+REST) that have been updated since the last import.
    1.  Initial search request: SELECT \* FROM emailAccounts WHERE lastUpdatedTimestamp >= <last import date> AND hasLiteAccount=true AND hasFullAccount=false ORDER BY lastUpdatedTimestamp LIMIT 10000, and openCursor = true.
    2.  Page through results.
4.  [Search for subscriptions](https://developers.gigya.com/display/GD/accounts.search+REST) that have been updated since the last import.
    1.  Initial search request: SELECT \* FROM emailAccounts WHERE subscriptions.<subscription name>.email.lastUpdatedSubscriptionState > <last import date>, and openCursor = true.
    2.  Page through results.
5.  Ingest the data from the searches into the gigya\_users stream.

### Fields

The following fields are included in the default mapping of the gigya\_users stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| address |  | address | Address | string |
| birth\\\_day |  | birth\\\_day | Birth Day | string |
| birth\\\_month |  | birth\\\_month | Birth Month | string |
| birth\\\_year |  | birth\\\_year | Birth Year | string |
| city |  | city | City | string |
| country |  | country | Country | string |
| created |  | gy\\\_user\\\_created | GIGYA Profile Created | date |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| facebook\\\_id |  | fb\\\_uid unique id | Facebook User ID | string |
| first\\\_name |  | first\\\_name | First Name | string |
| gender |  | gender | Gender | string |
| google\\\_id |  | google\\\_id unique id | Google ID | string |
| id |  | gy\\\_profile\\\_id unique id | GIGYA Distinct ID | string |
| instagram\\\_id |  | instagram\\\_id unique id | Instagram ID | string |
| is\\\_registered |  | gy\\\_is\\\_registered | GIGYA Is Registered | string |
| last\\\_login |  | gy\\\_user\\\_last\\\_login | GIGYA Profile Last Login | date |
| last\\\_name |  | last\\\_name | Last Name | string |
| last\\\_updated |  | gy\\\_user\\\_updated | GIGYA Profile Updated | date |
| login\\\_provider |  | gy\\\_login\\\_provider | GIGYA Login Provider | string |
| map(subscription\\\_name, double\\\_optin-status) | IF exists(subscription\\\_name) | gy\\\_subscription\\\_optin\\\_status | GIGYA Subscription Optin Status | map\\\[string\]string |
| map(subscription\\\_name, subscribed) | IF exists(subscription\\\_name) | gy\\\_subscriptions | GIGYA Subscriptions | map\\\[string\]bool |
| map(subscription\\\_name, todate(modified)) | IF exists(subscription\\\_name) | gy\\\_subscription\\\_modified\\\_date | GIGYA Subscription Modified Date | map\\\[string\]time |
| site\\\_id |  | gy\\\_site\\\_id | GIGYA Site ID | string |
| state |  | state | State | string |
| tobool("true") | IF eq(lite\\\_account, "false") OR eq(full\\\_account, "true") | gy\\\_lite\\\_account | GIGYA Lite Account | bool |
| twitter\\\_id |  | tw\\\_uid unique id | Twitter User ID | string |
| twitter\\\_name |  | tw\\\_user\\\_screenname unique id | Twitter Username | string |
| zip |  | zip | Zip | string |

### Configuration

Follow these steps to set up and configure an import job for Gigya in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Gigya** from the list of providers.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  (optional) In the **Import Since** text box, enter the date from which you want to import data using the YYYY-MM-DD format. If left blank, Lytics will import all available data.
8.  (optional) From the **Extended Data Fields** input, select additional data fields to import to Lytics. Basic profile data will automatically be imported.
9.  (Optional) Toggle **Show Advanced Options**. Select the **Keep Updated** checkbox to run this import hourly.
10.  Click **Start Import**.

![gigya integration import config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am57a09a68460d1b1a/45484efb36709fdb59ae9451/gigya_integration_import_config.png)

## Export Users

Export Lytics audience membership to your existing GIGYA users to enrich your marketing efforts with cross-channel data, behavioral scores, and content affinities from Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: Array of audiences the user is a member of.

This integration utilizes [GIGYA APIs](https://developers.gigya.com/display/GD/REST+API) to send user data. Once the export is started the job will:

1.  Iterate through users in the selected audience.
2.  Get the audience membership for each user.
3.  Export the user's audience membership to either:
    1.  [Data store](https://developers.gigya.com/display/GD/ds.store+REST).
    2.  [User's account](https://developers.gigya.com/display/GD/ids.setAccountInfo+REST).

### Fields

By default, Lytics exports the following fields to GIGYA:

| Lytics User Field | Description | GIGYA Field | Type |
| --- | --- | --- | --- |
| GIGYA ID | GIGYA ID | UID | string |
| Audience Membership | Array of audiences the user is a part of. | lytics\\\_segments | \\\[\]string |

### Configuration

Follow these steps to set up and configure an export job for Gigya in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Gigya** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  (Optional) Toggle **Show Advanced Options**.
    -   (optional) From the **Gigya ID Field** input, select the field name that contains the Gigya unique id.
    -   (optional) From the **Storage** input, select where the user fields get stored in GIGYA.
    -   (optional) Select the **Keep Updated** checkbox, to continuously run this export.
    -   (optional) From the **Time of Day** input, select time of day to start export each day.
    -   (optional) From the **Timezone** input, select timezone for time of day.
9.  Click **Start Export**.\\

![gigya integration export config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama54cea0fb5ed3eb6/47cedc3bd74c187e3e48c683/gigya_integration_export_config.png)
