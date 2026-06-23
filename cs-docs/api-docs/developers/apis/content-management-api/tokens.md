---
title: "CMA | Tokens"
description: Create, update, fetch, and manage delivery, management, and other stack tokens used for Contentstack API access.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/tokens
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Tokens

Contentstack provides different [types of tokens](/docs/developers/create-tokens/types-of-tokens/) to authorize API requests. You can use [Delivery Tokens](/docs/developers/create-tokens/about-delivery-tokens) to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment. To authenticate Content Management API (CMA) requests over your stack content, you can use [Management Tokens](/docs/developers/create-tokens/about-management-tokens).

Delivery tokens provide read-only access to the associated environments, while management tokens provide read-write access to the content of your stack. Use these tokens along with the stack API key to make authorized API requests.

## Delivery Token Collection

### Get all delivery tokens

**GET** `/stacks/delivery_tokens`

The Get all delivery tokens request returns the details of all the delivery tokens created in a stack.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

#### Sample Response

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


### Get a single delivery token

**GET** `/stacks/delivery_tokens/{token_uid}`

The Get a single delivery token request returns the details of a particular delivery token created in a stack.

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to retrieve.
  Default: `blt22222ecd22a2ccd222`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

#### Sample Response

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


### Create delivery token

**POST** `/stacks/delivery_tokens`

The Create delivery token request is used to create a delivery token in the stack.

In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and the environment of the delivery token.

To create a delivery token with associated preview token, pass the create_with_preview_token query parameter as true.

**Note**: It is highly recommended to set only one publishing environment per delivery token.

You need to specify the branch and alias scope for your delivery token through the following schema in the request body:

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

#### Query Parameters

- **create_with_preview_token** (optional)
  Set this to true to create a preview token.
  Default: `true`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"token": {
		"name": "Sample Delivery Token",
		"description": "This is a sample delivery token.",
		"scope": [{
			"module": "environment",
			"environments": ["production"],
			"acl": {
				"read": true
			}
		}]
	}
}
```

#### Sample Response

```json
{
    "notice": "Delivery Token created successfully.",
    "token": {
        "name": "Sample Delivery Token",
        "description": "This is a sample delivery token.",
        "scope": [
            {
                "environments": [
                    {
                        "urls": [
                            {
                                "url": "",
                                "locale": "en-us"
                            }
                        ],
                        "name": "production",
                        "_version": 2,
                        "app_user_object_uid": "system",
                        "uid": "bltb3c6cea2fefce1a6",
                        "created_by": "blt0f1b34d48616093a",
                        "updated_by": "blt0f1b34d48616093a",
                        "created_at": "2023-06-26T12:15:12.745Z",
                        "updated_at": "2023-06-26T12:15:12.745Z",
                        "ACL": [],
                        "tags": []
                    }
                ],
                "module": "environment",
                "acl": {
                    "read": true
                },
                "_metadata": {
                    "uid": "cse639d7ef7edf687b"
                }
            }
        ],
        "preview_token": "cs76f46e9817405ec92b1d2dc1",
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:45:40.826Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery"
    }
}
```


### Update delivery token

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

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to update.
  Default: `blt12312ecd31a2ccd123`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

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

#### Sample Response

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


### Delete delivery token

**DELETE** `/stacks/delivery_tokens/{token_uid}?force={boolean_value}`

The Delete delivery token request deletes a specific delivery token.

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to delete.
  Default: `cs22222ecd22a2ccd222`

#### Query Parameters

- **force** (optional)
  Enter ‘true’ to force delete a delivery token.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

#### Sample Response

```json
{
	"notice:": "Delivery Token deleted successfully."
}
```




## Preview Token Collection

A [Preview Token](/docs/developers/create-tokens/about-delivery-tokens#about-preview-tokens) provides you access to retrieve details of your website within the live preview panel.

**Note**: The Preview tokens are exclusively compatible with the new rest-preview.contentstack.com endpoint.

### Create preview token

**POST** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Create preview token request creates a Preview token for a particular Delivery token in a stack of your organization.

#### URL Parameters

- **delivery_token_uid** (required)
  Enter the UID of the delivery token for which you want to delete the preview token.
  Default: `your_delivery_token_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Response

