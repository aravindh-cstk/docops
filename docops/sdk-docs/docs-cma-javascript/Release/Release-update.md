---
title: "update"
description: "The Update Release call lets you update the name and description of an existing Release."
url: "https://www.contentstack.com/js-management-release-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update Release call lets you update the name and description of an existing Release.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const release = {
    name: "Release Name",
    description: "2018-12-12",
    locked: false,
    archived: false
}

var release = client.stack({ api_key: 'api_key'}).release('release_uid')
Object.assign(release, cloneDeep(release))

release.update()
.then((release) => console.log(release))
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid').fetch()
.then((release) => {
 release.title = 'My New release'
 release.description = 'Release description'
 return release.update()
})
.then((release) => console.log(release))
```
