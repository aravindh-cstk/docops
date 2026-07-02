---
title: "create"
description: "The Create a extension call creates a new extension in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-extension-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create a extension call creates a new extension in a particular stack of your Contentstack account.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const extension = {
 tags: [
   'tag1',
   'tag2'
 ],
 data_type: 'text',
 title: 'Old Extension',
 src: "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
 multiple: false,
 config: {},
 type: 'field'
}

client.stack({ api_key: 'api_key'}).extension().create({ extension })
.then((extension) => console.log(extension))
```
