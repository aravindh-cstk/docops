---
title: "ContentstackLogger"
description: "An enum describing the types of messages to be logged."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/contentstacklogger"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentstackLogger

## ContentstackLogger

An enum describing the types of messages to be logged.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| logType | LogType | No | NSLog | The type of logger used to log messages; defaults to NSLog on iOS, tvOS, watchOS, macOS. Defaults to print on other platforms. |
| logLevel | LogLevel | No | LogLevel.error | The highest order of message types that should be logged. |
