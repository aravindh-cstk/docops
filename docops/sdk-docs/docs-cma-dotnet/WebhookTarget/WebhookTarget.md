---
title: "WebhookTarget"
description: "WebhookTarget for creating or updating webhook."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/webhooktarget"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# WebhookTarget

## WebhookTarget

WebhookTarget for creating or updating webhook.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| CustomHeader | List<Dictionary<string, object>> | No | — | List of custom header to be added in webhook. |
| HttpBasicAuth | string | No | — | Basic auth for the http request. |
| HttpBasicPassword | string | No | — | Http Password if required to authorize target. |
| TargetUrl | string | No | — | Target url for the request to be triggered. |
