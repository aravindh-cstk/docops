---
title: "ContentstackClient"
description: "Initializes an instance of the ContentstackClient class."
url: "https://www.contentstack.com/dotnet-contentstackclient"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ContentstackClient

Initializes an instance of the **ContentstackClient** class.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | string | No | — | API Key of your stack on Contentstack. |
| deliveryToken | string | No | — | Delivery token of your stack on Contentstack. |
| environment | string | No | — | Environment from where you want to fetch content. |
| host | string | No | — | Specifies the base URL for the Contentstack API. Default : `cdn.contentstack.io` |
| region | ContentstackRegion | No | — | Specifies the database region for your stack. You can choose from the following: `NA` , `EU` , `AU` , `Azure NA` , `Azure EU` , and `GCP NA` . Default : `ContentstackRegion.US` |
| version | string | No | — | Specifies the version of the Contentstack API to use. Default: `v3` |

Returns:
Type
ContentstackClient

```
ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| options | ContentstackOptions | No | — | used to get stack details via class ContentstackOptions to create client. |

Returns:
Type
ContentstackClient

```
var options = new ContentstackOptions()
 {
       ApiKey = "api_key",
       DeliveryToken = "delivery_token"
       Environment = "environment"
 }
ContentstackClient stack = new ContentstackClient(options);
```
