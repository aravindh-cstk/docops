---
title: "Get Started with Lytics Segments"
description: "Lets take an in-depth look at Lytics segments. We'll cover how to define a segment with SegmentQL or SegmentAST, as well as the Segment API endpoints to…"
url: /lytics/get-started-with-lytics-segments
uid: bltf5060de498a9f0c4
---

# Get Started with Lytics Segments

## Get Started with Lytics Segments

## Get Started with Lytics Segments

Lets take an in-depth look at Lytics segments. We'll cover how to define a segment with SegmentQL or SegmentAST, as well as the Segment API endpoints to create, read, update, delete, scan, and list the segments in your account.

Note that throughout this guide we use the term segment and audience interchangably. Specifically, the term audience refers to a segment on the user table. In your Lytics account there is also a separate table and schema for content. A segment on this table is often called a content collection.

**Difficulty** Beginner

**TLDR:** [Checkout the Segment API documentation](/reference/segment).

**Other resources:**

-   [Lytics Go Client](https://github.com/lytics/go-lytics) - Lytics API library for the go programming language.
-   [QLBridge](https://github.com/araddon/qlbridge) - a go SQL Runtime Engine.
-   [Lytics Segment Scan with SQL](https://github.com/dataux/dataux/tree/master/backends/lytics).

### Prerequisites

-   [httpie](https://github.com/jakubroztocil/httpie) - (optional) a more user friendly version of cURL that we'll be using in this guide for readability.
-   [Lytics Command Line Tool](https://github.com/lytics/lytics) - (optional) we'll show you how to execute commands with our CLI for each endpoint that is supported.
-   A valid API token for your Lytics account ([learn about managing API tokens](/docs/lytics/access-tokens)). For ease of use we suggest adding as an environment variable in your command line:

```
export LIOKEY={API Token}
```

### 1\. Defining A Segment

If you haven't yet, take a minute to check out the [audience builder](/docs/lytics/audiences) in your account. This can be accessed from the Audience tab in the Lytics UI and then by selecting to **create a new audience**.

The audience builder is a visual interface for what we will cover in the first section of this guide - defining a segment. A segment definition at its core is really just a conditional statement. If the data we have collected on a user meets the conditions of the segment than they are considered a member. We have two different syntaxes for these conditional segment definitions: SegmentQL, and SegmentAST.

#### SegmentQL

SegmentQL is simple Query Language using filter statements. Before we dive too deep into the syntax, lets look at a segment built in the segment builder UI side by side with its SegmentQL definition.

![Example Segment](https://storage.googleapis.com/lytics-marketing-assets/academy/segment_api/active-segment.png)

```
FILTER OR (
  AND (
    cm_status = "active"
    INCLUDE last_open_7_days
  )
  last_active_ts > "now-7d"
)
FROM user 
ALIAS active_web_or_email
```

In this example cm\_status refers to the subscriber status in Campaign Monitor, an email provider. So a marketer might build this audience as a target for all users who are active across their email and web channels in the last 7 days.

For us developers, this simple query language is probably quite intuitive! Our UI exists for marketers to build audiences, but you might find it quicker to write SegmentQL, and create a segment through the API. Just to cover all our bases lets take an in depth look at the anatomy of a filter statement:

```
FILTER [phrase] [from] [alias]
```

| \\\[phrase\] | Notes |
| --- | --- |
| AND (\\\[phrase\], \\\[phrase\], ...) |  |
| OR (\\\[phrase\], \\\[phrase\], ...) |  |
| NOT \\\[phrase\] |  |
| EXISTS \\\[identifier\] | \\\[identifier\] is a field name. |
| \\\[identifier\] IN (\\\[literal\], \\\[literal\], ...) |  |
| \\\[identifier\] CONTAINS \\\[literal\] |  |
| \\\[identifier\] INTERSECTS (\\\[literal\], \\\[literal\], ...) | INTERSECTS = "contains one of" |
| \\\[identifier\] LIKE \\\[literal\] | \\\[literal\] must be a string. Can use \* a wildcard |
| INCLUDE \\\[identifier\] | \\\[identifier\] is a segment id/slug. (to include existing segment) |
| \\\[identifier\] > \\\[literal\] |  |
| \\\[identifier\] >= \\\[literal\] |  |
| \\\[identifier\] < \\\[literal\] |  |
| \\\[identifier\] <= \\\[literal\] |  |
| \\\[identifier\] = \\\[literal\] |  |
| \\\[identifier\] != \\\[literal\] |  |

-   **\\\[identifier\]** = alphanumeric string (often the name of a data field, table, or segment).  

-   **\\\[literal\]** = a string, int, float, boolean, or timestamp literal value.

| \\\[from\] | Notes |
| --- | --- |
| FROM \\\[identifier\] | \\\[identifier\] is the name of the table ie. user, content, etc. |

-   **\\\[from\]** is optional if creating a filter on the user table.

| \\\[alias\] | Notes |
| --- | --- |
| ALIAS \\\[identifier\] | \\\[identifier\] is the saved name of the segment. |

-   **\\\[alias\]** is optional if you do not wish to save the segment.

#### Segment AST

SegmentAST expressions look very similar to SegmentQL but instead of having its own filter syntax it is formatted in JSON. It's perhaps less readable for a human, but if you're writing a program which creates or updates segment definitions it might be easier to format the bodies of your requests using SegmentAST. Lets look at the same example from above in SegmentAST.

![Example Segment](https://storage.googleapis.com/lytics-marketing-assets/academy/segment_api/active-segment.png)

```
{
  "op": "or",
    "args": [{
    "op": "and",
    "args": [{
      "op": "=",
      "args": [{
        "ident": "cm_status"
      },
      {
        "val": "active"
      }]
    },
    {
      "op": "include",
      "args": [{
        "ident": "last_open_7_days"
      }]
    }]
  },
  {
    "op": ">",
    "args": [{
      "ident": "last_active_ts"
    },
    {
      "val": "now-7d"
    }]
  }]
}
```

Definitely not as easy to look at as SegmentQL, but if you spend a second scanning the JSON that you'll see it's generally the same expressions. Here is a breakdown of the key components:

| key | type | Notes |
| --- | --- | --- |
| op | string | operator used to evaluate the args |
| args | array | a list of objects containing the identifiers and literals operate on |
| ident | string | identifier name |
| val | string | literal value |

### 2\. Segment Validate API

The segment validate endpoint accepts a plain text SegmentQL statement and ensures that the definition is valid. This can be especially useful when creating a segment. Before sending a request to build the segment via the API you might want to validate it first.

```
echo 'FILTER AND (
  utm_campaigns CONTAINS "summer_froyo_promo",
  EXISTS email,
  scores.momentum > 40
)' | http POST https://api.lytics.io/api/segment/validate access_token==$LIOKEY
```

Note that this endpoint does not validate field names in your account. It simply checks the syntax of the SegmentQL statement.

### 3\. Segment CRUD API

#### Segment Create

The segment create endpoint accepts plain text (containing SegmentQL) or a JSON body (SegmentQL or AST).

## example 1: plain text

echo 'FILTER ( lytics\_content.Yogurt >= 0.75 ) FROM user ALIAS affinity\_for\_yogurt ' | http POST https://api.lytics.io/api/segment Content-type:text/plain access\_token==$LIOKEY

## example 2: json segmentQL

echo '{ "name": "High Affinity for Yogurt", "segment\_ql": "FILTER (lytics\_content.Yogurt >= 0.75)", "slug\_name": "affinity\_for\_yogurt", "is\_public": true, "description": "Segment containing all users highly interested in the topic Yogurt.", "table": "user"

}' | http POST https://api.lytics.io/api/segment Content-type:application/json access\_token==$LIOKEY

## example 3: json segmentAST

echo '{ "name": "High Affinity for Yogurt", "slug\_name": "affinity\_for\_yogurt", "is\_public": true, "description": "Segment containing all users highly interested in the topic Yogurt.", "table": "user", "ast": { "op": ">=", "args": \[{ "ident": "lytics\_content.Yogurt" }, { "val": "0.75" }\] }

}' | http POST https://api.lytics.io/api/segment Content-type:application/json access\_token==$LIOKEY

### Segment Read

You must know the segment ID or slug name to fetch the segment via the read endpoint.

## example 1:

http GET https://api.lytics.io/api/segment/affinity\_for\_yogurt access\_token==$LIOKEY

## example 2: lytics cli

lytics --segments=affinity\_for\_yogurt segment

### Segment Update

You must know the ID or the slug of the segment to update.

echo '{ "slug\_name": "affinity\_for\_yogurt", "segment\_ql": "FILTER (lytics\_content.Yogurt >= 0.9)" }' | http PUT https://api.lytics.io/api/segment/affinity\_for\_yogurt access\_token==$LIOKEY

### Segment Delete

You must know the ID or the slug of the segment to delete.

http DELETE https://api.lytics.io/api/segment/affinity\_for\_yogurt access\_token==$LIOKEY

## 4\. Segment List API

For many of the CRUD operations we just talked about you need to know the ID or slug name of the segment. It may help to have access to a list of all existing segments in your account to use as a reference. The list endpoint will return a list of all segments for your account including id, slug, and the QL and/or AST definition of the segment.

## example 1: list all audiences

http GET https://api.lytics.io/api/segment access\_token==$LIOKEY

## example 2: lytics cli

lytics segment

## example 3: list all content collections

http GET https://api.lytics.io/api/segment access\_token==$LIOKEY table==content

## 5\. Segment Scan API

The scan endpoint provides a list of all entities in a segment. For audiences (segments on the user table) the entities returned are user profiles. The scan endpoint can accept a number of different query parameters, we won't cover all of them here, but as always you can check out [our docs](https://docs.lytics.com/reference/get_segment) for the full details on this API.

You can use this endpoint to scan an existing, saved segment in which case you'll need the segment ID or slug. You can also scan an ad-hoc segment by passing SegmentQL to the endpoint.

## example 1: existing audience

http GET https://api.lytics.io/api/segment/affinity\_for\_yogurt/scan access\_token==$LIOKEY ortfield==last\_purchase\_ts

## example 2: lytics cli

lytics --id=affinity\_for\_yogurt segmentscan

## example 3: ad-hoc content collection

echo 'FILTER OR ( global.Yogurt > 0.5, global.Ice Cream > 0.5 ) FROM content ' | http GET https://api.lytics.io/api/segment/scan access\_token==$LIOKEY limit==10

## example 4: ad-hoc lytics cli

lytics segmentscan ' FILTER ( aspects INTERSECTS ("article", "video") ) FROM content'

If the total number of entities in the segment exceeds the limit provided in the request (the default value is 20) then we will paginate the results. In the JSON body, there will be a token value with the key next. To get the next page of results in the scan, make a subsequent request with the query param start equal to the next token from the prior request. The API will continue to return next tokens in each response until you've fully scaned the segment.

## What's next?

The endpoints we covered here will get you started with Lytics segments. We do have a couple segment APIs that were not covered in this guide, primarily around segment size. The API for this is quite simple, check out [our docs](https://docs.lytics.com/reference/get_segment) if you're interested. It also may help to look at the [catalog schema](https://docs.lytics.com/reference/get_schema) and/or the [query](https://docs.lytics.com/reference/query-list) API if you're unfamiliar with the fields in your Lytics account. Keep in mind that everything you see in the Lytics web UI is built off of our APIs. It is never "necessary" to use the UI to complete a task with Lytics. If you have the time and resources you can build many different custom applications to interface with your Lytics account through our APIs. We're excited to work with developers to tackle exciting new use cases. If our docs aren't enough you can always [reach out to us](https://www.lytics.com/contact).
