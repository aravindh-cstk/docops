---
title: "Pushly"
description: "Pushly"
url: /lytics/pushly
---

# Pushly

## Pushly

## Overview

[Pushly](https://www.pushly.com/) is a web push notification platform that helps publishers and marketers engage audiences with targeted, personalized notifications across desktop and mobile web.

Integrate Lytics and Pushly to sync Lytics audiences to Pushly as segments for targeted web push campaigns, and to capture Pushly subscriber IDs back to Lytics user profiles via the JavaScript tag.

## Authorization

If you haven't already done so, you will need to set up a Pushly account before you begin the process described below. You will need your Pushly **API Key** and **Domain ID**. See the Pushly documentation for instructions on obtaining these values.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Pushly** from the list of providers.
2.  Select the Pushly method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **API Key**.
6.  Enter your **Domain ID**.
7.  Click **Save Authorization**.

## Collect Subscriber IDs

Lytics can capture Pushly subscriber IDs on your website via the Lytics JavaScript tag. When enabled, the tag reads the subscriber ID from the `PushlySDK` present on the page and sends it back to Lytics, where it is stored on the user profile as `pushly_subscriber_id`. This allows Lytics to match known users with their Pushly subscriptions for later audience export.

To enable the Pushly plugin on your Lytics JavaScript tag, contact your Lytics account manager to turn on the **Pushly Tag Integration** account setting. Once enabled, the plugin will:

1.  Detect the `PushlySDK` object on the page.
2.  Retrieve the Pushly subscriber ID.
3.  Send the subscriber ID to Lytics, where it is mapped to the user profile field `pushly_subscriber_id`.
4.  Sync the current user's Lytics audience memberships to Pushly as tags using `PushlySDK.push(['setTags', ...])`, enabling segmentation in Pushly based on Lytics audiences.

### Fields

The following fields are stored on the Lytics user profile when the Pushly tag integration is active:

| Lytics User Field | Description | Type |
| --- | --- | --- |
| pushly\\\_subscriber\\\_id | Pushly Subscriber ID | string |
| pushly\\\_sync\\\_ts | Pushly Sync Timestamp | date |

## Export Audiences

The Pushly Export Audiences workflow sends Lytics audience members to Pushly, where they can be targeted in web push campaigns. Users are matched to Pushly subscribers using a configurable identity field (email by default).

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Audience members in Pushly.

This integration utilizes the Pushly API to send user data. Once the user initiates an export, the workflow will:

1.  Take an **Audience** in Lytics.
2.  Match users to Pushly subscribers using the selected **Match Field**.
3.  Export matched users to Pushly.

### Fields

By default, Lytics exports the following field to Pushly. You may choose a different Lytics user field when configuring the export.

| Lytics User Field | Description | Pushly Field | Type |
| --- | --- | --- | --- |
| email | Email address | email | string |

### Configuration

Follow these steps to set up an export of audiences job for Pushly. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Pushly** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audience** to export.
7.  Select the **Match Field** — the Lytics user field used to identify subscribers in Pushly. Defaults to `email`.
8.  Select **Existing Users** to complete the workflow with existing users in the selected Lytics audience.
9.  Click **Start Export**.
