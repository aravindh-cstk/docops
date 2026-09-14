---
title: "Lytics Platform Data Flow and Access"
description: "Lytics Platform Data Flow and Access"
url: /lytics/lytics-platform-data-flow-and-access
---

# Lytics Platform Data Flow and Access

## Lytics Platform Data Flow and Access

## Overview

When data is brought into Lytics, it organizes diverse data structures and tables to accommodate the customer's evolving data activation requirements. This document will delve into the various data storage methods employed by Lytics and explain the purpose, access, and behavior of these different storage structures.

![img-0178.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfe33d1a25b66900f/faa8ea30bca5ff6fca19eecb/img-0178.png)

## The Lytics' Graph

The system records each unique identifier (ID) as separate nodes within the graph structure. A collection of nodes linked by edges corresponds to a singular profile. The data associated with the most robust ID present in an incoming event is stored. While not directly accessible via the API, this information is made available through the **Identity** tab in **Building Profiles**. The graph undergoes immediate updates upon the arrival of new events. Generally, the response time from a graph update to the corresponding entity ranges from milliseconds to seconds.

**Graph view of consumer profiles in Building Profiles**

![shortcode-img-0030.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2c285ac83403de87/6035ba8c0e094b1399d612a0/shortcode-img-0030.png)

## Raw Data Store

The system efficiently stores every event received from Lytics, both in batch and real-time modes. Each event includes a timestamp indicating when the event took place and when it entered the Lytics system. Although this information is not directly accessible through the API or user interface (UI), it is possible to transmit the events downstream using our out-of-the-box (OOTB) integrations, such as the [BigQuery (BQ)](/docs/lytics/google-bigquery-overview) export feature. This scenario seamlessly transfers the events from the raw storage to designated downstream tables. These operations can be initiated or concluded at any given time. The raw storage option also serves as a valuable resource for replaying data in the event of corrupted or malformed data, ensuring data integrity throughout the account.

### Entity/Profile

The system diligently maintains and stores the latest Lytics profiles, ensuring their accuracy and relevance. These profiles encompass various attributes, such as scores and segment memberships. Users can conveniently access these profiles through the user interface (UI) using the Decision Engine functionality. Additionally, the profiles can be retrieved programmatically via the API, utilizing any of the existing profile IDs.

To facilitate this process, you can reference the profile's URL in the UI, which contains the necessary ID value for API access.

URL Example :

The transition from data entry to the updated entity is typically swift, with response times ranging from milliseconds to seconds. The updated entity is a valuable resource for real-time activations, including trigger-based exports, membership in client-side experiences or audiences, and client-side attribute updates. These functionalities enable seamless and immediate user interactions based on their up-to-date profiles.

**Entity view of consumer profiles in Decision Engine**

![img-0179.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am451479adf9a2b53b/51068fd4a72496e27177d74d/img-0179.png)

![img-0180.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ee758c6a01f5e4d/6fc5be16ac9d7cc3b118afca/img-0180.png)

## Segmentation

The system securely stores and maintains up-to-date Lytics Audiences, encompassing profiles and their membership within these audiences. The system employs indexes on profile attributes to facilitate efficient retrieval and modifications, enabling fast access to the desired data. Users can conveniently access and interact with the audiences through the user interface (UI) using the Decision Engine feature. Alternatively, audiences can be accessed programmatically via the API, providing flexibility for data retrieval in a one-to-many fashion.

Audiences can be created through [Lytics Segment API](https://docs.lytics.com/reference/segment-create) using Segment QL, offering a powerful tool for audience customization. When referencing audiences in the UI, the Segment ID can be found within the URL, aiding API-based operations.

URL Example:

As the last table to be updated after an event, the audience table exhibits a slightly longer update time compared to other components. However, since this table is not involved in real-time processes, it does not impact latency or affect the responsiveness of other functionalities.

_Note:_ To allow the system indexes on profile attributes, the creation of new fields will need to be added to this index first, creating an additional delay before new fields will be visible in the audience builder.

The Segment feature is vital in several aspects, including audience creation, populating the field information tab, and facilitating batch exports. It is a fundamental building block for audience segmentation and targeted campaigns within the Lytics platform. **Audience view in Decision Engine**

![img-0181.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am73027f5dfd519cac/57898ce684abedb11d9acbd0/img-0181.png)
