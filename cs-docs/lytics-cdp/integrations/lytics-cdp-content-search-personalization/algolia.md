---
title: "Algolia"
description: "Algolia is a search and discovery platform that enables personalized search results and product recommendations. The Algolia Personalization API allows…"
url: /lytics/algolia
uid: blt55a82fee35ac1fab
---

# Algolia

## Algolia

## Overview

[Algolia](https://www.algolia.com/) is a search and discovery platform that enables personalized search results and product recommendations. The Algolia Personalization API allows you to associate user segment memberships with Algolia user profiles to tailor search and recommendation experiences.

Integrating Lytics with Algolia enables bidirectional synchronization between the two platforms. You can import Algolia user profiles, affinities, and segments into Lytics to enrich behavioral profiles and build audiences. You can then export Lytics audiences back to Algolia to personalize search results and product recommendations in real time.

## Authorization

Before setting up the integration, ensure you have:

-   An Algolia application configured in the appropriate region (US or EU).
-   An Algolia API Key with search, browse, and recommendations permissions.
-   Access to the Lytics Authorizations page.
-   Select **Algolia** from the list of providers.
-   Select the **Full Auth** method for authorization.
-   Enter a **Label** to identify your authorization.
-   (Optional) Enter a **Description** for further context on your authorization.
-   Enter your Algolia **Application ID**.
-   Enter your Algolia **API Key**. The credentials will be validated on save — if a validation error is returned, verify your credentials and retry.
-   Click **Save Authorization**.

![216511d3bb8af9821e6c0064859b55a38b52b7234e15b317888d5c63e016440f-1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amda47f4b6022479a6/134bafbc3e99c20e0df38394/216511d3bb8af9821e6c0064859b55a38b52b7234e15b317888d5c63e016440f-1.png)

![e1fe3b39e18d4b39479c9ca4950ef13305b64e4307504a21b9de96194d2fa88b-2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf96065c8eb8423f/2ba6a7c624e38d0c69472cf3/e1fe3b39e18d4b39479c9ca4950ef13305b64e4307504a21b9de96194d2fa88b-2.png)

## Import User Data from Algolia

Import Algolia user profiles, affinities, and segments into Lytics to enrich user profiles and build behavioral audiences powered by Algolia personalization data.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: Algolia Personalization API → Lytics profile stream.
-   **Frequency**: Initial full import (optional date filter) + continuous hourly sync as a Batch Integration.

Each run of the import job proceeds as follows:

1.  Queries the Algolia Personalization API for user profiles (paginated).
2.  Extracts user identifiers, affinities (name, value, score), segments (ID, source), and the last updated timestamp.
3.  Transforms the data into Lytics user profile fields.
4.  Writes the data into a Lytics user stream to enrich profiles.

### Fields

The following fields are imported from Algolia into Lytics user profiles:

| Algolia Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| userID | algolia\_user\_id | Algolia User ID | string |
| type | algolia\_user\_type | Algolia User Type | string |
| affinities\[\].name | algolia\_affinities\_name | Affinity Names | \\\[\]string |
| affinities\[\].value | algolia\_affinities\_value | Affinity Values | \\\[\]string |
| affinities\[\].score | algolia\_affinities\_name\_score, algolia\_affinities\_value\_score | Affinity Scores by Name and Value | map\\\[string\]float |
| segments\[\].id | algolia\_segment\_ids | Algolia Segment IDs | \\\[\]string |
| segments\[\].source | algolia\_segment\_sources | Algolia Segment Sources | \\\[\]string |
| lastUpdatedAt | algolia\_last\_updated | Last Updated Timestamp | date |

### Configuration

Follow these steps to set up an Import User Data job for Algolia.

1.  Select **Algolia** from the list of providers.
2.  Select the **Import User Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Go to the [Jobs](https://app.lytics.com/conductor/pipeline/jobs/new) page and search for the **Algolia Import** job.

![abb9ea3ec9a2bd8495b5176c9f0485598a5e9ee2362f9ec1402880b8ded0cb53-3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am403a88d4209c53d9/d30355a21465653d8e21e184/abb9ea3ec9a2bd8495b5176c9f0485598a5e9ee2362f9ec1402880b8ded0cb53-3.png)

1.  Create an instance of the Import job and configure it using the authorization created above.

![c9fac87a97a1c3817102b9a38f6a45cce878f3392a887f4faeb7f54d8a28cff4-4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama95b1b70ac9ef313/ed51c2ab07dace920640b3e4/c9fac87a97a1c3817102b9a38f6a45cce878f3392a887f4faeb7f54d8a28cff4-4.png)

1.  In the **Start Date** field, enter a date to limit which users are imported. Only users with a last\_updated\_at value on or after this date will be imported. Leave blank to import all users.
2.  Check the **Keep Updated** checkbox to continuously sync new and updated users from Algolia every hour.

![2339944ad8d7d746bc94cdac04962f227f797b75821330005ecad10d7365b033-5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb5905527a0f358f0/cfdcc9a45477d092b5320c50/2339944ad8d7d746bc94cdac04962f227f797b75821330005ecad10d7365b033-5.png)

1.  Click **Complete** to create the job. The job will initially enter a **sleeping** state while Lytics creates the required fields and mappings in the background.

![26a59fd248a92ed396fd6e41050d40b4017e90fad61dbba10511f4e069b59a38-6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc8d6cca510a48a1d/9758ef5dc46d068df75132be/26a59fd248a92ed396fd6e41050d40b4017e90fad61dbba10511f4e069b59a38-6.png)

**Note:** After the job is created, navigate to the **Versions** page to preview the fields and mappings generated by this job. You must create and publish a new version before the job can run. Once published, return to the job status page and click **Pause** then **Resume** to start the import.

![530486550843542023351d98199c44f894ab11f2010d605a41dcff0713f045cf-7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfe47678e49be103e/3b3f9a00c56bb1e97b7bd7e9/530486550843542023351d98199c44f894ab11f2010d605a41dcff0713f045cf-7.png)

![0a0741f474deb84563f76a40fde8722c34e820c95c5c46734cf7389c87234526-8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am98dd815b1e37bd1a/b9661e700e7afa5610df7f45/0a0741f474deb84563f76a40fde8722c34e820c95c5c46734cf7389c87234526-8.png)

1.  To verify the job is running correctly, scroll to the **Metrics** section on the job status page. This shows the number of users imported and any error logs.

![b990de3c7308f0c7020c21758e709c30ffe69da34ae9f1aa7f10b65b41c6569c-9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc89dceb6b5b0021e/459835ad15d318c99c26c15b/b990de3c7308f0c7020c21758e709c30ffe69da34ae9f1aa7f10b65b41c6569c-9.png)

#### Use Cases

**Audience Building and Segmentation**

Use the imported Algolia fields to build Lytics audiences based on user affinities and segment memberships. For example, create an audience of users who have a search affinity toward a specific product category.

![27fe110f74fc32415075eaafed7e1f20e075da55c58d8714fc079189344e7bd6-10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1e78b09896d0c999/cf25a71b80fbbb94b8755567/27fe110f74fc32415075eaafed7e1f20e075da55c58d8714fc079189344e7bd6-10.png)

![aa8d93ea77badaf84a2ac13b44c434abf16f233a591e810ef1dcc13adaaf305b-11.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf42126652cf5eacf/96631657a9e3a65d77501d1b/aa8d93ea77badaf84a2ac13b44c434abf16f233a591e810ef1dcc13adaaf305b-11.png)

## Export Audiences to Algolia

Send Lytics audience memberships to Algolia to personalize search results and product recommendations. As users enter or exit selected Lytics audiences, their Algolia user profile is updated with the corresponding segment associations in real time.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: API Integration, Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Lytics audience segment memberships are written to [Algolia user profiles](https://www.algolia.com/doc/guides/personalization/what-is-personalization/) via the Algolia Personalization API (Beta).

Once the export is started, the job:

1.  Detects a user entering or exiting a configured Lytics segment.
2.  Maps the Lytics user ID to the configured Algolia user ID field.
3.  Retrieves the existing Algolia user profile for that user.
4.  Merges segment memberships: adds new Lytics audience slugs on entry, removes them on exit (if configured), and preserves any Algolia segments not managed by Lytics.
5.  Sends the updated segment list to the Algolia Personalization API.

### Fields

| Lytics Field | Algolia Field | Description |
| --- | --- | --- |
| User ID Field | userID | The Lytics profile field used to match the Algolia user |
| Segment Slug | segments\[\].id | Lytics audience slug written as an Algolia segment ID |
| Segment Membership | segments\[\] array | Full list of Lytics-managed segments on the Algolia profile |

### Configuration

Follow these steps to set up an Export Audiences job for Algolia.

1.  Select **Algolia** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** list, select the Lytics audiences to export. As users enter or exit the selected audiences, their Algolia profile will be updated.

**Note:** Select audiences whose users have an algolia\_user\_id value. Users without a valid Algolia user ID in the mapped field will be skipped and will not update Algolia.

1.  From **Trigger Events**, select when to send updates: **Entry only**, **Exit only**, or **Both**.
2.  From the **Region** dropdown, select **US** or **EU** to match your Algolia application's region.
3.  From the **User ID Mapping** field, confirm the Lytics profile field that contains the Algolia user ID. This field is pre-populated and should not need to change.
4.  Click **Start Export**.

![d4c82d33b1e89addf7976aca422fc2d04b9fa3cc2a30951b9f202571b550ae7f-12.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am185c345b175d6bce/7ca47c72cf9a08e3cc0a3b9f/d4c82d33b1e89addf7976aca422fc2d04b9fa3cc2a30951b9f202571b550ae7f-12.png)

#### Segment Merging Behavior

When a user's segment membership is exported to Algolia:

-   Existing Algolia segments linked to the user are read first.
-   Lytics-managed segments are added or removed based on the trigger configuration.
-   Segments on the Algolia profile that were not created by Lytics remain unchanged.

## Troubleshooting

### Common Issues

| Issue | Possible Cause | Resolution |
| --- | --- | --- |
| Export not syncing | Invalid or missing Algolia user ID mapping in Lytics | Verify the User ID Mapping field and ensure users have valid algolia\_user\_id values |
| Export missing segments | User not in the selected segment, or exit trigger not configured | Confirm segment configuration and trigger event settings |
| Import incomplete | Start date filter is excluding users, or continuous sync is not enabled | Adjust the start date or enable the Keep Updated checkbox |
| Authentication errors | API key lacks required permissions or the wrong region is selected | Ensure the API key has search, browse, and recommendations permissions, and that the region matches your Algolia application |

### Verification Steps

1.  Check the job status in Lytics under the **Metrics** tab for import/export counts and error logs.
2.  Validate your Algolia credentials: Application ID and API Key.
3.  Review job logs for errors or warnings.
4.  Confirm connectivity to the Algolia API.
5.  Verify that data appears in Lytics profile fields and in Algolia user profiles as expected.

![0c550d5e205c7ac04c1a3e8a058a6b7c83e00a69c75bdefb6f02e492a89cd57a-13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9810ddddd6c4f444/810addf0f2c5a84f03217671/0c550d5e205c7ac04c1a3e8a058a6b7c83e00a69c75bdefb6f02e492a89cd57a-13.png)
