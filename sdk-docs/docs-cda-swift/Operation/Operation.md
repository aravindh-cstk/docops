---
title: "Operation"
description: "When fetching entries, you can search on field key paths."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/operation"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Operation

## Operation

When fetching entries, you can search on field key paths.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| equals(QueryableRange) | Operation | No | — | Equals Operator |
| notEquals(QueryableRange) | Operation | No | — | Not-equals Operator |
| includes([QueryableRange]) | Operation | No | — | Includes content in array |
| excludes([QueryableRange]) | Operation | No | — | Excludes content in array . |
| isLessThan(QueryableRange) | Operation | No | — | Less Than . |
| isLessThanOrEqual(QueryableRange) | Operation | No | — | Less than or equal . |
| isGreaterThan(QueryableRange) | Operation | No | — | Greater Than . |
| isGreaterThanOrEqual(QueryableRange) | Operation | No | — | Greater than or equal . |
| exists(Bool) | Operation | No | — | The existence operator . |
| matches(String) | Operation | No | — | Search on a field by Regex |
