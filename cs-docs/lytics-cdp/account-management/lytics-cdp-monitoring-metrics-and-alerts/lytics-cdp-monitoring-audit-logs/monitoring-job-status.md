---
title: "Exporting Audit Logs or Alert Jobs"
description: "In Lytics, audit logs and system alerts originate from a shared source: Lytics System Events . A System Event is simply a log of an action taken within…"
url: /lytics/monitoring-job-status
uid: blt3091cd19133f8392
---

# Exporting Audit Logs or Alert Jobs

## Exporting Audit Logs or Alert Jobs

## Lytics System Events: Audit Logs and Alerts

In Lytics, audit logs and system alerts originate from a shared source: **Lytics System Events**. A System Event is simply a log of an action taken within the platform, whether it’s a user creating a job, segment, or role, or an error message indicating a job failure.

#### Export vs. Alert

-   **Log Export**: This is a job that either streams logs in real time or performs a batch export to an external source, such as a webhook or a data warehouse table.
-   **Log Alert**: Alerts are triggered based on specified conditions and notify users when certain actions occur within the system.

In both cases, the content of exports or alerts depends on the filters you set up. Filtering is typically done using the Subject (such as User, Segment, or Job) and the Verb (the action taken on the subject, like created, updated, deleted, or failed).

### Creating an Audit Log export (aka System Alert) Job via the UI

Creating a job to export your Audit and System Event logs is like creating any other job; for more information, see [Data Pipeline-> Jobs](/docs/lytics/data-sources). In the Filters panel, simply select Audit Logs to create an export of your Audit logs or System Events.

![0459f0993fa2ec600bf9bd2980d59233e8d83a335ca7043ac2d138050d5ae6fc-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5ab3a6c5c55a6eec/5a9b27d735c04b008d206850/0459f0993fa2ec600bf9bd2980d59233e8d83a335ca7043ac2d138050d5ae6fc-image.png)

Depending on your Provider, you can then select to export System Events.

For example, if you selected Google Cloud and you want to export the events to **BigQuery**.

![64bff143e6c47bf50089f685b1d2cb98da695d99c2952d423160f67a4fff4246-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1e9196ba3a21548e/bc8d320eee2875cad32c4456/64bff143e6c47bf50089f685b1d2cb98da695d99c2952d423160f67a4fff4246-image.png)

Then, you'd want to select the BigQuery: Export System Events Job-Type tile. After choosing the Job-Type, it's like configuring any other export job. In the case of BigQuery, you can do a one-time or continuous export.

### Creating an Alert based on System Events

Creating a job to alert on an Audit and System Event logs is like creating any other job; for more information, see [Data Pipeline-> Jobs](/docs/lytics/data-sources). In the Filters panel, simply select Audit Logs to create an export of your Audit logs or System Events.

![0459f0993fa2ec600bf9bd2980d59233e8d83a335ca7043ac2d138050d5ae6fc-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5ab3a6c5c55a6eec/5a9b27d735c04b008d206850/0459f0993fa2ec600bf9bd2980d59233e8d83a335ca7043ac2d138050d5ae6fc-image.png)

Depending on your Provider, you can then select to export System Events or Email Alerts.

![3fc9428a984a406b20cfd1586b51e84cb88ed596ad90df93d65b1f7f183e0267-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3fb39b1327996c88/5ed267721258f3d4764db4d8/3fc9428a984a406b20cfd1586b51e84cb88ed596ad90df93d65b1f7f183e0267-image.png)

For example, if you select to get an email when an Alert is triggered, then use Lytics as your provider and select Email Alerts.

Then configure what Subject you wanted to listen too and what Event Types (aka Verbs).

![c9c1b94c5474e1a5ad86ff8360c720ac635bd7f292474a470e5ec2e20d912531-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am412c12e5a56e7f7c/c504095c2bd86cc36648177e/c9c1b94c5474e1a5ad86ff8360c720ac635bd7f292474a470e5ec2e20d912531-image.png)

### Filtering Audit logs

Audit logs can be filtered by

