---
title: "Plugins"
description: "When creating custom plugins, through this request, you can pass the details of your custom plugins. This facilitates their utilization in subsequent requests when retrieving details. To initializing a stack with plugins, refer to the code snippet below: // custom class for plugin class CrossStackPlugin { onRequest (request) { // add request modifications return request } async onResponse (request, response, data) { // add response modifications here return response } } const Stack = Contentstack.stack({ api\\_key, delivery\\_token, environment, plugins: \\[ new CrossStackPlugin(), \\] });"
url: "https://www.contentstack.com/typescript-delivery-stack-plugins"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Plugins

When creating custom plugins, through this request, you can pass the details of your custom plugins. This facilitates their utilization in subsequent requests when retrieving details.

To initializing a stack with plugins, refer to the code snippet below:

```
// custom class for plugin
class CrossStackPlugin {
  onRequest (request) {
    // add request modifications

    return request
  }
  async onResponse (request, response, data) {
    // add response modifications here

    return response
  }
}
const Stack = Contentstack.stack({
  api_key,
  delivery_token,
  environment,
  plugins: [
    new CrossStackPlugin(),
  ]
});
```

No parameters.
