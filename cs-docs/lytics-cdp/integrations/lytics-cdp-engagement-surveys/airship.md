---
title: "Airship"
description: "Airship provides mobile push and location-based messaging services that enable brands to strengthen relationships with their customers."
url: /lytics/airship
---

# Airship

## Airship

## Overview

[Airship](https://www.airship.com/) provides mobile push and location-based messaging services that enable brands to strengthen relationships with their customers.

Connect Airship to Lytics to gain greater insight into your users' activities in your app. Create lists to target in Airship using advanced audience insights and data science from Lytics to drive your conversion rates.

## Authorization

If you haven't already done so, you will need to setup an [Airship account](https://go.urbanairship.com/accounts/register/plan/starter) before you begin the process described below.

1.  Select **Airship** from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Airship supports the following authorization methods:
    -   [Event Stream](#event-stream-authorization): used for Import Events job
    -   [Basic Master](#basic-master-authorization): used for Import Compliance Events and the Export Audiences jobs
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Event Stream Authorization

This authorization is used for the [Import Events](#import-events) job. You will need to [create an access token](https://docs.airship.com/tutorials/manage-project/messaging/bearer-tokens/) for Lytics to use to authorize with Airship.

**Note:** You will need to add the **Direct Connection** or the **Lytics** integration your Airship account to use the event import.

After creating an access token and retrieving your app key, follow these steps configure the authorization between Lytics and Airship.

1.  In the **App Key** field, enter your Airship app key.
2.  In the **Access Token** field, enter your Airship Token.
3.  (Optional) From the **Airship Project Location** dropdown box, select the location of your Airship project location. The default is "US".

![Airship-Authorization-event-stream](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd434e0411921c7e2/d2020bacb6e252617f2b615f/Airship-Authorization-event-stream.png)

### Basic Master Authorization

This Authorization is used for the **Import Compliance Events** and the [Export Audiences](#export-audiences) jobs.

1.  In the **App Key** field, enter your Airship app key.
2.  In the **Master Secret** field, enter your Airship Master Secret.
3.  (Optional) From the **Airship Project Location** dropdown box, select the location of your Airship project location. The default is "US".

![Airship-Authorization-basic-master](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8d8440ffee3ff231/1e9da1b4713386ee54e8c0ce/Airship-Authorization-basic-master.png)

## Import Events

By importing your Airship events into Lytics, you'll be able to use Lytics powerful insights into the channels your users use the most.

### Integration Details

-   **Implementation Type**:Server-side Integration.
-   **Implementation Technique**: Streaming REST API Integration.
-   **Frequency**: Real-time Integration with one time backfill of events after setup.
-   **Resulting Data**: User Fields and Raw Events from Airship.

This integration utilizes the [Airship APIs](https://docs.airship.com/api/connect/) to receive event data. On each run of the job, it will:

1.  [Open event stream](https://docs.airship.com/api/connect/#operation/api/events/post) using the [configured device and event type filters, and event latancey](#configuration). After the first run, the request will include the offset of the last event read.
2.  Collect event data into the airship\_events stream.

### Fields

The following fields are included in the default mapping of the airship\_events stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(occurred) | IF tolower(type) IN ("screen\\\_viewed") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_screen\\\_views | Airship App: Screen View Count | int |
| count(occurred) | IF tolower(type) IN ("open") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_sessions | Airship App: Session Count | int |
| device.channel | IF tolower(device.device\_type) IN ("email") | airship\\\_email\\\_id | Airship Email Channel ID | string |
| device.named\\\_user\\\_id |  | airship\\\_user\\\_id unique id | Named User ID | string |
| email(device.delivery\\\_address) | IF tolower(device.device\_type) IN ("email") | email unique id | Email Address | string |
| epochms() |  | airship\\\_last\\\_app\\\_event\\\_ts | Last App Event | date |
| match("body.current.") | IF eq(type, "TAG\\\_CHANGE") | airship\\\_app\\\_tags | App Tags | map\\\[string\]value |
| max(epochms()) | IF tolower(type) IN ("first\\\_open") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_last\\\_install | Airship App: Last Install Date | date |
| max(epochms()) | IF tolower(type) IN ("uninstall") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_last\\\_uninstall | Airship App: Last Uninstall Date | date |
| max(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("bounce") | airship\\\_email\\\_last\\\_bounce | Airship Email: Last Bounce Timestamp | date |
| max(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("click") | airship\\\_email\\\_last\\\_click | Airship Email: Last Click Timestamp | date |
| max(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("delivery") | airship\\\_email\\\_last\\\_delivery | Airship Email: Last Delivery Timestamp | date |
| max(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("open") | airship\\\_email\\\_last\\\_open | Airship Email: Last Open Timestamp | date |
| max(epochms()) | IF tolower(type) IN ("send") AND tolower(device.device\_type) IN ("email") | airship\\\_email\\\_last\\\_send | Airship Email: Last Send Timestamp | date |
| max(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("unsubscribe") | airship\\\_email\\\_last\\\_unsub | Airship Email: Last Unsubscribe Timestamp | date |
| min(epochms()) | IF tolower(type) IN ("first\\\_open") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_first\\\_install | Airship App: First Install Date | date |
| min(epochms()) | IF tolower(type) IN ("uninstall") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_first\\\_uninstall | Airship App: First Uninstall Date | date |
| min(epochms()) |  | airship\\\_created\\\_ts | Created Date | date |
| min(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("bounce") | airship\\\_email\\\_first\\\_bounce | Airship Email: First Bounce Timestamp | date |
| min(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("click") | airship\\\_email\\\_first\\\_click | Airship Email: First Click Timestamp | date |
| min(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("open") | airship\\\_email\\\_first\\\_open | Airship Email: First Open Timestamp | date |
| min(epochms()) | IF tolower(type) IN ("send") AND tolower(device.device\_type) IN ("email") | airship\\\_email\\\_first\\\_send | Airship Email: First Send Timestamp | date |
| min(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("unsubscribe") | airship\\\_email\\\_first\\\_unsub | Airship Email: First Unsubscribe Timestamp | number |
| min(epochms()) | IF tolower(type) IN ("custom") AND tolower(device.device\_type) IN ("email") AND tolower(body.name) IN ("delivery") | airship\\\_email\\\_fist\\\_delivery | Airship Email: First Delivery Timestamp | date |
| set(body.viewed\\\_screen) | IF tolower(type) IN ("screen\\\_viewed") AND tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_screens\\\_viewed | Airship App: Screens Viewed | \\\[\]string |
| set(device.device\\\_type) |  | airship\\\_device\\\_types | Airship: All Devices used | \\\[\]string |
| set(device.amazon\\\_channel) |  | airship\\\_amazon\\\_devices | Amazon Device IDs | \\\[\]string |
| set(device.android\\\_channel) |  | airship\\\_android\\\_devices | Android Device IDs | \\\[\]string |
| set(device.channel) |  | airship\\\_device\\\_channel unique id | Airship Channel ID(s) | \\\[\]string |
| set(device.ios\\\_channel) |  | airship\\\_apple\\\_devices | Apple Device IDs | \\\[\]string |
| tobool(device.attributes.push\\\_opt\\\_in) | IF tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_push\\\_permission | Airship App: Push Notifications Opt-In | bool |
| valuect(type) | IF tolower(device.device\_type) IN ("ios", "android", "amazon") | airship\\\_app\\\_event\\\_counts | Airship App: Event Count per App Event | map\\\[string\]intsum |
| valuect(type) | IF tolower(type) IN ("send") AND tolower(device.device\_type) IN ("email") | airship\\\_email\\\_event\\\_counts | Airship Email: Event Count per Email Event | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import job for Airship in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Airship** from the list of providers.
2.  Select the **Import Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.

![configure-import-airship.jpg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9f38e3dce633e004/178a4211fcf984e8932d10b2/configure-import-airship.jpg)

1.  (Optional) In the **Maximum Event Age (days)** text box, enter the maximum age of a message to be imported. If left blank, only new events will be imported.
2.  (Optional) Using the **Device Types** input, select the types of device you would like events from. Devices on the right will be included. If no Devices are selected, all device types will be imported.
3.  (Optional) Using the **Event Types** input, select the types of events you would like to import. Event Types on the right will be included. If no Event Types are selected, all event types will be imported.
4.  (Optional) In the **Push ID** text box, enter the ID of a push message to only import events related to that push. Note: you may only include one of **Group ID** and **Push ID**.
5.  (Optional) In the **Group ID** text box, enter the ID of a group to only import events related to that group. Note: you may only include one of **Group ID** and **Push ID**.
6.  Click **Start Import**.

## Export Audiences

Export your Lytics audiences to Airship to use Lytics-powered insights in your mobile campaigns. Use your advanced data science driven audiences in Lytics as your push targets in Airship.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration (File Based Transfer Integration)
-   **Frequency**: Batch Integration One-time or continuous hourly, daily, weekly, or monthly exports where the time of day can be configured.
-   **Resulting Data**: A new or existing list in Airship populated with channel identifiers from Lytics users.

This integration utilizes the [Airship APIs](https://docs.airship.com/api/ua/#tag/static-lists) to create a static list of users. Users without an email channel will be registered and associated with a named user ID if available. Once the user initiates an export, the job will:

1.  On the first run, the export will [create a static list](https://docs.airship.com/api/ua/#operation/api/lists/post) in Airship. If an existing list was selected during configuration, this step is skipped.
2.  Scan through the users in the Lytics audience.
3.  For any users with an email address, but no email channel ID, [register the email address with Airship](https://docs.airship.com/api/ua/#operation/api/channels/email/post).
4.  [Associate](https://docs.airship.com/api/ua/#operation/api/named_users/associate/post) newly created email channel ID with the named user ID.
5.  Build a CSV containing user channel identifier types and identifiers.
6.  [Update the list](https://docs.airship.com/api/ua/#operation/api/lists/name/csv/put) in Airship with the user CSV.

**Note**: Large audiences may take longer than an hour to export.

#### Fields

The following fields can be mapped for export as part of the audience export to Airship.

| Lytics User Field | Airship Field | Description | Type |
| --- | --- | --- | --- |
| User configurable | amazon\\\_channel | Amazon channel UUID | string |
| User configurable | android\\\_channel | Android channel UUID | string |
| User configurable | email\\\_channel | Email channel UUID | string |
| User configurable | ios\\\_channel | iOS channel UUID | string |
| User configurable | named\\\_user | Named User channel UUID | string |
| User configurable | open\\\_channel | Open channel UUID | string |
| User configurable | sms\\\_channel | SMS channel UUID | string |

### Configuration

Follow these steps to set up and configure an export job for Airship in the Lytics platform.

1.  Select **Airship** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Required) From the **Audience** drop-down, select the Lytics audience you want to export to Airship.
7.  (Optional) From the **List** drop-down, select an existing static list to export the audience to. Either a **List** must be selected or a **List Name** must be entered below.
8.  (Optional) In the **List Name** text box, enter the name of a list to create in Airship. Either a **List** must be selected or a **List Name** must be entered.
9.  (Optional) From the **Email Field** drop-down, select the Lytics field that contains **Email Address** of the user. This **Email** will be used to register new users in Airship.
10.  (Optional) From the **Named User ID Field** drop-down, select a field to use when associating a newly registered email with a named user. If a field is selected, its value will be used as the named user id to associate the registered email with the named user. If left blank registered emails will not be associated with a named user.
11.  Use the **Identifier Field Mapping** input to map the Lytics user field (on the left) to the Airship channel (right). Note: The Lytics field must contain the user's Airship channel UUID.

![airship_export_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am26f1485932335bb7/e3d111680e8af1659e64e0a8/airship_export_1.png)

1.  (Optional) Select the **Commercial Opt-In Field** which represents the date-time when the user subscribed to the **Commercial** emails.
2.  (Optional) Select the **Commercial Opt-out Field** which represents the date-time when the user unsubscribed from the **Commercial** emails.
3.  (Optional) Select the **Transactional Opt-in Field** which represents the date-time when the user subscribed to the **Transactional** emails.
4.  (Optional) Select the **Transactional Opt-out Field** which represents the date-time when the user unsubscribed from the **Transactional** emails.

![airship_export_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4cd0fae88768e2aa/dacf0623755eec7a7baf230f/airship_export_2.png)

1.  (Optional) Select the **Keep Updated** checkbox to run the export at a configurable frequency. The default is daily at midnight UTC.
2.  (Optional) From the **List Update Frequency** drop-down, select the frequency you would like the export to run. Note: Large audiences may take more than an hour to export to Airship.
3.  (Optional) From the **Time of Day** drop-down, select the time of day the export should run for daily, weekly, and monthly exports.
4.  (Optional) From the **Timezone** drop-down, select the timezone to use for **Time of Day**.
5.  Click **Start Export**.

![airship_export_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame9f7d6bf3b07274f/e3112087a92ec1e60ffb4fc1/airship_export_3.png)
