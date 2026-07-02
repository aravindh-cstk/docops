---
title: "metadata"
description: "Metadata is a piece of information that lets you describe or classify an asset/entry. You can manage your digital entities effectively and facilitate enhanced accessibility with additional metadata."
url: "https://www.contentstack.com/python-management-stack-metadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## metadata

Metadata is a piece of information that lets you describe or classify an asset/entry.
You can manage your digital entities effectively and facilitate enhanced accessibility with additional metadata.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| metadata_uid | str | No | — | UID of the metadata |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().metadata()
```
