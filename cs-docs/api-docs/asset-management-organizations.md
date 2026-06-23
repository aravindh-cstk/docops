---
title: "Asset Management | Organizations"
description: Manage asset management organizations, settings, and access structures for DAM administration.
url: https://www.contentstack.com/docs/asset-management-organizations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Asset Management | Organizations

[Organization](/docs/owners-and-admins/about-organizations) is the top-level entity in the hierarchy of Contentstack, consisting of [stacks](/docs/developers/set-up-stack/about-stack) and stack resources, and users. Organization allows easy management of projects as well as users within the Organization.

## Get All Organizations

### Get all Organizations

**GET** `/organizations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}`

The Get all organizations call lists all organizations related to the system user in the order that they were created.

#### Query Parameters

- **limit** (optional)
  The ‘limit’ parameter will return a specific number of entries in the output. Example, if there are 10 organizations and you wish to fetch only the first 2, you need to specify '2' as the value in this parameter.
  Default: `1`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of organizations in the output. Example, if there are 12 organizations and you want to skip the first 2 to get only the last 10 in the response body, you need to specify ‘2’ here.
  Default: `1`
- **asc** (optional)
  The ‘asc’ parameter allows you to sort the list of organizations in the ascending order with respect to the value of a specific field.
  Default: `created_at`
- **desc** (optional)
  The ‘desc’ parameter allows you to sort the list of Organizations in the descending order with respect to the value of a specific field.
  Default: `update_at`
- **include_count** (optional)
  The ‘include_count’ parameter returns the total number of organizations related to the user. Example: If you wish to know the total number of organizations, you need to mention ‘true’.
  Default: `true`
