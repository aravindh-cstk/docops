---
title: "Activate a user account"
description: POST /user/activate/{user_activation_token}
url: developers/apis/content-management-api/requests/activate-a-user-account
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Activate a user account


**Method:** `POST`  
**Endpoint:** `/user/activate/{user_activation_token}`

The Activate a user account call activates the account of a user after signing up. For account activation, you will require the token received in the activation email.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| user_activation_token | bltf36705c7361d4734 | Enter the activation token received on the registered email address. You can find the activation token in the activation URL sent to the email address used whil |

**Request Body:**

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

**Response (200):**

```json
{
	"notice": "Your account has been activated."
}
```
