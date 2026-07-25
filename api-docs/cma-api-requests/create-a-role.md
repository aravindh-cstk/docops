---
title: "Create a role"
description: /roles
url: /create-a-role
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:11.334Z
updated_at: 2026-07-20T16:50:48.703Z
---

# Create a role

<p>The <span data-type='inlineCode'>Create a role</span> request creates a new role in a stack.</p>
<p>In the 'Body' section, mention the role name, description, users, additional roles, rules (includes the actions that can be performed on entries, fields, and/or assets), and permissions (which include the details of the content types, taxonomies, environments, and languages that are accessible).
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.roles.management:write</span> scope.<span style="font-size: 10.5pt;"></span></p>
</p>
<p class="note"><strong>Note</strong>: You can also restrict access to the <a href="/docs/headless-cms/set-the-master-language">master language entry</a> while defining permissions for a new role. Refer to our <a href="/docs/developers/multilingual-content/manage-language-permissions">Manage Language Permissions</a> documentation for more details.</p>
<p>To add customized exceptions for all or specific languages, add an additional locale module in the request body. Under this module, pass the following parameters:</p>
<ul>
  <li><span data-type='inlineCode'>locales</span>: Specify the unique IDs of the languages for which you want to add exception rules</li>
  <li><span data-type='inlineCode'>sub_acl</span>: Add this under <span data-type='inlineCode'>acl</span>. Here, specify the permissions you want to restrict for the languages specified in the above parameter, e.g., <span data-type='inlineCode'>"create":true</span></li>
  <li><span data-type='inlineCode'>restrict: true</span>: Set this parameter to <span data-type='inlineCode'>true</span> to enable exception rules for the specified languages</li>
</ul>
<p>Here’s what your request body should look like:</p>
<pre>{
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
</pre>
<p class="note"><strong>Note</strong>: <a href="/docs/developers/invite-users-and-assign-roles/create-a-role#exceptions-on-languages">Language-related exceptions</a> can be added only for custom roles and the developer and content manager system roles.</p>
<p>When creating a user role, you need to specify the branch and alias scope through the following schema in the request body:</p>
<pre>{
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
}</pre>
<p>To add taxonomy specific permissions, follow the following schema in your request body:</p>
<pre>    {
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
    }</pre>

**API Endpoint**: `/roles`

**Method**: `POST`

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **api_key** (required)
  <p>Enter the API key of your stack</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

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

## Response

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

