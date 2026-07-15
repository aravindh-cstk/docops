---
title: "Transfer stack ownership to other users"
description: POST /stacks/transfer_ownership
url: developer-apis/content-management-api-requests/transfer-stack-ownership-to-other-users
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Transfer stack ownership to other users

**POST** `/stacks/transfer_ownership`

The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the stack.

In the 'Body' section, you need to provide the email address of the user to whom you wish to transfer the ownership of the stack in JSON format.

**Additional Resource**: To transfer ownership of a stack to other users via Contentstack's UI, refer to the [Transfer Stack Ownership](../../../../../cs-docs/developers/set-up-stack/transfer-stack-ownership.md) article.

## Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

```json
{
	"transfer_to": "manager@example.com"
}
```

## Sample Response

```json
{
	"notice": "An email has been sent to abc@example.com about transferring ownership of 'My New Stack'. The ownership will be transferred after the other user accepts ownership."
}
```

