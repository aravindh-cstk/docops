---
title: "except"
description: "Displays all data of an entries or assets excluding the data of the specified fields."
url: "https://www.contentstack.com/js-query-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

Displays all data of an entries or assets excluding the data of the specified fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| values | string|array | No | — | Field UID of content type |

Returns:
Type
Query

The except function with field_uid will exclude the data of only the specified fields for each entry and includes the data of all other fields.

```
import Contentstack from 'contentstack'; 
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().except('title').toJSON().find();
```

The except function with an array of field_uids will except multiple fields for each entry and include the data of all other fields.

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().except(['title', 'description']).toJSON().find();
```

In except, we have the only with a reference parameter, where you need to enter the UID of the reference field in place of "reference_field_uid", and the second parameter to except the data of only the specified field_uid for each entry and include the data of all other fields.

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().includeReference('reference_field_uid').except('reference_field_uid','title').toJSON().find();
```

In except, we have the only with a reference parameter with an array, where you need to enter the UID of the reference field in place of "reference_field_uid", and the second parameter with an array of fields to except the data of only the specified array of field_uids for each entry and include the data of all other fields.

```
import Contentstack from &'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().includeReference('reference_field_uid').except('reference_field_uid',['title', 'description']).toJSON().find();
```
