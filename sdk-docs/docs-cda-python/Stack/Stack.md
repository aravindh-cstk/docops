---
title: "Stack"
description: "Retrieves stack"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/python/reference/stack"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Stack

## Stack

Retrieves stack

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | dict | Yes | — |  |
| early_access | dict | No | — | Optional array of header strings for early access features. |
| sync_param | dict | No | — |  |
| endpoint | str | No | — |  |
| api_key | str | Yes | — |  |
| delivery_token | str | Yes | — |  |
| environment | str | Yes | — |  |
| host | str | No | — |  |
| version | str | No | — |  |
| region | Region | No | — | DB region for your stack. You can choose from seven regions namely, AWS NA, AWS EU, AWS AU, Azure NA, Azure EU, GCP NA, and GCP EU |
| timeout | int | No | — |  |
| branch | str | No | — |  |
| retry_strategy | Retry | No | — |  |
| live_preview_dict | dict | No | — |  |
