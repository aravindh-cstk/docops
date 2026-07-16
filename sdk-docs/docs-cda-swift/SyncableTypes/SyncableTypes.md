---
title: "SyncableTypes"
description: "This enable to sync entity with condition."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/syncabletypes"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# SyncableTypes

## SyncableTypes

This enable to sync entity with condition.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| all | SyncableTypes | No | — | Sync all assets and all entries of all content types. |
| contentType(String) | SyncableTypes | No | — | Enter content type UIDs. e.g., products. This retrieves published entries of specified content type. |
| locale(String) | SyncableTypes | No | — | Enter locale codes. e.g., en-us This retrieves published entries of specific locale. |
| startFrom(Date) | SyncableTypes | No | — | Enter the start date. e.g., Date() This retrieves published entries starting from a specific date. |
| publishType(PublishType) | SyncableTypes | No | — | If you do not specify any value from PublishType, it will bring all published entries and published assets. You can pass multiple types as comma-separated values. |
