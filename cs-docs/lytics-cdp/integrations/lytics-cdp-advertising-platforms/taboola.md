---
title: "Taboola"
description: "Taboola"
url: /lytics/taboola
uid: blte2f5fc5f9d9daeb1
---

# Taboola

## Taboola

## Overview

[Taboola](https://www.taboola.com/) is a discovery and native advertising platform. Advertisers and publishers can use Taboola to launch campaigns, engage audiences, and maximize users' time on site.

Use this integration to leverage rich, behavioral audiences from Lytics to reach the most relevant users with your Taboola ads.

## Cookie Sync

Match identifiers from the [Lytics JavaScript tag](/docs/lytics/installation-configuration#introduction) with Taboola IDs to expand user profile data and enable the Taboola audience export within Lytics.

### Integration Details

-   **Implementation Type**: Client-side Integrations, Push Integrations
-   **Implementation Technique**: JavaScript Tag Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: Lytics cookie IDs in Taboola and Taboola IDs populated in Lytics profiles.

When the integration is enabled, anytime a user visits your website where the Lytics JavaScript tag is active, the tag will initiate a request to the [Taboola pixel](https://help.taboola.com/hc/en-us/articles/360003469854-Taboola-Pixel-Overview) containing the Lytics cookie ID. In response, this endpoint will redirect to a Lytics collector endpoint containing the Taboola ID for that user. This ID is recorded through the `taboola` data stream in Lytics.

### Fields

The following fields are included in the default mapping of the `taboola` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| taboola\\\_id | taboola\\\_id `unique id` | Taboola Cookie ID | string |

You may need to [contact Lytics support](https://support.lytics.com/) to add these field mappings to your account if you have not run the [CSV export](#taboola-s3-csv-export) yet.

### Configuration

Follow these steps to enable the Taboola Cookie Sync with the Lytics JavaScript Tag.

1.  Ensure that you are running [version 3 of the Lytics JavaScript Tag](/docs/lytics/installation-configuration#introduction). This integration is not compatible with previous versions of the tag.
2.  In the Lytics platform, go to **Manage Account > Tag** and enable the [Taboola sync in your account settings](/docs/lytics/account-settings) by checking the box and saving the changes.
3.  Also ensure that `taboola` is not included on your [integration blocklist](/docs/lytics/account-settings) setting.

Once enabled, you can visit your website and test to [verify the integration](#testing--verification). You should see `taboola_ids` populated in the `taboola` data stream in the Lytics data streams shortly.

The cookie sync needs time to sync users with Taboola and populate profiles in your Lytics account with Taboola IDs. The S3 export will only send users that have been captured by the cookie sync and that have a valid Taboola ID on their profile. It is recommended to turn on the cookie sync at least a week prior to sending audiences via the [S3 export](#taboola-s3-csv-export).

### Testing & Verification

Follow these steps to verify the successful setup of the integration in your browser.

1.  In a new tab or window of your browser, open your developer tools. These instructions pertain to Google Chrome, but other browsers with Network tracking developer tools will work as well.
2.  Visit the website where you have the Lytics tag installed after following the [configuration instructions](#configuration).
3.  In the network tab of your developer tools, look for an API request containing the URL `https://trc.taboola.com/sg/lytics`. If found, this means that Lytics is successfully initiating the cookie sync. ![Taboola Sync Request](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7b8826136c90727/5102ad9a2aaee7bfb61b308f/img-0323.png)
4.  Also in the network tab, look for an API request containing `https://c.lytics.io/c/provider/taboola`. This is the URL that Taboola will redirect to containing the proper data as query params to complete the cookie sync.
5.  If both API calls are appearing you should be able to see data populated in the `taboola` data stream within Lytics shortly.

For additional assistance in testing or troubleshooting the integration, feel free to reach out to [Lytics support](https://support.lytics.com/).

## Taboola: S3 CSV Export

Export Lytics audiences to Taboola to reach the most relevant users with your Taboola ads.

To export audiences to Taboola, an active cookie sync using the Lytics JavaScript Tag is required. Additionally, only audiences that have been manually configured in Taboola can be exported to using this workflow. See the **Required Setup** section below.

### Required Setup

This export requires additional account setup before you can begin exporting audiences. Follow these steps to prepare your account for exporting audiences to Taboola:

1.  Make sure the Taboola LQL has been added to your account. Contact your account manager to ensure this step is completed.
2.  Enable the client-side cookie sync, ensuring that [Version 3 of the Lytics JavaScript tag](/docs/lytics/installation-configuration#introduction) is installed on your website. Enable the [Taboola sync in your account settings](/docs/lytics/account-settings) and ensure that `taboola` is not included on your [integration blocklist](/docs/lytics/account-settings). The cookie sync needs time to sync users with Taboola and populate profiles in your Lytics account with Taboola IDs. The S3 export will only send users that have been captured by the cookie sync and that have a valid Taboola ID on their profile. It is recommended to turn on the [cookie sync](#cookie-sync) at least a week prior to sending audiences via the S3 export.
3.  Contact your Taboola account manager to configure segment taxonomies for the audiences you wish to sync to Taboola. This is a step required by Taboola. Only audiences that have been manually allow-listed and configured in Taboola can be synced.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: JavaScript Tag Integration and File Based Transfer Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: Audience membership.

The Lytics [JavaScript Tag](/docs/lytics/installation-configuration) supports a JavaScript Tag Integration which syncs Taboola cookie IDs to your Lytics profiles. See the [Cookie Sync](#cookie-sync) document for more information.

Once the cookie sync is set up, the S3 CSV Export workflow is used to export Lytics audiences to Taboola. The export uploads CSVs containing audience membership to an S3 shared between Lytics and Taboola. Taboola ingests the files from the S3 and updates audience membership in Taboola accordingly.

Once the export is started the workflow will:

1.  Scan the audiences selected for export.
2.  Collect each user's Taboola ID from the selected **Identifier Field**.
3.  Write each user's Taboola ID to a CSV file, along with the selected audiences the user is a member of.
4.  Upload the CSV to an S3 bucket shared between Lytics and Taboola.
5.  Steps 1 through 4 will be repeated daily at the time specified by **Time of Day** and **Timezone**.

### Fields

This export is for audience membership only. No fields are exported.

### Configuration

Follow these steps to set up and configure an export from Lytics to Taboola. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Taboola** from the list of providers.
2.  Select the **Export** job type from the list.
3.  Enter a **Label** to identify this job you are creating in Lytics.
4.  (Optional) Enter a **Description** for further context on your job.
5.  Select the audience to export.
6.  From the **Identifier** input, select the field containing the Taboola ID. Note that for most users, **Taboola Cookie ID** will be the default selection. If a default does not display in the dropdown, make sure the Taboola LQL has been uploaded to the account as described in step 1 of [Required Setup](#required-setup) above.
7.  Select the **Time of Day** to start the export each day.
8.  Select the **Timezone** for the Time of Day.
9.  Click **Start Export**. ![taboola configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ca271836ce92284/c587f6d79b038239300e50af/img-0324.png)
