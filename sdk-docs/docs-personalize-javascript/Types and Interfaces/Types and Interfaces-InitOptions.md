---
title: "InitOptions"
description: "The InitOptions interface specifies configuration options for initializing the SDK. These options allow for customization during the setup process"
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-types-and-interface-initoptions"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## InitOptions

The `InitOptions` interface specifies configuration options for initializing the SDK. These options allow for customization during the setup process

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| request | Request | No | — | A web-standard Request object used to track users and extract attributes like query parameters, referrer, and geolocation in edge functions. |
| userId | string | No | — | The user ID to be explicitly assigned. |
| customVariantQueryParam | string | No | — | Specifies a custom name for the variant query parameter |
| liveAttributes | ClientAttributes | No | — | Specifies the custom attributes object to treat as live attributes. These attributes must be pre-configured in the Personalize project. |
