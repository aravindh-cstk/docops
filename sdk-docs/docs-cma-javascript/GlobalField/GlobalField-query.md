---
title: "query"
description: "The Query on GlobalField will allow to fetch details of all or specific GlobalField"
url: "https://www.contentstack.com/js-management-globalfield-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on GlobalField will allow to fetch details of all or specific GlobalField

No parameters.

Returns:
Type
Query

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).globalField().query({ query: { name: 'Global Field Name' } }).find()
.then((globalField) => console.log(globalField))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).globalField({ api_version: '3.2'}).query({ query: { name: 'Global Field Name' } }).find()
.then((globalField) => console.log(globalField))
```
