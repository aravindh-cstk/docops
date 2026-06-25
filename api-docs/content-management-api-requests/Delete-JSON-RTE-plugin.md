---
title: "Delete JSON RTE plugin"
description: DELETE /extensions/{json_rte_plugin_uid}
url: developer-apis/content-management-api-requests/delete-json-rte-plugin
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete JSON RTE plugin

**DELETE** `/extensions/{json_rte_plugin_uid}`

The Delete JSON RTE plugin request allows you to delete a specific JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

## URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```

