---
title: "New Relic"
description: "New Relic"
url: /lytics/new-relic
---

# New Relic

## New Relic

```
# Overview

Export a variety of Lytics metrics for monitoring in New Relic Insights. This allows you to easily set up dashboards, alerts, thresholds, and more.

## Before you begin

Ensure you have created a New Relic account with Insights. [This tutorial](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register) will walk you through what this integration does.

See a [full list of metrics](https://docs.lytics.com/docs/monitoring-lytics).

> 📘 
> 
> The name of the metrics listed in metrics doc will have a prefix value of _lytics\_\_ in front of each \_eventType_.

# Authentication

To use write metrics to New Relic Insights, you will need an API key.

1. In the New Relic console under **Insights** select **Manage Data**.

2. Click Top Nav Tap **API Keys**.

3. Enter the details for your new API key and click **Create**.  
   ![newrelic API key](//images.ctfassets.net/p3327y1wyjsx/1XSMKNQUp22O6aWOueu0OQ/5d6ff1750d009a2aa9da08894f0d6dc2/newrelic_apikey.png)

4. In Lytics, navigate to the New Relic integration in integrations.  
   ![new relic integration tile](//images.ctfassets.net/p3327y1wyjsx/6nbFMrCM8qPjP29TuaUxvy/092c8fc24cd0c18deaac8e03ec10fee2/new_relic_integration_tile.png)

5. Click **Export Monitoring Metrics** and then **Add new Authorization**.

6. Paste your New Relic API key into the **Insights API Key** textbox. Also enter a description for the authorization in the **Description** box.  
   ![new relic auth config](//images.ctfassets.net/p3327y1wyjsx/4mXVM7xRtXUlDJv4O2omoH/b60ba5cc67c3a49baf1537e81837dc17/new_relic_auth_config.png)

7. Click **Authorize** to save the credentials.

# Export Metrics to New Relic Insights

| Summary    |                                           |
| ---------- | ----------------------------------------- |
| Frequency  | Metrics are written out every 60 seconds. |
| Exports to | Insights Custom Events                    |

You can choose to export incoming events metrics, audience change metrics, or user metrics to Insights for alerting and monitoring.

> 📘 
> 
> The name of the metrics listed in metrics doc will have a prefix value of _lytics\_\_ in front of each \_eventType_.

Example:
```

\[ { "eventType": "lytics\_monitoring\_heartbeat", "eventSource": "LyticsMonitoring", "eventTime": "2006-01-02T15:04:05Z07:00", "account":"test123", "value": 1 } \]

```
1. In Lytics, navigate to the New Relic integration in integrations.

2. Click **Export Monitoring Metrics**.

3. Select the authorization you created in the [authorization step](#authentication).

4. In the **New Relic Account ID** textbox, enter the ID of your account. You can get this ID from the URL of "Account Settings" in New Relic.
   ![new relic export config](//images.ctfassets.net/p3327y1wyjsx/4yy27ezyNCtdEBlmutZACC/4142d46b46b23eeedc8255d3e53ae8ce/new_relic_export_config.png)

5. Click **Start Export**.

You should see metrics coming in as custom events into your Insights account after setting up this integration.
![newrelics insights view](//images.ctfassets.net/p3327y1wyjsx/5e7Hf7sBMcyYCuEKSqeUiQ/9be0ac40612fae725ff042180e70aa66/newrelics_insights_view.png)

***

## Alerting Examples

Once the export has started and some data has been collected on the New Relic side, you can use the data to [create alerts within New Relic](https://docs.newrelic.com/docs/alerts/new-relic-alerts/configuring-alert-policies/create-edit-or-find-alert-policy#alert-policy-name).

For instance, using the Lytics [Monitoring Heartbeat metric](https://docs.lytics.com/docs/monitoring-lytics#platform-monitoring-via-metric-api), you can create an alert if the service happens to be interrupted. The following alert(s) are just examples, Lytics recommend building in some buffers so alerts don't begin to go off for simple network issues. In this case we'll issue a warning if the query returns less than 1 for 5 minutes and a full alert if we see less than 1 for 15 minutes.
```

NRQL> SELECT count(value) FROM lytics\_monitoring\_heartbeat lytics\_monitoring\_heartbeat query result is < 1 unit for at least 15 mins lytics\_monitoring\_heartbeat query result is < 1 unit for at least 5 mins

```
![nr alert 01](//images.ctfassets.net/p3327y1wyjsx/u5wXft6cw67fN67SXcM0p/4466b489d0302ad47f9182057de71b6a/nr_alert_01.png)

We could also create an alert to watch traffic collection which may tell us if there is an issue with the JavaScript tag on a production website. In this case if the value of collection counts falls below one, we know no data is coming into any stream so there is likely an issue.
```

NRQL> SELECT average(value) FROM lytics\_collection\_count lytics\_collection\_count query result is < 1 unit for at least 40 mins lytics\_collection\_count query result is < 1 unit for at least 20 mins

```
![nr alert 02](//images.ctfassets.net/p3327y1wyjsx/36cfAEOuumsETkicJORyoH/977c3dd16e05f69be8ddf23a25545928/nr_alert_02.png)
```
