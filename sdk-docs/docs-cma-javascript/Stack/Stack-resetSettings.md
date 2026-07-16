---
title: "resetSettings"
description: "The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack."
url: "https://www.contentstack.com/js-management-stack-resetsettings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## resetSettings

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).resetSettings()
.then((settings) => console.log(settings))
```
