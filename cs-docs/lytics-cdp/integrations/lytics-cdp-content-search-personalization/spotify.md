---
title: "Spotify"
description: "Spotify is an audio streaming platform whose Ads Manager lets advertisers run audio campaigns against Spotify's listener base. Integrating Lytics with…"
url: /lytics/spotify
---

# Spotify

## Spotify

## Overview

[Spotify](https://ads.spotify.com/) is an audio streaming platform whose Ads Manager lets advertisers run audio campaigns against Spotify's listener base. Integrating Lytics with Spotify enables you to send Lytics audiences as Spotify [customer-list audiences](https://developer.spotify.com/documentation/ads-api/guides) so you can target known users with audio creative.

## Authorization

If you haven't already done so, you will need to set up a [Spotify Ads](https://ads.spotify.com/) account and accept the Spotify Ads API Terms before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

**Note:** The Spotify user being authenticated must have access to manage audiences in the businesses and ad accounts you intend to export to. See Spotify's [Ads API guides](https://developer.spotify.com/documentation/ads-api/guides) for details on how Spotify manages business and ad-account access.

1.  Select **Spotify** from the list of providers.
2.  Select the **Spotify Sign-In** method for authorization.
3.  Enter your Spotify credentials in the login popup and grant the requested permissions.
4.  In the **Label** text box, enter a name for the authorization.
5.  (Optional) In the **Description** text box, enter a description for this authorization.
6.  (Optional) From the **Business** drop-down, select a single Spotify business to restrict this authorization to. Leave blank to allow any workflow using this authorization to target any Spotify business the authenticated user can access. The list is fetched live from Spotify based on the authenticated user's access.
7.  Click **Save Authorization**.

![Spotify Sign-In authorization form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4963072849320dc6/3470c5b75362c2be1e2bfe2c/ec418f795ae4654cd73cf736df70a17b0c2cafceb013730b80247f7f6e4cc974-spotify-auth.png)

## Export Audience

Starting an export will create a [Spotify customer-list audience](https://developer.spotify.com/documentation/ads-api/reference/v3.0/createAudience) by exporting a Lytics audience to Spotify. For each user, Lytics uploads an email address and/or mobile advertising ID (IDFA/AAID), SHA-256–hashed before upload, which Spotify matches against its listener base.

Spotify Ads API v3 treats customer-list uploads as full replacements: each scheduled run does a complete scan of the Lytics audience and replaces the contents of the Spotify audience with the result. This integration is **interval-based**, not real-time — choose the cadence that fits your campaign refresh needs.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration on a configurable Daily, Weekly, or Monthly schedule.
-   **Resulting data**: A [Spotify customer-list audience](https://adshelp.spotify.com/s/article/Customer-list-formatting-guidelines-US) populated with users from the selected Lytics audience.

This integration uses Spotify's [Ads API v3](https://developer.spotify.com/documentation/ads-api/guides) to create and update the customer-list audience. Once the job is started, on each scheduled run it will:

1.  Create a new Spotify customer-list audience the first time the job runs (a CUSTOM audience with subtype CUSTOMER\_LIST). On subsequent runs it reuses the same audience. The audience name defaults to the job name; you can override it in the configuration.
2.  Scan the selected Lytics audience and write each user's configured identifier(s) to a CSV file, SHA-256–hashing values that aren't already hashed.
3.  Request a signed upload URL from Spotify and PUT the file to it, which replaces the contents of the customer-list audience.
4.  Sleep until the next scheduled run, then repeat from step 2.

**Note:** Spotify requires customer-list uploads to contain at least **1,000 rows**. If a scheduled run produces fewer than 1,000 hashed identifiers, the Spotify audience will not be updated until a subsequent run meets the threshold.

**Note:** Spotify caps customer-list uploads at **1 GiB**. If a single run would exceed that, Lytics ships the partial file (so the audience is not blocked) and the cap is reflected in the job's run stats. For very large audiences, prefer narrower identifier mappings (e.g. one ID type rather than two).

### Fields

The export job sends one row per user with the following columns, depending on which fields you map in the configuration. At least one of the two identifier fields must be mapped.

| Lytics user field | CSV column | Spotify identifier type | Hashing |
| --- | --- | --- | --- |
| Email field | EMAIL\_ID\_SHA256 | EMAIL\_ID\_SHA256 | Lytics SHA-256–hashes raw values. Values already in valid SHA-256 form are passed through. |
| Device ID field (IDFA/AAID) | DEVICE\_ID\_SHA256 | DEVICE\_ID\_SHA256 | Lytics SHA-256–hashes raw values. Values already in valid SHA-256 form are passed through. |

See Spotify's [customer-list formatting guidelines](https://adshelp.spotify.com/s/article/Customer-list-formatting-guidelines-US) for the source-of-truth on accepted identifier formats.

**Note:** Identifier formatting (lowercasing, whitespace trimming, etc.) must be applied to the raw values flowing into Lytics from your data sources. Lytics performs only the SHA-256 hashing step before uploading to Spotify.

### Configuration

Follow these steps to set up and configure an export job for Spotify in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Spotify** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify the job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience to export.
7.  From the **Spotify Business** drop-down, select the Spotify business this export targets. If the authorization is scoped to a single business, only that business appears here.
8.  From the **Spotify Ad Account** drop-down, select the ad account (under the chosen Spotify business) that will own the customer-list audience. This list is populated after a business is selected.
9.  (Optional) From the **Email Field** input, select the Lytics user field containing the email address.
10.  (Optional) From the **Device ID Field** input, select the Lytics user field containing the mobile advertising ID (IDFA/AAID).
11.  (Optional) In the **Audience Name** text box, enter the name shown for this audience in Spotify Ads Manager (max 80 characters). Defaults to the job's label.
12.  (Optional) Toggle **Keep Updated** off if you want a one-time export. When on (the default), the job re-runs on the cadence configured below.
13.  From the **Run Frequency** input, select **Daily**, **Weekly**, or **Monthly**.
14.  (Optional) From the **Day of Week** input, select the day to run on for weekly cadence.
15.  (Optional) From the **Time of Day** input, select the time to start the run.
16.  (Optional) From the **Time Zone** input, select the time zone that **Time of Day** is interpreted in.
17.  Click **Complete** to start the job.

![Spotify Export Audience job configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2c1132c8818839dd/7080b03b67c773e4e25bef84/4a5fdd88f041f61d07f5b80eb4f9893ecfe7f8cd0b2ab4cccd615e76689a5d8e-spotify-export.png)

**Note:** At least one of **Email Field** or **Device ID Field** must be set. If both are mapped, Lytics writes both columns for each user that has them; rows missing both identifiers are dropped.