- **typeahead** (optional)
  The typeahead parameter is a type of filter that allows you to perform a name-based search on all organizations based on the value provided. Example, if we have four organizations named ‘ABC’, ‘ABC1’, ‘XYZ’, and ‘ACC’, and we provide ‘ABC’ as the value to this parameter, the search result will return the organizations ‘ABC’ and ‘ABC1’ as the output.
  Default: `Contentstack`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
  "organizations":[
    {
      "uid":"blt6a6f6666ab666aa6",
      "name":"Sample",
      "plan_id":"cms_plan",
      "owner_uid":"blt1f1cddeaefbefdd111b11111",
      "expires_on":"2029-12-31T00:00:00.000Z",
      "enabled":true,
      "is_over_usage_allowed":true,
      "created_at":"2016-05-31T06:30:40.993Z",
      "updated_at":"2019-05-24T10:26:41.861Z",
      "settings":{
        "sso":{
          "id":"sample-sso",
          "strict":true,
          "session_timeout":12,
          "sso_roles":{
            "enabled":false
          },
          "saml":{
            "acs_url":"https://app.contentstack.com/api/sso/saml2/sample-sso",
            "entity_id":"https://app.contentstack.com",
            "version":2,
            "name_id_format":"Email Address",
            "attributes":[
              "email",
              "first_name",
              "last_name"
            ]
          }
        }
      }
    },
    {
      "uid":"blt4444c44ea4ddf444",
      "name":"Sample2",
      "plan_id":"testing",
      "owner_uid":"blt22e22222d22d2f22222a2b2f",
      "is_transfer_set":false,
      "expires_on":"2020-01-31T00:00:00.000Z",
      "enabled":true,
      "is_over_usage_allowed":true,
      "created_at":"2016-09-30T05:08:10.076Z",
      "updated_at":"2019-04-18T08:45:57.936Z",
      "settings":{
        "sso":{
          "sso_roles":{
            "enabled":false
          }
        }
      },
      "owner":true
    }
  ]
}
```




## Get Single Organization

### Get a single Organization

**GET** `/organizations/{organization_uid}?include_plan={boolean_value}`

The Get a single organization call gets the comprehensive details of a specific organization related to the system user.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the organization that you want to retrieve.
  Default: `enter_the_organization_uid`

#### Query Parameters

- **include_plan** (optional)
  The include_plan parameter includes the details of the plan that the organization has subscribed to. To include the details of the subscribed plan in the Response body, enter ‘true’.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
	"organizations": [{
		"uid": "blt4444c44ea4ddf444",
		"name": "Sample2",
		"plan_id": "testing",
		"owner_uid": "blt22e22222d22d2f22222a2b2f",
		"is_transfer_set": false,
		"expires_on": "2020-01-31T00:00:00.000Z",
		"enabled": true,
		"is_over_usage_allowed": true,
		"created_at": "2016-09-30T05:08:10.076Z",
		"updated_at": "2019-04-18T08:45:57.936Z",
		"settings": {
			"sso": {
				"sso_roles": {
					"enabled": false
				}
			}
		},
		"plan": {
			"plan_id": "testing",
			"name": "Testing",
			"message": "",
			"price": "$0",
			"features": [{
					"uid": "users",
					"name": "Users",
					"limit": 1000,
					"enabled": true
				},
				{
					"uid": "stacks",
					"name": "Stacks",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "content_types",
					"name": "Content Types",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "assets",
					"name": "Assets",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "entries",
					"name": "Entries",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "environments",
					"name": "Environments",
					"limit": 40000000,
					"enabled": true
				},
				{
					"uid": "getLimit",
					"name": "GET Requests Limit",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "limit",
					"name": "API Requests Limit",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "bulkLimit",
					"name": "Bulk Requests Limit",
					"limit": 15,
					"enabled": true
				},
				{
					"uid": "sso",
					"name": "SSO",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "workflow",
					"name": "Workflow",
					"limit": 10,
					"enabled": true
				},
				{
					"uid": "globalSearch",
					"name": "globalSearch",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "extension",
					"name": "extension",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "extension_widget",
					"name": "Custom Widgets",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "maxExtensionScopeCtRef",
					"name": "Scope of CT for custom widgets",
					"limit": 23,
					"enabled": true
				},
				{
					"uid": "workflow_old_api",
					"name": "workflow_old_api",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "bulk-action",
					"name": "Bulk Action",
					"limit": 25,
					"enabled": true
				},
				{
					"uid": "ssoEntityId",
					"name": "SSO Entity ID",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "graphql",
					"name": "GraphQL",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "graphqlLimit",
					"name": "GraphQL Limit",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "deliveryTokens",
					"name": "Delivery Tokens",
					"limit": 3,
					"enabled": true
				},
				{
					"uid": "ssoRoles",
					"name": "SSO Roles",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "dashboard_widget",
					"name": "Dashboard Widget",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "total_extensions",
					"name": "Total Extensions",
					"limit": 50,
					"enabled": true
				},
				{
					"uid": "analyticsDashboard",
					"name": "Analytics Dashboard",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlocksPerContentType",
					"name": "maxDynamicBlocksPerContentType",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlockDefinations",
					"name": "maxDynamicBlockDefinations",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlockObjects",
					"name": "maxDynamicBlockObjects",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "dashboard",
					"name": "Dashboard",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "languageFallback",
					"name": "Fallback Language",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "fieldLevelLocalization",
					"name": "fieldLevelLocalization",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "stackCreationLimit",
					"name": "Stack Creation Limit",
					"enabled": true,
					"limit": 10
				},
				{
					"uid": "inProgressEntries",
					"name": "In-Progress Entries",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "publishLocalizedVersions",
					"name": "publishLocalizedVersions",
					"limit": 50,
					"enabled": false
				}
			],
			"created_at": "2017-12-15T12:18:34.602Z",
			"updated_at": "2019-07-11T12:52:44.965Z"
		},
		"owner": true
	}]
}
```




## Organization Roles

### Get all roles in an Organization

**GET** `/organizations/{organization_uid}/roles?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_stack_roles={boolean_value}`

The Get all roles in an organization call gives the details of all the roles that are set to users in an Organization.

When executing the API call, provide the Organization's UID.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `blt6eb149a1feb2263b6b6e454e`

#### Query Parameters

- **limit** (optional)
  The ‘limit’ parameter will return a specific number of Organization roles in the output. Example, if there are 10 organization roles and you wish to fetch only the first 2, you need to specify '2' as the value in this parameter.
  Default: `limit_value`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of Organization roles in the output. For example, if there are 12 organization roles and you want to skip the first 2 to get only the last 10 in the response body, you need to specify ‘2’ here.
  Default: `skip_value`
