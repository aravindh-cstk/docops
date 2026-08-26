---
title: "Lytics Limitations"
description: "Explore Contentstack Lytics limits for events, profiles, and integrations, and learn how to request limit increases."
url: /lytics/limitations
uid: bltc445db81111d4dbf
---

# Lytics Limitations

## Lytics Limitations

The system enforces the following limits to ensure the optimal performance of the Lytics platform and its connected sites, data sources, and applications. Unless otherwise noted, these limits apply to all accounts.  
If you have questions, contact your **Lytics Account Manager**.

### Events

An **event** refers to:

-   Any action or activity a user performs
-   Any update to a profile
-   Any export from the subscription services

| Resource | Limit | Description |
| --- | --- | --- |
| Max input size | 4 KB | Byte size of a single input record. |
| Max size in batch | 16 KB | Byte size of a single input record within a batch. |
| Max size total batch | 1 GB | Byte size of all records within a batch. |
| Max event ingress rate | Quota based on pricing | Events collected per hour. |
| Max output size | 1 MB | Byte size of a single output record, also known as a trigger event. |
| Max trigger event egress rate | Quota based on pricing | Events triggered per hour. |

### User Profiles

A [**user profile**](/docs/lytics/understanding-user-profiles) is the living record of an individual who interacts with your brand. Lytics user profiles provide a unified view of your customers across connected channels.

-   **Known profiles** include at least one identifiable attribute, such as an email address or CRM ID.
-   **Anonymous profiles** contain only anonymous identifiers, such as a cookie ID.

| Resource | Limit | Description |
| --- | --- | --- |
| Max size of a user profile | 1 MB | Byte size of a single user profile. |
| Max size of a profile identifier | 256 bytes | Unique identifiers used to merge data fragments into a single user profile. See **Profile Stitching Best Practices**. |
| Max number of user attribute values on a profile | 1,000 | Includes items in complex field types such as maps and sets. |
| Max aggregate size of all user profiles | Quota based on pricing | Total size of all user profiles. |
| Max number of custom mapped fields | Quota based on pricing | Custom mapping of fields through Queries & LQL. |
| Max stitched identifiers | 50 | Stitched identifiers (e.g., email, user ID) that can be used to look up a user. |

### Audiences

An [**audience**](/docs/lytics/audiences) is a group of users defined by conditions, attributes, or behaviors. Audiences allow you to segment users for targeting, personalization, or analysis.

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of audiences | 500 | Total number of audiences allowed per account. |
| Max number of conditions per audience | 1,000 | Includes both parent and nested conditions. |
| Max audience re-evaluation rate | Quota based on pricing | Maximum number of profiles reevaluated per hour across all time-based audiences. |
| Max length of audience name | 64 characters | Maximum length of audience names displayed in the Lytics UI. |

### Browsers and Cookies

The following limits apply to client-side integrations. These are implemented in browser-facing code using the [**Lytics JavaScript tag**](/docs/lytics/developer-quickstart-3-install-lytics).

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of audiences stored as a cookie | 5 MB | Applies only to Lytics JavaScript Tag v2. Version 3 uses local storage. |
| Max cookie size per domain | 4,096 bytes | Includes both Lytics cookies and other domain-specific cookies. |
| Maximum size of collect payload via URL | 2,000 bytes | Keep payloads small enough for GIF transport. Use iframe transport for larger payloads. |

### Integrations

The following limits apply to [**server-side integrations**](/docs/lytics/integrated-marketing-tools#server-to-server-integrations), which allow Lytics to communicate directly with third-party services.

| Resource | Limit | Description |
| --- | --- | --- |
| Max active import integrations | 100 | Import integrations ingest data into Lytics. |
| Max active export integrations | 200 | Export integrations send data from Lytics to third-party tools. |
| Max integration creations per hour | 10 | Includes imports, exports, and enrichment workflows. |
| Max lifetime of completed jobs | 90 days | Retention for jobs with a **completed** status. |
| Max lifetime of paused/failed jobs | 90 days | Retention for jobs in **paused** or **failed** status. |

### Content

The **Lytics** [**Content Affinity Engine**](/docs/lytics/content-affinity) uses NLP to analyze content and calculate user-level affinities.

| Resource | Limit | Description |
| --- | --- | --- |
| Max URLs enriched | 20,000/month | Number of content URLs enriched monthly. |
| Max topics displayed | 500 | Maximum topics shown on a user profile. |
| Max topics per user | 50 | Up to 50 retained affinities per user. |
| Max Interest Engines | 10 | Maximum Interest Engines per account. |

### Custom Modeling

**Lytics** enables you to build [**custom Lookalike Models**](/docs/lytics/ml-modeling).

| Resource | Limit | Description |
| --- | --- | --- |
| Lookalike Model count | 20 | Maximum activated Lookalike Models per account. |
| Max model audience size | 20M users | Maximum audience size for source/target segment in a Lookalike Model. |

### Personalize

The following default limits and constraints apply to **Contentstack** [Personalize](/docs/personalize/about-personalize)

| Feature | Limit | Description |
| --- | --- | --- |
| Lytics per organization | 3 | Maximum number Lytics instances allowed per organization. |
| Users per Lytics project | Unlimited | Maximum users supported Lytics project. |
| Audiences per project | 500 | Maximum number of audiences per Personalize project. |
| Accounts per organization | 3 | Default limit of connected accounts per organization. |
| Data retention | 3 months | Retention policy for stored events and profiles. |

**Requesting Limit Increases:**  
To increase any of the default limits above, contact [Contentstack Support](mailto:support@contentstack.com) with your organization ID, stack/project name, and a short explanation of your use case.
