---
title: "includeReference"
description: "Fetches the entire content of referenced entry."
url: "https://www.contentstack.com/js-entry-include-reference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReference

Fetches the entire content of referenced entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | string|array | No | — | Field UID of content type |

Returns:
Type
Entry

**Include Reference with reference_field_uids as array:**

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeReference(['reference_field_uid','other_reference_field_uid']).toJSON().fetch();
```

**Include Reference with reference_field_uids and its children reference**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeReference(['reference_field_uid', 'reference_field_uid.child_reference_field_uid']).toJSON().fetch();
```

**Include Reference with reference_field_uid:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeReference('reference_field_uid').toJSON().fetch();
```
