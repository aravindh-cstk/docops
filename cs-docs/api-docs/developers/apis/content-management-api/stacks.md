---
title: "CMA | Stacks"
description: Fetch and manage stack settings, users, collaborators, and core Contentstack stack configuration.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/stacks
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Stacks

A [stack](/docs/developers/set-up-stack) is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project.

## Get Single Stack

### Get a single stack

**GET** `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

The Get a single stack call fetches comprehensive details of a specific stack.

**Note**: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.

#### Query Parameters

- **include_collaborators** (optional)
  Set this parameter to 'true' to include the details of the stack collaborators.
  Default: `false`
- **include_stack_variables** (optional)
  Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of time, and so on. Users can include or exclude stack variables in the response.
  Default: `false`
- **include_discrete_variables** (optional)
  Set this to 'true' to view the access token of your stack.
  Default: `false`
- **include_count** (optional)
  Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API Key of the stack that you want to retrieve.
  Default: `enter_your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_authtoken`
- **organization_uid** (optional)
  Enter the UID of your organization.
  Default: `Your_Organization_uid`

#### Sample Response

```json
{
    "stack": {
        "created_at": "2019-08-16T07:10:48.229Z",
        "updated_at": "2022-08-19T10:55:27.580Z",
        "uid": "bltf0ed554f9de444d5",
        "name": "Product Catalog - 2019",
        "description": "For CDA API calls try out section.",
        "org_uid": "blt8b9d1dcc7a9dadcc",
        "api_key": "blt02f7b45378b008ee",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "sys_blt815d4d2116f9864d",
        "user_uids": [
            "sys_blt815d4d2116f9864d",
            "bltcd82b2c6bf913241",
            "blt75f100269fb9598f",
            "blt587a89fc7883c56700a95bfe",
            "bltaaba5fbac0ff0622",
            "blt42e55757d70d5f81026a2b9f",
            "blt231cdeced1707e06",
            "blt50a327a5c7049685",
            "blt6563a9b067fc1bc9",
            "blt1e6dead9f06f1560",
            "blt3167f0a16386ed8e",
            "blt5e99c104bb6b1a30",
            "blt80e1cb45e6624b62",
            "blta3007b105b17e5d8",
            "blte75599b1e529fa3a",
            "blt3cf27864e6b61df3",
            "bltd14dd3cbb471a414",
            "bltf926860821be02df",
            "blt59fc93b3f1c8c16b",
            "blt1e0bc4e72027812d",
            "bltd50b1d8587841ba2"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "webhook_enabled": false,
            "language_fallback": false,
            "fallback_publish_contents": true,
            "branches": true
        },
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blt70c41dfd00924e9f",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt954756afc76573d1",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "global_search": true
    }
}
```




## Get All Stacks

### Get all stacks

**GET** `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account.

**Note**: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.

#### Query Parameters

- **include_collaborators** (optional)
  Set this parameter to 'true' to include the details of the stack collaborators.
  Default: `false`
- **include_stack_variables** (optional)
  Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of time, and so on. Users can include or exclude stack variables in the response.
  Default: `false`
- **include_discrete_variables** (optional)
  Set this to 'true' to view the access token of your stack.
  Default: `false`
- **include_count** (optional)
  Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account.
  Default: `false`

#### Headers

- **authtoken** (required)
  Default: `Your_Authtoken`
- **organization_uid** (optional)
  Enter the uid of your organization.
  Default: `Your_Organization_uid`

#### Sample Response

```json
{
	"stacks": [{
		"created_at": "2014-05-27T09:46:28.488Z",
		"updated_at": "2014-10-21T12:20:00.453Z",
		"uid": "blt123a123b123c",
		"name": "My First Stack",
		"description": "My new test stack",
		"org_uid": "abcdefgh1245",
		"api_key": "abcdefg1234567890",
		"master_locale": "en-us",
		"is_asset_download_public": true,
		"owner_uid": "abcdefg1234567890xyz",
		"user_uids": [
			"blt11e11111d11d1f11111a1b1f",
			"blt22dd2fd22222222e22f2aa22"
		],
		"settings": {
			"webhook_enabled": true,
			"workflow_stages": true,
			"publishing_rules": true
		},
		"master_key": "blta0b0add0e0b0000",
		"SYS_ACL": {
			"others": {
				"invite": false,
				"sub_acl": {
					"create": false,
					"read": false,
					"update": false,
					"delete": false
				}
			},
			"roles": [{
					"uid": "blt0f40fa0e3b989733",
					"name": "Developer",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				},
				{
					"uid": "blte000a000a000cff0",
					"name": "Admin",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				}
			]
		}
	}]
}
```




## Create Stack

### Create stack

**POST** `/stacks`

The Create stack call creates a new stack in your Contentstack account.

In the 'Body' section, provide the schema of the stack in JSON format.

**Note**: At any given point of time, an organization can create only one stack per minute.

#### Headers

- **authtoken** (required)
  Default: `Your_Authtoken`
