---
title: "Request for a password"
description: POST /user/forgot_password
url: developers/apis/administration-api/requests/request-for-a-password
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Request for a password


**Method:** `POST`  
**Endpoint:** `/user/forgot_password`

The Request for a password API helps to get a temporary password to log into an account in case a user has forgotten the login password.

Using this temporary password, you can log in to your account and [set a new password](/docs/developers/password-related-security/forgot-reset-password) for your Contentstack account.

In the 'Body' section, provide the user's email address in JSON format.

**Note:** The “**Reset password**” token that you receive in your email address is valid only for the **next 60 minutes** after it’s generated. Post that, it expires and you need to rerun the [Reset password](/docs/developers/apis/content-management-api/#reset-password) API request to generate a new token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json |  |

**Request Body:**

```json
{
	"user": {
		"email": "john.doe@contentstack.com"
	}
}
```

**Response (200):**

```json
{
	"notice": "If this email address exists, we will send you an email with instructions for resetting your password."
}
```
