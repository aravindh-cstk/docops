---
title: "Update User Role"
description: /stacks/users/roles
url: /update-user-role
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.445Z
updated_at: 2023-03-28T14:01:32.723Z
---

# Update User Role

<p>The <span data-type='inlineCode'>Update User Role</span> API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user. For example, we have an existing user with the "Developer" role, and if you execute this API request with "Content Manager" role, the user role will lose "Developer" rights and the user role&nbsp;be updated to just "Content Manager".</p><p>When executing the API call, under the 'Body' section, enter the user UID and UIDs of roles that you want to assign the user. This information should be in JSON format. </p>

**API Endpoint**: `/stacks/users/roles`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack</p>
- **authtoken** (required)
  <p>Enter your authtoken</p>
- **Content-Type** (required)

## Request Body

```json
{
	"users": {
		"user_uid": ["role_uid1", "role_uid2"]
	}
}
```

## Response

```json
{
	"notice": "The roles were applied successfully.",
	"users": [{
		"uid": "user_uid",
		"roles": ["role_uid1", "role_uid2"]
	}]
}
```