- **organization_uid** (required)
  Enter the uid of your organization.
  Default: `Your_Organization_uid`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
  "stack": {
    "name": "My New Stack",
    "description": "My new test stack",
    "master_locale": "en-us"
  }
}
```

#### Sample Response

```json
{
  "notice": "Stack created successfully.",
  "stack": {
    "created_at": "2014-05-27T09:46:28.488Z",
    "updated_at": "2014-10-21T12:20:00.453Z",
    "uid": "blt123a123b123c",
    "name": "My First Stack",
    "description": "My new test stack",
     "org_uid":"abcdefgh1245",
    "api_key": "abcdefg1234567890",
    "master_locale": "en-us",
    "is_asset_download_public": true,
    "owner_uid": "abcdefg1234567890xyz",
    "user_uids": "[]",
    "collaborators": [
      {
        "uid": "abcd47a42c081522df4fc5ac57",
        "created_at": "2014-05-27T09:46:28.488Z",
        "updated_at": "2014-05-27T09:46:28.488Z",
        "email": "developer@example.com",
        "plan_id": [
          "cms_plan"
        ],
        "org_uid": [
          "pqr63a5e26545f23e63"
        ],
        "roles": [
          {}
        ]
      }
    ],
    "SYS_ACL": {
      "roles": [
        {
          "uid": "abcdefgpqr1234567890xyz",
          "sub_acl": {},
          "invite": true
        }
      ],
      "others": {
        "sub_acl": {
          "delete": false,
          "update": false,
          "read": false,
          "create": false
        },
        "invite": false
      }
    },
    "stack_variables": {
      "description": "My test stack"
    }
  }
}
```




## Update Stack

### Update stack

**PUT** `/stacks`

The Update stack call lets you update the name and description of an existing stack.

In the 'Body' section, provide the updated schema of the stack in JSON format.

**Warning:** The master locale cannot be changed once it is set while stack creation. So, you cannot use this call to change/update the master language.

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
	"stack": {
		"name": "My New Stack",
		"description": "My new test stack"
	}
}
```

#### Sample Response

```json
{
    "notice": "Stack updated successfully.",
    "stack": {
        "created_at": "2021-10-19T11:42:12.525Z",
        "updated_at": "2023-03-09T07:42:00.589Z",
        "uid": "blt0412fe849eede4d0",
        "name": "My New Stack",
        "description": "My new test stack",
        "org_uid": "bltbb29542f17bc03815",
        "api_key": "blt3c9eb5ecb1e5a954",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "blt79ec83b4f1c8c16b",
        "user_uids": [
            "blt59fc93b3f1c8c16b"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "fallback_publish_contents": true,
            "blockAuthQueryParams": false,
            "allowedCDNTokens": [
                "authtoken",
                "access_token",
                "authorization"
            ],
            "webhook_enabled": false,
            "live_preview": {},
            "language_fallback": false,
            "workflow_stages": true,
            "publishing_rules": true
        },
        "master_key": "blt050927729g83cb19",
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blte5e7df28cbc8790b",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt74a8a54546c15873",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "57f633ab3cfa547eda8e60fa46898e7646e5b97c4"
        }
    }
}
```




## Delete stack

### Delete stack

**DELETE** `/stacks`

The Delete stack call is used to delete an existing stack permanently from your Contentstack account.

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

#### Sample Response

```json
{
	"notice": "Stack deleted successfully!"
}
```




## Get all users

### Get all users of a stack

**GET** `/stacks/users`

The Get all users of a stack call fetches the list of all users of a particular stack

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Response

```json
{
	"users": [{
		"uid": "blt69fc93c3f1c8e16b",
		"created_at": "2021-10-19T11:43:47.606Z",
		"updated_at": "2023-01-23T05:53:40.818Z",
		"email": "john.doe@contentstack.com",
		"username": "john_blt9b474691",
		"first_name": "john",
		"last_name": "doe",
		"active": true,
		"metadata": {
			"idp_user": false
		},
		"settings": {
			"preferences": {
				"global": [],
				"stack": []
			}
		},
		"is_owner": true
	}]
}
```




## Update Existing User Role

### Update User Role

**POST** `/stacks/users/roles`

The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user. For example, we have an existing user with the "Developer" role, and if you execute this API request with "Content Manager" role, the user role will lose "Developer" rights and the user role be updated to just "Content Manager".

When executing the API call, under the 'Body' section, enter the user UID and UIDs of roles that you want to assign the user. This information should be in JSON format.

#### Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `Enter the API key of your stack`
- **authtoken** (required)
  Enter your authtoken
  Default: `Enter_your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"users": {
		"user_uid": ["role_uid1", "role_uid2"]
	}
}
```

#### Sample Response

```json
{
	"notice": "The roles were applied successfully.",
	"users": [{
		"uid": "user_uid",
		"roles": ["role_uid1", "role_uid2"]
	}]
}
```




## Transfer Stack Ownership

### Transfer stack ownership to other users

**POST** `/stacks/transfer_ownership`

The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the stack.

In the 'Body' section, you need to provide the email address of the user to whom you wish to transfer the ownership of the stack in JSON format.