-   **Subject Type**: what the event is about, such as _work_, _workflow_, _user_, _campaign_. See the [list of subject types below](#subject-types).
-   **Subject ID**: identifier of a subject, such as work ID, workflow ID, campaign ID, etc.
-   **Verb**: action described by the event performed on a subject. See the list of available verbs below.

| Verb | Description | Frequency |
| --- | --- | --- |
| **synccomplete** | For the completion of one synchronization cycle. Emitted when a work cycle finishes successfully. This is shown at the end when there are multiple cycles per scheduled sync or when there is a sleep cycle. | Real-time |
| **update** | For when work configuration is modified. It may occur multiple times per work. | Real-time, batch |
| **created** | For when works are created. This only occurs only once per work. | Real-time, batch |
| **deleted** | For when a work is deleted. | Real-time, batch |
| **synced** | For the completion of one sync unit (multiple units may happen per sleep cycle). | Real-time |
| **completed** | For the final successful completion of a work. This occurs once per work. | Batch |
| **started** | For the first time, work is started. This occurs once per work. | Real-time, batch |
| **failed** | For the final failure of a work. This occurs once per work unless work is bounced. | Real-time, batch |
| **syncing** | For the start of a series of sync cycles for a work. | Real-time |

| Subject Type | Description |
| --- | --- |
| **account** | Represents account-related actions or changes. |
| **auth** | Refers to authentication events, including 3rd party access control activities with service accounts. |
| **user** | Actions related to user accounts, such as creation, update, or deactivation. |
| **campaign** | Actions or modifications related to marketing campaigns. |
| **data** | Covers data management events, such as data ingestion and updates. |
| **entity** | Refers to actions involving user entities aka Profiles. |
| **experience** | Actions associated with experience. |
| **journey** | Pertains to events tracking customer journeys and related updates. |
| **program** | Events involving the creation or modification of programs within the system. |
| **provider** | Refers to data provider configurations or integrations. |
| **query** | Covers actions involving Lytics queries. |
| **report** | Refers to generation, access, or modification of Lytics reports. |
| **rollup** | Involves aggregation events, such as data roll-ups for analytics. |
| **schema** | Actions associated with data schema configuration and updates. |
| **schematable** | Refers to operations involving schema tables or data structure definitions. |
| **scoring** | Covers actions involving user scoring mechanisms within the system. |
| **segment** | Events related to segment creation, modification, or deletion. |
| **segmentcollection** | Refers to collections of segments and associated actions. |
| **segmentml** | Involves machine learning (ML) processes related to segment analysis. |
| **stream** | Actions or updates related to a Lytics stream. |
| **subscription** | Events involving subscriptions, such as subscription creation or cancellation. |
| **topic-document** | Refers to topic modeling or document processing events. |
| **variation** | Refers to A/B testing or variation setup within experiences or campaigns. |
| **work** | Covers general work-related actions or tasks within the system. |
| **workflow** | Actions associated with workflow creation, modification, or execution |

### Job Status Monitoring via Webhooks

Job-status events can be observed by creating a webhook subscription that POSTs data (or JSON) to a specific URL. These updates, like email alerting and reporting, can be consumed downstream for your monitoring use cases. Some common examples include listening for audience exports created/updated/deleted or being notified whenever a batch import or export for a given integration fails.

#### Work related filters

For events related to the subject type **work**, the following **verbs** may be emitted:

-   **synccomplete** - Emitted when a sync operation is completed.
-   **updated** - Emitted when the job configuration is modified.
-   **created** - Emitted when a new job is created.
-   **deleted** - Emitted when a job is terminated.
-   **synced** - Emitted when the job sync operation completes.
-   **completed** - Emitted when a job has finished successfully.
-   **started** - Emitted when a job begins execution.
-   **failed** - Emitted when a job encounters an error.
-   **syncing** - Emitted while a job is actively syncing.

### Building custom Alerts/Exports using our Webhook Integration

#### Overview

Lytics provides a webhook integration that allows you to monitor and react to system events in real-time. This integration enables you to build automated workflows, trigger external actions, and maintain synchronization with your other systems based on events occurring within Lytics.

#### Configuration Examples

##### Basic Webhook Setup

The following example shows how to subscribe to multiple event types and send them to a webhook endpoint:

```
{
    "config": {
        "system_event_multiple_types": ["updated", "created", "failed"],
        "webhook_url": "YOUR_WEBHOOK_ENDPOINT",
        "headers": {
            "custom-header": "header-value"
        }
    },
    "workflow": "webhook_system_events"
}
```

##### Slack Integration

You can integrate Lytics system events with Slack using a custom JSON template. This example shows how to send failure notifications to a Slack channel:

```
{
    "config": {
        "system_event_type": "failed",
        "webhook_url": "YOUR_SLACK_WEBHOOK_URL",
        "json_template": "local note = if std.objectHas(event.data, \"notes\") then event.data.notes else \"A work failed\"; {\"text\": \"Alert notification: \" + note + \". For more info go to: https://activate.getlytics.com/data/integrations/work/%s?aid=%s\" % [event.data.subject_id, event.data.aid] }"
    },
    "workflow": "webhook_system_events"
}
```

##### Advanced Filtering

You can filter events by source type and ID using the system\_event\_sources configuration:

###### Filter by Specific IDs

```
{
    "config": {
        "system_event_multiple_types": ["updated", "created", "failed"],
        "system_event_sources": {
            "work": [
                "work-id-1",
                "work-id-2"
            ]
        },
        "webhook_url": "YOUR_WEBHOOK_ENDPOINT",
        "headers": {
            "custom-header": "header-value"
        }
    },
    "workflow": "webhook_system_events"
}
```

###### Monitor All Events of a specific Verb Type

To receive events for all works in your account, use an empty array.

```
{
    "config": {
        "system_event_multiple_types": ["updated", "created", "failed"],
        "system_event_sources": {
            "work": []
        },
        "webhook_url": "YOUR_WEBHOOK_ENDPOINT",
        "headers": {
            "custom-header": "header-value"
        }
    },
    "workflow": "webhook_system_events"
}
```

#### Best Practices

1.  Ensure your webhook endpoint can handle the expected volume of events
2.  Implement proper error handling and retry logic in your webhook receiver
3.  Use HTTPS endpoints for secure data transmission
4.  Monitor webhook delivery success rates and implement appropriate alerting

##### Support

For additional assistance or questions about webhook integration, please contact Lytics support or consult our API documentation.
