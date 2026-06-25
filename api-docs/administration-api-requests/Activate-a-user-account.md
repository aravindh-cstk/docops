---
title: "Activate a user account"
description: POST /user/activate/{user_activation_token}
url: developer-apis/administration-api/requests/activate-a-user-account
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Activate a user account

**POST** `/user/activate/{user_activation_token}`

The Activate a user account call activates the account of a user after signing up. For account activation, you will require the token received in the activation email.

## URL Parameters

- **user_activation_token** (required)
  Enter the activation token received on the registered email address. You can find the activation token in the activation URL sent to the email address used while signing up.
  Default: `bltf36705c7361d4734`

## Sample Request

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

## Sample Response

```json
{
	"notice": "Your account has been activated."
}
```

