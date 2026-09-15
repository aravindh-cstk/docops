---
title: "Monitoring Metrics"
description: "Lytics provides a variety of valuable metrics that downstream monitoring tools, such as Google Stackdriver or New Relic, can consume. Using…"
url: /lytics/monitoring-lytics
uid: bltb7bcc48b5f5edea0
---

# Monitoring Metrics

## Monitoring Metrics

## Introduction

Lytics provides a variety of valuable metrics that downstream monitoring tools, such as Google Stackdriver or New Relic, can consume. Using industry-standard, inexpensive tools built for alerting and monitoring, you can have visibility into Lytics within your existing ecosystem.

## Consuming Metrics Downstream

Once you have connected Lytics to your monitoring tool, there are various ways you can apply metrics from Lytics to support your operational and IT audit processes. Below are a few examples:

-   Active monitoring - defined by alerting, requires additional configuration within your downstream tools to monitor Lytics.
-   On-call distribution lists - control who within your operational teams to inform.
-   Quiet hours - manage within a tool where you are already doing that for other metrics.
-   Correlation of metrics - show existing metrics (e.g., website performance) in the context of Lytics metrics.
-   Operational users - watch for signals without creating a Lytics admin user account.
-   Advanced alerting - downstream tools support smoothing, multi-signal correlation, and on-call routing that go beyond native Lytics alerting. For native min/max threshold alerts on audience size, job throughput, stream events, and Data Model record counts, see [Metric Threshold Alerts](/docs/lytics/metric-thresholds).

## Platform Monitoring via Metric API

The Metric API provides access to a variety of metrics that are recorded in the Lytics platform. This API allows you to access segment size metrics, events received per hour, and many workflow-specific metrics.

-   **Heartbeats**: metrics with a value of 1 for "up & healthy" and 0 for "not healthy" (or missing).

| Name | Description | Updated |
| --- | --- | --- |
| monitoring\_heartbeat | A simple 1 (up) for each minute a workflow runs indicates the overall integrations platform. | Every minute\\\* |
| collection\_count | A metric for the count (gauge) for the 1-minute window in total events ingressed (web collection or import workflows). | Every minute |
| stream\_count | Metric per stream for a count of events seen this cycle. | Every hour |

**\\\*Availability of Metrics**: the Lytics Metric API and all Lytics export workflows run inside Lytics' work runtime system in Kubernetes. During deploys or scaling events, these processes can move between servers, potentially resulting in 1 or 2-minute gaps in metrics. Therefore, alerts on single heartbeat misses are not recommended. Instead, look for a missing window of 5.
