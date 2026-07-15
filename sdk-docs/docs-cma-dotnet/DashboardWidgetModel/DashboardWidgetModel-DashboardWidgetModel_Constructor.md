---
title: "DashboardWidgetModel"
description: "DashboardWidgetModel constructor"
url: "https://www.contentstack.com/dotnet-management-dashboardwidgetmodel-dashboardwidgetmodel"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DashboardWidgetModel

DashboardWidgetModel constructor

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | String | Yes | — | File path to upload dashboard widget. |
| contentType | string | Yes | — | Content type for the file to be uploaded. |
| title | string | Yes | — | Title for the dashboard widget. |
| tags | string | No | — | Tags for the widget |

Returns:
Type
DashboardWidgetModel

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stream | Stream | Yes | — | File stream for the dashboard widget to be upload. |
| contentType | string | Yes | — | Content type for the file stream. |
| title | string | Yes | — | Title for the dashboard widget. |
| tag | string | No | — | Tags for the dashboard widget. |

Returns:
Type
DashboardWidgetModel

### Overload 3

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| bytes | byte[] | Yes | — | Bytes for the file to be uploaded. |
| contentType | string  | Yes | — | Content type for the file bytes. |
| title | string | Yes | — | Title for the dashboard widget. |
| tags | string | No | — | Tags for the dashboard widget. |

Returns:
Type
DashboardWidgetModel

### Overload 4

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| byteArray | ByteArrayContent | Yes | — | Byte array content of file to be uploaded. |
| contentType | string | Yes | — | Content type for the file byte content |
| title | string | Yes | — | Title for the dashboard widget. |
| tags | string | No | — | Tags for the dashboard widget |

Returns:
Type
DashboardWidgetModel
