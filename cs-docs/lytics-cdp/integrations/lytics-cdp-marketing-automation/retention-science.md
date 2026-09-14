---
title: "Retention Science"
description: "Retention Science is a marketing platform that helps brands personalize customer experiences through email automation, predictive analytics, and more."
url: /lytics/retention-science
---

# Retention Science

## Retention Science

## Overview

[Retention Science](https://www.retentionscience.com/) is a marketing platform that helps brands personalize customer experiences through email automation, predictive analytics, and more.

Integrate Lytics with Retention Science to power your email marketing with Lytics audiences that are enriched with cross-channel data, behavioral scores, and content affinities.

## Authorization

If you haven't already done so, you will need to get an API key for your Retention Science account before you begin the process described below. Follow the instructions on getting an API key for use with the [Retention Science Data API](https://developer.retentionscience.com/?data/v3.0.0).

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Retention Science** from the list of providers.
2.  Select the **Retention Science API Key** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **API Key** field, enter your Retention Science API key.
6.  Click **Save Authorization**.

## Export Audiences

Export your Lytics audiences to Retention Science to leverage rich user data from Lytics in your email automation programs.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration for the initial backfill of users. After initial user export, it is Real-time Integration
-   **Resulting data**: Users will be created or updated in Retention Science.

This integration utilizes the [Retention Science Data API](https://developer.retentionscience.com/?data/v3.0.0) to send user data. Once the export is started the job will:

1.  Scan the whole Lytics audience and create a CSV with the selected user attributes to send to Retention Science.
2.  The CSV is sent to the Retention Science [import job](https://developer.retentionscience.com/?data/v3.0.0#tag/Import-Jobs/paths/~1import_jobs/post) endpoint.

The CSV export happens only for the initial export of users. Once users are exported and Retention Science successfully completes the import job users are sent as they enter or exit the audience.

### Fields

There are no default fields that Lytics exports to Retention Science, but at least one user field must be chosen when setting up the job as described below.

### Configuration

Follow these steps to set up and configure an audience export to Retention Science from the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Retention Science** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** input, select a Lytics audience to export to Retention Science.
7.  From the **User ID Field** input, select the Lytics user field that identifies the user in Retention Science.
8.  Click **Complete**.\\

The import job will be queued by Retention Science and should be processed within an hour. Once Retention Science processes the initial import job updates from Lytics will be sent in real time.
