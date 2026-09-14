---
title: "Unified ID 2.0"
description: "Unified ID 2.0 is an identifier created using user's PII like email. The new Unified ID2.0 will provide advertisers/publishers a new privacy-conscious…"
url: /lytics/unified-id-20
---

# Unified ID 2.0

## Unified ID 2.0

## Overview

[Unified ID 2.0](https://unifiedid.com/docs/intro) is an identifier created using user's PII like email. The new Unified ID2.0 will provide advertisers/publishers a new privacy-conscious targeting ID.

This integration allows you to enrich your existing Lytics user profiles and acquire Unified ID 2.0 for users that have an email or hashed email. Use the new imported ID to send it to various ad platforms to target users.

## Enrich Users

Enrich Lytics users to add [Unified ID 2.0](https://github.com/UnifiedID2/uid2docs/blob/main/README.md) to their user profile. Use this UID to identify consumers to target with more relevant ad campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: User Fields, Raw Event Data

This integration utilizes the [Unified ID 2.0](https://github.com/UnifiedID2/uid2docs/blob/main/api/README.md) API to obtain and import UID2.0 for Lytics Users. Please refer to the documentation on [Unified ID](https://github.com/UnifiedID2/uid2docs/blob/main/api/README.md#overview) to learn more about it.

Each job run will proceed as follows:

1.  Creates a temporary Lytics Audience with users that have email or email hash or phone number or phone number hash configured during job creation.
2.  Sends the email or email hash to [Unified ID](https://github.com/UnifiedID2/uid2docs/blob/main/api/v1/endpoints/README.md) endpoint to acquire the user's UID2.0. Users are enriched every minute or when the queue reaches 1000 users.
3.  Sends user's UID2.0 data in stream uid\_enrichment so that it can be mapped as a user profile field.

**Note:** Once the ID is enriched, it is refreshed every 90 days.

### Fields

The following fields are included in the default mapping of the uid\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email unique id | Email Address | string |
| email\\\_hash\\\_sha256 | email\\\_hash\\\_sha256 | Hashed Email Address (SHA 256) | string |
| phone | phone\\\_number | Phone Number | string |
| phone\\\_hash\\\_sha256 | phone\\\_hash\\\_sha256 | Phone Number (SHA256) | string |
| unified\\\_id | unified\\\_id | Unified ID 2.0 | string |
| unified\\\_ts | unified\\\_ts | Unified ID 2.0 Last Updated Time | Date |

**Note:** In addition to above fields, the job also emits all the BY fields present in the user profile so that they can be used to add Unified ID 2.0 to user profile.

### Configuration

Follow these steps to set up and configure an enrich job for Unified ID 2.0 in the Lytics platform.If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Unified ID 2.0** from the list of providers.
2.  Select the **Enrich Lytics Users to Acquire Unified ID 2.0** job from the list under the Enrich category.
3.  Select the **Lytics Managed Key** authorization type.
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.

![65c6aac9b21e192d2db9e5f6c3c2d0c5644ba107c820ac2bbf7d962e557dedb8-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4978d53e56de4d71/466d70c31dbf1d2f2a078766/65c6aac9b21e192d2db9e5f6c3c2d0c5644ba107c820ac2bbf7d962e557dedb8-image.png)

1.  From the **Email Field** input, select the Lytics user email field that will be mapped to the Unified ID 2.0.Only one of **Email Field** or **Email Hash Field (SHA 256)** or **Phone Field** or **Phone Hash Field (SHA 256)** must be selected.
2.  From the **Email Hash Field (SHA 256)** input, select the Lytics user email hash field that will be mapped to the Unified ID 2.0.
3.  From the **Phone Field** input, select the Lytics user phone field that will be mapped to the Unified ID 2.0.
4.  From the **Phone Number Hash Field (SHA 256)** input, select the Lytics user email hash field that will be mapped to the Unified ID 2.0.
5.  Click **Start Enrich**.
