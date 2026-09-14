---
title: "Criteo"
description: "Criteo is the global commerce media company that enables marketers and media owners to drive better commerce outcomes. Its industry leading Commerce Media…"
url: /lytics/criteo
---

# Criteo

## Criteo

## Overview

[Criteo](https://www.criteo.com/) is the global commerce media company that enables marketers and media owners to drive better commerce outcomes. Its industry leading Commerce Media Platform connects 22,000 marketers and thousands of media owners to deliver richer consumer experiences from product discovery to purchase. By powering trusted and impactful advertising, Criteo supports an open internet that encourages discovery, innovation, and choice.

Integrating Criteo with Lytics enables you to export audiences that use behavioral user data and content affinities powered by machine learning on Lytics to improve your personalized ads display.

## Authorization

If you haven't already done so, you will need to [setup a Criteo account](https://www.criteo.com/get-started/) before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

There are two ways you can connect Lytics with Criteo:

-   [Criteo Real Time](#criteo-real-time)
-   [Criteo OAuth](#criteo-oauth)

### Criteo Real Time

You would need Client ID and Client Secret in order to use this authorization. For this, you will need to setup an [App in Criteo's Developer Center](https://developers.criteo.com/marketing-solutions/docs/create-your-app). To set up an app, you must first create a Developer’s Account and an Organization in Criteo’s Developer Portal. Upon creating an app, you will be asked whether you would like to use a developer key or a client ID & secret. Select client ID and secret and store your credentials in a secure place. Please refer to this [Criteo documentation](https://developers.criteo.com/marketing-solutions/docs/authentication#get-your-credentials-through-the-developer-portal-self-service) for more information on how to create client id and client secret.

Follow the steps below to add this authorization in Lytics:

1.  Select **Criteo** from the list of providers.
2.  Select the **Criteo Real Time** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (optional) In the **Description** text box, enter a description for this authorization
5.  In the **Client ID** text box, enter your Client ID credential.
6.  In the **Client Secret** password box, enter your Client Secret credential.
7.  Click **Save Authorization**.

![Criteo - Integration Auth Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5ed923c043fc107a/d50334ab8114f703abd545ec/image.png)

### Criteo OAuth

When you select this authorization type, a Criteo LogIn pop up window will be visible. Once you log in, you will be redirected to the Advertiser Consent Dashboard. You can select which portfolio would you like give Lytics access to in order to export audience. Once provided access, Lytics will be able to send users to the advertiser.

Please refer to [Criteo OAuth](https://developers.criteo.com/marketing-solutions/docs/oauth-app-implementation) documentation for more information on how OAuth works with Criteo.

Follow the steps below to add this authorization in Lytics:

1.  Select **Criteo** from the list of providers.
2.  Select the **Criteo OAuth** method for authorization.
3.  Enter your Criteo login credentials in the login popup and confirm the authorization.
4.  In the **Label** text box, enter a name for the authorization
5.  (optional) In the **Description** text box, enter a description for this authorization
6.  Click **Save Authorization**.

## Export Audiences

Export your Lytics audiences to Criteo to target a refined set of users with your advertisements. Target based off of interests, and cross-channel behaviors, and the unique data science insights provided by Lytics to get the most out of your ad spend.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Real-time Integration audience membership updates, with an optional one-time Backfill.
-   **Resulting data**: Users are added and removed from Criteo audiences via configurable user identifier.

**Note:** According to Criteo documentation, it takes [12-24 hours for an audience update](https://developers.criteo.com/marketing-solutions/docs/contact-list) to process all data received, even with frequent uploads from Lytics.

This integration utilizes the [Criteo Marketing API](https://developers.criteo.com/marketing-solutions/docs/welcome-to-criteo) to update audience memberships. Once an export is started, the job will export in near real-time updates when a user enters or exits the audience selected. On the first run of the job it will:

1.  [Create a Criteo audience](https://developers.criteo.com/marketing-solutions/docs/audience#creating-a-new-audience) if one is not selected when the export runs for the first time. By default, it will be named Lytics {audience slug} {current timestamp}.

For each user to export, regardless if the user is being added as part of a backfill or they're entering/exiting the audience in real-time, it will:

1.  Check if the incoming user has a configured identifier. Users without identifier will be dropped by the job.
2.  If the user has an identifier, add the user to a queue to be sent as a batch of users to Criteo.
3.  After a minute or if the queue reaches 30,000 users (whichever happens first), users in the queue will be [added or removed from the Criteo audience](https://developers.criteo.com/marketing-solutions/docs/contact-list#adding-and-removing-users-in-an-audience) appropriately as a batch.
4.  Repeats step 1 to 3 as users enter/exit the audience.

### Fields

Lytics exports on of the following fields to Criteo. Note that you can customize the Lytics source fields as part of the job configuration:

| Lytics User Field | Description | Criteo Field | Type |
| --- | --- | --- | --- |
| email | Email Address | email | string |
| criteo\\\_id | Criteo GUM ID | gum | string |
|  | LiveRamp Idenliveramp\\\_idtity Link | identityLink | string |
|  | Mobile Ad Identifier | madid | string |
|  | Customer ID (Only for Retail Media Customer Lists) | customerid | string |

**Note:** In order to populate Criteo GUM ID into your Lytics account so it's available to export, you must first activate the Lytics JS Tag cookie sync with Criteo in [your account settings](/docs/lytics/account-settings#tag).

### Configuration

Follow these steps to set up and configure an export job for Criteo in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Criteo** from the list of providers.
2.  Select the **Export Audience** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Lytics Audience** to export.
7.  From the **Advertiser** input, select a Criteo advertiser to select an audience from.
8.  From the **Criteo Audience** input, select an audience to populate. If left empty, a new audience with name format Lytics {segment\_slug} {ts in format YYYYMMDD\_HHmmss} will be created in Criteo.
9.  From the **Identifier Type** input, select the identifier type for the user that will be sent to Criteo.
10.  From the **Identifier Field** input, select name of identifier field in the Lytics profiles.
11.  (Optional) Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audience.
12.  Click **Start Export**.

![criteo-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am59c2f214c1b7788f/5dd7da005fd47a01b9060867/criteo-export.png)
