---
title: "publish"
description: "The publish method allows you to publish an entry for a specified environment either immediately or schedule it for a later date/time."
url: "https://www.contentstack.com/python-management-entry-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The publish method allows you to publish an entry for a specified environment either immediately or schedule it for a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data you want to publish |

Returns:
Type
Entry

```
data = {
               "entry": {
                   "environments": ["development"],
                   "locales": ["en-us"]
               },
               "locale": "en-us",
               "version": 1,
               "scheduled_at": "2019-02-14T18:30:00.000Z"
           }
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types().entry('entry_uid').publish(data).json()
```
