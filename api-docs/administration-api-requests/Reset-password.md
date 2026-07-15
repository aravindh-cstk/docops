---
title: "Reset password"
description: POST /user/reset_password
url: administration-api-requests/password
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Reset password

**POST** `/user/reset_password`

The Reset password API request allows you to reset your Contentstack account password.

******Note:**Before using this API request, you need to execute the [Request for a password](../api-detail/content-management-api.md#request-for-a-password) API request to receive the reset password token in your registered email address.

When executing the request, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format.

**Note**: The "**Reset password**" token is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the same request to generate a new token.

## Headers

- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
	"user": {
		"reset_password_token": "abcdefghijklmnop1234567890",
		"password": "your_new_password",
		"password_confirmation": "your_new_password"
	}
}
```

## Sample Response

```json
{
	"notice": "Your password has been reset successfully."
}
```