```json
{
    "notice": "Preview token created successfully.",
    "token": {
        "name": "Sample Delivery Token",
        "description": "This is a sample delivery token.",
        "scope": [
            {
                "environments": [
                    {
                        "urls": [
                            {
                                "url": "",
                                "locale": "en-us"
                            }
                        ],
                        "name": "production",
                        "_version": 2,
                        "app_user_object_uid": "system",
                        "uid": "bltb3c6cea2fefce1a6",
                        "created_by": "blt0f1b34d48616093a",
                        "updated_by": "blt0f1b34d48616093a",
                        "created_at": "2023-06-26T12:15:12.745Z",
                        "updated_at": "2023-06-26T12:15:12.745Z",
                        "ACL": [],
                        "tags": []
                    }
                ],
                "module": "environment",
                "acl": {
                    "read": true
                },
                "_metadata": {
                    "uid": "cs965b4bfbe0afec6b"
                }
            }
        ],
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:47:53.587Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery",
        "preview_token": "cs0d1431d6a4f8fe3d10b1861c"
    }
}
```


### Delete preview token

**DELETE** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Delete preview token request deletes a preview token associated with a specific delivery token.

#### URL Parameters

- **delivery_token_uid** (required)
  Enter the UID of the delivery token for which you want to delete the preview token.
  Default: `your_delivery_token_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "notice": "Preview token deleted successfully."
}
```




## Management Token Collection

### Get all management tokens

**GET** `/stacks/management_tokens`

The Get all management tokens request returns the details of all the management tokens generated in a stack and not the actual management tokens.

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "tokens":[
        {
            "name":"Test Token",
            "expires_on":"2020-12-10",
            "is_email_notification_enabled":true,
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
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ]
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ]
                }
            ],
            "uid":"bltds822f23g4d28hg2",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:32:12.239Z",
            "updated_at":"2020-11-12T09:32:12.239Z",
            "description":"This is a sample management token."
        },
        {
            "name":"Sample Token",
            "expires_on":"2020-11-27",
            "is_email_notification_enabled":true,
            "scope":[
                {
                    "module":"$all",
                    "acl":{
                        "read":true,
                        "write":true
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
                    ]
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ]
                }
            ],
            "uid":"bltcde433gf0967fdac",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:24:57.191Z",
            "updated_at":"2020-11-12T09:24:57.191Z",
            "description":"This is a sample token."
        }
    ]
}
```


### Get a single management token

**GET** `/stacks/management_tokens/{token_uid}`

The Get a single management token request returns the details of a specific management token generated in a stack and not the actual management token.

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token of which you want to retrieve the details of.
  Default: `blt4c10d48233884473`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "token":{
        "name":"Test Token",
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true,
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
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy"
                ]
            }
        ],
        "uid":"bltda613c24d4e12c28",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:32:12.239Z",
        "updated_at":"2020-11-12T09:32:12.239Z",
        "description":"This is a sample management token."
    }
}
```


### Create management token

**POST** `/stacks/management_tokens`

The Create management token request is used to create a management token in a stack. This token provides you with read-write access to the content of your stack.

**Note**: A management token can only be generated by the owner or admin of a stack.

In the Request Body, you need to pass the details of the management token in JSON format. The details include the name, description, the stack-level permissions you need to assign to the token, and the expiry date of the token in UTC time (if required). Additionally, you can also choose to get notified (via email) **seven** days before the token expires.

You need to specify
the branch and alias scope for your management token through the following schema in the request body:

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

**Note**: You can generate a maximum of 10 management tokens for a specific stack within your organization.

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
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
        ],
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true
    }
}
```

#### Sample Response

```json
{
    "notice":"Management Token created successfully.",
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
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy",
                    "release"
                ]
            }
        ],
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true,
        "uid":"blt3b10e39122774473",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:04:49.561Z",
        "updated_at":"2020-11-12T09:04:49.561Z",
        "token":"cs808c053abc70fe2ccda123b2"
    }
}
```


### Update management token

**PUT** `/stacks/management_tokens/{token_uid}`

The Update management token request lets you update the details of a management token. You can change the name and description of the token; update the stack-level permissions assigned to the token; and change the expiry date of the token (if set).

In the Request Body, you need to pass the updated details of the management token in JSON format.

To specify the updated branch and alias scope for your management token, use the following schema in the request body:

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

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token that you want to update.
  Default: `blt3c33b3833884482`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
                "acl":{
                    "read":true,
                    "write":true
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
        ],
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true
    }
}
```

#### Sample Response

```json
{
    "notice":"Management Token updated successfully.",
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
                "acl":{
                    "read":true,
                    "write":true
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
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy"
                ]
            }
        ],
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true,
        "uid":"blt4d23e29233884473",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:04:49.561Z",
        "updated_at":"2020-11-12T09:21:02.244Z"
    }
}
```


### Delete management token

**DELETE** `/stacks/management_tokens/{token_uid}`

The Delete management token request deletes a specific management token.

#### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token that you want to delete.
  Default: `blt3c33b3833884482`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "notice": "Management Token deleted successfully."
}
```

