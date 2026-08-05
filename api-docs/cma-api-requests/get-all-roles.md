---
title: "Get all roles"
description: /roles?include_permissions={boolean_value}&include_rules={boolean_value}
url: /get-all-roles
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:06.523Z
updated_at: 2024-02-28T07:10:32.164Z
---

# Get all roles

<p>The Get all roles request returns comprehensive information about all roles created in a stack.</p><p>You can add queries to extend the functionality of this API request. Under the <span data-type='inlineCode'>URL Parameters</span> section, insert a parameter named <span data-type='inlineCode'>query</span> and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries">Queries</a>&nbsp;section of the Content Delivery API doc.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.roles.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/roles?include_permissions={boolean_value}&include_rules={boolean_value}`

**Method**: `GET`

## Query Parameters

- **include_permissions** (optional)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Set this parameter to 'true' to include the details of the permissions assigned to a particular role.</span></p>
- **include_rules** (optional)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Set this to ‘true’ to include the details of the rules assigned to a role.</span></p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

