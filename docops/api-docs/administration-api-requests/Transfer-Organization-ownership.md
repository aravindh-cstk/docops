---
title: "Transfer Organization ownership"
description: /organizations/{organization_uid}/transfer-ownership
url: /transfer-organization-ownership
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:16.088Z
updated_at: 2026-04-07T12:55:16.088Z
---

# Transfer Organization ownership

<p>The <span data-type="inlineCode">Transfer organization ownership</span> call transfers the ownership of an Organization to another user. When the call is executed, an email invitation for accepting the ownership of a particular Organization is sent to the specified user.
</p><p>Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the Organization gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the Organization.
</p><p>When executing the API call, provide the Organization UID.</p>

**API Endpoint**: `/organizations/{organization_uid}/transfer-ownership`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of the organization that you want to transfer to other user.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken of the user.</p>

## Request Body

```json
{
	"transfer_to": "abc@sample.com"
}
```

## Response

```json
{
	"notice": "Email has been successfully sent to the user."
}
```

