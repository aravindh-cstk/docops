---
title: "MediaMath"
description: "MediaMath"
url: /lytics/mediamath
uid: blt049a89af1b3d89f8
---

# MediaMath

## MediaMath

## Overview

[MediaMath](https://www.mediamath.com/) is a platform that delivers digital advertising media and data management technology to advertisers worldwide.

Integrating Lytics with MediaMath allows you to leverage audiences that have been enriched with cross-channel behavior, data science scores, and content affinities in Lytics for improved targeting in your MediaMath advertising campaigns.

## Authorization

If you haven't already done so, you will need to set up a [MediaMath](https://www.mediamath.com/) account before you begin the process described below.

1.  In order to make audiences available in your MediaMath account, you will need to contact your Lytics Account Manager with a list of MediaMath organizations, agencies, and advertisers that you would like to share your audiences with.
2.  After contacting your Lytics Account Manager, we will ask MediaMath support for access to the requested resources.
3.  Once access is approved by MediaMath, our support team will activate your Lytics account so that you can export audiences and share the requested resources.

## Export Audiences

Export your Lytics audiences to MediaMath for use in your advertising campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration and File Based Transfer Integration.
-   **Frequency**: Batch Integration every day.
-   **Resulting data**: Segments are created in MediaMath for each export of a Lytics Audience.

This integration utilizes the MediaMath [Audience Segment API](https://apidocs.mediamath.com/dmp/audience-segments) to create the MediaMath taxonomy and MediaMath [Server to Server Data Transfer](https://apidocs.mediamath.com/dmp/s2s#data-transfer) to send Lytics audience data. Once initiated, the job will proceed as follows.

1.  A MediaMath taxonomy is [created](https://apidocs.mediamath.com/dmp/audience-segments/permission-taxonomies/post-audience-segments) for each Lytics audience export and granted permission to be shared with the organizations, advertisers, and agencies selected during the job [configuration](#configuration).
2.  User with valid MediaMath IDs in the exported audiences will be batched every 10 minutes and pushed to MediaMath via data transfer to the [MediaMath SFTP](https://apidocs.mediamath.com/dmp/s2s#batch-file-based-transfer).
3.  As users continue to enter and exit the Lytics audience, each user will be added or removed from the corresponding MediaMath audience segment.

### Fields

By default, Lytics exports the following fields to MediaMath:

| Lytics User Field | Description | MediaMath Field | Type |
| --- | --- | --- | --- |
| _configurable_ | MediaMath ID | CookieID | string |

### Configuration

ollow these steps to set up and configure an export job for MediaMath in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **MediaMath** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the [Authorization](#authorization) you would like to use.
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audiences to export.
7.  Complete the configuration steps for your job. ![Configure MediaMath Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcd3f050b574b3fdb/75c2b6f34f27d0d893cbe90a/img-0211.png)
8.  From the **Identifier** input, select the field containing the MediaMath ID.
9.  From the **Organizations** input, select the organizations to give permissions to. Note: if you don't see the organization, agency, or advertiser that you would like to export to, you must follow the steps in the [Authorization](#authorization) document to set that up.
10.  From the **Agencies** input, select the agencies to give permissions to.
11.  From the **Advertisers** input, select the advertisers to give permissions to.
12.  Click **Start Export**.
