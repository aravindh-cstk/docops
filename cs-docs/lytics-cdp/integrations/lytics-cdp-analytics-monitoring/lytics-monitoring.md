---
title: "Lytics Monitoring"
description: "Lytics Monitoring allows you to configure email alerts for your data pipeline."
url: /lytics/lytics-monitoring
---

# Lytics Monitoring

## Lytics Monitoring

## Overview

Lytics Monitoring allows you to configure email alerts for your data pipeline.

## Email: Event Quota Alerts

Monitor the event quota in your Lytics instance with real-time alerts to an email address.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**:\\

REST API Integration\\ Webhook Integration

-   **Frequency**:\\ Real-time Integration
-   **Resulting data**: Alerts for events related to objects in your Lytics instance

### Configuration

Follow these steps to set up and configure a quota alerting job for email in the Lytics platform.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Lytics Alerting** from the list of providers.
2.  Select the Event Quota Alerts **job type** from the list.
3.  Enter a **Label** to identify this job you are creating in Lytics.
4.  (Optional) Enter a **Description** for further context on your job.
5.  Complete the configuration steps for your job.
6.  In the **Email Address** text box, enter the email address to send alerts to.
7.  From the **Quota Alert Thresholds** input, select alert percentage thresholds to send alerts on.
8.  Click the **Start job** button to start the job

## Email: Alerts

Monitor jobs, authorizations, audiences, and queries in your Lytics instance with real-time alerts to an email address.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: Alerts for events related to objects in your Lytics instance

### Configuration

Follow these steps to set up and configure an alerting job for email in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Lytics Alerting** from the list of providers.
2.  Select the Email Alerts **job type** from the list.
3.  Enter a **Label** to identify this job you are creating in Lytics.
4.  (Optional) Enter a **Description** for further context on your job.
5.  Complete the configuration steps for your job.
6.  In the **Email Address** text box, enter the email address(es) to send alerts to. To send alerts to multiple addresses, enter them as a comma-separated list.
7.  From the **Alert Subject Type** input, select choose a subject to generate alerts for.
8.  From the **Event Types** input, select event types to alert for.
9.  (optional) From the **Event Subject IDs** input, select the objects to alert on. If none are select, alerts will be generated for all objects of the selected Subject Type.
10.  Click the **Start job** button to start the job
