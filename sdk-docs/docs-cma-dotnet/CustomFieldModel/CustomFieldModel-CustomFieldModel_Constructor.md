---
title: "CustomFieldModel"
description: "CustomFieldModel constructor"
url: "https://www.contentstack.com/dotnet-management-customfieldmodel-customfieldmodel"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CustomFieldModel

CustomFieldModel constructor

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | String | Yes | — | File path to upload custom field. |
| contentType | string | Yes | — | Content type for the file to be uploaded. |
| title | string | Yes | — | Title for the custom field . |
| tags | string | No | — | Tags for the custom field . |

Returns:
Type
CustomFieldModel

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stream | Stream | Yes | — | File stream for the custom field to be upload. |
| contentType | string | Yes | — | Content type for the file stream. |
| title | string | Yes | — | Title for the custom field . |
| tag | string | No | — | Tags for the custom field . |

Returns:
Type
CustomFieldModel

### Overload 3

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| bytes | byte[] | Yes | — | Bytes for the file to be uploaded. |
| contentType | string  | Yes | — | Content type for the file bytes. |
| title | string | Yes | — | Title for the custom field . |
| tags | string | No | — | Tags for the custom field . |

Returns:
Type
CustomFieldModel

### Overload 4

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| byteArray | ByteArrayContent | Yes | — | Byte array content of file to be uploaded. |
| contentType | string | Yes | — | Content type for the file byte content |
| title | string | Yes | — | Title for the custom field . |
| tags | string | No | — | Tags for the custom field |

Returns:
Type
CustomFieldModel