- **asc** (optional)
  The ‘asc’ parameter allows you to sort the list of organization roles in an ascending order on the basis of a parameter.
  Default: `field_uid`
- **desc** (optional)
  The ‘desc’ parameter allows you to sort the list of organization roles in a descending order on the basis of a parameter.
  Default: `field_uid`
- **include_count** (optional)
  The ‘include_count’ parameter returns the total number of roles in an organization. For example: If you want to know the total number of roles in an organization, you need to mention ‘true’.
  Default: `false`
- **include_stack_roles** (optional)
  The ‘include_stack_roles’ parameter, when set to ‘true’, includes the details of stack-level roles in the Response body.
  Default: `false`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
	"roles": [{
			"uid": "blt888bdcb888fefc88d8888e8a",
			"name": "Admin",
			"description": "Admin Role",
			"org_uid": "blt6eb666a6feb6666b6b6e666e",
			"admin": true,
			"default": true,
			"users": [
				"blt33dd3fd33333333e33f3aa33",
				"bltf44c4ca4f444e444",
				"blt55bcad5ae5cc5b5d"
			],
			"created_at": "2017-09-17T11:50:52.557Z",
			"update_at": "2017-09-17T11:50:52.557Z"
		},
		{
			"uid": "blt084e2101471d9d2a27a5abb4",
			"name": "Member",
			"description": "Member Role",
			"org_uid": "blt6eb149a1feb2263b6b6e454e",
			"default": true,
			"users": [
				"blt11dd3fd11111111e11f1aa11",
				"bltf22c2ca2f2222e222",
				"blt22bcad2ae2cc2b2d"
			],
			"created_at": "2017-09-17T11:50:52.190Z",
			"update_at": "2017-09-17T11:50:52.190Z"
		}
	]
}
```




## Organization Users

### Get Organization users by email

**POST** `/organizations/{organization_uid}/share/search`

The Get Organization users by email request retrieves information about users within an organization based on their email addresses.

When executing the API request, you need to provide the organization UID. In the request body, you need to enter the email IDs of the users whose details you want to retrieve from the mentioned organization, like as follows:

```
{
    "emails":["abc@sample.com", "xyz@sample.com", …]
}
```

**Note:** If you do not pass the request body, you will get the details of all the users in the Organization.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the Organization of which you want to retrieve the list of users.
  Default: `blt3213213213213213`

#### Query Parameters

- **include_roles** (optional)
  The include_roles parameter, when set to “true,” will display the details of the roles that are assigned to the organization users.
  Default: `false`
- **include_user_details** (optional)
  The include_user_details parameter, when set to “true,” lets you know whether the user has enabled Two-factor Authentication or not.
  Default: `false`
- **include_count** (optional)
  The include_count parameter returns the total number of organization users. Example: If you wish to know the total number of organization invitations, you need to mention “true.”
  Default: `false`
- **limit** (optional)
  The limit parameter will return a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to fetch only the first 5, you need to specify “5” as the value in this parameter.
  Default: `false`
- **skip** (optional)
  The skip parameter will skip a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to skip the latest 5, you need to specify “5” as the value in this parameter.
  Default: `false`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Request

```json
{
    "emails":["abc@sample.com"]
}
```

#### Sample Response

```json
{
    "shares": [
        {
            "uid": "blt1231231231231231",
            "email": "abc@sample.com",
            "user_uid": "blteaf2e44ba211bb3f",
            "message": "",
            "org_uid": "blt3213213213213213",
            "org_roles": [
                "blt2132132132132132"
            ],
            "invited_by": "blt1321321321321321",
            "invited_at": "2023-10-13T12:17:02.473Z",
            "status": "accepted",
            "acceptance_token": "blt1112223331231231",
            "created_at": "2023-10-13T12:17:02.468Z",
            "updated_at": "2023-10-13T12:17:25.670Z"
        }
    ]
}
```


### Add users to Organization

**POST** `/organizations/{organization_uid}/share`

The Add users to organization request allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users.

When executing the API request, in the request body, provide the organization admin/member role ID, obtained from the Get all roles in an Organization request. Also, provide the stack role UID of the user in the request body, obtained from the Get all roles request.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the organization to which you want to add users.
  Default: `bltad182661f48a9afe1d00cdc2`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"share": {
		"users": {
			"abc@sample.com": ["{{orgAdminRoleUid}}"],
			"xyz@sample.com": ["{{orgMemberRoleUid}}"]
		},
		"stacks": {
			"abc@sample.com": {
				"{{apiKey}}": ["{{stackRoleUid1}}"]
			},
			"xyz@sample.com": {
				"blta1ed1f11111c1eb1": ["blt111d1b110111e1f1"],
				"bltf0c00caa0f0000f0": ["bltcea22222d2222222", "blt333f33cb3e33ffde"]
			}
		},
		"message": "Invitation message"
	}
}
```

