---
title: "The Trade Desk"
description: "The Trade Desk"
url: /lytics/the-trade-desk
uid: blt68890fed8eb954d4
---

# The Trade Desk

## The Trade Desk

## Overview

[The Trade Desk](https://www.thetradedesk.com/) is an advertising platform that you can use to create and manage digital advertising campaigns across display, TV, video, audio, and more.

This integration allows you to leverage audiences that have been enriched with cross-channel behavior, data science scores, and content affinities on Lytics for improved targeting in your advertising campaigns on The Trade Desk.

Using the [Lytics Canvas](/docs/lytics/goals), you can manage the cross-channel customer lifecycle and use Trade Desk Ad Groups as your advertising touchpoint.

## Authorization

If you haven't already done so, you will need to setup an account on The Trade Desk before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **The Trade Desk** from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. The Trade Desk supports the following authorization methods:
3.  [Secret Key](#secret-key) - Export Audiences
4.  [Username and Password](#username-and-password) - Export Audiences, Import Experiences, Conversions Export
5.  [API Token](#api-token) - Conversions Export
6.  Enter a **Label** to identify your authorization.
7.  (Optional) Enter a **Description** for further context on your authorization.
8.  Complete the configuration steps needed for your authorization. These steps will vary by method.
9.  Click **Save Authorization**.

### Secret Key

This method supports the [Export Audiences](#export-audiences) job type only. To use this authorization, you will be required to provide a Secret Key that Lytics uses to send data to your account in The Trade Desk. To obtain your Secret Key, please contact your account representative at The Trade Desk.

1.  Enter your **Secret Key**. ![ttd-secret-key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0fe10588936bd49c/41e78cf71546ed9179950824/img-0331.png)

### Username and Password

This method supports the [Export Audiences](#export-audiences), [Import Experiences](#the-trade-desk-experiences), and [Conversions Export](#conversions-export) job types. To use this authorization, you will be required to provide a Partner ID and Secret Key that Lytics uses to send the data to your account in The Trade Desk, in addition to your API username and password. To obtain your Partner ID and Secret Key, please contact your account representative at The Trade Desk or refer to [The Trade Desk API documentation](https://api.thetradedesk.com/v3/portal/api/doc/ApiOverview)

1.  Enter your The Trade Desk **Partner ID**. This Partner ID is used during experience import and is different than The Trade Desk Advertiser ID.
2.  Enter your The Trade Desk **Partner Secret Key**.
3.  Enter your **API Username**.
4.  Enter your **API Password**. ![ttd-auth-un-pw](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama2f5eb8581b6ea98/34f08ab9221de44ccace090b/img-0332.png)

### API Token

This method supports the [Conversions Export](#conversions-export) job type only. Use this method if you already have a long-lived API token issued from your account in The Trade Desk and you do not want to share your The Trade Desk username and password with Lytics. The token is generated in The Trade Desk platform under your account's API tokens section. To obtain or generate an API token, please contact your account representative at The Trade Desk or refer to [The Trade Desk API documentation](https://api.thetradedesk.com/v3/portal/api/doc/ApiOverview).

1.  Enter your The Trade Desk **API Token**.

## Cookie Sync

If you want to [export audiences](#export-audiences) from Lytics to The Trade Desk you will need a field in Lytics, "The Trade Desk Identifier". One way to add this identifier to a Lytics profile is using this client-side cookie sync to exchange Lytics cookie IDs with matching IDs from The Trade Desk.

This integration is only supported by the current version (version 3) of the Lytics JavaScript tag. If you currently have version 2 installed, please read our [migrating to version 3](https://learn.lytics.com/documentation/product/features/lytics-javascript-tag/migrating-to-version-3) article in our archived documentation.

### Integration Details

-   **Implementation Type**: Client-side Integrations, Push Integrations
-   **Implementation Technique**: JavaScript Tag Integration
-   **Frequency**: Real-time Integration
-   **Resulting Data**: The Lytics cookie ID is sent to The Trade Desk, and Lytics receives The Trade Desk Cookie ID in exchange.

Once the integration is [enabled](#configuration), the following will occur on every page load where the Lytics JavaScript tag is installed on your website:

1.  The Lytics tag will initiate the cookie sync by loading [The Trade Desk Match Tag](https://api.thetradedesk.com/v3/portal/api/doc/CookieSyncing). This request will include the Lytics \\\_uid and your Lytics account ID as URL parameters.\\ Currently, the Lytics and The Trade Desk cookie sync does not send over any user consent information per the `gdpr` url paramater described in the [cookie sync docs](https://api.thetradedesk.com/v3/portal/api/doc/CookieSyncing), please note that this parameter will currently always be passed with the `0` value.
2.  The Trade Desk pixel will perform a 302 redirect back to the Lytics collector endpoint which will include the user's The Trade Desk cookie ID (`ttd_id`) as a parameter.
3.  Lytics will ingest this data to the `thetradedesk` data stream.

### Fields

The following fields are imported to the `thetradedesk` data stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| \\\_uid | \\\_uid | Web Cookie Id(current) | string |
| \\\_uid | \\\_uids | Web Cookie Ids(all) | \\\[\]string |
| ttd\\\_id | ttd\\\_id | TheTradeDesk Cookie ID | string |



In addition, as part of this sync, the current `_uid` field for that user will be exported to The Trade Desk.

### Configuration

Follow these steps to set up and configure the cookie sync between Lytics and The Trade Desk:

1.  Before you can enable the cookie sync in Lytics you need to do some configuration in The Trade Desk to provide them the Lytics URL to redirect to. Reach out to your representative at The Trade Desk for assistance with this configuration. Provide them with the following redirect URL for the cookie sync: `https://c.lytics.io/c/provider/thetradedesk`
2.  Once configured, in your instance of The Trade Desk you should now have a partner ID for The Trade Desk which you will need as part of the configuration in Lytics.
3.  Before you proceed, make sure that [the JavaScript Lytics tag version 3](/docs/lytics/installation-configuration#installation) is installed on your website.
4.  In the Lytics dashboard, navigate to the [tag section of your account settings](/docs/lytics/account-settings) by clicking on your account name from the navigation and then clicking **Manage Account > Tag**.
5.  To enable the cookie sync, check the **Automatically place the The Trade Desk sync img tag onto your site?** checkbox.
6.  In the **Partner ID for The Trade Desk Cookie Sync** textbox, paste your partner ID for The Trade Desk. ![The Trade Desk Cookie Sync Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc7b3cd774c829a12/f3c460defc97728f813f1527/img-0333.png)
7.  Click **Save** to change your settings and enable the cookie sync.
8.  Once users visit your website, you should begin seeing data flowing into the `thetradedesk` stream.

## Export Audiences

Export your Lytics audiences to The Trade Desk for use in your advertising campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration
-   **Frequency**: Real-time Integration with an optional one-time Backfillof the audience after setup.
-   **Resulting Data**: User Profiles are exported to The Trade Desk based on the users' audience membership in Lytics.

This integration utilizes The Trade Desk API to send Lytics audiences. Once initiated, the job will proceed as follows.

1.  Run a one-time backfill (if configured to do so).
2.  Receive real-time updates when a user enters or exits the selected audience(s).
3.  For each export (whether the user is being added as part of the backfill or they are entering/ exiting the audience in real-time), it will send that user information to the specific Advertiser whose information is provided during the configuration.

It will take around 24 hours after the users have been exported for the active IDs count to display in The Trade Desk. The segment in The Trade Desk is targetable as soon as it surfaces in the DMP as long as there are more than 1,000 IDs received in the segment. Learn more in [The Trade Desk docs](https://partner.thetradedesk.com/v3/portal/api/doc/IdCountingMethodologies).

### Configuration

Follow these steps to set up and configure an audience export to The Trade Desk from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **The Trade Desk** from the list of providers.
2.  Select the **Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.![ttd-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc58b796d05c2167e/71a9faa68051b744d371a2f6/img-0334.png)
8.  Provide the **AdvertiserID** from The Trade Desk that will use the exported audiences.
9.  From the **Data Center** dropdown menu, select the Data Center closest to the users the audience contains.
10.  From the **Lytics Audiences** list, select the audiences to send to The Trade Desk.
11.  From the **The Trade Desk Identifier Field** dropdown menu, select the field that contains The Trade Desk ID for the user.
12.  From the **Device Application ID** dropdown menu, select the field that contains Device Application ID for the user.
13.  From the **Unified ID 2.0** dropdown menu, select the field that contains Unified ID 2.0 for the user. If you want to enrich existing user to acquire Unified ID 2.0, please refer to [Unified ID 2.0 enrichment](/docs/lytics/unified-id-20) work document. **NOTE:** One of The Trade Desk Identifier, Device Application ID or Unified ID 2.0 must be given.
14.  Enter a **Time to Live** value to determine how many days the user exported will remain active for targeting. This value defaults to 30 days, which is suggested by The Trade Desk. The maximum value for this is 180 days.
15.  (Optional) Select the **Existing Users** checkbox to enable a backfill of current members of the audience(s) to The Trade Desk immediately.
16.  Click **Start Export**.

## Conversions Export

Send server-side conversion events from Lytics to The Trade Desk's [Real-Time Conversion Events API](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi). Use this job to track page views against a universal pixel or to send user-interaction events (purchase, add-to-cart, etc.) against an event tracking tag, keyed off a Lytics audience.

### Authorization

Conversions Export supports the following authorization types:

-   [Username and Password](#username-and-password)
-   [API Token](#api-token)

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after setup.
-   **Resulting Data**: Conversion events recorded against your universal pixel or event tracking tag in The Trade Desk.

This integration uses The Trade Desk [Real-Time Conversion Events API](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi) to send Lytics audience activity as conversion events. Once started, the job will:

1.  Optionally run a one-time backfill of users currently in the selected audience.
2.  Listen for real-time audience enter and exit events, plus optional changes to a configured set of user fields.
3.  Build one conversion event per user — picking a single identifier per event in The Trade Desk's recommended priority order (UID2, EUID, TDID, then a single device ID, then RampID) — and POST it to The Trade Desk.

### Fields

The export job lets you map Lytics user fields to The Trade Desk conversion fields across three mappings:

-   **Identifier Mapping** — required. Map at least one Lytics user field to a Trade Desk identifier type (UID2, EUID, TDID, device IDs, RampID). Only one identifier is sent per event, picked using the priority order above. **UID2 and EUID values must already be tokens** — Lytics does not mint UID2/EUID tokens for you.
-   **Item Mapping** — optional. Map Lytics user fields to Trade Desk item-level fields (`items[]`) for user-interaction events such as cart and product details.
-   **Custom Fields Mapping** — optional. Map Lytics user fields to The Trade Desk custom fields `td1`..`td10` for additional metadata such as promo codes.

### Page views vs. user interactions

A single job sends either page view events or user-interaction events, controlled by the **Event Name** field:

-   Leave **Event Name** empty to send page view events. Requires **Advertiser ID** and **Page URL Field**.
-   Enter an event name (such as `purchase` or `addtocart`) to send user-interaction events. Requires **Merchant ID**.

### Configuration

Follow these steps to set up and configure a conversions export to The Trade Desk. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **The Trade Desk** from the list of providers.
2.  Select the **Conversion API Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** drop-down, select the Lytics audience that contains the users to export.
7.  (Conditional) In the **Advertiser ID** text field, enter your Trade Desk Advertiser ID. Required when sending page view events.
8.  (Conditional) In the **Merchant ID** text field, enter your Trade Desk Merchant ID (assigned during onboarding). Required when sending user-interaction events.
9.  In the **Pixel / Event Tracking Tag ID** text field, enter the universal pixel ID (for page views) or the event tracking tag ID (for user interactions) configured in The Trade Desk.
10.  (Optional) In the **Event Name** text field, enter the user-interaction event name (for example, `addtocart` or `purchase`). Leave empty to send page view events instead.
11.  (Conditional) From the **Page URL Field** drop-down, select the Lytics user field that contains the page URL. Required when sending page view events; ignored when sending user-interaction events.
12.  From the **Identifier Mapping** input, map Lytics user fields to The Trade Desk identifier types. At least one mapping is required.
13.  (Optional) From the **Item Mapping (cart/product fields)** input, map Lytics user fields to The Trade Desk item-level fields for user-interaction events.
14.  (Optional) From the **Custom Fields Mapping (TD1-TD10)** input, map Lytics user fields to The Trade Desk custom fields `td1` through `td10`.
15.  (Optional) From the **Audience Trigger Events** drop-down, select which audience events trigger a conversion. Defaults to both enters and exits.
16.  (Optional) Use the **Fields to Trigger** input to select up to 75 user fields. A conversion event will be sent whenever any selected field changes for a user in the audience.
17.  (Optional) Select the **Existing Users** checkbox to immediately push users currently in the selected audience as a one-time backfill. Selected by default.
18.  Click **Start Export**.

## Experiences

[Lytics Experiences](/docs/lytics/experiences) support The Trade Desk Ad Groups that can be used to assemble targeting specifics and strategies. Using the Lytics Canvas, you can activate Ad Groups in The Trade Desk with Lytics audiences to engage users and drive conversions.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/importing-external-experiences) from The Trade Desk to Lytics. During the import process, you will be asked to select an authorization. Read [The Trade Desk authorization documentation](#authorization) for more information.

Before you can import, you will need to select the Advertiser that owns the Ad Groups you wish to import. The Advertisers accessible to the authorization you selected will be displayed in the drop down menu below. ![ttd advertiser id dropdown](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am404ba1d8a153902a/5d630850de2be0c5e4bfff7f/img-0335.png)

Once you've selected an Advertiser, you can import eligible Ad Groups as Lytics Experiences. ![Screenshot (3)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf3453d454be0ec10/aa22819ca85b25e56be082a3/img-0336.png)

### Tactics

On import, tactics are included in the label for the experience in Lytics. Lytics determines an Ad Group's tactic via the [AdGroup.RTBAttributes.ROIGoal](https://api.thetradedesk.com/v3/portal/api/ref/get-adgroup-adgroupid) field from The Trade Desk API.

The Trade Desk Experiences in Lytics support the following tactics:

-   **Maximize Reach** - Reach as many users as possible.
-   **Maximize Lifetime Value** - Reach as many users as possible beyond users already reached on Linear TV.
-   **Cost Per Click** - Optimize Cost Per Click (in the Advertiser currency)
-   **Click Through Rate** - Optimize Click Through Rate (in percent)
-   **Nielson On Target** - Optimize Nielsen On Target Percentage (in percent)
-   **Cost Per Acquisition** - Optimize Cost Per Acquisition (in the Advertiser currency)
-   **Maximize Conversion Revenue** - Maximize Ad Group Conversion Revenue
-   **Return on Ad Spend** - Optimize Return on Ad spend (in percent of ad spend)
-   **Video Completion Rate** - Optimize Video Completion Rate (in percent)
-   **Viewability** - Optimize Viewability (in percent)
-   **Estimated Viewable Cost** - Optimize the Estimated Viewable Cost Per Mille (thousand) (in the Advertiser currency)
-   **Gross Rating Point** - Gross Rating Point on target percentage
-   **Cost Per Completed** - Optimize Cost Per Completed (in the advertiser currency)

### Configuration

After importing a The Trade Desk Experience you can configure it for activation. All tactics for The Trade Desk Experiences have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences):

1.  **[Target](/docs/lytics/experiences)** - select the target audience for your Experience.

1.  **[Configure The Trade Desk](/docs/lytics/experiences)** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the [The Trade Desk Export Audiences](#export-audiences) and will generally function the same, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.

1.  **[Configure Delivery](/docs/lytics/experiences)** - choose to turn the Delivery Optimization feature on or off. To learn more about this feature, see our [Delivery Optimization Documentation](/docs/lytics/experiences).

Once you've finished configuring the Experience you can save and activate it.

### Activation

Activating The Trade Desk Experiences in Lytics initiates an [Audience Export](#export-audiences) of the target audience, it will appear in The Trade Desk under the name of the Experience. Once exported, the Experience audience can be added to your Ad Group in The Trade Desk.

### Metrics

Experience Metrics are collected for The Trade Desk Experiences by launching an Experience Metrics collection workflow. Metrics are collected for The Trade Desk Ad Groups via the [My Reports API](https://api.thetradedesk.com/v3/portal/api/doc/AggregatedReports). When the workflow starts, it will schedule a performance report for the Ad Groups that have been imported into Lytics. The report schedule will be named using the following convention: "Lytics \\{WORK ID}." When started for the first time, the workflow will schedule a report to pull in the last 24 hours of performance data, and thereafter to pull in data daily. Every hour, the workflow will check for a new report execution to ingest. If one is available, the workflow will download and parse the report for Ad Group Impressions and Clicks. From these, the Click Rate will be calulated. ![ttd metrics new](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am214dd69cce9c84f4/1a5b8e902b793f1944889d3e/img-0337.png)

Metrics from The Trade Desk appear in the experience UI as follows:

-   **Reached** - How many users have seen the creatives in your Ad Group since import to Lytics was initiated.
-   **Clicks** - How many users clicked on creatives in your Ad Group when reached.
-   **Click Rate** - This is calculated as the ratio `Clicks` / `Impressions`
