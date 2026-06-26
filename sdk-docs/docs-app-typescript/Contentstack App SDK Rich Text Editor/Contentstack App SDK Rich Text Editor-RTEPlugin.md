---
title: "RTEPlugin"
description: "The `RTEPlugin` function creates custom plugins for the Rich Text Editor. rtePlugin(id, config) The `rtePlugin` method registers a plugin with the RTE system. import { rtePlugin } from '@contentstack/app-sdk'; rtePlugin('my-plugin', (rte) => { return { title: 'My Plugin', icon: '', render: (props) => { // Plugin implementation } }; });"
url: "https://www.contentstack.com/appsdk--rte-rteplugin"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## RTEPlugin

The `RTEPlugin` function creates custom plugins for the Rich Text Editor.

#### rtePlugin(id, config)

The `rtePlugin` method registers a plugin with the RTE system.

```
import { rtePlugin } from '@contentstack/app-sdk';

rtePlugin('my-plugin', (rte) => {
  return {
    title: 'My Plugin',
    icon: '',
    render: (props) => {
      // Plugin implementation
    }
  };
});
```
