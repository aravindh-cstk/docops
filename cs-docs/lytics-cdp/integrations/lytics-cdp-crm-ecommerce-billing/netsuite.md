---
title: "NetSuite"
description: "NetSuite"
url: /lytics/netsuite
uid: bltb3f608bd642f8962
---

# NetSuite

## NetSuite

## NetSuite Overview

[NetSuite](https://www.netsuite.com/portal/home.shtml) is a Customer relationship management platform that supports marketing, sales and service operations and customer insights.

Integrating Lytics with NetSuite enables you to import consumer data for use in Lytics audiences.

## NetSuite Authorization

If you haven't already done so, you will need to set up a NetSuite account before you begin the process described below. Ensure you have followed the instructions in the [NetSuite authentication documentation](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSATH/NSATH.pdf) to create the 4 keys you need to authorize Lytics to access your NetSuite account.

1.  Select **NetSuite** from the list of providers.
2.  Select the SuiteTalk TBA method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **Account ID** field, enter your NetSuite account ID. To locate your account ID, in Netsuite go to **Setup > Company > Setup Tasks > Company Information**. The account ID field is located near the bottom of the right column.
6.  In the **Token Key** field, enter your token id you created.
7.  In the **Token Secret** field, enter your token Secret you created.
8.  In the **Consumer Key** field, enter your consumer id you created.
9.  In the **Consumer Secret** field, enter your consumer Secret you created.
10.  In the **Description** box, enter a name for your authorization.
11.  Click **Authorize**.

## NetSuite: Import Audiences

Importing your consumer data from Netsuite allows you to use your NetSuite users in Lytics audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: SOAP API Integration.
-   **Frequency**: Batch Integration.
-   **Resulting data**: User Profiles.

This integration utilizes the [NetSuite APIs](https://www.netsuite.com/portal/developers/dev-resources.shtml) to import user data. Once the import is started the job will:

1.  Import all consumers to the `netsuite_consumers` stream.
2.  If configured to run continuously, continue to import any new consumers hourly.

### Fields

The following fields are included in the default mapping of the `netsuite_consumers` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | NetSuite User ID | string |
| internal\\\_id | ns\\\_internal\\\_id `unique id` | NetSuite ID | string |
| company\\\_name | company | Company Name | \\\[\]string |
| first\\\_name | first\\\_name | First Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| account | ns\\\_account | NetSuite Account | string |
| default\\\_address | ns\\\_address | NetSuite Default Address | string |
| budget\\\_approved | ns\\\_budget\\\_approved | NetSuite Budget Approved | string |
| created\\\_time | ns\\\_created\\\_time | NetSuite Created Time | date |
| credit\\\_hold\\\_override | ns\\\_credit\\\_override | NetSuite Credit Override | string |
| email\\\_preference | ns\\\_email\\\_preference | NetSuite Email Preference | string |
| email\\\_transactions | ns\\\_email\\\_transactions | NetSuite Email Transactions | string |
| internal\\\_id | ns\\\_entity\\\_id | NetSuite Entity ID | string |
| external\\\_id | ns\\\_external\\\_id | NetSuite External ID | string |
| fax\\\_transactions | ns\\\_fax\\\_transactions | NetSuite Fax Transactions | string |
| global\\\_subscription\\\_status | ns\\\_global\\\_subscription\\\_status | NetSuite Global Subscription Status | string |
| inactive | ns\\\_inactive | NetSuite Inactive | string |
| is\\\_person | ns\\\_is\\\_person | NetSuite Is Person | string |
| login\\\_access | ns\\\_login\\\_access | NetSuite Login Access | string |
| modified\\\_time | ns\\\_modified\\\_time | NetSuite Modified Time | date |
| print\\\_transactions | ns\\\_print\\\_transactions | NetSuite Print Transactions | string |
| role | ns\\\_role | NetSuite Role | string |
| status | ns\\\_status | NetSuite Status | string |
| subsidiary | ns\\\_subsidiary | NetSuite Subsidiary | string |
| taxable | ns\\\_taxable | NetSuite Taxable | string |
| terms | ns\\\_terms | NetSuite Terms | string |
| unbilled\\\_orders | ns\\\_unbilled\\\_orders | NetSuite Unbilled Orders | string |
| web\\\_lead | ns\\\_web\\\_lead | NetSuite Web Lead | string |

### Configuration

Follow these steps to set up and configure an Import of NetSuite in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **NetSuite** from the list of providers.
2.  Select the **Import Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  From the **Import Since** text input, input the latest date from which you want consumers to be imported. Please use the format `yyyy-mm-dd` (e.g. 2019-03-27).
5.  Select the **Keep Updated** checkbox to make the integration to run continuously.
6.  Click **Start Import**.