#### Sample Response

```json
{
	"notice": "The invitation has been sent successfully.",
	"shares": [{
			"uid": "bltdad32690d8ac4698f4a9fc24",
			"email": "aravind.kumar+2@raweng.com",
			"user_uid": "blt65a26b0aae48wexft43463",
			"message": "Test Message",
			"org_uid": "bltad182661f48a9afe1d00cdc2",
			"org_roles": [
				"blt18d4b92df0b3b432975188a7"
			],
			"invited_by": "bltf9252892ba54cfc0811eb745",
			"invited_at": "2017-09-17T19:46:48.987Z",
			"status": "pending",
			"created_at": "2017-09-17T19:46:48.981Z",
			"update_at": "2017-09-17T19:46:48.981Z"
		},
		{
			"uid": "bltcbccc241b3a4da1c352f8cec",
			"email": "aravind.kumar+1@raweng.com",
			"user_uid": "blt65a26b0aae48223c7ead5c30",
			"message": "Test Message",
			"org_uid": "bltad182661f48a9afe1d00cdc2",
			"org_roles": [
				"blt3733b2ca83073f4c71a41caf"
			],
			"invited_by": "bltf9252892ba54cfc0811eb745",
			"invited_at": "2017-09-17T19:46:48.990Z",
			"status": "accepted",
			"created_at": "2017-09-17T19:46:48.982Z",
			"update_at": "2017-09-17T19:46:48.982Z"
		},
		{
			"uid": "bltb01c45c6c8e9326b6ba94caf",
			"email": "aravind.kumar+3@raweng.com",
			"message": "Test Message",
			"org_uid": "bltad182661f48a9afe1d00cdc2",
			"org_roles": [
				"blt3733b2ca83073f4c71a41caf"
			],
			"invited_by": "bltf9252892ba54cfc0811eb745",
			"invited_at": "2017-09-17T19:46:48.992Z",
			"status": "pending",
			"created_at": "2017-09-17T19:46:48.983Z",
			"update_at": "2017-09-17T19:46:48.983Z"
		}
	]
}
```


### Remove users from organization

**DELETE** `/organizations/{organization_uid}/share`

The Remove users from organization request allows you to remove existing users from your organization.

**Note**: Only the owner or the admin of the organization can remove users.

When executing the API request, provide the organization UID. In the “Body” section, you need to enter the email IDs of the users you want to remove from the organization as follows:

