---
title: "SyncStack"
description: "Represents the result of a sync operation."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/dot-net/reference/syncstack"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# SyncStack

## SyncStack

Represents the result of a sync operation.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Items | IEnumerable<dynamic> | No | — | Readonly property contains all the Contents |
| PaginationToken | string | No | — | Readonly property for paginating sync |
| SyncToken | string | No | — | Readonly property to delta sync. |
| TotalCount | int | No | — | Readonly property to check totalCount |
