---
title: "Streams API"
description: "Query event stream metadata, statistics, fields, and sample events."
url: /lytics/streams-api
---

# Streams API

## Streams API

Query event stream metadata, statistics, fields, and sample events.

## Overview

The Streams API provides access to metadata about your event streams -- the data feeds flowing into Lytics from your various sources. Use these endpoints to inspect stream activity, discover available fields, view sample events, and monitor stream health.

## API Reference

### List Streams

```
GET /v2/stream
```

Returns metadata for all streams in the account, including provider associations and attached jobs.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| streams | string | Comma-separated list of stream names to filter by |

#### Response

Returns an array of stream objects:

```
[
  {
    "name": "default",
    "ct": 15000,
    "last_msg_time": "2024-01-15T10:30:00Z",
    "last_received_time": "2024-01-15T10:30:00Z",
    "providers": ["web_sdk"],
    "jobs": ["job_abc123"],
    "hidden": false,
    "internal": false
  }
]
```

### List Stream Names

```
GET /v2/stream/names
```

Returns a simple list of all stream names for the account.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deleted | boolean | Include deleted streams |

### List Stream Fields

```
GET /v2/stream/fields
```

Returns all fields observed across the specified streams, including usage statistics and data types.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| streams | string | Comma-separated list of stream names |

### Get Stream

```
GET /v2/stream/{name}
```

Returns metadata for a single stream.

### Get Stream Statistics

```
GET /v2/stream/{name}/stats
```

Returns detailed statistics for a stream, including per-field information:

-   Field usage counts
-   Sample values
-   Cardinality (number of distinct values)
-   Inferred data types

This is useful for understanding the shape and quality of data flowing through a stream before creating schema mappings.

### Get Stream Events

```
GET /v2/stream/{name}/events
```

Returns a sample of recent events from the stream. Use this to inspect the raw data format and verify that events are arriving as expected.
