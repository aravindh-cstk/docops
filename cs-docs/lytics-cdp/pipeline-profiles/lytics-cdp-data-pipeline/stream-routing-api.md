---
title: "Stream Routing API"
description: "Route Rules provide the ability to redirect data from one stream to another, or to ignore subsets of a stream altogether."
url: /lytics/stream-routing-api
---

# Stream Routing API

## Stream Routing API

### Route Rules

Route Rules provide the ability to redirect data from one stream to another, or to ignore subsets of a stream altogether.

For example, you may want to split up data from one monolithic customer\_activity stream into separate streams for web\_activity, email\_activity, transactions, etc.

Or you may want to ignore all developer testing for a web stream by ignoring all events where the URL contains "localhost".

The Stream Route Rules API provides the following endpoints:

-   GET /v2/stream/rule retrieves a list of all route rules defined in the account
-   GET /v2/stream/rule/:id retrieves a single route rule by its ID
-   POST /v2/stream/rule creates a new route rule
-   POST/PUT /v2/stream/rule/:id upserts an existing route rule by its ID
-   DELETE /v2/stream/rule/:id deletes an existing route rule by its ID

Route rules define data to route from one input stream to another output stream. On ingress, the stream on the record is overwritten from input to output if the rule is active and evaluates to true when executed against the incoming record.

**Note: If there is a use case to take all events and route them to the output stream, the expression can hold the string value of "true" instead of a logic condition. i.e. "expression": "true"**

Our object includes several properties which should be self-explanatory: account\_id, aid, and name. The rest are as follows:

-   active defines whether the rule should be activated against incoming data. Marking a rule as "active": false turns it off.
-   priority indicates the order in which the rules are evaluated (higher priority first) against an event. secondary sorting according the age (newer rules first) is performed when priorities match

**Note that because these route rules are cached, it will take up to 10 minutes for any updates you make to take effect.**

### Example

To create our sample route rule, we make the following call to ignore all events from localhost. If successful, the response body will include the full route rule object, including a system-generated ID which can be used for subsequent calls against the object:

```
echo '{
    "account_id": "4f7b525bdba058fc096757a6",
    "active": true,
    "aid": 12,
    "expression": "contains(`_url`, \"localhost\")",
    "input": "app",
    "name": "Ignore events from localhost",
    "output": "app_divert",
    "priority": 1
}' | http POST $LIOAPIPROD/v2/stream/rule Authorization:$LIOTOKEN account_id==4f7b525bdba058fc096757a6
```

### Routing Tips and Tricks

#### Exporting Routed Data

When data is routed from the input stream to the output stream, Lytics will associate the raw routed data to the output stream. This means when a raw activity data is exported, the data that was routed will be associated with the output stream only.

#### Behavior Scoring on Streams

An optional feature with all streams is to add [Behavioral Scoring](/docs/lytics/behavioral-scores-1) to selected streams. If a behavioral scores are desired for a specific stream make sure the stream that is being targeted is the routing output stream and **not** the input stream.
