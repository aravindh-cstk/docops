---
title: "Manifest"
description: "The `Manifest` type alias defines the structure of the personalization manifest"
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-types-and-interface-manifest"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Manifest

The `Manifest`  type alias defines the structure of the personalization manifest

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| activeVariants | string | No | — | A record mapping experience short UIDs to their corresponding active variant short UIDs |
| experiences | ManifestExperience  | No | — | An array of ManifestExperience objects, each representing an experience and its associated active variant. |
