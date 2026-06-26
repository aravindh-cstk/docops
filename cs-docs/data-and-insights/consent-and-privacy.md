---
title: "[Data & Insights] - Consent and Privacy"
description: Guidance on obtaining, managing, and enforcing consent for customer data using Lytics, including data collection, profile materialization, segmentation, and maintenance.
url: https://www.contentstack.com/docs/data-and-insights/consent-and-privacy
product: Lytics
doc_type: guide
audience:
  - developers
  - data-engineers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - Consent and Privacy

This page explains how to obtain, manage, and enforce customer consent for privacy compliance and trust, with guidance for teams implementing consent collection and modeling in Lytics and applying consent rules downstream.

## Consent and Privacy

As businesses continue to collect and utilize customer data to power their marketing efforts, obtaining, managing, and enforcing proper consent is crucial. This is essential for complying with various privacy laws and regulations and for maintaining trust with customers.

This document explores the importance of **granularity** in a consent strategy and how Lytics can assist in the consent management process. It outlines best practices and provides guidance on where to get started. The following four steps will be covered:
- **Data Collection:** How to collect consent adequately from disparate sources consistently.
- **Profile Materialization:** How to flexibly surface the state of consent to individual user profiles.
- **Segmentation:** How the required consent rules can be enforced when driving downstream campaigns.
- **Maintenance:** How to ensure your consent strategy scales and adapts to ongoing market conditions without fail.

By following these steps, businesses can establish a solid and effective consent management strategy that respects customer privacy and builds trust.

## Data Collection

To maintain compliance with data privacy regulations, businesses need a clear and flexible path for collecting consent data. Lytics offers a range of SDKs and data collection APIs to support this effort. When approaching consent data collection, consider the following:
- **Source of the data** and any inherent limitations. Can it be real time, or does it need to be batch?
- **Granularity of the consent**. Is this a simple boolean (on or off), or is it more granular, such as opting into specific communication methods?
- **Additional context** related to the consent. Are there specific forms being consented to or a unique source?

To address these considerations, Lytics offers a suggested schema to get you started. This schema can be customized via [Conductor](https://docs.lytics.com/docs/getting-started-with-conductor) to meet your specific needs.

## Data Structure

Effective consent management requires a comprehensive set of properties that can be deployed to ensure compliance and build customer trust. These properties should support the collection, storage, and usage of consent-related data.

| Schema Property | Description |
|---|---|
| Event Name | Use standardized event names for consent collection to provide essential context for conditional mapping logic (e.g., if/else rules). This allows clear differentiation between consent types—such as "`consent-type-1`" and "`consent-type-2`"—within a single profile. As events stream in, they can be accurately mapped, helping maintain a granular and well-organized record of consent data. |
| Consented | A clear and concise confirmation (or lack thereof) that reduces the risk of mapping consent inaccurately when consent has been denied or not yet collected. |
| Location | An optional parameter to capture a user’s location context, which may become important—especially if they are consenting to something location specific. |
| Date | An optional parameter to capture the timestamp of the most recent consent. Useful for tracking time-bound consent and prompting re-consent if the validity period has lapsed. |
| Documents | The `documents` array in the default schema provides additional context about the source of consent. For example, it can indicate whether consent was given via a global site-wide agreement or a specific call to action during a transaction. Including this field helps prevent the loss of critical context during execution. The values and formats are determined by the data manager. |

**Additional Resources:** To learn more, refer to the Data & Insights [Consent & Privacy](https://docs.lytics.com/docs/consent) documentation.

## Common questions

### What does “granularity” mean in a consent strategy?
Granularity refers to how detailed consent is captured (for example, a simple on/off value versus consent for specific communication methods or purposes).

### Can the suggested consent schema be customized?
Yes. The suggested schema can be customized via [Conductor](https://docs.lytics.com/docs/getting-started-with-conductor) to meet your specific needs.

### Why include additional context like location, date, or documents?
These fields help preserve important consent context (such as where/when consent was given and what it applied to), which supports compliance and accurate downstream enforcement.