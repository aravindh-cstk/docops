---
title: "LogType"
description: "The type of logger to use."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/logtype"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# LogType

## LogType

The type of logger to use.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| print | LogType | No | — | Log using simple Swift print statements. |
| nsLog | LogType | No | — | Log using NSLog. |
| custom(CustomLogger) | ContentstackRegion | No | — | Log using a custom logger. |
