---
title: "LINE Ads"
description: "LINE Ads"
url: /lytics/line-ads
uid: bltc251c2f4f1dfb100
---

# LINE Ads

## LINE Ads

## Overview

[LINE Ads](https://www.lycbiz.com/jp/service/line-ads/) is the advertising platform for LINE, a messaging app widely used across Japan, Taiwan, Thailand, and Indonesia. Integrating Lytics with LINE Ads lets you push audiences enriched with cross-channel behavior and data science scores into LINE Custom Audiences for targeting in your LINE Ads campaigns.

## Authorization

If you haven't already done so, you will need to set up access to the LINE Ads API before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

LINE Ads supports the following authorization method:

-   [LINE Ads API Key](#line-ads-api-key) - Export Audiences

### LINE Ads API Key

This method supports the [Export Audiences](#export-audiences) job type. LINE Ads issues an Access Key (the `kid`) and a Secret Key per partner account. Lytics uses the pair to sign each API request with HMAC-SHA256 on the server side; the secret is never sent in the clear and is not logged. Refer to LINE's [Data General Partner API documentation](https://ads.line.me/public-docs/pages/v3/3.11.4/data-general-partner/) for how to obtain these keys.

1.  Select **LINE Ads** from the list of providers.
2.  Select the **LINE Ads API Key** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **Access Key** text box, enter your LINE Ads API Access Key (`kid`).
6.  In the **Secret Key** text box, enter the Secret Key paired with the Access Key above.
7.  Click **Save Authorization**.

## Export Audiences

Export your Lytics audiences to LINE Ads as [Custom Audiences](https://ads.line.me/public-docs/pages/v3/3.11.4/data-general-partner/) for use in your campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration on a daily, weekly, or monthly schedule.
-   **Resulting Data**: A LINE Ads [Custom Audience](https://ads.line.me/public-docs/pages/v3/3.11.4/data-general-partner/) populated with hashed identifiers from the selected Lytics audience.

This integration uses LINE's Data General Partner API to send your Lytics audience as a Custom Audience. Once the job is started, each run will:

1.  Resolve the destination audience: use the existing LINE Custom Audience selected during configuration, or create a new one with the supplied **Audience Name**.
2.  Scan the selected Lytics audience, reading the configured identifier field for each user, normalizing it (lowercasing emails, stripping phone formatting), and SHA-256 hashing it before upload. Values that are already SHA-256 hashed are sent through unchanged. Rows missing the identifier or with an unparseable value are skipped.
3.  Stream the identifiers to LINE in chunks of up to **1,000,000 records / 60 MB** each. The first chunk replaces any prior membership of the audience; subsequent chunks append. Lytics waits for each chunk's upload job to complete before starting the next, so chunks do not race LINE's per-audience write semantics.

LINE Custom Audience requirements

A newly created Custom Audience will not become targetable in LINE Ads Manager until LINE finishes matching the uploaded identifiers. Match counts can take several hours to appear. Refer to LINE's [Data General Partner documentation](https://ads.line.me/public-docs/pages/v3/3.11.4/data-general-partner/) for current minimum audience sizes and supported identifier types.

### Fields

The export job lets you send one identifier type per job:

-   **Email** — Lytics lowercases and trims whitespace, then SHA-256 hashes the value.
-   **Phone Number** — Lytics strips non-digit characters (including `+`, spaces, dashes), then SHA-256 hashes the value. Provide phone numbers in E.164 or country-code-prefixed form.
-   **IFA** — Apple IDFA or Google GAID. Mobile advertising IDs are passed through to the hash step without normalization beyond casing.

If the configured field already holds a 64-character hexadecimal SHA-256 value, Lytics sends it as-is so you can pre-hash upstream of Lytics if you prefer.

### Configuration

Follow these steps to set up and configure an audience export to LINE Ads. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **LINE Ads** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#line-ads-api-key).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** drop-down, select the Lytics audience to export.
7.  In the **LINE Ads Account ID** text box, enter your LINE Ads Account ID (for example, `A1`) as provisioned in LINE Ads Manager.
8.  (Optional) From the **Audience** drop-down (LINE side), select an existing LINE Custom Audience to upload into. Leave blank to create a new audience using **Audience Name**.
9.  (Conditional) In the **Audience Name** text box, enter a name for the new LINE Custom Audience. Used only when no existing audience is selected in the step above.
10.  From the **Identifier Type** drop-down, select **Email**, **Phone Number**, or **IFA (mobile advertising ID)** — the identifier type to send to LINE Ads.
11.  From the **Identifier Field** drop-down, select the Lytics user field that holds the identifier. Plain or pre-hashed values both work; Lytics will SHA-256 hash anything that isn't already hashed.
12.  (Optional) Toggle **Keep Updated** to re-upload the audience on a schedule. Defaults to on.
13.  (Optional) From the **Run Frequency** drop-down, choose **Daily**, **Weekly**, or **Monthly**. Each run performs a full segment scan; Daily is the most frequent option.
14.  (Conditional) From the **Day of Week**, **Time of Day**, and **Time Zone** drop-downs, configure when the scheduled run should start.
15.  Click **Complete**.
