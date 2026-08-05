---
title: "create"
description: "The create method allows you to create a new management token in the stack."
url: "https://www.contentstack.com/js-management-managementtoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method allows you to create a new management token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.token | object | No | — | The details of the token, including its name, description, and scope, are specified for the token to be created |

Returns:
Type
Promise

**Example**:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const token = {
    "token":{
      "name":"Test Token",
      "description":"This is a sample management token.",
      "scope":[
          {
              "module":"content_type",
              "acl":{
                  "read":true,
                  "write":true
              }
          },
          {
              "module":"branch",
              "branches":[
                  "main"
              ],
              "acl":{
                  "read":true
              }
          },
          {
              "module":"branch_alias",
              "branch_aliases":[
                  "tst"
              ],
              "acl":{
                  "read":true
              }
          }
      ],
      "expires_on":"2024-12-10",
      "is_email_notification_enabled":true
  }
}
client.stack({ api_key: 'api_key'}).managementToken()
.create({ token })
.then((managementToken) => console.log(managementToken))
```
