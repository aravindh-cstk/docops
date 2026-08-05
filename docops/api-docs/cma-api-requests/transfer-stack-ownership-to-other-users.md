---
title: "Transfer stack ownership to other users"
description: /stacks/transfer_ownership
url: /transfer-stack-ownership-to-other-users
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.444Z
updated_at: 2023-01-05T14:09:08.444Z
---

# Transfer stack ownership to other users

<p>The <span data-type="inlineCode">Transfer stack ownership to other users</span> call sends the specified user an email invitation for accepting the ownership of a particular stack.
</p>
<p>Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the stack.</p>
<p>In the 'Body' section, you need to provide the email address of the user to whom you wish to transfer the ownership of the stack in JSON format.
</p>
<p class="add-resource"><strong>Additional Resource</strong>: To transfer ownership of a stack to other users via Contentstack's UI, refer to the <a href="/docs/developers/set-up-stack/transfer-stack-ownership">Transfer Stack Ownership</a> article.&nbsp;</p>

**API Endpoint**: `/stacks/transfer_ownership`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

```json
{
	"transfer_to": "manager@example.com"
}
```

## Response

```json
{
	"notice": "An email has been sent to abc@example.com about transferring ownership of 'My New Stack'. The ownership will be transferred after the other user accepts ownership."
}
```

