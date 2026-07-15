---
title: "ContentstackResponse"
description: "Abstract class for Response objects."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/contentstackresponse"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentstackResponse

## ContentstackResponse

Abstract class for Response objects.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ContentLength | long | No | — | Returns the content length of the HTTP response. |
| ContentType | string | No | — | Gets the property ContentType. |
| IsSuccessStatusCode | bool | No | — | Gets a value that indicates whether the HTTP response was successful. |
| ResponseBody | HttpResponseMessage | No | — | The entire response body from the HTTP response. |
| StatusCode | HttpStatusCode | No | — | The HTTP status code from the HTTP response. |
