---
title: "upload"
description: "The Upload is used to upload a new custom widget, custom field, dashboard Widget to a stack."
url: "https://www.contentstack.com/js-management-extension-upload"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## upload

The Upload is used to upload a new custom widget, custom field, dashboard Widget to a stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const extension = {
 upload: 'path/to/file',
 title: 'Title',
 tags: [
   'tag1',
   'tag2'
 ],
 data_type: 'text',
 title: 'Old Extension',
 multiple: false,
 config: {},
 type: 'Type of extenstion you want to create widget/dashboard/field'
}

client.stack({ api_key: 'api_key'}).extension().upload(extension)
.then((extension) => console.log(extension))
```
