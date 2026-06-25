---
title: "Get a single delivery token"
description: GET /stacks/delivery_tokens/{token_uid}
url: developer-apis/content-management-api-requests/get-a-single-delivery-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-25
---

# Get a single delivery token

**GET** `/stacks/delivery_tokens/{token_uid}`

The Get a single delivery token request returns the details of a particular delivery token created in a stack.

## URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to retrieve.
  Default: `blt22222ecd22a2ccd222`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

## Sample Response

```json
{
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
                        "uid":"cs766df728fb56e697"
                    }
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy",
                        "release"
                    ],
                    "_metadata":{
                        "uid":"cs27a40bf57db84414"
                    }
                }
            ],
            "uid":"bltdce123123d321f3",
            "created_by":"blt7d123cc321ee12e",
            "updated_by":"blt7d123cc321ee12e",
            "created_at":"2019-07-19T07:41:05.070Z",
            "updated_at":"2019-07-19T07:41:05.070Z",
            "description":"",
            "token":"csf72faf222222e222ddd2222b",
            "type":"delivery"
        }
    ]
}
```

