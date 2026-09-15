---
title: "OneSignal"
description: "OneSignal"
url: /lytics/onesignal
uid: blt29e402141bcd80d7
---

# OneSignal

## OneSignal

## Overview

[OneSignal](https://onesignal.com/) is a platform for mobile push notifications, web push, email, and in-app messaging. OneSignal provides a simple interface to push notifications and email, letting content creators focus on quality user engagement instead of complex implementation.

Integrate Lytics and OneSignal to trigger push notifications to users in your rich, cross-channel Lytics audiences. You can import user data from OneSignal such as device details and aggregate activity data for use in your Lytics audiences.

## Authorization

If you haven't already done so, you will need to set up a OneSignal account before you begin the process described below. You will need your OneSignal **User Auth Key**. See OneSignal's [Account and Keys](https://documentation.onesignal.com/docs/accounts-and-keys#section-user-auth-key) documentation for instructions on obtaining your key.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **OneSignal** from the list of providers.
2.  Select the OneSignal method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **User Auth Key**
6.  Click **Save Authorization**.

![onesignal-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7e9940e2dd1d8539/dff4e402295353e0fc5fa43e/img-0232.png)

## Import Audiences & Activity Data

Import user data from your Apps in OneSignal such as device details and aggregate activity data for use in your Lytics audiences.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: User data is a Batch Integration, with option of daily continuous updates. By default the import will run every 24 hours.
-   **Resulting data**: Users from your Apps on OneSignal.

This integration utilizes the [OneSignal API](https://documentation.onesignal.com/reference) to receive user data. Each run of the job will proceed as follows:

1.  Get the apps as requested.
2.  Filter for valid App IDs.
3.  Get information on users for all apps and place in the Lytics data stream `onesignal_users`.

### Fields

The following fields are included in the default mapping of the `onesignal_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| session\\\_count | session\\\_count | Session Count | int |
| language | os\\\_language | OneSignal Language | string |
| timezone | os\\\_timezone | Timezone | int |
| game\\\_version | os\\\_app\\\_version | App version | string |
| device\\\_os | os\\\_device\\\_os | Device OS | string |
| device\\\_type | os\\\_device\\\_type | Device Type | int |
| device\\\_model | os\\\_device\\\_model | Device Model | string |
| last\\\_active | os\\\_last\\\_active\\\_ts | Last Active on OneSignal | date |
| last\\\_active | last\\\_active\\\_ts | Last Active on Any Channel | data |
| playtime | os\\\_total\\\_time\\\_in\\\_app | Total time in app | int |
| amount\\\_spent | os\\\_total\\\_amount\\\_spent | Total Amount Spent | float |
| created\\\_at | os\\\_created\\\_at | Created At | data |
| invalid\\\_identifier | os\\\_unsubscribed | Unsubscribed | boolean |
| badge\\\_count | os\\\_badge\\\_count | Badge Count | int |
| lat | lat | Latitude | float |
| lon | lon | Longitude | float |
| country | country | Country | string |

### Configuration

Follow these steps to set up an import users job for OneSignal. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **OneSignal** from the list of providers.
2.  Select the **Import Audiences & Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Apps** to import data from. Apps in the right column will be imported.
7.  Select **Keep Updated** to import users continuously. The import will run every 24 hours.
8.  Click **Start Import**.

![OneSignal Import Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd94b47767457cf9a/cc1f85f97d92c63c201af38e/img-0233.png)

## Export Audiences

The OneSignal Export Audiences workflow will send audience membership data to OneSignal as tags, which are used to create segments in OneSignal. For more information about tags see the OneSignal [Using Data Tags](https://documentation.onesignal.com/docs/data-tags) documentation.

The only identifier accepted by OneSignal for export is the OneSignal ID, which will be selected in the configuration form by default if OneSignal data was already imported.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Segments in OneSignal.

This integration utilizes the [OneSignal APIs](https://documentation.onesignal.com/docs) to send user data. Once the user initiates an export, the workflow will:

1.  Take a group of **Audiences** in Lytics.
2.  Export them to segments in **OneSignal**.

### Fields

By default, Lytics exports the following field to OneSignal.

| Lytics User Field | Description | OneSignal Field | Type |
| --- | --- | --- | --- |
| os\\\_id | OneSignal Player ID | os\\\_id | string |

### Configuration

Follow these steps to set up an export of audiences job for OneSignal. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **OneSignal** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **OneSignal Player ID** to configure the field that contains OneSignal Player ID.
7.  Select the **Audiences** to export.
8.  Select **Existing Users** to complete the workflow with existing users in the selected Lytics audience(s).
9.  Click **Start Export**.

![OneSignal Export Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcf235821370bc116/8b27bfa14818c153c465655c/img-0234.png)
