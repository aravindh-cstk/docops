---
title: "setEdgeApiUrl"
description: "The `setEdgeApiUrl()` method configures the Edge API URL, especially when directing the SDK to a different Contentstack region. By default, the SDK will attempt to initialize using the AWS NA region. Invoke this method before initializing the SDK to ensure the configuration is applied. Refer to our documentation to find your region-specific base URL"
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-setedgeapiurl"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setEdgeApiUrl

The `setEdgeApiUrl()` method configures the Edge API URL, especially when directing the SDK to a different Contentstack region. By default, the SDK will attempt to initialize using the AWS NA region. Invoke this method before initializing the SDK to ensure the configuration is applied. Refer to our documentation to find your region-specific [base URL](https://www.contentstack.com/docs/developers/apis/personalize-edge-api#base-url)

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| edgeApiUrl | string | No | — | The region-specific endpoint used to optimize SDK performance. |

Returns:
Type
void

**Example:**

```
Personalize.setEdgeApiUrl('https://eu-personalize-edge.contentstack.com');
const personalizeSdk = await Personalize.init(projectUid);
```