**Additional Resource**: To transfer ownership of a stack to other users via Contentstack's UI, refer to the [Transfer Stack Ownership](../../../../cs-docs/developers/set-up-stack/transfer-stack-ownership.md) article.

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"transfer_to": "manager@example.com"
}
```

#### Sample Response

```json
{
	"notice": "An email has been sent to abc@example.com about transferring ownership of 'My New Stack'. The ownership will be transferred after the other user accepts ownership."
}
```




## Accept Stack Ownership

### Accept stack owned by other user

**GET** `/stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}`

The Accept stack owned by other user call allows a user to accept the ownership of a particular stack via an email invitation.

The email invitation includes a link (i.e., /stack/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid} ) that consists of the ownership token, the API key, and user uid.

Once the user accepts the invitation by clicking on the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack.

When executing the API call, in the 'URL Parameters' section, you need to provide the ownership token and the user uid that you received in the invitation mail.

#### URL Parameters

- **ownership_token** (required)
  Enter the ownership token received via email by another user.
  Default: `blt2add6864996aa9f2`

#### Query Parameters

- **api_key** (required)
  Enter the stack API key.
  Default: `blt9f902ab2842258eb`
- **uid** (required)
  Enter the user uid.
  Default: `Enter_your_user_uid`

#### Sample Response

```json
{
	"notice": "Ownership transferred successfully."
}
```




## Stack Settings

### Get stack settings

**GET** `/stacks/settings`

The Get stack settings call retrieves the configuration settings of an existing stack.

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

#### Sample Response

```json
{
    "stack_settings": {
        "rte": {
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style, figure, script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {}
    }
}
```


### Add stack settings

**POST** `/stacks/settings`

The Add stack settings request lets you add additional settings for your existing stack.

You can add specific settings for your stack by passing any of the following parameters in the “Request Body”:

- Following parameters can be passed within the stack_variables section:"enforce_unique_urls": true: Ensures that entry URLs are not duplicated across the stack.
- "sys_rte_allowed_tags": "figure, style, script": You can pass a combination of the three values, figure, style, and script, to this parameter (e.g., "sys_rte_allowed_tags": "figure, style, script", "sys_rte_allowed_tags": "figure", etc.):figure: Wraps images inside the “Rich Text Editor” field within the <figure> tag.
- style: Allows to use the <style> tag within the HTML code of a “Rich Text Editor” field.
- script: Allows to use the <script> tag within the HTML code of a “Rich Text Editor” field.Note: Contentstack highly recommends that you avoid using the <script> tag within the HTML code of a “Rich Text Editor” field due to its security vulnerabilities.

"sys_rte_skip_format_on_paste": "GD:font-size": Skips the font-size attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:color": Skips the color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:background-color": Skips the background-color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste": "MW:color": Skips the color attribute, and MW indicates the external vendor Microsoft Word’s prefix.

**Note**: We are currently supporting four attributes (GD:font-size, GD:color, GD:background-color, and MW:color) for this key. This is applicable for both HTML and JSON Rich Text Editors. For more information, refer to the [API Change Log](/docs/changelog/#accept-or-skip-source-color-background-color-while-copying-content-into-html-json-rtes) for this update.

To enable/disable Live Preview, pass the following schema in the Request Body:

```
"live_preview": {
      "enabled": true,
      "default-env": "blt93a********5c8de",
      "default-url": "https://preview.example.com"
    }
```

The editor normally uses the "enter" key for paragraphs and "shift+enter" for line breaks. However, by enabling "cs_only_breakline": true and "cs_breakline_on_enter": true in the "rte" parameter, pressing "enter" creates a line break, and "shift+enter" creates a new paragraph.

Here’s a sample of the Request Body:

```
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

If you exclusively set "cs_only_breakline": true within the "rte" parameter, it ensures that only a <br> tag is inserted in the "Rich Text Editor" field when the content manager presses "Enter". Conversely, when this parameter is set to false, the <br> tag is substituted with <p></p>.

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

#### Sample Response

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "rte": {
            "cs_breakline_on_enter": true,
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style,figure,script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "2d805ad8c8b6d59a91fa4d6238d1894c3f4483e3"
        },
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```


### Reset stack settings

**POST** `/stacks/settings/reset`

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "stack_settings":{}
}
```

#### Sample Response

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {},
        "rte": {}
    }
}
```




## Share Stack

### Share a stack

**POST** `/stacks/share`

The Share a stack call shares a stack with the specified user to collaborate on the stack.

In the 'Body' section, you need to provide the email ID of the user with whom you wish to share the stack along with the role uid that you wish to assign the user.

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"emails": [
		"manager@example.com"
	],
	"roles": {
		"manager@example.com": [
			"abcdefhgi1234567890"
		]
	}
}
```

#### Sample Response

```json
{
	"notice": "The invitation has been sent successfully."
}
```




## Unshare Stack

### Unshare a stack

**POST** `/stacks/unshare`

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account.

In the 'Body' section, you need to provide the email ID of the user from whom you wish to unshare the stack.

#### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"email": "manager@example.com"
}
```

#### Sample Response

```json
{
	"notice": "The stack has been successfully unshared."
}
```

