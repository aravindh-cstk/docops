---
title: "Get all delivery tokens"
description: /stacks/delivery_tokens
url: /get-all-delivery-tokens
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.299Z
updated_at: 2023-01-05T14:09:14.299Z
---

# Get all delivery tokens

<p>The <span data-type="inlineCode">Get all delivery tokens</span> request returns the details of all the delivery tokens created in a stack.
</p>

**API Endpoint**: `/stacks/delivery_tokens`

**Method**: `GET`

## Headers

- **api_key** (required)
- **authtoken** (required)

## Response

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

