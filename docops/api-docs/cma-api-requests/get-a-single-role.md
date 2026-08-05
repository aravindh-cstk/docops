---
title: "Get a single role"
description: /roles/{role_uid}?include_permissions={include_permissions}&include_rules={include_rules}
url: /get-a-single-role
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:11.276Z
updated_at: 2024-02-28T07:12:02.532Z
---

# Get a single role

<p>The <span data-type='inlineCode'>Get a single role</span> request&nbsp;returns comprehensive information on a specific role.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.roles.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/roles/{role_uid}?include_permissions={include_permissions}&include_rules={include_rules}`

**Method**: `GET`

## URL Parameters

- **role_uid** (required)
  <p>Enter the unique ID of the role of which you want to retrieve the details.</p>

## Query Parameters

- **include_permissions** (optional)
  <p>Set this parameter to 'true' to include the details of the permissions assigned to a particular role.</p>
- **include_rules** (optional)
  <p>Set this to ‘true’ to include the details of the rules assigned to a particular role.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

