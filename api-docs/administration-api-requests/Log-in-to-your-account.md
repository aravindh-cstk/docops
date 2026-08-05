---
title: "Log in to your account"
description: /user-session
url: /log-in-to-your-account
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:26:29.069Z
updated_at: 2026-04-07T12:26:29.069Z
---

# Log in to your account

<p>The <span data-type="inlineCode">Log in to your account</span>&nbsp;request is used to sign in to your Contentstack account and obtain the authtoken.</p>
<p class="note"><strong>Note:</strong> The <span data-type="inlineCode">authtoken</span> is a mandatory parameter when executing Content Management API calls. However, when executing Content Delivery API calls, use <a data-stringify-link="https://www.contentstack.com/docs/developers/apis/content-delivery-api
" delay="150" data-sk="tooltip_parent" href="/docs/developers/apis/content-delivery-api/" rel="noopener noreferrer" tabindex="-1" data-remove-tab-index="true">the Content Delivery base URL&nbsp;</a>for your region, and&nbsp;pass the environment-specific delivery token against the <span data-type="inlineCode">access_token</span> key.</p>
<p>In the 'Body' section, enter the user credentials in JSON format. The JSON query will include the email address, the&nbsp;Contentstack user account password, and the two-factor authentication token (if enabled) received in the Authy app or SMS.</p>
<p>For SSO-enabled organizations, the ‘Log in to your account’ request will not return the user authtoken for users. In this case, you can try out the following:</p>
<ul><li>The owner of an organization can access the SSO-enabled organization through Contentstack credentials and retrieve the user authtoken to make Content Management API requests.</li><li>Disable 'Strict Mode' for an SSO-enabled organization, and users who have the ability to access their organization through Contentstack credentials can retrieve the authtoken to make Content Management API requests.</li></ul>
<p>For more details, refer the&nbsp;<a href="/docs/developers/single-sign-on/rest-api-usage#content-management-api">REST API Usage - Content Management API</a> section in the Single Sign-On page.</p>

**API Endpoint**: `/user-session`

**Method**: `POST`

## Headers

- **Content-Type** (required)

## Request Body

```json
{
	"user": {
		"email": "{{user_email}}",
		"password": "{{password}}",
		"tfa_token": "{{your_2FA_token}}"
	}
}
```

## Response

```json
{
	"notice": "Login Successful.",
	"user": {
		"uid": "blt22e22222d22d2f22222a2b2f",
		"created_at": "2016-06-30T05:02:27.516Z",
		"updated_at": "2019-07-16T10:35:30.898Z",
		"email": "user_email",
		"username": "username",
		"first_name": "user's_first_name",
		"last_name": "user's_last_name",
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
			},
			{
				"uid": "blt00b0e0bf00000de0",
				"name": "Content Manager",
				"description": "Content Managers can view all content types, manage entries and assets. They cannot edit content types or access stack settings.",
				"users": [
					"blt1d11a1d11c1b11111e1111a1f",
					"blt2de22eea222222e22222222a",
					"sys_bltf2e222cf2d222222"
				],
				"roles": [],
				"created_at": "2016-03-21T10:15:09.472Z",
				"updated_at": "2018-11-21T13:28:22.868Z",
				"api_key": "blt444ad4e4d44aa4a",
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
			},
			{
				"uid": "blte55d15e55b5e5555",
				"name": "Admin",
				"description": "Admin can perform all actions and manage all settings of the stack, except the ability to delete or transfer ownership of the stack.",
				"users": [
					"blt44e44444d44d4f44444a4b4f"
				],
				"created_at": "2018-11-02T12:41:08.038Z",
				"updated_at": "2018-11-02T12:41:08.038Z",
				"api_key": "blt11111decbaa1a11e"
			}
		]
	}
}
```

