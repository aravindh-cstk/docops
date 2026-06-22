---
title: "Reset password"
description: POST /user/reset_password
url: developers/apis/content-management-api/requests/reset-password
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-05-23
---

# Reset password


**Method:** `POST`  
**Endpoint:** `/user/reset_password`

The Reset password API request allows you to reset your Contentstack account password.

******Note:**Before using this API request, you need to execute the [Request for a password](/docs/developers/apis/content-management-api/#request-for-a-password) API request to receive the reset password token in your registered email address.

When executing the request, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format.

**Note**: The "**Reset password**" token is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the same request to generate a new token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json |  |

**Request Body:**

```json
{
	"user": {
		"reset_password_token": "abcdefghijklmnop1234567890",
		"password": "your_new_password",
		"password_confirmation": "your_new_password"
	}
}
```

**Response (200):**

```json
{
	"notice": "Your password has been reset successfully."
}
```
