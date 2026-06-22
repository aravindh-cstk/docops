---
title: "Accept stack owned by other user"
description: GET /stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}
url: developers/apis/content-management-api/requests/accept-stack-owned-by-other-user
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-05-26
---

# Accept stack owned by other user


**Method:** `GET`  
**Endpoint:** `/stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}`

The Accept stack owned by other user call allows a user to accept the ownership of a particular stack via an email invitation.

The email invitation includes a link (i.e., /stack/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid} ) that consists of the ownership token, the API key, and user uid.

Once the user accepts the invitation by clicking on the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack.

When executing the API call, in the 'URL Parameters' section, you need to provide the ownership token and the user uid that you received in the invitation mail.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| ownership_token | blt2add6864996aa9f2 | Enter the ownership token received via email by another user. |

| api_key | blt9f902ab2842258eb | Enter the stack API key. |

| uid | Enter_your_user_uid | Enter the user uid. |

**Response (200):**

```json
{
	"notice": "Ownership transferred successfully."
}
```
