---
title: "ContentstackErrorException"
description: "A base exception for Contentstack API."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/contentstackerrorexception"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# ContentstackErrorException

## ContentstackErrorException

A base exception for Contentstack API.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ErrorCode | int | No | — | This is error code. |
| ErrorMessage | string | No | — | This is error message. |
| Errors | Dictionary<string, object> | No | — | Set of errors in detail. |
| Header | HttpResponseHeaders | No | — | This is http response Header of REST request to Contentstack. |
| Message | string | No | — | This is error message. |
| ReasonPhrase | string | No | — | This is http response phrase code of REST request to Contentstack. |
| StatusCode | HttpStatusCode | No | — | This is http response status code of REST request to Contentstack. |
