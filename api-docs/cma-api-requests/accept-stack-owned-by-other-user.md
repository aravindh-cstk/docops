---
title: "Accept stack owned by other user"
description: /stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}
url: /accept-stack-owned-by-other-user
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:06.615Z
updated_at: 2023-05-26T10:25:53.948Z
---

# Accept stack owned by other user

<p>The <span data-type="inlineCode">Accept stack owned by other user</span> call allows a user to accept the ownership of a particular stack via an email invitation.
</p>
<p>The email invitation includes a link (i.e.,<span data-type="inlineCode"> /stack/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid} </span>) that consists of the ownership token, the API key, and user uid.
</p>
<p>Once the user accepts the invitation by clicking on the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack.
</p>
<p>When executing the API call, in the 'URL Parameters' section, you need to provide the ownership token and the user uid that you received in the invitation mail.
</p>

**API Endpoint**: `/stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}`

**Method**: `GET`

## URL Parameters

- **ownership_token** (required)
  <p>Enter the ownership token received via email by another user.</p>

## Query Parameters

- **api_key** (required)
  <p>Enter the stack API key.</p>
- **uid** (required)
  <p>Enter the user uid.</p>

## Response

```json
{
	"notice": "Ownership transferred successfully."
}
```

