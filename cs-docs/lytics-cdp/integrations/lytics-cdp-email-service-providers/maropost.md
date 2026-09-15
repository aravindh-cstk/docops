---
title: "Maropost"
description: "Maropost"
url: /lytics/maropost
uid: bltaa7c1e9da7f28d3d
---

# Maropost

## Maropost

## Overview

[Maropost](https://www.maropost.com/) is a cloud-based revenue optimization suite that gives companies the ability to increase multi-channel customer engagement to maximize revenue.

Connect Maropost and Lytics to import your user email and activity data for improved segmentation. Activity data such as opens, clicks, and unsubscribes can help inform your behavioral, cross-channel audiences. Export your Lytics audiences back into Maropost to make your next campaign personal and powerful.

## Authorization

If you haven't already done so, you will need to setup a Maropost account before you begin the authorizations steps described below. To authorize this integration, you need to be an administrator of your Maropost account, and you will need the following:

-   **Account Number**: the digit in your Maropost URL. For example, when you log into Maropost and your URL looks like `http://app.maropost.com/accounts/4/dashboard`, then your account number is "4".
-   **API Key**: follow the steps below to get your API Key in Maropost.

1.  Scroll over your username name in the top right corner.
2.  Select **Connections**.
3.  On the connections page choose **API Keys**.
4.  Click **Add Key**. ![Maropost Add Key button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame0f93483722f2e64/f77bdd24eead6f6c0483fa4b/img-0207.png)
5.  Generate a new key. Make sure at least `Campaigns`, `Account`, `Contacts`, and `Reports` are selected and click **Add**. ![Maropost Add Key form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6c9269bc80e9c1bc/77a3e8c9a1dbc594028e51ac/img-0208.png)
6.  Copy the newly generated API Key and use it in the Lytics authorization steps below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Maropost** from the list of providers.
2.  Select the Maropost method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Add your Maropost Account number and API Key.
6.  Click **Save Authorization**.

## Import Audiences & Activity Data

Importing Maropost users and activity into Lytics results in new or updated user profiles. Once imported, Lytics can use this Maropost data to inform our machine learning based enrichments, and this data enables you to improve audience targeting for your cross-channel customer journeys orchestrated by Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Contacts use a Batch Integration imported daily, on a continuous basis. Activity data use a Batch Integration imported hourly.
-   **Resulting Data**: Full User Profiles for all Maropost contacts in the selected lists. Activity data related to marketing campaigns will be collected as additional User Fields.

This integration utilizes the [Maropost APIs](http://api.maropost.com/api) to receive contact data. The job will:

1.  Initially import all contacts in the selected Maropost lists through the [contacts](http://api.maropost.com/api) endpoint.
2.  Import activity for the configured number of days is imported via the [reports](http://api.maropost.com/api) API for each event type: opens, bounces, clicks, unsubscribes, and complaints.
3.  After the initial import, contacts are checked daily at midnight PST and only updated contacts are imported. New activity is imported every hour.

### Fields

The following user fields are included in the default mapping of the `maropost_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| account\\\_id | ma\\\_account\\\_id | Maropost Account ID | string |
| list, list\\\_status | ma\\\_list\\\_status | Maropost List Status | map\\\[string\]value |
| id | ma\\\_id | Maropost ID | string |
| email | email `unique id` | Email | string |
| first\\\_name | first\\\_name | First Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone | phone | Phone | string |
| fax | fax | Fax | string |



The following activity fields are included in the default mapping of the `maropost_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | Email | string |
| id | ma\\\_id | Maropost ID | string |
|  | last\\\_active\\\_ts | Last Active on Any Channel | date |
| browser | ma\\\_browser | Browser | string |
| campaign\\\_id | ma\\\_campaign\\\_id | Maropost Last Active Campaign | string |
| campaign\\\_id | ma\\\_campaign\\\_ids | Maropost Campaigns | \\\[\]string |
| campaign\\\_tags | ma\\\_campaign\\\_tags | Maropost Campaign Tags | \\\[\]string |
| url | ma\\\_email\\\_urls | Maropost URLs | \\\[\]string |
| url | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| account\\\_id | ma\\\_account\\\_id | Maropost Account ID | string |
|  | ma\\\_lastopen\\\_ts | Maropost Last Open | date |
|  | ma\\\_firstopen\\\_ts | Maropost First Open | date |
| event | ma\\\_openct | Maropost Open Count | int |
|  | ma\\\_lastclick\\\_ts | Maropost Last Click | date |
|  | ma\\\_firstclick\\\_ts | Maropost First Click | date |
| event | ma\\\_clickct | Maropost Click Count | int |
|  | ma\\\_lastbounce\\\_ts | Maropost Last Bounce | date |
|  | ma\\\_firstbounce\\\_ts | Maropost First Bounce | date |
| event | ma\\\_bouncect | Maropost Bounce Count | int |
|  | email\\\_monthly | Email opens By Month | map\\\[string\]intsum |
|  | email\\\_hourofweek | Email Hour of Week Events | map\\\[string\]intsum |
|  | email\\\_hourlyopen | Email Hourly Events | map\\\[string\]intsum |

### Configuration

Follow these steps to set up and configure an import of user and email activity into Lytics. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Maropost** from the list of providers.
2.  Select the **Import Audiences & Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  To configure the import, select the Maropost **Lists** that you want to import user data from. Activity data from the past 180 days will be imported. To only import user data, uncheck **Activity**.![Screen Shot 2018-11-30 at 13 18 26](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5d5b6652ef22bf9a/e5958b9919edd8885aaabfca/img-0209.png)
7.  This import will run continuously by default. If you would like to do a one-time import, uncheck **Keep Updated** in the Advanced Options section.
8.  Click **Start Import**.

## Export Audiences

Starting this job will sync a Lytics audience to a Maropost list allowing you to run email campaigns based on relevant targeting criteria such as cross-channel behavior, content affinities, and more.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Contacts are added/updated in a Maropost list.

This integration utilizes the [Maropost APIs](http://api.maropost.com/api) to send user data. Once initiated, an export job will go as follows:

1.  Users in the Lytics audience will be added to the Maropost list, with email, first name, last name, and any custom field mappings sent to Maropost via the **Contacts** endpoint in Maropost.
2.  Additionally, the Lytics audience name will be added as a [tag](https://support.maropost.com/hc/en-us/articles/360015583014-Contact-Profile-Tags-) in Maropost.
3.  As users enter or exit the Lytics audience, the tag will be added or removed from the contact profile in Maropost.

### Fields

By default, Lytics exports the following fields to a Maropost contact:

| Lytics User Field | Description | Maropost Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
| first\\\_name | First Name | first\\\_name | string |
| last\\\_name | Last Name | last\\\_name | string |

### Configuration

Follow these steps to set up and configure your audience export to Maropost. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Maropost** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audience** you want to export. Push notifications will be sent to users as they enter the audience.
7.  Select the **List** to export users into Maropost.
8.  Check **Keep Updated** if you want to continually update the Maropost list.
9.  (Optional) Under **Field Mappings**, map Lytics fields to Maropost fields. As users are exported to Maropost, if the user field exists in Lytics, then it will be updated in Maropost. ![maropost export configure](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame677a91010ee518c/6011d35370128a8a9102f1b8/img-0210.png)
10.  Click **Start Export**.

Contacts should be updated in Maropost within a few minutes with the Lytics audience tags, and any other mapped fields. As users _enter_ or _exit_ the Lytics audience, updates will be sent to Maropost continuously until the export job is stopped.
