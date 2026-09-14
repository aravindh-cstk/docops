---
title: "Slack"
description: "Slack"
url: /lytics/slack
---

# Slack

## Slack

## Slack: Alerts

Monitor jobs, authorizations, audiences, and queries in your Lytics instance with real-time alerts to a Slack channel

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**:

REST API Integration\\ Webhook Integration

-   **Frequency**: Real-time Integration
-   **Resulting data**: Alerts for events related to objects in your Lytics instance

### Configuration

Follow these steps to set up and configure an alerting job for Slack in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Slack** from the list of providers.

1.  Select the Slack Alerts **job type** from the list.

1.  Enter a **Label** to identify this job you are creating in Lytics.

1.  (Optional) Enter a **Description** for further context on your job.

1.  Complete the configuration steps for your job:

1.  In the **Slack Webhook URL** text box, enter enter a valid Slack webhook URL, e.g. . See the [Slack API documentation](https://api.slack.com/messaging/webhooks) for more information on setting up webhooks.

1.  From the **Alert Subject Type** input, select choose a subject to generate alerts for.

1.  From the **Event Types** input, select event types to alert for.

1.  (optional) From the **Event Subject IDs** input, select the objects to alert on. If none are select, alerts will be generated for all objects of the selected Subject Type.

1.  Click the **Start job** button to start the job

![img-0305.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am475204b93d60a987/ace90ef8ff74ec29a3cad0d9/img-0305.png)

## Slack: Event Quota Alerts

Monitor the event quota in your Lytics instance with real-time alerts to a Slack channel.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**:

REST API Integration\\ Webhook Integration

-   **Frequency**:\\ Real-time Integration
-   **Resulting data**: Alerts for events related to objects in your Lytics instance

### Configuration

Follow these steps to set up and configure an event quota alerting job for Slack in the Lytics platform.If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Slack** from the list of providers.

1.  Select the Event Quota Alerts **job type** from the list.

1.  Enter a **Label** to identify this job you are creating in Lytics.

1.  (Optional) Enter a **Description** for further context on your job.

1.  Complete the configuration steps for your job.

1.  In the **Slack Webhook URL** text box, enter enter a valid Slack webhook URL, e.g. . See the [Slack API documentation](https://api.slack.com/messaging/webhooks) for more information on setting up webhooks.

1.  From the **Alert Subject Type** input, select choose a subject to gene

1.  From the **Quota Alert Thresholds** input, select alert percentage thresholds to send alerts on.

1.  Click the **Start job** button to start the job

1) ![img-0306.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am98875acf87dc8748/a878b96a75736afea69989fc/img-0306.png)
