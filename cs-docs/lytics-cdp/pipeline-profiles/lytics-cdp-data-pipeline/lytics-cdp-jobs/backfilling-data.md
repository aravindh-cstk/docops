---
title: "Backfilling Data"
description: "Some use cases involve having historical data available for segmentation. This data might be demographic in nature, or describe how customers prefer to be…"
url: /lytics/backfilling-data
uid: bltad02e08a3f3143c3
---

# Backfilling Data

## Backfilling Data

## Backfilling Data

Some use cases involve having historical data available for segmentation. This data might be demographic in nature, or describe how customers prefer to be contacted. This document offers guidelines for cases where large amounts of this data must be available in your Lytics account.

### Best Practices

#### Separate Backfill from Real-time Streams

A real-time [data stream](/docs/lytics/data-streams-1) contains messages sent in response to the activity they describe. This is distinguished from batched data streams, where messages are sent in groups on a given schedule or according to another trigger.

For attributes that will be kept updated by a real-time stream, there is the additional requirement to populate that attribute with a substantial amount of pre-existing information, separating that backfilling from now-forward messages.

Backfill messages can be sent using multiple means. API loads should be sent via the bulk CSV or bulk JSON endpoints. It is also possible to use integration workflows to import this data, such as [Amazon Web Services (AWS) S3](/docs/lytics/aws-s3-overview).

The benefit of separating this data from real-time message streams is that the processing of backfill messages does not impact the processing time of messages received from real-time streams. The bulk imports are processed in parallel to real-time messages. This means that marketing activations reliant on real-time updates are not affected.

#### Utilize Timestamps

Whenever possible, _all_ messages should have an explicit timestamp. While all messages are additionally time stamped by Lytics at the time of ingestion, specifying a message timestamp is helpful in all circumstances, particularly in cases when messages are received out of order so that Lytics knows which one is the most up-to-date. It is essential when a backfill occurs concurrently with a real-time stream of the same attribute.

All means of loading data permit specifying timestamps. Via API, this is via a timestamp\_field URL parameter. In the Admin UI, data import configuration options feature a menu to pick among the file schema for a timestamp field.

#### Evaluate Necessity

All messages imported into your Lytics account are stored in their raw form and represented as profile attributes in the graph. The purpose of storing all messages is to enable the reprocessing of those messages, a process called _rebuilding_. Rebuilding enables all received messages to be represented differently with different attributes, identity resolution rules, etc.

All data ingested into Lytics incrementally increase the overhead of rebuilding, making it a longer and more processing-intensive operation. Therefore, before importing large amounts of data, consider the value/benefit of that data. If there is no clear use case for backfilling, consider skipping it.