```
{
  "emails":[
    "abc@sample.com", "xyz@sample.com"
  ]
}
```

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the organization from which you want to remove users.
  Default: `bltad182661f48a9afe1d00cdc2`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "emails":[
        "abc@sample.com", "xyz@sample.com"
    ]
}
```

#### Sample Response

```json
{
    "notice":"The invitation has been deleted successfully.",
    "shares":[
        {
            "uid":"bltdad32690d8ac4698f4afc1",
            "email":"abc@sample.com",
            "user_uid":"blt65a26b0aae48wexft43",
            "org_uid":"bltad661f48a9afe1d00cd2",
            "org_roles":[
                "blt18d4b92df0b3b432975188a7"
            ],
            "invited_by":"bltf922a54cfc0811eb7",
            "invited_at":"2017-09-17T19:46:48.987Z",
            "status":"pending",
            "created_at":"2019-03-12T05:21:40.015Z",
            "updated_at":"2019-03-12T05:21:40.015Z",
            "access_without_sso":true
        },
        {
            "uid":"bltcbc41b34a1c352f8ce",
            "email":"xyz@sample.com",
            "user_uid":"blt65a26b0aae482c7d5c3",
            "message":"Test Message",
            "org_uid":"bltad161f48a9afe1d00cd2",
            "org_roles":[
                "blt3733b2ca83073f4c71a4ca"
            ],
            "invited_by":"blte75599b1e529fa3a",
            "invited_at":"2020-03-06T06:29:13.510Z",
            "status":"pending",
            "created_at":"2020-03-06T06:29:13.510Z",
            "updated_at":"2020-03-06T06:29:13.510Z"
        }
    ]
}
```


### Resend pending Organization invitation

**GET** `/organizations/{organization_uid}/share/{share_uid}/resend_invitation`

The Resend pending organization invitation request allows you to resend the Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

When executing Get all organization invitations request, you get the invitation status that helps to identify the pending invitations and share UID. When executing the Resend pending organization invitation API request, provide the Organization UID and share UID.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the organization for which you want to resend invitation.
  Default: `Enter_the_organization_uid`
- **share_uid** (required)
  Enter the share UID of the organization that you transferred earlier.
  Default: `Enter_the_share_uid`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
	"notice": "The invitation has been resent successfully."
}
```


### Get all Organization invitations

**GET** `/organizations/{organization_uid}/share?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_roles={boolean_value}&include_invited_by={boolean_value}&include_user_details={boolean_value}&typeahead={value}`

The Get all organization invitations call gives you a list of all the Organization invitations. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

When executing the API call, provide the Organization UID.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the Organization of which you want to retrieve the list of sent invitations.
  Default: `blt4001c00ea0ddf287`

#### Query Parameters

- **limit** (optional)
  The ‘limit’ parameter will return a specific number of sent organization invitations in the output. Example, if 10 invitations were sent out and you wish to fetch only the first 8, you need to specify '2' as the value in this parameter.
  Default: `1`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of organization roles in the output. Example, if there are 12 organization roles and you want to skip the last 2 to get only the first 10 in the response body, you need to specify ‘2’ here.
  Default: `2`
- **asc** (optional)
  The ‘asc’ parameter allows you to sort the list of organization invitations in ascending order on the basis of a specific parameter.
  Default: `created_at`
- **desc** (optional)
  The ‘desc’ parameter allows you to sort the list of organization invitations in descending order on the basis of a specific parameter.
  Default: `update_at`
- **include_count** (optional)
  The ‘include_count’ parameter returns the total number of organization invitations sent out. Example: If you wish to know the total number of organization invitations, you need to mention ‘true’.
  Default: `true`
- **include_roles** (optional)
  The ‘include_roles’ parameter, when set to ‘true’, will display the details of the roles that are assigned to the user in an organization.
  Default: `true`
- **include_invited_by** (optional)
  The ‘include_invited_by’ parameter, when set to ‘true’, includes the details of the user who sent out the organization invitation.
  Default: `true`
- **include_user_details** (optional)
  The ‘include_user_details’ parameter, when set to ‘true’, lets you know whether the user who has been sent the organization invitation has enabled Two-factor Authentication or not.
  Default: `true`
