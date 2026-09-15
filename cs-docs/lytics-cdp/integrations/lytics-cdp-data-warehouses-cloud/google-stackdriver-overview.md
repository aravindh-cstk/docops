---
title: "Google Cloud Operations"
description: "Google Cloud Operations"
url: /lytics/google-stackdriver-overview
uid: blt0911513b5834d8ad
---

# Google Cloud Operations

## Google Cloud Operations

(Formerly Stackdriver)

## Overview

[Google Stackdriver](https://cloud.google.com/products/operations) is a monitoring service that collects logs, metrics, and traces across your applications and Google Cloud.

Integrating Lytics with Google Stackdriver allows you to export a variety of Lytics metrics to Google Stackdriver monitoring services so that you can easily set up dashboards, alerts, and thresholds inside your existing monitoring tool.

## Authorization

If you haven't already done so, you will need to set up a [Google Cloud Project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) before you begin the process described below. You will need "Editor" rights to your project to be able to ingest Lytics custome metrics.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Stackdriver Metrics Service Account JWT** method for authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In **JSON Service Account JSON**, enter your **Google Service Account JSON Key**. The instructions for collecting this JSON token are detailed beflow.
6.  Click **Save Authorization**.

### Stackdriver Metrics Service Account JSON Key

During the configuration process for authorizations of type [JSON key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console) you will need to [create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts).

1.  In [Google Cloud console](https://console.cloud.google.com/) under **IAM & Admin** select [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts).
2.  Click **\+ Create Service Account**
3.  Enter the details for your new service account and click **Create**. ![Google stackdriver service account details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0f138154127d8fd5/3cbfb9d676634cde1ab9c6cb/img-0131.png)
4.  From the **Role** dropdown menu, search for and select **Monitoring Editor** and click **Continue** to grant these account permissions. ![Google Stackdriver grant service account access to project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1dfd39945f654ba1/17ff4c9fe07a1d2865916ba0/img-0132.png)
5.  Optionally grant users access to this service account.
6.  You will be directed back to the main **Service Accounts** page and you should now see your newly created service account.
7.  Select this service account, click **Keys** tab, click **Add Key**, and select **Create new key** from the dropdown menu. ![Google stackdriver create new key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am363b1db983a9eeb0/b70a9f90bef3265b8b33af7b/img-0133.png)
8.  Select **JSON** for key type and click **Create** to download your new key as a JSON file. ![Google stackdriver create](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5902988e89ce66a9/5642dfe4d80b93795479434d/img-0134.png)
9.  The entire contents of this file represent your Google Service Account JSON key and will be used to authorize Google Stackdriver in Lytics.

![Google stackdriver auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7f6d457ca816ab03/ed6d406ae825c5a408a94c28/img-0135.png)

## Export Metrics

Export Lytics custom metrics to an existing Google Cloud project. These metrics include a monitoring heartbeat, an API heartbeat, collection count, and stream count. These metrics allow you to monitor, alert, and visualize important metrics from Lytics. Instead of building alerting into Lytics, Google Stackdriver Export Metrics allows metrics to be written into your own monitoring tool. These metrics can be used to:

-   Allow alerting, oncall distribution lists, quiet-hours to be managed within a tool where you are already doing that for other metrics.
-   Allow correlation of metrics you have (possibly website performance, etc) to be shown in context of other metrics.
-   Prevent operational users from having to create a Lytics admin user-account.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Metrics are written every 60 seconds.
-   **Resulting Data**: Lytics custom metrics (monitoring heartbeat, API heartbeat, collection count, and stream count)

This integration utilizes the [Google Cloud Monitoring Custom Metrics API](https://cloud.google.com/monitoring/custom-metrics) to create and send Lytics custom metrics to your Google Stackdriver dashboards.

-   Monitoring Heartbeat is a heartbeat of health of our metrics reporter
-   API Heartbeat is a heartbeat of health of Lytics API
-   Collection Count is a delta count of all events
-   Stream Count is a delta count of all events per stream per hour. Stream Count is reported hourly.

### Configuration

Follow these steps to set up an export job for Google Stackdriver. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Cloud** from the list of providers.
2.  Select the **Export Monitoring Metrics** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Enter the **Google Project** you want to write metrics to. ![Google stackdriver workflow config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambccf802939d9eb61/6c3d6307087f2a12419c1355/img-0136.png)
7.  Click **Start Export**. **Note:** After the job has started, you will be able to find Lytics custom metrics in Google Cloud Monitoring. This may take up to 10 minutes. Once Monitoring Heartbeat metric is reported, then Lytics custom metrics are being received.

![Stackdriver metrics explorer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am17abf9dbab7dbd24/8e5d054b4ae5c0ea55ae470b/img-0137.png)

### Using the Metrics

Once you have the metrics imported, you can now set up [dashboards](https://cloud.google.com/monitoring/dashboards) and [alerting](https://cloud.google.com/monitoring/alerts).
