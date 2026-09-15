---
title: "Platform Limits"
description: "The following limits exist to ensure the optimum performance of the Lytics platform and your connected sites, data sources, and applications. The tables…"
url: /lytics/platform-limits
uid: blt7729088f53ee3b49
---

# Platform Limits

## Platform Limits

## Platform Limits

The following limits exist to ensure the optimum performance of the Lytics platform and your connected sites, data sources, and applications. The tables contain default limits for all accounts unless stated otherwise. If you have questions, please get in touch with your Lytics Account Manager.

### Events

An **event** is any action or activity a user performs, any update to a profile, or any export out of the subscription services.

| Resource | Limit | Description |
| --- | --- | --- |
| Max input size | 4 KB | Byte size of a single input record. |
| Max size in batch | 16 KB | Byte size of a single input record within a batch. |
| Max size total batch | 1 GB | Byte size of all records within a batch. |
| Max event ingress rate | Quota based on pricing | Events collected per hour. |
| Max output size | 1 MB | Byte size of a single output record, also known as a trigger event. |
| Max trigger event egress rate | Quota based on pricing | Events triggered per hour. |

### User Profiles

A [User Profile](/docs/lytics/understanding-user-profiles) is the living record of an individual that interacts with your brand. Lytics user profiles provide a view of your customers across your connected channels.

-   **Known profiles** have at least one known identifier such as an email or CRM ID.
-   **Anonymous profiles** have only anonymous identifiers such as a cookie ID.

| Resource | Limit | Description |
| --- | --- | --- |
| Max size of a user profile | 1 MB | Byte size of a single user profile. |
| Max size of a profile identifier | 256 bytes | Unique identifiers are used to merge data fragments together into a single user profile. Read more about [Profile Stitching Best Practices](/docs/lytics/stitching-user-profiles). |
| Max number of user attribute values on a profile | 1,000 | Values include individual items in complex field types such as maps and sets. E.g. if a user has 100 values for the field URLs\_visted, only 900 values remain for the total count. |
| Max aggregate size of all user profiles | Quota based on pricing | Total size of all user profiles. |
| Max number of custom mapped fields | Quota based on pricing | Custom mapping of fields through [Queries & LQL](/docs/lytics/lytics-query-language). |
| Max stitched Identifiers | 50 | “Stitched” identifiers can be used to look up a user such as email or user ID. |

### Audiences

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of audiences | 500 | Total audiences per account. |
| Max number of conditions (custom rules) per audience | 1,000 | This limit includes parent and nested conditions. |
| Max audience re-evaluation rate | Quota based on pricing | Max number of profiles Lytics will reevaluate per hour for all time-based audiences. |
| Max length of audience name displayed | 64 characters | This limit is for displaying audience names in the Lytics UI. |

### Data Models

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of Cloud Connect Data Models | 100 | Total data models per account. |

### Browsers and Cookies

The following limits apply to client-side integrations, which are implemented in browser-facing code through the Lytics JavaScript tag and typically a third-party tag as well.

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of audiences stored as a cookie | 5 MB | Browsers limit the max size of the sum of all cookies. This limit only applies to Lytics JavaScript Tag version 2, as version 3 uses local storage instead of a cookie. |
| Max cookie size per domain | 4,096 bytes | This limit includes both Lytics-generated cookie names and the values of all other domain-specific cookies. |
| Maximum size of collect payload sent via URL | 2,000 bytes | Try to keep payload sizes small enough to fit in a URL using GIF transport. If the GIF limit is exceeded, the payload will be sent via iframe transport, which can result in poor performance. |

### Integrations

The following limits apply to server-side integrations, which allow Lytics to communicate directly with third-party services, usually in the form of a workflow.

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of active import integrations | 100 | Import integrations ingest data such as user profiles, activity data, and subscription status from third-party tools into Lytics. |
| Max number of active export integrations (“subscriptions”) | 200 | Export integrations send user profile data from Lytics to a third-party tool, usually at the audience level. Raw event data or metrics can also be exported for monitoring. |
| Max integrations creations per hour | 10 | This limit applies to all server-side integrations, including imports, exports, and any other workflow, such as enrichment integrations. |
| Max lifetime of completed jobs | 90 days | This limit applies to all jobs in a completed status, and defines how long Lytics will retain the jobs information after completion. |
| Max lifetime of paused / failed jobs | 90 days | This limit applies to all jobs in a paused or failed status, and defines how long Lytics will retain jobs in this state before considering them purgeable. |

### Content

The Lytics Content Affinity Engine uses data science and Natural Language Processing to analyze content, extract topics, and calculate user-level topic affinities.

| Resource | Limit | Description |
| --- | --- | --- |
| Max number of URLs enriched | 20,000 URLs per month | -- |
| Max number of topics displayed | 500 | This limit is for how many topics are shown on the user profile. |
| Max number of topics per user | 50 | Lytics retains affinities for up to 50 topics per user, representing the content they are most likely to interact with. |
| Max number of Context Layers | 10 | This limit is for how many Context Layers is the maximum per account. |

### Custom Modeling

Lytics enables you to build custom Lookalike Models as a proprietary service that uses your first-party data to evaluate audiences and conversion rates.

| Resource | Limit | Description |
| --- | --- | --- |
| Lookalike Model count | 20 | This limit applies to activated Lookalike Models. |
| Max model audience size | 20M users per audience | This limit applies to the source or target segment used in a Lookalike Model model. |
