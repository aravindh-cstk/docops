---
title: "SyncStack"
description: "A container for the synchronized state of a Stack"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/syncstack"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# SyncStack

## SyncStack

A container for the synchronized state of a Stack

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| syncToken | String | No | — | You can use the sync_token later to perform subsequent sync, which fetches only new changes through delta updates. |
| paginationToken | string | No | — | If there are more than 100 records, you get a pagination_token in response. This token can be used to fetch the next batch of data. |
| totalCount | Int | No | — | The total number of resources which matched the original request. |
| items | [Any] | No | — | The resources which are part of the array response. |
