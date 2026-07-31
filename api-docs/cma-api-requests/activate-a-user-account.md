---
title: "Activate a user account"
description: /user/activate/{user_activation_token}
url: /activate-a-user-account
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:07.575Z
updated_at: 2023-01-05T14:09:07.575Z
---

# Activate a user account

<p>The <span data-type="inlineCode">Activate a user account</span> call activates the account of a user after signing up. For account activation, you will require the token received in the activation email.
</p>

**API Endpoint**: `/user/activate/{user_activation_token}`

**Method**: `POST`

## URL Parameters

- **user_activation_token** (required)
  <p>Enter the activation token received on the registered email address. You can find the activation token in the activation URL sent to the email address used while signing up.
</p>

## Request Body

```json
{
"user": {
"first_name": "your_first_name",
"last_name": "your_last_name",
"password": "your_password",
"password_confirmation": "confirm_your_password"
}
}
```

## Response

```json
{
	"notice": "Your account has been activated."
}
```