- **typeahead** (optional)
  The ‘typeahead’ parameter allows you to perform a name-based search on all the stacks on an organization based on the value provided. For example, it allows you to perform an email-ID-based search on all users based on the email ID provided.
  Default: `Aravind`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "shares": [
        {
            "uid": "bltcbccc241b3a4da1c352f8cec",
            "email": "aravind.kumar+1@raweng.com",
            "user_uid": "blt65a26b0aae48223c7ead5c30",
            "message": "Test Message",
            "org_uid": "bltad182661f48a9afe1d00cdc2",
            "org_roles": [
                "blt3733b2ca83073f4c71a41caf"
            ],
            "invited_by": "bltf9252892ba54cfc0811eb745",
            "invited_at": "2017-09-17T19:46:48.990Z",
            "status": "accepted",
            "created_at": "2017-09-17T19:46:48.982Z",
            "update_at": "2017-09-17T19:46:48.982Z"
        },
        {
            "uid": "bltb01c45c6c8e9326b6ba94caf",
            "email": "aravind.kumar+3@raweng.com",
            "user_uid": "blt3a17bcc7c0ec0930caedccf2",
            "message": "Test Message",
            "org_uid": "bltad182661f48a9afe1d00cdc2",
            "org_roles": [
                "blt3733b2ca83073f4c71a41caf"
            ],
            "invited_by": "bltf9252892ba54cfc0811eb745",
            "invited_at": "2017-09-17T19:46:48.992Z",
            "status": "pending",
            "created_at": "2017-09-17T19:46:48.983Z",
            "update_at": "2017-09-17T20:24:22.440Z"
        }
    ],
    "count": 3
}
```




## Transfer Organization Ownership

### Transfer Organization ownership

**POST** `/organizations/{organization_uid}/transfer-ownership`

The Transfer organization ownership call transfers the ownership of an Organization to another user. When the call is executed, an email invitation for accepting the ownership of a particular Organization is sent to the specified user.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the Organization gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the Organization.

When executing the API call, provide the Organization UID.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the organization that you want to transfer to other user.
  Default: `enter_the_organization_uid`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Request

```json
{
	"transfer_to": "abc@sample.com"
}
```

#### Sample Response

```json
{
	"notice": "Email has been successfully sent to the user."
}
```




## Organization Stacks

### Get all stacks in an Organization

**GET** `/organizations/{organization_uid}/stacks?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}`

The Get all stacks in an organization call fetches the list of all stacks in an Organization.

When executing the API call, provide the Organization UID.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of the Organization of which you want to retrieve all the stacks.
  Default: `blt4001c00ea0ddf287`

#### Query Parameters

- **limit** (optional)
  The ‘limit’ parameter will return a specific number of stacks in the output. Example, if there are 10 organization stacks and you wish to fetch only the first 2, you need to specify '2' as value in this parameter.
  Default: `limit_value`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of organization stacks in the output. Example, if there are 12 stacks and you want to skip the last 2 to get only the first 10 in the response body, you need to specify ‘2’ here.
  Default: `skip_value`
- **asc** (optional)
  The ‘asc’ parameter allows you to sort the list of stacks in an organization in the ascending order.
  Default: `field_uid`
- **desc** (optional)
  The ‘desc’ parameter allows you to sort the list of stacks in an organization in the descending order.
  Default: `field_uid`
- **include_count** (optional)
  The ‘include_count’ parameter returns the total number of stacks in an organization. Example: If you wish to know the total number of stacks in your organization, you need to mention ‘true’.
  Default: `false`
- **typeahead** (optional)
  The ‘typeahead’ parameter allows you to perform a name-based search on all the stacks on an organization based on the value provided.
  Default: `Aravind`

#### Headers

- **authtoken** (required)
  Enter the authtoken of the user.
  Default: `your_authtoken`

#### Sample Response

```json
{
	"stacks": [{
		"created_at": "2017-09-28T06:09:19.912Z",
		"updated_at": "2017-09-29T07:29:00.879Z",
		"uid": "blt046702aa419c8f9d",
		"name": "testv3-B",
		"api_key": "blt01a49e20d89b197e",
		"owner_uid": "blt02f4a95744f5301e",
		"owner": {
			"email": "aravind.kumar@contentstack.com",
			"first_name": "Aravind",
			"last_name": "Kumar"
		},
		"users": {
			"count": 5
		}
	}],
	"count": 4
}
```




## Organization Logs

### Get organization log details

**GET** `/organizations/{organization_uid}/logs`

The Get organization log details request is used to retrieve the audit log details of an organization.

You can apply queries to filter the results. Refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section for more details.

When executing the API call, provide the Organization UID.

**Tip**: This request returns only the first **25 audit log items** of the specified organization. If you get more than **25 items** in your response, refer to the [Pagination](/docs/developers/apis/content-delivery-api#pagination) section to retrieve all the log items in a paginated form.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of a specific organization of which you want to retrieve the audit log details.
  Default: `656s5d1c65ea6ddf287`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_authtoken`

