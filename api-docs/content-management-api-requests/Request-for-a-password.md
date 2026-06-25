---
title: "Request for a password"
description: POST /user/forgot_password
url: developer-apis/content-management-api-requests/request-for-a-password
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-15
---

# Request for a password

**POST** `/user/forgot_password`

The Request for a password API helps to get a temporary password to log into an account in case a user has forgotten the login password.

Using this temporary password, you can log in to your account and [set a new password](../../../../../cs-docs/developers/security/forgot-reset-password.md) for your Contentstack account.

In the 'Body' section, provide the user's email address in JSON format.

**Note:** The “**Reset password**” token that you receive in your email address is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the [Reset password](../../../../api-detail/content-management-api.md#reset-password) API request to generate a new token.

## Headers

- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
	"user": {
		"email": "john.doe@contentstack.com"
	}
}
```

## Sample Response

```json
{
	"notice": "If this email address exists, we will send you an email with instructions for resetting your password."
}
```

