---
title: "AI Segment Translation"
description: "Translate SegmentQL and FilterQL expressions into human-readable descriptions."
url: /lytics/ai-segment-translation
uid: blt16f04e3e46afb2c4
---

# AI Segment Translation

## AI Segment Translation

Translate SegmentQL and FilterQL expressions into human-readable descriptions.

## Overview

SegmentQL and FilterQL are powerful query languages for defining audiences and content collections in Lytics. However, these expressions can be difficult for non-technical users to interpret. The segment translation feature uses AI to convert these expressions into plain, human-readable descriptions.

## API Reference

### Translate a Collection Filter

```
POST /v2/ai/translate/segment
```

Translates a FilterQL expression into a human-readable description.

#### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| collection | boolean | false | Set to true when translating a content collection filter |
| engine | string | openai | AI engine: openai or vertex |

#### Request Body

```
{
  "filter_ql": "content LIKE \"global\" AND url CONTAINS \"blog\" AND topic EXISTS"
}
```

#### Response

Returns a plain text description:

This collection contains Documents that are globally available, have URLs containing "blog", and have at least one assigned Topic.

## Supported Engines

| Engine | Notes |
| --- | --- |
| openai | Default. Generally produces more natural descriptions. |
| vertex | Google Vertex AI alternative. |

**Note:** This feature currently supports content collection translation. Segment translation for user audiences will be available in a future release.
