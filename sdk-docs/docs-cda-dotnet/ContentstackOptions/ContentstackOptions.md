---
title: "ContentstackOptions"
description: "Represents a set of options to configure a Stack."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/dot-net/reference/contentstackoptions"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentstackOptions

## ContentstackOptions

Represents a set of options to configure a Stack.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ApiKey | string | Yes | — | The api key used when communicating with the Contentstack API. |
| AccessToken | string | No | — | The access token used when communicating with the Contentstack API. |
| DeliveryToken | string | Yes | — | The delivery token used when communicating with the Contentstack API. |
| Environment | string | Yes | — | The environment used when communicating with the Contentstack API. |
| Region | ContentstackRegion | No | ContentstackRegion.US | You can choose from seven regions namely, NA, EU, AU, Azure NA, Azure EU, GCP NA and GCP EU. |
| Host | string | No | cdn.contentstack.io | The Host used to set host url for the Contentstack API. |
| Version | string | No | v3 | The Version number for the Contentstack API. |
| Branch | string | No | — | The Branch used to set Branch for the Contentstack API. |
| LivePreview | LivePreviewConfig | No | — | The Live preview configuration for the Contentstack API. |
