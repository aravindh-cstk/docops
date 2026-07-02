---
title: "Stack"
description: "Stack is instance for performing Contentstack Delivery API request."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/stack"
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

Stack is instance for performing Contentstack Delivery API request.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | String | Yes | — | API Key is a unique key assigned to each stack. |
| deliveryToken | String | Yes | — | Delivery Token is a read-only credential that you can create for different environments of your stack. |
| environment | String | Yes | — | Environment can be defined as one or more content delivery destinations |
| host | String | No | cdn.contentstack.io | The domain host to perform requests against. |
| region | String | No | — | Region refers to the location of the data centers where your organization’s data resides. |
| apiVersion | string | No | v3 | Stack api version point. |
| branch | String | No | — | Branch for the stack to get data from. |
| cachePolicy | CachePolicy | No | — | CachePolicy allows you to cache request |
| jsonDecoder | JSONDecoder  | No | — | The JSONDecoder that the receiving client instance uses to deserialize JSON. The SDK will inject information about the locales to this decoder and use this information to normalize the fields dictionary of entries and assets. |
