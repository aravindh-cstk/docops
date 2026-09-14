---
title: "Data Streams"
description: "A data stream is a continuous flow of data generated from various sources such as websites, mobile apps, email providers, social media, and other digital…"
url: /lytics/data-streams-1
---

# Data Streams

## Data Streams

## Introduction

A data stream is a continuous flow of data generated from various sources such as websites, mobile apps, email providers, social media, and other digital platforms. Data streams typically involve high volumes of data generated in real-time or near-real-time, making it necessary to process and analyze the data as it arrives.

Lytics allows for creating any number of data streams to provide logical distinctions among data sources in either type or scope. For example, data describing email subscriber attributes should exist on a different data stream than one describing email subscriber activity. This ensures maximum flexibility when defining the relationships between sources and how they ultimately are unified into a materialized user profile.

## What is an "event?"

In Lytics, an "event" is an action or activity performed by a user or a customer, such as visiting a website, purchasing, or subscribing to a newsletter. As pictured below, events are showcased as independent key/value pairs on a single data stream. These keys are then translated into [Fields & Mappings](/docs/lytics/fields-mappings) in order to materialize to user profile for segmentation.

![2bd0ea6-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am44f1e6334ca21ae9/e9208b781674843720820098/2bd0ea6-image.png)

## Exploring Data Streams

Lytics will ingest data that is sent to one of Lytics' Collection APIs: the collect API or the bulk API. The bulk API is generally intended for larger imports of offline data, while the collect API is generally intended for more real-time sources and usage.

### Viewing Your Data Streams

You can view information about your data streams in your Lytics dashboard by navigating to [**Data Pipeline** > **Streams**](https://app.lytics.com/conductor/pipeline/streams). The primary purpose of this section is to verify that data is successfully being received by Lytics. If your account has multiple data streams, you can view a different stream from the dropdown menu above the graph.

Many integrations have multiple streams. For instance, it is common for email integrations to have an activity stream and a user stream. Integration streams should be prefixed to help identify the source. You can find the streams for integration under the documentation for that integration.

**Note:** The number of keys in a data stream can be extremely large. This is normal and does not impact performance. Any keys that comprise less than 0.1% of the data volume OR have not been seen in 7 days will be hidden from display to reduce clutter.

#### Event Ingress Graph

The event ingress graph shows the number of events collected on a stream for the selected time period (past day, week, month, 3 months, and year) and interval (hourly, daily, weekly, and monthly). Above the graph, you will find the time the last message from this stream was received, the source of the data stream, and the number of fields in the stream.

**Note:** Last message received strives for real time reporting but can lag under a number of conditions including during bulk imports. If a data stream is not updating as expected please contact [Lytics Support](https://support.lytics.com/) for assistance.

![28abb2d-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am104c02131bc03afb/ac70dd0c82dbc4832e1ef2c4/28abb2d-image.png)

To get an email when stream event volume drops below or spikes above expected bounds, set min/max thresholds on the Event Activity chart. See [Metric Threshold Alerts](/docs/lytics/metric-thresholds).

#### Raw Keys Table

Below the event ingress graph is the raw keys table. An event may contain any number of key-value pairs. Each record in this table represents a unique raw key seen on the stream in at least one event.

![4b1faeb-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amae455fad3215070e/96f98d56d125c33e57d971e5/4b1faeb-image.png)

The table has the following information on keys:

| Column | Description |
| --- | --- |
| Name | The name of the key. |
| Predicted Type | The assumed data type for the value is determined by sampling the values received. |
| First Seen | The date the key was first seen, according to the date of the event. |
| Last Seen | The last time a key was seen, according to the date of the event. |
| Times Seen | The number of events that contained the key. |
| Unique Values | The number of different values seen. |
| Times Used | The number of user fields that use the key. |

In addition to these seven columns, each record in the table can be clicked to open up a set of sample values. This can be used to verify that values are being collected and they match the expected data.

**Note:** If a key has many different values, the modal may not display all the values for the chosen key.

The table can be filtered in three ways: used vs. unused, common vs. uncommon, and text search.

| Filter | Description |
| --- | --- |
| Used | A raw key that is mapped to a user field. |
| Unused | Raw keys are collected and stored but never mapped to user fields. |
| Common | Raw keys that have been seen more often on events relative to other raw keys based on the times seen value. |
| Uncommon | Raw keys are seldom seen on events relative to other raw keys. |

##### Hiding Keys

Raw event keys can be hidden, but it is important to note that keys cannot be made visible again through the user interface - only through the API. It is recommended that a list is kept of hidden keys in the event one needs to be resurfaced at a later date. If you need assistance, please contact [Lytics Support](https://support.lytics.com/) with your key name and account ID.

To hide a key:

1.  Select the checkbox next to the name of the key or keys.
2.  Click **Remove selected key**.

### Final Thoughts

Having logically differentiated data streams for different data sources also helps to facilitate a more straightforward process for mapping data from data sources to user profiles. However, integrating data from some data providers can make this distinction difficult. For example, data routers like Segment or Rudderstack can route data from multiple sources into a single destination, like Lytics.
