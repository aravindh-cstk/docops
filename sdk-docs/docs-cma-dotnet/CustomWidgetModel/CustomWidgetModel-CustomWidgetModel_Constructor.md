---
title: "CustomWidgetModel"
description: "CustomWidgetModel constructor"
url: "https://www.contentstack.com/dotnet-management-customwidgetmodel-customwidgetmodel"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CustomWidgetModel

CustomWidgetModel constructor

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | String | Yes | — | File path to upload custom widget. |
| contentType | string | Yes | — | Content type for the file to be uploaded. |
| title | string | Yes | — | Title for the custom widget. |
| tags | string | No | — | Tags for the widget |

Returns:
Type
CustomWidgetModel

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stream | Stream | Yes | — | File stream for the custom widget to be upload. |
| contentType | string | Yes | — | Content type for the file stream. |
| title | string | Yes | — | Title for the custom widget. |
| tag | string | No | — | Tags for the custom widget. |

Returns:
Type
CustomWidgetModel

### Overload 3

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| bytes | byte[] | Yes | — | Bytes for the file to be uploaded. |
| contentType | string  | Yes | — | Content type for the file bytes. |
| title | string | Yes | — | Title for the custom widget. |
| tags | string | No | — | Tags for the custom widget. |

Returns:
Type
CustomWidgetModel

### Overload 4

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| byteArray | ByteArrayContent | Yes | — | Byte array content of file to be uploaded. |
| contentType | string | Yes | — | Content type for the file byte content |
| title | string | Yes | — | Title for the custom widget. |
| tags | string | No | — | Tags for the custom widget |

Returns:
Type
CustomWidgetModel
