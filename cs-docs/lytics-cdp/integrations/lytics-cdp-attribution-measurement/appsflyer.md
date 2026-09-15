---
title: "AppsFlyer"
description: "Explains how to connect Lytics to AppsFlyer, authorize the integration with an AppsFlyer Dev Key, and configure a Conversion Events Export job that sends Lytics audience membership as AppsFlyer S2S in-app conversion events, including device identifier and field mappings."
url: /lytics/appsflyer
uid: blt4c64fc17dab850d6
---

# AppsFlyer

## AppsFlyer

## Overview

[AppsFlyer](https://www.appsflyer.com/) is a mobile attribution and marketing analytics platform that helps brands measure and optimize their app marketing across channels.

Integrating Lytics with AppsFlyer allows you to export Lytics audiences as **server-to-server (S2S) in-app conversion events**. Rather than waiting for an event to fire on a user's device, you can drive AppsFlyer in-app events (such as `af_purchase`, `af_complete_registration`, or a custom event name) directly from a Lytics audience — backed by the cross-channel behavior, data science scores, and content affinities that power that audience. The resulting events appear in AppsFlyer's reporting and can feed your attribution, retargeting, and analytics workflows.

## Authorization

If you haven't already done so, you will need to set up an AppsFlyer account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

To connect Lytics and AppsFlyer you will need your AppsFlyer **Dev Key**, the **App ID** of the app you want to send events for, and the app's **platform** (iOS or Android). AppsFlyer issues one Dev Key per app, so each Lytics authorization corresponds to a single app on a single platform. You can find your Dev Key in the AppsFlyer dashboard under your app's settings; see [AppsFlyer's documentation](https://support.appsflyer.com/hc/en-us/articles/207032066) for details.

The Dev Key is used to sign each request to AppsFlyer (an HMAC-SHA256 signature) and is never sent to AppsFlyer in plaintext or logged by Lytics.

Follow the steps below to add this authorization in Lytics:

1.  Select **AppsFlyer** from the list of providers.
2.  Select the **AppsFlyer Dev Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (Optional) In the **Description** text box, enter a description for this authorization.
5.  In the **App ID** text box, enter your AppsFlyer App ID. For iOS, use the App Store ID format (for example, `id112233445`). For Android, use the package name (for example, `com.myapp.name`).
6.  From the **Platform** dropdown, select the app platform (**iOS** or **Android**). This determines which device identifier fields the export can send.
7.  In the **Dev Key** password box, enter the AppsFlyer Dev Key for this app.
8.  Click **Save Authorization**.

## Conversion Events Export

Export your Lytics audiences to AppsFlyer as S2S in-app conversion events, so you can drive AppsFlyer events from audience membership and behavior modeled in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration.
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting Data**: For each User Profile in the selected audience(s), an AppsFlyer in-app conversion event (the event name you configure) is recorded against your app, with the mapped device identifiers and event values.

This integration uses AppsFlyer's [S2S in-app events bulk endpoint](https://support.appsflyer.com/hc/en-us/articles/207034486) to send Lytics audience activity as conversion events. Once the export is started, the job will:

1.  Run a one-time backfill of the current members of the selected audience(s), if **Existing Users** is enabled.
2.  Listen for real-time audience enter and exit events, plus optional changes to a configured set of user fields.
3.  Build one in-app event per user — selecting the platform-appropriate device identifier and mapping the configured event-value fields — and send it to AppsFlyer.

Events are sent to AppsFlyer in batches. Each request signs the batch with an HMAC-SHA256 signature derived from your Dev Key.

This export sends **post-install** in-app events only. AppsFlyer reserves the install and launch counters (1 and 2) for events that originate on the device through the AppsFlyer SDK, so they cannot be sent from a CDP. The **App Open Counter** field defaults to `4` and must be `3` or higher.

### Fields

Every exported user must include at least one AppsFlyer device or user identifier so AppsFlyer can match the event to a profile. You map Lytics user fields to AppsFlyer through the job configuration:

-   **Identifier Mapping** — required. Map at least one Lytics user field to an AppsFlyer identifier. The available identifiers depend on the platform of the selected authorization:
    -   **All platforms**: `uid` (User Identifier), `cid` (Customer User ID).
    -   **iOS**: `idfa` (iOS IDFA), `idfv` (iOS IDFV).
    -   **Android**: `advertising_id` (Google Advertising ID / GAID), `oaid` (Open Anonymous Device Identifier), `android_id` (Android ID).
-   **Event Value Mapping** — optional. Map Lytics user fields to AppsFlyer `event_value` keys such as `af_revenue`, `af_currency`, `af_content_type`, `af_content_id`, `af_order_id`, `af_quantity`, and `af_price`. AppsFlyer accepts arbitrary `event_value` keys, so you can also type a custom key name. When you do not map `af_currency`, the export uses the **Default Currency** you configure.

The export also sends a number of device and context fields. Each is optional; map the Lytics user field that holds the value, or leave it unmapped to use the documented default:

| Field | Notes |
| --- | --- |
| **Event Timestamp Field** | The event timestamp (ISO 8601 UTC). Users missing this field are dropped from the export. |
| **IP Address Field** | The device IP address. AppsFlyer requires a non-empty value; defaults to `0.0.0.0` when unmapped. |
| **Locale Field** | The device locale (for example, `en-US`). Defaults to `en-US`. |
| **User Agent Field** | The device user agent. Defaults to a generic Lytics user agent. |
| **Device OS Version Field** | The device OS version (for example, `16.5`). |
| **Device Type/Model Field** | The device type or model (for example, `iPhone`, `SM-G955A`). |
| **App Install Date Field** | The app install date (ISO 8601 UTC). Falls back to the event timestamp when empty. |
| **iOS ATT Status Field** | iOS only. The App Tracking Transparency status (`0`\=not determined, `1`\=restricted, `2`\=denied, `3`\=authorized). |
| **Bundle ID** | An optional iOS bundle ID or Android package-name override. When empty, AppsFlyer falls back to the App ID from the authorization. |

**iOS ATT and LAT users.** When a user's ATT status is `0`, `1`, or `2` (consent not granted) and no `idfa` is mapped, the export sends the AppsFlyer zero-UUID (`00000000-0000-0000-0000-000000000000`) in place of the device advertising ID, per AppsFlyer's specification for limited ad tracking.

### Configuration

Follow these steps to set up and configure a conversion events export to AppsFlyer from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **AppsFlyer** from the list of providers.
2.  Select the **AppsFlyer Conversion Events Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization). The platform of the authorization determines which device identifiers are available in the **Identifier Mapping** step.
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience(s) containing the users to export.
7.  In the **Event Name** text field, enter the AppsFlyer event name to send (for example, `af_purchase`, `af_login`, `af_complete_registration`, or a custom name).
8.  From the **Identifier Mapping** input, map Lytics user fields to AppsFlyer identifiers by selecting the Lytics field on the left and its AppsFlyer identifier on the right. At least one identifier mapping is required.
9.  (Optional) From the **Event Value Mapping** input, map Lytics user fields to AppsFlyer `event_value` keys.
10.  (Optional) From the **Event Timestamp Field** dropdown, select the Lytics user field that holds the event timestamp.
11.  (Optional) Map the remaining device and context fields (**IP Address Field**, **Locale Field**, **User Agent Field**, **Device OS Version Field**, **Device Type/Model Field**, **App Install Date Field**, **iOS ATT Status Field**) and enter a **Bundle ID** if needed. See the [Fields](#fields) section for defaults.
12.  (Optional) In the **App Open Counter** text field, set the app open counter. Defaults to `4`; must be `3` or higher.
13.  (Optional) From the **Default Currency** dropdown, choose the currency used for `event_value` when you do not map `af_currency`. Defaults to `USD`.
14.  (Optional) Use the **Fields to Trigger** input to select up to 75 user fields. The export sends a user to AppsFlyer whenever any selected field changes for a user in the audience.
15.  (Optional) From the **Audience Trigger Events** dropdown, select which audience events trigger an export: **Enters and Exits** (default), **Enters Only**, or **Exits Only**.
16.  (Optional) Select the **Existing Users** checkbox to enable a one-time backfill of the current members of the selected audience(s) to AppsFlyer immediately.
17.  Click **Start Export**.

You can confirm the export in AppsFlyer by checking your app's Raw Data Report for the events sent by Lytics.
