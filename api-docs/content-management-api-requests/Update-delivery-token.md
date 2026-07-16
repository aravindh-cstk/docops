---
title: "Update delivery token"
description: PUT /stacks/delivery_tokens/{token_uid}
url: developer-apis/content-management-api-requests/update-delivery-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Update delivery token

**PUT** `/stacks/delivery_tokens/{token_uid}`

The Update delivery token request lets you update the details of a delivery token.

In the Request Body, you need to pass the updated details of the delivery token in JSON format. The details include the updated name, description, and/or the environment of the delivery token.

You need to specify
the branch and alias scope for your delivery token through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

## URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to update.
  Default: `blt12312ecd31a2ccd123`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
    "token":{
        "name":"Test",
        "description":"This is a updated token.",
        "scope":[
            {
                "module":"environment",
                "environments":[
                    "production"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch",
                "branches":[
                    "main",
                    "development"
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
        ]
    }
}
```

## Sample Response

```json
{
    "notice:":"Delivery token updated successfully",
    "tokens":[
        {
            "name":"Test",
            "scope":[
                {
                    "environments":[
                        {
                            "deploy_content":false,
                            "servers":[
                                
                            ],
                            "urls":[
                                {
                                    "url":"http://www.sample.com",
                                    "locale":"en-us"
                                }
                            ],
                            "name":"production",
                            "app_user_object_uid":"system",
                            "uid":"bltc123123ab6c32126",
                            "created_by":"blt7d123cc321ee12e",
                            "updated_by":"blt7d123cc321ee12e",
                            "created_at":"2019-07-15T07:26:10.915Z",
                            "updated_at":"2019-07-15T07:26:10.915Z",
                            "ACL":[
                                
                            ],
                            "_version":1,
                            "tags":[
                                
                            ]
                        }
                    ],
                    "module":"environment",
                    "acl":{
                        "read":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ],
                    "_metadata":{
                        "uid":"csee4be95096e55c10"
                    }
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ],
                    "_metadata":{
                        "uid":"cs930edafb5eaf80e7"
                    }
                }
            ],
            "uid":"bltdce123123d321f3",
            "created_by":"blt7d123cc321ee12e",
            "updated_by":"blt7d123cc321ee12e",
            "created_at":"2019-07-19T07:41:05.070Z",
            "updated_at":"2019-07-19T07:41:05.070Z",
            "description":"This is a updated token.",
            "token":"csf72faf222222e222ddd2222b",
            "type":"delivery"
        }
    ]
}
```

