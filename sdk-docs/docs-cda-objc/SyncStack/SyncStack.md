---
title: "SyncStack"
description: "Represents the result of a sync operation."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ios/reference/syncstack"
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
| items | NSArray<NSDictionary<NSString*id> *> | No | — | Readonly property contains all the Contents |
| skip | int | No | — | Readonly property to check skip count |
| limit | int | No | — | Readonly property to check limit |
| totalCount | int | No | — | Readonly property to check totalCount |
| paginationToken | NSString | No | — | Readonly property for paginating sync |
| syncToken | NSString | No | — | Readonly property to delta sync. |
