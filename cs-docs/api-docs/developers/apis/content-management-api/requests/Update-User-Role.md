---
title: "Update User Role"
description: POST /stacks/users/roles
url: developers/apis/content-management-api/requests/update-user-role
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Update User Role

**POST** `/stacks/users/roles`

The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user. For example, we have an existing user with the "Developer" role, and if you execute this API request with "Content Manager" role, the user role will lose "Developer" rights and the user role be updated to just "Content Manager".

When executing the API call, under the 'Body' section, enter the user UID and UIDs of roles that you want to assign the user. This information should be in JSON format.

## Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `Enter the API key of your stack`
- **authtoken** (required)
  Enter your authtoken
  Default: `Enter_your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
	"users": {
		"user_uid": ["role_uid1", "role_uid2"]
	}
}
```

## Sample Response

```json
{
	"notice": "The roles were applied successfully.",
	"users": [{
		"uid": "user_uid",
		"roles": ["role_uid1", "role_uid2"]
	}]
}
```

