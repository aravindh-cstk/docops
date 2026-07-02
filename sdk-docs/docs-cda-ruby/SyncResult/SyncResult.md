---
title: "SyncResult"
description: "Represents the result of a sync operation."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ruby/reference/syncresult"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# SyncResult

## SyncResult

Represents the result of a sync operation.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | Number | No | — | Returns the value of attribute skip. |
| limit | Number | No | — | Returns the value of attribute limit. |
| items | IEnumerable<dynamic> | No | — | Readonly property contains all the Contents |
| pagination_token | String | No | — | Readonly property for paginating sync |
| sync_token | String | No | — | Readonly property to delta sync. |
| total_count | Number | No | — | Readonly property to check totalCount |
