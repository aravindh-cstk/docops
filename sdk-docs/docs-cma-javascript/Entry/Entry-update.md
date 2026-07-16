---
title: "update"
description: "The update an entry call updates an entry of a selected content type."
url: "https://www.contentstack.com/js-management-entry-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update an entry call updates an entry of a selected content type.

No parameters.

Returns:
Type
Promise

Here's how you can update an entry:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.fetch()
.then((entry) => {
 entry.title = 'My New Entry'
 entry.description = 'Entry description'
 return entry.update()
})
.then((entry) => console.log(entry))
```

Here's how you can update an entry in a specific locale:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.fetch()
.then((entry) => {
 entry.title = 'My New Entry'
 entry.description = 'Entry description'
 return entry.update({ locale: 'en-at' })
})
.then((entry) => console.log(entry))
```

Here's how you can update an entry with multiple assets:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.fetch()
.then((entry) => {
 entry.title = 'My New Entry'
 entry.file = entry.file.uid // for single asset pass asset uid to entry asset field value
 entry.multiple_file = ['asset_uid_1', 'asset_uid_2'] // for multiple asset pass array of asset uid to entry asset field values
 return entry.update({ locale: 'en-at' })
})
.then((entry) => console.log(entry))
```

Here's how you can update an entry with referenced entries:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.fetch()
.then((entry) => {
 entry.title = 'My New Entry'
 entry.reference = entry.reference.uid // for single reference pass reference uid to entry reference field value
 entry.multiple_reference = ['reference_uid_1', 'reference_uid_2'] // for multiple reference pass array of reference uid to entry reference field values
 entry.multiple_content_type_reference = [{_content_type_uid: 'content_type_uid_1', uid: 'reference_uid_1'},
{_content_type_uid: 'content_type_uid_2', uid: 'reference_uid_2'}] // for multiple reference pass array of reference uid to entry reference field values
 return entry.update({ locale: 'en-at' })
})
.then((entry) => console.log(entry))
```
