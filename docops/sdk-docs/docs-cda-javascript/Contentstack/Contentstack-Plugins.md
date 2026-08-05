---
title: "Plugins"
description: ""
url: "https://www.contentstack.com/js-contentstack-plugins"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Plugins

No parameters.

When creating custom plugins, through this request, you can pass the details of your custom plugins. This facilitates their utilization in subsequent requests when retrieving details.

```
// custom class for plugin
class CrossStackPlugin {
  onRequest (stack, request) {
    // request modifications
    return request
  }
  async onResponse (stack, request, response, data) {
    // response modifications here
    return response
  }
}

const Stack = Contentstack.Stack({
  api_key,
  delivery_token,
  environment,
  plugins: [
    new CrossStackPlugin(),
    new Livepreview()
  ]
});
```
