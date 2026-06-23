---
title: "Update role"
description: PUT /roles/{role_uid}
url: developers/apis/content-management-api/requests/update-role
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-10
---

# Update role

**PUT** `/roles/{role_uid}`

The Update role request lets you modify an existing role of your stack. However, the pre-existing system roles cannot be modified.

In the 'Body' section, include the updated details of the role which include name, description, users, additional roles, rules (includes the actions that can be performed on entries, fields, and/or assets), and permissions (which include the details of the content types, taxonomies, environments, and languages that are accessible).
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

**Note**: You can also restrict access to the [master language](/docs/developers/multilingual-content/set-the-master-language/) entry while defining permissions for a new role.

To add customized exceptions for all or specific languages, add an additional locale module in the request body. Under this module, pass the following parameters:

- locales: Specify the unique IDs of the languages for which you want to add exception rules
- sub_acl: Add this under acl. Here, specify the permissions you want to restrict for the languages specified in the above parameter, e.g., "create":true
- restrict: true: Set this parameter to true to enable exception rules for the specified languages

Here’s what your request body should look like:

```
{
    "module":"locale",
    "locales":[
        "blt008a444c98ab47e8"
    ],
    "acl":{
        "read":true,
        "sub_acl":{
            "read":false,
            "create":false,
            "update":true,
            "delete":false
        }
    },
    "restrict":true
}
```

**Note**: [Language-related exceptions](/docs/developers/invite-users-and-assign-roles/create-a-role#exceptions-on-languages) can be added only for custom roles and the developer and content manager system roles.

When updating a user role, you need to specify the branch and alias scope through the following schema in the request body:

```
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
        "deploy"
    ],
    "acl":{
        "read":true
    }
}
```

To add taxonomy specific permissions, follow the following schema in your request body:

```
{
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america", "regions.south_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
```

## URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role of which you want to update the details.
  Default: `your_role_uid`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_key** (required)
  Enter the API key of your stack
  Default: `your_api_key`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
  "role":{
  "name": "Updated Regional Custom Role",
  "description": "",
  "rules": [
    {
      "module": "branch",
      "branches": [
        "main"
      ],
      "acl": {
        "read": true
      }
    },
    {
      "module": "environment",
      "environments": ["blt**************ad", "blt**************b4"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "locale",
      "locales": ["blt**************46", "blt**************88"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america", "regions.south_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    },
    {
      "module": "content_type",
      "content_types": ["marketing_blogs"],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
  ],
  "users": [],
  "uid": "blt**************09",
  "org_uid": "blt**************c6",
  "api_key": "blt**************af"
}
}
```

## Sample Response

```json
{
    "notice": "The role updated successfully.",
    "role": {
        "name": "Updated Regional Custom Role",
        "description": "",
        "rules": [
            {
                "module": "branch",
                "branches": [
                    "main"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "environment",
                "environments": [
                    "blt**************ad",
                    "blt**************b4"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "locale",
                "locales": [
                    "blt**************46",
                    "blt**************88"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "taxonomy",
                "taxonomies": [
                    "regions"
                ],
                "terms": [
                    "regions.north_america",
                    "regions.south_america"
                ],
                "content_types": [
                    {
                        "uid": "$all",
                        "acl": {
                            "read": true,
                            "sub_acl": {
                                "read": true,
                                "create": true,
                                "update": true,
                                "delete": true,
                                "publish": true
                            }
                        }
                    }
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            },
            {
                "module": "content_type",
                "content_types": [
                    "marketing_blogs"
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            }
        ],
        "users": [],
        "uid": "blt**************c3",
        "org_uid": "blt**************c6",
        "api_key": "blt**************af",
        "created_by": "blt**************96",
        "updated_by": "blt**************96",
        "created_at": "2024-05-29T09:49:16.952Z",
        "updated_at": "2024-05-29T09:51:40.141Z"
    }
}
```

