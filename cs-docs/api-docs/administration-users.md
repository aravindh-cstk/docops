---
title: "Administration | Users"
description: Manage administration users, invitations, roles, and organization access across Contentstack.
url: https://www.contentstack.com/docs/administration-users
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Administration | Users

All accounts registered with Contentstack are known as [Users](/docs/developers/invite-users-and-assign-roles/about-stack-users). A [stack](/docs/developers/set-up-stack/about-stack) can have many users with varying permissions and roles. 

**Note:**Before executing any calls, retrieve the authtoken by authenticating yourself via the Log in call of User Session. The authtoken is returned in the 'Response' body of the Log in call and is mandatory in all of the calls. Example: blt3cecf75b33bb2ebe

## Get User

### Get user

**GET** `/user`

The Get user call returns comprehensive information of an existing user account. The information returned includes details of the stacks owned by and shared with the specified user account.

#### Headers

- **authtoken** (required)
  Default: `Enter_your_authtoken`

#### Sample Response

```json
{
	"user": {
		"uid": "blt22e22222d22d2f22222a2b2f",
		"created_at": "2016-06-30T05:02:27.516Z",
		"updated_at": "2019-07-16T10:35:30.898Z",
		"email": "john.doe@contentstack.com",
		"username": "john.doe_blt11fed1e1",
		"first_name": "John",
		"last_name": "Doe",
		"company": "Contentstack",
		"org_uid": [
			"blt44444c44ea4ddf222"
		],
		"shared_org_uid": [
			"bltcde1e1cdf1f11e5f",
			"blt22e2222dd2e2fb22",
			"blt3f3ad33ca33cb3a3"
		],
		"mobile_number": "9898989898",
		"country_code": "91",
		"tfa_status": "verified",
		"authy_id": "123123123",
		"active": true,
		"failed_attempts": 0,
		"authtoken": "bltd111c111111c11ec",
		"roles": [{
			"uid": "bltc0aa00ea0000b000",
			"name": "Developer",
			"description": "Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
			"users": [
				"blt1d11a1d11c1b11111e111a1f",
				"blt22dd2fd22222222e22f2aa22",
				"sys_blt3a3333e33b30c3ea"
			],
			"created_at": "2016-03-21T10:15:09.434Z",
			"updated_at": "2018-06-20T10:44:19.618Z",
			"api_key": "blt444ad44e4d44aa4a",
			"rules": [{
					"module": "locale",
					"locales": [
						"$all"
					],
					"acl": {
						"read": true
					}
				},
				{
					"module": "environment",
					"environments": [
						"$all"
					],
					"acl": {
						"read": true
					}
				},
				{
					"module": "asset",
					"assets": [
						"$all"
					],
					"acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					}
				}
			]
		}]
	}
}
```




## Update User

### Update user

**PUT** `/user`

The Update User API Request updates the details of an existing user account. Only the information entered here will be updated, the existing data will remain unaffected.

When executing the API call, under the 'Body' section, enter the information of the user that you wish to update. This information should be in JSON format.

**Additional Resource:** To update the role of an existing user, refer to the [Update Existing User Role](#update-existing-user-role) API Request.

#### Headers

- **authtoken** (required)
  Default: `Enter_your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"user": {
		"company": "company name inc."
	}
}
```

#### Sample Response

```json
{
	"notice": "Profile updated successfully.",
	"user": {
		"uid": "abcdef1234567890abcdef",
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"email": "developer@example.com",
		"username": "john.doe_blt11fed1e1",
		"first_name": "John",
		"last_name": "Doe",
		"company": "company name inc.",
		"org_uid": [
			"blt44444c44ea4ddf222"
		],
		"shared_org_uid": [
			"bltcde1e1cdf1f11e5f",
			"blt22e2222dd2e2fb22",
			"blt3f3ad33ca33cb3a3"
		],
		"mobile_number": "9898989898",
		"country_code": "91",
		"tfa_status": "verified",
		"authy_id": "123123123",
		"active": true,
		"failed_attempts": 0
	 "settings": {
            "global": [
                {
                    "key": "favorite_stacks",
                    "value": [
                        {
                            "org_uid": "blt40222226ddf287",
                            "stacks": [
                                {
                                    "api_key": "blt922222441b906ce"
                                }
                            ]
                        },
                        {
                            "org_uid": "blt8b22227a9dadcc",
                            "stacks": [
                                {
                                    "api_key": "blt2d2222baca745a8"
                                },
                                {
                                    "api_key": "blt38c22223b67bd04"
                                },
                                {
                                    "api_key": "blt8fb222260d06b9"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "last_login_at": "2025-07-08T08:46:26.437Z",
        "password_updated_at": "2024-11-07T08:51:49.609Z",
        "password_reset_required": false
}
```




## Activate User

### Activate a user account

**POST** `/user/activate/{user_activation_token}`

The Activate a user account call activates the account of a user after signing up. For account activation, you will require the token received in the activation email.

#### URL Parameters

- **user_activation_token** (required)
  Enter the activation token received on the registered email address. You can find the activation token in the activation URL sent to the email address used while signing up.
  Default: `bltf36705c7361d4734`

#### Sample Request

```json
{
"user": {
"first_name": "your_first_name",
"last_name": "your_last_name",
"password": "your_password",
"password_confirmation": "confirm_your_password"
}
}
```

#### Sample Response

```json
{
	"notice": "Your account has been activated."
}
```




## Request Password

### Request for a password

**POST** `/user/forgot_password`

The Request for a password API helps to get a temporary password to log into an account in case a user has forgotten the login password.

Using this temporary password, you can log in to your account and [set a new password](/docs/developers/password-related-security/forgot-reset-password) for your Contentstack account.

In the 'Body' section, provide the user's email address in JSON format.

**Note:** The “**Reset password**” token that you receive in your email address is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the [Reset password](/docs/developers/apis/content-management-api/#reset-password) API request to generate a new token.

#### Headers

- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"user": {
		"email": "john.doe@contentstack.com"
	}
}
```

#### Sample Response

```json
{
	"notice": "If this email address exists, we will send you an email with instructions for resetting your password."
}
```




## Reset Password

### Reset password

**POST** `/user/reset_password`

The Reset password API request allows you to reset your Contentstack account password.

******Note:**Before using this API request, you need to execute the [Request for a password](/docs/developers/apis/content-management-api/#request-for-a-password) API request to receive the reset password token in your registered email address.

When executing the request, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format.

**Note**: The "**Reset password**" token is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the same request to generate a new token.

#### Headers

- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"user": {
		"reset_password_token": "abcdefghijklmnop1234567890",
		"password": "your_new_password",
		"password_confirmation": "your_new_password"
	}
}
```

#### Sample Response

```json
{
	"notice": "Your password has been reset successfully."
}
```

