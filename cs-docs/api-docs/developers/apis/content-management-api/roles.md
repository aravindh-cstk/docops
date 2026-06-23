---
title: "CMA | Roles"
description: Manage Contentstack roles, permissions, and access controls for users and teams.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/roles
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Roles

A role is a collection of permissions that will be applicable to all the users who are assigned with that role. Read more about [Roles](/docs/developers/invite-users-and-assign-roles/).

## Role Collection

### Get all roles

**GET** `/roles?include_permissions={boolean_value}&include_rules={boolean_value}`

The Get all roles request returns comprehensive information about all roles created in a stack.

You can add queries to extend the functionality of this API request. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section of the Content Delivery API doc.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:read scope.

#### Query Parameters

- **include_permissions** (optional)
  Set this parameter to 'true' to include the details of the permissions assigned to a particular role.
  Default: `false`
- **include_rules** (optional)
  Set this to ‘true’ to include the details of the rules assigned to a role.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
  "roles":[
    {
      "name":"Developer",
      "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
      "uid":"bltf177eec8730751a3",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blta7eaf6883dd73a0b",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-16T12:29:24.192Z",
      "roles":[
        
      ],
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    },
    {
      "name":"Content Manager",
      "description":null,
      "uid":"blt6c7ffc6b4906acf5",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blt1fd0057b90905592",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-23T15:29:44.813Z",
      "roles":[
        
      ],
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    },
    {
      "name":"Admin",
      "description":"Admin can perform all actions and manage all settings of the stack, except the ability to delete or transfer ownership of the stack.",
      "uid":"bltc5412bb640c8cce1",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blta7eaf6883dd73a0b",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-16T11:54:15.300Z",
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    }
  ]
}
```


### Get a single role

**GET** `/roles/{role_uid}?include_permissions={include_permissions}&include_rules={include_rules}`

The Get a single role request returns comprehensive information on a specific role.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:read scope.

#### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role of which you want to retrieve the details.
  Default: `blt0123123b123733`

#### Query Parameters

- **include_permissions** (optional)
  Set this parameter to 'true' to include the details of the permissions assigned to a particular role.
  Default: `true`
- **include_rules** (optional)
  Set this to ‘true’ to include the details of the rules assigned to a particular role.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
  "role":{
    "name":"Developer",
    "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
    "uid":"bltf177eec8730751a3",
    "created_by":"blta7eaf6883dd73a0b",
    "updated_by":"blta7eaf6883dd73a0b",
    "created_at":"2021-09-16T11:54:15.300Z",
    "updated_at":"2021-09-16T12:29:24.192Z",
    "roles":[
      
    ],
    "users":[
      "blt1fd0057b90905592"
    ],
    "owner":"john.doe@contentstack.com",
    "stack":{
      "created_at":"2021-09-16T11:54:14.172Z",
      "updated_at":"2021-09-16T12:29:24.179Z",
      "uid":"blt48b5e7f7b2f4b962",
      "name":"My Site",
      "description":"My site related content.",
      "org_uid":"blteac54a27425b3b0e",
      "api_key":"blt29ec365eaa0c8d67",
      "master_locale":"en-us",
      "is_asset_download_public":true,
      "owner_uid":"blta7eaf6883dd73a0b",
      "user_uids":[
        "blta7eaf6883dd73a0b",
        "blt1fd0057b90905592"
      ],
      "settings":{
        "version":"2019-04-30",
        "rte_version":3,
        "blockAuthQueryParams":true,
        "allowedCDNTokens":[
          "access_token"
        ],
        "branches":true,
        "webhook_enabled":true,
        "stack_variables":{
          
        },
        "live_preview":{
          
        },
        "discrete_variables":{
          "cms":true,
          "_version":3,
          "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
        },
        "language_fallback":false,
        "workflow_stages":true,
        "publishing_rules":true
      },
      "master_key":"bltb0dad0b0b7033f78"
    },
    "SYS_ACL":{
      
    }
  }
}
```


### Create a role

**POST** `/roles`

The Create a role request creates a new role in a stack.

In the 'Body' section, mention the role name, description, users, additional roles, rules (includes the actions that can be performed on entries, fields, and/or assets), and permissions (which include the details of the content types, taxonomies, environments, and languages that are accessible).
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

**Note**: You can also restrict access to the [master language entry](/docs/developers/multilingual-content/set-the-master-language) while defining permissions for a new role. Refer to our [Manage Language Permissions](/docs/developers/multilingual-content/manage-language-permissions) documentation for more details.

To add customized exceptions for all or specific languages, add an additional locale module in the request body. Under this module, pass the following parameters:

- locales: Specify the unique IDs of the languages for which you want to add exception rules
- sub_acl: Add this under acl. Here, specify the permissions you want to restrict for the languages specified in the above parameter, e.g., "create":true
- restrict: true: Set this parameter to true to enable exception rules for the specified languages

Here’s what your request body should look like:

```
{
    "module":"locale",
    "locales":[
        "blt**************e8"
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

When creating a user role, you need to specify the branch and alias scope through the following schema in the request body:

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
      "terms": ["regions.north_america"],
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

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_key** (required)
  Enter the API key of your stack
  Default: `your_api_key`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "role":{
  "name": "Regional Custom Role",
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
      "terms": ["regions.north_america"],
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

#### Sample Response

```json
{
    "notice": "The role created successfully.",
    "role": {
        "name": "Regional Custom Role",
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
                    "regions.north_america"
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
        "updated_at": "2024-05-29T09:49:16.952Z"
    }
}
```


### Update role

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

#### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role of which you want to update the details.
  Default: `your_role_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_key** (required)
  Enter the API key of your stack
  Default: `your_api_key`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

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

#### Sample Response

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


### Delete role

**DELETE** `/roles/{role_uid}`

The Delete role call deletes an existing role from your stack.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

#### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role that you want to delete.
  Default: `bltc7aa14ea1959b252`

#### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
  "notice": "The role deleted successfully."
}
```

