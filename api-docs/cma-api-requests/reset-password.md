---
title: "Reset password"
description: /user/reset_password
url: /reset-password
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:11.211Z
updated_at: 2025-05-23T08:47:00.284Z
---

# Reset password

<p>The <span data-type="inlineCode">Reset password</span> API request allows you to reset your Contentstack account password.</p>
<p class="note"><strong></strong><strong>Note: </strong>Before using this API request, you need to execute the <a href="/docs/developers/apis/content-management-api/#request-for-a-password">Request for a password</a> API request to receive the reset password token in your registered email address.<br></p>
<p>When executing the request, in the 'Body' section, you need to provide the token that you receive via email, your new password, and password confirmation in JSON format.</p>
<p class="note"><strong>Note</strong>: The "<strong>Reset password</strong>" token is valid only for the <strong>next 60 minutes</strong> after it’s generated. Post that, it expires and you need to rerun the same request to generate a new token. </p>

**API Endpoint**: `/user/reset_password`

**Method**: `POST`

## Headers

- **Content-Type** (required)

## Request Body

```json
{
	"user": {
		"reset_password_token": "abcdefghijklmnop1234567890",
		"password": "your_new_password",
		"password_confirmation": "your_new_password"
	}
}
```

## Response

```json
{
	"notice": "Your password has been reset successfully."
}
```

