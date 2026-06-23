---
title: "[Data & Insights] - Data & Insights (Lytics) Limitations"
description: Limits enforced to ensure optimal performance of the Data & Insights (Lytics) platform and connected sites, data sources, and applications.
url: https://www.contentstack.com/docs/data-and-insights-lytics/limitations
product: Contentstack Data & Insights (Lytics)
doc_type: reference
audience:
  - developers
  - administrators
  - data-engineers
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - Data & Insights (Lytics) Limitations

This page lists the enforced limits for Data & Insights (Lytics) across events, user profiles, audiences, browser/client-side constraints, integrations, content enrichment, custom modeling, and Personalize. It is intended for developers and administrators planning implementations, sizing data flows, and troubleshooting limit-related issues.

## Data & Insights (Lytics) Limitations

The system enforces the following limits to ensure the optimal performance of the Data & Insights (Lytics) platform and its connected sites, data sources, and applications. Unless otherwise noted, these limits apply to all accounts.  
If you have questions, contact your **Data & Insights (Lytics) Account Manager**.

### Events

An **event** refers to:
- Any action or activity a user performs
- Any update to a profile
- Any export from the subscription services

| Resource | Limit | Description |
|---|---|---|
| Max input size | 4 KB | Byte size of a single input record. |
| Max size in batch | 16 KB | Byte size of a single input record within a batch. |
| Max size total batch | 1 GB | Byte size of all records within a batch. |
| Max event ingress rate | Quota based on pricing | Events collected per hour. |
| Max output size | 1 MB | Byte size of a single output record, also known as a trigger event. |
| Max trigger event egress rate | Quota based on pricing | Events triggered per hour. |

### User Profiles

A [**user profile**](https://docs.lytics.com/docs/understanding-user-profiles) is the living record of an individual who interacts with your brand. Data & Insights (Lytics) user profiles provide a unified view of your customers across connected channels.
- **Known profiles** include at least one identifiable attribute, such as an email address or CRM ID.
- **Anonymous profiles** contain only anonymous identifiers, such as a cookie ID.

| Resource | Limit | Description |
|---|---|---|
| Max size of a user profile | 1 MB | Byte size of a single user profile. |
| Max size of a profile identifier | 256 bytes | Unique identifiers used to merge data fragments into a single user profile. See **Profile Stitching Best Practices**. |
| Max number of user attribute values on a profile | 1,000 | Includes items in complex field types such as maps and sets. |
| Max aggregate size of all user profiles | Quota based on pricing | Total size of all user profiles. |
| Max number of custom mapped fields | Quota based on pricing | Custom mapping of fields through Queries & LQL. |
| Max stitched identifiers | 50 | Stitched identifiers (e.g., email, user ID) that can be used to look up a user. |

### Audiences

An [**audience**](https://docs.lytics.com/docs/audiences) is a group of users defined by conditions, attributes, or behaviors. Audiences allow you to segment users for targeting, personalization, or analysis.

| Resource | Limit | Description |
|---|---|---|
| Max number of audiences | 500 | Total number of audiences allowed per account. |
| Max number of conditions per audience | 1,000 | Includes both parent and nested conditions. |
| Max audience re-evaluation rate | Quota based on pricing | Maximum number of profiles reevaluated per hour across all time-based audiences. |
| Max length of audience name | 64 characters | Maximum length of audience names displayed in the Data & Insights (Lytics) UI. |

### Browsers and Cookies

The following limits apply to client-side integrations. These are implemented in browser-facing code using the [**Lytics JavaScript tag**](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics).

| Resource | Limit | Description |
|---|---|---|
| Max number of audiences stored as a cookie | 5 MB | Applies only to Lytics JavaScript Tag v2. Version 3 uses local storage. |
| Max cookie size per domain | 4,096 bytes | Includes both Lytics cookies and other domain-specific cookies. |
| Maximum size of collect payload via URL | 2,000 bytes | Keep payloads small enough for GIF transport. Use iframe transport for larger payloads. |

### Integrations

The following limits apply to [**server-side integrations**](https://docs.lytics.com/docs/integrated-marketing-tools#server-to-server-integrations), which allow Data & Insights (Lytics) to communicate directly with third-party services.

| Resource | Limit | Description |
|---|---|---|
| Max active import integrations | 100 | Import integrations ingest data into Lytics. |
| Max active export integrations | 200 | Export integrations send data from Lytics to third-party tools. |
| Max integration creations per hour | 10 | Includes imports, exports, and enrichment workflows. |
| Max lifetime of completed jobs | 90 days | Retention for jobs with a **completed** status. |
| Max lifetime of paused/failed jobs | 90 days | Retention for jobs in **paused** or **failed** status. |

### Content

The **Data & Insights (Lytics) **[**Content Affinity Engine**](https://docs.lytics.com/docs/content-affinity) uses NLP to analyze content and calculate user-level affinities.

| Resource | Limit | Description |
|---|---|---|
| Max URLs enriched | 20,000/month | Number of content URLs enriched monthly. |
| Max topics displayed | 500 | Maximum topics shown on a user profile. |
| Max topics per user | 50 | Up to 50 retained affinities per user. |
| Max Interest Engines | 10 | Maximum Interest Engines per account. |

### Custom Modeling

**Data & Insights (Lytics)** enables you to build [**custom Lookalike Models**](https://docs.lytics.com/docs/ml-modeling).

| Resource | Limit | Description |
|---|---|---|
| Lookalike Model count | 20 | Maximum activated Lookalike Models per account. |
| Max model audience size | 20M users | Maximum audience size for source/target segment in a Lookalike Model. |

### Personalize

The following default limits and constraints apply to **Contentstack **[Personalize](../personalize/about-personalize.md)

| Feature | Limit | Description |
|---|---|---|
| Data Activation Layers (DALs) per organization | 3 | Maximum number of DAL instances allowed per organization. |
| Users per DAL | Unlimited | Maximum users supported per DAL. |
| Audiences per project | 500 | Maximum number of audiences per Personalize project. |
| Data & Insights Accounts per organization | 3 | Default limit of connected accounts per organization. |
| Data retention | 3 months | Retention policy for stored events and profiles.**** |

**Requesting Limit Increases:**  
To increase any of the default limits above, contact [Contentstack Support](mailto:support@contentstack.com) with your organization ID, stack/project name, and a short explanation of your use case.

## Common questions

### Do these limits apply to all accounts?
Unless otherwise noted, these limits apply to all accounts.

### How do I request a limit increase?
Contact [Contentstack Support](mailto:support@contentstack.com) with your organization ID, stack/project name, and a short explanation of your use case.

### Where do client-side limits apply?
The browser and cookie limits apply to client-side integrations implemented in browser-facing code using the [**Lytics JavaScript tag**](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics).

### What is considered an event?
An **event** refers to any action or activity a user performs, any update to a profile, or any export from the subscription services.