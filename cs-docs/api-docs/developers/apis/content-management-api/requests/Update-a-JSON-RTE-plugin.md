---
title: "Update a JSON RTE plugin"
description: PUT /extensions/{json_rte_plugin_uid}
url: developers/apis/content-management-api/requests/update-a-json-rte-plugin
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Update a JSON RTE plugin

**PUT** `/extensions/{json_rte_plugin_uid}`

The Update a JSON RTE plugin request allows you to update the details of an existing JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link (or the updated external source code), set if the field is to take multiple values or not, configuration details, and the extension type.

## URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Updated Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

## Sample Response

```json
{
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt23982036789e969e",
        "created_at": "2021-12-06T04:01:10.626Z",
        "updated_at": "2021-12-06T04:17:31.643Z",
        "created_by": "blt3cf27864e6b61df3",
        "updated_by": "blt3cf27864e6b61df3",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 2,
        "title": "Updated Sample JSON RTE Plugin",
        "config": {},
        "type": "rte_plugin",
        "src": "URL of the JSON RTE plugin source code"
    }
}
```

