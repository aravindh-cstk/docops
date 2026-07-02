---
title: "includeContentType"
description: "Include the details of the content type along with the entry/entries details."
url: "https://www.contentstack.com/js-entry-include-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

Include the details of the content type along with the entry/entries details.

No parameters.

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeContentType().toJSON().fetch();
```

Your response should look like this:

```
[
  [
    {
      "uid": "blt3458ba16457349d2",
      "locale": "en-us",
      "_in_progress": false,
      "created_at": "2024-09-24T21:37:12.148Z",
      "created_by": "bltcd145d6b20c55b33",
      "title": "Test1",
      "updated_at": "2024-11-11T23:56:55.437Z",
      "updated_by": "bltcd145d6b20c55b33",
      "publish_details": {
        "time": "2024-11-11T23:56:59.408Z",
        "user": "bltcd145d6b20c55b33",
        "environment": "blt47ebc22ff5bb18d9",
        "locale": "en-us"
      }
    }
  ],
  {
    "title": "ct1",
    "description": "",
    "schema": [
      {
        "data_type": "text",
        "display_name": "Title",
        "field_metadata": { "_default": true, "version": 3 },
        "mandatory": true,
        "uid": "title",
        "unique": true,
        "multiple": false,
        "non_localizable": false
      }
    ],
    "uid": "ct1",
    "created_at": "2024-09-24T21:23:33.625Z",
    "updated_at": "2024-09-24T21:24:42.841Z",
    "inbuilt_class": false,
    "_version": 2
  }
]
```
