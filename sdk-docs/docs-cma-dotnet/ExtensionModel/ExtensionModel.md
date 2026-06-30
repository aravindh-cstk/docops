---
title: "ExtensionModel"
description: "Extension model for creating or updating extensions."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/extensionmodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ExtensionModel

## ExtensionModel

Extension model for creating or updating extensions.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Config | string | Yes | — | Config for the extension. |
| DataType | string | No | — | DataType for the extension. |
| Multiple | bool | No | — | Set true for multiple extension. |
| Scope | ExtensionScope | No | — | Scope for the extension. |
| Src | string | No | — | Source code for the extension. |
| Srcdoc | string | No | — | Doc for the extension. |
| Tags | List<string> | No | — | List of tags to be added to extension. |
| Title | string | No | — | Extension title for giving name to extension. |
| Type | string | No | — | Extension type like custom field, widget, or dashboard. |
