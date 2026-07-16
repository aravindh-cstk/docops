---
title: "Entry"
description: "An initializer is responsible for creating Entry object."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ios/reference/entry"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Entry

## Entry

An initializer is responsible for creating Entry object.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | NSString | No | — | Readonly property to check value of entry’s uid |
| deleted | BOOL | No | — | Readonly property to check if entry is deleted. |
| tags | NSArray<NSString*> | No | — | Readonly property to check tags of entry |
| contentTypeName | NSString | No | — | Readonly property to check ContentType name of entry |
| title | NSString | No | — | Readonly property to check title of entry. |
| url | NSString | No | — | Readonly property to check url of entry. |
| locale | NSString | No | — | Readonly property to check Language of entry |
| createdAt | NSDate | No | — | Readonly property to check createAt of entry |
| createdBy | NSString | No | — | Readonly property to check createdBy of entry |
| updatedAt | NSDate | No | — | Readonly property to check updatedAt of entry |
| updatedBy | NSString | No | — | Readonly property to check updatedBy of entry |
| deletedAt | NSDate | No | — | Readonly property to check deletedAt of entry |
| deletedBy | NSString | No | — | Readonly property to check deletedBy of entry |
| cachePolicy | CachePolicy | No | — | The property to assign cache policy like CACHE_THEN_NETWORK, NETWORK_ELSE_CACHE, NETWORK_ONLY, etc. |
| properties | NSDictionary<NSString*id>  | No | — | Readonly property to get data of entry. |
