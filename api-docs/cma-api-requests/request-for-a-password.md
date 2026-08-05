---
title: "Request for a password"
description: /user/forgot_password
url: /request-for-a-password
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.779Z
updated_at: 2023-05-15T12:38:04.802Z
---

# Request for a password

<p>The <span data-type="inlineCode">Request for a password</span> API helps to get a temporary password to log into an account in case a user has forgotten the login password.</p>
<p>Using this temporary password, you can log in to your account and <a href="/docs/developers/password-related-security/forgot-reset-password" target="_self">set a new password</a> for your Contentstack account.</p>
<p>In the 'Body' section, provide the user's email address in JSON format.<br></p>
<p class="note"><strong>Note:</strong> The “<strong>Reset password</strong>” token that you receive in your email address is valid only for the <strong>next 60 minutes</strong> after it’s generated. Post that, it expires and you need to rerun the <a href="/docs/developers/apis/content-management-api/#reset-password">Reset password</a> API request to generate a new token.</p>

**API Endpoint**: `/user/forgot_password`

**Method**: `POST`

## Headers

- **Content-Type** (required)

## Request Body

```json
{
	"user": {
		"email": "john.doe@contentstack.com"
	}
}
```

## Response

```json
{
	"notice": "If this email address exists, we will send you an email with instructions for resetting your password."
}
```

