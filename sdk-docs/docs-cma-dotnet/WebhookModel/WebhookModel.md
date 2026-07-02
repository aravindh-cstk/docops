---
title: "WebhookModel"
description: "WebhookModel for creating or updating webhook."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/webhookmodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# WebhookModel

## WebhookModel

WebhookModel for creating or updating webhook.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Name | string | No | — | Name for the webhook. |
| Branches | List<string> | No | — | List of branches to be added for the webhook. |
| Channels | List<string> | No | — | List of channels on which webhook to be triggerd. |
| ConcisePayload | bool | No | — | Set true if required concise payload. |
| destinations | List<WebhookTarget> | No | — | List of webhook target to be triggerd. |
| Disabled | bool | No | — | Set true for disabling the webhook. |
| RetryPolicy | string | No | — | Set retry policy to perform retry on when webhook is failed. |
