---
title: "Salesforce Pardot"
description: "Salesforce Pardot"
url: /lytics/pardot
uid: blt47c1ec5fbc0dcdb4
---

# Salesforce Pardot

## Salesforce Pardot

## Overview

[Salesforce Pardot](https://www.pardot.com/) is a marketing automation solution. Pardot helps make meaningful connections and empower sales to close more deals.

## Authorization

If you haven't already done so, you will need to set up a Salesforce Pardot account before you begin the process described below. Salesforce Pardot supports OAuth2, which allows you to simply enter your username and password to connect Lytics with Pardot.

To make full use of the import and export integrations you will need an account with List, Prospect, Prospect Account, Opportunity, and Visitor view/edit permissions. The built in Administrator and Marketer roles have all of these permissions.

| Permissions | Admin | Marketing | Sales Manager | Sales |
| --- | --- | --- | --- | --- |
| Prospects | Full | Full | Full | Only assigned prospects |
| Segmentation: Lists | Full | Full | No | No |
| Accounts | Full | Full | Full | No |
| Opportunities | Full | Full | Full | Full |
| Visitors | Full | Full | Full | Only assigned Visitors |

If you use an account without permissions to some data, the integration will not be able to interact with that data. See Pardot's [roles documentation](https://help.salesforce.com/articleView?id=pardot_default_user_roles.htm\&type=5) for role details.

Pardot does not currently support accessing an opportunity's custom fields through their API.

The user connecting with Pardot must also have a Pardot user that is synced with a Salesforce user. Your user is synced if it has a CRM username. As shown below, you can verify this under Users in Pardot Settings. ![Salesforce Pardot synced user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am20f220a563603b2a/42c4a37996d56cf49eac6272/img-0237.png)

You will also need your Pardot business unit ID. As shown below, this can be located under Pardot Account Setup. ![Pardot Business Unit ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0c9b81a7552d7937/bc5ce4f9c20628fc5859faaf/img-0238.png)

You can read more on [Salesforce-Pardot authentication](https://developer.pardot.com/kb/authentication/#authentication).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select Pardot from the list of providers.
2.  Select the Pardot OAuth Login method for authorization.
3.  Enter your Pardot login credentials in the login popup.
4.  In the **Label** text box, enter a name for the authorization
5.  (optional) In the **Description** text box, enter a description for this authorization
6.  In the **Pardot Business Unit ID** text box, enter your Pardot business unit ID.
7.  Select the **AMPSEA feature enabled** checkbox if your account allows multiple prospects to have the same email address.
8.  Click **Save Authorization**.

If IP restrictions are enabled for your Pardot account, you will need to have an administrator add Lytics' IP addresses to the approved list. Contact your Account Manager for the current list of Lytics' IP addresses.

## Import Audiences and Activity Data

Import your Pardot prospects, prospect accounts, opportunities, visitors, visitor activities, and lists into Lytics. You can use this detailed data to build and refind your existing Lytics audience to power better, cross-channel campaigns.

### Integration Details

-   **Implementation Type**: Client-side Integrations
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration, Real-time Integration
-   **Resulting data**: User Profiles and User Fields

This integration utilizes [Salesforce Pardot APIs](https://developer.salesforce.com/docs/marketing/pardot/overview) to import audiences and activity data. Once the import is started, the job will:

1.  [Fetch Prospects](https://developer.salesforce.com/docs/marketing/pardot/guide/prospects-v3.html).
2.  [Fetch List Members](https://developer.salesforce.com/docs/marketing/pardot/guide/list-memberships-v3.html).
3.  [Fetch Opportunities](https://developer.salesforce.com/docs/marketing/pardot/guide/opportunities-v3.html).
4.  [Fetch Prospect Accounts](https://developer.salesforce.com/docs/marketing/pardot/guide/prospect-accounts-v3.html).
5.  [Fetch Visitors](https://developer.salesforce.com/docs/marketing/pardot/guide/visitors-v3.html).
6.  [Fetch Visitor Activity](https://developer.salesforce.com/docs/marketing/pardot/guide/visitor-activities-v3.html).
7.  If the job is configured to update continuously, the job will sleep. Otherwise, the job will complete.

All the above user and activity data can be configured to start at a specified date. Otherwise, the default will be to fetch data from the last 90 days.

### Fields

The following fields are included in the default mapping of the `pardot_lists` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| created\\\_at | pd\\\_list\\\_membership\\\_created\\\_at | Pardot list membership created at | string |
| list\\\_CRM\\\_visible | pd\\\_list\\\_crm\\\_visible | Pardot list is CRM visible | string |
| list\\\_created\\\_at | pd\\\_list\\\_created\\\_at | Pardot list created at | string |
| list\\\_description | pd\\\_list\\\_description | Pardot list description | string |
| list\\\_dynamic | pd\\\_list\\\_dynamic | Pardot list is dynamic | string |
| list\\\_id | pd\\\_list\\\_id | Pardot list ID | string |
| list\\\_name | pd\\\_list\\\_name | Pardot list name | string |
| list\\\_public | pd\\\_list\\\_public | Pardot list is public | string |
| list\\\_title | pd\\\_list\\\_title | Pardot list title | string |
| list\\\_updated\\\_at | pd\\\_list\\\_updated\\\_at | Pardot list updated at | string |
| opted\\\_out | pd\\\_list\\\_opted\\\_out | Pardot prospect opted out of list membership | string |
| prospect\\\_id | pd\\\_prospect\\\_id `unique id` | Pardot prospect ID | string |
| updated\\\_at | pd\\\_list\\\_membership\\\_updated\\\_at | Pardot list membership updated at | string |

The following fields are included in the default mapping of the `pardot_opportunities` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| created\\\_at | pd\\\_opportunity\\\_created\\\_at | Pardot opportunity created at | string |
| id | pd\\\_opportunity\\\_id | Pardot opportunity ID | string |
| prospect\\\_id | pd\\\_prospect\\\_id `unique id` | Pardot prospect ID | string |
| updated\\\_at | pd\\\_opportunity\\\_updated\\\_at | Pardot opportunity updated at | string |

The following fields are included in the default mapping of the `pardot_prospects` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| address\\\_one | pd\\\_address\\\_one |  | string |
| address\\\_two | pd\\\_address\\\_two |  | string |
| annual\\\_revenue | pd\\\_annual\\\_revenue |  | string |
| campaign\\\_id | pd\\\_campaign\\\_id |  | string |
| city | pd\\\_city |  | string |
| comments | pd\\\_comments |  | string |
| company | pd\\\_company |  | string |
| country | pd\\\_country |  | string |
| crm\\\_account\\\_fid | pd\\\_crm\\\_account\\\_fid |  | string |
| crm\\\_contact\\\_fid | pd\\\_crm\\\_contact\\\_fid |  | string |
| crm\\\_last\\\_sync | pd\\\_crm\\\_last\\\_sync |  | string |
| crm\\\_lead\\\_fid | pd\\\_crm\\\_lead\\\_fid |  | string |
| crm\\\_owner\\\_fix | pd\\\_crm\\\_owner\\\_fix |  | string |
| crm\\\_url | pd\\\_crm\\\_url |  | string |
| department | pd\\\_department |  | string |
| email(email) | email `unique id` |  | string |
| employees | pd\\\_employees |  | string |
| fax | pd\\\_fax |  | string |
| first\\\_name | pd\\\_first\\\_name |  | string |
| grade | pd\\\_grade |  | string |
| id | pd\\\_prospect\\\_id `unique id` | Pardot prospect ID | string |
| industry | pd\\\_industry |  | string |
| is\\\_do\\\_not\\\_call | pd\\\_is\\\_do\\\_not\\\_call |  | string |
| is\\\_do\\\_not\\\_email | pd\\\_is\\\_do\\\_not\\\_email |  | string |
| is\\\_reviewed | pd\\\_is\\\_reviewed |  | string |
| is\\\_starred | pd\\\_is\\\_starred |  | string |
| job\\\_title | pd\\\_job\\\_title |  | string |
| last\\\_activity\\\_id | pd\\\_last\\\_activity\\\_id |  | string |
| last\\\_name | pd\\\_last\\\_name |  | string |
| notes | pd\\\_notes |  | string |
| opted\\\_out | pd\\\_opted\\\_out |  | string |
| password | pd\\\_password |  | string |
| phone | pd\\\_phone |  | string |
| prospect\\\_account\\\_id | pd\\\_prospect\\\_account\\\_id |  | string |
| recent\\\_interaction | pd\\\_recent\\\_interaction |  | string |
| salutation | pd\\\_salutation |  | string |
| score | pd\\\_score |  | string |
| source | pd\\\_source |  | string |
| state | pd\\\_state |  | string |
| territory | pd\\\_territory |  | string |
| website | pd\\\_website |  | string |
| years\\\_in\\\_business | pd\\\_years\\\_in\\\_business |  | string |
| zip | pd\\\_zip |  | string |

The following fields are included in the default mapping of the `pardot_prospect_accounts` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| assigned\\\_to | pd\\\_assigned\\\_to | Pardot user ID assigned to | string |
| created\\\_at | pd\\\_prospect\\\_account\\\_created\\\_at | Pardot prospect account created at | string |
| id | pd\\\_prospect\\\_account\\\_id | Pardot prospect account ID | string |
| prospect\\\_id | pd\\\_prospect\\\_id `unique id` | Pardot prospect ID | string |
| updated\\\_at | pd\\\_prospect\\\_account\\\_updated\\\_at | Pardot prospect account updated at | string |

The following fields are included in the default mapping of the `pardot_visitor_activity` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| mapct(hourofday()) | pd\\\_hourly |  | map\\\[string\]intsum |
| mapct(type\\\_name) | pd\\\_activity\\\_types |  | map\\\[string\]intsum |
| mapct(yymm()) | pd\\\_yymm |  | map\\\[string\]intsum |
| prospect\\\_id | pd\\\_prospect\\\_id `unique id` |  | string |
| set(campaign\\\_id) | pd\\\_campaign\\\_ids |  | \\\[\]string |
| set(campaign\\\_name) | pd\\\_campaigns |  | \\\[\]string |
| set(details) | pd\\\_details |  | \\\[\]string |
| set(email\\\_id) | pd\\\_email\\\_ids |  | \\\[\]string |
| set(file\\\_id) | pd\\\_file\\\_ids |  | \\\[\]string |
| set(form\\\_handler\\\_id) | pd\\\_form\\\_handler\\\_ids |  | \\\[\]string |
| set(form\\\_id) | pd\\\_form\\\_ids |  | \\\[\]string |
| set(landing\\\_page\\\_id) | pd\\\_landing\\\_page\\\_ids |  | \\\[\]string |
| set(multivariate\\\_test\\\_variation\\\_id) | pd\\\_multivariate\\\_variation\\\_ids |  | \\\[\]string |
| set(paid\\\_search\\\_id\\\_id) | pd\\\_paid\\\_search\\\_ids |  | \\\[\]string |
| set(site\\\_search\\\_query\\\_id) | pd\\\_site\\\_search\\\_ids |  | \\\[\]string |
| set(visitor\\\_id) | pd\\\_visitor\\\_ids `unique id` |  | \\\[\]string |
| set(visitor\\\_page\\\_view\\\_id) | pd\\\_page\\\_view\\\_ids |  | \\\[\]string |

The following fields are included in the default mapping of the `pardot_visitors` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| browser | pd\\\_browser |  | string |
| browser\\\_version | pd\\\_browser\\\_version |  | string |
| campaign\\\_parameter | pd\\\_campaign\\\_parameter |  | string |
| content\\\_parameter | pd\\\_content\\\_parameter |  | string |
| hostname | pd\\\_hostname |  | string |
| ip\\\_address | pd\\\_ip\\\_address |  | string |
| is\\\_flash\\\_enabled | pd\\\_is\\\_flash\\\_enabled |  | string |
| is\\\_java\\\_enabled | pd\\\_is\\\_java\\\_enabled |  | string |
| language | pd\\\_language |  | string |
| medium\\\_parameter | pd\\\_medium\\\_parameter |  | string |
| operating\\\_system | pd\\\_operating\\\_system |  | string |
| operating\\\_system\\\_version | pd\\\_operating\\\_system\\\_version |  | string |
| page\\\_view\\\_count | pd\\\_page\\\_view\\\_count |  | string |
| screen\\\_height | pd\\\_screen\\\_height |  | string |
| screen\\\_width | pd\\\_screen\\\_width |  | string |
| set(id) | pd\\\_visitor\\\_ids `unique id` |  | \\\[\]string |
| source\\\_parameter | pd\\\_source\\\_parameter |  | string |
| term\\\_parameter | pd\\\_term\\\_parameter |  | string |

### Configuration

Follow these steps to set up and configure an import job for Pardot in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Pardot** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  (optional) From the **Timezone** input, select timezone for Pardot account.
8.  (optional) Select the **Keep Updated** checkbox, to import continuously. ![pardot integration import config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am288cd27571feadcd/93d326db7dcebe5f28c16ca4/img-0239.png)
9.  (Optional) Toggle **Show Advanced Options**.
10.  (optional) In the **List Membership Since** text box, enter the earliest date from which to import list membership. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
11.  (optional) In the **Prospects Since** text box, enter the earliest date from which to import prospects. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
12.  (optional) In the **Opportunities Since** text box, enter the earliest date from which to import opportunities. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
13.  (optional) In the **Prospect Accounts Since** text box, enter the earliest date from which to import prospect accounts. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
14.  (optional) In the **Visitors Since** text box, enter the earliest date from which to import visitors. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
15.  (optional) In the **Visitor Activity Since** text box, enter the earliest date from which to import visitor activity. RFC3339 formatted (i.e. `YYYY-MM-DDThh:mm:ss+00:00`).
16.  Click the **Start job** button to start the job

## Export Audiences

Export audiences to Pardot and create prospect lists that will be updated.

### Integration Details

-   **Implementation Type**: Client-side Integrations
-   **Implementation Technique**:REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration with a one-time Batch Integration of the audience after job setup.
-   **Resulting data**: [Pardot prospects added to a list](https://developer.salesforce.com/docs/marketing/pardot/guide/prospects-v3.html) with user from the selected Lytics audience. Only known users with an email are exported.

This integration utilizes [Salesforce Pardot APIs](https://developer.salesforce.com/docs/marketing/pardot/overview) to export users to a list in Pardot. Once the export is started, the job will:

1.  Run a backfill by creating or updating existing users in Pardot. Users will be added to the configured list.
2.  After a backfill, the job will receive real-time updates when a user enters the audience.
3.  For each user entering the selected audience, the job will create or update the user in Pardot and add them to the configured list. Only known users with valid email identifiers are included in the export.

### Fields

By default, Lytics exports the following fields to Pardot:

| Lytics User Field | Description | Pardot Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |

### Configuration

Follow these steps to set up and configure an export job for Pardot in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Pardot** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job. ![pardot integration export configure](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9d3060aabf20df8a/890d5bddcee511755d41cbda/img-0240.png)
8.  From the **Email Field** input, select the field that is the prospect's email address.
9.  From the **List ID** input, select the list to add the Prospects to.
10.  (Optional) Toggle **Show Advanced Options**.
11.  (optional) From the **ID Field** input, select the field that is the prospect's Pardot ID.
12.  Click the **Start job** button to start the job
