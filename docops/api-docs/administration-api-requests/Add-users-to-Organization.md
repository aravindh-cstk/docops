---
title: "Add users to Organization"
description: /organizations/{organization_uid}/share
url: /add-users-to-organization
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:07.780Z
updated_at: 2026-04-07T12:55:07.780Z
---

# Add users to Organization

<p>The <span data-type="inlineCode">Add users to organization</span> request allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users.</p>
<p>When executing the API request, in the request body, provide the organization admin/member role ID, obtained from the <span data-type="inlineCode">Get all roles in an Organization</span> request. Also, provide the stack role UID of the user in the request body, obtained from the <span data-type="inlineCode">Get all roles</span> request.</p>

**API Endpoint**: `/organizations/{organization_uid}/share`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of the organization to which you want to add users.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken of the user.</p>
- **Content-Type** (required)

## Request Body

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

## Response

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

