---
title: "Include"
description: "The Query.Include is parameter for including count, Unpublished, ContentType schema, Global Fields schema, and Reference ContentType Uid in result."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/include"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Include

## Include

The `Query.Include` is parameter for including count, Unpublished, ContentType schema, Global Fields schema, and Reference ContentType Uid in result.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| rawValue | Int | No | — | Each bit of rawValue potentially represents an element of the option set. |
| count | Include | No | — | To include count in the response. |
| unpublished | Include | No | — | To include Unpublished Entries in response, |
| contentType | Include | No | — | To include ContentType schema in Entry response, |
| globalField | Include | No | — | To include Global Fields schema in Entry response. |
| refContentTypeUID | Include | No | — | To include Reference ContentType Uid in reference field in Entry response. |
| fallback | Include | No | — | Retrieve the published content of the fallback locale if an entry is not localized in specified locale. |
| embeddedItems | Include | No | — | Include Embedded Objects (Entries and Assets) along with entry/entries details. |
| all | Include | No | — | To include all Query.Include values. |
