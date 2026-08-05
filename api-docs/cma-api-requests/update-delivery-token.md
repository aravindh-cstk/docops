---
title: "Update delivery token"
description: /stacks/delivery_tokens/{token_uid}
url: /update-delivery-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.443Z
updated_at: 2023-01-05T14:09:10.443Z
---

# Update delivery token

<p>The <span data-type="inlineCode">Update delivery token</span>&nbsp;request lets you update the details of a delivery token.</p>
<p>In the Request Body, you need to pass the updated details of the delivery token in JSON format. The details include the updated name, description, and/or the&nbsp;environment&nbsp;of the delivery token.</p>
<p>You need to specify
the branch and alias scope for your delivery token&nbsp;through the following schema in the request body:</p>
<pre>{
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
}</pre>

**API Endpoint**: `/stacks/delivery_tokens/{token_uid}`

**Method**: `PUT`

## URL Parameters

- **token_uid** (required)
  <p>Enter the UID of the token that you want to update.
</p>

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

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

## Response

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

