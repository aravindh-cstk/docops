---
title: "only"
description: "Displays values of only the specified fields of entries or assets in the response"
url: "https://www.contentstack.com/js-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

Displays values of only the specified fields of entries or assets in the response

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| values | string|array | No | — | Field UID of content type |

Returns:
Type
Query

The only function with field_uid will include the data of only the specified fields for each entry and exclude the data of all other fields.

```
import Contentstack from 'contentstack'; 
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().only('title').toJSON().find();
```

The only function with an array of field_uids will include multiple fields for each entry and exclude the data of all other fields.

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().only(['title', 'description']).toJSON().find();
```

In only, we have the only with a reference parameter, where you need to enter the UID of the reference field in place of "reference_field_uid", and the second parameter to include the data of only the specified field_uid for each entry and exclude the data of all other fields.

```
import Contentstack from 'contentstack';
const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().includeReference('reference_field_uid').only('reference_field_uid','title').toJSON().find();
```

In only, we have the only with a reference parameter with an array, where you need to enter the UID of the reference field in place of "reference_field_uid", and the second parameter with an array of fields to include the data of only the specified array of field_uids for each entry and exclude the data of all other fields.

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().includeReference('reference_field_uid').only('reference_field_uid',['title', 'description']).toJSON().find();
```
