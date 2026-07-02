---
title: "addSettings"
description: "The Add stack settings call lets you add settings for an existing stack."
url: "https://www.contentstack.com/js-management-stack-addsettings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addSettings

The Add stack settings call lets you add settings for an existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param | object | Yes | — | Object for adding to the stack settings |

Returns:
Type
Promise

**Example 1:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).addSettings({ key: 'value' })
.then((settings) => console.log(settings))
```

**Example 2:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const variables = {
  stack_variables: {
    enforce_unique_urls: true,
    sys_rte_allowed_tags: "style,figure,script",
    sys_rte_skip_format_on_paste: "GD:font-size"
  },
  rte: {
    cs_breakline_on_enter: true,
    cs_only_breakline: true
  },
  live_preview: {
    enabled: true,
    "default-env": "blt123123123123",
    "default-url": "https://preview.example.com"
  }
};
client.stack({ api_key: 'api_key'}).addSettings(variables)
.then((settings) => console.log(settings)
```
