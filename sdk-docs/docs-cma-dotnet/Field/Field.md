---
title: "Field"
description: "Action class for setting action for the field."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/field"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Field

## Field

Action class for setting action for the field.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| DataType | string | No | — | Determines what value can be provided to the Title field. |
| DisplayName | string | No | — | Determines the display name of a field. It is a mandatory field. |
| FieldMetadata | FieldMetadata | No | — | Allows you to enter additional data about a field. Also, you can add additional values under ‘field_metadata’. |
| Mandatory | bool | No | — | Set true if field is mandatory. |
| Multiple | bool | No | — | Set true if field value to be multiple. |
| Uid | string | No | — | Represents the unique ID of each field. It is a mandatory field. |
| Unique | bool | No | — | Set true if field value to be unique |