#### Sample Response

```json
{
	"logs": [{
			"uid": "blt8a6de4d89d4dcffbd1b6",
			"org_uid": "blt3cbc7416a3d8a026",
			"created_at": "ISODate(2018 - 02 - 13 T12: 41: 24.625 Z)",
			"created_by": "bltdd494873d2e0fee7",
			"module": "user",
			"event_type": "share",
			"metadata": {
				"uid": "blt3cbc7416a3d8a026"
			},
			"remote_addr": "54.174.130.249",
			"request": {
				"share": {
					"users": [{
						"email": "contentstacktest+128@raweng.com",
						"org_roles": ["bltbd1cb8a0838069de"]
					}],
					"stacks": []
				}
			},
			"response": {
				"notice": "The invitation has been sent successfully.",
				"shares": [{
					"uid": "blt567a680139f45088",
					"email": "contentstacktest+128@raweng.com",
					"user_uid": null,
					"message": null,
					"org_uid": "blt3cbc7416a3d8a026",
					"org_roles": ["bltbd1cb8a0838069de"],
					"invited_by": "bltdd494873d2e0fee7",
					"invited_at": "ISODate(2018 - 02 - 13 T12:41: 24.617 Z)",
					"status": "pending",
					"created_at": "ISODate(2018-02-13 T12:41:24.615Z)",
					"updated_at": "ISODate(2018-02-13 T12:41:24.615Z)"
				}]
			}
		},
		{
			"uid": "blt5839ff8426cb98d7eddc",
			"org_uid": "blt84dad57ea71e7cbe",
			"created_at": "ISODate(2019-03-06T07:00:47.029Z)",
			"created_by": "bltd3bb71a3e7cfbf16",
			"module": "user",
			"event_type": "logout",
			"metadata": {
				"uid": "bltd3bb71a3e7cfbf16",
				"logout_at": "ISODate(2019-03-06T07:00:47.029Z)"
			},
			"remote_addr": "::ffff:127.0.0.1",
			"request": {},
			"response": {
				"notice": "systemUser.success.logout"
			}
		}
	]
}
```


### Get organization log item

**GET** `/organizations/{organization_uid}/logs/{log_uid}`

The Get organization log item request is used to retrieve a specific item from the audit log of an organization.

When executing the Get organization log details request, you get the Organization UID and Log UID. Use these values to execute the Get organization log item API request.

#### URL Parameters

- **organization_uid** (required)
  Enter the UID of a specific organization of which you want to retrieve the audit log details.
  Default: `656s5d1c65ea6ddf287`
- **log_uid** (required)
  Enter the UID of a specific log item of which you want to retrieve the details.
  Default: `bget22758ff32ccd88ece`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_authtoken`

#### Sample Response

```json
{
	"log": {
		"uid": "blt8a6de4d89d4dcffbd1b6",
		"org_uid": "blt3cbc7416a3d8a026",
		"created_at": "ISODate(2018-02-13T12:41:24.625Z)",
		"created_by": "bltdd494873d2e0fee7",
		"module": "user",
		"event_type": "share",
		"metadata": {
			"uid": "blt3cbc7416a3d8a026"
		},
		"remote_addr": "54.174.130.249",
		"request": {
			"share": {
				"users": [{
					"email": "contentstacktest+128@raweng.com",
					"org_roles": ["bltbd1cb8a0838069de"]
				}],
				"stacks": []
			}
		},
		"response": {
			"notice": "The invitation has been sent successfully.",
			"shares": [{
				"uid": "blt567a680139f45088",
				"email": "contentstacktest+128@raweng.com",
				"user_uid": null,
				"message": null,
				"org_uid": "blt3cbc7416a3d8a026",
				"org_roles": ["bltbd1cb8a0838069de"],
				"invited_by": "bltdd494873d2e0fee7",
				"invited_at": "ISODate(2018-02-13T12:41:24.617Z)",
				"status": "pending",
				"created_at": "ISODate(2018-02-13T12:41:24.615Z)",
				"updated_at": "ISODate(2018-02-13T12:41:24.615Z)"
			}]
		}
	}
}
```

